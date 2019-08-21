/* eslint-disable no-unused-vars */
import Typed from 'typed.js';

import Navbar from './components/Navbar';

import W3css from './styles/w3.css';
import Style from './styles/index.scss';

// var Counters = require('./js/counters')

// typed effect on spanner 1
const typed = new Typed('#typed', {
  stringsElement: '#typed-strings',
  // NOTE: lower is higher
  typeSpeed: 60,
  backSpeed: 10,
  // startDelay: 1000,
  loop: true,
});
