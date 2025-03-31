import type { TransactionRepositoryImpl } from "../../data/repository/TransactionRepositoryImpl";

export class SimulateTransactionPayment {
	constructor(private readonly transactionRepo: TransactionRepositoryImpl) {}

	async execute(orderId: string): Promise<void> {
		return await this.transactionRepo.simulatePayment(orderId);
	}
}