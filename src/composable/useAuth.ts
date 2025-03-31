import { storeToRefs } from "pinia";
import { useAuthStore } from "../store/authStore";
import { toTypedSchema } from "@vee-validate/zod";
import { z } from "zod";
import { useForm } from "vee-validate";
import type { LoginDto } from "../data/dto/LoginDto";
import { useRouter } from "vue-router";
import { onBeforeMount } from "vue";

export function useAuth() {

	const authStore =  useAuthStore();


	const {
		token,
		errors
	} = storeToRefs(authStore);


	const formSchema =  toTypedSchema(z.object({
		email: z.string({
			message: 'email tidak boleh kosong'
		}),
		password: z.string({
			message: "password tidak boleh kosong"
		})
	}))

	const form = useForm({
		validationSchema: formSchema,
	})

	const router = useRouter();
	const handleSubmit =  form.handleSubmit(async(values) => {
		const loginSchema: LoginDto = {
			email: values.email,
			password: values.password
		}	

		await authStore.login(loginSchema, () => {
			router.push({
				name: 'transaction'
			});
		});

	})

	const handleLogout = async() => {
		await authStore.logout(() => {
			router.push('/login');
		})
	}

	const getTestToken = async () => {
		await authStore.getTestToken();
	}

	return {
		token, handleSubmit, errors, handleLogout,getTestToken

	}
}