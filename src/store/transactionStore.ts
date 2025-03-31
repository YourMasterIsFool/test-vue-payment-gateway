import { defineStore } from "pinia";
import type { TransactionPaymentResponseDto } from "../data/dto/TrasactionPaymentResponseDto";
import { TransactionRepositoryImpl } from "../data/repository/TransactionRepositoryImpl";
import { GetDetailTransactionPaymentUsecase } from "../usecases/transaction/GetDetailTransactionPaymentUsecase";
import { SimulateTransactionPayment } from "../usecases/transaction/SimulateTransactionPayment";
import { GetListTransactionUsecase } from "../usecases/transaction/GetListTransactionUsecase";
import type { Transaction } from "../domain/models/Transaction";

const transactionRepo = new TransactionRepositoryImpl();
const getDetailTransactionPaymentUsecase =  new GetDetailTransactionPaymentUsecase(transactionRepo);
const simulateTransactionPayment =  new SimulateTransactionPayment(transactionRepo);
const getListTransactionUsecase =  new GetListTransactionUsecase(transactionRepo);


export const useTransactionStore = defineStore('transactionStore', {
	state() {
	    return {
	    	transaction: null as TransactionPaymentResponseDto | null,
	    	loading: false,
	    	simulateLoading: false,
	    	listTransaction: [] as Transaction[] | null,
	    }
	},
	actions: {
		async detail(orderId: string) {
			this.loading = true;
			try {
				const response = await getDetailTransactionPaymentUsecase.execute(orderId);

				console.log(response)

				this.transaction = response
				this.loading = false

			}
			catch(e) {
				this.loading = false
				throw e
			}
			finally{ 
				this.loading = false
			}
		},
		async simulate(orderId: string) {
			this.simulateLoading = true;
			try {
				const response = await simulateTransactionPayment.execute(orderId);

				console.log(response);

				this.simulateLoading = false

			}
			catch(e) {
				this.simulateLoading = false
				throw e
			}
			finally{ 
				this.simulateLoading = false
			}
		},
		async findAll() {
			this.loading =  true
			try {
				const response = await getListTransactionUsecase.execute();

				this.listTransaction =  response;

				console.log(this.listTransaction)
				this.loading = false

			}
			catch(e) {
				this.loading = false
				throw e
			}
			finally{ 
				this.loading = false
			}
		}
	}
})