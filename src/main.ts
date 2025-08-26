import './style.css'

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <header>
    <nav class="navbar">
      <img src="assets/logo.svg" alt="Roqore Logo" class="logo" />
      <ul class="nav-links">
        <li><a href="#about">About</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
    </nav>
  </header>

  <section id="hero" class="hero">
    <h1>Welcome to Roqore</h1>
    <p>Solving tech problems at their <strong>raw core</strong> — from software to data, AI & cloud.</p>
    <a href="#contact" class="cta-button">Get in Touch</a>
  </section>

  <section id="about" class="about">
    <h2>About Us</h2>
    <p>At Roqore, we go beyond surface fixes. We solve problems at their raw core — designing, debugging, and optimizing systems that last.</p>
  </section>

  <section id="services" class="services">
    <h2>Our Expertise</h2>
    <div class="service-grid">
      <div class="service-card">Software Engineering & Architecture</div>
      <div class="service-card">Data Engineering & Analysis</div>
      <div class="service-card">AI & Machine Learning</div>
      <div class="service-card">Cloud Deployments & Automation</div>
    </div>
  </section>

  <section id="contact" class="contact">
    <h2>Contact Us</h2>
    <p>Email us at <a href="mailto:contact@roqore.com">contact@roqore.com</a></p>
  </section>

  <footer class="footer">
    <p>© 2025 Roqore | Solving Problems at the Raw Core</p>
  </footer>
`

// Smooth scrolling for nav links
const links = document.querySelectorAll('.nav-links a');
links.forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    const href = link.getAttribute('href');
    if (!href) return;
    const section = document.querySelector(href);
    section?.scrollIntoView({ behavior: 'smooth' });
  });
});