import { profile } from '../../data/profile'

export function HeroMeta() {
  return (
    <div className="hero-meta">
      <p>{profile.name.toUpperCase()}</p>
      <p>{profile.location.toUpperCase()}</p>
    </div>
  )
}
