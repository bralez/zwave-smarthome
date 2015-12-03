angular.module('app').run(['$templateCache', function($templateCache) {
  'use strict';

  $templateCache.put('index.html',
    "<!doctype html>\r" +
    "\n" +
    "<html lang=\"en\" ng-app=\"myApp\">\r" +
    "\n" +
    "    <head>\r" +
    "\n" +
    "        <meta charset=\"utf-8\">\r" +
    "\n" +
    "        <title>Z-Wave Smart Home</title>\r" +
    "\n" +
    "        <meta http-equiv=\"X-UA-Compatible\" content=\"IE=edge,chrome=1\" />\r" +
    "\n" +
    "        <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\" />\r" +
    "\n" +
    "\r" +
    "\n" +
    "        <!-- Vendor css -->\r" +
    "\n" +
    "        <link media=\"screen\" type=\"text/css\" rel=\"stylesheet\" href=\"app/css/bootstrap.css\">\r" +
    "\n" +
    "        <link media=\"screen\" type=\"text/css\" rel=\"stylesheet\" href=\"app/css/font-awesome-4.4.0/css/font-awesome.min.css\">\r" +
    "\n" +
    "        <!-- App css -->\r" +
    "\n" +
    "        <link media=\"screen\" type=\"text/css\" rel=\"stylesheet\" href=\"app/css/main.css\">\r" +
    "\n" +
    "        <!-- App config -->\r" +
    "\n" +
    "        <script src=\"app/config.js\"></script>\r" +
    "\n" +
    "        <!-- jQuery js -->\r" +
    "\n" +
    "        <script src=\"vendor/jquery/jquery-1.11.3.min.js\"></script>\r" +
    "\n" +
    "        <script src=\"vendor/jquery/jquery-ui.min.js\"></script>\r" +
    "\n" +
    "        <script src=\"vendor/jquery/plugins/jquery.ui.widget.js\"></script>\r" +
    "\n" +
    "        <script src=\"vendor/jquery/plugins/jquery.iframe-transport.js\"></script>\r" +
    "\n" +
    "        <script src=\"vendor/jquery/plugins/jquery.fileupload.js\"></script>\r" +
    "\n" +
    "        <script src=\"vendor/jquery/plugins/jquery.fileupload-process.js\"></script>\r" +
    "\n" +
    "        <script src=\"vendor/jquery/plugins/jquery.fileupload-ui.js\"></script>\r" +
    "\n" +
    "        <!-- Vendors js -->\r" +
    "\n" +
    "        <!-- <script src=\"vendor/upload/angular-file-upload-shim.js\"></script> -->\r" +
    "\n" +
    "        <!--  <script src=\"vendor/gridster/jquery.gridster.js\"></script> -->\r" +
    "\n" +
    "        <!-- <script src=\"vendor/bootstrap-switch/bootstrap-switch.js\"></script> -->\r" +
    "\n" +
    "        <!--  <script src=\"vendor/md5/md5.js\"></script> -->\r" +
    "\n" +
    "        <script src=\"vendor/handlebars/handlebars-v3.0.3.min.js\"></script>\r" +
    "\n" +
    "        <script src=\"vendor/moment/moment-with-locales.min.js\"></script>\r" +
    "\n" +
    "        <script src=\"vendor/underscore/underscore-1.8.3/underscore.js\"></script> \r" +
    "\n" +
    "        <script src=\"vendor/chartjs/Chart.js\"></script>\r" +
    "\n" +
    "        <script src=\"vendor/knob/jquery.knob.js\"></script>\r" +
    "\n" +
    "        <script src=\"vendor/alertify/alertify.min.js\"></script> \r" +
    "\n" +
    "        <!-- Angular js -->\r" +
    "\n" +
    "        <script src=\"vendor/angular/angular-1.2.28/angular.js\"></script>\r" +
    "\n" +
    "        <script src=\"vendor/upload/angular-file-upload.js\"></script>\r" +
    "\n" +
    "        <script src=\"vendor/angular/angular-1.2.28/angular-route.js\"></script>\r" +
    "\n" +
    "        <script src=\"vendor/angular/angular-1.2.28/angular-cookies.js\"></script>\r" +
    "\n" +
    "        <script src=\"vendor/dragdrop/angular-drag-and-drop-lists.js\"></script>\r" +
    "\n" +
    "        <!-- Bootstrap js -->\r" +
    "\n" +
    "        <script src=\"vendor/bootstrap/bootstrap.js\"></script>\r" +
    "\n" +
    "        <script src=\"vendor/bootstrap/plugins/bootstrap-datetimepicker.js\"></script>\r" +
    "\n" +
    "\r" +
    "\n" +
    "        <script src=\"vendor/alpaca/1.5.14/bootstrap/alpaca.min.js\"></script>\r" +
    "\n" +
    "        <!-- App js -->\r" +
    "\n" +
    "        <script src=\"app/app.js\"></script>\r" +
    "\n" +
    "        <script src=\"app/modules/qAllSettled.js\"></script>\r" +
    "\n" +
    "        <script src=\"app/services/factories.js\"></script>\r" +
    "\n" +
    "        <script src=\"app/services/services.js\"></script>\r" +
    "\n" +
    "        <script src=\"app/directives/directives.js\"></script>\r" +
    "\n" +
    "        <script src=\"app/directives/dir-pagination.js\"></script>\r" +
    "\n" +
    "        <script src=\"app/directives/tc-angular-chartjs.js\"></script>\r" +
    "\n" +
    "        <script src=\"vendor/alertify/ngAlertify.js\"></script> \r" +
    "\n" +
    "        <script src=\"app/filters/filters.js\"></script>\r" +
    "\n" +
    "        <script src=\"app/jquery/postrender.js\"></script>\r" +
    "\n" +
    "        <script src=\"app/controllers/base.js\"></script> \r" +
    "\n" +
    "        <script src=\"app/controllers/controllers.js\"></script>\r" +
    "\n" +
    "         <script src=\"app/controllers/test.js\"></script> \r" +
    "\n" +
    "        <script src=\"app/controllers/element.js\"></script> \r" +
    "\n" +
    "        <script src=\"app/controllers/event.js\"></script>\r" +
    "\n" +
    "        <script src=\"app/controllers/app.js\"></script> \r" +
    "\n" +
    "        <script src=\"app/controllers/device.js\"></script>\r" +
    "\n" +
    "        <script src=\"app/controllers/zwave.js\"></script>\r" +
    "\n" +
    "        <script src=\"app/controllers/camera.js\"></script>\r" +
    "\n" +
    "        <script src=\"app/controllers/enocean.js\"></script>\r" +
    "\n" +
    "        <script src=\"app/controllers/room.js\"></script>\r" +
    "\n" +
    "        <script src=\"app/controllers/management.js\"></script> \r" +
    "\n" +
    "        <script src=\"app/controllers/mysettings.js\"></script>\r" +
    "\n" +
    "        <script src=\"app/controllers/auth.js\"></script> \r" +
    "\n" +
    "        <!--<script src=\"app/modules/bootstrap-colorpicker-module.js\"></script>-->\r" +
    "\n" +
    "        <!-- ExpertUI configuration js -->\r" +
    "\n" +
    "        <script src=\"app/expertui/pyzw.js\"></script>\r" +
    "\n" +
    "        <script src=\"app/expertui/pyzw_zwave_ui.js\"></script>\r" +
    "\n" +
    "        <script src=\"vendor/xml/xml2json.js\"></script>\r" +
    "\n" +
    "        <script src=\"app/expertui/directives.js\"></script>\r" +
    "\n" +
    "        <script src=\"app/expertui/services.js\"></script>\r" +
    "\n" +
    "        <script src=\"app/expertui/configuration.js\"></script>\r" +
    "\n" +
    "    </head>\r" +
    "\n" +
    "    <body ng-controller=\"BaseController\" id=\"page_{{getBodyId()}}\" class=\"app-type-{{cfg.app_type}} is-mobile-{{isMobile}} profile-{{user.color.substring(1)}}\">\r" +
    "\n" +
    "        <div id=\"header\" ng-if=\"user\">\r" +
    "\n" +
    "            <div id=\"main_navigation_wrap\">\r" +
    "\n" +
    "                <div id=\"main_navigation\" class=\"container\">\r" +
    "\n" +
    "                    <div id=\"navigation_left\">\r" +
    "\n" +
    "                        <a href=\"#home\" title=\"{{_t('nav_home')}}\">\r" +
    "\n" +
    "                            <img ng-src=\"{{getAppLogo()}}\" id=\"header_logo\" alt=\"App logo\" />\r" +
    "\n" +
    "                        </a>\r" +
    "\n" +
    "                        <span class=\"divider-vertical\"></span>\r" +
    "\n" +
    "                        <a href=\"#home\" ng-class=\"isActive('dashboard')\"><i class=\"fa fa-home\"></i></a>\r" +
    "\n" +
    "                        <span class=\"divider-vertical\"></span>\r" +
    "\n" +
    "                        <a href=\"#elements\" ng-class=\"isActive('elements')\"><i class=\"fa fa-clone\"></i></a>\r" +
    "\n" +
    "                        <span class=\"divider-vertical\"></span>\r" +
    "\n" +
    "                        <a href=\"#rooms\" ng-class=\"isActive('rooms')\" ng-if=\"elementAccess(cfg.role_access.rooms)\"><i class=\"fa fa-building-o\"></i></a>\r" +
    "\n" +
    "                        <span class=\"divider-vertical\"></span>\r" +
    "\n" +
    "                        <a href=\"#events\" title=\"{{_t('nav_events')}}\" ng-class=\"isActive('events')\"><i class=\"fa fa-calendar\"></i></a>\r" +
    "\n" +
    "                        <span class=\"divider-vertical\"></span> \r" +
    "\n" +
    "                        &nbsp;<span id=\"update_time_tick\" ng-click=\"reloadData()\"></span>\r" +
    "\n" +
    "                        <span class=\"mobile-icon\" ng-if=\"isMobile\"><i class=\"fa fa-mobile\"></i></span>\r" +
    "\n" +
    "                    </div>\r" +
    "\n" +
    "                    <div id=\"navigation_right\">\r" +
    "\n" +
    "                        <span class=\"divider-vertical\"></span> \r" +
    "\n" +
    "                        <a id=\"navi_settings\" href=\"\" ng-click=\"expandNavi('mainNav',$event)\" ng-class=\"naviExpanded.mainNav ? 'active':''\"><i class=\"fa fa-cog\"></i></a>\r" +
    "\n" +
    "                    </div>\r" +
    "\n" +
    "                </div><!-- /#navigation --> \r" +
    "\n" +
    "            </div><!-- /#main_navigation_wrap --> \r" +
    "\n" +
    "            <div id=\"sub_navigation\" ng-if=\"naviExpanded.mainNav\">\r" +
    "\n" +
    "                <div id=\"sub_navigation_in\">\r" +
    "\n" +
    "                    <div class=\"container\">\r" +
    "\n" +
    "                    <ul>\r" +
    "\n" +
    "                        <!-- Apps -->\r" +
    "\n" +
    "                        <li class=\"subnavi-apps\" ng-class=\"isActive('apps')\" ng-if=\"elementAccess(cfg.role_access.apps)\">\r" +
    "\n" +
    "                            <a href=\"#apps/local\"><i class=\"fa fa-cubes\"></i> {{_t('nav_apps')}} <i class=\"fa fa-chevron-right subnavi-arrow\"></i></a>\r" +
    "\n" +
    "                        </li>\r" +
    "\n" +
    "                        <!-- Devices -->\r" +
    "\n" +
    "                        <li class=\"subnavi-devices\" ng-class=\"isActive('devices')\" ng-if=\"elementAccess(cfg.role_access.devices)\">\r" +
    "\n" +
    "                            <a href=\"#devices\"><i class=\"fa fa-cogs\"></i> {{_t('nav_devices')}} <i class=\"fa fa-chevron-right subnavi-arrow\"></i></a>\r" +
    "\n" +
    "                        </li>\r" +
    "\n" +
    "                        <!-- Config rooms -->\r" +
    "\n" +
    "                        <li class=\"subnavi-config-rooms\" ng-class=\"isActive('config-rooms')\" ng-if=\"elementAccess(cfg.role_access.config_rooms)\">\r" +
    "\n" +
    "                            <a href=\"#config-rooms\"><i class=\"fa fa-building-o\"></i> {{_t('nav_rooms')}} <i class=\"fa fa-chevron-right subnavi-arrow\"></i></a>\r" +
    "\n" +
    "                        </li>\r" +
    "\n" +
    "                        <!-- My access -->\r" +
    "\n" +
    "                        <li class=\"subnavi-myaccess\" ng-class=\"isActive('myaccess')\" ng-if=\"elementAccess(cfg.role_access.myaccess)\">\r" +
    "\n" +
    "                            <a href=\"#myaccess\"><i class=\"fa fa-user\"></i> {{_t('nav_myaccess')}} <i class=\"fa fa-chevron-right subnavi-arrow\"></i></a>\r" +
    "\n" +
    "                        </li>\r" +
    "\n" +
    "                        <!-- Management -->\r" +
    "\n" +
    "                        <li class=\"subnavi-admin\" ng-class=\"isActive('admin')\" ng-if=\"elementAccess(cfg.role_access.admin)\">\r" +
    "\n" +
    "                            <a href=\"#admin\"><i class=\"fa fa-wrench\"></i> {{_t('management')}} <i class=\"fa fa-chevron-right subnavi-arrow\"></i></a>\r" +
    "\n" +
    "                        </li>\r" +
    "\n" +
    "                        <!-- Logout -->\r" +
    "\n" +
    "                        <li class=\"subnavi-logout\" ng-if=\"elementAccess(null, isMobile)\">\r" +
    "\n" +
    "                            <a href=\"#logout\"><i class=\"fa fa-sign-out\"></i> {{_t('nav_logout')}} <i class=\"fa fa-chevron-right subnavi-arrow\"></i></a>\r" +
    "\n" +
    "                        </li>\r" +
    "\n" +
    "                    </ul>\r" +
    "\n" +
    "                    <!--<div id=\"sub_navigation_close\">\r" +
    "\n" +
    "                        <a class=\"btn btn-default\"  href=\"\" ng-click=\"expandNavi('mainNav')\"><i class=\"fa fa-chevron-up text-danger\"></i> {{_t('collapse')}}</a>\r" +
    "\n" +
    "                    </div>--> \r" +
    "\n" +
    "                 </div>\r" +
    "\n" +
    "                </div><!-- /#subnavigation_in --> \r" +
    "\n" +
    "            </div><!-- /#subnavigation --> \r" +
    "\n" +
    "        </div><!-- /#header --> \r" +
    "\n" +
    "        <!-- Ang Content Container -->\r" +
    "\n" +
    "        <div id=\"main_content\" class=\"container\" ng-view></div>\r" +
    "\n" +
    "        <div class=\"clearfix\"></div>\r" +
    "\n" +
    "\r" +
    "\n" +
    "        <div id=\"mobile_footer\" ng-if=\"isMobile\">\r" +
    "\n" +
    "            <div class=\"navbar navbar-default navbar-fixed-bottom\">\r" +
    "\n" +
    "                <div class=\"container\">\r" +
    "\n" +
    "                    &nbsp;\r" +
    "\n" +
    "                </div>\r" +
    "\n" +
    "            </div>\r" +
    "\n" +
    "        </div>\r" +
    "\n" +
    "    </body>\r" +
    "\n" +
    "</html>\r" +
    "\n"
  );


  $templateCache.put('index.tpl.html',
    "<!doctype html>\r" +
    "\n" +
    "<html lang=\"en\" ng-app=\"myApp\">\r" +
    "\n" +
    "    <head>\r" +
    "\n" +
    "        <meta charset=\"utf-8\">\r" +
    "\n" +
    "        <title>Z-Wave Smart Home</title>\r" +
    "\n" +
    "        <meta http-equiv=\"X-UA-Compatible\" content=\"IE=edge,chrome=1\" />\r" +
    "\n" +
    "        <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\" />\r" +
    "\n" +
    "        <!-- CSS -->\r" +
    "\n" +
    "        <link media=\"screen\" type=\"text/css\" rel=\"stylesheet\" href=\"app/css/build.css\">\r" +
    "\n" +
    "         <!-- App config -->\r" +
    "\n" +
    "        <script src=\"app/js/config.js\"></script>\r" +
    "\n" +
    "        <!-- JS -->\r" +
    "\n" +
    "        <script src=\"app/js/build.js\"></script>\r" +
    "\n" +
    "    </head>\r" +
    "\n" +
    "   <body ng-controller=\"BaseController\" id=\"page_{{getBodyId()}}\" class=\"app-type-{{cfg.app_type}} is-mobile-{{isMobile}} profile-{{user.color.substring(1)}}\">\r" +
    "\n" +
    "        <div id=\"header\" ng-if=\"user\">\r" +
    "\n" +
    "            <div id=\"main_navigation_wrap\">\r" +
    "\n" +
    "                <div id=\"main_navigation\" class=\"container\">\r" +
    "\n" +
    "                    <div id=\"navigation_left\">\r" +
    "\n" +
    "                        <a href=\"#home\" title=\"{{_t('nav_home')}}\">\r" +
    "\n" +
    "                            <img ng-src=\"{{getAppLogo()}}\" id=\"header_logo\" alt=\"App logo\" />\r" +
    "\n" +
    "                        </a>\r" +
    "\n" +
    "                        <span class=\"divider-vertical\"></span>\r" +
    "\n" +
    "                        <a href=\"#home\" ng-class=\"isActive('dashboard')\"><i class=\"fa fa-home\"></i></a>\r" +
    "\n" +
    "                        <span class=\"divider-vertical\"></span>\r" +
    "\n" +
    "                        <a href=\"#elements\" ng-class=\"isActive('elements')\"><i class=\"fa fa-clone\"></i></a>\r" +
    "\n" +
    "                        <span class=\"divider-vertical\"></span>\r" +
    "\n" +
    "                        <a href=\"#rooms\" ng-class=\"isActive('rooms')\" ng-if=\"elementAccess(cfg.role_access.rooms)\"><i class=\"fa fa-building-o\"></i></a>\r" +
    "\n" +
    "                        <span class=\"divider-vertical\"></span>\r" +
    "\n" +
    "                        <a href=\"#events\" title=\"{{_t('nav_events')}}\" ng-class=\"isActive('events')\"><i class=\"fa fa-calendar\"></i></a>\r" +
    "\n" +
    "                        <span class=\"divider-vertical\"></span> \r" +
    "\n" +
    "                        &nbsp;<span id=\"update_time_tick\" ng-click=\"reloadData()\"></span>\r" +
    "\n" +
    "                        <span class=\"mobile-icon\" ng-if=\"isMobile\"><i class=\"fa fa-mobile\"></i></span>\r" +
    "\n" +
    "                    </div>\r" +
    "\n" +
    "                    <div id=\"navigation_right\">\r" +
    "\n" +
    "                        <span class=\"divider-vertical\"></span> \r" +
    "\n" +
    "                        <a id=\"navi_settings\" href=\"\" ng-click=\"expandNavi('mainNav',$event)\" ng-class=\"naviExpanded.mainNav ? 'active':''\"><i class=\"fa fa-cog\"></i></a>\r" +
    "\n" +
    "                    </div>\r" +
    "\n" +
    "                </div><!-- /#navigation --> \r" +
    "\n" +
    "            </div><!-- /#main_navigation_wrap --> \r" +
    "\n" +
    "            <div id=\"sub_navigation\" ng-if=\"naviExpanded.mainNav\">\r" +
    "\n" +
    "                <div id=\"sub_navigation_in\">\r" +
    "\n" +
    "                    <div class=\"container\">\r" +
    "\n" +
    "                    <ul>\r" +
    "\n" +
    "                        <!-- Apps -->\r" +
    "\n" +
    "                        <li class=\"subnavi-apps\" ng-class=\"isActive('apps')\" ng-if=\"elementAccess(cfg.role_access.apps)\">\r" +
    "\n" +
    "                            <a href=\"#apps/local\"><i class=\"fa fa-cubes\"></i> {{_t('nav_apps')}} <i class=\"fa fa-chevron-right subnavi-arrow\"></i></a>\r" +
    "\n" +
    "                        </li>\r" +
    "\n" +
    "                        <!-- Devices -->\r" +
    "\n" +
    "                        <li class=\"subnavi-devices\" ng-class=\"isActive('devices')\" ng-if=\"elementAccess(cfg.role_access.devices)\">\r" +
    "\n" +
    "                            <a href=\"#devices\"><i class=\"fa fa-cogs\"></i> {{_t('nav_devices')}} <i class=\"fa fa-chevron-right subnavi-arrow\"></i></a>\r" +
    "\n" +
    "                        </li>\r" +
    "\n" +
    "                        <!-- Config rooms -->\r" +
    "\n" +
    "                        <li class=\"subnavi-config-rooms\" ng-class=\"isActive('config-rooms')\" ng-if=\"elementAccess(cfg.role_access.config_rooms)\">\r" +
    "\n" +
    "                            <a href=\"#config-rooms\"><i class=\"fa fa-building-o\"></i> {{_t('nav_rooms')}} <i class=\"fa fa-chevron-right subnavi-arrow\"></i></a>\r" +
    "\n" +
    "                        </li>\r" +
    "\n" +
    "                        <!-- My access -->\r" +
    "\n" +
    "                        <li class=\"subnavi-myaccess\" ng-class=\"isActive('myaccess')\" ng-if=\"elementAccess(cfg.role_access.myaccess)\">\r" +
    "\n" +
    "                            <a href=\"#myaccess\"><i class=\"fa fa-user\"></i> {{_t('nav_myaccess')}} <i class=\"fa fa-chevron-right subnavi-arrow\"></i></a>\r" +
    "\n" +
    "                        </li>\r" +
    "\n" +
    "                        <!-- Management -->\r" +
    "\n" +
    "                        <li class=\"subnavi-admin\" ng-class=\"isActive('admin')\" ng-if=\"elementAccess(cfg.role_access.admin)\">\r" +
    "\n" +
    "                            <a href=\"#admin\"><i class=\"fa fa-wrench\"></i> {{_t('management')}} <i class=\"fa fa-chevron-right subnavi-arrow\"></i></a>\r" +
    "\n" +
    "                        </li>\r" +
    "\n" +
    "                        <!-- Logout -->\r" +
    "\n" +
    "                        <li class=\"subnavi-logout\" ng-if=\"elementAccess(null, isMobile)\">\r" +
    "\n" +
    "                            <a href=\"#logout\"><i class=\"fa fa-sign-out\"></i> {{_t('nav_logout')}} <i class=\"fa fa-chevron-right subnavi-arrow\"></i></a>\r" +
    "\n" +
    "                        </li>\r" +
    "\n" +
    "                    </ul>\r" +
    "\n" +
    "                    <!--<div id=\"sub_navigation_close\">\r" +
    "\n" +
    "                        <a class=\"btn btn-default\"  href=\"\" ng-click=\"expandNavi('mainNav')\"><i class=\"fa fa-chevron-up text-danger\"></i> {{_t('collapse')}}</a>\r" +
    "\n" +
    "                    </div>--> \r" +
    "\n" +
    "                 </div>\r" +
    "\n" +
    "                </div><!-- /#subnavigation_in --> \r" +
    "\n" +
    "            </div><!-- /#subnavigation --> \r" +
    "\n" +
    "        </div><!-- /#header --> \r" +
    "\n" +
    "        <!-- Ang Content Container -->\r" +
    "\n" +
    "        <div id=\"main_content\" class=\"container\" ng-view></div>\r" +
    "\n" +
    "        <div class=\"clearfix\"></div>\r" +
    "\n" +
    "\r" +
    "\n" +
    "        <div id=\"mobile_footer\" ng-if=\"isMobile\">\r" +
    "\n" +
    "            <div class=\"navbar navbar-default navbar-fixed-bottom\">\r" +
    "\n" +
    "                <div class=\"container\">\r" +
    "\n" +
    "                    &nbsp;\r" +
    "\n" +
    "                </div>\r" +
    "\n" +
    "            </div>\r" +
    "\n" +
    "        </div>\r" +
    "\n" +
    "    </body>\r" +
    "\n" +
    "</html>"
  );

}]);
