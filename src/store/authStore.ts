
import {
	defineStore
} from 'pinia';
import { AuthRepositoryImpl } from '../data/repository/AuthRepositoryImpl';
import { LoginUsecase } from '../usecases/auth/LoginUsecase';
import type { LoginDto } from '../data/dto/LoginDto';
import { FetchError } from 'ofetch';
import { LogoutUsecase } from '../usecases/auth/LogoutUsecase';
import { CONFIG } from '../config/config';

const authImpl = new AuthRepositoryImpl()

const loginUsecase =  new LoginUsecase(authImpl);
const logoutUsecase =  new LogoutUsecase(authImpl);



export const useAuthStore = defineStore('authStore', {
	state() {
	    return {
	    	token: null as string | null,
	    	errors: null as any | null,
	    }
	},
	getters: {
		isAuthenticated: (state) => state.token,
	},
	actions: {
		async login(schema:LoginDto, callback?:() => void) {
			try {
				const result = await loginUsecase.execute(schema);
				this.token =  result;

				if(callback){
					callback()
				}

				localStorage.setItem('token', this.token)

			}
			catch(e) {

				console.log('error',e);
				if(e instanceof FetchError) {
					this.errors = e.response.data;
					
				}
				console.log(this.errors);
			
			}
		},
		async getTestToken() {
			const loginSchema: LoginDto = {
				email: CONFIG.testEmail,
				password: CONFIG.testPassword
			}

			const token = localStorage.getItem('token');

			if(!token) {
				await this.login(loginSchema);
			}
		},
		async logout(callback?:() => void) {
			try {
				const result = await logoutUsecase.execute();
				this.token =  null;
				if(callback){
					callback()
				}
				localStorage.removeItem('token', this.token)
			}
			catch(e) {

				console.log('error',e);
				if(e instanceof FetchError) {
					this.errors = e.response.data;
					
				}
				console.log(this.errors);
			
			}
		}
	}
})