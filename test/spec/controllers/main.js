'use strict';

describe('Controller: MainCtrl', function () {

  // load the controller's module
  beforeEach(module('carDealerApp'));

  var MainCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    MainCtrl = $controller('MainCtrl', {
      $scope: scope
    });
  }));

  it('should give an array listing 3 cars', function () {
    expect(scope.splitCars.length).toBe(2);
  });
});
