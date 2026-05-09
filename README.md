# Aid Platform

A full-stack humanitarian aid fundraising platform where donors can fund specific items inside aid packages, and recipients can rate which items their family needs most.

Built as a personal full-stack learning project using Angular 19, Node.js, Express, PostgreSQL, and Prisma.

---

## What It Does

**For donors**
- Browse aid packages (food, medical, shelter, water & hygiene, and more)
- See each package broken down into individual items
- View a "need rating" per item — aggregated from recipient feedback
- Add specific items to a cart and donate toward them directly

**For recipients**
- Rate how urgently their family needs each item in a package
- Ratings are anonymous and combined across all recipients
- Helps donors understand where money is needed most

---

## Tech Stack

| Layer | Technology |
|---|---|
| Frontend | Angular 19 (standalone components, signals, SSR) |
| Backend | Node.js + Express |
| Database | PostgreSQL + Prisma ORM |
| Hosting | TBD |

---

## Project Structure

```
aid-platform/         ← Angular frontend
├── src/
│   ├── app/
│   │   ├── pages/
│   │   │   ├── home/         ← landing page
│   │   │   ├── donor/        ← browse & fund items
│   │   │   └── recipient/    ← rate item urgency
│   │   ├── app.component.*   ← root shell + nav
│   │   ├── app.routes.ts     ← client-side routing
│   │   └── app.config.ts     ← app configuration
│   ├── styles.css            ← global styles
│   └── index.html            ← HTML shell
```

---

## Getting Started

### Prerequisites

- Node.js 18+
- Angular CLI 19+
- PostgreSQL (coming soon)

### Run the frontend

```bash
git clone https://github.com/Abdullah-Adel-Inshasi/aid-platform
cd aid-platform
npm install
ng serve
```

Open [http://localhost:4200](http://localhost:4200)

---

## Roadmap

- [x] Project setup and routing
- [x] Home page with donor / recipient split
- [ ] Donor page — package and item browsing
- [ ] Recipient page — item urgency ratings
- [ ] Backend API with Express
- [ ] PostgreSQL database with Prisma
- [ ] Donation cart and checkout
- [ ] Anonymous recipient rating tokens
- [ ] Live funding progress per item
- [ ] Deployment

---

## About

This project is built for learning full-stack development end to end — from Angular components and routing, to REST APIs, relational databases, and deployment.

The cause it models is real. Aid packages described in this project reflect actual humanitarian aid categories used in Gaza and similar crisis zones.