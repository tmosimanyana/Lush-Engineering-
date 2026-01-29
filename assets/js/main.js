(function () {
    "use strict";

    // ===== Config (edit once if phone changes) =====
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
        const desktop = document.getElementById(activeId);
        if (desktop) desktop.classList.add("active");

        const mobile = document.getElementById(activeId + "-m");
        if (mobile) mobile.classList.add("active");
    }

    // ===== Mobile menu toggle =====
    const menuBtn = $("#menuBtn");
    const mobileNav = $("#mobileNav");

    if (menuBtn && mobileNav) {
        menuBtn.addEventListener("click", () => {
            const isOpen = mobileNav.classList.toggle("open");
            menuBtn.setAttribute("aria-expanded", String(isOpen));
        });

        // Close menu when a link is clicked
        mobileNav.addEventListener("click", (e) => {
            const t = e.target;
            if (t && t.tagName === "A") {
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

    // ===== Lightbox (Projects) =====
    const lightbox = document.getElementById("lightbox");
    const lbImg = document.getElementById("lbImg");
    const lbClose = document.getElementById("lbClose");

    if (lightbox && lbImg && lbClose) {
        // Open on gallery item click
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

        // Close when clicking outside image
        lightbox.addEventListener("click", (e) => {
            if (e.target === lightbox) closeLb();
        });

        // Close on ESC
        document.addEventListener("keydown", (e) => {
            if (e.key === "Escape" && lightbox.classList.contains("open")) {
                closeLb();
            }
        });
    }

    // ===== Gallery filters (Projects) =====
    const filterButtons = document.querySelectorAll(".filter-btn");
    const galleryItems = document.querySelectorAll(".g-item");

    if (filterButtons.length && galleryItems.length) {
        filterButtons.forEach((btn) => {
            btn.addEventListener("click", () => {
                const filter = btn.getAttribute("data-filter");

                // active button state
                filterButtons.forEach((b) => b.classList.remove("active"));
                btn.classList.add("active");

                // show/hide items
                galleryItems.forEach((item) => {
                    const cat = item.getAttribute("data-cat") || "";
                    const show = filter === "all" || cat === filter;
                    item.classList.toggle("is-hidden", !show);
                });
            });
        });
    }
})();
