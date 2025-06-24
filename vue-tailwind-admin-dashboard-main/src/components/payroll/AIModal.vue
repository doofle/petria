<template>
  <div class="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center">
    <div class="bg-white rounded-xl shadow-2xl max-w-md w-full m-4 p-6">
      <div class="flex items-center space-x-3 mb-6">
        <div class="w-12 h-12 bg-gradient-to-r from-purple-600 to-indigo-600 rounded-xl flex items-center justify-center">
          <svg class="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
          </svg>
        </div>
        <div>
          <h3 class="text-lg font-bold text-slate-900">Petria AI Assistant</h3>
          <p class="text-sm text-slate-500">Automate this workflow stage</p>
        </div>
      </div>
      
      <div class="mb-6">
        <p class="text-slate-700 mb-4">Would you like Petria AI to:</p>
        <div class="space-y-3">
          <label 
            v-for="action in column?.aiActions" 
            :key="action"
            class="flex items-center space-x-3 p-3 border border-slate-200 rounded-lg hover:bg-slate-50 cursor-pointer"
          >
            <input 
              type="checkbox" 
              :checked="true"
              class="rounded border-gray-300 text-purple-600 focus:ring-purple-500"
            >
            <span class="text-sm text-slate-700">{{ action }}</span>
          </label>
        </div>
        <div class="mt-4 p-3 bg-purple-50 rounded-lg border border-purple-200">
          <div class="flex items-center space-x-2">
            <InfoCircleIcon class="w-4 h-4 text-purple-600" />
            <span class="text-sm text-purple-800">
              This will process <strong>{{ companyCount }}</strong> companies in this column.
            </span>
          </div>
        </div>
      </div>
      
      <div class="flex space-x-3">
        <Button 
          @click="$emit('confirm', columnId)"
          class="bg-gradient-to-r from-purple-600 to-indigo-600 text-white flex-1"
        >
          Confirm & Execute
        </Button>
        <Button 
          @click="$emit('close')"
          variant="outline"
        >
          Cancel
        </Button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { columns } from '@/data/columns'
import { usePayrollData } from '@/composables/usePayrollData'
import Button from '@/components/ui/Button.vue'
import { InfoCircleIcon } from '@/icons'

interface Props {
  columnId: string
}

const props = defineProps<Props>()

defineEmits<{
  close: []
  confirm: [columnId: string]
}>()

const { getCompaniesByStage } = usePayrollData()

const column = computed(() => columns.find(col => col.id === props.columnId))
const companyCount = computed(() => getCompaniesByStage(props.columnId).value.length)
</script>