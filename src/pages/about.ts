import '../style.css';

import { Header } from '../components/header';
import { Footer } from '../components/footer';
import { Contact } from '../components/contact';
import { PageTitle } from '../components/page-title';
import { Card } from '../components/card';

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  ${Header()}

  ${PageTitle(
    'about-page-title',
    'About Roqore',
    'Turning complexity into clarity — solving technology challenges at the <strong>raw core</strong>'
  )}

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

  ${Contact()}
  ${Footer()}
`;

// <div class="about-cta">
//   <p>Ready to simplify your technology challenges? Let's build the future together.</p>
//   <a href="/contact" class="cta-button">Get in Touch</a>
// </div>