import type { CreateDepositDto } from "../../data/dto/CreateDepositDto";
import type { DepositRepositoryImpl } from "../../data/repository/DepositRepositoryImpl";
import type { Transaction } from "../../domain/models/Transaction";

export class CreateDepositUsecase {
	constructor(private readonly depositRepo: DepositRepositoryImpl) {}
	async execute(schema: CreateDepositDto):Promise<Transaction> {
		return await this.depositRepo.create(schema);
	}
}