# Naturals Herbals Digital Ecosystem 🌿

Welcome to the **Naturals Herbals** digital platform — a dual-application architecture built to power a premium salon and beauty tech company.

This repository contains two independent robust applications carefully styled and architected to support Naturals Herbals' business identity:
1. **Public Website** (Customer-facing Portal)
2. **Admin Dashboard** (Internal Management Panel)

---

## 💅 The Public Website (Root Directory)
A fully responsive, premium, nature-inspired landing site for prospective customers to read about services, book appointments, and explore technology offerings. 

### Key Features
- **6 Core Pages**: Home, Services, About Us, Technology, Book Appointment, Contact.
- **Premium Aesthetics**: Adheres to the brand's unique color palette (Deep Green `#085041`, Warm Gold `#EF9F27`, Primary Green `#1D9E75`).
- **Tech Stack**: React 18 + Vite, pure Vanilla CSS grid/flexbox for pixel-perfect bespoke styling, and `lucide-react` for iconography.

### How to Run
```bash
# From the root directory
npm install
npm run dev
```

---

## 📊 The Admin Dashboard (`/admin-dashboard`)
An internal management tool for tracking 1,800+ employees, branch performance, skill pathways, and company-wide revenue. 

### Key Features
- **Tailwind CSS Subsystem**: Completely encapsulated Tailwind architecture separated into its own Vite app to prevent CSS collisions with the public site's vanilla CSS.
- **7 Operational Views**: Dashboard, Staff Management, Skill Levels, Revenue Analytics, Bookings, Branches, and Training Progress.
- **Data Visualization**: Extensive use of `recharts` for Doughnut, Bar, and Line charts correlating skill progression to revenue and displaying AI-driven branch alerts.

### How to Run
```bash
cd admin-dashboard
npm install
npm run dev
```

---

## 🛠️ Performance & Architecture
- **Sandboxed CSS**: The project avoids collision styling issues by partitioning the bespoke front-end site and the Tailwind-driven admin panel into separate Vite builds.
- **Client-Side Routing & Splitting**: Both applications leverage `react-router-dom` with robust chunking optimizations (`React.lazy` and `Suspense`) to route boundaries, keeping the initial JS load sub-`300KB` despite heavy dashboard graphing libraries.

<br>
<p align="center">
  <i>Designed for the Naturals Herbals franchise — "Rooted in Nature. Powered by Intelligence."</i>
</p>
