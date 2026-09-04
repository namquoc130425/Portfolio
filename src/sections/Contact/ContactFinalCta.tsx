import type { RefObject } from 'react'
import { profile } from '../../data/profile'

type ContactFinalCtaProps = {
  sectionRef: RefObject<HTMLElement | null>
}

const externalLinkAttributes = {
  rel: 'noopener noreferrer',
  target: '_blank',
} as const

export function ContactFinalCta({ sectionRef }: ContactFinalCtaProps) {
  const { contact } = profile

  return (
    <section ref={sectionRef} id="contact" className="contact content-grid" aria-labelledby="contact-title">
      <div className="contact__masthead">
        <p className="contact__eyebrow">Contact / Close</p>
        <h2 id="contact-title" className="contact__headline">
          <span>Let&apos;s build</span>
          <span>something</span>
          <span>useful.</span>
        </h2>
      </div>

      <p className="contact__supporting-copy">{contact.supportingCopy}</p>

      <address className="contact__identity">
        <p>{profile.name}</p>
        <p>{contact.availability}</p>
        <p>{contact.location}</p>
      </address>

      <div className="contact__links" aria-label="Contact links">
        <a href={contact.email.href}>
          <span>{contact.email.label}</span>
          <span>{contact.email.value}</span>
        </a>
        <a href={contact.github.href} {...externalLinkAttributes}>
          <span>{contact.github.label}</span>
          <span>@{contact.github.value}</span>
        </a>
        <a href={contact.linkedIn.href} {...externalLinkAttributes}>
          <span>{contact.linkedIn.label}</span>
          <span>{contact.linkedIn.value}</span>
        </a>
      </div>
    </section>
  )
}
