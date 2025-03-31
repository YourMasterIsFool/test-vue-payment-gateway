<script lang="ts" setup>
    import MainContent from '../../components/commons/MainContent.vue';
    import {useDeposit} from '../../composable/useDeposit';
    import {useAuth} from '../../composable/useAuth';
    import {
        onMounted, onBeforeMount
    } from 'vue';

    import {
          FormControl,
          FormDescription,
          FormField,
          FormItem,
          FormLabel,
          FormMessage,
     } from '@/components/ui/form'

    import { Button } from '@/components/ui/button'
    import { Input } from '@/components/ui/input'

    const {
        getTestToken
    } = useAuth()

    onMounted(() => {
        getTestToken()
    })

    const {
        form, 
        handleSubmit,
        defaultValue,
        isLoading
    } = useDeposit()



</script>


<template>
    <div class="w-full flex items-center justify-center">
    <MainContent title="Test Deposit">
       <form class="w-[300px] rounded-md border border-gray-200 shadow-md p-6" @submit="handleSubmit">
            <FormField v-slot="{ componentField }" name="order_id" >
              <FormItem >
                <FormLabel>Order Id</FormLabel>
                <FormControl>
                  <Input type="text" readonly placeholder="shadcn" v-bind="componentField" />
                </FormControl>
                <FormMessage />
              </FormItem>
            </FormField>
            <FormField v-slot="{ componentField }" name="timestamp" >
              <FormItem >
                <FormLabel>Timestamp</FormLabel>

                <FormControl>
                  <Input type="text" readonly placeholder="shadcn" v-bind="componentField" />
                </FormControl>
               
                <FormMessage />
              </FormItem>
            </FormField>
            <FormField v-slot="{ componentField }" name="amount" >
              <FormItem >
                <FormLabel>Amount</FormLabel>

                <FormControl>
                  <Input type="number" placeholder="number" v-bind="componentField" />
                </FormControl >     
                <FormMessage />         
              </FormItem>
            </FormField>
            <Button type="submit" class="lg:mt-4 mt-3">
              <span v-if="isLoading">
                    loading membuat deposit ..
              </span>
              <span v-else>
                Create Deposit
              </span>
            </Button>
          </form>
    </MainContent>
    </div>
</template>