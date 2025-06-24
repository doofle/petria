<template>
  <div 
    class="bg-white rounded-lg shadow-sm p-3 cursor-pointer card-hover transition-all duration-200 border border-white/50 hover:border-slate-200" 
    @click="$emit('click', company)"
  >
    <div class="flex items-start justify-between mb-2">
      <h4 class="font-semibold text-slate-900 text-sm leading-tight">{{ company.name }}</h4>
      <div class="flex items-center space-x-1">
        <div 
          v-if="isApproved" 
          class="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0"
        >
          <CheckIcon class="w-3 h-3 text-white" />
        </div>
        <div 
          v-if="isComplete" 
          class="w-5 h-5 bg-purple-500 rounded-full flex items-center justify-center flex-shrink-0"
        >
          <CheckIcon class="w-3 h-3 text-white" />
        </div>
        <div v-if="isSignedOff" class="text-xs text-green-600 font-medium">Signed Off</div>
      </div>
    </div>
    
    <div class="text-xs text-slate-500 mb-2">{{ company.lastUpdate }}</div>
    
    <div class="flex justify-between items-center text-xs text-slate-600">
      <span>{{ company.employees }} employees</span>
      <span class="font-medium">{{ company.monthlyPayroll }}</span>
    </div>
    
    <div 
      v-if="company.notes" 
      class="bg-slate-50 p-2 rounded text-xs text-slate-700 mt-2 whitespace-pre-line"
    >
      {{ company.notes }}
    </div>
    
    <div v-if="company.processing" class="flex items-center space-x-2 mt-2">
      <div class="w-2 h-2 bg-purple-500 rounded-full processing-dots"></div>
      <span class="text-xs text-purple-600 font-medium">Processing...</span>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import type { Company } from '@/data/companies'
import { CheckIcon } from '@/icons'

interface Props {
  company: Company
}

const props = defineProps<Props>()

defineEmits<{
  click: [company: Company]
}>()

const isApproved = computed(() => props.company.stage === 'client-approved')
const isComplete = computed(() => props.company.stage === 'complete')
const isSignedOff = computed(() => ['client-approved', 'processing', 'complete'].includes(props.company.stage))
</script>

<style scoped>
.card-hover:hover {
  transform: translateY(-2px);
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
}

.processing-dots {
  animation: pulse 1.5s ease-in-out infinite;
}
</style>