export function Header() {
  // Get current page path
  const path = window.location.pathname;

  // Decide links based on page
  const isHome = path === '/' || path.endsWith('index.html');

  const aboutHref = isHome ? '#about' : '/about/';
  const servicesHref = isHome ? '#services' : '/services/';
  const portfolioHref = isHome ? '#portfolio' : '/#portfolio';
  const contactHref = isHome ? '#contact' : '#contact';

  return `
    <header>
      <nav class="navbar">
        <ul class="nav-links nav-left">
          <li><a href="${aboutHref}">About</a></li>
          <li><a href="${servicesHref}">Services</a></li>
        </ul>

        <a href="/"><img src="/assets/logo white.svg" alt="Roqore Logo" class="logo" /></a>

        <ul class="nav-links nav-right">
          <li><a href="${portfolioHref}">Portfolio</a></li>
          <li><a href="${contactHref}">Contact</a></li>
        </ul>
      </nav>
    </header>
  `;
}
