import {
	defineStore
} from 'pinia';
import { DepositRepositoryImpl } from '../data/repository/DepositRepositoryImpl';
import { CreateDepositUsecase } from '../usecases/deposit/CreateDepositUsecase';
import type { CreateDepositDto } from '../data/dto/CreateDepositDto';
import type { Transaction } from '../domain/models/Transaction';


const depositRepoImpl =  new DepositRepositoryImpl();

const createDepositUsecase = new CreateDepositUsecase(depositRepoImpl);

export const useDepositStore = defineStore('depositStore', ({
	state:() => ({
		isLoading: false,
		errors: null as any | null,
	}),
	actions:{
		async createDeposit(schema: CreateDepositDto, callback?:(data:Transaction) => void ){
			this.isLoading =  true;
			try {
				const response = await createDepositUsecase.execute(schema);

				this.isLoading =  false;
				
				if(callback) {
					callback(response)
				}

			}
			catch(e) {
			this.isLoading =  false;

				this.errors =  e
			}
			finally {
				this.isLoading =  false;
			}
		}
	}
}))