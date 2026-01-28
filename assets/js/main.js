< !doctype html >
    <html lang="en">
        <head>
            <meta charset="utf-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <title>Projects | Lush Engineering</title>
            <meta name="description" content="View Lush Engineering project gallery and examples of work across electrical, construction, road works, and security systems." />
            <meta property="og:title" content="Projects | Lush Engineering" />
            <meta property="og:description" content="View Lush Engineering project gallery and examples of work across electrical, construction, road works, and security systems." />
            <meta property="og:type" content="website" />
            <link rel="stylesheet" href="assets/css/styles.css" />
        </head>
        <body>

            <div class="topbar">
                <div class="container">
                    <div class="row">
                        <div>📍 Francistown, Botswana</div>
                        <div style="display:flex; gap:14px; flex-wrap:wrap;">
                            <a data-call href="tel:+26773108995">📞 +267 73108995</a>
                            <a href="mailto:lushengineering1@gmail.com">✉️ lushengineering1@gmail.com</a>
                        </div>
                    </div>
                </div>
            </div>

            <header>
                <div class="container">
                    <div class="nav">
                        <a class="brand" href="index.html">
                            <div class="logo">LE</div>
                            <div>
                                <div class="name">Lush Engineering</div>
                                <div class="tag">Electrical & Construction Engineering</div>
                            </div>
                        </a>

                        <nav aria-label="Primary">
                            <ul>
                                <li><a id="nav-home" href="index.html">Home</a></li>
                                <li><a id="nav-about" href="about.html">About</a></li>
                                <li><a id="nav-services" href="services.html">Services</a></li>
                                <li><a id="nav-projects" href="projects.html">Projects</a></li>
                                <li><a id="nav-contact" href="contact.html">Contact</a></li>
                            </ul>
                        </nav>

                        <div class="nav-cta">
                            <a class="btn btn-primary" data-call href="tel:+26773108995">Call Us</a>
                            <a class="btn btn-light" data-wa href="https://wa.me/26773108995" target="_blank" rel="noopener">WhatsApp</a>
                            <button class="menu-btn" id="menuBtn" aria-expanded="false" aria-controls="mobileNav" aria-label="Open menu">☰</button>
                        </div>
                    </div>
                </div>

                <div class="mobile-nav" id="mobileNav">
                    <a id="nav-home-m" href="index.html">Home</a>
                    <a id="nav-about-m" href="about.html">About</a>
                    <a id="nav-services-m" href="services.html">Services</a>
                    <a id="nav-projects-m" href="projects.html">Projects</a>
                    <a id="nav-contact-m" href="contact.html">Contact</a>
                </div>
            </header>

            <main class="hero" style="padding:54px 0 28px;">
                <div class="container">
                    <span class="chip">Projects & Gallery</span>
                    <h1 style="margin-top:12px;">Work Showcase</h1>
                    <p style="max-width:72ch;">
                        Explore a selection of our work across electrical installations, construction and civil works, road & infrastructure, and security systems.
                    </p>
                    <div class="hero-actions">
                        <a class="btn btn-primary" href="contact.html">Request a Quote</a>
                        <a class="btn btn-ghost" href="services.html">View Services</a>
                    </div>
                </div>
            </main>

            <section>
                <div class="container">
                    <div class="section-title">
                        <div>
                            <h2>Gallery</h2>
                            <p>Click any image to view. Add your project photos in <b>assets/img/projects/</b>.</p>
                        </div>
                    </div>

                    <div class="gallery">
                        <a class="g-item" href="assets/img/projects/p1.jpg">
                            <img src="assets/img/projects/p1.jpg" alt="Electrical installation project" loading="lazy">
                                <div class="g-cap">Electrical Installations</div>
                        </a>

                        <a class="g-item" href="assets/img/projects/p2.jpg">
                            <img src="assets/img/projects/p2.jpg" alt="Construction and civil works project" loading="lazy">
                                <div class="g-cap">Construction & Civil Works</div>
                        </a>

                        <a class="g-item" href="assets/img/projects/p3.jpg">
                            <img src="assets/img/projects/p3.jpg" alt="Road works project" loading="lazy">
                                <div class="g-cap">Road & Infrastructure</div>
                        </a>

                        <a class="g-item" href="assets/img/projects/p4.jpg">
                            <img src="assets/img/projects/p4.jpg" alt="Security systems installation project" loading="lazy">
                                <div class="g-cap">Security Systems</div>
                        </a>

                        <a class="g-item" href="assets/img/projects/p5.jpg">
                            <img src="assets/img/projects/p5.jpg" alt="Fabrication work project" loading="lazy">
                                <div class="g-cap">Fabrication & Steel Works</div>
                        </a>

                        <a class="g-item" href="assets/img/projects/p6.jpg">
                            <img src="assets/img/projects/p6.jpg" alt="Mechanical works project" loading="lazy">
                                <div class="g-cap">Mechanical Works</div>
                        </a>
                    </div>
                </div>
            </section>

            <section class="cta">
                <div class="container">
                    <div class="cta-box">
                        <div>
                            <h2>Have a Project in Mind?</h2>
                            <p>Call or WhatsApp and we’ll advise and quote based on your scope.</p>
                        </div>
                        <div class="hero-actions" style="margin:0;">
                            <a class="btn btn-primary" data-call href="tel:+26773108995">📞 Call Now</a>
                            <a class="btn btn-light" data-wa href="https://wa.me/26773108995" target="_blank" rel="noopener">💬 WhatsApp</a>
                        </div>
                    </div>
                </div>
            </section>

            <!-- Lightbox -->
            <div class="lightbox" id="lightbox" aria-hidden="true">
                <button class="lb-close" id="lbClose" aria-label="Close">✕</button>
                <img id="lbImg" alt="Project image preview">
            </div>

            <footer>
                <div class="container">
                    <div class="footer-grid">
                        <div>
                            <div style="display:flex; gap:10px; align-items:center;">
                                <div class="logo" aria-hidden="true">LE</div>
                                <div>
                                    <div style="font-weight:900;">Lush Engineering</div>
                                    <div style="font-size:13px; opacity:.9;">Electrical & Construction Engineering</div>
                                </div>
                            </div>
                            <p style="margin:12px 0 0; max-width:60ch;">
                                Professional engineering services delivered with quality workmanship, safety compliance, and reliable timelines.
                            </p>
                            <div class="small">© <span id="year"></span> Lush Engineering Proprietary Limited. All rights reserved.</div>
                        </div>

                        <div>
                            <h4 style="margin:0 0 10px;">Quick Links</h4>
                            <p style="margin:0;"><a href="index.html">Home</a></p>
                            <p style="margin:8px 0 0;"><a href="about.html">About</a></p>
                            <p style="margin:8px 0 0;"><a href="services.html">Services</a></p>
                            <p style="margin:8px 0 0;"><a href="contact.html">Contact</a></p>
                        </div>

                        <div>
                            <h4 style="margin:0 0 10px;">Contact</h4>
                            <p style="margin:0;">📍 Francistown, Botswana</p>
                            <p style="margin:8px 0 0;"><a data-call href="tel:+26773108995">📞 +267 73108995</a></p>
                            <p style="margin:8px 0 0;"><a href="mailto:lushengineering1@gmail.com">✉️ lushengineering1@gmail.com</a></p>
                            <p style="margin:8px 0 0;"><a data-wa href="https://wa.me/26773108995" target="_blank" rel="noopener">💬 WhatsApp</a></p>
                        </div>
                    </div>
                </div>
            </footer>

            <div class="float" aria-label="Quick actions">
                <a class="fab whatsapp" data-wa href="https://wa.me/26773108995" target="_blank" rel="noopener" aria-label="WhatsApp"><span>💬</span></a>
                <a class="fab call" data-call href="tel:+26773108995" aria-label="Call"><span>📞</span></a>
            </div>

            <script src="assets/js/main.js"></script>
        </body>
    </html>
