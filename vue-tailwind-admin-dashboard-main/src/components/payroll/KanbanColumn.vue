<template>
  <div 
    :class="[
      'flex-1 min-w-0 bg-white rounded-xl border flex flex-col transition-all duration-300 shadow-sm',
      column.borderColor,
      isEmpty ? 'collapsed-column' : 'h-full'
    ]"
  >
    <div class="p-4 pr-0 flex-shrink-0">
      <div class="flex items-center justify-between mr-4">
        <div class="flex items-center space-x-2">
          <span class="text-lg">{{ column.icon }}</span>
          <h3 class="font-bold text-slate-900 text-sm">{{ column.title }}</h3>
        </div>
        <div class="flex items-center space-x-2">
          <span 
            v-if="count > 0" 
            class="bg-white/80 text-slate-700 px-2 py-1 rounded-full text-xs font-semibold shadow-sm"
          >
            {{ count }}
          </span>
          
          <div 
            v-if="isProcessing && count > 0" 
            class="w-8 h-8 bg-white/80 rounded-full flex items-center justify-center shadow-sm"
          >
            <div class="w-4 h-4 border-2 border-indigo-600 border-t-transparent rounded-full processing-spinner"></div>
          </div>
          
          <button 
            v-if="!isProcessing && hasAiActions && count > 0"
            @click="$emit('openAI', column.id)"
            class="w-8 h-8 bg-white/80 hover:bg-white hover:scale-105 rounded-full flex items-center justify-center transition-all shadow-sm"
          >
            <svg class="w-4 h-4 text-purple-600" fill="currentColor" viewBox="0 0 20 20">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
            </svg>
          </button>
        </div>
      </div>
    </div>
    
    <div v-if="!isEmpty" class="flex-1 overflow-y-auto px-3 pb-3 space-y-3">
      <CompanyCard 
        v-for="company in companies" 
        :key="company.id" 
        :company="company"
        @click="$emit('companyClick', company)"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import type { Column } from '@/data/columns'
import type { Company } from '@/data/companies'
import CompanyCard from './CompanyCard.vue'

interface Props {
  column: Column
  companies: Company[]
}

const props = defineProps<Props>()

defineEmits<{
  openAI: [columnId: string]
  companyClick: [company: Company]
}>()

const count = computed(() => props.companies.length)
const isEmpty = computed(() => count.value === 0)
const isProcessing = computed(() => props.column.id === 'processing')
const hasAiActions = computed(() => props.column.aiActions.length > 0)
</script>

<style scoped>
.collapsed-column {
  min-height: 80px;
  max-height: 80px;
  min-width: 275px;
}

.processing-spinner {
  animation: spin 1s linear infinite;
}

@keyframes spin {
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
}
</style>