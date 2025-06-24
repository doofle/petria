import { ref, computed } from 'vue'
import { companies as initialCompanies, type Company } from '@/data/companies'

const companies = ref<Company[]>([...initialCompanies])

export function usePayrollData() {
  const totalCompanies = computed(() => companies.value.length)
  const completedCompanies = computed(() => companies.value.filter(c => c.stage === 'complete').length)
  const pendingCompanies = computed(() => totalCompanies.value - completedCompanies.value)

  const getCompaniesByStage = (stage: string) => {
    return computed(() => companies.value.filter(company => company.stage === stage))
  }

  const updateCompanyStage = (companyId: number, newStage: string) => {
    const company = companies.value.find(c => c.id === companyId)
    if (company) {
      company.stage = newStage
      company.lastUpdate = 'just now'
    }
  }

  const updateCompanyNotes = (companyId: number, notes: string) => {
    const company = companies.value.find(c => c.id === companyId)
    if (company) {
      company.notes = notes
    }
  }

  const setCompanyProcessing = (companyId: number, processing: boolean) => {
    const company = companies.value.find(c => c.id === companyId)
    if (company) {
      company.processing = processing
    }
  }

  const getCompanyById = (id: number) => {
    return companies.value.find(c => c.id === id)
  }

  return {
    companies,
    totalCompanies,
    completedCompanies,
    pendingCompanies,
    getCompaniesByStage,
    updateCompanyStage,
    updateCompanyNotes,
    setCompanyProcessing,
    getCompanyById
  }
}