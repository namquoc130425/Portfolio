import type { SkillStateKey } from '../animation/states/artifactStates'

export type Skill = {
  id: string
  label: string
  stateKey?: SkillStateKey
  note?: string
}

export type SkillCategory = {
  id: string
  label: string
  skills: readonly Skill[]
}

export const skillCategories: readonly SkillCategory[] = [
  {
    id: 'backend-engineering',
    label: 'Languages / Backend',
    skills: [
      { id: 'java', label: 'Java', stateKey: 'JAVA' },
      { id: 'sql', label: 'SQL' },
      { id: 'spring-boot', label: 'Spring Boot', stateKey: 'SPRING_BOOT' },
      { id: 'spring-jpa', label: 'Spring Data JPA' },
      { id: 'spring-security', label: 'Spring Security', stateKey: 'SPRING_SECURITY' },
      { id: 'rest-api', label: 'REST API', stateKey: 'REST_API' },
      { id: 'jwt', label: 'JWT' },
      { id: 'microservices', label: 'Microservices', stateKey: 'MICROSERVICES' },
      { id: 'mapstruct', label: 'MapStruct' },
    ],
  },
  {
    id: 'data-messaging',
    label: 'Database',
    skills: [
      { id: 'mysql', label: 'MySQL' },
      { id: 'sql-server', label: 'SQL Server' },
      { id: 'postgresql', label: 'PostgreSQL', stateKey: 'POSTGRESQL' },
      { id: 'redis', label: 'Redis', stateKey: 'REDIS' },
    ],
  },
  {
    id: 'integration',
    label: 'Integration',
    skills: [
      { id: 'sepay', label: 'SePay' },
      { id: 'stripe', label: 'Stripe' },
      { id: 'webhooks', label: 'Webhooks' },
      { id: 'websocket', label: 'WebSocket' },
      { id: 'grpc', label: 'gRPC / Protobuf' },
      { id: 'kafka', label: 'Apache Kafka', stateKey: 'KAFKA' },
    ],
  },
  {
    id: 'ai-search',
    label: 'AI / Search',
    skills: [
      { id: 'spring-ai', label: 'Spring AI' },
      { id: 'gemini', label: 'Gemini API' },
      { id: 'qdrant', label: 'Qdrant' },
    ],
  },
  {
    id: 'testing',
    label: 'Testing / Reliability',
    skills: [
      { id: 'junit', label: 'JUnit' },
      { id: 'mockito', label: 'Mockito' },
      { id: 'unit-integration', label: 'Unit / integration testing' },
      { id: 'outbox', label: 'Transactional Outbox' },
      { id: 'idempotency', label: 'Idempotency' },
      { id: 'backoff', label: 'Backoff retry' },
    ],
  },
  {
    id: 'infrastructure',
    label: 'Tools',
    skills: [
      { id: 'docker', label: 'Docker Compose', stateKey: 'DOCKER' },
      { id: 'maven', label: 'Maven' },
      { id: 'git', label: 'Git / GitHub / GitLab' },
      { id: 'postman', label: 'Postman' },
      { id: 'intellij', label: 'IntelliJ IDEA' },
      { id: 'flyway', label: 'Flyway' },
      { id: 'lombok', label: 'Lombok' },
    ],
  },
  {
    id: 'frontend',
    label: 'Frontend',
    skills: [
      { id: 'react', label: 'React', stateKey: 'REACT', note: 'Basic' },
      { id: 'typescript', label: 'TypeScript', stateKey: 'TYPESCRIPT', note: 'Currently learning' },
      { id: 'tailwind-css', label: 'Tailwind CSS 4', stateKey: 'TAILWIND_CSS', note: 'Currently using / learning' },
    ],
  },
]
