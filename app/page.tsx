import Link from 'next/link'
import Image from 'next/image'

export default function Home() {
  const playStoreUrl = 'https://play.google.com/store/apps/details?id=za.co.amaphisi.georura'
  const apkUrl = '/downloads/georura-v1.0.0.apk' // direct APK for municipalities

  return (
    <>
      <header>
        <div className="container">
          <nav>
            <Link href="/" className="logo">
              <div className="logo-icon">🏛️</div>
              GeoRura
            </Link>
            <div className="nav-links">
              <a href="#features">Features</a>
              <a href="#screenshots">Screenshots</a>
              <Link href="/privacy">Privacy</Link>
              <Link href="/terms">Terms</Link>
              <a href="/download" className="btn btn-primary">Download</a>
            </div>
          </nav>
        </div>
      </header>

      <main>
        <section className="hero">
          <div className="hero-bg">
            <Image 
              src="/home.jpg" 
              alt="Rural landscape South Africa"
              fill
              priority
              style={{objectFit: 'cover', objectPosition: 'center'}}
            />
            <div className="hero-overlay"></div>
          </div>
          
          <div className="container">
            <div className="hero-content">
              <div>
                <div className="badge">🇿🇦 Trusted by SA Municipalities</div>
                <h1>Map Rural Communities with <span>GPS Precision</span></h1>
                <p>Offline-first mobile app for field teams to register households and sync data when back online.</p>
                <div className="hero-cta">
                  <a 
                    href={playStoreUrl} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="btn btn-primary"
                  >
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M3,20.5V3.5C3,2.7 3.7,2 4.5,2H19.5C20.3,2 21,2.7 21,3.5V20.5C21,21.3 20.3,22 19.5,22H4.5C3.7,22 3,21.3 3,20.5M12,19A1,1 0 0,0 13,18A1,1 0 0,0 12,17A1,1 0 0,0 11,18A1,1 0 0,0 12,19Z"/>
                    </svg>
                    Get on Play Store
                  </a>
                  <a href={apkUrl} className="btn btn-secondary">Download APK</a>
                </div>
                <p style={{fontSize: 13, color: 'var(--text-muted)', marginTop: 12}}>
                  Android 7.0+ • 15MB • Free for municipalities
                </p>
              </div>
              <div>
                <Image 
                  src="/screenshots/home.png" 
                  alt="GeoRura app screenshot" 
                  width={360}
                  height={780}
                  className="phone-mockup"
                  priority
                />
              </div>
            </div>
          </div>
        </section>

        <section id="features" className="features">
          <div className="container">
            <div className="section-header">
              <h2>Built for the field</h2>
              <p>Everything field workers need to collect accurate rural household data, even without signal.</p>
            </div>
            <div className="grid">
              {[
                { icon: '📴', title: '100% Offline First', desc: 'Register sites, capture GPS, take photos without internet. Data syncs automatically when you reconnect.' },
                { icon: '📍', title: 'GPS Accuracy Tracking', desc: 'Capture latitude, longitude, altitude and accuracy. Visual map view with all registered sites.' },
                { icon: '👥', title: 'Household Demographics', desc: 'Record household size, age groups, grant recipients, employment status and service access.' },
                { icon: '🔍', title: 'Viewer Mode', desc: 'Read-only access for stakeholders to view all sites across the municipality without edit rights.' },
                { icon: '📊', title: 'Export to Excel/CSV', desc: 'One-tap export of all field data to Excel or CSV for reports and analysis in municipal systems.' },
                { icon: '🔒', title: 'Role-Based Access', desc: 'Admin, Data Collector, and Viewer roles. Secure login with Firebase Auth and local caching.' },
              ].map(f => (
                <div key={f.title} className="card">
                  <div className="card-icon">{f.icon}</div>
                  <h3>{f.title}</h3>
                  <p>{f.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="screenshots" className="screenshots container">
          <div className="section-header">
            <h2>Simple interface for field use</h2>
            <p>Designed for bright sunlight, gloves, and quick data entry.</p>
          </div>
          <div className="screenshot-grid">
            {['home', 'gps', 'list', 'map'].map(name => (
              <div key={name} className="screenshot">
                <Image 
                  src={`/screenshots/${name}.png`} 
                  alt={`${name} screen`}
                  width={300}
                  height={600}
                />
              </div>
            ))}
          </div>
        </section>

        <section className="container">
          <div className="cta" id="download">
            <h2>Ready to map your municipality?</h2>
            <p>Free for South African municipalities. Contact us for training and bulk deployment.</p>
            <div style={{display: 'flex', gap: 16, justifyContent: 'center', flexWrap: 'wrap'}}>
              <a 
                href={playStoreUrl} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="btn"
                style={{background: 'white', color: 'var(--primary)'}}
              >
                Play Store
              </a>
              <a 
                href={apkUrl} 
                className="btn"
                style={{background: 'rgba(255,255,255,0.15)', color: 'white', border: '1.5px solid white'}}
              >
                Direct APK Download
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer id="help">
        <div className="container">
          <div className="footer-grid">
            <div className="footer-col">
              <div className="logo" style={{marginBottom: 16}}>
                <div className="logo-icon">🏛️</div>
                GeoRura
              </div>
              <p style={{color: 'var(--text-secondary)', fontSize: 15}}>
                Offline-first rural household mapping for South African municipalities. Built by amaphisi.
              </p>
            </div>
            <div className="footer-col">
              <h4>Product</h4>
              <a href="#features">Features</a>
              <a href="#screenshots">Screenshots</a>
              <a href="#download">Download</a>
            </div>
            <div className="footer-col">
              <h4>Support</h4>
              <a href="mailto:support@georura.app">support@georura.app</a>
              <a href="tel:+27350000000">0627102645</a>
              <Link href="/privacy">Privacy Policy</Link>
              <Link href="/terms">Terms of Service</Link>
            </div>
            <div className="footer-col">
              <h4>Legal</h4>
              <Link href="/terms">Terms & Conditions</Link>
              <Link href="/privacy">Privacy Policy</Link>
              <a href="#">POPIA Compliance</a>
            </div>
          </div>
          <div className="footer-bottom">
            <p>© 2026 amaphisi. All rights reserved.</p>
            <p>Built in Mandlanzini Richards Bay, KwaZulu-Natal 🇿🇦</p>
          </div>
        </div>
      </footer>
    </>
  )
}