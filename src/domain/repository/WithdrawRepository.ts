import type { CreateDepositDto } from "../../data/dto/CreateDepositDto";
import type { Transaction } from "../models/Transaction";

export interface WithdrawRepository {
	create(schema: CreateDepositDto): Promise<Transaction>
}