export interface Column {
  id: string;
  title: string;
  bgColor: string;
  cardColor: string;
  borderColor: string;
  icon: string;
  aiActions: string[];
}

export const columns: Column[] = [
  { 
    id: "to-contact", 
    title: "To Contact",
    bgColor: "bg-white",
    cardColor: "bg-gradient-to-br from-purple-100 to-purple-50",
    borderColor: "border-l-purple-500",
    icon: "📧",
    aiActions: [
      "Send payroll change requests to clients",
      "Include deadline reminders",
      "Set up automated follow-ups"
    ]
  },
  { 
    id: "awaiting-info", 
    title: "Awaiting Info",
    bgColor: "bg-white",
    cardColor: "bg-gradient-to-br from-blue-100 to-blue-50",
    borderColor: "border-l-blue-500",
    icon: "⏳",
    aiActions: [
      "Parse incoming client responses",
      "Extract payroll changes", 
      "Categorize by urgency"
    ]
  },
  { 
    id: "changes-needed", 
    title: "Changes Needed",
    bgColor: "bg-white",
    cardColor: "bg-gradient-to-br from-red-100 to-red-50",
    borderColor: "border-l-red-500",
    icon: "📝",
    aiActions: [
      "Validate change requests",
      "Flag complex modifications",
      "Prepare processing queue"
    ]
  },
  { 
    id: "ready-to-process", 
    title: "Ready to Process",
    bgColor: "bg-white",
    cardColor: "bg-gradient-to-br from-yellow-100 to-yellow-50",
    borderColor: "border-l-yellow-500",
    icon: "⚡",
    aiActions: [
      "Calculate payroll adjustments",
      "Generate preview reports",
      "Queue for client approval"
    ]
  },
  { 
    id: "client-approved", 
    title: "Client Approved",
    bgColor: "bg-white",
    cardColor: "bg-gradient-to-br from-green-100 to-green-50",
    borderColor: "border-l-green-500",
    icon: "✅",
    aiActions: [
      "Process on Xero, then HMRC",
      "Process pension contributions",
      "Generate payslips"
    ]
  },
  { 
    id: "processing", 
    title: "Processing",
    bgColor: "bg-white",
    cardColor: "bg-gradient-to-br from-indigo-100 to-indigo-50",
    borderColor: "border-l-indigo-500",
    icon: "⚙️",
    aiActions: []
  },
  { 
    id: "complete", 
    title: "Complete",
    bgColor: "bg-white",
    cardColor: "bg-gradient-to-br from-slate-100 to-slate-50",
    borderColor: "border-l-slate-500",
    icon: "🎉",
    aiActions: [
      "Generate summary report",
      "Archive completed workflow",
      "Prepare for next month"
    ]
  }
];