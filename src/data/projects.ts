export const projects = [
  {
    id: 'ai-taster',
    index: '01',
    label: 'AI Taster',
    metadata: '2026 / 10 weeks',
    title: 'AI Expert Marketplace',
    role: 'Backend development / AI drafts, wallets + milestones',
    technologies: ['Java', 'Spring Boot', 'Qdrant', 'Gemini', 'SePay'],
    href: '#ai-taster-case-study',
    repository: 'https://github.com/namquoc130425/AITaster_BE',
  },
  {
    id: 'carshowroom',
    index: '02',
    label: 'CarShowRoom',
    metadata: 'Team of 5',
    title: 'CarShowRoom',
    role: 'Admin development + UI / auto parts and service bookings',
    technologies: ['Spring Boot', 'Thymeleaf', 'SQL Server', 'Bootstrap', 'Chart.js'],
    href: '#carshowroom',
    repository: 'https://github.com/TruongThien197/CarShowRoom',
  },
] as const

export const carShowRoom = {
  introduction: 'A team-built web application for auto-parts sales and vehicle service bookings. In a team of five, I focused on admin workflows and the management interface.',
  contributions: [
    { label: 'Dashboard + UI', detail: 'Prototyped admin screens in Google Stitch and built Thymeleaf dashboards with system totals and monthly order charts.' },
    { label: 'Admin workflows', detail: 'Added paginated user search, role/status filters, product and service validation, and checks that prevent deleting categories still used by products.' },
    { label: 'Checkout + service operations', detail: 'Built configurable province/district delivery fees and checkout calculation. Implemented order and booking cancellation review, recording staff decisions and checking refund eligibility.' },
  ],
  technologies: ['Java', 'Spring Boot', 'Spring MVC', 'Thymeleaf', 'Spring Data JPA', 'SQL Server', 'Bootstrap', 'JavaScript', 'Chart.js', 'Maven', 'Git'],
} as const
