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
            //console.log(devices.value);
        }
        if (locations.state === 'rejected') {
            //console.log(locations.reason);
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

myAppController.controller('ElementRgbModalController', function($scope, $http, $q, cfg, dataFactory, dataService) {
    /**
     * Show climate modal window
     */
    $scope.loadRgbWheel = function(target, id, input) {
        $(target).modal();
        $scope.input = input;
        $(target).modal();
        var bCanPreview = true; // can preview

        // create canvas and context objects
        var canvas = document.getElementById('wheel_picker');

        var ctx = canvas.getContext('2d');
        // drawing active image
        var image = new Image();
        image.onload = function() {
            ctx.drawImage(image, 0, 0, image.width, image.height); // draw the image on the canvas
        };
        image.src = 'app/img/colorwheel.png';
        $('#wheel_picker_preview').css('backgroundColor', '#fff');

        $('#wheel_picker').mousemove(function(e) { // mouse move handler
            if (bCanPreview) {
                // get coordinates of current position
                var canvasOffset = $(canvas).offset();
                var canvasX = Math.floor(e.pageX - canvasOffset.left);
                var canvasY = Math.floor(e.pageY - canvasOffset.top);

                // get current pixel
                var imageData = ctx.getImageData(canvasX, canvasY, 1, 1);
                var pixel = imageData.data;

                // update preview color
                var pixelColor = "rgb(" + pixel[0] + ", " + pixel[1] + ", " + pixel[2] + ")";
               
                if(pixelColor == 'rgb(0, 0, 0)'){
                     $('#wheel_picker_preview').css('backgroundColor','#fff');
                     
                }else{
                     $('#wheel_picker_preview').css('backgroundColor', pixelColor);
                }
               

                // update controls

                $('#rVal').val('R: ' + pixel[0]);
                $('#gVal').val('G: ' + pixel[1]);
                $('#bVal').val('B: ' + pixel[2]);
                $('#rgbVal').val(pixel[0] + ',' + pixel[1] + ',' + pixel[2]);
            }
        });

        $('#wheel_picker').click(function(e) { // click event handler
            bCanPreview = !bCanPreview;
            if (!bCanPreview) {
                var cmdColor = $('#rgbVal').val().split(',');
                var cmd = id +
                        '/command/exact?red=' + cmdColor[0] + '&green=' + cmdColor[1] + '&blue=' + cmdColor[2] + '';
                dataFactory.runApiCmd(cmd).then(function(response) {
                }, function(error) {
                });
            }
        });


    };

});

