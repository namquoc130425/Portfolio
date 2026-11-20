import { aiTasterCaseStudy } from '../../data/aiTasterCaseStudy'

const chapterLinks = [
  ['01', 'Overview'],
  ['02', 'Problem'],
  ['03', 'Product workflow'],
  ['04', 'Architecture'],
  ['05', 'AI + RAG'],
  ['06', 'My contributions'],
  ['07', 'Technologies'],
  ['08', 'Project + payment lifecycle'],
  ['09', 'Challenges'],
  ['10', 'Result / lessons'],
] as const

type CaseStudySectionProps = {
  number: string
  title: string
  children: React.ReactNode
}

function CaseStudySection({ number, title, children }: CaseStudySectionProps) {
  const sectionId = `ai-taster-${number}`

  return (
    <section id={sectionId} className="case-study__section" aria-labelledby={`${sectionId}-title`}>
      <p className="case-study__section-index" aria-hidden="true">
        {number} / {title}
      </p>
      <div className="case-study__section-content">
        <h3 id={`${sectionId}-title`}>{title}</h3>
        {children}
      </div>
    </section>
  )
}

export function AiTasterCaseStudy() {
  const { project } = aiTasterCaseStudy

  return (
    <article id="ai-taster-case-study" className="case-study content-grid" aria-labelledby="ai-taster-title">
      <header className="case-study__masthead">
        <p className="case-study__eyebrow">
          {project.index} / {project.label} / {project.year}
        </p>
        <h2 id="ai-taster-title">{project.title}</h2>
        <dl className="case-study__metadata">
          <div>
            <dt>Role</dt>
            <dd>{project.role}</dd>
          </div>
          <div>
            <dt>Scope</dt>
            <dd>{project.duration} / {project.team}</dd>
          </div>
        </dl>
        <a className="editorial-link" href={project.repository} target="_blank" rel="noopener noreferrer">
          View AI Taster source <span aria-hidden="true">↗</span>
        </a>
      </header>

      <nav className="case-study__chapters" aria-label="AI Taster case study chapters">
        <ol>
          {chapterLinks.map(([number, label]) => (
            <li key={number}>
              <a href={`#ai-taster-${number}`}>{number} / {label}</a>
            </li>
          ))}
        </ol>
      </nav>

      <CaseStudySection number="01" title="Overview">
        <p className="case-study__lead">{aiTasterCaseStudy.overview}</p>
      </CaseStudySection>

      <CaseStudySection number="02" title="Problem">
        <p>{aiTasterCaseStudy.problem}</p>
      </CaseStudySection>

      <CaseStudySection number="03" title="Product workflow">
        <p>From a first brief to an accepted delivery, the marketplace connects these steps.</p>
        <ol className="case-study__flow" aria-label="AI Taster product workflow">
          {aiTasterCaseStudy.workflow.map((step, index) => (
            <li key={step}>
              <span aria-hidden="true">{String(index + 1).padStart(2, '0')}</span>
              {step}
            </li>
          ))}
        </ol>
      </CaseStudySection>

      <CaseStudySection number="04" title="Architecture">
        <p>{aiTasterCaseStudy.architectureSummary}</p>
        <figure className="architecture-map">
          <figcaption>Application component map</figcaption>
          <ol>
            {aiTasterCaseStudy.componentFlow.map((component) => (
              <li key={component.label}>
                <strong>{component.label}</strong>
                <span>{component.detail}</span>
              </li>
            ))}
          </ol>
        </figure>
        <dl className="case-study__definition-list">
          {aiTasterCaseStudy.architecture.map((item) => (
            <div key={item.label}>
              <dt>{item.label}</dt>
              <dd>{item.detail}</dd>
            </div>
          ))}
        </dl>
      </CaseStudySection>

      <CaseStudySection number="05" title="AI + RAG">
        <p>Retrieval grounds the draft in the platform&apos;s skill catalogue. Gemini writes the brief; the backend validates it.</p>
        <ul className="case-study__fact-list">
          {aiTasterCaseStudy.aiFacts.map((fact) => <li key={fact}>{fact}</li>)}
        </ul>
        <h4 className="case-study__subheading">Input + output guardrails</h4>
        <ul className="case-study__fact-list">
          {aiTasterCaseStudy.aiGuardrails.map((rule) => <li key={rule}>{rule}</li>)}
        </ul>
      </CaseStudySection>

      <CaseStudySection number="06" title="My contributions">
        <p>Working alongside another main backend developer and two frontend developers, I contributed the following.</p>
        <ul className="case-study__fact-list">
          {aiTasterCaseStudy.documentedContributions.map((contribution) => (
            <li key={contribution}>{contribution}</li>
          ))}
        </ul>
      </CaseStudySection>

      <CaseStudySection number="07" title="Technologies">
        <ul className="case-study__technologies" aria-label="Verified AI Taster technologies">
          {aiTasterCaseStudy.technologies.map((technology) => <li key={technology}>{technology}</li>)}
        </ul>
      </CaseStudySection>

      <CaseStudySection number="08" title="Project + payment lifecycle">
        <p>SePay integrates with payment and deposit workflows. Project funds are tracked and held by the application until delivery approval or dispute resolution.</p>
        <ol className="case-study__flow case-study__flow--compact" aria-label="AI Taster payment lifecycle">
          {aiTasterCaseStudy.paymentLifecycle.map((step, index) => (
            <li key={step}>
              <span aria-hidden="true">{String(index + 1).padStart(2, '0')}</span>
              {step}
            </li>
          ))}
        </ol>
        <ul className="case-study__fact-list">
          {aiTasterCaseStudy.paymentDetails.map((detail) => <li key={detail}>{detail}</li>)}
        </ul>
      </CaseStudySection>

      <CaseStudySection number="09" title="Challenges">
        <dl className="case-study__definition-list">
          {aiTasterCaseStudy.challenges.map((challenge) => (
            <div key={challenge.label}><dt>{challenge.label}</dt><dd>{challenge.detail}</dd></div>
          ))}
        </dl>
      </CaseStudySection>

      <CaseStudySection number="10" title="Result / lessons">
        <p className="case-study__lead">{aiTasterCaseStudy.result}</p>
        <h4 className="case-study__subheading">What I learned</h4>
        <p>{aiTasterCaseStudy.lessons}</p>
      </CaseStudySection>
    </article>
  )
}
