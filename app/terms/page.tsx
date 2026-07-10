export default function Terms() {
  return (
    <div style={{maxWidth: 800, margin: '40px auto', padding: '0 24px', lineHeight: 1.7}}>
      <h1>Terms & Conditions</h1>
      <p><strong>Last updated:</strong> July 10, 2026</p>
      
      <h2>1. Data Collection & Storage</h2>
      <p>GeoRura collects household data including: names, village, GPS coordinates, demographics, contact numbers, and site photos. All data is stored locally on the device first using SQLite, then synced to Firebase Firestore when internet is available.</p>
      
      <h2>2. Offline Use</h2>
      <p>The app is designed to work offline. You are responsible for securing your device. Data remains on device until manually synced or deleted.</p>
      
      <h2>3. User Roles</h2>
      <p><strong>Admin:</strong> Full access, can delete sites and users.<br/>
         <strong>Data Collector:</strong> Can add and edit sites.<br/>
         <strong>Viewer:</strong> Read-only access to all sites.</p>
      
      <h2>4. Acceptable Use</h2>
      <p>Use only for legitimate municipal data collection. Do not falsify GPS coordinates or household data.</p>
      
      <p><a href="/">← Back to GeoRura</a></p>
    </div>
  )
}