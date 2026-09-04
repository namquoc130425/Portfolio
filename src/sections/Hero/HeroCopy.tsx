import { profile } from '../../data/profile'

export function HeroCopy() {
  return (
    <div className="hero-copy">
      <p className="hero-eyebrow">
        <span aria-hidden="true" />
        {profile.availability}
      </p>
      <h1 id="hero-title" className="hero-title">
        FULL-STACK
        <br />
        SOFTWARE
        <br />
        DEVELOPER
      </h1>
    </div>
  )
}
