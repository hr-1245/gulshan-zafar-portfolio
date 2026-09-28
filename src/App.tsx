import { useEffect, useState } from 'react'

const profileName = 'Abusalar Peer Syed Shah Shahzad Zafar Qadri Jamati Sherazi Sb'
const urduIntroduction = 'سجادہ نشین: آستانہ عالیہ غوثیہ قادریہ جماعتیہ شیرازیہ، ڈیرہ پیر سید ظفر احمد شاہ صاحب رحمت اللہ علیہ، بھکھی شریف، شیخوپورہ (خانقاہ گلشن ظفر)'
const portrait = `${import.meta.env.BASE_URL}profile.jpeg`

const links = {
  facebook: 'https://www.facebook.com/share/1FSHLHdeHA/',
  youtube: 'https://youtube.com/@peersyedshahzadzafar?si=kWV-S1wTaDYoCxXy',
  tiktok: 'https://www.tiktok.com/@peersyedshahzadzafar?_r=1&_t=ZS-99klHCNOfpc',
  maps: 'https://maps.app.goo.gl/Lo56QuS2vTNT5tW38',
  phone: 'tel:+923014163141',
  whatsapp: 'https://wa.me/923099251685',
}

const navigation = [
  ['About', '#about'],
  ['Khanqah', '#khanqah'],
  ['Media', '#media'],
  ['Gallery', '#gallery'],
  ['Location', '#location'],
  ['Contact', '#contact'],
]

