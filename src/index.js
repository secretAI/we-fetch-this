import './styles/style.css';
import { start } from './app';
import { renderEach } from './components/render';
import './components/setrg';

console.log("* App has started *");

start();
renderEach(mainLogo, "https://c.tenor.com/oXar269453AAAAAC/black-cloud-clouds.gif");
renderEach(setRegion, "https://cdn-icons-png.flaticon.com/32/546/546310.png");
