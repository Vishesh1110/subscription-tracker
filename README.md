# Subscription Tracker

A REST API backend for tracking and managing subscriptions, with automated renewal reminders via email.

Built with **Node.js**, **Express**, **MongoDB**, and **Upstash QStash** for workflow scheduling.

---

## Features

- User authentication (Sign Up, Sign In, Sign Out) with JWT
- Create and manage subscriptions
- Automated email reminders before renewal dates (7, 5, 2, 1 days)
- Rate limiting and bot protection with Arcjet
- Workflow scheduling with Upstash QStash

---

## Tech Stack

- **Runtime:** Node.js
- **Framework:** Express.js
- **Database:** MongoDB (Mongoose)
- **Authentication:** JSON Web Tokens (JWT)
- **Security:** Arcjet (rate limiting, bot detection)
- **Workflow/Scheduling:** Upstash QStash
- **Email:** Nodemailer (Gmail)
- **Rate limiting:** Arcjet


---

## Setup & Installation

### 1. Clone the repository

```bash
git clone https://github.com/Vishesh1110/subscription-tracker.git
cd subscription-tracker
```

### 2. Install dependencies

```bash
npm install
```

### 3. Create environment files

Create `.env.development.local` for development:

```env
# PORT
PORT=5500
SERVER_URL='http://localhost:5500'

# ENVIRONMENT
NODE_ENV='development'

# DATABASE
DB_URI=your_mongodb_connection_string

# JWT AUTH
JWT_SECRET='your_jwt_secret'
JWT_EXPIRES_IN='1d'

# ARCJET
ARCJET_KEY=your_arcjet_key
ARCJET_ENV='development'

# UPSTASH
QSTASH_URL="http://127.0.0.1:8080"
QSTASH_TOKEN="your_qstash_token"

# EMAIL
EMAIL_USER=your_gmail@gmail.com
EMAIL_PASSWORD=your_gmail_app_password
```

### 4. Run QStash locally (for development)

```bash
npx @upstash/qstash-cli dev
```

### 5. Start the server

```bash
npm run dev
```

---
