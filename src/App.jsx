import { MotionConfig } from 'framer-motion'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
export default function App() {
  return (
    <MotionConfig reducedMotion="user">
      <a href="#main" className="skip">Skip to content</a>
      <Navbar />
      <main id="main"><Home /></main>
      <Footer />
    </MotionConfig>
  )
}
