import '@/style.css';

import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { Contact } from '@/components/contact';
import { PageTitle } from '@/components/page-title';
import { initHeaderScroll } from '@/scripts/header';
import { initSmoothScroll } from '@/scripts/smooth-scroll';
import { CardCompact } from '@/components/card';

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  ${Header()}

  ${PageTitle(
  'careers-page-title',
  'Start your career with Roqore',
  'Explore exciting <strong>tech jobs</strong> and <strong>career opportunities</strong> at Roqore.<br />Join our team of developers, analysts, and engineers building innovative solutions.'
)}

  <!-- Open Positions -->
  <section class="page-block">
    <h2 class="section-heading">Open Positions</h2>
    <div class="grid grid-row">
      ${CardCompact('Software Engineer (Part-Time)', 'Work on scalable backend systems using NestJS and TypeScript.', '#', 'Apply Now')}

      ${CardCompact('Data Analyst', 'Analyze datasets, create dashboards, and deliver insights using SQL and Power BI.', '#', 'Apply Now')}
  </section>

  <!-- Skill Assessments -->
  <section class="page-block">
    <h2 class="section-heading">Skill Assessments</h2>
    <p class="section-description">Showcase your skills by completing one of our assessments.</p>
    <div class="grid grid-row">
      ${CardCompact('NestJS', '', '/careers/assessments/ee05b324-ff3f-433f-8953-8631776440c3/', 'Start Now')}
    </div>
  </section>


  ${Contact()}
  ${Footer()}
`;

initHeaderScroll();
initSmoothScroll();
