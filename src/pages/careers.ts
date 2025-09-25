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
  'Start your career with Roqore',
  'Explore exciting <strong>tech jobs</strong> and <strong>career opportunities</strong> at Roqore.<br />Join our team of developers, analysts, and engineers building innovative solutions.'
)}

  <!-- Open Positions -->
  <section class="page-block">
    <h2 class="section-heading">Open Positions</h2>
    <div class="careers-list">
      <div class="career-item">
        <h3>Software Engineer (Part-Time)</h3>
        <p>Work on scalable backend systems using NestJS and TypeScript.</p>
        <a href="#" class="careers-cta-button">Apply Now →</a>
      </div>

      <div class="career-item">
        <h3>Data Analyst</h3>
        <p>Analyze datasets, create dashboards, and deliver insights using SQL and Power BI.</p>
        <a href="#" class="careers-cta-button">Apply Now →</a>
      </div>
    </div>
  </section>

  <!-- Skill Assessments -->
  <section class="page-block">
    <h2 class="section-heading">Skill Assessments</h2>
    <p class="section-description">Showcase your skills by completing one of our assessments.</p>
    <div class="assessments-list">
      <a href="/careers/assessments/nestjs" target="_blank" rel="noopener" class="careers-cta-button">NestJS Assessment</a>
      <a href="/careers/assessments/python" target="_blank" rel="noopener" class="careers-cta-button">Python Assessment</a>
      <a href="/careers/assessments/github-actions" target="_blank" rel="noopener" class="careers-cta-button">GitHub Actions Assessment</a>
      <a href="/careers/assessments/sql" target="_blank" rel="noopener" class="careers-cta-button">SQL Assessment</a>
    </div>
  </section>

  ${Contact()}
  ${Footer()}
`;

initHeaderScroll();
initSmoothScroll();
