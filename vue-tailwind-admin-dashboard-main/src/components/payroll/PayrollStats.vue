<template>
  <div class="hidden lg:flex items-center space-x-6 text-sm">
    <div class="text-center">
      <div class="font-semibold text-slate-900">{{ totalCompanies }}</div>
      <div class="text-slate-500">Total</div>
    </div>
    <div class="text-center">
      <div class="font-semibold text-green-600">{{ completedCompanies }}</div>
      <div class="text-slate-500">Complete</div>
    </div>
    <div class="text-center">
      <div class="font-semibold text-orange-600">{{ pendingCompanies }}</div>
      <div class="text-slate-500">Pending</div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { usePayrollData } from '@/composables/usePayrollData'

const { totalCompanies, completedCompanies, pendingCompanies } = usePayrollData()
</script>