const path = require('path');

module.exports = {
  i18n: {
    localeDetection: true,
    defaultLocale: 'vi',
    locales: ['vi', 'en'],
    localePath: path.resolve('./public/static/locales'),
    keySeparator: '.',
  },
};
