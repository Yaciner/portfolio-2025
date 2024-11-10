import { render } from 'preact'
import './styles.scss'
import { App } from './app.jsx'

// console.log('test');
// render(<App />, document.getElementById('app'))

console.log('Hello, world!');
const loader = document.querySelector('.loader');
setTimeout(() => {
  if (loader) {
    loader.classList.add('loaded');
  }
}, 2000);
