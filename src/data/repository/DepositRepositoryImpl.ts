import type { Transaction } from "../../domain/models/Transaction";
import type { DepositRepository } from "../../domain/repository/DepositRepository";
import { apiClient } from "../../infrastructure/apiClient";
import type { CreateDepositDto } from "../dto/CreateDepositDto";

export class DepositRepositoryImpl implements DepositRepository {

	async create(schema: CreateDepositDto): Promise<Transaction> {
		try {
			const response = await apiClient('/deposit',{
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