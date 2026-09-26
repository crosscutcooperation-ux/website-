import Reveal from './Reveal'
import Section3D from './Section3D'
import { pillars } from '../data/content'
export default function About() {
  return (
    <section id="about" className="sec" aria-label="About">
      <Section3D />
      <div className="wrap about">
        <div>
          <Reveal as="p" className="eyebrow">About</Reveal>
          <Reveal as="h2" delay={0.05}>Technology Built Around Your Goals.</Reveal>
        </div>
        <div>
          <Reveal as="p" className="lead">Crosscut Technology is a software development company. We bring development, design, automation, AI and infrastructure together under one team, so the products we build are practical, coherent and maintainable.</Reveal>
          <ul className="pills">{pillars.map((p, i) => <Reveal as="li" key={p} delay={0.05 * i}>{p}</Reveal>)}</ul>
        </div>
      </div>
    </section>
  )
}
