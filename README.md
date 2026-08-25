# 🛡️ AAPDHA SAHAYAK (आपदा सहायक)
### Integrated Disaster Risk Reduction & Emergency Response Portal

**Aapdha Sahayak** is a modern, full-stack disaster management and emergency response platform designed specifically for disaster-prone regions like Himachal Pradesh (and adaptable nationwide). It provides real-time emergency advisories, Doppler weather radar sweeps, interactive safe shelter maps, live mountain highway blockage tracking, and 1-click GPS location transmission to State & National Rescue Teams (NDRF/SDMA).

---

## 🌟 Key Features & Modules

### 1. 🚨 Real-Time Emergency Pop-Up Alert System
- **Critical Disaster Broadcasts**: Instant pop-up alert modals triggered across citizen dashboards upon official broadcast.
- **Web Audio Siren**: Built-in audio siren utilizing Web Audio API for high-severity alerts.
- **Dynamic Safety Instructions**: Contextual precautions based on disaster type (Flash Floods, Landslides, Heavy Snowfall, Cloudbursts).
- **Quick Action Options**: Direct call to Emergency Helpline (1078), navigate to Safe Camps & Map, or Acknowledge & Close.

### 2. 🌤️ Meteorological & Weather Center (`WeatherModule`)
- **Live Weather Metrics**: Real-time temperature, condition, humidity, wind speed, Air Quality Index (AQI), visibility, and UV index.
- **Interactive Doppler Weather Radar**: Canvas-based real-time Doppler radar sweep visualization with intensity contours and sector selection.
- **5-Day Extended Mountain Forecast**: Multi-day weather projections for high-altitude passes and valley sectors.

### 3. 📍 Safe Locations & Emergency Shelters GIS Map (`LocationsModule`)
- **Interactive GIS Disaster Zone Map**: Canvas-rendered regional map of Himachal Pradesh featuring clickable shelter markers with pulsing beacons.
- **8 Detailed Regional Demo Camps**: Comprehensive safe shelter dataset across districts (Kangra, Mandi, Kullu, Shimla, Solan, Chamba).
- **Live Occupancy & Supplies Index**: Real-time bed occupancy progress bars and shelter readiness indices (Food/Water, Medical/Oxygen, Power Backup).
- **Evacuation Route Modal**: Turn-by-turn navigation route guidance, GPS coordinates, and 1-click contact to camp officers.

### 4. 🚗 Live Traffic & Highway Blockage Tracker (`TrafficModule`)
- **Mountain Highway Clearance**: Real-time updates on critical routes (NH-21, NH-5, NH-154, Jalori Pass).
- **Detour Recommendations**: Verified detour routes advised by State Highway Traffic Police.

### 5. 🛠️ Road & Vehicle Assistance Hub (`RoadAssistanceModule`)
- **24/7 Mountain Rescue Services**: Heavy crane dispatch, snow chain fitters, 4x4 winching, and highway mechanics.

### 6. 📡 Live GPS Satellite Safety Tracker (`LiveLocationModule`)
- **High-Precision Geolocation**: Acquires exact latitude/longitude coordinates from browser GPS satellites.
- **Emergency Rescue Dispatch**: 1-click transmission of live coordinates to NDRF Command Base.

### 7. 🆘 Disaster Helps, Do's & Don'ts Hub (`DisasterHelpsModule`)
- **Actionable Disaster Guidelines**: Comprehensive Do's & Don'ts for Floods, Landslides, Snowstorms, and Earthquakes.
- **Emergency SOS Hotlines Grid**: Direct access to 1078 (NDRF), 1070 (SDMA), 108 (Ambulance), and 1033 (NHAI).

### 8. 📢 Citizen Incident Reporting Modal (`IncidentReportModal`)
- Enables citizens to submit real-time reports for landslides, road blockages, or stranded victims with photos, severity levels, and locations.

### 9. ⚙️ Admin Command Center (`AdminDashboard`)
- **Alert Broadcast Studio**: Publish emergency advisories directly to all active citizens.
- **Pop-Up Preview**: Preview alerts before broadcasting.
- **System Health Monitor & User Directory**: View active registered citizens and critical warnings count.

### 10. 🌐 Unauthenticated Public Front Page Access
- Visitors can view live weather and safe locations map on the front page without logging in or creating an account.

### 11. 🎨 Glassmorphism UI & Mobile Responsive Design
- Modern dark & light glassmorphic UI design system.
- Full mobile optimization for smartphones and tablets (iOS & Android).

---

## 🛠️ Tech Stack

- **Frontend**: React 18, Vite 5, Custom CSS3 Glassmorphism System, Web Audio API, HTML5 Canvas API.
- **Backend**: Node.js, Express.js, MongoDB, Mongoose ORM, JWT (JSON Web Tokens), BcryptJS.
- **Architecture**: Modular component structure with robust in-memory offline fallback for uninterrupted operation even during server disconnections.

---

---


---

## 📞 State Emergency Hotlines

- **National Disaster Helpline**: `1078`
- **State Emergency Control Room**: `1070`
- **Medical Ambulance**: `108`
- **NHAI Highway Help**: `1033`

---
