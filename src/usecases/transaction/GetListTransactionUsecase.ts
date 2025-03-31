import type { TransactionRepositoryImpl } from "../../data/repository/TransactionRepositoryImpl";
import type { Transaction } from "../../domain/models/Transaction";

export class GetListTransactionUsecase {
	constructor(private readonly transactionRepo: TransactionRepositoryImpl) {}

	async execute(): Promise<Transaction[]> {
		return await this.transactionRepo.findAll();
	}
}