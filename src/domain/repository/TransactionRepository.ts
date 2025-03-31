import type { TransactionPaymentResponseDto } from "../../data/dto/TrasactionPaymentResponseDto";
import type { Transaction } from "../models/Transaction";

export interface TransactionRepository {
	detail(orderId:string):Promise<TransactionPaymentResponseDto>
	simulatePayment(orderId:string):Promise<void>
	findAll():Promise<Transaction[]>

}