import { Check } from 'lucide-react'
import Heading from './Heading'
import Reveal from './Reveal'
import { services } from '../data/services'
import { glow } from '../lib/glow'
export default function Services() {
  return (
    <section id="services" className="sec" aria-label="Services">
      <div className="wrap">
        <Heading eyebrow="Services" title="Development Services" sub="From concept to deployment, we build the technology behind modern businesses." />
        <div className="grid3">
          {services.map(({ n, icon: Icon, image, title, desc, items }, i) => (
            <Reveal key={n} delay={(i % 3) * 0.08}>
              <article className={'card' + (image ? ' has-image' : '')} style={image ? { '--card-image': `url("${image}")` } : undefined} onMouseMove={glow}>
                <div className="card-top"><span className="num">{n}</span><span className="ico"><Icon size={22} strokeWidth={1.6} /></span></div>
                <h3>{title}</h3>
                <p>{desc}</p>
                <ul>{items.map((t) => <li key={t}><Check size={14} />{t}</li>)}</ul>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
