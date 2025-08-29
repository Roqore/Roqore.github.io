import '../style.css';
import { Header } from '../components/header';
import { Hero } from '../components/hero';
import { About } from '../components/about';
import { Services } from '../components/services';
import { Contact } from '../components/contact';
import { Footer } from '../components/footer';
import { LightRays } from '../components/light-rays';

// document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
//   ${Header()}
//   ${Hero()}
//   ${About()}
//   ${Services()}
//   ${Contact()}
//   ${Footer()}
// `;

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  ${Header()}
  ${Hero()}
  ${LightRays()}
  ${Footer()}
`;


// Smooth scrolling for nav links
const links = document.querySelectorAll('.nav-links a');
links.forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    const href = link.getAttribute('href');
    if (!href) return;
    const section = document.querySelector(href);
    section?.scrollIntoView({ behavior: 'smooth' });
  });
});
