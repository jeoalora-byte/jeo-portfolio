/* =========================================================
   JEO PORTFOLIO 2.0
   MODERN BUSINESS & INNOVATION DESIGN
   ========================================================= */


/* ==================== GLOBAL SETTINGS ==================== */

:root {

    --primary: #244d3d;
    --primary-dark: #17392c;
    --primary-light: #e8f0eb;

    --accent: #b99b69;
    --accent-light: #e6d6b7;

    --dark: #17231e;
    --text: #4c5a53;
    --muted: #7d8982;

    --background: #f7f9f7;
    --white: #ffffff;
    --soft: #edf2ee;
    --border: #e1e8e2;

    --font-heading: "Manrope", sans-serif;
    --font-body: "DM Sans", sans-serif;

    --container: 1160px;

    --shadow:
        0 18px 50px rgba(23, 57, 44, 0.08);

    --transition: 0.3s ease;
}


* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}


html {
    scroll-behavior: smooth;
    scroll-padding-top: 100px;
}


body {
    font-family: var(--font-body);
    color: var(--text);
    background: var(--background);
    line-height: 1.7;
    overflow-x: hidden;
}


body,
button,
a {
    -webkit-tap-highlight-color: transparent;
}


a {
    text-decoration: none;
    color: inherit;
}


button {
    font: inherit;
}


ul {
    list-style: none;
}


img {
    max-width: 100%;
    display: block;
}


.container {
    width: min(var(--container), 90%);
    margin: 0 auto;
}


.section {
    padding: 110px 0;
}


::selection {
    background: var(--primary);
    color: var(--white);
}


/* ==================== NAVIGATION ==================== */

.site-header {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    z-index: 1000;

    background: rgba(255, 255, 255, 0.91);
    backdrop-filter: blur(16px);
    -webkit-backdrop-filter: blur(16px);

    border-bottom: 1px solid rgba(36, 77, 61, 0.08);

    transition: var(--transition);
}


.site-header.scrolled {
    box-shadow: 0 8px 30px rgba(23, 57, 44, 0.08);
}


.navbar {
    min-height: 78px;

    display: flex;
    justify-content: space-between;
    align-items: center;
}


.logo {
    display: flex;
    align-items: center;
    gap: 10px;
}


.logo-mark {
    width: 36px;
    height: 36px;

    display: grid;
    place-items: center;

    background: var(--primary);
    color: var(--white);

    font-family: var(--font-heading);
    font-weight: 800;

    border-radius: 10px;
}


.logo-text {
    font-family: var(--font-heading);
    font-size: 20px;
    font-weight: 800;
    color: var(--dark);
    letter-spacing: 1px;
}


.logo-text span,
.footer-logo span {
    color: var(--accent);
}


.nav-links {
    display: flex;
    align-items: center;
    gap: 27px;
}


.nav-link {
    font-size: 12px;
    font-weight: 700;
    color: var(--text);

    position: relative;

    transition: var(--transition);
}


.nav-link::after {
    content: "";

    position: absolute;
    left: 0;
    bottom: -7px;

    width: 0;
    height: 2px;

    background: var(--accent);

    transition: var(--transition);
}


.nav-link:hover,
.nav-link.active {
    color: var(--primary);
}


.nav-link:hover::after,
.nav-link.active::after {
    width: 100%;
}


.nav-contact {
    background: var(--primary);
    color: var(--white);

    padding: 11px 18px;
    border-radius: 30px;
}


.nav-contact:hover {
    background: var(--primary-dark);
    color: var(--white);
}


.nav-contact::after {
    display: none;
}


.menu-toggle {
    display: none;

    border: none;
    background: transparent;

    cursor: pointer;
}


.menu-toggle span {
    display: block;

    width: 25px;
    height: 2px;

    background: var(--primary);

    margin: 6px 0;

    transition: var(--transition);
}


/* ==================== HERO SECTION ==================== */

