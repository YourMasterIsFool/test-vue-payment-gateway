import {
	defineStore
} from 'pinia';
import { WithdrawRepositoryImpl } from '../data/repository/WithdrawRepositoryImpl';
import { CreateWithdrawUsecase } from '../usecases/Withdraw/CreateWithdrawUsecase';
import type { CreateWithdrawDto } from '../data/dto/CreateWithdrawDto';
import type { Transaction } from '../domain/models/Transaction';


const WithdrawRepoImpl =  new WithdrawRepositoryImpl();

const createWithdrawUsecase = new CreateWithdrawUsecase(WithdrawRepoImpl);

export const useWithdrawStore = defineStore('WithdrawStore', ({
	state:() => ({
		isLoading: false,
		errors: null as any | null,
	}),
	actions:{
		async createWithdraw(schema: CreateWithdrawDto, callback?:(data:Transaction) => void ){
			this.isLoading =  true;
			try {
				const response = await createWithdrawUsecase.execute(schema);

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