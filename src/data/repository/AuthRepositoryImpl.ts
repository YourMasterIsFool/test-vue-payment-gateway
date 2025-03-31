import type { AuthRepository } from "../../domain/repository/AuthRepository";
import { apiClient } from "../../infrastructure/apiClient";
import type { LoginDto } from "../dto/LoginDto";

export class AuthRepositoryImpl  implements AuthRepository {
	async login(schema: LoginDto): Promise<string> {
	    
	    try {
	    	const result = await apiClient('/login', {
	    		method: "POST",
	    		body: schema
	    	});

	    	return result.data
	    }
	    catch(e) {
	    	throw e
	    }
	}

	async logout(): Promise<void> {
	    
	    try {
	    	const result = await apiClient('/logout', {
	    		method: "POST",
	    	});

	    	return result.data
	    }
	    catch(e) {
	    	throw e
	    }
	}

}