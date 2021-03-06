'use strict';

require('./_login.scss');

module.exports = {
  template: require('./login.html'),
  controller: [
    '$log',
    '$location',
    '$window',
    'authService',
    LoginController,
  ],
  controllerAs: 'loginCtrl',
};

function LoginController($log, $location, $window, authService) {
  $log.debug('LoginController');

  this.title = 'Enter your information';

  if($window.localStorage.token) {
    authService.getToken()
    .then(() => $location.url('/home'));
  }

  this.login = function() {
    $log.log('loginCtrl.login()');

    authService.login(this.user).then(() => $location.url('/home'));
  };
}
