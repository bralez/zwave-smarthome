/**
 * Application Management controller
 * @author Martin Vach
 */

/**
 * Management controller
 */
myAppController.controller('ManagementController', function ($scope, $interval, dataFactory, dataService, myCache) {
    //Set elements to expand/collapse
    angular.copy({
        user: false,
        remote: false,
        licence: false,
        firmware: false,
        backup: false,
        restore: false,
        info: false,
        report: false,
        appstore: false
    }, $scope.expand);

    $scope.controllerInfo = {
        uuid: null,
        isZeroUuid: false,
        softwareRevisionVersion: null,
        softwareLatestVersion: null,
        capabillities: null,
        scratchId: null
    };

    $scope.zwaveDataInterval = null;
    // Cancel interval on page destroy
    $scope.$on('$destroy', function () {
        $interval.cancel($scope.zwaveDataInterval);
        angular.copy({}, $scope.expand);
    });

    /**
     * Load ZwaveApiData
     */
    $scope.loadZwaveApiData = function () {
        dataService.showConnectionSpinner();
        dataFactory.loadZwaveApiData().then(function (ZWaveAPIData) {
            var caps = function (arr) {
                var cap = '';
                if (angular.isArray(arr)) {
                    cap += (arr[3] & 0x01 ? 'S' : 's');
                    cap += (arr[3] & 0x02 ? 'L' : 'l');
                    cap += (arr[3] & 0x04 ? 'M' : 'm');
                }
                return cap;

            };
            $scope.controllerInfo.uuid = ZWaveAPIData.controller.data.uuid.value;
            $scope.controllerInfo.isZeroUuid = parseInt(ZWaveAPIData.controller.data.uuid.value, 16) === 0;
            $scope.controllerInfo.softwareRevisionVersion = ZWaveAPIData.controller.data.softwareRevisionVersion.value;
            $scope.controllerInfo.capabillities = caps(ZWaveAPIData.controller.data.caps.value);
            $scope.loadLicenceScratchId($scope.controllerInfo.uuid);
            dataService.updateTimeTick();
        }, function (error) {
            dataService.showConnectionError(error);
        });
    };

    $scope.loadZwaveApiData();

    /**
     * Load ZwaveApiData
     */
    $scope.loadLicenceScratchId = function (uuid) {
        dataService.showConnectionSpinner();
        dataFactory.getRemoteData($scope.cfg.get_licence_scratchid + '?uuid=' + uuid).then(function (response) {
            $scope.controllerInfo.scratchId = response.data.scratch_id;
            dataService.updateTimeTick();
        }, function (error) {});
    };


});
/**
 * List of users
 */
myAppController.controller('ManagementUserController', function ($scope, dataFactory, dataService, myCache) {
    $scope.userProfiles = {
        all: false
    };
    /**
     * Load profiles
     */
    $scope.loadProfiles = function () {
        $scope.loading = {status: 'loading-spin', icon: 'fa-spinner fa-spin', message: $scope._t('loading')};
        dataFactory.getApi('profiles', null, true).then(function (response) {
            $scope.userProfiles.all = response.data.data;
            dataService.updateTimeTick();
            $scope.loading = false;
        }, function (error) {
            $scope.loading = false;
            alertify.alertError($scope._t('error_load_data'));
        });
    };
    $scope.loadProfiles();

    /**
     * Delete an user
     */
    $scope.deleteProfile = function (input, message, except) {
        if (input.id == except) {
            return;
        }
        alertify.confirm(message, function () {
            $scope.loading = {status: 'loading-spin', icon: 'fa-spinner fa-spin', message: $scope._t('deleting')};
            dataFactory.deleteApi('profiles', input.id).then(function (response) {
                myCache.remove('profiles');
                dataService.showNotifier({message: $scope._t('delete_successful')});
                $scope.loading = false;
                $scope.loadProfiles();
            }, function (error) {
                $scope.loading = false;
                alertify.alertError($scope._t('error_delete_data'));
            });
        });
    };


});
/**
 * User detail
 */
