<script lang="ts" setup>
     import {
        useAuth
     } from '@/composable/useAuth'



    import { Button } from '@/components/ui/button'
    import { Input } from '@/components/ui/input'

        import {
          FormControl,
          FormDescription,
          FormField,
          FormItem,
          FormLabel,
          FormMessage,
        } from '@/components/ui/form'
    const {
        errors, 
        token,
        handleSubmit
    } = useAuth();


</script>

<template>
    <div class="w-full flex justify-center lg:pt-20">
        <div class="lg:w-1/3 flex flex-col items-center shadow-md border p-8 rounded-xl border-gray-200">
            <h1 class="lg:text-xl text-center font-bold lg:mb-6 mb-4">
                Login
            </h1>
           <form class="w-full space-y-6 " @submit="handleSubmit">
                <div v-if="errors" class="bg-red-100 text-red-600 border-red-600 p-4 rounded-xl my-3">
                        {{errors.response?.message}}
                </div>
                <FormField v-slot="{ componentField }" name="email">
                  <FormItem>
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                      <Input type="text" placeholder="insert email" v-bind="componentField" />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                </FormField>
                <FormField v-slot="{ componentField }" name="password">
                  <FormItem>
                    <FormLabel>Password</FormLabel>
                    <FormControl>
                      <Input type="text" placeholder="Insert password" v-bind="componentField" />
                    </FormControl>           
                    <FormMessage />
                  </FormItem>
                </FormField>
                <Button type="submit">
                  Submit
                </Button>
              </form>
           
        </div>
    </div>
</template>