.hero {
    min-height: 760px;

    position: relative;

    display: flex;
    align-items: center;

    overflow: hidden;

    color: var(--white);

    background: #19392d;
}


.hero-background {
    position: absolute;
    inset: 0;

    background-image:
        url("https://images.unsplash.com/photo-1470770841072-f978cf4d019e?auto=format&fit=crop&w=2000&q=85");

    background-position: center;
    background-size: cover;

    transform: scale(1.02);
}


.hero-overlay {
    position: absolute;
    inset: 0;

    background:
        linear-gradient(
            90deg,
            rgba(15, 39, 29, 0.96) 0%,
            rgba(19, 48, 36, 0.90) 48%,
            rgba(19, 48, 36, 0.63) 100%
        );
}


.hero-container {
    position: relative;
    z-index: 2;

    display: grid;
    grid-template-columns: 1.2fr 0.8fr;

    align-items: center;
    gap: 65px;

    padding-top: 130px;
    padding-bottom: 95px;
}


.hero-content {
    max-width: 700px;
}


.hero-label {
    display: inline-flex;
    align-items: center;
    gap: 10px;

    font-size: 11px;
    font-weight: 700;
    letter-spacing: 2px;

    color: #e1d3b6;

    margin-bottom: 30px;
}


.status-dot {
    width: 8px;
    height: 8px;

    background: #a6d2a9;
    border-radius: 50%;

    box-shadow: 0 0 12px #a6d2a9;
}


.hero-intro {
    font-size: 18px;
    color: #d4e0d8;
    margin-bottom: 8px;
}


.hero h1 {
    font-family: var(--font-heading);

    font-size: clamp(42px, 5vw, 66px);
    font-weight: 800;

    line-height: 1.12;
    letter-spacing: -2px;

    color: var(--white);

    margin-bottom: 18px;
}


.name-accent {
    display: block;
    color: #d5bd91;
}


.hero-role {
    font-family: var(--font-heading);
    font-size: 21px;
    font-weight: 600;

    color: #e7eee9;

    margin-bottom: 22px;
}


.hero-description {
    max-width: 590px;

    font-size: 15px;
    line-height: 1.9;

    color: #d4dfd8;
}


.hero-buttons {
    display: flex;
    flex-wrap: wrap;
    gap: 14px;

    margin-top: 35px;
}


.btn {
    min-height: 48px;

    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: 12px;

    padding: 12px 23px;

    border-radius: 30px;

    font-size: 12px;
    font-weight: 700;

    transition: var(--transition);
    cursor: pointer;
}


.btn-primary {
    background: var(--accent);
    color: var(--dark);
    border: 1px solid var(--accent);
}


.btn-primary:hover {
    background: #d1b98e;
    border-color: #d1b98e;

    transform: translateY(-3px);
}


.btn-outline {
    border: 1px solid rgba(255, 255, 255, 0.55);
    color: var(--white);
}


.btn-outline:hover {
    background: var(--white);
    color: var(--primary);
}


.btn-outline-dark {
    border: 1px solid var(--primary);
    color: var(--primary);
}


.btn-outline-dark:hover {
    background: var(--primary);
    color: var(--white);
}


.hero-highlights {
    display: flex;
    flex-wrap: wrap;
    gap: 45px;

    margin-top: 60px;
    padding-top: 25px;

    border-top: 1px solid rgba(255, 255, 255, 0.2);
}


.hero-highlight {
    display: flex;
    flex-direction: column;
}


.hero-highlight strong {
    font-family: var(--font-heading);
    font-size: 15px;
    color: var(--white);
}


.hero-highlight span {
    font-size: 11px;
    color: #c2d0c7;
}


/* ==================== HERO PROFILE PHOTO ==================== */

.hero-photo-area {
    position: relative;

    display: flex;
    justify-content: center;
    align-items: center;

    min-height: 480px;
}


