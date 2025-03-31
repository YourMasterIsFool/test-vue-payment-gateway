import { ref } from "vue";

export function useLoadingProsesAlert() {


	const loading =  ref<boolean>(true);



	const toogleLoading =  (value:boolean) => {
		loading.value =  value
	}


	return  {
		loading,
		toogleLoading
	}
}