import { motion } from 'framer-motion'
export default function Reveal({ as = 'div', delay = 0, y = 24, children, ...rest }) {
  const M = motion[as]
  return <M initial={{ opacity: 0, y, filter: 'blur(8px)' }} whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }} viewport={{ once: true, margin: '-70px' }}
    transition={{ duration: 0.8, delay, ease: [0.22, 1, 0.36, 1] }} {...rest}>{children}</M>
}