.hero-photo-frame {
    position: relative;

    width: 340px;
    height: 425px;

    padding: 12px;

    background: rgba(255, 255, 255, 0.14);

    border: 1px solid rgba(255, 255, 255, 0.35);

    border-radius: 170px 170px 25px 25px;

    backdrop-filter: blur(8px);

    box-shadow: 0 30px 80px rgba(0, 0, 0, 0.25);

    transform: rotate(2deg);

    transition: var(--transition);
}


.hero-photo-frame:hover {
    transform: rotate(0deg) translateY(-8px);
}


.profile-placeholder {
    width: 100%;
    height: 100%;

    border-radius: 160px 160px 17px 17px;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    background:
        linear-gradient(
            145deg,
            #dce8df,
            #9fb8a6 50%,
            #456b55
        );

    color: var(--primary-dark);
}


.profile-initials {
    font-family: var(--font-heading);
    font-size: 76px;
    font-weight: 800;

    letter-spacing: -5px;
}


.profile-placeholder-label {
    font-size: 9px;
    font-weight: 700;
    letter-spacing: 2px;
}


.profile-image {
    width: 100%;
    height: 100%;

    object-fit: cover;

    border-radius: 160px 160px 17px 17px;
}


.photo-caption {
    position: absolute;
    left: -35px;
    bottom: 35px;

    display: flex;
    align-items: center;
    gap: 12px;

    padding: 14px 20px;

    background: var(--white);
    color: var(--dark);

    border-radius: 12px;

    box-shadow: var(--shadow);

    transform: rotate(-2deg);
}


.caption-line {
    width: 4px;
    height: 35px;

    background: var(--accent);
    border-radius: 10px;
}


.photo-caption div {
    display: flex;
    flex-direction: column;
}


.photo-caption strong {
    font-family: var(--font-heading);
    font-size: 12px;
}


.photo-caption span:last-child {
    font-size: 10px;
    color: var(--muted);
}


.photo-decoration {
    position: absolute;

    border: 1px solid rgba(226, 211, 181, 0.55);

    border-radius: 50%;
}


.decoration-one {
    width: 400px;
    height: 400px;
}


.decoration-two {
    width: 455px;
    height: 455px;

    opacity: 0.4;
}


.floating-card {
    position: absolute;
    right: -20px;
    top: 65px;

    display: flex;
    align-items: center;
    gap: 12px;

    padding: 14px 18px;

    background: var(--white);
    color: var(--dark);

    border-radius: 12px;

    box-shadow: var(--shadow);
}


.floating-icon {
    font-size: 24px;
    color: var(--accent);
}


.floating-card div {
    display: flex;
    flex-direction: column;
}


.floating-card strong {
    font-size: 11px;
}


.floating-card span:last-child {
    font-size: 10px;
    color: var(--muted);
}


.hero-bottom-line {
    position: absolute;
    bottom: 0;
    left: 0;

    width: 100%;
    height: 5px;

    background: linear-gradient(
        90deg,
        var(--accent),
        #d9c9a8,
        var(--primary)
    );
}


/* ==================== SECTION HEADERS ==================== */

.section-header {
    max-width: 720px;
    margin-bottom: 55px;
}


.section-kicker {
    display: inline-block;

    color: var(--accent);
    font-size: 11px;
    font-weight: 800;

    letter-spacing: 2px;

    margin-bottom: 15px;
}


.section-header h2 {
    font-family: var(--font-heading);

    font-size: clamp(30px, 4vw, 43px);
    line-height: 1.25;

    letter-spacing: -1.5px;

    color: var(--dark);

    margin-bottom: 18px;
}


.section-header h2 span {
    color: var(--primary);
}


.section-header p {
    max-width: 620px;

    font-size: 14px;
    color: var(--muted);
    line-height: 1.9;
}


/* ==================== ABOUT SECTION ==================== */

.about-section {
    background: var(--background);
}


.about-grid {
    display: grid;
    grid-template-columns: 1.2fr 0.8fr;
    gap: 65px;
}


.about-main h3 {
    font-family: var(--font-heading);
    font-size: 23px;

    color: var(--dark);

    margin-bottom: 22px;
}


