import { useState } from 'react'
import { ArrowUpRight } from 'lucide-react'
import Heading from './Heading'
import Reveal from './Reveal'
import Section3D from './Section3D'
import { solutions } from '../data/content'
export default function Solutions() {
  const [active, setActive] = useState(0)
  return (
    <section id="solutions" className="sec solutions-section" aria-label="Solutions">
      <Section3D />
      <div className="wrap">
        <Heading eyebrow="What we build" title="Products built to be used." />
        <ul className="rows">
          {solutions.map(([t, d], i) => (
            <Reveal as="li" key={t} delay={0.04 * (i % 4)}>
              <button className={'row' + (active === i ? ' active' : '')} type="button" aria-expanded={active === i} aria-controls={'solution-' + i} onClick={() => setActive(active === i ? -1 : i)}>
                <span className="num">{String(i + 1).padStart(2, '0')}</span>
                <div><h3>{t}</h3><div className="more" id={'solution-' + i}><p>{d}</p></div></div>
                <ArrowUpRight className="arr" size={28} strokeWidth={1.4} />
              </button>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  )
}
