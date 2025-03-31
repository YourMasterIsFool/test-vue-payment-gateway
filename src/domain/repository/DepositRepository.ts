import type { CreateDepositDto } from "../../data/dto/CreateDepositDto";
import type { Transaction } from "../models/Transaction";

export interface DepositRepository {
	create(schema: CreateDepositDto): Promise<Transaction>
}