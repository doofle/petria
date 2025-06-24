export interface Company {
  id: number;
  name: string;
  stage: string;
  lastUpdate: string;
  notes: string;
  employees: number;
  monthlyPayroll: string;
  contact: string;
  email: string;
  processing?: boolean;
}

export const companies: Company[] = [
  { id: 1, name: "Acme Corp", stage: "to-contact", lastUpdate: "2 hours ago", notes: "", employees: 45, monthlyPayroll: "£125k", contact: "John Smith", email: "john@acme.com" },
  { id: 2, name: "Bright Solutions", stage: "to-contact", lastUpdate: "1 hour ago", notes: "", employees: 23, monthlyPayroll: "£78k", contact: "Sarah Jones", email: "sarah@bright.com" },
  { id: 3, name: "Creative Minds", stage: "to-contact", lastUpdate: "3 hours ago", notes: "", employees: 67, monthlyPayroll: "£189k", contact: "Mike Wilson", email: "mike@creative.com" },
  { id: 4, name: "Dynamic Enterprises", stage: "to-contact", lastUpdate: "1 hour ago", notes: "", employees: 156, monthlyPayroll: "£445k", contact: "Lisa Brown", email: "lisa@dynamic.com" },
  { id: 5, name: "Elite Manufacturing", stage: "to-contact", lastUpdate: "2 hours ago", notes: "", employees: 89, monthlyPayroll: "£234k", contact: "Tom Davis", email: "tom@elite.com" },
  { id: 6, name: "Future Tech", stage: "to-contact", lastUpdate: "4 hours ago", notes: "", employees: 34, monthlyPayroll: "£98k", contact: "Emma Taylor", email: "emma@future.com" },
  { id: 7, name: "Global Ventures", stage: "to-contact", lastUpdate: "1 hour ago", notes: "", employees: 78, monthlyPayroll: "£198k", contact: "David Lee", email: "david@global.com" },
  { id: 8, name: "Horizon Industries", stage: "to-contact", lastUpdate: "3 hours ago", notes: "", employees: 45, monthlyPayroll: "£125k", contact: "Anna White", email: "anna@horizon.com" },
  { id: 9, name: "Innovation Labs", stage: "to-contact", lastUpdate: "2 hours ago", notes: "", employees: 56, monthlyPayroll: "£145k", contact: "Chris Green", email: "chris@innovation.com" },
  { id: 10, name: "Jupiter Consulting", stage: "to-contact", lastUpdate: "1 hour ago", notes: "", employees: 23, monthlyPayroll: "£67k", contact: "Rachel Black", email: "rachel@jupiter.com" },
  { id: 11, name: "Keystone Partners", stage: "to-contact", lastUpdate: "4 hours ago", notes: "", employees: 67, monthlyPayroll: "£178k", contact: "James Carter", email: "james@keystone.com" },
  { id: 12, name: "Landmark Services", stage: "to-contact", lastUpdate: "2 hours ago", notes: "", employees: 34, monthlyPayroll: "£89k", contact: "Sophie Turner", email: "sophie@landmark.com" },
  { id: 13, name: "Metro Solutions", stage: "to-contact", lastUpdate: "1 hour ago", notes: "", employees: 45, monthlyPayroll: "£123k", contact: "Alex Morgan", email: "alex@metro.com" },
  { id: 14, name: "NextGen Analytics", stage: "to-contact", lastUpdate: "3 hours ago", notes: "", employees: 78, monthlyPayroll: "£201k", contact: "Kelly Adams", email: "kelly@nextgen.com" },
  { id: 15, name: "Oceanic Holdings", stage: "to-contact", lastUpdate: "2 hours ago", notes: "", employees: 123, monthlyPayroll: "£334k", contact: "Ryan Cooper", email: "ryan@oceanic.com" },
  { id: 16, name: "Prime Digital", stage: "to-contact", lastUpdate: "1 hour ago", notes: "", employees: 45, monthlyPayroll: "£118k", contact: "Maya Patel", email: "maya@prime.com" },
  { id: 17, name: "Quantum Research", stage: "to-contact", lastUpdate: "4 hours ago", notes: "", employees: 89, monthlyPayroll: "£245k", contact: "Ben Foster", email: "ben@quantum.com" },
  { id: 18, name: "Radical Innovations", stage: "to-contact", lastUpdate: "2 hours ago", notes: "", employees: 56, monthlyPayroll: "£149k", contact: "Zoe Martinez", email: "zoe@radical.com" },
  { id: 19, name: "Sterling Group", stage: "to-contact", lastUpdate: "1 hour ago", notes: "", employees: 67, monthlyPayroll: "£189k", contact: "Noah Johnson", email: "noah@sterling.com" },
  { id: 20, name: "Titan Industries", stage: "to-contact", lastUpdate: "3 hours ago", notes: "", employees: 134, monthlyPayroll: "£378k", contact: "Grace Kim", email: "grace@titan.com" },
  { id: 21, name: "Urban Development", stage: "to-contact", lastUpdate: "2 hours ago", notes: "", employees: 78, monthlyPayroll: "£198k", contact: "Lucas Wright", email: "lucas@urban.com" },
  { id: 22, name: "Victory Logistics", stage: "to-contact", lastUpdate: "1 hour ago", notes: "", employees: 45, monthlyPayroll: "£125k", contact: "Aria Scott", email: "aria@victory.com" },
  { id: 23, name: "Wavelength Media", stage: "to-contact", lastUpdate: "4 hours ago", notes: "", employees: 34, monthlyPayroll: "£92k", contact: "Ethan Barnes", email: "ethan@wave.com" },
  { id: 24, name: "Xenon Technologies", stage: "to-contact", lastUpdate: "2 hours ago", notes: "", employees: 89, monthlyPayroll: "£234k", contact: "Ivy Chen", email: "ivy@xenon.com" },
  { id: 25, name: "Yonder Investments", stage: "to-contact", lastUpdate: "1 hour ago", notes: "", employees: 56, monthlyPayroll: "£156k", contact: "Owen Phillips", email: "owen@yonder.com" },
  { id: 26, name: "Zenith Corporation", stage: "to-contact", lastUpdate: "3 hours ago", notes: "", employees: 167, monthlyPayroll: "£445k", contact: "Luna Rodriguez", email: "luna@zenith.com" },
  { id: 27, name: "Alpha Dynamics", stage: "to-contact", lastUpdate: "2 hours ago", notes: "", employees: 45, monthlyPayroll: "£119k", contact: "Felix Anderson", email: "felix@alpha.com" },
  { id: 28, name: "Beta Systems", stage: "to-contact", lastUpdate: "1 hour ago", notes: "", employees: 78, monthlyPayroll: "£203k", contact: "Sage Thompson", email: "sage@beta.com" },
  { id: 29, name: "Gamma Enterprises", stage: "to-contact", lastUpdate: "4 hours ago", notes: "", employees: 34, monthlyPayroll: "£87k", contact: "River Martinez", email: "river@gamma.com" },
  { id: 30, name: "Delta Solutions", stage: "to-contact", lastUpdate: "2 hours ago", notes: "", employees: 67, monthlyPayroll: "£176k", contact: "Sky Peterson", email: "sky@delta.com" }
];