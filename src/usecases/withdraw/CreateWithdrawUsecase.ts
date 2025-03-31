import type { CreateWithdrawDto } from "../../data/dto/CreateWithdrawDto";
import type { WithdrawRepositoryImpl } from "../../data/repository/WithdrawRepositoryImpl";
import type { Transaction } from "../../domain/models/Transaction";

export class CreateWithdrawUsecase {
	constructor(private readonly WithdrawRepo: WithdrawRepositoryImpl) {}
	async execute(schema: CreateWithdrawDto):Promise<Transaction> {
		return await this.WithdrawRepo.create(schema);
	}
}