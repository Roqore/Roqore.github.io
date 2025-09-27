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
  'software-engineer-part-time-page-title',
  'Software Engineer (Part-time)',
  '<strong>Roqore Careers</strong>'
)}

    <section class="poster">
      <img src="/assets/careers/roqore-careers-software-engineer-part-time-hiring.webp" 
           alt="Software Engineer Part-time Vacancy at Roqore" 
           width="600" height="600" />
    </section>

    <section class="page-block">
      <h2>About the Role</h2>
      <p>At Roqore, we build core solutions to raw problems, and we want you to become a part of it.<br />We have a line of products that requires support from a developer skilled in <strong>NestJS, Python, SQL, and Docker</strong>.</p>
    </section>

    <section class="page-block">
      <h2>Contract Details</h2>
      <ul>
        <li>Monthly Salary: <strong>15,000 LKR</strong></li>
        <li>Hours per week: <strong>20 hrs</strong></li>
        <li>Contract Duration: <strong>3 months</strong></li>
        <li>Fresher's and Undergraduates are welcome</li>
      </ul>
    </section>

    <section class="page-block">
      <h2>How to Apply</h2>
      <p>If you are interested, please send your resume to <a href="mailto:connect@roqore.com" class="">connect@roqore.com</a></p>
    </section>

  ${Contact()}
  ${Footer()}
`;

initHeaderScroll();
initSmoothScroll();