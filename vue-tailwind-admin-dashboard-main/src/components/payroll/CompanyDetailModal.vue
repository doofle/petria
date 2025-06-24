<template>
  <div class="fixed inset-0 bg-black/50 backdrop-blur-sm z-50" @click="$emit('close')">
    <div class="flex h-full">
      <div class="w-full max-w-4xl mx-auto m-4 bg-white rounded-xl shadow-2xl flex" @click.stop>
        <!-- Company Details -->
        <div class="w-2/3 p-6 overflow-y-auto">
          <div class="flex items-center justify-between mb-6">
            <div>
              <h2 class="text-2xl font-bold text-slate-900">{{ company?.name }}</h2>
              <p class="text-slate-500 mt-1">Current Stage: {{ currentStage }}</p>
            </div>
            <button 
              @click="$emit('close')"
              class="p-2 text-slate-400 hover:text-slate-600 rounded-lg hover:bg-slate-100"
            >
              <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
              </svg>
            </button>
          </div>

          <!-- Company Info -->
          <div class="grid grid-cols-3 gap-4 mb-8">
            <div class="bg-slate-50 rounded-lg p-4">
              <div class="text-sm text-slate-500">Employees</div>
              <div class="text-2xl font-bold text-slate-900">{{ company?.employees }}</div>
            </div>
            <div class="bg-slate-50 rounded-lg p-4">
              <div class="text-sm text-slate-500">Monthly Payroll</div>
              <div class="text-2xl font-bold text-slate-900">{{ company?.monthlyPayroll }}</div>
            </div>
            <div class="bg-slate-50 rounded-lg p-4">
              <div class="text-sm text-slate-500">Last Processed</div>
              <div class="text-2xl font-bold text-slate-900">Nov 2025</div>
            </div>
          </div>

          <!-- Outstanding Items & Actions -->
          <div class="space-y-6">
            <div v-if="isToContact || isAwaitingInfo">
              <h3 class="text-lg font-semibold text-slate-900 mb-4">Outstanding Items</h3>
              <div class="space-y-3">
                <div class="flex items-center justify-between p-3 bg-orange-50 rounded-lg border border-orange-200">
                  <div class="flex items-center space-x-3">
                    <div class="w-2 h-2 bg-orange-500 rounded-full"></div>
                    <span class="text-slate-900">Payroll deadline confirmation required</span>
                  </div>
                  <span class="text-xs text-orange-600 font-medium">URGENT</span>
                </div>
                <div class="flex items-center justify-between p-3 bg-blue-50 rounded-lg border border-blue-200">
                  <div class="flex items-center space-x-3">
                    <div class="w-2 h-2 bg-blue-500 rounded-full"></div>
                    <span class="text-slate-900">Employee data verification</span>
                  </div>
                  <span class="text-xs text-blue-600 font-medium">PENDING</span>
                </div>
              </div>
            </div>

            <div v-else-if="isChangesNeeded">
              <h3 class="text-lg font-semibold text-slate-900 mb-4">Action Items</h3>
              <div class="space-y-3">
                <div 
                  v-for="note in notesArray" 
                  :key="note"
                  class="flex items-center space-x-3 p-3 bg-red-50 rounded-lg border border-red-200"
                >
                  <input type="checkbox" class="rounded border-gray-300 text-red-600 focus:ring-red-500">
                  <span class="text-slate-900">{{ note }}</span>
                </div>
              </div>
            </div>

            <div v-else>
              <h3 class="text-lg font-semibold text-slate-900 mb-4">Status</h3>
              <div class="p-4 bg-green-50 rounded-lg border border-green-200">
                <div class="flex items-center space-x-3">
                  <div class="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                    <CheckIcon class="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <div class="font-medium text-green-900">All requirements completed</div>
                    <div class="text-sm text-green-700">This company has been processed and signed off</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- History Timeline -->
          <div class="mt-8">
            <h3 class="text-lg font-semibold text-slate-900 mb-4">Activity History</h3>
            <div class="space-y-4 max-h-64 overflow-y-auto">
              <div class="flex items-start space-x-3">
                <div class="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <span class="text-purple-600 text-xs font-bold">AI</span>
                </div>
                <div class="flex-1">
                  <div class="text-sm font-medium text-slate-900">Company added to December payroll run</div>
                  <div class="text-xs text-slate-500">2 days ago</div>
                </div>
              </div>
              <div class="flex items-start space-x-3">
                <div class="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <span class="text-blue-600 text-xs font-bold">SYS</span>
                </div>
                <div class="flex-1">
                  <div class="text-sm font-medium text-slate-900">Previous payroll completed successfully</div>
                  <div class="text-xs text-slate-500">Nov 30, 2025</div>
                </div>
              </div>
              <div class="flex items-start space-x-3">
                <div class="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <span class="text-green-600 text-xs font-bold">✓</span>
                </div>
                <div class="flex-1">
                  <div class="text-sm font-medium text-slate-900">Client onboarded to Petria.ai</div>
                  <div class="text-xs text-slate-500">Oct 15, 2025</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Quick Actions Sidebar -->
        <div class="w-1/3 bg-slate-50 p-6 border-l border-slate-200">
          <h3 class="text-lg font-semibold text-slate-900 mb-4">Quick Actions</h3>
          <div class="space-y-3">
            <button class="w-full text-left p-3 bg-white rounded-lg hover:bg-slate-100 transition-colors border border-slate-200">
              <div class="font-medium text-slate-900">Send Reminder</div>
              <div class="text-sm text-slate-500">Email payroll deadline reminder</div>
            </button>
            <button class="w-full text-left p-3 bg-white rounded-lg hover:bg-slate-100 transition-colors border border-slate-200">
              <div class="font-medium text-slate-900">View Reports</div>
              <div class="text-sm text-slate-500">Download payroll reports</div>
            </button>
            <button class="w-full text-left p-3 bg-white rounded-lg hover:bg-slate-100 transition-colors border border-slate-200">
              <div class="font-medium text-slate-900">Contact Client</div>
              <div class="text-sm text-slate-500">Direct communication</div>
            </button>
            <button class="w-full text-left p-3 bg-white rounded-lg hover:bg-slate-100 transition-colors border border-slate-200">
              <div class="font-medium text-slate-900">Schedule Meeting</div>
              <div class="text-sm text-slate-500">Book calendar appointment</div>
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { columns } from '@/data/columns'
import type { Company } from '@/data/companies'
import { CheckIcon } from '@/icons'

interface Props {
  company: Company | null
}

const props = defineProps<Props>()

defineEmits<{
  close: []
}>()

const currentStage = computed(() => {
  if (!props.company) return ''
  return columns.find(c => c.id === props.company?.stage)?.title || ''
})

const isToContact = computed(() => props.company?.stage === 'to-contact')
const isAwaitingInfo = computed(() => props.company?.stage === 'awaiting-info')
const isChangesNeeded = computed(() => props.company?.stage === 'changes-needed')

const notesArray = computed(() => {
  if (!props.company?.notes) return []
  return props.company.notes.split('\n').filter(note => note.trim())
})
</script>