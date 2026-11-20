export const aiTasterCaseStudy = {
  project: {
    index: '01',
    label: 'AI Taster',
    title: 'AI Expert Marketplace',
    year: '2026',
    role: 'Backend developer',
    duration: '10 weeks',
    team: '2 main backend developers / 2 frontend developers',
    repository: 'https://github.com/namquoc130425/AITaster_BE',
  },
  overview:
    'AI Taster connects businesses and individuals with AI experts, bringing job posting, proposals, project milestones and payments into one freelance marketplace. My work focused on the Spring Boot backend: AI job drafts, wallet transactions and project delivery workflows.',
  problem:
    'A client needs to turn an initial idea into a clear job brief, find an expert and manage delivery without losing track of agreements or payments. The backend connects these steps while validating AI-generated content and protecting the consistency of money movements.',
  workflow: [
    'Client creates a job brief',
    'AI generates an editable draft',
    'Backend validates content + skills',
    'Client publishes the job',
    'Experts submit proposals',
    'Client invites an expert',
    'Expert accepts the invitation',
    'Client funds the project',
    'Project funds are held',
    'Expert submits milestones',
    'Client reviews delivery',
    'Final approval releases funds',
  ],
  architecture: [
    { label: 'Application', detail: 'Java 21, Spring Boot REST APIs and Spring Data JPA' },
    { label: 'Data', detail: 'MySQL for application records; Redis for cached data, including moderation rules' },
    { label: 'Security', detail: 'Spring Security, JWT authentication and API request filtering' },
    { label: 'AI + retrieval', detail: 'Spring AI with Gemini; Qdrant for skill-vector retrieval' },
    { label: 'Payments + communication', detail: 'SePay integration, wallet transactions, project fund holds and WebSocket communication' },
  ],
  architectureSummary:
    'The component map shows logical application boundaries. The Spring Boot backend coordinates persistence, retrieval, AI generation and external payment events.',
  componentFlow: [
    { label: 'Client interface', detail: 'Job briefs, proposals, project delivery and wallet actions' },
    { label: 'Spring Boot backend', detail: 'Authentication, validation and domain workflows' },
    { label: 'MySQL + Redis', detail: 'Application records, financial state and cached rules' },
    { label: 'Qdrant + Gemini', detail: 'Candidate-skill retrieval and structured job drafts' },
    { label: 'SePay', detail: 'Payment integration and incoming webhook processing' },
  ],
  aiFacts: [
    'The retrieval query combines the job title, requirements, business goal, main features, budget, timeline and user-selected skills.',
    'Spring AI embeds that text. Qdrant returns candidate skill IDs, names and similarity scores; the service requests 10 candidates and passes up to 8 into the prompt.',
    'Gemini receives the job brief and retrieved candidates, with instructions to return structured JSON and select at most 5 relevant, non-duplicate skill IDs.',
    'The backend parses the JSON, checks generated fields and budget, and filters skill IDs against the candidate set before resolving the real MySQL skill records.',
    'The response is an editable preview. Generating a draft does not itself publish a job.',
  ],
  aiGuardrails: [
    'Normalize input and check URLs, email addresses, phone numbers and configured blocked content.',
    'Reject known prompt-injection patterns such as requests to ignore earlier instructions or reveal a system prompt.',
    'Treat user-supplied text as data in the prompt; validate generated output again on the server.',
  ],
  documentedContributions: [
    'Contributed to JWT authentication, the login flow and API request filtering.',
    'Built editable AI job-post drafts using Spring AI, Gemini and Qdrant, with generated skill-ID validation.',
    'Implemented SePay deposit handling, wallet withdrawals and project payouts using database transactions, wallet row locks and duplicate-webhook checks.',
    'Implemented proposal and invitation workflows, milestone submissions, client review and fund release after final approval.',
    'Added JUnit and Mockito tests for AI draft validation, expired payments and conflicts between wallet and pending SePay payments.',
    'Reviewed wallet concurrency and webhook replay risks, documented findings and proposed fixes for duplicate processing.',
  ],
  technologies: [
    'Java 21', 'Spring Boot', 'Spring Data JPA', 'Spring Security', 'JWT',
    'MySQL', 'Redis', 'Qdrant', 'Spring AI', 'Gemini', 'SePay',
    'WebSocket', 'MapStruct', 'Docker Compose', 'JUnit', 'Mockito',
  ],
  paymentLifecycle: [
    'Client funds a project',
    'Application records held funds',
    'Expert delivers milestones',
    'Client gives final approval',
    'Application releases the expert payout',
    'Cancellation or dispute can follow a refund path',
  ],
  paymentDetails: [
    'The escrow record models waiting payment, held, released, refunded, canceled, disputed and resolved states. It is an application-level fund-holding workflow.',
    'Payout and refund operations lock the project fund record and require a valid held state and positive amount. A normal refund returns the held amount to the client; payout records the expert amount and platform fee.',
    'Opening a dispute marks the project and held funds as disputed. Admin resolution can refund the client, release funds to the expert or split the held amount. Rejecting a dispute restores the active project and held state.',
  ],
  challenges: [
    { label: 'Duplicate payments', detail: 'A retried request or replayed webhook must not credit a wallet or release funds twice. I worked on duplicate-event checks, transactional money movements and row locking, and reviewed concurrency risks.' },
    { label: 'Unreliable AI output', detail: 'Generated content must fit the business rules. Candidate-skill constraints, structured JSON parsing and server-side validation keep the model from deciding which database IDs are valid.' },
    { label: 'Timeouts + model cost', detail: 'Handling slow AI calls and understanding the cost of each request were important learning areas. They highlighted the need for explicit timeout behavior, controlled retry policies and cost awareness when designing AI features.' },
  ],
  result:
    'The 10-week team project produced backend workflows for AI-assisted job drafts, payments, wallets and milestone delivery, supported by focused JUnit and Mockito tests. The project has been developed locally and deployed as a demo.',
  lessons:
    'This project taught me to think beyond the successful request: what happens when a payment is repeated, an AI call times out or generated content breaks a rule? Working with unfamiliar technologies strengthened my ability to learn from documentation, test assumptions and connect tools to real business workflows. In a future iteration, I would make failure handling, payment idempotency and model-cost tracking explicit design concerns from the start. I am continuing to build that foundation for both my studies and professional work.',
} as const
