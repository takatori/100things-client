import path from 'path';

const src   = 'src/';
const dist  = 'dist/';
const build = 'build/';
const bower = './src/bower_components/';
const root  = path.join(__dirname, '../');

export default {
  'root': root,
  'isBuildFlag': false,
  'isEjsAllFlag': true,
  'src': {
    'lib': [
    ]
  },
  'dist': {
    'lib': dist + 'js/'
  },
  'build': {
    'lib': build + 'js/'
  }
};