function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [lightboxOpen, setLightboxOpen] = useState(false)

  useEffect(() => {
    if (!lightboxOpen) return
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setLightboxOpen(false)
    }
    window.addEventListener('keydown', closeOnEscape)
    return () => window.removeEventListener('keydown', closeOnEscape)
  }, [lightboxOpen])

  const closeMenu = () => setMenuOpen(false)

  return (
    <>
      <header className="site-header">
        <a className="brand" href="#home" aria-label="Gulshan Zafar home" onClick={closeMenu}>
          <span className="brand-mark" aria-hidden="true">گ</span>
          <span className="brand-copy"><strong>Gulshan Zafar</strong><small>OFFICIAL PROFILE</small></span>
        </a>
        <button className="menu-toggle" type="button" aria-expanded={menuOpen} aria-controls="primary-navigation" onClick={() => setMenuOpen(!menuOpen)}>
          <span className="menu-lines" aria-hidden="true"><i /><i /></span>
          <span className="visually-hidden">{menuOpen ? 'Close navigation' : 'Open navigation'}</span>
        </button>
        <nav id="primary-navigation" className={menuOpen ? 'primary-nav is-open' : 'primary-nav'} aria-label="Main navigation">
          {navigation.map(([label, href]) => <a key={href} href={href} onClick={closeMenu}>{label}</a>)}
          <a className="nav-contact" href={links.phone}>Call</a>
        </nav>
      </header>

      <main>
        <section className="hero" id="home">
          <div className="hero-copy">
            <p className="eyebrow"><span /> KHANQAH GULSHAN ZAFAR</p>
            <h1>{profileName}</h1>
            <p className="hero-intro" lang="ur" dir="rtl">{urduIntroduction}</p>
            <div className="hero-actions">
              <a className="button button-primary" href="#about">Discover the profile <span aria-hidden="true">↗</span></a>
              <a className="button button-text" href={links.maps} target="_blank" rel="noreferrer">Visit Khanqah <span aria-hidden="true">↗</span></a>
            </div>
            <div className="hero-location"><span className="location-dot" /> Bhak(k)i Sharif · Sheikhupura, Pakistan</div>
          </div>
          <button className="portrait-frame" type="button" onClick={() => setLightboxOpen(true)} aria-label="Enlarge profile portrait">
            <span className="portrait-outline" />
            <img src={portrait} alt={profileName} fetchPriority="high" />
            <span className="portrait-caption">GULSHAN ZAFAR <span>✦</span></span>
          </button>
          <div className="hero-index" aria-hidden="true">01 / 06</div>
        </section>

        <section className="intro-band" id="about">
          <div className="section-kicker"><span>01</span><span>ABOUT</span></div>
          <div className="intro-content">
            <h2>A place of devotion,<br />a name held with respect.</h2>
            <div className="intro-detail">
              <p lang="ur" dir="rtl">{urduIntroduction}</p>
              <p className="muted-copy">The official website identifies Abusalar Peer Syed Shah Shahzad Zafar Qadri Jamati Sherazi Sb in connection with Khanqah Gulshan Zafar, Bhak(k)i Sharif, Sheikhupura.</p>
            </div>
          </div>
        </section>

        <section className="khanqah-section" id="khanqah">
          <div className="section-kicker"><span>02</span><span>THE KHANQAH</span></div>
          <div className="khanqah-copy">
            <p className="eyebrow">A PLACE IN BHAK(K)I SHARIF</p>
            <h2>Khanqah<br /><em>Gulshan Zafar</em></h2>
            <p className="khanqah-urdu" lang="ur" dir="rtl">خانقاہ گلشن ظفر<br />بھکھی شریف، شیخوپورہ</p>
            <p className="muted-copy">The public site names the Khanqah and gives its location as Bhak(k)i Sharif, Sheikhupura. Further details can be added when verified information is available.</p>
            <a className="inline-link" href={links.maps} target="_blank" rel="noreferrer">Open location in Google Maps <span aria-hidden="true">↗</span></a>
          </div>
          <div className="khanqah-seal" aria-hidden="true"><span>خانقاہ</span><i>✦</i><small>GULSHAN ZAFAR</small></div>
        </section>

        <section className="media-section" id="media">
          <div className="section-heading">
            <div className="section-kicker"><span>03</span><span>MEDIA</span></div>
            <div><h2>Follow the official channels.</h2><p>Public profiles linked from the Gulshan Zafar website.</p></div>
          </div>
          <div className="media-links">
            <a className="media-link" href={links.youtube} target="_blank" rel="noreferrer">
              <span className="media-symbol youtube-symbol" aria-hidden="true">▶</span><span><small>VIDEO CHANNEL</small><strong>YouTube</strong><span className="media-handle">@peersyedshahzadzafar</span></span><span className="media-arrow" aria-hidden="true">↗</span>
            </a>
            <a className="media-link" href={links.facebook} target="_blank" rel="noreferrer">
              <span className="media-symbol facebook-symbol" aria-hidden="true">f</span><span><small>SOCIAL PROFILE</small><strong>Facebook</strong><span className="media-handle">Abusalar Peer Syed Shah Shahzad Zafar</span></span><span className="media-arrow" aria-hidden="true">↗</span>
            </a>
            <a className="media-link" href={links.tiktok} target="_blank" rel="noreferrer">
              <span className="media-symbol tiktok-symbol" aria-hidden="true">♪</span><span><small>SHORT-FORM VIDEO</small><strong>TikTok</strong><span className="media-handle">@peersyedshahzadzafar</span></span><span className="media-arrow" aria-hidden="true">↗</span>
            </a>
          </div>
          <p className="media-note">No individual video URLs were listed on the reference website. Visit the official YouTube channel for available videos.</p>
        </section>

        <section className="gallery-section" id="gallery">
          <div className="section-heading">
            <div className="section-kicker"><span>04</span><span>GALLERY</span></div>
            <div><h2>A portrait, shared by the official site.</h2><p>Additional gallery photography has not been published on the reference site.</p></div>
          </div>
          <button className="gallery-item" type="button" onClick={() => setLightboxOpen(true)} aria-label="Open profile portrait in gallery">
            <img src={portrait} alt={`${profileName}, official profile portrait`} loading="lazy" />
            <span className="gallery-caption"><span>OFFICIAL PROFILE</span><strong>{profileName}</strong><i aria-hidden="true">↗</i></span>
          </button>
        </section>

        <section className="location-section" id="location">
          <div className="section-kicker"><span>05</span><span>LOCATION</span></div>
          <div className="location-content">
            <div className="location-copy">
              <p className="eyebrow">FIND THE KHANQAH</p>
              <h2>Come to<br /><em>Gulshan Zafar.</em></h2>
              <div className="address-block"><span className="address-icon" aria-hidden="true">⌖</span><div><strong>Khanqah Gulshan Zafar</strong><p>Bhak(k)i Sharif, Sheikhupura, Pakistan</p></div></div>
              <div className="location-actions"><a className="button button-primary" href={links.maps} target="_blank" rel="noreferrer">Google Maps <span aria-hidden="true">↗</span></a><a className="button button-text" href={links.phone}>Call the Khanqah</a></div>
            </div>
            <div className="map-frame">
              <iframe title="Map showing the verified Khanqah Gulshan Zafar location" src="https://www.google.com/maps?q=31.64232,73.8767917&z=15&output=embed" loading="lazy" referrerPolicy="no-referrer-when-downgrade" allowFullScreen />
              <div className="map-label"><span className="map-pin" aria-hidden="true">⌖</span><div><strong>Khanqah Gulshan Zafar</strong><small>Bhak(k)i Sharif, Sheikhupura</small></div></div>
            </div>
          </div>
        </section>

        <section className="contact-section" id="contact">
          <div className="section-kicker"><span>06</span><span>CONTACT</span></div>
          <div className="contact-content"><div><p className="eyebrow">GET IN TOUCH</p><h2>Stay connected.</h2></div>
            <div className="contact-links"><a href={links.phone}><small>PHONE</small><strong>+92 301 416 3141</strong><span>↗</span></a><a href={links.whatsapp} target="_blank" rel="noreferrer"><small>WHATSAPP</small><strong>+92 309 925 1685</strong><span>↗</span></a><a href={links.youtube} target="_blank" rel="noreferrer"><small>YOUTUBE</small><strong>Official channel</strong><span>↗</span></a></div>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <a className="brand footer-brand" href="#home"><span className="brand-mark" aria-hidden="true">گ</span><span className="brand-copy"><strong>Gulshan Zafar</strong><small>OFFICIAL PROFILE</small></span></a>
        <nav className="footer-nav" aria-label="Footer navigation">{navigation.map(([label, href]) => <a key={href} href={href}>{label}</a>)}</nav>
        <div className="footer-bottom"><span>© {new Date().getFullYear()} Gulshan Zafar</span><span>Bhak(k)i Sharif · Sheikhupura</span><div className="footer-socials"><a href={links.facebook} target="_blank" rel="noreferrer">Facebook</a><a href={links.youtube} target="_blank" rel="noreferrer">YouTube</a><a href={links.tiktok} target="_blank" rel="noreferrer">TikTok</a></div></div>
      </footer>

      {lightboxOpen && <div className="lightbox" role="dialog" aria-modal="true" aria-label="Profile portrait" onClick={() => setLightboxOpen(false)}>
        <button type="button" className="lightbox-close" onClick={() => setLightboxOpen(false)} aria-label="Close image">×</button>
        <img src={portrait} alt={profileName} onClick={(event) => event.stopPropagation()} />
      </div>}
    </>
  )
}

export default App
