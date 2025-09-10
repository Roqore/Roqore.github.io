import '../style.css';
import { Header } from '../components/header';
import { Hero } from '../components/hero';
import { About } from '../components/about';
import { Services } from '../components/services';
import { Contact } from '../components/contact';
import { Footer } from '../components/footer';
import { LightRays } from '../components/light-rays';
import { initHeaderScroll } from "../scripts/header";
import { initSmoothScroll } from '../scripts/smooth-scroll';

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  ${Header()}
  ${LightRays()}
  ${Hero()}
  ${About()}
  ${Services()}
  ${Contact()}
  ${Footer()}
`;

initHeaderScroll();
initSmoothScroll();