myAppController.controller('ManagementUserIdController', function ($scope, $routeParams, $filter, $window, dataFactory, dataService, myCache) {
    $scope.id = $filter('toInt')($routeParams.id);
    $scope.rooms = {};
    $scope.input = {
        id: 0,
        name: '',
        active: true,
        role: 2,
        password: '',
        login: '',
        lang: 'en',
        color: '#dddddd',
        hide_all_device_events: false,
        hide_system_events: false,
        hide_single_device_events: [],
        rooms: [0],
        default_ui: 1,
        expert_view: false

    };
    $scope.auth = {
        id: $routeParams.id,
        login: null,
        password: null

    };

    /**
     * Load data
     */
    $scope.loadData = function (id) {
        $scope.loading = {status: 'loading-spin', icon: 'fa-spinner fa-spin', message: $scope._t('loading')};
        dataFactory.getApi('profiles', '/' + id, true).then(function (response) {
             $scope.loading = false;
            $scope.input = response.data.data;
            $scope.auth.login = response.data.data.login;
        }, function (error) {
            $scope.input = false;
            $scope.loading = false;
            alertify.alertError($scope._t('error_load_data'));
        });
    };
    if ($scope.id > 0) {
        $scope.loadData($scope.id);
    }

    /**
     * Load Rooms
     */
    $scope.loadRooms = function () {
        dataFactory.getApi('locations').then(function (response) {
            $scope.rooms = _.filter(response.data.data, function (v) {
                if (v.id !== 0) {
                    return v;
                }
            });
        }, function (error) {});
    }
    ;
    $scope.loadRooms();
    /**
     * Assign room to list
     */
    $scope.assignRoom = function (assign) {
        $scope.input.rooms.push(assign);
        return;

    };

    /**
     * Remove room from the list
     */
    $scope.removeRoom = function (roomId) {
        var oldList = $scope.input.rooms;
        $scope.input.rooms = [];
        angular.forEach(oldList, function (v, k) {
            if (v != roomId) {
                $scope.input.rooms.push(v);
            }
        });
        return;
    };

    /**
     * Create/Update an item
     */
    $scope.store = function (form, input) {
        if (form.$invalid) {
            return;
        }
        $scope.loading = {status: 'loading-spin', icon: 'fa-spinner fa-spin', message: $scope._t('updating')};
        if ($scope.id == 0) {
            input.password = input.password;
        }
        input.role = parseInt(input.role, 10);
        dataFactory.storeApi('profiles', input.id, input).then(function (response) {
            var id = $filter('hasNode')(response, 'data.data.id');
            if (id) {
                myCache.remove('profiles');
                $scope.loadData(id);
            }
            $scope.loading = false;
            dataService.showNotifier({message: $scope._t('success_updated')});
            window.location = '#/admin';

            //$window.location.reload();

        }, function (error) {
            var message = $scope._t('error_update_data');
            if (error.status == 409) {
                message = ($filter('hasNode')(error, 'data.error') ? $scope._t(error.data.error) : message);
            }
            alertify.alertError(message);
            $scope.loading = false;
        });

    };

    /**
     * Change auth data
     */
    $scope.changeAuth = function (form, auth) {
        if (form.$invalid) {
            return;
        }
        $scope.loading = {status: 'loading-spin', icon: 'fa-spinner fa-spin', message: $scope._t('updating')};
//        var input = {
//            id: $scope.id,
//            login: auth.login,
//            password: auth.password
//
//        };
        dataFactory.putApi('profiles_auth_update', $scope.id,  $scope.auth).then(function (response) {
            $scope.loading = false;
            var data = response.data.data;
            if (!data) {
                alertify.alertError($scope._t('error_update_data'));
                return;
            }
            dataService.showNotifier({message: $scope._t('success_updated')});
            //$window.history.back();


        }, function (error) {
            var message = $scope._t('error_update_data');
            if (error.status == 409) {
                message = ($filter('hasNode')(error, 'data.error') ? $scope._t(error.data.error) : message);
            }
            alertify.alertError(message);
            $scope.loading = false;
        });

    };

    /// --- Private functions --- ///


});
/**
 * Remote access controller
 */
