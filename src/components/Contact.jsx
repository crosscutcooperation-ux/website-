import { useState } from 'react'
import { ArrowRight, Mail, Phone, MapPin } from 'lucide-react'
import Reveal from './Reveal'
import Section3D from './Section3D'
import { site } from '../data/site'
import { submitEnquiry } from '../lib/submitEnquiry'
const types = ['Website', 'Mobile App', 'AI & Automation', 'Custom Software', 'UI / UX Design', 'Backend & Cloud', 'Other']
const budgetOptions = ['Under $5k', '$5k – $15k', '$15k – $30k', '$30k – $75k', '$75k+']
const timelineOptions = ['ASAP', '2–4 weeks', '1–3 months', '3–6 months', 'Flexible']
const init = { name: '', email: '', company: '', phone: '', type: '', budget: '', timeline: '', message: '' }
function validate(v) {
  const e = {}
  if (v.name.trim().length < 2) e.name = 'Please enter your name.'
  if (!/^\S+@\S+\.\S+$/.test(v.email)) e.email = 'Enter a valid email address.'
  if (v.phone && !/^[+\d][\d\s().-]{6,}$/.test(v.phone)) e.phone = 'Enter a valid phone number.'
  if (!v.type) e.type = 'Select a project type.'
  if (v.message.trim().length < 20) e.message = 'Tell us a little more (at least 20 characters).'
  return e
}
function Field({ id, label, error, children }) {
  return (
    <div className="field">
      <label htmlFor={id}>{label}</label>
      {children}
      {error && <p className="err" id={id + '-e'} role="alert">{error}</p>}
    </div>
  )
}
export default function Contact() {
  const [v, setV] = useState(init)
  const [errors, setErrors] = useState({})
  const [state, setState] = useState('idle')
  const [demo, setDemo] = useState(false)
  const set = (k) => (e) => setV({ ...v, [k]: e.target.value })
  const p = (k) => ({ id: k, value: v[k], onChange: set(k), 'aria-invalid': !!errors[k], 'aria-describedby': errors[k] ? k + '-e' : undefined })
  const onSubmit = async (e) => {
    e.preventDefault()
    const er = validate(v); setErrors(er)
    if (Object.keys(er).length) { document.getElementById(Object.keys(er)[0])?.focus(); return }
    setState('sending')
    try { const r = await submitEnquiry(v); setDemo(!!r.demo); setState(r.demo ? 'demo' : 'sent'); setV(init) } catch { setState('error') }
  }
  const { email, phone, location } = site.contact
  return (
    <section id="contact" className="sec" aria-label="Contact">
      <Section3D />
      <div className="wrap contact">
        <div>
          <Reveal as="p" className="eyebrow">Contact</Reveal>
          <Reveal as="h2" delay={0.05} className="big">Let's Build Your <span className="hi">Next Project.</span></Reveal>
          <Reveal as="p" delay={0.1} className="lead">Have an idea, business problem or digital product in mind? Let's turn it into something real.</Reveal>
          <Reveal delay={0.15} className="row-btn">
            <a href="#enquiry" className="btn">Start a Project <ArrowRight size={18} /></a>
            <a href={email ? 'mailto:' + email : '#enquiry'} className="btn ghost">Contact Us <ArrowRight size={18} /></a>
          </Reveal>
          {(email || phone || location) && (
            <ul className="info">
              {email && <li><Mail size={16} /><a href={'mailto:' + email}>{email}</a></li>}
              {phone && <li><Phone size={16} /><a href={'tel:' + phone}>{phone}</a></li>}
              {location && <li><MapPin size={16} />{location}</li>}
            </ul>
          )}
        </div>
        <Reveal delay={0.1}>
          <form id="enquiry" className="form" onSubmit={onSubmit} noValidate>
            {state === 'sent' || state === 'demo' ? (
              <div className="ok" role="status">
                <h3>{demo ? 'Demo mode is active.' : 'Thank you — enquiry received.'}</h3>
                <p>{demo ? 'Your message was validated locally but not sent. Add an enquiry endpoint in src/data/site.js to connect this form.' : "We'll get back to you soon."}</p>
                <button type="button" className="btn ghost" onClick={() => setState('idle')}>Send another</button>
              </div>
            ) : (<>
              <div className="two">
                <Field id="name" label="Name *" error={errors.name}><input {...p('name')} autoComplete="name" /></Field>
                <Field id="email" label="Email *" error={errors.email}><input {...p('email')} type="email" autoComplete="email" /></Field>
                <Field id="company" label="Company"><input {...p('company')} autoComplete="organization" /></Field>
                <Field id="phone" label="Phone" error={errors.phone}><input {...p('phone')} type="tel" autoComplete="tel" /></Field>
              </div>
              <div className="two">
                <Field id="type" label="Project Type *" error={errors.type}>
                  <select {...p('type')}><option value="">Select…</option>{types.map((t) => <option key={t}>{t}</option>)}</select>
                </Field>
                <Field id="budget" label="Budget">
                  <select {...p('budget')}><option value="">Select…</option>{budgetOptions.map((b) => <option key={b}>{b}</option>)}</select>
                </Field>
                <Field id="timeline" label="Timeline">
                  <select {...p('timeline')}><option value="">Select…</option>{timelineOptions.map((t) => <option key={t}>{t}</option>)}</select>
                </Field>
              </div>
              <Field id="message" label="Message *" error={errors.message}><textarea {...p('message')} rows={5} /></Field>
              {state === 'error' && <p className="err" role="alert">Something went wrong. Please try again.</p>}
              <button className="btn" disabled={state === 'sending'}>{state === 'sending' ? 'Sending…' : 'Send Project Enquiry'} <ArrowRight size={18} /></button>
            </>)}
          </form>
        </Reveal>
      </div>
    </section>
  )
}
