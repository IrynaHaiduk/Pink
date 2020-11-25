import './sass/style.scss';
import $ from 'jquery';

function importAll(r) {
  r.keys().forEach(r);
}

importAll(require.context('./js', true, /\.js$/));
importAll(require.context('./html', true, /\.html$/));
importAll(require.context('./img', true, /\.(jpe?g|png|gif|svg|webp|webmanifest|ico|xml)$/));


require('webpack-jquery-ui');
require('webpack-jquery-ui/css');
