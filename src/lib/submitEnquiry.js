import { site } from '../data/site'
// Single integration point: set site.enquiryEndpoint (or swap this function for your API/email service).
export async function submitEnquiry(data) {
  if (!site.enquiryEndpoint) { await new Promise(r => setTimeout(r, 700)); return { ok: true, demo: true } }
  const res = await fetch(site.enquiryEndpoint, { method:'POST', headers:{ 'Content-Type':'application/json', Accept:'application/json' }, body: JSON.stringify(data) })
  if (!res.ok) throw new Error('Request failed')
  return { ok: true }
}
