import '../style.css';

import { Header } from '../components/header';

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  ${Header()}

  <main>
    <!-- About Us page content -->
    <section class="about-page">
      <h1>About Roqore</h1>
      <p>
        Welcome to Roqore — where we tackle technology problems at their <strong>raw core</strong>. 
        We're a modern tech solutions company focused on helping businesses of all sizes 
        simplify operations, harness data, and unlock growth with the power of software, 
        artificial intelligence, and cloud technologies.
      </p>

      <h2>Who We Are</h2>
      <p>
        Roqore was founded with a simple belief: technology should solve problems, not create them. 
        Too many businesses struggle with complicated systems, data silos, or slow digital adoption. 
        Our team bridges that gap by delivering solutions that are not only innovative, but also practical, scalable, and built for the real world.
      </p>

      <h2>What We Do</h2>
      <p>
        We specialize in end-to-end technology services including 
        <strong>software development</strong>, <strong>data analytics</strong>, 
        <strong>AI-driven automation</strong>, and <strong>cloud transformation</strong>. 
        Whether you need a custom dashboard, smarter workflows, or a strategy for scaling in the cloud, 
        we design and build solutions tailored to your business goals.
      </p>

      <h2>Why Roqore</h2>
      <p>
        Businesses choose Roqore because we focus on clarity, collaboration, and results. 
        Our approach is hands-on — we don't just provide recommendations, we roll up our sleeves and build. 
        By working closely with you, we ensure that every solution is aligned with your needs, 
        drives measurable impact, and keeps you future-ready in a fast-changing digital landscape.
      </p>

      <h2>Our Mission</h2>
      <p>
        To empower businesses with technology that is <em>simple, powerful, and transformative</em>. 
        At Roqore, we believe in solving challenges at the raw core so that companies can focus on what they do best: growing and innovating.
      </p>
    </section>

  </main>

  <footer class="footer">
    <p>© 2025 Roqore | Solving Problems at the Raw Core</p>
  </footer>
`;
