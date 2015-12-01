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
    var promises = [
        dataFactory.getApi('devices'),
        dataFactory.getApi('locations')
    ];
    //var promise0 = dataFactory.getApi('devices');
    //var promise1 = dataFactory.getApi('locations');
    $q.allSettled(promises).then(function(response) {
    //$q.allSettled([promise0, promise1]).then(function(data) {
       // console.log(response)
                var devices = response[0];
                var locations = response[1];
                if (devices.state === 'fulfilled') {
                    $scope.dataHolder.devices = devices.value.data.data.devices;
                    console.log(devices.value);
                }
                if (locations.state === 'rejected') {
                    console.log(locations.reason);
                }
            });
    //console.log(promise2)
//    $q.all([promise1, promise2]).then(function(response) {
//        //angular.extend($scope.dataHolder.devices,response[0].data.data.devices);
//         //angular.extend($scope.dataHolder.locations,response[1].data.data);
//        $scope.dataHolder.devices = response[0].data.data.devices;
//        $scope.dataHolder.locations = response[1].data.data;
//        //console.log(response[0], response[1]); 
//    }, function(error) {
//            console.log(error.status)
//        });
});

myAppController.controller('TestChildController', function($scope, $http, $q, cfg, dataFactory, dataService) {
    $scope.child = $scope.dataHolder;
    //console.log($scope.child);
});

