import { site } from '../data/site'

function buildDiscordMessage(data) {
  const lines = [
    'New enquiry received',
    `Name: ${data.name}`,
    `Email: ${data.email}`,
    data.company ? `Company: ${data.company}` : null,
    data.phone ? `Phone: ${data.phone}` : null,
    `Project Type: ${data.type}`,
    data.budget ? `Budget: ${data.budget}` : null,
    data.timeline ? `Timeline: ${data.timeline}` : null,
    '',
    `Message: ${data.message}`,
  ].filter(Boolean)

  return lines.join('\n')
}

export async function submitEnquiry(data) {
  if (!site.enquiryEndpoint) { await new Promise(r => setTimeout(r, 700)); return { ok: true, demo: true } }

  const endpoint = site.enquiryEndpoint
  const isDiscord = endpoint.includes('discord.com/api/webhooks')

  const res = await fetch(endpoint, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
    body: JSON.stringify(isDiscord ? { content: buildDiscordMessage(data) } : data),
  })

  if (!res.ok) throw new Error('Request failed')
  return { ok: true }
}
