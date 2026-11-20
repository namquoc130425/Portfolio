export const experience = {
  organization: 'FPT Academy',
  role: 'Java Backend Development Training',
  period: 'Oct 2026 — Dec 2026 (expected)',
  context: 'Ongoing training / confidential e-commerce project',
  introduction: 'Building backend features in a Spring Boot microservices project, with a focus on checkout, payment reliability and shipping integration.',
  contributions: [
    { label: 'Checkout + payment', detail: 'Built checkout for selected cart items, preserving item snapshots and unpurchased items. Integrated Stripe PaymentIntent and signed webhooks with duplicate-event checks and payment/order status synchronization.' },
    { label: 'Inventory + shipping', detail: 'Connected Commerce and Fulfillment through gRPC and Kafka, using Transactional Outbox for inventory reservation and release. Added shipping fees, shipment persistence, error classification and backoff retries, with carrier creation in staging.' },
    { label: 'Testing + collaboration', detail: 'Worked with validation, JWT authorization and ownership checks. Tested with unit/integration tests, PostgreSQL, Postman and Stripe test mode; prepared frontend handoffs, GitLab merge requests and Flyway migrations.' },
  ],
  technologies: ['Java', 'Spring Boot', 'PostgreSQL', 'Stripe', 'gRPC / Protobuf', 'Kafka', 'Transactional Outbox', 'Flyway', 'GitLab'],
} as const
