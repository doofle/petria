<template>
  <div class="fixed bottom-4 right-4 bg-white/90 backdrop-blur-md rounded-xl shadow-lg p-4 max-w-sm border border-slate-200">
    <div class="flex items-center justify-between mb-3">
      <h4 class="font-semibold text-slate-900">AI Activity</h4>
      <button @click="$emit('close')" class="text-slate-400 hover:text-slate-600">
        <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
        </svg>
      </button>
    </div>
    <div class="space-y-2 max-h-32 overflow-y-auto">
      <div 
        v-for="entry in logEntries" 
        :key="entry.id"
        class="flex items-start space-x-2 text-xs"
      >
        <div class="w-1.5 h-1.5 bg-purple-500 rounded-full mt-1.5 flex-shrink-0"></div>
        <div>
          <div class="text-slate-900 font-medium">{{ entry.message }}</div>
          <div class="text-slate-500">{{ entry.time }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'

interface LogEntry {
  id: number
  message: string
  time: string
}

defineEmits<{
  close: []
}>()

const logEntries = ref<LogEntry[]>([])

const addLogEntry = (message: string) => {
  logEntries.value.push({
    id: Date.now(),
    message,
    time: new Date().toLocaleTimeString()
  })
}

onMounted(() => {
  addLogEntry('AI processing started...')
  
  setTimeout(() => {
    addLogEntry('Analyzing company data')
  }, 1000)
  
  setTimeout(() => {
    addLogEntry('Processing complete')
  }, 2000)
})
</script>