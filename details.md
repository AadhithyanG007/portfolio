# 🏥 MediNexus - Secure Telemedicine Platform

[![React](https://img.shields.io/badge/React-18.3-61DAFB?logo=react)](https://react.dev)
[![Node.js](https://img.shields.io/badge/Node.js-18+-339933?logo=node.js)](https://nodejs.org)
[![PostgreSQL](https://img.shields.io/badge/PostgreSQL-Neon-4169E1?logo=postgresql)](https://neon.tech)
[![Deployed](https://img.shields.io/badge/Deployed-Vercel%20%2B%20Render-black)](https://medinexus-sandy.vercel.app)
[![License](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)

A full-stack telemedicine application enabling secure video consultations, AI-powered health assistance, real-time chat, lab report management, prescription tracking, email OTP password recovery, account settings, and comprehensive admin governance — built with a teal & obsidian design system.

## 🌐 Live Demo

| Service         | URL                                                                      |
| --------------- | ------------------------------------------------------------------------ |
| **Frontend**    | [https://medinexus-sandy.vercel.app](https://medinexus-sandy.vercel.app) |
| **Backend API** | [https://medinexus-api.onrender.com](https://medinexus-api.onrender.com) |

---

## ✨ Features

### 👤 Patient Portal

- **Book Appointments** - 24/7 booking with doctor selection & **Grouped Time Slots** (Morning/Afternoon/Evening)
- **1.5 Hour Spacing Validation** - Prevents booking appointments too close together
- **Real-time Video Calls** - P2P video via PeerJS with WebRTC
- **🤖 MediBot AI Chat** - Groq-powered (Llama 3.3 70B) health assistant with symptom analysis, severity assessment, and doctor recommendations
- **💬 In-App Chat** - Real-time messaging with doctors during active appointments (Features **unread notification dots** & auto-blocks chat on missed appointments)
- **📋 Health Records** - View/download lab reports, scans, clinical notes (prescriptions separated into own tab)
- **📄 Inline PDF Viewer** - View uploaded lab report PDFs directly in the browser via base64 rendering
- **💊 Prescriptions Tab** - Dedicated view with medicine reminders and browser notifications
- **🔬 Lab Report Upload** - Upload PDF lab reports with inline viewing support
- **💳 Payment Processing** - Official **Stripe Checkout Gateway** integration for secure session-based payments
- **⚙️ Account Settings** - Change email (with password verification) and update password
- **🔑 Forgot Password** - Email OTP-based password reset with 90s cooldown, max 2 resends, 3 resets/day
- **System-Wide Pagination** - Offset-based data loading handling large subsets of appointment histories effortlessly.
- **🔔 Live Notifications** - Global Notification Bell polling system for real-time alerts on booking statuses.
- **Refresh Button** - Manual refresh to update appointment status
- **Smart Status Indicators**:
  - 🟢 **Join Now** - Appointment is active, click to join
  - 🟠 **Starting Soon** - Within 1 hour of appointment time
  - 🔴 **Missed** - Window expired (>60 min late)

### 👨‍⚕️ Doctor Dashboard

- **Queue Management** - View upcoming and today's appointments with live status
- **Patient Records** - Access patient history with dates and file downloads
- **Clinical Console** - Take notes and issue prescriptions during video calls
- **Strict Appointment Completion** - "Complete" button mathematically bound to the time window. Button entirely disappears if an appointment defaults to "Missed" after 60 minutes.
- **Booking Requests** - Accept/Reschedule/Cancel after-hours requests
- **💬 In-App Chat** - Message patients during active appointments (Features **unread notification dots** & auto-blocks chat on missed appointments)
- **📅 Leave Calendar** - Interactive monthly calendar to schedule full-day or partial leaves with time slots
- **📄 Inline PDF Viewer** - View patient lab report PDFs directly from doctor reports page
- **Reports** - View completed consultations with clinical notes
- **⚙️ Account Settings** - Change email and password from dashboard
- **Emergency Rescheduling** - Atomic dual-phase rescheduling before/after payments with strict conflict slot-locking.
- **Background Cron Workers** - Automated Node.js routines cancel pending payments (>10m limits) and enforce Missed meeting timeouts.
- **3-Level Patient Reports** - Deep-drilled analytics architecture (Patient List → Detail View → Categorized Document Tabs).
- **System-Wide Pagination** - Offset-based data arrays securing queue integrity.
- **🔔 Live Notifications** - Global polling framework delivering real-time patient-generated workflow alerts to the Doctor.
- **Refresh Button** - Manual refresh for real-time updates
- **Doctor Controls**:
  - 🟢 **Call Now** (pulsing) - Start video immediately
  - 🟠 **Start Call** - Initiate call when starting soon
  - 🔴 **Missed** - Window expired

### 🛡️ Admin Panel

- **Doctor Management** - Add, edit, delete doctors
- **Patient Management** - Add and delete patients
- **Audit Logs** - Track all system activities with real IP detection
- **System Oversight** - View all users and monitor activity

### 📹 Video Consultation Features

- **PeerJS WebRTC** - Peer-to-peer encrypted video calls
- **Toggle Controls** - Mute/unmute mic, enable/disable video
- **Clinical Notes Drawer** - Doctors can take notes during calls
- **Prescription Writing** - Issue prescriptions with dosage, frequency, and instructions during calls
- **Robust Disconnect Handling** - Both parties redirected when call ends
- **Conditional Auto-Complete** - Requires doctor to attend (`doctor_attended` flag). Auto-timer safely disables if the session expires to block false completions on missed sessions.
- **Chat Auto-Close** - Chat disabled and hidden when appointment is completed/cancelled/missed
- **Camera Release** - Permissions properly released after call

### 🤖 MediBot AI

- **AI Engine** - Groq (Llama 3.3 70B) for symptom analysis and health guidance
- **Symptom Analysis** - Severity assessment (Low/Medium/High) with reasoning
- **Doctor Recommendations** - Suggests which specialist to consult
- **Multi-turn Conversations** - Maintains context across messages
- **Quick Prompts** - Pre-built symptom descriptions for easy start
- **Teal-themed UI** - Matches the application's design system

---

## 🛠️ Tech Stack

| Layer          | Technologies                                                 |
| -------------- | ------------------------------------------------------------ |
| **Frontend**   | React 18, TypeScript, Vite, TailwindCSS, shadcn/ui           |
| **AI**         | Groq SDK (Llama 3.3 70B)                                     |
| **Video**      | PeerJS (WebRTC) for P2P encrypted calls                      |
| **Backend**    | Node.js, Express, PostgreSQL (Neon), Background Cron Workers |
| **Auth**       | JWT, bcryptjs                                                |
| **Email**      | Brevo HTTP API (transactional OTP emails for password reset) |
| **Security**   | Rate limiting, Input validation, CORS, Helmet headers        |
| **Deployment** | Vercel (Frontend), Render (Backend), Neon (Database)         |
| **Design**     | Teal (hsl 174°) + Obsidian Black dual-theme system           |

---

## 📈 Enterprise Load Testing

MediNexus is stress-tested to handle high-traffic Telemedicine influxes.
We utilize **Artillery.io** to simulate heavy concurrency logic targeting the Render API:

- **Test Metrics:** 180 virtual users spinning up sockets and API endpoints concurrently.
- **Results:** Handled perfectly by our custom Express Rate Limiter (200 requests/min). P95 latency maintained below `500ms` despite synthetic DDoS loads.
- See `artillery.yml` and `report.json` for validation.

---

## 🤖 Automated Project Management

Includes a custom python logbook generator (`generate_logbook.py`) which automatically synthesizes the team's weekly contributions into academic DOCX formats for rapid institutional submissions.

---

## 🎨 Design System

MediNexus uses a curated **Teal & Obsidian** theme:

| Mode      | Primary                     | Background              | Cards          |
| --------- | --------------------------- | ----------------------- | -------------- |
| **Light** | Teal-600 `hsl(174 78% 24%)` | `hsl(210 40% 98%)`      | White          |
| **Dark**  | Teal-400 `hsl(174 72% 46%)` | Obsidian `hsl(0 0% 4%)` | `hsl(0 0% 6%)` |

- **Gradients**: Teal-based linear gradients for buttons, headers, and accents
- **Typography**: Inter font family (300–800 weights)
- **Shadows**: Custom glow effects using teal hue
- **Dark Mode**: Full obsidian black theme with localStorage persistence

---

## 🚀 Deployment Workflow

The project uses **CI/CD** for automated deployments:

```
git push origin main
    ↓
GitHub ──→ Vercel or AWS (Frontend) → Live in ~1-3 mins
    └─→ Render (Backend)         → Live in ~2 mins
```

### Frontend Environment (Vercel + AWS)

Set this variable in any frontend host so the same code works on both Vercel and AWS:

```env
VITE_API_BASE_URL=https://medinexus-api.onrender.com
```

- Vercel: Project Settings -> Environment Variables -> `VITE_API_BASE_URL`
- AWS (Amplify or S3/CloudFront pipeline): add `VITE_API_BASE_URL` in build environment variables
- Optional local frontend `.env`:

```env
VITE_API_BASE_URL=http://localhost:5000
```

### Development Workflow

1. **Local**: Run `npm run dev` (frontend) and `cd server && npm run dev` (backend)
2. **Commit**: `git add .` → `git commit -m "feat: description"`
3. **Deploy**: `git push origin main` → Auto-deploys!

---

## 🚀 Quick Start (Local)

### Prerequisites

- Node.js ≥18.0.0
- PostgreSQL 15+ (or Neon connection string)

### 1. Clone & Install

```bash
git clone https://github.com/AadhithyanG007/Medinexus.git
cd medinexus

npm install          # Frontend
cd server && npm install  # Backend
```

### 2. Environment Configuration

Create `server/.env`:

```env
DATABASE_URL=postgresql://user:pass@host/db?sslmode=require
JWT_SECRET=your-secret-key
JWT_EXPIRES_IN=24h
PORT=5000
FRONTEND_URL=http://localhost:8080
# Production can be multiple origins (comma-separated, no spaces):
# FRONTEND_URL=http://51.20.140.217,https://medinexus-sandy.vercel.app

# AI Configuration (at least one required for MediBot)
GROQ_API_KEY=your-groq-key        # Get free key from https://console.groq.com/keys

# Email (Brevo HTTP API — for forgot password OTP)
EMAIL_USER=your-sender@gmail.com   # Verified sender in Brevo
BREVO_API_KEY=your-brevo-api-key   # Get free key from https://brevo.com (starts with xkeysib-)

# Stripe Payment (Test Mode)
STRIPE_SECRET_KEY=sk_test_... # Get free test key from Stripe Dashboard
```

Create frontend `.env`:

```env
VITE_API_BASE_URL=http://localhost:5000
```

### 3. Run

```bash
# Terminal 1: Backend
cd server && npm run dev

# Terminal 2: Frontend
npm run dev
```

**Access:** `http://localhost:8080`

---

## 🔐 Default Credentials

| Role        | Email                     | Password   |
| ----------- | ------------------------- | ---------- |
| **Admin**   | `admin@medinexus.com`     | `admin123` |
| **Doctor**  | `dr.sharma@medinexus.com` | `admin123` |
| **Patient** | `patient@example.com`     | `admin123` |

> ⚠️ Change these in production!

---

## 🔌 API Endpoints

### Authentication

| Method | Endpoint                    | Description                                 |
| ------ | --------------------------- | ------------------------------------------- |
| POST   | `/api/auth/login`           | User login (rate limited: 10/min)           |
| POST   | `/api/auth/register`        | Patient registration                        |
| POST   | `/api/auth/add-doctor`      | Admin: Add new doctor                       |
| GET    | `/api/auth/me`              | Get current user                            |
| PUT    | `/api/auth/update-email`    | Change email (requires current password)    |
| PUT    | `/api/auth/update-password` | Change password (requires current password) |
| POST   | `/api/auth/forgot-password` | Generate & send OTP via email               |
| POST   | `/api/auth/resend-otp`      | Resend OTP (max 2 resends, 90s cooldown)    |
| POST   | `/api/auth/verify-otp`      | Verify 6-digit OTP                          |
| POST   | `/api/auth/reset-password`  | Reset password after OTP verification       |

### Appointments

| Method | Endpoint                         | Description                |
| ------ | -------------------------------- | -------------------------- |
| GET    | `/api/appointments`              | List user's appointments   |
| POST   | `/api/appointments/book`         | Book new appointment       |
| PUT    | `/api/appointments/:id/pay`      | Process payment            |
| PUT    | `/api/appointments/:id/complete` | Mark as completed          |
| PUT    | `/api/appointments/:id/accept`   | Doctor accepts request     |
| PUT    | `/api/appointments/:id/reject`   | Doctor rejects/reschedules |

### Records & Uploads

| Method | Endpoint                                 | Description                             |
| ------ | ---------------------------------------- | --------------------------------------- |
| GET    | `/api/patient/me`                        | Get patient vitals & records            |
| POST   | `/api/doctor/vitals`                     | Update patient vitals                   |
| POST   | `/api/doctor/records`                    | Create health record                    |
| GET    | `/api/doctor/patient/:id`                | Get patient info                        |
| POST   | `/api/upload/lab-report`                 | Upload lab report PDF                   |
| GET    | `/api/upload/lab-report/:id`             | Download lab report as PDF              |
| GET    | `/api/upload/lab-report-data/:id`        | Get lab report as base64 JSON (patient) |
| GET    | `/api/upload/lab-report-data-doctor/:id` | Get lab report as base64 JSON (doctor)  |

### Prescriptions

| Method | Endpoint                             | Description                       |
| ------ | ------------------------------------ | --------------------------------- |
| GET    | `/api/prescriptions`                 | List user's prescriptions         |
| POST   | `/api/prescriptions`                 | Doctor: Create prescription(s)    |
| GET    | `/api/prescriptions/appointment/:id` | Get prescriptions for appointment |

### Chat

| Method | Endpoint                   | Description       |
| ------ | -------------------------- | ----------------- |
| GET    | `/api/chat/:appointmentId` | Get chat messages |
| POST   | `/api/chat/:appointmentId` | Send chat message |

### AI

| Method | Endpoint       | Description                                  |
| ------ | -------------- | -------------------------------------------- |
| POST   | `/api/ai/chat` | MediBot AI conversation (Groq Llama 3.3 70B) |

### Doctor Leaves

| Method | Endpoint          | Description                          |
| ------ | ----------------- | ------------------------------------ |
| GET    | `/api/leaves`     | Get doctor's leaves                  |
| POST   | `/api/leaves`     | Schedule leave (full-day or partial) |
| DELETE | `/api/leaves/:id` | Cancel a leave                       |

### Admin

| Method | Endpoint                  | Description    |
| ------ | ------------------------- | -------------- |
| GET    | `/api/admin/logs`         | Get audit logs |
| GET    | `/api/admin/users`        | List all users |
| GET    | `/api/admin/doctors`      | List doctors   |
| PUT    | `/api/admin/doctors/:id`  | Edit doctor    |
| DELETE | `/api/admin/doctors/:id`  | Delete doctor  |
| GET    | `/api/admin/patients`     | List patients  |
| POST   | `/api/admin/patients`     | Add patient    |
| DELETE | `/api/admin/patients/:id` | Delete patient |

---

## 🔒 Security Features

- **JWT Authentication** - Stateless, secure session management
- **Password Hashing** - bcrypt with salt rounds
- **Rate Limiting** - 10 req/min for auth, 200 req/min for API
- **Input Validation** - Schema-based validation with sanitization
- **CORS** - Origin verification with allowed list
- **Security Headers** - X-Frame-Options, X-XSS-Protection, Content-Type-Options, Referrer-Policy
- **Audit Logging** - All actions logged with real IP detection
- **Privacy Auto-Cleanup** - Automatically wipes P2P chat `messages` linking to appointments the exact moment they terminate (Completed/Missed) enforcing a zero-retention HIPAA policy.
- **Video Access Control** - Appointment + payment verification
- **Time-Gated Video** - Join only within appointment window (10min before to 60min after)
- **Booking Validation** - No past times, 1.5hr spacing between appointments
- **Chat Access Control** - Chat only available for confirmed appointments
- **Email OTP Password Reset** - 6-digit OTP via Resend API, 15-min expiry
- **OTP Rate Limits** - 90s resend cooldown, max 2 resends per session, 3 resets/day per account
- **Profile Edit Security** - Email changes require current password verification

---

## 📹 Video Call Flow

```mermaid
sequenceDiagram
    participant D as Doctor
    participant S as PeerJS Server
    participant P as Patient

    D->>S: Create Peer ID: medinexus-{aptId}-doctor
    D->>D: Wait for Patient ("Connecting...")

    P->>S: Create Peer ID: medinexus-{aptId}-patient
    P->>S: Call doctor's Peer ID

    S-->>D: Incoming call
    D->>P: Answer with stream
    P->>D: Exchange video/audio (WebRTC)

    Note over D,P: Consultation in progress
    Note over D: Can open Notes Drawer
    Note over D: Write prescription during call
    Note over D,P: Can exchange chat messages

    alt Doctor ends call
        D->>D: End Call clicked
        D->>D: API: Mark appointment Completed
        D->>D: Chat auto-disabled
        D->>S: Close connection
        S-->>P: call.on('close') fires
        P->>P: Redirect to Patient Dashboard
        D->>D: Redirect to Doctor Dashboard
    end

    alt Patient ends call
        P->>P: End Call clicked
        P->>S: Close connection
        S-->>D: call.on('close') fires
        D->>D: Redirect to Doctor Dashboard
        P->>P: Redirect to Patient Dashboard
    end
```

---

## 📋 Application Flows

### 🛡️ Admin Flow

```mermaid
graph TD
    A[🔐 Admin Login] --> B[📊 Admin Dashboard]

    B --> C[👥 User Management]
    B --> D[📋 Audit Logs]

    C --> E[👨‍⚕️ Doctor Management]
    C --> F[👤 Patient Management]

    E --> E1[➕ Add Doctor]
    E --> E2[✏️ Edit Doctor]
    E --> E3[🗑️ Delete Doctor]

    F --> F1[➕ Add Patient]
    F --> F2[🗑️ Delete Patient]

    D --> D1[📍 View Logs with IP]
    D --> D2[🔍 Filter by Action/User]

    E1 --> G[✅ Doctor Created]
    F1 --> H[✅ Patient Created]
```

---

### 👨‍⚕️ Doctor Flow

```mermaid
graph TD
    A[🔐 Doctor Login] --> B[📋 Queue Dashboard]

    B --> C{📨 Booking Request?}
    B --> L1[📅 Manage Leaves]
    B --> L2[📊 View Reports]

    C -->|Orange Badge| D[Review Request]
    D --> D1[✅ Accept]
    D --> D2[📅 Reschedule]
    D --> D3[❌ Cancel]

    D1 --> E[Patient Can Pay]
    D2 --> E

    C -->|No Request| F[View Confirmed Appointments]
    E --> F

    F --> G{⏰ Time Window?}
    G -->|Within Window| H[🎥 Join Video]
    G -->|Outside Window| I[❌ Cannot Join Yet]

    F --> F1[💬 Chat with Patient]

    H --> J[🟢 Join Call]
    J --> K[👥 Connected with Patient]
    K --> KM[📝 Open Clinical Console]
    KM --> M[Write Notes/Prescription]

    M --> N{Save Prescription?}
    N -->|Yes| O[💊 Save to Patient Records]
    N -->|No| P[📞 End Call]
    O --> P

    P --> Q[📊 Notes Saved + Chat Closed]
    Q --> R[↩️ Return to Dashboard]

    L1 --> L1A[📅 Click Date on Calendar]
    L1A --> L1B[🏠 Full Day Off or ⏰ Specific Hours]
    L1B --> L1C[✅ Leave Scheduled]
```

---

### 👤 Patient Flow

```mermaid
graph TD
    A[🆕 Register / 🔐 Login] --> B[📊 Patient Dashboard]

    B --> C[📅 Book Appointment]
    B --> D[📋 View Health Records]
    B --> E[💊 View Prescriptions]
    B --> F[🤖 Ask MediBot]

    C --> C1[🔍 Select Doctor]
    C1 --> C2[📆 Pick Date & Time]

    C2 --> C3{📋 Validation Checks}
    C3 -->|Past time?| C4[❌ Rejected]
    C3 -->|Within 1.5hr of existing?| C5[❌ Too Close]
    C3 -->|Valid| H{⏰ Time Slot Type?}

    H -->|Before 4:30 PM| I[🟢 Standard Booking]
    H -->|After 4:30 PM| J[🟠 Request Booking]

    I --> K[Status: Pending]
    J --> L[Status: Requested]

    L --> M{👨‍⚕️ Doctor Decision}
    M -->|Accept| K
    M -->|Reschedule| N[📅 New Time Assigned]
    M -->|Reject| O[❌ Cancelled]
    N --> K

    K --> P[💳 Make Payment]
    P --> Q[Status: Confirmed ✅]

    Q --> Q1[💬 Chat with Doctor]
    Q --> R{⏰ Appointment Status?}
    R -->|Within Window| S[🟢 Join Now]
    R -->|Within 1 hour| T[🟠 Starting Soon]
    R -->|Too early| U[📅 Show Date]
    R -->|>60 min late| V[🔴 Missed]

    S --> W[🎥 Click Join Now]
    W --> X[👥 Connected with Doctor]
    X --> Y[🗣️ Consultation]
    Y --> Z[👨‍⚕️ Doctor Ends Call]

    Z --> AA[Status: Completed + Chat Closed]
    AA --> AB[📄 Prescription in Prescriptions Tab]
    AB --> AC[⬇️ Download Records]

    D --> D1[👁️ View Lab Report Inline]
    D --> D2[⬇️ Download PDF]
    D --> D3[📤 Upload Lab Report]

    F --> F1[💬 Describe Symptoms]
    F1 --> F2[🤖 AI Severity Assessment]
    F2 --> F3[👨‍⚕️ Doctor Recommendation]
```

---

## 🔄 Complete System Flow

```mermaid
sequenceDiagram
    participant Admin
    participant Doctor
    participant AI as MediBot AI
    participant Patient
    participant System

    Admin->>System: Add Doctor/Patient
    Patient->>System: Register & Book Appointment

    alt After-Hours Booking
        System-->>Doctor: Booking Request
        Doctor->>System: Accept/Reschedule/Reject
    end

    Patient->>System: Make Payment
    System-->>Patient: Chat Enabled
    Patient->>Doctor: Exchange Chat Messages

    Patient->>AI: Describe Symptoms
    AI-->>Patient: Severity + Doctor Recommendation

    Note over Doctor,Patient: At Appointment Time
    Doctor->>System: Preview → Join Video
    Patient->>System: Preview → Join Video
    Doctor->>System: Save Prescription
    Doctor->>System: End Call

    System-->>Patient: Chat Disabled
    System-->>Patient: Prescription in Prescriptions Tab
    System-->>Patient: Health Record Available
    System-->>Admin: Audit Log Updated
```

---

## 📁 Project Structure

```
medinexus/
├── src/                          # React Frontend (TypeScript)
│   ├── components/               # Shared UI components
│   │   ├── ChatPanel.tsx         # Real-time appointment chat
│   │   ├── SymptomChecker.tsx    # MediBot AI chat interface
│   │   ├── LabReportUpload.tsx   # PDF upload component
│   │   └── layout/              # Dashboard layout, sidebar, theme
│   ├── contexts/                 # Auth context
│   ├── config/                   # API base URL config
│   └── pages/
│       ├── patient/              # Patient dashboard, appointments, records, prescriptions
│       ├── doctor/               # Doctor queue, reports, leave calendar
│       ├── admin/                # Admin panel, logs, user management
│       └── shared/
│           └── EditProfile.tsx   # Account settings (email + password change)
│
├── server/                       # Express Backend (Node.js)
│   ├── routes/
│   │   ├── ai.js                 # MediBot AI (Groq Llama 3.3 70B)
│   │   ├── appointments.js       # Booking, payment, status management
│   │   ├── auth.js               # Login, register, profile edit, forgot password
│   │   ├── chat.js               # Real-time messaging
│   │   ├── leaves.js             # Doctor leave scheduling
│   │   ├── prescriptions.js      # Prescription CRUD
│   │   ├── records.js            # Health records & vitals
│   │   ├── upload.js             # Lab report PDF upload & viewer
│   │   └── video.js              # Video call validation
│   ├── middleware/                # Auth, Rate limiting, Validation
│   ├── config/                   # Database pool (Neon)
│   └── utils/
│       ├── auditLogger.js        # Audit logging utility
│       └── emailService.js       # Brevo HTTP API (OTP emails)
│
└── README.md
```

---

## 🤝 Contributing

1. Fork the repository
2. Create feature branch (`git checkout -b feature/amazing`)
3. Commit changes (`git commit -m 'Add amazing feature'`)
4. Push to branch (`git push origin feature/amazing`)
5. Open a Pull Request

---

## 📄 License

MIT License - see [LICENSE](LICENSE) for details.

---

## 📊 System Diagrams

### 🗄️ ER Diagram (Database Schema)

```mermaid
erDiagram
    USERS ||--o{ APPOINTMENTS : "books/handles"
    USERS ||--o{ HEALTH_RECORDS : "has/creates"
    USERS ||--o| PATIENT_VITALS : "has"
    USERS ||--o{ AUDIT_LOGS : "generates"
    USERS ||--o{ PRESCRIPTIONS : "prescribes/receives"
    USERS ||--o{ MESSAGES : "sends"
    USERS ||--o{ DOCTOR_LEAVES : "schedules"
    APPOINTMENTS ||--o{ HEALTH_RECORDS : "generates"
    APPOINTMENTS ||--o{ PRESCRIPTIONS : "includes"
    APPOINTMENTS ||--o{ MESSAGES : "contains"

    USERS {
        uuid id PK
        varchar email UK
        varchar password
        varchar name
        varchar phone
        varchar role "patient/doctor/admin"
        varchar specialization
        int daily_reset_count "password reset tracking"
        date last_reset_date "per-day reset limit"
        timestamp created_at
    }

    APPOINTMENTS {
        uuid id PK
        uuid patient_id FK
        uuid doctor_id FK
        varchar status "Pending/Confirmed/Completed/Cancelled/Requested/Missed"
        varchar payment_status "Unpaid/Paid/Refunded"
        decimal fee
        text reason
        text clinical_notes
        boolean doctor_attended "defaults to false"
        date scheduled_date
        time scheduled_time
    }

    HEALTH_RECORDS {
        uuid id PK
        uuid patient_id FK
        uuid doctor_id FK
        varchar type "Prescription/Lab Report/Scan/Clinical Note"
        varchar title
        text description
        text file_url "base64 PDF for Lab Reports"
        date record_date
    }

    PATIENT_VITALS {
        uuid id PK
        uuid patient_id FK
        int heart_rate
        varchar blood_pressure
        decimal temperature
        decimal weight
        timestamp last_checkup_date
    }

    PRESCRIPTIONS {
        uuid id PK
        uuid appointment_id FK
        uuid patient_id FK
        uuid doctor_id FK
        varchar medicine_name
        varchar dosage
        varchar frequency
        int duration_days
        text instructions
        timestamp created_at
    }

    MESSAGES {
        uuid id PK
        uuid appointment_id FK
        uuid sender_id FK
        text content
        boolean is_read "defaults to false"
        timestamp created_at
    }

    DOCTOR_LEAVES {
        uuid id PK
        uuid doctor_id FK
        date leave_date
        time start_time "NULL for full day"
        time end_time "NULL for full day"
        varchar reason
        timestamp created_at
    }

    AUDIT_LOGS {
        uuid id PK
        uuid user_id FK
        varchar user_name
        varchar role
        varchar action
        jsonb details
        varchar ip_address
        timestamp timestamp
    }
```

---

### 👥 Use Case Diagram

```mermaid
graph TB
    subgraph Actors
        P[👤 Patient]
        D[👨‍⚕️ Doctor]
        A[🛡️ Admin]
    end

    subgraph "Patient Use Cases"
        P1[Register/Login]
        P2[Book Appointment]
        P3[Make Payment]
        P4[Join Video Call]
        P5[View Health Records]
        P6[View Prescriptions]
        P7[Upload Lab Reports]
        P8[Chat with Doctor]
        P9[Ask MediBot AI]
        P10[Edit Profile / Settings]
        P11[Forgot Password / OTP Reset]
    end

    subgraph "Doctor Use Cases"
        D1[Login]
        D2[View Patient Queue]
        D3[Accept/Reject Booking]
        D4[Join Video Call]
        D5[Write Clinical Notes]
        D6[Issue Prescription]
        D7[Update Patient Vitals]
        D8[Chat with Patient]
        D9[Schedule Leaves]
        D10[View Patient Records / PDFs]
        D11[Edit Profile / Settings]
        D12[Forgot Password / OTP Reset]
    end

    subgraph "Admin Use Cases"
        A1[Login]
        A2[Add/Edit Doctors]
        A3[Add/Delete Patients]
        A4[View Audit Logs]
        A5[Monitor System Activity]
    end

    P --> P1
    P --> P2
    P --> P3
    P --> P4
    P --> P5
    P --> P6
    P --> P7
    P --> P8
    P --> P9
    P --> P10
    P --> P11

    D --> D1
    D --> D2
    D --> D3
    D --> D4
    D --> D5
    D --> D6
    D --> D7
    D --> D8
    D --> D9
    D --> D10
    D --> D11
    D --> D12

    A --> A1
    A --> A2
    A --> A3
    A --> A4
    A --> A5

    P4 -.->|connects to| D4
    P8 -.->|messages| D8
    D6 -.->|saved to| P6
    P9 -.->|AI analysis| P2
```

---

### 🏗️ System Block Diagram

```mermaid
graph TB
    subgraph "Frontend - React + TypeScript + Vite"
        UI[User Interface]
        subgraph Pages
            LP[Landing Page]
            AUTH[Login/Register + Forgot Password]
            PD[Patient Dashboard]
            DD[Doctor Dashboard]
            AP[Admin Panel]
            VR[Video Room]
            SP[Account Settings Page]
        end
        subgraph "Shared Components"
            MB[MediBot AI Chat]
            CP[Chat Panel]
            LU[Lab Report Upload]
            PV[PDF Viewer Modal]
            FPM[Forgot Password Modal]
        end
    end

    subgraph "Backend - Node.js + Express"
        API[REST API Server]
        subgraph Middleware
            AM[Auth Middleware]
            RL[Rate Limiter]
            VAL[Input Validator]
        end
        subgraph Routes
            AR[Auth Routes]
            APR[Appointment Routes]
            RR[Records Routes]
            ADR[Admin Routes]
            VID[Video Routes]
            AIR[AI Routes]
            CHR[Chat Routes]
            LVR[Leaves Routes]
            PRR[Prescription Routes]
            UPR[Upload Routes]
        end
    end

    subgraph "Database - PostgreSQL Neon"
        DB[(PostgreSQL)]
        subgraph Tables
            T1[users]
            T2[appointments]
            T3[health_records]
            T4[patient_vitals]
            T5[audit_logs]
            T6[prescriptions]
            T7[messages]
            T8[doctor_leaves]
        end
    end

    subgraph "External Services"
        PEER[PeerJS Server]
        JWT[JWT Auth]
        GROQ[Groq AI API]
        BREVO[Brevo Email API]
        STRIPE[Stripe Checkout API]
    end

    UI --> API
    API --> AM
    AM --> RL
    RL --> VAL
    VAL --> AR
    VAL --> APR
    VAL --> RR
    VAL --> ADR
    VAL --> VID
    VAL --> AIR
    VAL --> CHR
    VAL --> LVR
    VAL --> PRR
    VAL --> UPR

    AR --> DB
    APR --> DB
    RR --> DB
    ADR --> DB
    CHR --> DB
    LVR --> DB
    PRR --> DB
    UPR --> DB

    VR --> PEER
    AM --> JWT
    AIR --> GROQ
    AR --> BREVO
    APR --> STRIPE
```

---

**MediNexus** - _Telemedicine Made Secure_ 🏥
----- end of medinexus ---

# 🌊 Infinity Pools

<div align="center">
  <img src="./logo.png" alt="Infinity Pools Logo" width="180" style="margin-bottom: 20px;" />
  <p><strong>A Premium Luxury Pool Architecture & Construction Experience</strong></p>
  <p>Built with React 19, Vite, Tailwind CSS v4, Framer Motion, and React Three Fiber</p>
</div>

---

## 🏛️ Project Overview

**Infinity Pools** is a modern, high-end digital showcase designed for a luxury custom swimming pool and water fountain builder in Kerala, India. The application features state-of-the-art interactive visual elements, fluid scroll mechanics, and a pristine dark-mode aesthetic with custom HSL color tokens representing deep pool hues, cyan waters, and premium brass accents.

Every aspect of the user interface is crafted to evoke premium quality, from custom transparent assets to smooth spatial scroll-driven parallax animations.

---

## 🌟 Key Features & Customizations

### 1. 🌊 Interactive 3D Water Scene

- **Vertex Shaders & Math Waves:** High-performance, mathematical sine-wave wave simulations using Three.js and `@react-three/fiber` to animate water physics.
- **Atmospheric Lighting:** Combines ambient, directional, and point lighting to project high-fidelity specular highlights and realistic glows onto the water surface.
- **Floating Particles:** Ambient floating micro-particles simulating reflecting water mist or dust motes under custom fog settings.

### 2. 🔍 Scroll-Driven Zoom Parallax Grid

- **Cinematic Scrolling:** Uses `motion/react` (Framer Motion) scroll hooks to control the spatial scaling of multi-dimensional premium villa and resort pool galleries.
- **Responsive Visual Spacing:** Multi-directional spatial translations that dynamically adapt to the viewport width.
- **High-Res Local Portfolio Assets:** Showcases 6 landmark regional builds:
  1. **Rakesh Residence** (_Cherpulassery, Kerala_)
  2. **Ashik Residence** (_Ponnani, Kerala_)
  3. **Babu Joseph Villa** (_Wayanad, Kerala_)
  4. **Vinod Jose Residence** (_Chalakudy, Kerala_)
  5. **Shameer Villa** (_Aluva, Kerala_)
  6. **Ravikumar Villa** (_Vellinezhi, Kerala_)

### 3. 🎥 Motion Masonry Portfolio

- **Active Video Previews**: Supports silent, autoplaying, looping, inline MP4 video elements (`playsInline`, `muted`) behaving like rich, live-motion photography alongside high-res static images.
- **20 Integrated Assets**: Maps 14 custom-tailored finished project photos and 6 high-res site videos directly from local resources, maintaining an outstanding layout balance.
- **Smart Portrait Filtering**: Employs structural filter definitions to automatically omit organizational founder profile headshots, maintaining an exclusive focus on construction achievements.

### 4. 👥 Interactive Team Portraits & Micro-Animations

- **Dynamic Hover Elevation**: Features portrait cards for CEO **Rahul Ramakrishnan** and Co-Founder **Jovin John**.
- **Spatial Slider Transition**: Leverages advanced Tailwind-motion transitions where the names and roles sit elegantly at the card bottom and slide smoothly upwards to a centered lower-middle placement on hover, fading in detail bio descriptions in real-time.

### 5. 🟢 24/7 Availability Pulse Status

- **Pulsing Status Indicator**: Replaced traditional static business hours on the Contact page with a premium glassmorphic badge sporting a neon-aqua active pulse indicator (`animate-ping`).
- **Round-the-Clock Support**: Assures prospective luxury buyers of 24/7 availability for custom inquiries and immediate WhatsApp scheduling.

### 6. 🗺️ Custom Google Maps Listing Embed

- **Direct Business Pin**: Includes the precise INFINITY POOLS Mannarkkad Google Maps coordinates and business listing query direct-link, configured greyscale to match the luxury dark design.

---

## 📊 Metrics / Outcomes

- **Lighthouse (Mobile):** Performance 83, Accessibility 89, Best Practices 100, SEO 100.
- **SEO Optimization:** Meta titles/descriptions, canonical URLs, Open Graph + Twitter tags, JSON-LD (LocalBusiness + Service), sitemap.xml, robots.txt, Google Search Console, mobile responsiveness, heading hierarchy, optimized alt text, HTTPS deployment, SPA SEO handling with Helmet + rewrites.

---

## 📂 Project Architecture

```filepath
InfinityPools/
├── public/                 # Static assets & illustrations
│   ├── favicon.png         # Optimized transparent background emblem logo (128x128px)
│   ├── logo.png            # Premium high-res full emblem
│   └── images/             # Local pool assets, founder portraits, and looping construction MP4s
├── src/
│   ├── components/         # High-fidelity reusable UI components
│   │   ├── About.tsx       # Mini-About overview with actual statistics (26 completed projects)
│   │   ├── Contact.tsx     # Fully animated Contact Form & WhatsApp CTA integrations
│   │   ├── FAQ.tsx         # Interactive rich accordion FAQ
│   │   ├── Footer.tsx      # Multi-column luxury styled footer with corporate branding
│   │   ├── Hero.tsx        # High-impact parallax Hero with mouse-tracking radial glow
│   │   ├── Loader.tsx      # Smooth-loading water-ripple splash screen
│   │   ├── Navbar.tsx      # Responsive navigation with glassmorphism overlays
│   │   ├── Portfolio.tsx   # Curated homepage horizontal marquee carousel
│   │   ├── ProcessTimeline.tsx # Interactive construction timeline steps
│   │   ├── ScrollProgress.tsx  # Dynamic progress bar tracking viewport scroll
│   │   ├── ScrollVideoExpansion.tsx # Video masking component expanding on scroll
│   │   ├── Services.tsx    # Responsive grid detailing services offered
│   │   ├── Testimonials.tsx# Slider showcasing premium client testimonials
│   │   ├── WaterScene.tsx  # 3D interactive R3F water canvas
│   │   └── ZoomParallax.tsx# Immersive Framer Motion scroll zoom gallery
│   ├── pages/              # Main routing views
│   │   ├── About.tsx       # Brand history, synchronized stats, and interactive team profiles
│   │   ├── Contact.tsx     # 24/7 Live Status indicator, contact details, and Maps embed
│   │   ├── Home.tsx        # Structured homepage aggregating dynamic sections
│   │   ├── Portfolio.tsx   # Extensive responsive masonry media library
│   │   └── Services.tsx    # Technical process details & features
│   ├── lib/
│   │   └── utils.ts        # Helper classes and styling utilities (clsx & tailwind-merge)
│   ├── App.tsx             # Lenis configuration, Router setup, and root layout
│   ├── index.css           # Tailwind v4 import layer & custom theme configuration
│   └── main.tsx            # React application entry point
├── package.json            # Scripts, dependencies, and build pipelines
├── tsconfig.json           # Type configurations for Vite & React 19
└── vite.config.ts          # Optimized bundler configuration
```

---

## 🛠️ Tech Stack & Dependencies

- **Core Framework:** React 19, TypeScript
- **Bundler & Tooling:** Vite 6
- **Styling & Theme Engine:** Tailwind CSS v4, PostCSS
- **3D Graphics & Physics:** Three.js, `@react-three/fiber`, `@react-three/drei`
- **Animations & Micro-Interactions:** Framer Motion (`motion/react`)
- **Scroll Engineering:** Lenis Smooth Scroll
- **Icons:** Lucide React

---

## 🚀 Getting Started & Local Development

### Prerequisites

Make sure you have [Node.js](https://nodejs.org/) installed (v18 or higher recommended).

### Installation

1. **Clone the repository:**

   ```bash
   git clone https://github.com/AadhithyanG007/InfinityPools.git
   cd InfinityPools
   ```

2. **Install project dependencies:**

   ```bash
   npm install
   ```

3. **Start the local development server:**
   ```bash
   npm run dev
   ```
   The application will run locally at `http://localhost:3000` (or the next available port).

---

## 📦 Production Compiling & Namecheap Deployment

### 1. Build Compilation

To compile and optimize the website for production:

```bash
npm run build
```

This generates a highly optimized static build bundle inside the `dist/` directory in less than **4 seconds** (using Vite 6 compiler).

### 2. File Assets Profile

- **Total Build Size**: **35.5 MB**
- **Video Content**: **30.5 MB** (Local looping MP4s optimized for instant network streaming)
- **Code & Styles Bundle**: **5.0 MB** (Minified, compressed, and fully optimized JavaScript/CSS chunks)

### 3. Deploying to Namecheap (cPanel Hosting)

> [!IMPORTANT]
> To ensure React Router paths function properly on direct page reloads inside client-side routing, upload a custom configuration to the target server.

1. Run `npm run build` locally.
2. Locate the output **`dist`** directory in the root of the project.
3. Open the **`dist`** folder, select **all files inside it** (do not zip the folder itself, zip the contents), and compress them into a file named **`website.zip`**.
4. Log into your **Namecheap cPanel** account and open the **File Manager**.
5. Navigate to the root directory for your domain (typically **`public_html`**).
6. Upload **`website.zip`** and extract it inside **`public_html`**.
7. **Set up Routing Fallback (Critical)**:
   Create a file named **`.htaccess`** in the root of your `public_html` directory, and paste the following configuration. This redirect configuration guarantees that reloads on subpages (like `/portfolio` or `/about`) are routed directly to React’s index page:
   ```apache
   <IfModule mod_rewrite.c>
     RewriteEngine On
     RewriteBase /
     RewriteRule ^index\.html$ - [L]
     RewriteCond %{REQUEST_FILENAME} !-f
     RewriteCond %{REQUEST_FILENAME} !-d
     RewriteRule . /index.html [L]
   </IfModule>
   ```

---

## 🎨 Design Systems & Theme Values

The styling structure focuses heavily on deep, relaxing aquatic contrasts. The main color palette uses standard Tailwind configurations layered within CSS themes:

```css
@theme {
  --font-sans: "Inter", ui-sans-serif, system-ui, sans-serif;
  --font-serif: "Playfair Display", ui-serif, Georgia, Cambria, serif;
  --color-pool-950: #030a12; /* Deep Abyss Background */
  --color-pool-900: #071120; /* Muted Dark Base */
  --color-pool-aqua: #38bdf8; /* Sparkling Water highlight */
  --color-pool-cyan: #22d3ee; /* High energy water highlight */
  --color-pool-gold: #d4a853; /* Premium Brass/Sand contrast */
}
```

---

## 🤝 Core Brand Guidelines

- **Official Business Address**: Nadamalika Road, Mannarkkad, Mannarkad-I, Kerala 678582.
- **Direct Office Phone**: `+91 94462 41298`
- **Direct WhatsApp Support**: `+91 75940 00075` (Aligned across all CTA elements)
- **Brand Spelling**: **Rahul Ramakrishnan** (Founder & CEO) & **Jovin John** (Co-Founder).

---

## 📝 License

Distributed under the MIT License. See `LICENSE` for more information.

<div align="center">
  <p>Crafted with 💙 in Kerala, India</p>
</div>
--- end of infinity pools----

# Cosmic Spark — Showcase

A modern, responsive React + Vite showcase site demonstrating UI components, animations, and a small component library built with Tailwind CSS and Radix UI primitives.

**Repository:** [package.json](package.json)

**Status:** Prototype / Showcase

**Tech stack:** React, TypeScript, Vite, Tailwind CSS, Radix UI, Framer Motion

**Primary purpose:** Demonstrate a visually rich landing page and component primitives for a creative/team showcase.

---

**Contents**

- **Overview:** What this project is and what it shows
- **Getting Started:** How to run locally and build
- **Scripts:** Available npm scripts
- **Project Structure:** Where to find pages, components, and assets
- **Development notes:** Coding, styling and linting guidance
- **Troubleshooting:** Common problems and fixes
- **Contributing & License**

---

**Overview**

This repository contains a single-page showcase application built with Vite and React (TypeScript). It focuses on high-quality UI: animated hero, team carousel, gallery, and a set of reusable UI primitives under `src/components/ui/` (Radix-based components wired to Tailwind CSS utilities).

Features:

- Hero with animated visuals: a dedicated hero section paired with a starfield background component for a strong first impression.
- Curated content sections: gallery and reflections modules provide visual storytelling blocks for images, text, and highlights.
- Team carousel: a horizontal, swipe-friendly carousel layout for team or contributor profiles.
- Achievements dashboard: a compact stats-style component for milestones and performance highlights.
- UI primitives library: a broad set of Radix-based components (dialogs, menus, tabs, tables, toasts, tooltips, etc.) implemented with Tailwind utilities for consistent styling.
- Routing-ready layout: top-level pages for the primary view and a not-found screen, ready for multi-page expansion.
- Responsive-first composition: sections are built as independent components to simplify layout changes and responsive tweaking.

---

**Getting started (local development)**

Prerequisites:

- Node.js (LTS recommended, e.g. Node 18+)
- npm (or yarn/pnpm — commands below use npm)

Install dependencies:

```bash
npm install
```

Run the development server:

```bash
npm run dev
```

Open http://localhost:5173 (or the port Vite reports) in your browser.

Build for production:

```bash
npm run build
```

Preview the production build locally:

```bash
npm run preview
```

Lint the code:

```bash
npm run lint
```

---

**Available scripts** (from [package.json](package.json))

- **dev:** `vite` — start dev server with HMR
- **build:** `vite build` — create optimized production build
- **build:dev:** `vite build --mode development` — build in development mode
- **preview:** `vite preview` — preview production build locally
- **lint:** `eslint .` — run ESLint across the project

---

**Project structure**

- [src/](src/) — application source
  - [main.tsx](src/main.tsx) — app bootstrap
  - [App.tsx](src/App.tsx) — top-level app component
  - [pages/Index.tsx](src/pages/Index.tsx) — main landing page
  - [components/](src/components/) — visual components and UI primitives
    - `AchievementsDashboard.tsx` — achievements example component
    - `HeroSection.tsx`, `GallerySection.tsx`, `TeamCarousel.tsx`, etc.
    - `ui/` — small Radix/Tailwind-based primitives (buttons, dialogs, input, toast, etc.)
  - [assets/](src/assets/) — images and static assets

This structure keeps composable UI primitives separate from page-level composition so components can be reused across pages or extracted into a component library.

---

**Development notes & conventions**

- Styling: Tailwind CSS (see `tailwind.config.ts`). Prefer utility classes and `class-variance-authority` patterns where available.
- Accessibility: Components use Radix primitives where appropriate (e.g., dialogs, popovers, tooltips). Keep ARIA attributes and keyboard interactions intact when editing these components.
- Types: Codebase uses TypeScript. Keep types strict for components' props to make compositions safer.
- Animations: Framer Motion is available for transitions and animated states.
- Forms & Validation: `react-hook-form` and `zod` are installed — use them for local form validation patterns.

Editor tooling:

- ESLint configured — run `npm run lint` and integrate with your editor for on-save linting.

---

**Deployment notes**

This is a static single-page application. You can deploy the dist output to any static hosting provider (Netlify, Vercel, GitHub Pages, Cloudflare Pages, Surge). For most platforms:

1. Run `npm run build` to produce the `dist/` folder.
2. Point your host to serve static files from `dist/`.

For Vercel or Netlify, connect the repo and use the build command `npm run build` with the output directory set to `dist` (Netlify auto-detects Vite projects in many cases).

---

**Troubleshooting**

- If the dev server fails to start or you get dependency errors, remove `node_modules` and reinstall:

```bash
rm -rf node_modules package-lock.json
npm install
```

- If Tailwind classes don't appear to apply, ensure PostCSS and Tailwind are installed and `index.css` imports the Tailwind directives.
- If port is in use, pass a different port to Vite: `vite --port 5174` or set `PORT` env var.

---

**Contributing**

Contributions are welcome. Suggested workflow:

1. Fork the repo and create a feature branch.
2. Run lint and tests (if any) and ensure components follow existing patterns.
3. Open a pull request with a clear description and screenshots if the change affects UI.

---

**Notable files**

- [package.json](package.json) — scripts and dependencies
- [tailwind.config.ts](tailwind.config.ts) — Tailwind configuration
- [src/pages/Index.tsx](src/pages/Index.tsx) — main page composition
- [src/components/](src/components/) — UI components and primitives

---

**License**

This project does not include a license file. Add a license if you plan to publish or accept outside contributions.

---

If you'd like, I can:

- Add a short CONTRIBUTING.md with a PR checklist
- Add a Netlify/Vercel deploy guide or GitHub Actions workflow
- Generate documentation for the `ui/` primitives

---

Generated by GitHub Copilot.
---end of SOON ---
