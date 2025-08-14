# Fireweb Technologies - Portfolio Website

A modern, responsive portfolio website for Fireweb Technologies, a web development and digital marketing agency.

## Features

- **Responsive Design**: Fully responsive across all devices
- **Dynamic Pricing**: Region-based pricing (USD/INR) with automatic detection
- **Testimonials System**: Fetches testimonials from JSON file with interactive carousel
- **Modern UI/UX**: Clean, professional design with smooth animations
- **Contact Form**: Interactive contact form with validation
- **SEO Optimized**: Proper meta tags and semantic HTML

## Tech Stack

- **Framework**: Next.js 15.4.6
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Font**: Geist Sans & Geist Mono

## Sections

1. **Hero Section**: Eye-catching landing area with call-to-action
2. **About**: Company information and key features
3. **Services**: Comprehensive service offerings
4. **Portfolio**: Showcase of sample works and completed projects
5. **Pricing**: Dynamic pricing cards with region detection
6. **Testimonials**: Client testimonials with interactive carousel
7. **Contact**: Contact form and company information
8. **Footer**: Links and additional information

## Data Files

- `/public/data/pricing.json` - Pricing information for different regions
- `/public/data/testimonials.json` - Client testimonials and reviews
- `/public/data/portfolio.json` - Portfolio projects and case studies

## Getting Started

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser

## Pricing Structure

The website includes comprehensive pricing for:

### Web Development
- **Starter Website**: $899 USD / ₹75,000 INR
- **Business Website**: $1,999 USD / ₹165,000 INR (Most Popular)
- **Enterprise Solution**: $4,999 USD / ₹415,000 INR

### Digital Marketing
- **Starter Marketing**: $499/month USD / ₹40,000/month INR
- **Growth Marketing**: $1,299/month USD / ₹105,000/month INR (Most Popular)
- **Enterprise Marketing**: $2,999/month USD / ₹245,000/month INR

## Customization

### Adding New Portfolio Projects
Edit `/public/data/portfolio.json` and add new project objects with the following structure:

```json
{
  "id": 13,
  "title": "Project Name",
  "category": "ecommerce|web-app|mobile|corporate",
  "image": "/portfolio/project-image.jpg",
  "description": "Detailed project description...",
  "technologies": ["Tech1", "Tech2", "Tech3"],
  "client": "Client Name",
  "projectUrl": "#",
  "completionDate": "2024-06",
  "features": [
    "Feature 1",
    "Feature 2",
    "Feature 3"
  ]
}
```

### Adding New Testimonials
Edit `/public/data/testimonials.json` and add new testimonial objects with the following structure:

```json
{
  "id": 7,
  "name": "Client Name",
  "company": "Company Name",
  "position": "Job Title",
  "image": "/testimonials/image.jpg",
  "rating": 5,
  "text": "Testimonial text here...",
  "project": "Project Type"
}
```

### Updating Pricing
Edit `/public/data/pricing.json` to modify pricing packages, features, or add new service categories.

### Customizing Colors
The website uses a blue and purple color scheme. You can modify the colors in the Tailwind classes throughout the components.

## Deployment

The easiest way to deploy is using Vercel:

```bash
npm run build
```

Then deploy to your preferred hosting platform.

## License

This project is private and proprietary to Fireweb Technologies.

## Contact

For any questions or support, please contact Fireweb Technologies.
