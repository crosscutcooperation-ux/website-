import { useRef } from 'react'
import { motion, useScroll } from 'framer-motion'
import Heading from './Heading'
import Reveal from './Reveal'
import Section3D from './Section3D'
import { steps } from '../data/content'
export default function Process() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start 75%', 'end 60%'] })
  return (
    <section id="process" className="sec" aria-label="Process">
      <Section3D />
      <div className="wrap">
        <Heading eyebrow="Process" title="A clear path from idea to launch." />
        <ol className="steps" ref={ref}>
          <div className="track" aria-hidden="true">
            <motion.i className="fill fx" style={{ scaleX: scrollYProgress }} />
            <motion.i className="fill fy" style={{ scaleY: scrollYProgress }} />
          </div>
          {steps.map(([n, t, d], i) => (
            <Reveal as="li" key={n} delay={i * 0.08}>
              <span className="dot" aria-hidden="true" />
              <span className="num">{n}</span>
              <h3>{t}</h3>
              <p>{d}</p>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  )
}
