import '@/style.css';

import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { Contact } from '@/components/contact';
import { PageTitle } from '@/components/page-title';
import { initHeaderScroll } from '@/scripts/header';
import { initSmoothScroll } from '@/scripts/smooth-scroll';

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  ${Header()}

  ${PageTitle(
  'careers-page-title',
  'Start you career with Roqore',
  'Turning complexity into clarity — solving technology challenges at the <strong>raw core</strong>'
)}

    <a href="/careers/assessments/ee05b324-ff3f-433f-8953-8631776440c3/" target="_blank" rel="noopener" class="careers-cta-button">Assessment</a>

  ${Contact()}
  ${Footer()}
`;

// <div class="about-cta">
//   <p>Ready to simplify your technology challenges? Let's build the future together.</p>
//   <a href="/contact" class="cta-button">Get in Touch</a>
// </div>

initHeaderScroll();
initSmoothScroll();