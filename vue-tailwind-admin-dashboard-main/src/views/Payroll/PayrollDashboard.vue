<template>
  <AdminLayout>
    <!-- Custom Header for Payroll -->
    <template #header>
      <header class="bg-white border-b border-slate-200 px-6 py-4 flex-shrink-0 shadow-sm">
        <div class="flex items-center justify-between">
          <div class="flex items-center space-x-4">
            <div class="flex items-center space-x-3">
              <div class="w-10 h-10 bg-gradient-to-r from-purple-600 to-indigo-600 rounded-xl flex items-center justify-center shadow-lg">
                <span class="text-white font-bold text-lg">P</span>
              </div>
              <div>
                <h1 class="text-xl font-bold text-slate-900">Petria.ai</h1>
                <p class="text-sm text-slate-500">Enterprise Payroll Management</p>
              </div>
            </div>
          </div>
          
          <!-- Search - Centered -->
          <div class="flex items-center space-x-4">
            <div class="relative">
              <input 
                type="text" 
                placeholder="Search companies..." 
                class="w-80 pl-10 pr-4 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-500 bg-white/70"
              >
              <svg class="w-4 h-4 text-slate-400 absolute left-3 top-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
              </svg>
            </div>
            <button class="px-3 py-2 text-sm border border-slate-300 rounded-lg hover:bg-slate-50 transition-colors">
              <svg class="w-4 h-4 inline mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.414A1 1 0 013 6.707V4z"></path>
              </svg>
              Filter
            </button>
          </div>
          
          <div class="flex items-center space-x-4">
            <!-- Stats -->
            <PayrollStats />
            
            <!-- Actions -->
            <div class="flex items-center space-x-2">
              <button class="p-2 text-slate-600 hover:text-slate-900 hover:bg-slate-100 rounded-lg transition-colors" title="Notifications">
                <BellIcon class="w-5 h-5" />
              </button>
              <button class="p-2 text-slate-600 hover:text-slate-900 hover:bg-slate-100 rounded-lg transition-colors" title="Export">
                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
                </svg>
              </button>
              <button class="p-2 text-slate-600 hover:text-slate-900 hover:bg-slate-100 rounded-lg transition-colors" title="Settings">
                <SettingsIcon class="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </header>
    </template>

    <!-- Main Content -->
    <div class="bg-gray-200 h-full flex flex-col">
      <KanbanBoard 
        @openAI="handleOpenAI" 
        @companyClick="handleCompanyClick"
      />
    </div>

    <!-- AI Modal -->
    <AIModal 
      v-if="showAIModal"
      :column-id="selectedColumnId"
      @close="showAIModal = false"
      @confirm="handleAIConfirm"
    />

    <!-- Company Detail Modal -->
    <CompanyDetailModal
      v-if="showCompanyModal"
      :company="selectedCompany"
      @close="showCompanyModal = false"
    />

    <!-- Activity Log -->
    <ActivityLog v-if="showActivityLog" @close="showActivityLog = false" />
  </AdminLayout>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import AdminLayout from '@/components/layout/AdminLayout.vue'
import KanbanBoard from '@/components/payroll/KanbanBoard.vue'
import PayrollStats from '@/components/payroll/PayrollStats.vue'
import AIModal from '@/components/payroll/AIModal.vue'
import CompanyDetailModal from '@/components/payroll/CompanyDetailModal.vue'
import ActivityLog from '@/components/payroll/ActivityLog.vue'
import { BellIcon, SettingsIcon } from '@/icons'
import type { Company } from '@/data/companies'

const showAIModal = ref(false)
const showCompanyModal = ref(false)
const showActivityLog = ref(false)
const selectedColumnId = ref('')
const selectedCompany = ref<Company | null>(null)

const handleOpenAI = (columnId: string) => {
  selectedColumnId.value = columnId
  showAIModal.value = true
}

const handleCompanyClick = (company: Company) => {
  selectedCompany.value = company
  showCompanyModal.value = true
}

const handleAIConfirm = (columnId: string) => {
  showAIModal.value = false
  showActivityLog.value = true
  // TODO: Implement AI processing logic
}
</script>