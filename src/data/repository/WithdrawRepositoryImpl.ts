import type { Transaction } from "../../domain/models/Transaction";
import type { WithdrawRepository } from "../../domain/repository/WithdrawRepository";
import { apiClient } from "../../infrastructure/apiClient";
import type { CreateWithdrawDto } from "../dto/CreateWithdrawDto";

export class WithdrawRepositoryImpl implements WithdrawRepository {

	async create(schema: CreateWithdrawDto): Promise<Transaction> {
		try {
			const response = await apiClient('/withdraw',{
				method: "POST",
				body: schema
			});

			return response.data;
		}	    

		catch(e) {
			throw e;
		}
	}
}