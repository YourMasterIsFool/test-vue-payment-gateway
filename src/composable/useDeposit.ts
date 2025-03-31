import { useForm } from 'vee-validate'
import { toTypedSchema } from '@vee-validate/zod'
import * as z from 'zod'
import {
	v4 as uuidv4
} from 'uuid';

import moment from 'moment';
import { useDepositStore } from '../store/depositStore';
import { storeToRefs } from 'pinia';
import type { CreateDepositDto } from '../data/dto/CreateDepositDto';
import { useRouter } from 'vue-router';
import type { Transaction } from '../domain/models/Transaction';
import type { LoginDto } from '../data/dto/LoginDto';
import { CONFIG } from '../config/config';
import { onBeforeMount } from 'vue';


export function useDeposit() {


const depositStore = useDepositStore();

const {
	isLoading
} = storeToRefs(depositStore);

const formSchema = toTypedSchema(z.object({
  order_id: z.string(),
  timestamp: z.string(),
  amount: z.number().min(1000, {
  	message: "amount harus lebih dari 1000"
  }),
}))

const defaultValue =  {
	order_id: 'order-'+uuidv4(),
	timestamp: moment().toISOString(),
	amount: 0
}

const form = useForm({
  initialValues: defaultValue,
  validationSchema: formSchema,
})

const router = useRouter();

const handleSubmit =  form.handleSubmit( async (values) => {
	const schemaDeposit: CreateDepositDto = {
		order_id: values.order_id,
		amount: values.amount,
		timestamp: values.timestamp,
	}

	await depositStore.createDeposit(schemaDeposit,(data:Transaction) => {
		console.log()
		router.push({
			name:'payment',
			params: {
				order_id: data.external_id
			}

		})
	});
})



	return {
		form,
		defaultValue,
		handleSubmit,
		isLoading,

	}

}