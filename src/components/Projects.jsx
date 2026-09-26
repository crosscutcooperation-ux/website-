import { ArrowUpRight } from 'lucide-react'
import Heading from './Heading'
import Reveal from './Reveal'
import Section3D from './Section3D'
import { projects } from '../data/projects'
export default function Projects() {
  const published = projects.filter((p) => p.image && p.href)
  return (
    <section className="sec" aria-label="Projects">
      <Section3D />
      <div className="wrap">
        <Heading eyebrow="Selected work" title="Proof, when it is ready." sub={published.length ? 'A small selection of products, systems and experiments.' : 'We are preparing the first case studies. Until then, bring us the problem you want to make clearer.'} />
        {published.length ? <div className="pgrid">
          {published.map((p, i) => (
            <Reveal key={i} className={i === 0 ? 'featured' : ''} delay={(i % 3) * 0.07}>
              <article className="proj">
                <div className="shot">
                  {p.image ? <img src={p.image} alt={p.name} loading="lazy" /> : <div className="ph"><span>Example project</span></div>}
                  <div className="ov" />
                </div>
                <div className="pbody">
                  <div className="project-meta"><span className="tag">{p.category}</span><span className="project-state">Live / Open</span></div>
                  <h3>{p.name}</h3>
                  <p>{p.description}</p>
                  <div className="tech">{p.tech.map((t) => <span key={t}>{t}</span>)}</div>
                  {p.href ? <a href={p.href} className="link" target="_blank" rel="noreferrer">View project <ArrowUpRight size={16} /></a> : <span className="link off" aria-disabled="true">View project <ArrowUpRight size={16} /></span>}
                </div>
              </article>
            </Reveal>
          ))}
        </div> : <div className="project-note"><span className="tag">Case studies in progress</span><h3>Good work deserves evidence.</h3><p>We would rather show the real product, the constraint and the result than fill this space with invented screenshots.</p><a href="#contact" className="link">Start a conversation <ArrowUpRight size={16} /></a></div>}
      </div>
    </section>
  )
}