.about-main p {
    font-size: 14px;
    line-height: 2;

    margin-bottom: 18px;
}


.about-side {
    display: grid;
    gap: 15px;
}


.about-card {
    position: relative;

    padding: 22px 25px;

    background: var(--white);

    border: 1px solid var(--border);
    border-radius: 14px;

    transition: var(--transition);
}


.about-card:hover {
    transform: translateX(7px);
    box-shadow: var(--shadow);
}


.about-card-number {
    display: inline-block;

    color: var(--accent);
    font-size: 11px;
    font-weight: 800;

    margin-bottom: 8px;
}


.about-card h3 {
    font-family: var(--font-heading);
    font-size: 16px;

    color: var(--primary);

    margin-bottom: 6px;
}


.about-card p {
    font-size: 12px;
    line-height: 1.8;
}


/* ==================== EXPERTISE SECTION ==================== */

.expertise-section {
    background: var(--soft);
}


.expertise-grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 22px;
}


.expertise-card {
    padding: 35px;

    background: var(--white);

    border: 1px solid var(--border);
    border-radius: 16px;

    transition: var(--transition);
}


.expertise-card:hover {
    transform: translateY(-7px);
    box-shadow: var(--shadow);
}


.card-icon {
    width: 48px;
    height: 48px;

    display: grid;
    place-items: center;

    background: var(--primary-light);
    color: var(--primary);

    font-family: var(--font-heading);
    font-size: 13px;
    font-weight: 800;

    border-radius: 12px;

    margin-bottom: 22px;
}


.expertise-card h3 {
    font-family: var(--font-heading);
    font-size: 19px;

    color: var(--dark);

    margin-bottom: 12px;
}


.expertise-card p {
    font-size: 13px;
    line-height: 1.9;

    margin-bottom: 22px;
}


.skill-tags,
.project-tags {
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
}


.skill-tags span,
.project-tags span {
    padding: 7px 11px;

    background: var(--primary-light);
    color: var(--primary);

    border-radius: 30px;

    font-size: 10px;
    font-weight: 700;
}


/* ==================== EXPERIENCE SECTION ==================== */

.experience-section {
    background: var(--background);
}


.experience-timeline {
    max-width: 900px;

    position: relative;

    margin-left: 10px;
}


.experience-timeline::before {
    content: "";

    position: absolute;
    left: 8px;
    top: 8px;
    bottom: 20px;

    width: 2px;

    background: var(--border);
}


.timeline-item {
    position: relative;

    padding-left: 55px;
    margin-bottom: 55px;
}


.timeline-marker {
    position: absolute;
    left: 0;
    top: 5px;

    width: 18px;
    height: 18px;

    background: var(--accent);

    border: 5px solid var(--primary-light);
    border-radius: 50%;

    z-index: 2;
}


.timeline-content {
    padding: 30px;

    background: var(--white);

    border: 1px solid var(--border);
    border-radius: 16px;

    transition: var(--transition);
}


.timeline-content:hover {
    box-shadow: var(--shadow);
    transform: translateY(-4px);
}


.timeline-category {
    color: var(--accent);

    font-size: 10px;
    font-weight: 800;

    letter-spacing: 1.5px;
}


.timeline-content h3 {
    font-family: var(--font-heading);
    font-size: 20px;

    color: var(--dark);

    margin: 9px 0 3px;
}


.timeline-content h4 {
    color: var(--primary);
    font-size: 13px;

    margin-bottom: 16px;
}


.timeline-description {
    font-size: 13px;
    line-height: 1.9;

    margin-bottom: 18px;
}


.timeline-content ul {
    list-style: disc;
    padding-left: 18px;
}


.timeline-content li {
    font-size: 12px;
    line-height: 1.9;

    margin-bottom: 7px;
}


/* ==================== PROJECTS SECTION ==================== */

.projects-section {
    background: var(--soft);
}


.projects-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 22px;
}


