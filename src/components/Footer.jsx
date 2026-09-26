import { nav, site } from '../data/site'
import { services } from '../data/services'
export default function Footer() {
  return (
    <footer className="foot">
      <div className="wrap fgrid">
        <div><a href="#home" className="logo"><b>CROSSCUT</b><small>TECHNOLOGY</small></a><p className="lead sm">Develop / Design / Create</p></div>
        <nav aria-label="Footer"><h4>Navigate</h4>{nav.map(([l, id]) => <a key={id} href={'#' + id}>{l}</a>)}</nav>
        <div><h4>Services</h4>{services.map((s) => <a key={s.n} href="#services">{s.title}</a>)}</div>
        <div><h4>Connect</h4>
          <a href="#contact">Contact</a>
          {site.socials.filter((s) => s.url).map((s) => <a key={s.label} href={s.url} target="_blank" rel="noreferrer">{s.label}</a>)}
        </div>
      </div>
      <div className="wrap copy">© 2026 Crosscut Technology. All rights reserved.</div>
    </footer>
  )
}
