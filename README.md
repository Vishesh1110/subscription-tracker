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
