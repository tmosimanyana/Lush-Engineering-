(function () {
    "use strict";

    const PHONE = "+26773108995";

    // year
    const y = document.getElementById("year");
    if (y) y.textContent = new Date().getFullYear();

    // call links
    document.querySelectorAll("[data-call]").forEach(a => {
        a.href = "tel:" + PHONE;
    });

    // lightbox
    const lb = document.getElementById("lightbox");
    const lbImg = document.getElementById("lbImg");
    const lbClose = document.getElementById("lbClose");

    document.addEventListener("click", e => {
        const item = e.target.closest(".g-item");
        if (item) {
            e.preventDefault();
            lbImg.src = item.href;
            lb.classList.add("open");
        }
    });

    if (lbClose) {
        lbClose.onclick = () => lb.classList.remove("open");
        lb.onclick = e => { if (e.target === lb) lb.classList.remove("open"); };
    }

    // filters
    const btns = document.querySelectorAll(".filter-btn");
    const items = document.querySelectorAll(".g-item");

    btns.forEach(btn => {
        btn.onclick = () => {
            const f = btn.dataset.filter;
            btns.forEach(b => b.classList.remove("active"));
            btn.classList.add("active");

            items.forEach(i => {
                const show = f === "all" || i.dataset.cat === f;
                i.classList.toggle("is-hidden", !show);
            });
        };
    });
})();
