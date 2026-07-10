export default function Privacy() {
  return (
    <div style={{maxWidth: 800, margin: '40px auto', padding: '0 24px', lineHeight: 1.7}}>
      <h1>Privacy Policy</h1>
      <p><strong>Last updated:</strong> July 10, 2026</p>
      
      <h2>Data We Collect</h2>
      <p>Household details, GPS coordinates, photos, user emails for Firebase Authentication. Location data is collected only when you tap "Capture GPS" in the app.</p>
      
      <h2>How We Store Data</h2>
      <p>Data stored locally in SQLite on your device, then synced to Firebase Firestore hosted in South Africa. We use Firebase Auth for login security.</p>
      
      <h2>POPIA Compliance</h2>
      <p>We comply with the Protection of Personal Information Act. Data is used solely for municipal service delivery and planning. Residents can request access or deletion of their data via their municipality.</p>
      
      <h2>Data Sharing</h2>
      <p>Data is only accessible to authorized users from your municipality. We do not sell data to third parties.</p>
      
      <h2>Contact</h2>
      <p>For privacy requests: privacy@georura.app</p>
      
      <p><a href="/">← Back to GeoRura</a></p>
    </div>
  )
}