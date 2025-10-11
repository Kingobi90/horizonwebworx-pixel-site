# 🎮 HorizonWebWorx - Setup Instructions

## 📧 Contact Form Setup

The contact form is configured to send emails to **ogeniobinna@gmail.com** using Web3Forms.

### Step 1: Get Your Web3Forms API Key

1. Go to [https://web3forms.com](https://web3forms.com)
2. Click "Get Started Free"
3. Enter your email: **ogeniobinna@gmail.com**
4. Verify your email
5. Copy your API key

### Step 2: Add API Key to Project

1. Create a `.env` file in the root directory:
```bash
cp .env.example .env
```

2. Open `.env` and add your API key:
```
VITE_WEB3FORMS_KEY=your_actual_api_key_here
```

### Step 3: Test the Form

1. Run the development server:
```bash
npm run dev
```

2. Navigate to the contact page
3. Fill out and submit the form
4. Check **ogeniobinna@gmail.com** for the email

---

## 🔍 SEO Configuration

### Open Graph Image

The site uses `horizonww.png` as the Open Graph image for social media sharing.

**Location:** `/public/og-image.png`

When you share the website link on:
- Facebook
- Twitter
- LinkedIn
- WhatsApp
- Slack

This image will be displayed as the preview.

### Meta Tags Included

✅ Title & Description
✅ Keywords
✅ Open Graph (Facebook)
✅ Twitter Cards
✅ Canonical URLs
✅ Structured Data (JSON-LD)
✅ Mobile optimization

---

## 📱 Menu Order

The navigation menu is optimized in this order:

1. **Services** (Homepage anchor)
2. **Pricing** (Most important for conversions)
3. **Portfolio** (Social proof)
4. **About** (Company info)
5. **Blog** (Content marketing)
6. **Contact** (Final CTA)

---

## 🔗 "View More" Buttons

Homepage sections now have buttons linking to full pages:

- **About Section** → "LEARN MORE ABOUT US →" → `/about`
- **Portfolio Section** → "VIEW ALL PROJECTS →" → `/portfolio`
- **Pricing Section** → "VIEW ALL PRICING OPTIONS →" → `/pricing`
- **Blog Section** → "READ MORE ARTICLES →" → `/blog`

---

## 🚀 Deployment Checklist

Before deploying:

1. ✅ Get Web3Forms API key
2. ✅ Add API key to `.env`
3. ✅ Test contact form locally
4. ✅ Verify OG image displays correctly
5. ✅ Run `npm run build`
6. ✅ Test production build with `npm run preview`
7. ✅ Deploy to hosting (Netlify/Vercel)
8. ✅ Add environment variable to hosting platform

---

## 📊 SEO Testing

Test your SEO with these tools:

1. **Open Graph Preview:**
   - [OpenGraph.xyz](https://www.opengraph.xyz/)
   - Paste your URL to see how it looks on social media

2. **Google Rich Results Test:**
   - [Rich Results Test](https://search.google.com/test/rich-results)
   - Test structured data

3. **PageSpeed Insights:**
   - [PageSpeed](https://pagespeed.web.dev/)
   - Check performance scores

---

## 🎯 Contact Form Features

✅ Pre-fills service selection from pricing/services
✅ Shows selected payment type and price
✅ Validates all required fields
✅ Shows loading state during submission
✅ Success/error messages
✅ Sends to ogeniobinna@gmail.com
✅ Includes all form data in email

---

## 📧 Email Format

When someone submits the form, you'll receive:

```
Subject: New Contact from [Name] - HorizonWebWorx

New Contact Form Submission from HorizonWebWorx

Name: John Doe
Email: john@example.com
Phone: +1234567890
Service: PRO BUILD
Payment Type: ONE-TIME
Price: $1,499

Message:
I'm interested in building a new website for my business...
```

---

## 🔐 Security Notes

- API key is stored in `.env` (not committed to git)
- `.env` is in `.gitignore`
- Web3Forms is free and secure
- No sensitive data stored on frontend
- Form submissions are encrypted (HTTPS)

---

## 🆘 Troubleshooting

### Form not sending emails?

1. Check `.env` file exists
2. Verify API key is correct
3. Check browser console for errors
4. Verify email in Web3Forms dashboard
5. Check spam folder

### OG image not showing?

1. Verify `/public/og-image.png` exists
2. Check image dimensions (1200x630 recommended)
3. Clear social media cache:
   - Facebook: [Sharing Debugger](https://developers.facebook.com/tools/debug/)
   - Twitter: [Card Validator](https://cards-dev.twitter.com/validator)

---

## 📞 Support

If you need help:
- Email: ogeniobinna@gmail.com
- Web3Forms Docs: https://docs.web3forms.com
