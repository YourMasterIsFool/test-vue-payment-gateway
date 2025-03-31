<script lang="ts" setup>
import MainContent from '../../components/commons/MainContent.vue';
import { useWithdraw } from '../../composable/useWithdraw';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import {
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';

const { form, handleSubmit, defaultValue, isLoading } = useWithdraw();
</script>

<template>
  <div class="w-full flex items-center justify-center py-10">
    <MainContent title="Test Deposit" class="max-w-lg w-full">
      <form
        class="w-full rounded-lg border border-gray-300 shadow-lg bg-white p-8 space-y-6"
        @submit="handleSubmit"
      >
        <FormField v-slot="{ componentField }" name="order_id">
          <FormItem>
            <FormLabel class="text-sm font-semibold text-gray-700">Order ID</FormLabel>
            <FormControl>
              <Input type="text" readonly placeholder="Auto-generated Order ID" v-bind="componentField" class="bg-gray-100" />
            </FormControl>
            <FormMessage />
          </FormItem>
        </FormField>

        <FormField v-slot="{ componentField }" name="timestamp">
          <FormItem>
            <FormLabel class="text-sm font-semibold text-gray-700">Timestamp</FormLabel>
            <FormControl>
              <Input type="text" readonly placeholder="Timestamp" v-bind="componentField" class="bg-gray-100" />
            </FormControl>
            <FormMessage />
          </FormItem>
        </FormField>

        <FormField v-slot="{ componentField }" name="amount">
          <FormItem>
            <FormLabel class="text-sm font-semibold text-gray-700">Amount</FormLabel>
            <FormControl>
              <Input type="number" placeholder="Enter amount" v-bind="componentField" class="border-gray-300" />
            </FormControl>
            <FormMessage />
          </FormItem>
        </FormField>

        <Button type="submit" class="w-full flex justify-center items-center py-2">
          <span v-if="isLoading">Loading membuat deposit...</span>
          <span v-else>Create Withdraw</span>
        </Button>
      </form>
    </MainContent>
  </div>
</template>