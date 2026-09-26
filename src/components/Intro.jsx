import Reveal from './Reveal'
import Section3D from './Section3D'
export default function Intro() {
  return (
    <section className="sec intro" aria-labelledby="intro-h">
      <Section3D />
      <div className="wrap">
        <Reveal as="p" className="eyebrow">Crosscut Technology</Reveal>
        <Reveal as="h2" id="intro-h" className="big">Technology should solve problems, <span className="dim">not create them.</span></Reveal>
        <Reveal as="p" delay={0.1} className="lead">We work with businesses, creators, startups and organizations to design and build practical digital products — software that is clear to use, dependable to run and ready to grow.</Reveal>
      </div>
    </section>
  )
}
