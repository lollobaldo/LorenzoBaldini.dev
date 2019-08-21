import Gumshoe from 'gumshoejs';
import SmoothScroll from 'smooth-scroll';

import { domReady } from 'src/js/utils';

import './Navbar.scss';

export const scrollSpy = new Gumshoe('nav a', {
  offset: () => document.querySelector('nav').getBoundingClientRect().height,
});

export const smoothScroll = new SmoothScroll('a[href*="#"]', {
  speed: 500,
  speedAsDuration: true,
});

window.onscroll = () => {
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    document.querySelector('nav').classList.add('nav-scroll');
  } else {
    document.querySelector('nav').classList.remove('nav-scroll');
  }
};

// Remove background added for non-js compatibility
domReady(() => document.querySelector('nav').classList.remove('nav-scroll'));

export default { scrollSpy, smoothScroll };
