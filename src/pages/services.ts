import '@/style.css';

import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { Contact } from '@/components/contact';
import { initHeaderScroll } from '@/scripts/header';
import { initSmoothScroll } from '@/scripts/smooth-scroll';
import { PageTitle } from '@/components/page-title';

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  ${Header()}

  ${PageTitle(
  'services-page-title',
  'Our Services',
  'Turning complexity into clarity — solving technology challenges at the <strong>raw core</strong>'
)}

  <section id="software" class="page-block">
    <h2>Software Engineering & Architecture</h2>
    <p>We design and build robust, scalable, and maintainable software solutions. From full-stack applications to enterprise-grade systems, our engineering expertise ensures technology that grows with your business.</p>
    <ul>
      <li>Custom application development</li>
      <li>System architecture & design</li>
      <li>API integrations & microservices</li>
      <li>Performance optimization & debugging</li>
    </ul>
  </section>

  <section id="data" class="page-block">
    <h2>Data Engineering & Analysis</h2>
    <p>We transform raw data into reliable pipelines and actionable insights. Our solutions empower teams to make data-driven decisions with confidence.</p>
    <ul>
      <li>Data pipeline design & automation</li>
      <li>Data warehouse & lakehouse architecture</li>
      <li>ETL/ELT development</li>
      <li>Business intelligence dashboards</li>
    </ul>
  </section>

  <section id="ai" class="page-block">
    <h2>AI & Machine Learning</h2>
    <p>We leverage artificial intelligence to solve complex problems, automate workflows, and uncover patterns that unlock new business opportunities.</p>
    <ul>
      <li>Predictive analytics & forecasting</li>
      <li>Natural Language Processing (NLP)</li>
      <li>Recommendation systems</li>
      <li>Computer vision solutions</li>
    </ul>
  </section>

  <section id="cloud" class="page-block">
    <h2>Cloud Deployments & Automation</h2>
    <p>Our cloud-first approach ensures your systems are secure, scalable, and cost-effective. We help you migrate, optimize, and automate with confidence.</p>
    <ul>
      <li>Cloud architecture & migration</li>
      <li>Infrastructure as Code (IaC)</li>
      <li>CI/CD pipelines & automation</li>
      <li>Monitoring & scaling strategies</li>
    </ul>
  </section>

  ${Contact()}
  ${Footer()}
`;

initHeaderScroll();
initSmoothScroll();