import type { AuthRepositoryImpl } from "../../data/repository/AuthRepositoryImpl";

export class LogoutUsecase  {
	constructor(private readonly authRepo: AuthRepositoryImpl) {

	}
	async execute():Promise<string> {

		return this.authRepo.logout;
	}
}