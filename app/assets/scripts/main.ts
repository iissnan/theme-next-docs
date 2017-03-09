/// <reference path="./main.d.ts" />

import * as $ from 'jquery';
import 'bootstrap-sass';
import 'slick-carousel';
import '../stylesheets/main.scss';
import highlightSlider from './highlight-slider';
import activateMenuItem from './activate-menu-item';
import registerBackToTop from './register-back-to-top';
import homeNav from './home-nav';
import toc from './toc';

$(document).ready(function () {
  homeNav();
  toc();
  highlightSlider();
  activateMenuItem();
  registerBackToTop();
});
