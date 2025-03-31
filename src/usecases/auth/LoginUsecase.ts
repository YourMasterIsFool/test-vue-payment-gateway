import type { LoginDto } from "../../data/dto/LoginDto";
import type { AuthRepositoryImpl } from "../../data/repository/AuthRepositoryImpl";

export class LoginUsecase  {
	constructor(private readonly authRepo: AuthRepositoryImpl) {

	}
	async execute(schema:LoginDto ):Promise<string> {

		return this.authRepo.login(schema);
	}
}