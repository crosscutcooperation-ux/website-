import { motion, useScroll, useTransform } from 'framer-motion'
import { ArrowRight, Radio } from 'lucide-react'
import heroImage from '../../hero.jpg'
const ease = [0.22, 1, 0.36, 1]
const rise = (i) => ({ initial: { opacity: 0, y: 32 }, animate: { opacity: 1, y: 0 }, transition: { duration: 0.9, delay: 0.15 + i * 0.12, ease } })
export default function Hero() {
  const { scrollY } = useScroll()
  const y = useTransform(scrollY, [0, 700], [0, 90])
  return (
    <section id="home" className="hero">
      <motion.img src={heroImage} alt="" aria-hidden="true" className="hero-image" style={{ y }} initial={{ opacity: 0, scale: 1.04 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 1.2, delay: 0.3, ease }} />
      <div className="hero-grid" aria-hidden="true" />
      <div className="hero-orbit orbit-a" aria-hidden="true"><span /></div>
      <motion.div className="hero-signal" initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1, duration: 0.7, ease }}>
        <Radio size={14} />
        <span>Designing what is next</span>
      </motion.div>
      <div className="wrap hero-in">
        <div>
          <motion.p className="eyebrow" {...rise(0)}>Develop / Design / Create</motion.p>
          <h1>
            <motion.span {...rise(1)}>We Build</motion.span>
            <motion.span {...rise(2)} className="hi">Digital Products</motion.span>
            <motion.span {...rise(3)}>That Matter.</motion.span>
          </h1>
          <motion.p className="lead" {...rise(4)}>We help ambitious teams replace fragile workflows with clear, useful software — from customer-facing products to the systems that keep the work moving.</motion.p>
          <motion.div className="row-btn" {...rise(5)}>
            <a href="#contact" className="btn">Start a Project <ArrowRight size={18} /></a>
            <a href="#services" className="btn ghost">Explore Services <ArrowRight size={18} /></a>
          </motion.div>
          <motion.ul className="hero-proof" {...rise(6)} aria-label="Crosscut capabilities">
            <li><strong>05</strong><span>Featured builds</span></li>
            <li><strong>AI +</strong><span>Automation systems</span></li>
            <li><strong>IN</strong><span>Based in India</span></li>
          </motion.ul>
        </div>
      </div>
    </section>
  )
}
