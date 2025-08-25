# ENVOYou API - Landing Page
This repository contains the source code for the official landing page of the ENVOYou API, a global environmental data verification service. This is a static, single-page website designed to be fast, responsive, and visually appealing.

## Project Overview
The primary goal of this landing page is to serve as the public-facing "storefront" for the ENVOYou API. It is designed to:

Introduce the API: Clearly explain the problem it solves—transforming fragmented environmental data into actionable insights.

Showcase Features: Highlight the key capabilities of the API, such as multi-source integration, data standardization, and the proprietary CEVS score.

Attract Users: Provide clear calls-to-action for developers and potential clients to get an API key and explore the documentation.

Build Trust: Present a professional and modern interface that reflects the quality of the backend service.

## Tech Stack
This is a lightweight, front-end only project built with modern, standard web technologies for maximum performance and compatibility.

HTML5: For the core structure and content of the page (index.html).

CSS3: For all styling, including layout, colors, and animations (styles.css).

Tailwind CSS: A utility-first CSS framework used for rapid and responsive UI development.

JavaScript (Vanilla): Used for light interactivity, such as the "copy to clipboard" functionality and scroll-reveal animations (script.js).

## Key Features
Fully Responsive Design: The layout seamlessly adapts to all screen sizes, from mobile phones to large desktop monitors.

Clean & Organized Code: The project is structured with a clear separation of concerns (HTML, CSS, and JavaScript in separate files), making it easy to maintain and scale.

Glassmorphism Navigation: A sticky, semi-transparent navigation bar that stays visible as the user scrolls.

Scroll-Reveal Animations: Subtle fade-in and slide-up animations that activate as elements enter the viewport.

Interactive Code Snippet: A "copy to clipboard" button for the example curl command.

Optimized for Performance: Minimal dependencies and a clean structure ensure fast loading times.

## Getting Started
No complex setup is required. Since this is a static website, you can run it locally directly from your file system.

## Clone the repository:

git clone https://github.com/hk-dev13/ENVOYou-page.git
cd ENVOYou-landing-page

Open in Browser:
Simply open the index.html file in your favorite web browser (e.g., Chrome, Firefox, Safari).

## Customization
Editing and customizing the content is straightforward due to the separated file structure.

Text and Content: All text and the HTML structure can be found and edited in index.html.

Colors and Styling: All visual aspects, including colors, fonts, and spacing, are controlled in styles.css. You can also modify the Tailwind CSS classes in index.html.

Logo: The logo is an inline SVG within index.html. To change it, replace the <svg> element inside the <header>.

Interactivity: All JavaScript-driven features, like animations and the copy button, are located in script.js.

Links: Update the href attributes in the anchor (<a>) tags in index.html to point to your documentation, GitHub repository, and contact email.

## Deployment
Deploying this static landing page is simple and can be done for free on various platforms.

GitHub Pages: The easiest way. Simply enable GitHub Pages in your repository's settings and point it to the main branch.

Netlify: Drag and drop the project folder into the Netlify dashboard for instant deployment.

Vercel: Connect your GitHub repository to Vercel for automatic deployments on every push.

AWS S3: You can also host the project files in an AWS S3 bucket configured for static website hosting.

---
### License
This project is under the MIT License. See the LICENSE file for more details.

---
### Contact
If you have any questions or would like to collaborate, please contact me at:

* **Email:** [info@envoyou.com](mailto:info@envoyou.com)

---
&copy; 2025 Husni_Kusuma. All Rights Reserved.