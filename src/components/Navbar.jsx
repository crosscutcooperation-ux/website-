import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import { nav } from '../data/site'
export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  useEffect(() => {
    const on = () => setScrolled(window.scrollY > 24)
    on(); window.addEventListener('scroll', on, { passive: true })
    return () => window.removeEventListener('scroll', on)
  }, [])
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    const esc = (e) => e.key === 'Escape' && setOpen(false)
    window.addEventListener('keydown', esc)
    return () => { window.removeEventListener('keydown', esc); document.body.style.overflow = '' }
  }, [open])
  return (
    <motion.header
  className={'nav' + (scrolled ? ' small' : '')}
  initial={{ y: -30, opacity: 0 }}
  animate={{ y: 0, opacity: 1 }}
  transition={{ duration: 0.7 }}
>
  <div className="wrap nav-in">
    <small className="logo-image">
      <img src="/favicon.png" alt="Aero Technology logo"/>
    </small>

    <nav aria-label="Primary" className="links">
      {nav.map(([l, id]) => (
        <a key={id} href={'#' + id} className="ul">
          {l}
        </a>
      ))}
    </nav>
        <a href="#contact" className="btn sm cta-d">Start a Project</a>
        <button className="burger" aria-label={open ? 'Close menu' : 'Open menu'} aria-expanded={open} onClick={() => setOpen(!open)}>
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>
      <AnimatePresence>
        {open && (
          <motion.div className="mobile" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
            {nav.map(([l, id], i) => (
              <motion.a key={id} href={'#' + id} onClick={() => setOpen(false)} initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.05 * i }}>
                <span>{String(i + 1).padStart(2, '0')}</span>{l}
              </motion.a>
            ))}
            <a href="#contact" className="btn" onClick={() => setOpen(false)}>Start a Project</a>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  )
}