myAppController.controller('ManagementRemoteController', function ($scope, dataFactory, dataService) {
    $scope.remoteAccess = false;
    /**
     * Load Remote access data
     */
    $scope.loadRemoteAccess = function () {
        if (!$scope.elementAccess($scope.cfg.role_access.remote_access)) {
            return;
        }
        $scope.loading = {status: 'loading-spin', icon: 'fa-spinner fa-spin', message: $scope._t('loading')};
        dataFactory.getApi('instances', '/RemoteAccess').then(function (response) {
            $scope.loading = false;
            var remoteAccess = response.data.data[0];
            if (Object.keys(remoteAccess).length < 1) {
                alertify.alertError($scope._t('error_load_data'));
            }
            if (!remoteAccess.active) {
                alertify.alertWarning($scope._t('remote_access_not_active'));
                return;
            }
            if (!remoteAccess.params.userId) {
                alertify.alertError($scope._t('error_load_data'));
                return;
            }
            remoteAccess.params.pass = null;
            $scope.remoteAccess = remoteAccess;
        }, function (error) {
            $scope.loading = false;
            alertify.alertError($scope._t('remote_access_not_installed'));
        });
    };

    $scope.loadRemoteAccess();

    /**
     * PUT Remote access
     */
    $scope.putRemoteAccess = function (input) {
        $scope.loading = {status: 'loading-spin', icon: 'fa-spinner fa-spin', message: $scope._t('updating')};
        dataFactory.putApi('instances', input.id, input).then(function (response) {
            $scope.loading = false;
            dataService.showNotifier({message: $scope._t('success_updated')});
        }, function (error) {
            alertify.alertError($scope._t('error_update_data'));
            $scope.loading = false;
        });

    };
});
/**
 * Licence controller
 */
myAppController.controller('ManagementLicenceController', function ($scope, dataFactory) {
    $scope.proccessLicence = false;
    $scope.proccessVerify = {
        'message': false,
        'status': 'is-hidden'
    };
    $scope.proccessUpdate = {
        'message': false,
        'status': 'is-hidden'
    };
    $scope.inputLicence = {
        "scratch_id": $scope.controllerInfo.scratchId
    };
    /**
     * Get license key
     */
    $scope.getLicense = function (inputLicence) {
        // Clear messages
        $scope.proccessVerify.message = false;
        $scope.proccessUpdate.message = false;
        if (!inputLicence.scratch_id) {
            return;
        }
        $scope.loading = {status: 'loading-spin', icon: 'fa-spinner fa-spin', message: $scope._t('verifying_licence_key')};
        $scope.proccessVerify = {'message': $scope._t('verifying_licence_key'), 'status': 'fa fa-spinner fa-spin'};
        $scope.proccessLicence = true;
        var input = {
            'uuid': $scope.controllerInfo.uuid,
            'scratch': inputLicence.scratch_id
        };
        dataFactory.getLicense(input).then(function (response) {
            $scope.proccessVerify = {'message': $scope._t('success_licence_key'), 'status': 'fa fa-check text-success'};
            $scope.loading = false;
            // Update capabilities
            updateCapabilities(response);
        }, function (error) {
            var message = $scope._t('error_no_licence_key');
            if (error.status == 404) {
                var message = $scope._t('error_404_licence_key');
            }
            $scope.loading = false;
            alertify.alertError(message);
            $scope.proccessVerify = {'message': message, 'status': 'fa fa-exclamation-triangle text-danger'};
            $scope.proccessLicence = false;

        });
    };

    /**
     * Update capabilities
     */
    function updateCapabilities(data) {
        $scope.loading = {status: 'loading-spin', icon: 'fa-spinner fa-spin', message: $scope._t('upgrading_capabilities')};
        $scope.proccessUpdate = {'message': $scope._t('upgrading_capabilities'), 'status': 'fa fa-spinner fa-spin'};
        dataFactory.zmeCapabilities(data).then(function (response) {
            $scope.loading = false;
            $scope.proccessUpdate = {'message': $scope._t('success_capabilities'), 'status': 'fa fa-check text-success'};
            $scope.proccessLicence = false;
        }, function (error) {
            $scope.loading = false;
            alertify.alertError($scope._t('error_no_capabilities'));
            $scope.proccessUpdate = {'message': $scope._t('error_no_capabilities'), 'status': 'fa fa-exclamation-triangle text-danger'};
            $scope.proccessLicence = false;
        });
    }
    ;
});
/**
 * Firmware update controller
 */
