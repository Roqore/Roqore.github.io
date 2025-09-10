import '../style.css';

import { Header } from '../components/header';
import { Footer } from '../components/footer';
import { Contact } from '../components/contact';

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  ${Header()}

  <main>
    <!-- About Us page content -->
    <section class="about-page">
      <h1>About Roqore</h1>
      <p class="tagline">
        Turning complexity into clarity — solving technology challenges at the <strong>raw core</strong>.
      </p>

      <h2>Our Story</h2>
      <p>
        Roqore was founded with a simple belief: <em>technology should solve problems, not create them</em>. 
        Too many businesses get stuck with outdated systems, data silos, or slow digital adoption. 
        We started Roqore to change that — helping companies of all sizes embrace technology that is simple, scalable, and built for real-world impact.
      </p>

      <h2>What We Do</h2>
      <p>
        We deliver end-to-end technology solutions designed to help businesses grow, adapt, and thrive. 
        Our expertise includes:
      </p>
      <ul>
        <li><strong>Custom Software Development</strong> - Tailored applications that solve business-specific challenges.</li>
        <li><strong>Data Analytics & Insights</strong> - Turning raw data into clear, actionable strategies.</li>
        <li><strong>AI-driven Automation</strong> - Smarter workflows that save time and reduce errors.</li>
        <li><strong>Cloud Transformation</strong> - Modernizing operations with secure, scalable cloud solutions.</li>
      </ul>

      <h2>Our Values</h2>
      <div class="grid">
        <div class="card">
          <img 
            src="/assets/roqore-clarity-glowing-cube.webp" 
            alt="Glowing salmon-orange cube representing clarity, minimal futuristic design, symbolizing focus and simplicity in technology solutions" 
            title="Clarity - Roqore values clear and simple tech solutions"
          />
          <div class="content">
            <h3>Clarity</h3>
            <p>We simplify complexity so businesses can focus on growth.</p>
          </div>
        </div>

        <div class="card">
          <img 
            src="/assets/roqore-innovation-glowing-cube.webp" 
            alt="Bright glowing salmon-orange cube transforming into smaller cubes, representing innovation and forward-looking technology solutions" 
            title="Innovation - Roqore embraces new tech solutions"
          />
          <div class="content">
            <h3>Innovation</h3>
            <p>We embrace new technologies to deliver forward-looking solutions.</p>
          </div>
        </div>

        <div class="card">
          <img 
            src="/assets/roqore-collaboration-glowing-cube.webp" 
            alt="Glowing salmon-orange cube connected to smaller cubes with luminous lines, representing teamwork and collaboration in technology projects" 
            title="Collaboration - Roqore values working closely with clients"
          />
          <div class="content">
            <h3>Collaboration</h3>
            <p>We work side by side with clients to ensure the right outcomes.</p>
          </div>
        </div>

        <div class="card">
          <img 
            src="/assets/roqore-impact-glowing-cube.webp" 
            alt="Bright glowing salmon-orange cube radiating light waves on a dark futuristic background, representing measurable impact and transformative technology" 
            title="Impact - Roqore delivers real results with technology solutions"
          />
          <div class="content">
            <h3>Impact</h3>
            <p>We measure success by the real-world results we deliver.</p>
          </div>
        </div>
      </div>

      <h2>Why Businesses Choose Roqore</h2>
      <p>
        Companies partner with Roqore because we combine technical expertise with a hands-on approach. 
        We don't just advise — we build, test, and implement solutions that deliver measurable impact. 
        By aligning every project with your business goals, we help you stay competitive and future-ready in a rapidly changing digital world.
      </p>

      <h2>Our Mission</h2>
      <p>
        To empower businesses with technology that is <em>simple, powerful, and transformative</em>. 
        At Roqore, we solve challenges at the raw core so that companies can focus on what they do best: growing and innovating.
      </p>

      <h2>Trusted By</h2>
      <p>
        From startups to established enterprises, Roqore has worked with organizations across diverse industries. 
        Our track record speaks through long-term partnerships, successful digital transformations, and measurable business outcomes.
      </p>

    </section>
  </main>

  ${Contact()}
  ${Footer()}
`;

      // <div class="about-cta">
      //   <p>Ready to simplify your technology challenges? Let's build the future together.</p>
      //   <a href="/contact" class="cta-button">Get in Touch</a>
      // </div>