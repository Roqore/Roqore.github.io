export function Header() {
  // Get current page path
  const path = window.location.pathname;

  // Decide links based on page
  const isHome = path === '/' || path.endsWith('index.html');

  const aboutHref = isHome ? '#about' : '/about.html';
  const servicesHref = isHome ? '#services' : '/services.html';
  const contactHref = isHome ? '#contact' : '/#contact';

  return `
    <header>
      <nav class="navbar">
        <a href="/"><img src="assets/logo.svg" alt="Roqore Logo" class="logo" /></a>
        <ul class="nav-links">
          <li><a href="${aboutHref}">About</a></li>
          <li><a href="${servicesHref}">Services</a></li>
          <li><a href="${contactHref}">Contact</a></li>
        </ul>
      </nav>
    </header>
  `;
}
