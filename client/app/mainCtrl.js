angular.module('Spurr-Ctrl', [])
.controller('SpurrCtrl', function ($scope, SpurrFact, $window, $location) {
  $scope.default = '';

  /**
   * Checks the length of $window.localStorage,
   * which determines whether or not a user is logged in.
   * Used to alternate visible nav bar links and about page paragraphs
   * @return {Number} 0 or 1
   */
  $scope.user = () => $window.localStorage.length;

  /**
   * Runs a function to console log input
   * Works on any view to ensure angular is working
   * @param {Any} input
   */
  $scope.test = function (input) {
    SpurrFact.test(input);
  };

  /**
   * Clears localstorage, effectively logging out user
   * Redirects user to root
   */
  $scope.signout = function () {
    $window.localStorage.clear;
    $location.path('/');
  };
});