myAppController.controller('ManagementFirmwareController', function ($scope, $sce, $timeout, dataFactory) {
    $scope.firmwareUpdateUrl = $sce.trustAsResourceUrl('http://' + $scope.hostName + ':8084/cgi-bin/main.cgi');
    $scope.firmwareUpdate = {
        show: false,
        loaded: false,
        url: $sce.trustAsResourceUrl('http://' + $scope.hostName + ':8084/cgi-bin/main.cgi')
    };
    /**
     * Load razberry latest version
     */
    $scope.setAccess = function (param, loader) {
        if (loader) {
            $scope.loading = {status: 'loading-spin', icon: 'fa-spinner fa-spin', message: $scope._t('loading')};
        }
        dataFactory.getApi('firmwareupdate', param, true).then(function (response) {
            if (loader) {
                $scope.firmwareUpdate.show = true;
                $timeout(function () {
                    $scope.loading = false;
                    $scope.firmwareUpdate.loaded = true;
                }, 5000);
            }

        }, function (error) {
            $scope.loading = false;
            alertify.alertError($scope._t('error_load_data'));

        });
    };
    /**
     * Load razberry latest version
     */
    $scope.loadRazLatest = function () {
        dataFactory.getRemoteData($scope.cfg.raz_latest_version_url).then(function (response) {
            $scope.controllerInfo.softwareLatestVersion = response;
        }, function (error) {
        });
    };
    //$scope.loadRazLatest();
});
/**
 * Restor controller
 */
myAppController.controller('ManagementRestoreController', function ($scope, dataFactory, dataService) {
    $scope.myFile = null;
    $scope.managementRestore = {
        confirm: false,
        alert: {message: false, status: 'is-hidden', icon: false},
        process: false
    };

    /**
     * Upload image
     */
    $scope.uploadFile = function () {
        $scope.loading = {status: 'loading-spin', icon: 'fa-spinner fa-spin', message: $scope._t('restore_wait')};
        $scope.managementRestore.alert = {message: $scope._t('restore_wait'), status: 'alert-warning', icon: 'fa-spinner fa-spin'};
        var cmd = $scope.cfg.api['restore'];
        var fd = new FormData();

        fd.append('backupFile', $scope.myFile);
        //fd.append('backupFile', files[0]); 
        dataFactory.uploadApiFile(cmd, fd).then(function (response) {
            $scope.loading = false;
            dataService.showNotifier({message: $scope._t('restore_done_reload_ui')});
            $scope.managementRestore.alert = {message: $scope._t('restore_done_reload_ui'), status: 'alert-success', icon: 'fa-check'};
        }, function (error) {
            $scope.loading = false;
            alertify.alertError($scope._t('restore_backup_failed'));
            $scope.managementRestore.alert = false;
        });

    };
});
/**
 * App Store controller
 */
