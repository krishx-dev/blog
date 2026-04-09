# Professional AI Tools Blog Template

A high-performance, SEO-optimized blog template built with React, Vite, and Tailwind CSS. This project is pre-configured for Google AdSense monetization and features detailed, niche-specific content for students, developers, and digital creators.

## 🚀 Getting Started

Follow these steps to set up the project on your local machine:

### 1. Prerequisites
Ensure you have [Node.js](https://nodejs.org/) (v18 or higher) installed.

### 2. Installation
Clone or unzip the project folder, then run the following command in your terminal:
```bash
npm install
```

### 3. Environment Configuration
The project uses environment variables for AdSense integration. 
1. Copy the `.env.example` file and rename it to `.env`:
   ```bash
   cp .env.example .env
   ```
2. Open the `.env` file and replace the placeholder values with your actual Google AdSense IDs:
   - `VITE_ADSENSE_CLIENT_ID`: Your Publisher ID (e.g., `ca-pub-1234...`)
   - `VITE_ADSENSE_SIDEBAR_SLOT`: The ID for your sidebar ad unit.
   - `VITE_ADSENSE_FEED_SLOT`: The ID for your in-feed ad unit.
   - `VITE_ADSENSE_FOOTER_SLOT`: The ID for your footer horizontal ad unit.

### 4. Development Mode
Run the development server to preview the site:
```bash
npm run dev
```
The site will be available at `http://localhost:5173`.

## 🛠️ Deployment

When you are ready to go live:

1. **Build for Production**:
   ```bash
   npm run build
   ```
2. **Deploy**:
   The command above generates a `dist` folder. You can upload the contents of this folder to any static hosting provider (e.g., Vercel, Netlify, Cloudflare Pages, or a traditional web server).

## 📄 Key Files for Customization

- `index.html`: Update the site title, meta descriptions, and Google AdSense global script tag.
- `src/components/About.tsx`: Customize the "About Us" section and team information.
- `src/components/Contact.tsx`: Update the contact email addresses and social media handles.
- `src/components/Legal.tsx`: Ensure the Privacy Policy and Terms of Service align with your local regulations.
- `public/ads.txt`: Update with your Publisher ID for AdSense verification.
- `public/sitemap.xml`: Update the URLs to match your final domain name.

## 🔒 Security Features Included

- **Content Security Policy (CSP)**: Pre-configured to allow trusted Google AdSense scripts only.
- **Honeypot Protection**: Built into the contact form to prevent automated spam bot submissions.
- **HTTPS Enforcement**: Meta tags included to upgrade insecure requests automatically.
