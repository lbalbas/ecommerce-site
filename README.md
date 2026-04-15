# E-Commerce Mockup 🛒

A fullstack e-commerce application built with Next.js, featuring a persistent shopping cart, product search, and Stripe-powered checkout.

![Live Demo](https://ecommerce-site-orpin.vercel.app)

## ✨ Features

- **Product Catalog:** Browse products with a clean, responsive grid layout
- **Search:** Find products quickly with built-in search functionality
- **Persistent Cart:** Shopping cart persists across sessions via localStorage
- **Stripe Checkout:** Secure payment processing through Stripe Checkout API
- **Responsive Design:** Optimized for all screen sizes with Tailwind CSS
- **Image Carousel:** Featured product carousel powered by Embla

## 🛠️ Tech Stack

- **Framework:** [Next.js](https://nextjs.org) (Pages Router)
- **Language:** [TypeScript](https://www.typescriptlang.org/)
- **Styling:** [Tailwind CSS](https://tailwindcss.com)
- **API Layer:** [tRPC](https://trpc.io)
- **ORM:** [Prisma](https://prisma.io)
- **Database:** PostgreSQL
- **Payments:** [Stripe](https://stripe.com/)
- **Validation:** [Zod](https://zod.dev/)

## 🚀 Getting Started

### Prerequisites

- Node.js (v18+)
- pnpm
- A PostgreSQL database
- A Stripe account (test mode)

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
   Create a `.env` file with your database URL and Stripe keys:
   ```env
   DATABASE_URL="postgresql://..."
   STRIPE_SECRET_KEY="sk_test_..."
   NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY="pk_test_..."
   ```

4. **Prepare the database:**
   ```bash
   npx prisma db push
   ```

5. **Start the development server:**
   ```bash
   pnpm dev
   ```

Open [http://localhost:3000](http://localhost:3000) to view the app.

## 📄 License

This project is open-source and available under the MIT License.
