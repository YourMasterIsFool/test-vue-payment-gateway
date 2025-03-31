<script lang="ts" setup>
        
    import {
        useTransaction 
    } from  "@/composable/useTransaction"
    import { Input } from '@/components/ui/input'
    import { Button } from '@/components/ui/button'

    import pusher from "@/pkg/pusher";

    import {
        onMounted, onUnmounted, ref
    } from 'vue';
    
    import {
        useRoute 
    } from 'vue-router';

    const transactionStatus = ref(null);

    const loadingCallback =  ref<boolean>(false);

    onMounted(() => {
      const channel = pusher.subscribe("payments");

      channel.bind("payment-success", (data) => {
        console.log("Payment Success:", data.transaction);
        transactionStatus.value = `Order ${data.transaction.external_id} is ${data.transaction.status.name}`;
      });
    });

    onUnmounted(() => {
      pusher.unsubscribe("payment-channel");
    });


    const route = useRoute();
    const {
        loading, 
        getDetail,
        transaction,
        simulatePayment,
        simulateLoading,
    } = useTransaction()

    onMounted(() => [
        getDetail(route.params.order_id)
    ])


</script>


<template>
    <div class="w-full flex justify-center lg:p-8">
        <div v-if="loading">
                loading payment ....
        </div>
        <div v-else class="lg:w-2/5 shadow-md lg:p-6 p-4 rounded-lg">
            <h1 class="text-center font-bold lg:text-xl text-base">
                Test Payment
             </h1>
            <div class="lg:mt-4 mt-3">
                <div class="border rounded-md p-4 text-sm">
                        Silahkan Scan QR Code / download QR / Screenshoot QR dibawah ini menggunakan aplikasi digital wallet ataupun aplikasi bank kamu
                </div>

                <div class="border flex justify-center rounded-md p-4 text-sm">
                    <img class="lg:w-[150] lg:h-[150] h-[75] w-[75]" :src="transaction?.qr_code"/>
                </div>
                <div class="flex border border rounded-lg p-4 space-x-3 md:mt-3 mt-2 items-center">
                    <span class="text-gray-600 text-sm"> Amount  :</span>
                    <span class="font-bold">
                        {{transaction?.amount}}
                    </span>
                </div>

                <div v-if="transactionStatus" class="bg-green-100 p-8 text-green-600 border-green-600 rounded-md">
                    {{
                        transactionStatus
                    }}
                </div>


                <div v-else class="border rounded-md p-4 text-sm">
                    <Button class="lg:mb-4 mb-3" @click="simulatePayment(route.params.order_id)" :disabled="simulateLoading">
                        <span v-if="simulateLoading">
                            Simulate loading..
                        </span>
                        <span v-else>
                            test Simulate
                        </span>
                    </Button>
                    <span class="text-orange-600 lg:mt-4 mt-3 text-xs bg-orange-100 border border-orange-600 px-6 py-1 rounded-full">
                        test simulate hanya berlaku pada dev mode/sadnbox mode
                    </span>
                </div>
                

            </div>
        </div>
    </div>
</template>