myAppController.controller('ManagementAppStoreController', function ($scope, dataFactory, dataService) {
    $scope.appStore = {
        input: {
            token: ''
        },
        tokens: {}

    };

    /**
     * Load tokens
     */
    $scope.appStoreLoadTokens = function () {
        dataService.showConnectionSpinner();
        dataFactory.getApi('tokens', null, true).then(function (response) {
            angular.extend($scope.appStore.tokens, response.data.data.tokens);
        }, function (error) {
        });
    };
    $scope.appStoreLoadTokens();

    /**
     * Create/Update an item
     */
    $scope.appStoreAddToken = function () {
        if ($scope.appStore.input.token === '') {
            return;
        }
        dataFactory.putApiFormdata('tokens', $scope.appStore.input).then(function (response) {
            $scope.appStore.input.token = '';
            $scope.appStoreLoadTokens();
        }, function (error) {
            var message = $scope._t('error_update_data');
            if (error.status === 409) {
                message = $scope._t('notunique_token') + ' - ' + $scope.appStore.input.token;
            }
            alertify.alertError(message);
        });

    };

    /**
     * Remove a token from the list
     */
    $scope.appStoreRemoveToken = function (token, message) {
        alertify.confirm(message, function () {
            dataFactory.deleteApiFormdata('tokens', {token: token}).then(function (response) {
                angular.extend($scope.appStore, response.data.data);
                ;
            }, function (error) {
                alertify.alertError($scope._t('error_delete_data'));
            });
        });
        return;
    };

    /// --- Private functions --- ///


});
/**
 * Management report controller
 */
myAppController.controller('ManagementReportController', function ($scope, $window, $route, dataFactory, dataService) {
    $scope.ZwaveApiData = false;
    $scope.remoteAccess = false;
    $scope.input = {
        browser_agent: '',
        browser_version: '',
        browser_info: '',
        shui_version: '',
        zwave_vesion: '',
        controller_info: '',
        remote_id: '',
        remote_activated: 0,
        remote_support_activated: 0,
        zwave_binding: 0,
        email: null,
        content: null
    };

    /**
     * Load ZwaveApiData
     */
    $scope.loadZwaveApiData = function () {
        dataService.showConnectionSpinner();
        dataFactory.loadZwaveApiData().then(function (ZWaveAPIData) {
            $scope.ZwaveApiData = ZWaveAPIData;
            dataService.updateTimeTick();
        }, function (error) {});
    };

    $scope.loadZwaveApiData();
    /**
     * Load Remote access data
     */
    $scope.loadRemoteAccess = function () {
        if (!$scope.elementAccess($scope.cfg.role_access.remote_access)) {
            return;
        }
        dataFactory.getApi('instances', '/RemoteAccess').then(function (response) {
            $scope.remoteAccess = response.data.data[0];
        }, function (error) {});
    };

    $scope.loadRemoteAccess();

    /**
     * Send and save report
     */
    $scope.sendReport = function (form, input) {
        if (form.$invalid) {
            return;
        }
        $scope.loading = {status: 'loading-spin', icon: 'fa-spinner fa-spin', message: $scope._t('sending')};
        if ($scope.ZwaveApiData) {
            input.zwave_binding = 1;
            input.zwave_vesion = $scope.ZwaveApiData.controller.data.softwareRevisionVersion.value;
            input.controller_info = JSON.stringify($scope.ZwaveApiData.controller.data);
        }
        if (Object.keys($scope.remoteAccess).length > 0) {
            input.remote_activated = $scope.remoteAccess.params.actStatus ? 1 : 0;
            input.remote_support_activated = $scope.remoteAccess.params.sshStatus ? 1 : 0;
            input.remote_id = $scope.remoteAccess.params.userId;

        }
        input.browser_agent = $window.navigator.appCodeName;
        input.browser_version = $window.navigator.appVersion;
        input.browser_info = 'PLATFORM: ' + $window.navigator.platform + '\nUSER-AGENT: ' + $window.navigator.userAgent;
        input.shui_version = $scope.cfg.app_version;
        //$scope.loading = {status: 'loading-spin', icon: 'fa-spinner fa-spin', message: $scope._t('updating')};
        dataFactory.postReport(input).then(function (response) {
             $scope.loading =false;
             dataService.showNotifier({message: $scope._t('success_send_report') + ' ' + input.email});
             $route.reload();
        }, function (error) {
            alertify.alertError($scope._t('error_send_report'));
            $scope.loading = false;
        });

    };

});
/**
 * Management info controller
 */
myAppController.controller('ManagementInfoController', function ($scope, dataFactory, dataService) {

});