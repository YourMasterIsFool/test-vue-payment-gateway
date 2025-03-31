import type { TransactionPaymentResponseDto } from "../../data/dto/TrasactionPaymentResponseDto";
import type { TransactionRepositoryImpl } from "../../data/repository/TransactionRepositoryImpl";

export class GetDetailTransactionPaymentUsecase {
	constructor(private readonly transactionRepo: TransactionRepositoryImpl) {}

	async execute(orderId: string): Promise<TransactionPaymentResponseDto> {
		return await this.transactionRepo.detail(orderId);
	}
}