/**
 * Application test controller
 * @author Martin Vach
 */

myAppController.controller('TestController', function($scope, $http, $q, cfg, dataFactory, dataService) {
    $scope.dataHolder = {
        devices: {},
        locations: {},
        localModules: {}
    };
    $scope.input = {};


    /**
     * Load ZwaveApiData
     */
    $scope.loadData = function() {

    };

    $scope.loadData();
    //console.log($scope.dataHolder)
    var promise1 = dataFactory.getApi('devices');
    var promise2 = dataFactory.getApi('locations');
    $q.all([promise1, promise2]).then(function(response) {
        //angular.extend($scope.dataHolder.devices,response[0].data.data.devices);
         //angular.extend($scope.dataHolder.locations,response[1].data.data);
        $scope.dataHolder.devices = response[0].data.data.devices;
        $scope.dataHolder.locations = response[1].data.data;
        //console.log(response[0], response[1]);
    });
     //console.log($scope.dataHolder)
});

myAppController.controller('TestChildController', function($scope, $http, $q, cfg, dataFactory, dataService) {
    $scope.child = $scope.dataHolder;
    console.log($scope.child);
});