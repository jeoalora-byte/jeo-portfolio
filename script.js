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