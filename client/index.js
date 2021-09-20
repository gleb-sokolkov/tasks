import './polyfills';
import './scss/styles.scss';
import './scss/landing/styles.scss';

function importAll(r) {
  return r.keys().map(r);
}

const images = importAll(require.context('./images', false, /\.(png|jpe?g|svg|webp)$/));
