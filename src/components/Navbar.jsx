import { useEffect, useState } from 'react'

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  useEffect(() => { const onScroll = () => setScrolled(window.scrollY > 24); onScroll(); window.addEventListener('scroll', onScroll); return () => window.removeEventListener('scroll', onScroll) }, [])
  const close = () => setOpen(false)
  return <header className={`navbar ${scrolled ? 'is-scrolled' : ''}`}>
    <a className="logo" href="#home" onClick={close}><span>Taste</span>Nest<i>.</i></a>
    <button className={`menu-toggle ${open ? 'open' : ''}`} onClick={() => setOpen(!open)} aria-label="Toggle navigation" aria-expanded={open}><span/><span/><span/></button>
    <nav className={open ? 'open' : ''} aria-label="Main navigation">
      {['Home','About','Menu','Gallery','Reviews','Contact'].map(item => <a key={item} href={`#${item.toLowerCase()}`} onClick={close}>{item}</a>)}
    </nav>
    <a className="nav-cta" href="#reservation">Reserve a table</a>
  </header>
}
