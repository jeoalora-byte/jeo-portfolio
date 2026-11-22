/* =========================================================
   JEO PORTFOLIO 2.0
   INTERACTIONS & ANIMATIONS
   ========================================================= */


/* ==================== MOBILE NAVIGATION ==================== */

const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");

if (menuToggle && navLinks) {

    menuToggle.addEventListener("click", () => {

        navLinks.classList.toggle("active");

        const isOpen =
            navLinks.classList.contains("active");

        menuToggle.setAttribute(
            "aria-expanded",
            isOpen
        );

    });


    navLinks.querySelectorAll("a").forEach(link => {

        link.addEventListener("click", () => {

            navLinks.classList.remove("active");

            menuToggle.setAttribute(
                "aria-expanded",
                "false"
            );

        });

    });

}


/* ==================== SCROLL REVEAL ==================== */

const revealElements = document.querySelectorAll(
    ".section-header, " +
    ".about-text, " +
    ".about-highlights, " +
    ".highlight-card, " +
    ".skill-card, " +
    ".timeline-item, " +
    ".project-card, " +
    ".learning-item, " +
    ".contact-container"
);


if ("IntersectionObserver" in window) {

    const revealObserver =
        new IntersectionObserver(

            (entries, observer) => {

                entries.forEach(entry => {

                    if (entry.isIntersecting) {

                        entry.target.classList.add(
                            "reveal-visible"
                        );

                        observer.unobserve(
                            entry.target
                        );

                    }

                });

            },

            {
                threshold: 0.12,

                rootMargin:
                    "0px 0px -40px 0px"
            }

        );


    revealElements.forEach(element => {

        element.classList.add("reveal");

        revealObserver.observe(element);

    });

} else {

    revealElements.forEach(element => {

        element.classList.add(
            "reveal-visible"
        );

    });

}


/* ==================== STAGGERED ANIMATIONS ==================== */

document
    .querySelectorAll(".project-card")
    .forEach((card, index) => {

        card.style.transitionDelay =
            `${index * 0.1}s`;

    });


document
    .querySelectorAll(".skill-card")
    .forEach((card, index) => {

        card.style.transitionDelay =
            `${index * 0.1}s`;

    });


document
    .querySelectorAll(".learning-item")
    .forEach((item, index) => {

        item.style.transitionDelay =
            `${index * 0.1}s`;

    });


document
    .querySelectorAll(".timeline-item")
    .forEach((item, index) => {

        item.style.transitionDelay =
            `${index * 0.1}s`;

    });


document
    .querySelectorAll(".highlight-card")
    .forEach((card, index) => {

        card.style.transitionDelay =
            `${index * 0.08}s`;

    });


/* ==================== NAVBAR SCROLL EFFECT ==================== */

const navbar =
    document.querySelector(".navbar");


if (navbar) {

    const updateNavbar = () => {

        if (window.scrollY > 50) {

            navbar.classList.add(
                "navbar-scrolled"
            );

        } else {

            navbar.classList.remove(
                "navbar-scrolled"
            );

        }

    };


    window.addEventListener(
        "scroll",
        updateNavbar,
        { passive: true }
    );


    updateNavbar();

}


/* ==================== ACTIVE NAVIGATION ==================== */

const sections =
    document.querySelectorAll("section[id]");

const navigationLinks =
    document.querySelectorAll(".nav-links a");


if ("IntersectionObserver" in window) {

    const activeSectionObserver =
        new IntersectionObserver(

            (entries) => {

                entries.forEach(entry => {

                    if (!entry.isIntersecting) {
                        return;
                    }


                    const activeLink =
                        document.querySelector(
                            `.nav-links a[href="#${entry.target.id}"]`
                        );


                    if (!activeLink) {
                        return;
                    }


                    navigationLinks.forEach(link => {

                        link.classList.remove(
                            "active"
                        );

                    });


                    activeLink.classList.add(
                        "active"
                    );

                });

            },

            {
                threshold: 0.35,

                rootMargin:
                    "-10% 0px -45% 0px"
            }

        );


    sections.forEach(section => {

        activeSectionObserver.observe(
            section
        );

    });

}


/* ==================== HERO VISUAL INTERACTION ==================== */

const heroPhotoFrame =
    document.querySelector(
        ".hero-photo-frame"
    );


if (
    heroPhotoFrame &&
    window.matchMedia("(pointer: fine)").matches
) {

    heroPhotoFrame.addEventListener(
        "mousemove",
        event => {

            const rect =
                heroPhotoFrame.getBoundingClientRect();


            const x =
                (event.clientX - rect.left) /
                rect.width -
                0.5;


            const y =
                (event.clientY - rect.top) /
                rect.height -
                0.5;


            heroPhotoFrame.style.transform = `
                translateY(-4px)
                rotateX(${y * -2}deg)
                rotateY(${x * 2}deg)
            `;

        }
    );


    heroPhotoFrame.addEventListener(
        "mouseleave",
        () => {

            heroPhotoFrame.style.transform = "";

        }
    );

}


/* ==================== CLOSE MOBILE NAV ON ESC ==================== */

document.addEventListener(
    "keydown",
    event => {

        if (event.key !== "Escape") {
            return;
        }


        if (
            navLinks &&
            navLinks.classList.contains("active")
        ) {

            navLinks.classList.remove(
                "active"
            );


            if (menuToggle) {

                menuToggle.setAttribute(
                    "aria-expanded",
                    "false"
                );

            }

        }

    }
);


/* ==================== UPDATE FOOTER YEAR ==================== */

const footerYear =
    document.querySelector(
        ".footer-bottom p"
    );


if (footerYear) {

    const currentYear =
        new Date().getFullYear();


    footerYear.textContent =
        footerYear.textContent.replace(
            /©\s*\d{4}/,
            `© ${currentYear}`
        );

}