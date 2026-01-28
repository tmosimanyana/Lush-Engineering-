(function () {
    "use strict";

    // ===== Config =====
    const PHONE_MAIN = "+26773108995";
    const WHATSAPP_NUMBER = "26773108995";

    // ===== Helpers =====
    const $ = (sel, root = document) => root.querySelector(sel);

    // ===== Footer year =====
    const year = $("#year");
    if (year) year.textContent = new Date().getFullYear();

    // ===== Active nav link =====
    const path = (window.location.pathname.split("/").pop() || "index.html").toLowerCase();
    const activeMap = {
        "index.html": "nav-home",
        "about.html": "nav-about",
        "services.html": "nav-services",
        "projects.html": "nav-projects",
        "contact.html": "nav-contact",
    };
    const activeId = activeMap[path];
    if (activeId) {
        const a = document.getElementById(activeId);
        if (a) a.classList.add("active");

        const m = document.getElementById(activeId + "-m");
        if (m) m.classList.add("active");
    }

    // ===== Mobile menu toggle =====
    const menuBtn = $("#menuBtn");
    const mobileNav = $("#mobileNav");
    if (menuBtn && mobileNav) {
        menuBtn.addEventListener("click", () => {
            const isOpen = mobileNav.classList.toggle("open");
            menuBtn.setAttribute("aria-expanded", String(isOpen));
        });

        mobileNav.addEventListener("click", (e) => {
            const target = e.target;
            if (target && target.tagName === "A") {
                mobileNav.classList.remove("open");
                menuBtn.setAttribute("aria-expanded", "false");
            }
        });
    }

    // ===== Update call + WhatsApp links everywhere =====
    document.querySelectorAll("[data-call]").forEach((a) => {
        a.setAttribute("href", `tel:${PHONE_MAIN}`);
    });
    document.querySelectorAll("[data-wa]").forEach((a) => {
        a.setAttribute("href", `https://wa.me/${WHATSAPP_NUMBER}`);
    });

    // ===== Contact form -> WhatsApp (optional) =====
    const form = $("#contactForm");
    const alertBox = $("#formAlert");
    if (form) {
        form.addEventListener("submit", (e) => {
            e.preventDefault();

            const name = $("#name")?.value.trim();
            const email = $("#email")?.value.trim();
            const phone = $("#phone")?.value.trim();
            const message = $("#message")?.value.trim();

            const emailOk = !email || /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
            const requiredOk = !!name && !!message;

            if (!requiredOk || !emailOk) {
                if (alertBox) {
                    alertBox.classList.add("show");
                    alertBox.textContent = !requiredOk
                        ? "Please enter your name and message."
                        : "Please enter a valid email address.";
                }
                return;
            }

            const text =
                `Hello Lush Engineering,%0A%0A` +
                `Name: ${encodeURIComponent(name)}%0A` +
                `Phone: ${encodeURIComponent(phone || "N/A")}%0A` +
                `Email: ${encodeURIComponent(email || "N/A")}%0A%0A` +
                `Message:%0A${encodeURIComponent(message)}`;

            window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${text}`, "_blank");

            form.reset();
            if (alertBox) {
                alertBox.classList.add("show");
                alertBox.textContent = "Thanks! Opening WhatsApp to send your request.";
            }
        });
    }

    // ===== Lightbox =====
    const lightbox = document.getElementById("lightbox");
    const lbImg = document.getElementById("lbImg");
    const lbClose = document.getElementById("lbClose");

    if (lightbox && lbImg && lbClose) {
        document.addEventListener("click", (e) => {
            const link = e.target.closest && e.target.closest(".g-item");
            if (!link) return;

            e.preventDefault();
            lbImg.src = link.getAttribute("href");
            lightbox.classList.add("open");
            lightbox.setAttribute("aria-hidden", "false");
        });

        const closeLb = () => {
            lightbox.classList.remove("open");
            lightbox.setAttribute("aria-hidden", "true");
            lbImg.src = "";
        };

        lbClose.addEventListener("click", closeLb);
        lightbox.addEventListener("click", (e) => {
            if (e.target === lightbox) closeLb();
        });

        document.addEventListener("keydown", (e) => {
            if (e.key === "Escape" && lightbox.classList.contains("open")) closeLb();
        });
    }

    // ===== Gallery filters =====
    const filterButtons = document.querySelectorAll(".filter-btn");
    const galleryItems = document.querySelectorAll(".g-item");

    if (filterButtons.length && galleryItems.length) {
        filterButtons.forEach((btn) => {
            btn.addEventListener("click", () => {
                const filter = btn.getAttribute("data-filter");

                filterButtons.forEach((b) => b.classList.remove("active"));
                btn.classList.add("active");

                galleryItems.forEach((item) => {
                    const cat = item.getAttribute("data-cat") || "";
                    const show = filter === "all" || cat === filter;
                    item.classList.toggle("is-hidden", !show);
                });
            });
        });
    }
})();
