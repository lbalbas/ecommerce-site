# E-Commerce Mockup 🛒

A fullstack e-commerce application built with the T3 stack. Features a persistent shopping cart, product search, and Stripe Checkout integration for secure payment processing.

## ✨ Features

- **Product Browsing:** Browse products with image carousels and detailed product pages.
- **Search:** Find products quickly with built-in search functionality.
- **Persistent Cart:** Shopping cart state persists across sessions via localStorage.
- **Stripe Checkout:** Secure payment processing through Stripe's Checkout API.
- **Responsive Design:** Fully responsive UI built with Tailwind CSS.

## 🛠️ Tech Stack

- **Framework:** [Next.js](https://nextjs.org) (Pages Router)
- **Language:** [TypeScript](https://www.typescriptlang.org/)
- **ORM:** [Prisma](https://prisma.io)
- **Styling:** [Tailwind CSS](https://tailwindcss.com)
- **API:** [tRPC](https://trpc.io)
- **Database:** PostgreSQL (via Prisma)
- **Payments:** [Stripe](https://stripe.com/)
- **UI Components:** [Embla Carousel](https://www.embla-carousel.com/), [Heroicons](https://heroicons.com/)

## 🚀 Getting Started

### Prerequisites

- Node.js installed
- pnpm
- A Stripe account (test mode)
- A PostgreSQL database

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/lbalbas/ecommerce-site.git
   cd ecommerce-site
   ```

2. **Install dependencies:**
   ```bash
   pnpm install
   ```

3. **Set up environment variables:**
   Configure your database URL and Stripe API keys in a `.env` file.

4. **Prepare the database:**
   ```bash
   npx prisma db push
   ```

5. **Start the development server:**
   ```bash
   pnpm run dev
   ```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## 🔗 Live Demo

[https://ecommerce-site-orpin.vercel.app](https://ecommerce-site-orpin.vercel.app)

## 📄 License

This project is open-source and available under the MIT License.
