import Link from 'next/link'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Download GeoRura - Android APK & iOS App',
  description: 'Download GeoRura for Android APK, Google Play, or iOS App Store. Offline-first rural mapping app for South African municipalities.',
}

export default function DownloadPage() {
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
              <Link href="/">Home</Link>
              <Link href="/#features">Features</Link>
              <Link href="/privacy">Privacy</Link>
              <Link href="/terms">Terms</Link>
            </div>
          </nav>
        </div>
      </header>

      <main className="download-page">
        <div className="container">
          <div className="download-header">
            <div className="badge">✓ Official Release v1.0.0</div>
            <h1>Download GeoRura</h1>
            <p>Free offline-first mapping app for field teams. Choose your platform below.</p>
          </div>

          <div className="download-grid">
            {/* Android Card */}
            <div className="download-card">
              <div className="platform-icon android">
                <svg width="48" height="48" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.6 9.48l1.43-2.48c.14-.24.05-.55-.19-.69a.51.51 0 0 0-.69.19l-1.45 2.51c-.81-.37-1.73-.58-2.7-.58s-1.89.21-2.7.58L9.85 6.5a.51.51 0 0 0-.69-.19.51.51 0 0 0-.19.69l1.43 2.48C8.52 10.65 7.24 12.58 7.24 14.8c0 2.96 2.41 5.37 5.37 5.37s5.37-2.41 5.37-5.37c0-2.22-1.28-4.15-3.38-5.32M13.5 18.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5m-3-6.5c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1m6 0c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1"/>
                </svg>
              </div>
              <h2>Android</h2>
              <p className="version">Version 1.0.0 • 28 MB</p>
              <p className="req">Requires Android 7.0+</p>
              
              <div className="download-buttons">
                <a 
                  href="https://play.google.com/store/apps/details?id=app.georura" 
                  className="btn btn-primary btn-block"
                  target="_blank"
                  rel="noopener"
                >
                  <img src="/playstore.svg" alt="" width="20" height="20" />
                  Google Play
                </a>
                
                <a 
                  href="/downloads/georura-v1.0.0.apk" 
                  className="btn btn-secondary btn-block"
                  download
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z"/>
                  </svg>
                  Download APK
                </a>
              </div>

              <div className="info-box">
                <strong>APK Install:</strong> Enable "Install from Unknown Sources" in Settings → Security
              </div>
            </div>

            {/* iOS Card */}
            <div className="download-card">
              <div className="platform-icon ios">
                <svg width="48" height="48" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
                </svg>
              </div>
              <h2>iOS</h2>
              <p className="version">Version 1.0.0 • 32 MB</p>
              <p className="req">Requires iOS 14.0+</p>
              
              <div className="download-buttons">
                <a 
                  href="https://apps.apple.com/app/georura/id1234567890" 
                  className="btn btn-primary btn-block"
                  target="_blank"
                  rel="noopener"
                >
                  <img src="/app_logo.svg" alt="" width="20" height="20" />
                  App Store
                </a>
                
                <button className="btn btn-secondary btn-block" disabled>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                  </svg>
                  TestFlight Beta
                </button>
              </div>

              <div className="info-box">
                <strong>Note:</strong> iOS version requires App Store. No direct IPA download.
              </div>
            </div>
          </div>

          <div className="features-list">
            <h3>What's included in v1.0.0</h3>
            <div className="feature-grid">
              <div className="feature-item">✓ Offline GPS capture</div>
              <div className="feature-item">✓ Household registration</div>
              <div className="feature-item">✓ Photo attachments</div>
              <div className="feature-item">✓ Map view of all sites</div>
              <div className="feature-item">✓ Excel/CSV export</div>
              <div className="feature-item">✓ Role-based access</div>
              <div className="feature-item">✓ Auto-sync when online</div>
              <div className="feature-item">✓ Viewer mode for stakeholders</div>
            </div>
          </div>

          <div className="security-notice">
            <h4>🔒 Security & Verification</h4>
            <p>All downloads are digitally signed. APK SHA256: <code>a3f5d9c2e8b1...</code></p>
            <p>Only download from official sources. GeoRura is POPIA compliant.</p>
          </div>
        </div>
      </main>

      <footer>
        <div className="container">
          <div className="footer-bottom">
            <p>© 2026 amaphisi. All rights reserved.</p>
            <p><Link href="/">← Back to Home</Link></p>
          </div>
        </div>
      </footer>
    </>
  )
}