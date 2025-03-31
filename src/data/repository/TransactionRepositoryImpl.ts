import type { Transaction } from "../../domain/models/Transaction";
import type { TransactionRepository } from "../../domain/repository/TransactionRepository";
import { apiClient } from "../../infrastructure/apiClient";
import type { TransactionPaymentResponseDto } from "../dto/TrasactionPaymentResponseDto";

export class TransactionRepositoryImpl  implements TransactionRepository {
	async detail(orderId: string): Promise<TransactionPaymentResponseDto> {
	    try {
	    	const response = await apiClient(`/transaction/${orderId}/payment`, {
	    		method: "GET"
	    	});

	    	console.log(response)
	    	return response.data
	    }
	    catch(e) {
	    	throw e;
	    }
	}
	async simulatePayment(orderId: string): Promise<void> {
	    try {
	    	const response = await apiClient(`/transaction/${orderId}/simulate/qr_code`, {
	    		method: "POST"
	    	});

	    	console.log(response)
	    	return response.data
	    }
	    catch(e) {
	    	throw e;
	    }
	}
	async findAll(): Promise<Transaction[]> {
	     try {
	    	const response = await apiClient(`/transaction/list`, {
	    		method: "GET"
	    	});

	    	console.log(response)
	    	return response.data
	    }
	    catch(e) {
	    	throw e;
	    }
	}
}