.project-card {
    position: relative;

    min-height: 365px;

    padding: 30px;

    background: var(--white);

    border: 1px solid var(--border);
    border-radius: 16px;

    overflow: hidden;

    transition: var(--transition);
}


.project-card:hover {
    transform: translateY(-8px);
    box-shadow: var(--shadow);
}


.project-number {
    color: var(--accent);

    font-size: 10px;
    font-weight: 800;

    letter-spacing: 1.5px;
}


.project-symbol {
    width: 55px;
    height: 55px;

    display: grid;
    place-items: center;

    background: var(--primary-light);
    color: var(--primary);

    font-size: 25px;

    border-radius: 14px;

    margin: 30px 0 22px;
}


.project-card h3 {
    font-family: var(--font-heading);
    font-size: 18px;

    line-height: 1.5;

    color: var(--dark);

    margin-bottom: 15px;
}


.project-card p {
    font-size: 12px;
    line-height: 1.9;

    margin-bottom: 25px;
}


.project-tags span {
    font-size: 9px;
}


/* ==================== ACHIEVEMENTS SECTION ==================== */

.achievements-section {
    background: var(--background);
}


.achievement-grid {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 18px;
}


.achievement-card {
    padding: 28px 23px;

    background: var(--white);

    border: 1px solid var(--border);
    border-radius: 14px;

    transition: var(--transition);
}


.achievement-card:hover {
    transform: translateY(-6px);
    box-shadow: var(--shadow);
}


.achievement-icon {
    display: inline-block;

    font-family: var(--font-heading);
    font-size: 30px;
    font-weight: 800;

    color: var(--accent);

    margin-bottom: 20px;
}


.achievement-card h3 {
    font-family: var(--font-heading);
    font-size: 15px;

    color: var(--primary);

    margin-bottom: 12px;
}


.achievement-card p {
    font-size: 12px;
    line-height: 1.9;
}


/* ==================== LEARNING JOURNEY ==================== */

.journey-section {
    background: var(--soft);
}


.journey-grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 20px;
}


.journey-card {
    padding: 30px;

    background: var(--white);

    border: 1px solid var(--border);
    border-radius: 16px;

    transition: var(--transition);
}


.journey-card:hover {
    transform: translateY(-5px);
    box-shadow: var(--shadow);
}


.journey-label {
    color: var(--accent);

    font-size: 10px;
    font-weight: 800;

    letter-spacing: 2px;
}


.journey-card h3 {
    font-family: var(--font-heading);
    font-size: 19px;

    color: var(--dark);

    margin: 13px 0 18px;
}


.journey-card p {
    font-size: 13px;
    line-height: 1.9;

    margin-bottom: 16px;
}


.journey-card ul {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 12px;
}


.journey-card li {
    position: relative;

    padding-left: 17px;

    font-size: 12px;
}


.journey-card li::before {
    content: "✓";

    position: absolute;
    left: 0;

    color: var(--primary);
    font-weight: 800;
}


.journey-card-featured {
    background: var(--primary);
    color: #e2ebe5;

    border-color: var(--primary);
}


.journey-card-featured h3 {
    color: var(--white);
}


.journey-card-featured li::before {
    color: var(--accent-light);
}


.journey-card-featured .journey-label {
    color: var(--accent-light);
}


/* ==================== SERVICES SECTION ==================== */

.services-section {
    background: var(--background);
}


.services-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 20px;
}


.service-card {
    padding: 30px;

    background: var(--white);

    border: 1px solid var(--border);
    border-radius: 15px;

    transition: var(--transition);
}


.service-card:hover {
    border-color: var(--accent);
    transform: translateY(-6px);

    box-shadow: var(--shadow);
}


.service-number {
    display: inline-block;

    font-family: var(--font-heading);
    font-size: 28px;
    font-weight: 800;

    color: var(--accent);

    margin-bottom: 20px;
}


