/**
 * Application skins controller
 * @author Martin Vach
 */

/**
 * Skin local controller
 */
myAppController.controller('SkinLocalController', function($scope, dataFactory,dataService) {
    $scope.input = {
        software: {
            firmwareVersion: '',
            uiVersion: $scope.cfg.app_version
        }
    };
    
   
});
/**
 * Skin online controller
 */
myAppController.controller('SkinOnlineController', function($scope, dataFactory,dataService) {
    $scope.input = {
        software: {
            firmwareVersion: '',
            uiVersion: $scope.cfg.app_version
        }
    };
    
   
});

/**
 * Skin online ID controller
 */
myAppController.controller('SkinOnlineIdController', function($scope, dataFactory,dataService) {
    $scope.input = {
        software: {
            firmwareVersion: '',
            uiVersion: $scope.cfg.app_version
        }
    };
    
   
});