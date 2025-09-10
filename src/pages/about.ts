import '../style.css';

import { Header } from '../components/header';
import { Footer } from '../components/footer';
import { Contact } from '../components/contact';
import { PageTitle } from '../components/page-title';
import { Card } from '../components/card';
import { initHeaderScroll } from '../scripts/header';
import { initSmoothScroll } from '../scripts/smooth-scroll';

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  ${Header()}

  ${PageTitle(
    'about-page-title',
    'About Roqore',
    'Turning complexity into clarity — solving technology challenges at the <strong>raw core</strong>'
  )}

  <section id="our-story" class="page-block our-story">
    <h2>Our Story</h2>
    <p>
      Roqore was founded with a simple belief: <em>technology should solve problems, not create them</em>. 
      Too many businesses get stuck with outdated systems, data silos, or slow digital adoption. 
      We started Roqore to change that — helping companies of all sizes embrace technology that is simple, scalable, and built for real-world impact.
    </p>
  </section>

  <section id="our-values" class="page-block our-values">
    <h2>Our Values</h2>
    <div class="grid">

      ${Card(
        'Clarity',
        'We simplify complexity so businesses can focus on growth.',
        '/assets/roqore-clarity-glowing-cube.webp',
        'Glowing salmon-orange cube representing clarity, minimal futuristic design, symbolizing focus and simplicity in technology solutions',
        'Clarity - Roqore values clear and simple tech solutions'
      )}

      ${Card(
        'Innovation',
        'We embrace new technologies to deliver forward-looking solutions.',
        '/assets/roqore-innovation-glowing-cube.webp',
        'Bright glowing salmon-orange cube transforming into smaller cubes, representing innovation and forward-looking technology solutions',
        'Innovation - Roqore embraces new tech solutions'
      )}

      ${Card(
        'Collaboration',
        'We work side by side with clients to ensure the right outcomes.',
        '/assets/roqore-collaboration-glowing-cube.webp',
        'Glowing salmon-orange cube connected to smaller cubes with luminous lines, representing teamwork and collaboration in technology projects',
        'Collaboration - Roqore values working closely with clients'
      )}

      ${Card(
        'Impact',
        'We measure success by the real-world results we deliver.',
        '/assets/roqore-impact-glowing-cube.webp',
        'Bright glowing salmon-orange cube radiating light waves on a dark futuristic background, representing measurable impact and transformative technology',
        'Impact - Roqore delivers real results with technology solutions'
      )}

    </div>
  </section>

  <section id="choose-us" class="page-block choose-us">
    <h2>Why Businesses Choose Roqore</h2>
    <p>
      Companies partner with Roqore because we combine technical expertise with a hands-on approach. 
      We don't just advise — we build, test, and implement solutions that deliver measurable impact. 
      By aligning every project with your business goals, we help you stay competitive and future-ready in a rapidly changing digital world.
    </p>
  </section>

  <section id="our-mission" class="page-block our-mission">
    <h2>Our Mission</h2>
    <p>
      To empower businesses with technology that is <em>simple, powerful, and transformative</em>. 
      At Roqore, we solve challenges at the raw core so that companies can focus on what they do best: growing and innovating.
    </p>
  </section>

  <section id="trusted-by" class="page-block trusted-by">
    <h2>Trusted By</h2>
    <p>
      From startups to established enterprises, Roqore has worked with organizations across diverse industries. 
      Our track record speaks through long-term partnerships, successful digital transformations, and measurable business outcomes.
    </p>
  </section>


  ${Contact()}
  ${Footer()}
`;

// <div class="about-cta">
//   <p>Ready to simplify your technology challenges? Let's build the future together.</p>
//   <a href="/contact" class="cta-button">Get in Touch</a>
// </div>

initHeaderScroll();
initSmoothScroll();