.service-card h3 {
    font-family: var(--font-heading);
    font-size: 17px;

    line-height: 1.5;

    color: var(--primary);

    margin-bottom: 12px;
}


.service-card p {
    font-size: 12px;
    line-height: 1.9;
}


.services-note {
    display: flex;
    align-items: flex-start;
    gap: 13px;

    margin-top: 30px;
    padding: 20px 23px;

    background: var(--primary-light);

    border-radius: 12px;
}


.services-note span {
    color: var(--accent);
    font-size: 20px;
}


.services-note p {
    font-size: 11px;
    line-height: 1.9;
}


/* ==================== CONTACT SECTION ==================== */

.contact-section {
    background: var(--soft);
}


.contact-box {
    display: grid;
    grid-template-columns: 1.2fr 0.8fr;
    gap: 60px;

    padding: 60px;

    background: var(--white);

    border: 1px solid var(--border);
    border-radius: 20px;

    box-shadow: var(--shadow);
}


.contact-content h2 {
    font-family: var(--font-heading);

    font-size: clamp(30px, 4vw, 42px);
    line-height: 1.25;

    color: var(--dark);

    letter-spacing: -1px;

    margin-bottom: 20px;
}


.contact-content h2 span {
    color: var(--primary);
}


.contact-content p {
    font-size: 13px;
    line-height: 1.9;

    max-width: 520px;
}


.contact-buttons {
    display: flex;
    flex-wrap: wrap;
    gap: 12px;

    margin-top: 28px;
}


.contact-details {
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 25px;

    padding-left: 35px;

    border-left: 1px solid var(--border);
}


.contact-detail {
    display: flex;
    flex-direction: column;
    gap: 5px;
}


.detail-label {
    color: var(--accent);

    font-size: 10px;
    font-weight: 800;

    letter-spacing: 1.5px;
}


.contact-detail a,
.contact-detail > span:last-child {
    font-size: 13px;
    font-weight: 600;

    color: var(--primary);

    overflow-wrap: anywhere;
}


.contact-detail a:hover {
    color: var(--accent);
}


/* ==================== FOOTER ==================== */

.site-footer {
    padding: 35px 0;

    background: var(--primary-dark);
    color: #d4dfd8;
}


.footer-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;

    text-align: center;
}


.footer-logo {
    font-family: var(--font-heading);
    font-size: 24px;
    font-weight: 800;

    color: var(--white);
}


.site-footer p {
    font-size: 12px;
    color: #c0d0c5;
}


.copyright {
    font-size: 10px;
    color: #9fb2a5;

    margin-top: 8px;
}


/* ==================== REVEAL ANIMATIONS ==================== */

.reveal {
    opacity: 0;

    transform: translateY(30px);

    transition:
        opacity 0.7s ease,
        transform 0.7s ease;
}


.reveal.visible {
    opacity: 1;
    transform: translateY(0);
}


/* ==================== RESPONSIVE DESIGN ==================== */

@media (max-width: 1050px) {

    .nav-links {
        gap: 17px;
    }

    .nav-link {
        font-size: 11px;
    }

    .hero-container {
        gap: 35px;
    }

    .hero-photo-frame {
        width: 300px;
        height: 390px;
    }

    .floating-card {
        right: -5px;
    }

    .achievement-grid {
        grid-template-columns: repeat(2, 1fr);
    }

}


