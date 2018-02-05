angular.module('Confess-Fact', [])
.factory('confessFact', function ($http, $window) {
  /**
   * Sends secret to the spurrs database
   * Redirects to receive view
   * @param {Object} secret
   * @returns {Secret} Promise from post request
   */
  const postSpurr = function post(secret) {
    return $http({
      method: 'POST',
      url: '/api/spurr',
      data: secret,
    }).then((res) => {
      console.log('success', res);
      $window.location.href = '#!/receive';
    });
  };

  return {
    post: postSpurr,
  };
});
