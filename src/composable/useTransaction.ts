import { storeToRefs } from "pinia";
import { useTransactionStore } from "../store/transactionStore";

export function useTransaction() {
	const transactionStore =  useTransactionStore();

	const {
		loading,
		transaction,
		simulateLoading,
		listTransaction,
	} =  storeToRefs(transactionStore);



	const getDetail = async(orderId:string) => {

		await transactionStore.detail(orderId);
	}

	const simulatePayment = async(orderId:string) => {
		await transactionStore.simulate(orderId);
	}

	const findAll = async() => {
		await transactionStore.findAll();
	}
	return {
		loading, transaction, getDetail,
		simulatePayment, simulateLoading,
		listTransaction,
		findAll
	}
}