@media (max-width: 850px) {

    .section {
        padding: 85px 0;
    }

    .menu-toggle {
        display: block;
        z-index: 1002;
    }

    .nav-links {
        position: absolute;

        top: 78px;
        left: 0;

        width: 100%;

        display: flex;
        flex-direction: column;
        align-items: stretch;

        gap: 0;

        padding: 15px 5% 25px;

        background: var(--white);

        border-bottom: 1px solid var(--border);

        box-shadow: var(--shadow);

        opacity: 0;
        visibility: hidden;

        transform: translateY(-10px);

        transition: var(--transition);
    }

    .nav-links.open {
        opacity: 1;
        visibility: visible;
        transform: translateY(0);
    }

    .nav-links li {
        width: 100%;
    }

    .nav-link {
        display: block;
        padding: 13px 5px;
        font-size: 13px;
    }

    .nav-link::after {
        display: none;
    }

    .nav-contact {
        display: inline-block;
        width: fit-content;
        margin-top: 10px;
    }

    .menu-toggle.active span:nth-child(1) {
        transform: translateY(8px) rotate(45deg);
    }

    .menu-toggle.active span:nth-child(2) {
        opacity: 0;
    }

    .menu-toggle.active span:nth-child(3) {
        transform: translateY(-8px) rotate(-45deg);
    }

    .hero {
        min-height: auto;
    }

    .hero-container {
        grid-template-columns: 1fr;
        text-align: center;

        padding-top: 140px;
    }

    .hero-content {
        margin: 0 auto;
    }

    .hero-description {
        margin: 0 auto;
    }

    .hero-buttons,
    .hero-highlights {
        justify-content: center;
    }

    .hero-photo-area {
        min-height: 480px;
        margin-top: 20px;
    }

    .about-grid {
        grid-template-columns: 1fr;
        gap: 35px;
    }

    .projects-grid {
        grid-template-columns: repeat(2, 1fr);
    }

    .services-grid {
        grid-template-columns: repeat(2, 1fr);
    }

    .contact-box {
        grid-template-columns: 1fr;
        gap: 35px;
    }

    .contact-details {
        padding-left: 0;
        padding-top: 25px;

        border-left: none;
        border-top: 1px solid var(--border);
    }

}


@media (max-width: 600px) {

    .container {
        width: 90%;
    }

    .section {
        padding: 70px 0;
    }

    .navbar {
        min-height: 70px;
    }

    .nav-links {
        top: 70px;
    }

    .hero-container {
        padding-top: 120px;
        padding-bottom: 70px;
    }

    .hero h1 {
        font-size: 42px;
        letter-spacing: -1.5px;
    }

    .hero-role {
        font-size: 17px;
    }

    .hero-description {
        font-size: 13px;
    }

    .hero-highlights {
        gap: 25px;
    }

    .hero-highlight strong {
        font-size: 13px;
    }

    .hero-photo-area {
        min-height: 400px;
    }

    .hero-photo-frame {
        width: 265px;
        height: 350px;
    }

    .profile-initials {
        font-size: 60px;
    }

    .photo-decoration {
        max-width: 330px;
        max-height: 330px;
    }

    .photo-caption {
        left: -8px;
        bottom: 15px;
    }

    .floating-card {
        right: -8px;
        top: 35px;
        padding: 11px;
    }

    .section-header h2 {
        font-size: 30px;
    }

    .section-header p {
        font-size: 13px;
    }

    .expertise-grid,
    .projects-grid,
    .achievement-grid,
    .journey-grid,
    .services-grid {
        grid-template-columns: 1fr;
    }

    .expertise-card,
    .journey-card,
    .service-card {
        padding: 25px;
    }

    .project-card {
        min-height: auto;
    }

    .timeline-item {
        padding-left: 35px;
    }

    .timeline-content {
        padding: 22px;
    }

    .timeline-content h3 {
        font-size: 17px;
    }

    .timeline-description {
        font-size: 12px;
    }

    .timeline-content li {
        font-size: 11px;
    }

    .journey-card ul {
        grid-template-columns: 1fr;
    }

    .contact-box {
        padding: 30px 23px;
    }

    .contact-content h2 {
        font-size: 30px;
    }

    .contact-buttons {
        flex-direction: column;
        align-items: stretch;
    }

    .contact-buttons .btn {
        width: 100%;
    }

}


@media (prefers-reduced-motion: reduce) {

    *,
    *::before,
    *::after {
        scroll-behavior: auto !important;
        animation-duration: 0.01ms !important;
        transition-duration: 0.01ms !important;
    }

    .reveal {
        opacity: 1;
        transform: none;
    }

}