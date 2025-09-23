import '../style.css';
import { Header } from '../components/header';
import { Hero } from '../components/hero';
import { Contact } from '../components/contact';
import { Footer } from '../components/footer';
import { LightRays } from '../components/light-rays';
import { initHeaderScroll } from "../scripts/header";
import { initSmoothScroll } from '../scripts/smooth-scroll';
import { CardLink } from '../components/card';

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  ${Header()}
  ${LightRays()}
  ${Hero()}

  <section id="about" class="page-block about">
    <h2>About Us</h2>
    <p>At Roqore, we solve technology problems at their <strong>raw core</strong> — from software to data, AI, and cloud. <br> Our mission is simple: build practical, scalable, and future-ready solutions <br>that help businesses move faster and smarter. <a href="/about/">Learn more →</a></p>
  </section>

  <section id="services" class="page-block services">
    <h2>Our Expertise</h2>
    <div class="grid">

      ${CardLink(
        'Software Engineering & Architecture',
        'Custom applications & scalable systems.',
        '/services/#software',
        'Read More →',
        '/assets/roqore-software-engineering-architecture.webp',
        'Abstract salmon-orange cube symbolizing custom software engineering and scalable system architecture by Roqore'
      )}

      ${CardLink(
        'Data Engineering & Analysis',
        'Transform data into actionable insights.',
        '/services/#data',
        'Read More →',
        '/assets/roqore-data-engineering-analysis.webp',
        'Glowing salmon-orange cube transforming into data streams and charts, representing Roqore data engineering and actionable insights'
      )}

      ${CardLink(
        'Artificial Intelligence  & Machine Learning',
        'Intelligent automation and predictive models.',
        '/services/#ai',
        'Read More →',
        '/assets/roqore-ai-machine-learning.webp',
        'Futuristic salmon-orange cube with neural network patterns, symbolizing AI and machine learning automation by Roqore'
      )}

      ${CardLink(
        'Cloud Deployments & Automation',
        'Secure, scalable cloud solutions and automation.',
        '/services/#cloud',
        'Read More →',
        '/assets/roqore-cloud-deployments-automation.webp',
        'Salmon-orange cube floating within light whitish-blue cloud, representing Roqore cloud deployments and automation solutions'
      )}

    </div>
  </section>

  ${Contact()}
  ${Footer()}
`;

initHeaderScroll();
initSmoothScroll();