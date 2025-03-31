import type { LoginDto } from "../../data/dto/LoginDto";

export interface AuthRepository {
	login(schema:LoginDto):Promise<string>,
	logout(): Promise<void>,
}