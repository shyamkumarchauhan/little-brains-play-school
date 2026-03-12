# Little Brains Play School - Website

A modern, responsive preschool website built with HTML, CSS, and minimal JavaScript.

**Live Website**: [Little Brains Play School](https://shyamkumarchauhan.github.io/little-brains-play-school/)

## About

Little Brains Play School is located at #12, Gali No 8, Tanki Road, Shakti Vihar, Meethapur, Badarpur, New Delhi 110044.

Phone: +91 9958447664

## Features

- Modern, colorful preschool themed design
- Fully responsive (mobile, tablet, desktop)
- 7 pages: Home, About, Programs, Gallery, Videos, Admissions, Contact
- WhatsApp integration for admission enquiries
- Floating WhatsApp chat button
- Facebook video embeds
- Google Maps integration
- SEO optimized meta tags
- Scroll animations
- No backend required - pure static website

## Folder Structure

```
/
├── index.html          (Home page)
├── about.html          (About Us)
├── programs.html       (Programs - Playgroup, Nursery, LKG, UKG)
├── gallery.html        (Photo Gallery)
├── videos.html         (Video Gallery - Facebook embeds)
├── admissions.html     (Admissions with WhatsApp form)
├── contact.html        (Contact with Google Maps)
├── css/
│   └── style.css       (All styles)
├── js/
│   └── script.js       (Navigation, scroll, form handling)
├── images/             (Place school images here)
└── README.md
```

## How to Add Your Own Images

1. Place your school images in the `/images/` folder
2. In each HTML file, find comments like:
   ```html
   <!-- Replace with actual image: <img src="images/school-front.jpg" alt="..."> -->
   <div class="placeholder-img">🏫</div>
   ```
3. Replace the `<div class="placeholder-img">` with an `<img>` tag pointing to your image

## How to Add Facebook Videos

1. Go to your Facebook page: https://www.facebook.com/littlebrainsplayschool
2. Find a video post and click the "..." menu > "Embed"
3. Copy the video URL from the embed code
4. In `videos.html`, replace the iframe `src` URL with your actual video URL:
   ```html
   <iframe src="https://www.facebook.com/plugins/video.php?href=YOUR_VIDEO_URL_HERE&show_text=false"></iframe>
   ```

## How to Update Google Maps

1. Go to [Google Maps](https://www.google.com/maps)
2. Search for your school location
3. Click "Share" > "Embed a map"
4. Copy the iframe `src` URL
5. Replace the map iframe `src` in `contact.html`

---

## Deployment Instructions

### Deploy on GitHub Pages

1. **Push code to GitHub**:
   ```bash
   git add .
   git commit -m "Initial website"
   git push origin main
   ```

2. **Enable GitHub Pages**:
   - Go to your repository on GitHub
   - Click **Settings** > **Pages** (in left sidebar)
   - Under "Source", select **Deploy from a branch**
   - Select **main** branch and **/ (root)** folder
   - Click **Save**

3. **Access your site**:
   - Your website will be live at: `https://<username>.github.io/<repo-name>/`
   - It may take a few minutes for the first deployment

### Deploy on Windows IIS Server

1. **Install IIS** (if not already):
   - Open **Control Panel** > **Programs** > **Turn Windows features on or off**
   - Check **Internet Information Services**
   - Under IIS, ensure **Static Content** is checked
   - Click OK and wait for installation

2. **Create the website**:
   - Copy the entire project folder to `C:\inetpub\wwwroot\littlebrains\` (or your preferred location)
   - Open **IIS Manager** (search "IIS" in Start menu)
   - Right-click **Sites** > **Add Website...**
   - Set:
     - **Site name**: Little Brains Play School
     - **Physical path**: `C:\inetpub\wwwroot\littlebrains`
     - **Binding**: Type: http, Port: 80 (or your preferred port)
   - Click **OK**

3. **Set Default Document**:
   - Select your site in IIS Manager
   - Double-click **Default Document**
   - Ensure `index.html` is in the list (add it if not present)

4. **No web.config needed**: This is a static HTML website, no server-side configuration required.

5. **Access your site**: Open a browser and navigate to `http://localhost/` or your server's IP address.

---

## Technologies Used

- HTML5
- CSS3 (Custom Properties, Grid, Flexbox, Animations)
- Vanilla JavaScript (ES5 compatible)
- Google Fonts (Nunito, Fredoka One)
- WhatsApp Business API
- Facebook Video Embed Plugin
- Google Maps Embed API

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome for Android)

## License

&copy; 2026 Little Brains Play School. All Rights Reserved.
Little Brains Play School
