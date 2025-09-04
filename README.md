# BOT Consulting - Annual Retreat Website

A modern, responsive Next.js website for the BOT Consulting Annual Company Retreat 2024. This website showcases the retreat itinerary, attendees, hackathon details, and provides comprehensive information about the event.

## 🚀 Features

### 📱 Responsive Design
- Mobile-first approach with responsive design
- Optimized for all devices (desktop, tablet, mobile)
- Modern UI with smooth animations and transitions

### 🏠 Pages
1. **Home Page** (`/`) - Landing page with company values and retreat overview
2. **Itinerary** (`/itinerary`) - Complete 3-day schedule with interactive timeline
3. **Attendees** (`/attendees`) - Team member profiles and guest speakers
4. **Hackathon** (`/hackathon`) - Hackathon themes, rules, and judging panel
5. **About BOT** (`/about`) - Company story, values, and achievements
6. **Contact** (`/contact`) - Contact form and registration information

### 🎨 Design Features
- Modern gradient backgrounds
- Interactive hover effects
- Professional color scheme
- Lucide React icons
- Tailwind CSS styling

### ⚡ Technical Features
- Next.js 15 with App Router
- TypeScript for type safety
- Tailwind CSS for styling
- Responsive navigation with mobile menu
- Form handling with validation
- SEO optimized with proper metadata

## 📋 Retreat Information

### Event Details
- **Dates**: October 24-26, 2024
- **Duration**: 3 days
- **Location**: Luxury Resort & Spa
- **Participants**: 50+ including families

### Activities
- **Day 1**: Travel, Check-in, Welcome Note, Hackathon Prep, Board Meeting
- **Day 2**: Wellness Activities, Hackathon, State of the Union, Diwali Celebration
- **Day 3**: Sports Activities, Check-out, Travel Back

### Hackathon Themes
1. **AI-Powered Business Solutions** - Advanced level
2. **Sustainable Technology** - Intermediate level
3. **Digital Wellness Platform** - Beginner level
4. **Smart City Solutions** - Advanced level

## 🛠️ Technology Stack

- **Framework**: Next.js 15
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **Animations**: Framer Motion
- **UI Components**: Headless UI

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd bot-retreat-website
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

### Build for Production

```bash
npm run build
npm start
```

## 📁 Project Structure

```
bot-retreat-website/
├── src/
│   ├── app/
│   │   ├── page.tsx              # Home page
│   │   ├── itinerary/
│   │   │   └── page.tsx          # Itinerary page
│   │   ├── attendees/
│   │   │   └── page.tsx          # Attendees page
│   │   ├── hackathon/
│   │   │   └── page.tsx          # Hackathon page
│   │   ├── about/
│   │   │   └── page.tsx          # About page
│   │   ├── contact/
│   │   │   └── page.tsx          # Contact page
│   │   ├── layout.tsx             # Root layout
│   │   └── globals.css            # Global styles
│   └── components/
│       └── Navigation.tsx         # Navigation component
├── public/                        # Static assets
├── package.json                   # Dependencies
├── tailwind.config.js            # Tailwind configuration
└── README.md                      # This file
```

## 🎯 Key Features Explained

### Navigation Component
- Responsive navigation with mobile hamburger menu
- Smooth transitions and hover effects
- Fixed positioning for better UX

### Itinerary Page
- Interactive timeline with activity icons
- Color-coded participant categories
- Detailed activity descriptions
- Legend for activity types

### Attendees Page
- Organized by roles (Founders, CAB, Team, Speakers)
- Contact information and social links
- Professional profile cards
- Statistics section

### Hackathon Page
- Multiple theme options with difficulty levels
- Comprehensive rules and guidelines
- Judging panel information
- Timeline with milestones

### Contact Page
- Functional contact form with validation
- Business hours and contact details
- FAQ section
- Retreat-specific information

## 🎨 Customization

### Colors
The website uses a consistent color scheme:
- Primary: Blue (#3B82F6)
- Secondary: Purple (#8B5CF6)
- Accent: Green (#10B981)
- Background: Gray (#F9FAFB)

### Content Updates
To update content:
1. Edit the data objects in each page component
2. Update images in the `public` directory
3. Modify text content in the JSX

### Styling
- All styling is done with Tailwind CSS classes
- Custom styles can be added to `globals.css`
- Component-specific styles are inline with Tailwind

## 📱 Responsive Breakpoints

- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px

## 🚀 Deployment

### Vercel (Recommended)
1. Push code to GitHub
2. Connect repository to Vercel
3. Deploy automatically

### Other Platforms
- Netlify
- AWS Amplify
- DigitalOcean App Platform

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📄 License

This project is created for BOT Consulting's internal use.

## 📞 Support

For questions or support:
- Email: info@botconsulting.com
- Phone: +1 (555) 123-4567

---

**BOT Consulting** - Transforming businesses through innovative technology solutions
