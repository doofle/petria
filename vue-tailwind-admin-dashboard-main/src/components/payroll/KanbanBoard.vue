<template>
  <div class="flex-1 overflow-x-auto overflow-y-hidden kanban-container">
    <div class="flex h-full min-w-max py-6 pl-6 space-x-4">
      <KanbanColumn 
        v-for="column in columns" 
        :key="column.id"
        :column="column"
        :companies="getCompaniesByStage(column.id).value"
        @openAI="handleOpenAI"
        @companyClick="handleCompanyClick"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { columns } from '@/data/columns'
import { usePayrollData } from '@/composables/usePayrollData'
import KanbanColumn from './KanbanColumn.vue'
import type { Company } from '@/data/companies'

const { getCompaniesByStage } = usePayrollData()

const emit = defineEmits<{
  openAI: [columnId: string]
  companyClick: [company: Company]
}>()

const handleOpenAI = (columnId: string) => {
  // Emit to parent component
  emit('openAI', columnId)
}

const handleCompanyClick = (company: Company) => {
  // Emit to parent component
  emit('companyClick', company)
}
</script>

<style scoped>
.kanban-container::-webkit-scrollbar {
  height: 8px;
}

.kanban-container::-webkit-scrollbar-track {
  background: #f1f5f9;
  border-radius: 4px;
}

.kanban-container::-webkit-scrollbar-thumb {
  background: #cbd5e1;
  border-radius: 4px;
}

.kanban-container::-webkit-scrollbar-thumb:hover {
  background: #94a3b8;
}
</style>