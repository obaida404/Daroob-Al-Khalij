(() => {
  'use strict';

  const logo = `<img src="assets/logo.png" alt="Daroob Al-Khalij logo" class="brand-logo-img">`;
  const brand = `<a class="brand" href="index.html" aria-label="Daroob Al-Khalij home">${logo}<span class="brand-copy"><b data-en="DAROOB" data-ar="دروب الخليج">DAROOB</b><small data-en="AL-KHALIJ · SAFETY &amp; FIRE" data-ar="السلامة والحريق">AL-KHALIJ · SAFETY &amp; FIRE</small></span></a>`;

  document.body.insertAdjacentHTML('afterbegin', `
    <div class="announcement"><span data-en="Safety built around your operations." data-ar="السلامة المصممة لتلائم أعمالكم.">Safety built around your operations.</span><a href="contact.html" data-en="Talk to our team ↗" data-ar="تواصل مع فريقنا ↗">Talk to our team ↗</a></div>
    <header class="site-header">
      ${brand}
      <button class="menu-toggle" aria-label="Open navigation" aria-expanded="false" aria-controls="main-nav"><span></span><span></span></button>
      <nav class="main-nav" id="main-nav" aria-label="Main navigation">
        <a class="nav-link" href="index.html" data-page-link="home" data-en="Home" data-ar="الرئيسية">Home</a>
        <a class="nav-link" href="about.html" data-page-link="about" data-en="About" data-ar="من نحن">About</a>
        <div class="nav-dropdown"><div class="nav-menu-wrap"><a class="nav-link" href="solutions.html" data-page-link="solutions" data-en="Solutions" data-ar="حلولنا">Solutions</a><button class="submenu-toggle" aria-label="Show solution pages" aria-expanded="false">⌄</button></div><div class="dropdown-panel"><a href="solutions.html#fire" data-en="Fire alarm & suppression" data-ar="إنذار الحريق ومكافحته">Fire alarm &amp; suppression</a><a href="solutions.html#maintenance" data-en="Installation & maintenance" data-ar="التركيب والصيانة">Installation &amp; maintenance</a><a href="solutions.html#security" data-en="Security systems" data-ar="أنظمة الأمن">Security systems</a><a href="solutions.html#ppe" data-en="Workplace safety" data-ar="سلامة مكان العمل">Workplace safety</a></div></div>
        <div class="nav-dropdown"><div class="nav-menu-wrap"><a class="nav-link" href="products.html" data-page-link="products" data-en="Products" data-ar="منتجاتنا">Products</a><button class="submenu-toggle" aria-label="Show product pages" aria-expanded="false">⌄</button></div><div class="dropdown-panel"><a href="products.html#fire-products" data-en="Fire protection" data-ar="الحماية من الحريق">Fire protection</a><a href="products.html#screening" data-en="Security & screening" data-ar="الأمن والتفتيش">Security &amp; screening</a><a href="products.html#ppe" data-en="PPE & industrial safety" data-ar="معدات الوقاية والسلامة الصناعية">PPE &amp; industrial safety</a></div></div>
        <a class="nav-link" href="sectors.html" data-page-link="sectors" data-en="Sectors" data-ar="القطاعات">Sectors</a>
        <a class="nav-link" href="contact.html" data-page-link="contact" data-en="Contact" data-ar="تواصل معنا">Contact</a>
      </nav>
      <div class="header-actions"><button class="language-toggle" type="button" aria-label="Switch to Arabic"><span class="lang-label">العربية</span><span class="lang-globe" aria-hidden="true">◎</span></button><a class="button button-dark header-cta" href="contact.html"><span data-en="Discuss a project" data-ar="ناقش مشروعك">Discuss a project</span><span aria-hidden="true">↗</span></a></div>
    </header>`);

  const footerEl = document.querySelector('#site-footer');
  if (footerEl) {
    footerEl.insertAdjacentHTML('beforebegin', `
    <footer class="site-footer">
      <div class="footer-main">
        <div class="footer-about">${brand}<p data-en="A Riyadh-based Saudi company delivering fire protection, security systems and workplace safety equipment for organizations across sectors." data-ar="شركة سعودية مقرها الرياض، تقدم حلول الحماية من الحريق وأنظمة الأمن ومعدات سلامة بيئة العمل للمنشآت في مختلف القطاعات.">A Riyadh-based Saudi company delivering fire protection, security systems and workplace safety equipment for organizations across sectors.</p><span class="footer-location"><i></i><span data-en="RIYADH, SAUDI ARABIA" data-ar="الرياض، المملكة العربية السعودية">RIYADH, SAUDI ARABIA</span></span></div>
        <div class="footer-column"><span class="footer-heading" data-en="EXPLORE" data-ar="استكشف">EXPLORE</span><a href="about.html" data-en="About Daroob" data-ar="عن دروب الخليج">About Daroob</a><a href="solutions.html" data-en="Solutions &amp; services" data-ar="الحلول والخدمات">Solutions &amp; services</a><a href="products.html" data-en="Products" data-ar="المنتجات">Products</a><a href="sectors.html" data-en="Sectors" data-ar="القطاعات">Sectors</a></div>
        <div class="footer-column"><span class="footer-heading" data-en="CAPABILITIES" data-ar="مجالاتنا">CAPABILITIES</span><a href="solutions.html#fire" data-en="Fire alarm &amp; suppression" data-ar="إنذار الحريق وإخماده">Fire alarm &amp; suppression</a><a href="solutions.html#maintenance" data-en="Installation &amp; maintenance" data-ar="التركيب والصيانة">Installation &amp; maintenance</a><a href="solutions.html#security" data-en="Security &amp; access control" data-ar="الأمن والتحكم بالدخول">Security &amp; access control</a><a href="products.html#screening" data-en="X-ray &amp; metal detection" data-ar="أجهزة الأشعة وكشف المعادن">X-ray &amp; metal detection</a><a href="products.html#ppe" data-en="PPE &amp; site safety" data-ar="معدات الوقاية وسلامة المواقع">PPE &amp; site safety</a></div>
        <div class="footer-column footer-contact"><span class="footer-heading" data-en="TALK TO OUR TEAM" data-ar="تواصل مع فريقنا">TALK TO OUR TEAM</span><a class="footer-primary-phone" href="tel:+966567817446" dir="ltr">+966 56 781 7446</a><span data-en="Fire &amp; safety systems" data-ar="أنظمة الحريق والسلامة">Fire &amp; safety systems</span><a href="tel:+966549544286" dir="ltr">+966 54 954 4286</a><span data-en="Security systems" data-ar="أنظمة الأمن">Security systems</span><a href="https://wa.me/966567817446" target="_blank" rel="noopener" class="footer-whatsapp"><span data-en="WhatsApp our team" data-ar="راسلنا عبر واتساب">WhatsApp our team</span><b>↗</b></a></div>
      </div>
      <div class="footer-bottom"><span>© <span id="year"></span> DAROOB AL-KHALIJ · <span data-en="ALL RIGHTS RESERVED" data-ar="جميع الحقوق محفوظة">ALL RIGHTS RESERVED</span></span><span data-en="PREPAREDNESS, BUILT TOGETHER." data-ar="الاستعداد نبنيه معًا.">PREPAREDNESS, BUILT TOGETHER.</span></div>
    </footer>`);
  }
  document.getElementById('year').textContent = new Date().getFullYear();

  const html = document.documentElement;
  const langButton = document.querySelector('.language-toggle');
  const langLabel = document.querySelector('.lang-label');
  const page = document.body.dataset.page || 'home';
  const titles = {
    home: ['Daroob Al-Khalij | Fire & Safety Solutions', 'دروب الخليج | حلول الحريق والسلامة'],
    about: ['About Daroob Al-Khalij | A Saudi Safety Partner', 'من نحن | دروب الخليج للسلامة'],
    solutions: ['Fire Protection & Safety Solutions | Daroob Al-Khalij', 'حلول الحريق والسلامة | دروب الخليج'],
    products: ['Safety Products & Equipment | Daroob Al-Khalij', 'منتجات ومعدات السلامة | دروب الخليج'],
    sectors: ['Sectors & Project Experience | Daroob Al-Khalij', 'القطاعات وخبرات المشاريع | دروب الخليج'],
    contact: ['Contact Daroob Al-Khalij | Fire & Safety', 'تواصل مع دروب الخليج | الحريق والسلامة']
  };

  function setLanguage(language, updateUrl = true) {
    const arabic = language === 'ar';
    html.lang = arabic ? 'ar' : 'en';
    html.dir = arabic ? 'rtl' : 'ltr';
    const pageTitle = titles[page] || titles.home;
    document.title = pageTitle[arabic ? 1 : 0];
    document.querySelector('meta[name="description"]')?.setAttribute('content', arabic
      ? 'دروب الخليج توفر أنظمة الحماية من الحريق وحلول السلامة ومعدات السلامة الصناعية للمنشآت في المملكة العربية السعودية.'
      : 'Daroob Al-Khalij provides fire protection, safety systems, and industrial safety products for businesses across Saudi Arabia.');
    document.querySelectorAll('[data-en][data-ar]').forEach((element) => {
      element.innerHTML = element.dataset[language];
    });
    document.querySelectorAll('[data-label-en][data-label-ar]').forEach((element) => {
      element.setAttribute('aria-label', element.dataset[arabic ? 'labelAr' : 'labelEn']);
    });
    document.querySelectorAll('[data-alt-en][data-alt-ar]').forEach((element) => {
      element.setAttribute('alt', element.dataset[arabic ? 'altAr' : 'altEn']);
    });
    document.querySelectorAll('[data-placeholder-en][data-placeholder-ar]').forEach((element) => {
      element.setAttribute('placeholder', element.dataset[arabic ? 'placeholderAr' : 'placeholderEn']);
    });
    document.querySelectorAll('[data-href-en][data-href-ar]').forEach((element) => {
      element.setAttribute('href', element.dataset[arabic ? 'hrefAr' : 'hrefEn']);
    });
    document.querySelectorAll('.brand').forEach((element) => {
      element.setAttribute('aria-label', arabic ? 'دروب الخليج، الصفحة الرئيسية' : 'Daroob Al-Khalij home');
    });
    langLabel.textContent = arabic ? 'English' : 'العربية';
    langButton.setAttribute('aria-label', arabic ? 'Switch to English' : 'Switch to Arabic');
    document.querySelectorAll('.submenu-toggle').forEach((button) => {
      button.setAttribute('aria-label', arabic ? 'عرض الصفحات' : 'Show pages');
    });
    try {
      localStorage.setItem('daroob-language', language);
    } catch (e) {
      // localStorage unavailable (private browsing, quota exceeded)
    }
    if (updateUrl) {
      const url = new URL(location.href);
      url.searchParams.set('lang', language);
      history.replaceState({}, '', url);
    }
    window.dispatchEvent(new CustomEvent('daroob-language-change', { detail: { language } }));
  }
  langButton.addEventListener('click', () => setLanguage(html.lang === 'en' ? 'ar' : 'en'));

  // Restore the user's language across all pages while allowing direct language links.
  const queryLanguage = new URLSearchParams(location.search).get('lang');
  const storedLanguage = localStorage.getItem('daroob-language');
  const initialLanguage = queryLanguage || (storedLanguage === 'ar' || storedLanguage === 'en' ? storedLanguage : null) || 'en';
  setLanguage(initialLanguage, Boolean(queryLanguage));
  document.querySelectorAll('.main-nav a,.brand,.header-cta').forEach((link) => {
    link.addEventListener('click', (event) => {
      if (event.metaKey || event.ctrlKey || event.shiftKey || event.altKey || link.target === '_blank') return;
      const target = new URL(link.href, location.href);
      if (target.origin !== location.origin || !target.pathname.endsWith('.html')) return;
      target.searchParams.set('lang', html.lang);
      event.preventDefault();
      location.href = target.href;
    });
  });

  const menu = document.querySelector('.main-nav');
  const menuToggle = document.querySelector('.menu-toggle');
  menuToggle.addEventListener('click', () => {
    const open = menuToggle.getAttribute('aria-expanded') !== 'true';
    menuToggle.setAttribute('aria-expanded', String(open));
    menuToggle.setAttribute('aria-label', open ? (html.lang === 'ar' ? 'إغلاق القائمة' : 'Close navigation') : (html.lang === 'ar' ? 'فتح القائمة' : 'Open navigation'));
    menu.classList.toggle('open', open);
  });
  document.querySelectorAll('.submenu-toggle').forEach((button) => button.addEventListener('click', () => {
    const open = button.getAttribute('aria-expanded') !== 'true';
    button.setAttribute('aria-expanded', String(open));
    button.closest('.nav-dropdown').classList.toggle('submenu-open', open);
  }));
  menu.querySelectorAll('a').forEach((link) => link.addEventListener('click', () => {
    menu.classList.remove('open');
    menuToggle.setAttribute('aria-expanded', 'false');
  }));
  document.querySelector(`[data-page-link="${page}"]`)?.classList.add('active');

  const header = document.querySelector('.site-header');
  let lastScroll = 0;
  window.addEventListener('scroll', () => {
    const y = window.scrollY;
    header.classList.toggle('is-scrolled', y > 32);
    if (y > 220 && y > lastScroll + 5) header.classList.add('scrolling-down');
    if (y < 150 || y < lastScroll - 5) header.classList.remove('scrolling-down');
    lastScroll = y;
  }, { passive: true });

  // Subtle reveal motion. The hidden state is opt-in (JS adds .reveal-pending),
  // so if this block never runs the content simply stays visible.
  const revealItems = document.querySelectorAll('.home-intro,.solutions,.home-products,.vision-band,.brand-rail,.about-story,.principles,.vision-feature,.docs-note,.service-detail,.service-extras,.catalogue-grid,.sourcing,.sector-intro,.project-note,.contact-layout,.contact-close,.page-end,.solution-card,.product-row,.process-steps article,.about-feature,.sector-card,.catalogue-card,.supplier-logos figure');
  const animate = !window.matchMedia('(prefers-reduced-motion: reduce)').matches && 'IntersectionObserver' in window;
  if (animate) {
    const show = (item) => item.classList.add('revealed');
    revealItems.forEach((item) => {
      const r = item.getBoundingClientRect();
      const onScreen = r.top < window.innerHeight && r.bottom > 0;
      if (!onScreen) item.classList.add('reveal-pending');
    });
    const observer = new IntersectionObserver((entries) => entries.forEach((entry) => {
      if (entry.isIntersecting) { show(entry.target); observer.unobserve(entry.target); }
    }), { threshold: 0.05, rootMargin: '0px 0px -8% 0px' });
    revealItems.forEach((item) => observer.observe(item));
    // Fail-safe: if the observer never fires, un-hide everything.
    setTimeout(() => revealItems.forEach((item) => { show(item); item.classList.remove('reveal-pending'); }), 2500);
    window.addEventListener('load', () => setTimeout(() => revealItems.forEach((item) => { show(item); item.classList.remove('reveal-pending'); }), 1200), { once: true });
  }

  // A manually controllable, slowly rotating home hero keeps the landing page alive.
  const hero = document.querySelector('.hero');
  if (hero) {
    const slides = [
      { image: 'assets/hero-firefighter.jpg', alt: ['Firefighter in full gear with hose', 'رجل إطفاء بمعدات كاملة مع خرطوم'], tag: ['FIRE PROTECTION · INDUSTRIAL SAFETY · SUPPLY', 'الحماية من الحريق · السلامة الصناعية · التوريد'], heading: ['Safety that stands<br>ready for <em>what’s next.</em>', 'سلامةٌ مستعدة<br>لـ <em>كل ما هو قادم</em>'], text: ['Fire protection systems, safety equipment and dependable service for the places where business happens.', 'أنظمة الحماية من الحريق ومعدات السلامة والخدمات الموثوقة للمنشآت التي تحتضن أعمالكم.'], caption: ['PROTECTION THAT WORKS IN THE REAL WORLD', 'حماية تلبي متطلبات الواقع'] },
      { image: 'assets/hero-firefighter2.jpg', alt: ['Firefighter battling flames', 'رجل إطفاء يواجه اللهب'], tag: ['FIRE ALARM · DETECTION · SUPPRESSION', 'إنذار الحريق · الكشف · الإخماد'], heading: ['Detect early.<br>Respond with <em>confidence.</em>', 'اكتشف مبكرًا<br>واستجب <em>بثقة</em>'], text: ['Fire alarm and suppression systems selected for the needs of commercial and industrial spaces.', 'أنظمة إنذار وإخماد مختارة لتناسب احتياجات المنشآت التجارية والصناعية.'], caption: ['SYSTEMS FOR A SAFER RESPONSE', 'أنظمة لاستجابة أكثر أمانًا'] },
      { image: 'assets/cctv-control-room.jpg', alt: ['Security control room with monitors', 'غرفة تحكم أمنية مع شاشات مراقبة'], tag: ['SECURITY · ACCESS · SAFETY', 'الأمن · التحكم بالدخول · السلامة'], heading: ['The right systems<br>make safer work <em>possible.</em>', 'الأنظمة المناسبة<br>تمكّن عملًا <em>أكثر أمانًا</em>'], text: ['From CCTV and access control to PPE and site supplies, Daroob brings essential safety needs together.', 'من كاميرات المراقبة والتحكم بالدخول إلى معدات الوقاية ومستلزمات المواقع، تجمع دروب الخليج احتياجات السلامة الأساسية.'], caption: ['PRACTICAL SOLUTIONS FOR EVERY SITE', 'حلول عملية لكل منشأة'] }
    ];
    const copy = hero.querySelector('.hero-copy');
    const image = hero.querySelector('.hero-photo img');
    const counter = hero.querySelector('.caption-index');
    const caption = hero.querySelector('.hero-image-caption > span:last-child');
    const tag = hero.querySelector('.eyebrow > span:last-child');
    const heading = hero.querySelector('h1');
    const text = hero.querySelector('.hero-lede');
    const visual = hero.querySelector('.hero-visual');
    if (!copy || !image || !counter || !caption || !tag || !heading || !text || !visual) return;
    let active = 0;
    let slideTimeout = null;
    visual.insertAdjacentHTML('beforeend', '<div class="hero-controls"><button class="hero-prev" aria-label="Previous slide">←</button><span class="hero-dots"></span><button class="hero-next" aria-label="Next slide">→</button></div>');
    const dots = visual.querySelector('.hero-dots');
    slides.forEach((_, i) => dots.insertAdjacentHTML('beforeend', `<button aria-label="Slide ${i + 1}" aria-current="${i === 0 ? 'true' : 'false'}"></button>`));
    function showSlide(i) {
      if (slideTimeout) clearTimeout(slideTimeout);
      active = (i + slides.length) % slides.length;
      const slide = slides[active];
      const langIndex = html.lang === 'ar' ? 1 : 0;
      image.classList.add('image-changing');
      slideTimeout = setTimeout(() => {
        image.src = slide.image;
        image.alt = slide.alt[langIndex];
        tag.textContent = slide.tag[langIndex];
        heading.innerHTML = slide.heading[langIndex];
        text.textContent = slide.text[langIndex];
        caption.textContent = slide.caption[langIndex];
        counter.textContent = `0${active + 1} / 0${slides.length}`;
        image.classList.remove('image-changing');
      }, 170);
      [...dots.children].forEach((dot, idx) => dot.setAttribute('aria-current', String(idx === active)));
    }
    const prevBtn = visual.querySelector('.hero-prev');
    const nextBtn = visual.querySelector('.hero-next');
    if (prevBtn) prevBtn.addEventListener('click', () => showSlide(active - 1));
    if (nextBtn) nextBtn.addEventListener('click', () => showSlide(active + 1));
    [...dots.children].forEach((dot, i) => dot.addEventListener('click', () => showSlide(i)));
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    let timer = reducedMotion ? null : window.setInterval(() => showSlide(active + 1), 6500);
    const pauseSlides = () => { if (timer) { clearInterval(timer); timer = null; } };
    const resumeSlides = () => {
      if (reducedMotion) return;
      pauseSlides();
      timer = window.setInterval(() => showSlide(active + 1), 6500);
    };
    hero.addEventListener('mouseenter', pauseSlides);
    hero.addEventListener('mouseleave', resumeSlides);
    hero.addEventListener('focusin', pauseSlides);
    hero.addEventListener('focusout', resumeSlides);
    window.addEventListener('daroob-language-change', () => showSlide(active));
  }

  const enquiryForm = document.getElementById('enquiry-form');
  enquiryForm?.addEventListener('submit', (event) => {
    event.preventDefault();
    if (!enquiryForm.reportValidity()) return;
    const values = new FormData(enquiryForm);
    const arabic = html.lang === 'ar';
    const labels = arabic
      ? { name: 'الاسم', company: 'الشركة', type: 'نوع الطلب', message: 'التفاصيل' }
      : { name: 'Name', company: 'Company', type: 'Enquiry', message: 'Details' };
    const lines = [
      arabic ? 'السلام عليكم، أرغب في الاستفسار عن خدمات دروب الخليج.' : 'Hello, I would like to enquire about Daroob Al-Khalij services.',
      `${labels.name}: ${values.get('name')}`,
      values.get('company') ? `${labels.company}: ${values.get('company')}` : '',
      `${labels.type}: ${values.get('type')}`,
      values.get('message') ? `${labels.message}: ${values.get('message')}` : ''
    ].filter(Boolean);
    window.open(`https://wa.me/966567817446?text=${encodeURIComponent(lines.join('\n'))}`, '_blank', 'noopener');
  });
})();
