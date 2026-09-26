import Reveal from './Reveal'
export default function Heading({ eyebrow, title, sub }) {
  return (
    <div className="head">
      <Reveal as="p" className="eyebrow">{eyebrow}</Reveal>
      <Reveal as="h2" delay={0.05}>{title}</Reveal>
      {sub && <Reveal as="p" delay={0.1} className="lead">{sub}</Reveal>}
    </div>
  )
}
