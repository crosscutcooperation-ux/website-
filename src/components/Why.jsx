import Heading from './Heading'
import Reveal from './Reveal'
import Section3D from './Section3D'
import { why } from '../data/content'
export default function Why() {
  return (
    <section className="sec" aria-label="Why Aero">
      <Section3D />
      <div className="wrap">
        <Heading eyebrow="Why Aero" title="Why AERO?" />
        <div className="grid4">
          {why.map(([t, d], i) => (
            <Reveal key={t} delay={i * 0.07}>
              <div className="why"><span className="num">{String(i + 1).padStart(2, '0')}</span><h3>{t}</h3><p>{d}</p></div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
