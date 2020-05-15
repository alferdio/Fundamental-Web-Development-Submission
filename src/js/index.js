import 'bootstrap';

import '../scss/index.scss';

import "regenerator-runtime";
// import "../styles/style.css";
import "../component/app-bar.js";
import main from "../view/main.js";
document.addEventListener("DOMContentLoaded", main);

$('#alert').click(() => {
  alert('Dicoding Submission!');
});

