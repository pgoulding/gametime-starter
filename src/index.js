// This is the JavaScript entry file - your code begins here
// Do not delete or rename this file ********

// An example of how you import jQuery into a JS file if you use jQuery in that file
import $ from 'jquery';

// An example of how you tell webpack to use a CSS (SCSS) file
import './css/base.scss';

// An example of how you tell webpack to use an image (also need to link to it in the index.html)
import './images/turing-logo.png'
import Game from './Game';
import Round from './Round';
import Turn from './Turn';
import Player from './Player';
import Survey from './Survey';
import domUpdates from './domUpdates';


//new instantiation of player to pass into the parameter
// of update score and check guess
domUpdates.updateScore()
domUpdates.checkGuess()

