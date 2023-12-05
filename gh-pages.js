const ghpages = require('gh-pages');

ghpages.publish('dist/angular16', {
  repo: 'https://' + process.env.GH_TOKEN + '@github.com/' + process.env.TRAVIS_REPO_SLUG + '.git'
}, function (err) {
  if (err) {
    console.log(err);
  } else {
    console.log('published gh-pages');
  }
});
