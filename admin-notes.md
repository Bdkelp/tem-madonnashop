# The Madonna Shop - Admin Notes

## How to Replace Placeholder Elements

### 1. Google Review Link
**Current Status:** Placeholder link with user-friendly alert message
**Location:** reviews.html line 69 and script.js lines 171-186

**To Replace:**
1. Get your Google Business review URL from Google My Business
2. Replace `PLACEHOLDER_REVIEW_URL` in reviews.html with your actual Google Place ID
3. Update the href to: `https://g.page/r/YOUR_GOOGLE_PLACE_ID/review`
4. Remove the alert JavaScript in script.js setupReviewButton function
5. Remove the event listener that prevents default behavior

### 2. Contact Form Integration
**Current Status:** Client-side placeholder with success message simulation
**Location:** contact.html (form) and script.js (submitContactForm function)

**To Connect to Hexona/GoHighLevel:**
1. Update the form action attribute with your webhook URL
2. Modify the JavaScript in script.js submitContactForm function:
   ```javascript
   fetch('YOUR_WEBHOOK_URL', {
       method: 'POST',
       headers: { 'Content-Type': 'application/json' },
       body: JSON.stringify({ name, email, phone, message })
   })
   ```
3. Replace the setTimeout simulation with actual API call handling
4. Update success/error handling as needed

### 3. Placeholder Images and Logo
**Current Status:** Text placeholders and placeholder divs
**Locations to Replace:**
- Logo: All HTML files - replace "The Madonna Shop" text with `<img>` tag
- Hero background: Referenced in meta tags and JSON-LD
- Store photos: about.html placeholder divs
- QR code: reviews.html QR placeholder

**To Replace:**
1. Add real logo file to assets/ directory
2. Update header logo in all HTML files
3. Replace placeholder image divs with actual `<img>` tags
4. Update meta tag image URLs in all HTML files
5. Create actual QR code PNG and replace reviews.html placeholder

### 4. Google Maps Embed
**Current Status:** Working with placeholder coordinates
**Location:** index.html and contact.html iframe embeds

**To Update:**
1. Go to Google Maps
2. Search for "5933 Gateway Blvd West, El Paso, TX 79925"
3. Click Share > Embed a map
4. Copy the embed code
5. Replace existing iframe src URLs in both files

### 5. Analytics Setup
**Current Status:** Placeholder comments in script.js
**Location:** script.js bottom section

**To Add Analytics:**
1. Uncomment analytics code in script.js
2. Add your Google Analytics tracking ID
3. Add tracking script to all HTML files in `<head>` section

### 6. QR Code for Reviews
**Current Status:** Text placeholder in reviews.html
**Location:** reviews.html QR section

**To Create Real QR Code:**
1. Use QR code generator with your Google review URL
2. Save as review-qr.png in assets/ directory
3. Replace the placeholder div with actual image tag
4. Ensure download link points to correct file

## Deployment Checklist

### Before Going Live:
- [ ] Replace Google Review URL
- [ ] Connect contact form to webhook
- [ ] Add real logo and images
- [ ] Update Google Maps embed with verified coordinates
- [ ] Add favicon.ico file
- [ ] Test all forms and links
- [ ] Add Google Analytics
- [ ] Update meta tag image URLs to production domain
- [ ] Test mobile responsiveness on real devices
- [ ] Verify all phone numbers and addresses are correct

### SEO Optimization:
- [ ] Update sitemap.xml with final domain
- [ ] Submit sitemap to Google Search Console
- [ ] Verify robots.txt allows proper crawling
- [ ] Test structured data with Google's Rich Results Test
- [ ] Add Google My Business verification
- [ ] Set up Google Analytics and Search Console

## Technical Notes

### File Structure:
```
/
├── index.html          # Homepage
├── about.html          # About page
├── products.html       # Products page
├── contact.html        # Contact page
├── reviews.html        # Reviews page
├── privacy.html        # Privacy policy
├── styles.css          # All styling
├── script.js           # All JavaScript
├── robots.txt          # SEO crawling rules
├── sitemap.xml         # SEO sitemap
├── assets/             # Images and media
└── admin-notes.md      # This file
```

### Browser Support:
- Modern browsers (Chrome, Firefox, Safari, Edge)
- Mobile responsive design
- Accessible with screen readers
- Graceful degradation for older browsers

### Performance Features:
- Lazy loading for images
- Font preloading
- Minimal external dependencies
- Optimized CSS and JavaScript

For technical support or questions about implementing these changes, contact your web developer or the person who set up this website.