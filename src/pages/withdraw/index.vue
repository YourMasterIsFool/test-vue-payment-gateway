<script setup lang="ts">
import MainContent from "../../components/commons/MainContent.vue";
import { ref } from "vue";

const exampleTransactionData = ref({
  transaction: {
    id: 99,
    uuid: "925edf69-68f1-4946-b734-464c5d81de0a",
    external_id: "order-4d8515fb-5e13-497f-a24a-d9d5e1752ea6",
    amount: "80000",
    timestamp: "2025-04-01 06:21:39",
    user_id: 2,
    transaction_type_id: 1,
    transaction_status_id: 2,
    created_at: "2025-03-31T06:21:39.000000Z",
    updated_at: "2025-03-31T06:21:45.000000Z",
    status: {
      id: 2,
      name: "Success",
      code: "success",
      created_at: "2025-03-30T06:27:02.000000Z",
      updated_at: "2025-03-30T06:27:02.000000Z",
    },
    type: {
      id: 1,
      name: "Deposit",
      code: "deposit",
      created_at: "2025-03-30T06:27:02.000000Z",
      updated_at: "2025-03-30T06:27:02.000000Z",
    },
  },
});
</script>

<template>
  <div>
    <MainContent title="Withdraw">
      <div>
        Selamat datang pada test payment gateway, di bawah ini adalah penjelasan tentang parameter penggunaan Withdraw
      </div>

      <!-- Parameter Request -->
      <div class="lg:mt-6 mt-4">
        <h1 class="font-bold text-gray-800">Parameter request untuk fitur withdraw</h1>
        <p class="flex items-center lg:mt-6 mt-4 text-black space-x-3">
          <span class="font-normal">METHOD:</span>
          <span class="font-bold">POST</span>
        </p>
        <p class="flex items-center lg:mt-6 lg:mb-6 mb-3 mt-4 text-black space-x-3">
          <span class="font-normal">Authorization:</span>
          <span class="font-bold">Bearer {your_token}</span>
        </p>
        <p class="flex items-center lg:mt-6 lg:mb-6 mb-3 mt-4 text-black space-x-3">
          <span class="font-normal">URL:</span>
          <span class="font-bold">http://localhost:8000/api/withdraw</span>
        </p>

        <table class="table-auto w-full border-collapse border border-gray-200">
          <thead>
            <tr class="bg-gray-100">
              <th class="border px-4 py-2">No</th>
              <th class="border px-4 py-2">Name</th>
              <th class="border px-4 py-2">Type</th>
              <th class="border px-4 py-2">Required</th>
              <th class="border px-4 py-2">Description</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td class="border px-4 py-2">1.</td>
              <td class="border px-4 py-2">order_id</td>
              <td class="border px-4 py-2">String</td>
              <td class="border px-4 py-2">Yes</td>
              <td class="border px-4 py-2">Order Id dibutuhkan untuk sebagai parameter penghubung antara payment gateway dengan product merchant</td>
            </tr>
            <tr>
              <td class="border px-4 py-2">2.</td>
              <td class="border px-4 py-2">amount</td>
              <td class="border px-4 py-2">Float</td>
              <td class="border px-4 py-2">Yes</td>
              <td class="border px-4 py-2">Menggunakan tipe data float/double dengan 2 angka di belakang koma, example: 1000.00</td>
            </tr>
            <tr>
              <td class="border px-4 py-2">3.</td>
              <td class="border px-4 py-2">timestamp</td>
              <td class="border px-4 py-2">Float</td>
              <td class="border px-4 py-2">Yes</td>
              <td class="border px-4 py-2">Menggunakan tipe data float/double dengan 2 angka di belakang koma, example: 1000.00</td>
            </tr>
          </tbody>
        </table>

        <div class="md:mt-6">
          <router-link to="/test-withdraw" class="btn btn-primary w-64">Coba Tes Withdraw</router-link>
        </div>
      </div>

      <!-- Parameter Response -->
      <div class="lg:mt-6 mt-4">
        <h1 class="font-bold text-gray-800">Parameter Response untuk fitur withdraw</h1>
        <p class="flex items-center lg:mt-6 mt-4 text-black space-x-3">
          <span class="font-normal">METHOD:</span>
          <span class="font-bold">GET</span>
        </p>
        <p class="flex items-center lg:mt-6 lg:mb-6 mb-3 mt-4 text-black space-x-3">
          <span class="font-normal">Authorization:</span>
          <span class="font-bold">Bearer {your_token}</span>
        </p>

        <!-- Menampilkan Response Data dalam Tabel -->
        <table class="table-auto w-full border-collapse border border-gray-200 mt-4">
          <thead>
            <tr class="bg-gray-100">
              <th class="border px-4 py-2">Field</th>
              <th class="border px-4 py-2">Value</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(value, key) in exampleTransactionData.transaction" :key="key">
              <td class="border px-4 py-2 font-semibold">{{ key }}</td>
              <td class="border px-4 py-2">
                <template v-if="typeof value === 'object'">
                  <table class="table-auto w-full border-collapse border border-gray-200">
                    <tbody>
                      <tr v-for="(subValue, subKey) in value" :key="subKey">
                        <td class="border px-4 py-2 font-semibold">{{ subKey }}</td>
                        <td class="border px-4 py-2">{{ subValue }}</td>
                      </tr>
                    </tbody>
                  </table>
                </template>
                <span v-else>{{ value }}</span>
              </td>
            </tr>
          </tbody>
        </table>

      </div>
    </MainContent>
  </div>
</template>
