import { useForm } from 'vee-validate'
import { toTypedSchema } from '@vee-validate/zod'
import * as z from 'zod'
import {
	v4 as uuidv4
} from 'uuid';

import moment from 'moment';
import { useWithdrawStore } from '../store/withdrawStore';
import { storeToRefs } from 'pinia';
import type { CreateWithdrawDto } from '../data/dto/CreateWithdrawDto';
import { useRouter } from 'vue-router';
import type { Transaction } from '../domain/models/Transaction';


export function useWithdraw() {


const WithdrawStore = useWithdrawStore();

const {
	isLoading
} = storeToRefs(WithdrawStore);

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
	const schemaWithdraw: CreateWithdrawDto = {
		order_id: values.order_id,
		amount: values.amount,
		timestamp: values.timestamp,
	}

	await WithdrawStore.createWithdraw(schemaWithdraw,(data:Transaction) => {
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