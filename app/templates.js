angular.module('app').run(['$templateCache', function($templateCache) {
  'use strict';

  $templateCache.put('app/views/_test/test.html',
    "<!-- Login view -->\r" +
    "\n" +
    "<div ng-controller=\"TestController\" class=\"mobile-padding\">\r" +
    "\n" +
    "    <bb-loader></bb-loader>\r" +
    "\n" +
    "    <div ng-controller=\"TestChildController\"></div>\r" +
    "\n" +
    "    <!-- RGB selector -->\r" +
    "\n" +
    "    <h1>RGB test</h1>\r" +
    "\n" +
    "\r" +
    "\n" +
    "    <div ng-controller=\"ElementRgbModalController\">\r" +
    "\n" +
    "        <strong ng-click=\"loadRgbWheel('#modal_rgb_wheel', 'RGB_47')\">{{_t('lb_settings')}}</strong>\r" +
    "\n" +
    "\r" +
    "\n" +
    "    </div>\r" +
    "\n" +
    "\r" +
    "\n" +
    "    <!-- Modal door lock -->\r" +
    "\n" +
    "    <div class=\"modal modal-vertical-centered fade\" id=\"modal_rgb_wheel\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myModalLabel\" aria-hidden=\"true\">\r" +
    "\n" +
    "        <div class=\"modal-dialog modal-dialog-center\">\r" +
    "\n" +
    "            <div class=\"modal-content\">\r" +
    "\n" +
    "                <div class=\"modal-header\">\r" +
    "\n" +
    "                    <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-hidden=\"true\">&times;</button>\r" +
    "\n" +
    "                    <h4 class=\"modal-title\" ng-bind=\"input.title\"></h4>\r" +
    "\n" +
    "                </div>\r" +
    "\n" +
    "                <div class=\"modal-body \">\r" +
    "\n" +
    "\r" +
    "\n" +
    "                    <div class=\"row wheel-colorpicker\">\r" +
    "\n" +
    "                        <div class=\"col-rgb col-sm-6\">\r" +
    "\n" +
    "                            <canvas id=\"wheel_picker\" var=\"4\" width=\"300\" height=\"300\" ng-mousemove=\"setColor($element)\"></canvas>\r" +
    "\n" +
    "                            <input type=\"hidden\" id=\"rgbVal\" />\r" +
    "\n" +
    "                        </div>\r" +
    "\n" +
    "                        <div class=\"col-rgb col-sm-6\">\r" +
    "\n" +
    "                            <div id=\"wheel_picker_preview\">&nbsp;</div>\r" +
    "\n" +
    "                            <p><input class=\"form-control\" type=\"text\" id=\"rVal\" disabled /></p>\r" +
    "\n" +
    "                            <p><input class=\"form-control\" type=\"text\" id=\"gVal\" disabled /></p>\r" +
    "\n" +
    "                            <p><input class=\"form-control\" type=\"text\" id=\"bVal\" disabled /></p>\r" +
    "\n" +
    "                        </div>\r" +
    "\n" +
    "                        <!-- preview element -->\r" +
    "\n" +
    "\r" +
    "\n" +
    "\r" +
    "\n" +
    "                    </div>\r" +
    "\n" +
    "                </div>\r" +
    "\n" +
    "            </div>\r" +
    "\n" +
    "        </div>\r" +
    "\n" +
    "    </div><!-- /.Modal multiline -->\r" +
    "\n" +
    "\r" +
    "\n" +
    "</div>"
  );


  $templateCache.put('app/views/apps/app_instance.html',
    "<!-- Online app view -->\r" +
    "\n" +
    "<div class=\"table-responsive_\">\r" +
    "\n" +
    "    <table id=\"table_apps_instance\" class=\"table table-condensed table-report\">\r" +
    "\n" +
    "        <tbody>\r" +
    "\n" +
    "            <tr class=\"bcg-active\"\r" +
    "\n" +
    "                id=\"instance_{{$index}}\" \r" +
    "\n" +
    "                ng-repeat=\"v in instances|orderBy:'-creationTime' track by v.id\" \r" +
    "\n" +
    "                ng-class=\"v.active ? 'true': 'false'\"\r" +
    "\n" +
    "                ng-if=\"cameraIds.indexOf(v.moduleId) === -1\">\r" +
    "\n" +
    "                <td class=\"td-img\">\r" +
    "\n" +
    "                    <img class=\"report-img\" ng-src=\"{{moduleMediaUrl + v.moduleId + '/' + moduleImgs[v.moduleId]}}\" ng-if=\"moduleImgs[v.moduleId]\" alt=\"img\" />\r" +
    "\n" +
    "                    <img class=\"report-img\" ng-src=\"storage/img/placeholder-img.png\" ng-if=\"!moduleImgs[v.moduleId]\" alt=\"img\" />\r" +
    "\n" +
    "                    <!-- <img class=\"report-img\" ng-src=\"storage/img/apps/app.png\" alt=\"icon\" />-->\r" +
    "\n" +
    "                </td>\r" +
    "\n" +
    "                <td>\r" +
    "\n" +
    "                   <a href=\"#module/put/{{v.id}}\"><span ng-bind=\"v.title\"></span> <span ng-bind=\"_t('lb_use')\"></span> <strong ng-bind=\"v.module\"></strong></a>\r" +
    "\n" +
    "                </td>\r" +
    "\n" +
    "                <td class=\"td-action\">\r" +
    "\n" +
    "                    <a href=\"#module/put/{{v.id}}\" class=\"btn btn-default btn-sm\">\r" +
    "\n" +
    "                        <i class=\"fa fa-cog fa-lg\"></i>\r" +
    "\n" +
    "                    </a>\r" +
    "\n" +
    "                    <button title=\"{{_t('lb_deactivate')}}\" \r" +
    "\n" +
    "                            class=\"btn btn-default btn-sm\" href=\"\" \r" +
    "\n" +
    "                            ng-show=\"v.active\"\r" +
    "\n" +
    "                            ng-click=\"activateInstance(v, false)\"\r" +
    "\n" +
    "                            >\r" +
    "\n" +
    "                        <i class=\"fa fa-power-off fa-lg text-primary\"></i> <span class=\"btn-name\" ng-bind=\"_t('lb_deactivate')\"></span>\r" +
    "\n" +
    "                    </button>\r" +
    "\n" +
    "                    <button title=\"{{_t('lb_activate')}}\" \r" +
    "\n" +
    "                            class=\"btn btn-default btn-sm\" \r" +
    "\n" +
    "                            ng-show=\"!v.active\" \r" +
    "\n" +
    "                            ng-click=\"activateInstance(v, true)\r" +
    "\n" +
    "                            \">\r" +
    "\n" +
    "                        <i class=\"fa fa-refresh fa-lg text-success\"></i> <span class=\"btn-name\" ng-bind=\"_t('lb_activate')\"></span>\r" +
    "\n" +
    "                    </button>\r" +
    "\n" +
    "                    <button title=\"{{_t('lb_remove')}}\" \r" +
    "\n" +
    "                            class=\"btn btn-default btn-sm\"\r" +
    "\n" +
    "                            ng-click=\"deleteInstance('#instance_' + $index, {'id': v.id}, _t('lb_delete_confirm'))\"\r" +
    "\n" +
    "                            >\r" +
    "\n" +
    "                        <i class=\"fa fa-remove fa-lg text-danger\"></i> <span class=\"btn-name\" ng-bind=\"_t('lb_remove')\"></span>\r" +
    "\n" +
    "                    </button>\r" +
    "\n" +
    "                </td>\r" +
    "\n" +
    "            </tr>\r" +
    "\n" +
    "        </tbody>\r" +
    "\n" +
    "    </table>\r" +
    "\n" +
    "</div>"
  );


  $templateCache.put('app/views/apps/app_local.html',
    "<!-- Online app view -->\r" +
    "\n" +
    "<div class=\"pp-border app-gradient app-shadow app-featured show-all-{{localModules.showAll}}\" ng-click=\"showAll()\" ng-if=\"localModules.showAll === true\">\r" +
    "\n" +
    "    <h3>Featured Apps</h3>\r" +
    "\n" +
    "   <div class=\"app-featured-entry\" ng-repeat=\"v in localModules.featured|orderBy:'defaults.title' track by v.id\" ng-if=\"v.icon\">\r" +
    "\n" +
    "       <img ng-src=\"{{moduleMediaUrl + v.moduleName + '/' + v.icon}}\" ng-if=\"v.icon\" alt=\"{{v.defaults.title}}\" />\r" +
    "\n" +
    "   </div> \r" +
    "\n" +
    "</div>\r" +
    "\n" +
    "<div class=\"page-control form-inline\" ng-if=\"localModules.showAll\">\r" +
    "\n" +
    "     <a class=\"btn btn-default\" href=\"\" ng-click=\"resetFilter('/apps')\" ng-if=\"currentCategory.id\"><i class=\"fa fa-refresh text-danger\"></i> <span class=\"btn-name\">{{_t('clear_all_filters')}}</span></a>\r" +
    "\n" +
    "    <a class=\"btn btn-default\" href=\"\" ng-click=\"expandNavi('appsCategories',$event)\"><i class=\"fa fa-chevron-down text-success\" ng-class=\"naviExpanded.appsCategories ? 'fa-chevron-up': 'fa-chevron-down'\"></i> <span ng-bind=\"currentCategory.name || _t('select_category')\"></span></a>\r" +
    "\n" +
    "    <div class=\"input-group search-form hide-on-mobile_\">\r" +
    "\n" +
    "        <input type=\"text\" ng-model=\"q\" class=\"form-control\" value=\"{{q}}\">\r" +
    "\n" +
    "        <span class=\"input-group-addon\"><i class=\"fa fa-search\"></i></span> \r" +
    "\n" +
    "    </div>\r" +
    "\n" +
    "    \r" +
    "\n" +
    "</div>\r" +
    "\n" +
    "<div class=\"page-control form-inline\"  ng-if=\"!localModules.showAll\">\r" +
    "\n" +
    "    <button class=\"btn btn-default\" ng-click=\"showAll(true)\"><i class=\"fa fa-chevron-down text-success\"></i> <span class=\"btn-name\">{{_t('Show all apps')}}</span></button>\r" +
    "\n" +
    "</div>\r" +
    "\n" +
    "<div class=\"page-navi\" ng-if=\"naviExpanded.appsCategories\">\r" +
    "\n" +
    "    <div class=\"page-navi-in\">\r" +
    "\n" +
    "        <ul>\r" +
    "\n" +
    "            <li class=\"page-cat-{{v.id}}\" ng-repeat=\"v in categories\" ng-if=\"modulesCats.indexOf(v.id) > -1\" ng-class=\"currentCategory.id == v.id ? 'active': ''\">\r" +
    "\n" +
    "                <a href=\"#apps/category/{{v.id}}\" ng-switch=\"v.id\">\r" +
    "\n" +
    "                    <i class=\"fa fa-cube\" ng-switch-when=\"basic_gateway_modules\"></i>\r" +
    "\n" +
    "                <i class=\"fa fa-wrench\" ng-switch-when=\"legacy_products_workaround\"></i>\r" +
    "\n" +
    "                 <i class=\"fa fa-object-group\" ng-switch-when=\"support_external_ui\"></i>\r" +
    "\n" +
    "                 <i class=\"fa fa-cubes\" ng-switch-when=\"support_external_dev\"></i>\r" +
    "\n" +
    "                 <i class=\"fa fa-refresh\" ng-switch-when=\"automation_basic\"></i>\r" +
    "\n" +
    "                 <i class=\"fa fa-caret-square-o-up\" ng-switch-when=\"device_enhancements\"></i>\r" +
    "\n" +
    "                 <i class=\"fa fa-file-code-o\" ng-switch-when=\"developers_stuff\"></i>\r" +
    "\n" +
    "                 <i class=\"fa fa-link\" ng-switch-when=\"complex_applications\"></i>\r" +
    "\n" +
    "                 <i class=\"fa fa-chevron-right\" ng-switch-when=\"automation\"></i>\r" +
    "\n" +
    "                 <i class=\"fa fa-shield\" ng-switch-when=\"security\"></i>\r" +
    "\n" +
    "                 <i class=\"fa fa-bolt\" ng-switch-when=\"peripherals\"></i>\r" +
    "\n" +
    "                 <i class=\"fa fa-chevron-right\" ng-switch-when=\"logging\"></i>\r" +
    "\n" +
    "                 <i class=\"fa fa-chevron-right\" ng-switch-when=\"scripting\"></i>\r" +
    "\n" +
    "                 <i class=\"fa fa-cogs\" ng-switch-when=\"devices\"></i>\r" +
    "\n" +
    "                 <i class=\"fa fa-chevron-right\" ng-switch-when=\"scheduling\"></i>\r" +
    "\n" +
    "                 <i class=\"fa fa-chevron-right\" ng-switch-when=\"climate\"></i>\r" +
    "\n" +
    "                 <i class=\"fa fa-chevron-right\" ng-switch-when=\"environment\"></i>\r" +
    "\n" +
    "                 <i class=\"fa fa-chevron-right\" ng-switch-when=\"scenes\"></i>\r" +
    "\n" +
    "                 <i class=\"fa fa-calendar\" ng-switch-when=\"notifications\"></i>\r" +
    "\n" +
    "                 <i class=\"fa fa-tags\" ng-switch-when=\"tagging\"></i> \r" +
    "\n" +
    "                    {{v.name}} <span class=\"page-navi-icon\"><i class=\"fa fa-chevron-right\"></i></span>\r" +
    "\n" +
    "                </a>\r" +
    "\n" +
    "            </li>\r" +
    "\n" +
    "        </ul>\r" +
    "\n" +
    "    </div>\r" +
    "\n" +
    "</div>\r" +
    "\n" +
    "\r" +
    "\n" +
    "<div class=\"row row-page\" id=\"_page_app_local\">\r" +
    "\n" +
    "    <div class=\"col-lg-4 col-md-6 col-sm-6 app-entry\"\r" +
    "\n" +
    "         id=\"local_module_{{v.id}}\" \r" +
    "\n" +
    "         ng-repeat=\"v in localModules.data|orderBy:'defaults.title' | filter:q  track by v.id\" \r" +
    "\n" +
    "         ng-class=\"onlineVersion[v.id] && onlineVersion[v.id] != v.version ? 'app-entry-green': ''\">\r" +
    "\n" +
    "        <div class=\"app-border app-gradient app-shadow app-entry-in\" ng-class=\"onlineVersion[v.id] && onlineVersion[v.id] != v.version ? 'app-gradient-green': ''\">\r" +
    "\n" +
    "            <a href=\"#apps/local/{{v.id}}\">\r" +
    "\n" +
    "                <img class=\"app-image\" ng-src=\"{{moduleMediaUrl + v.moduleName + '/' + v.icon}}\" ng-if=\"v.icon\" alt=\"{{v.defaults.title}}\" />\r" +
    "\n" +
    "                <img class=\"app-image\" ng-src=\"storage/img/placeholder-img.png\" ng-if=\"!v.icon\" alt=\"{{v.defaults.title}}\" />\r" +
    "\n" +
    "            </a>\r" +
    "\n" +
    "\r" +
    "\n" +
    "            <div class=\"app-body\">\r" +
    "\n" +
    "                <h3 class=\"entry-title\"><a href=\"#apps/local/{{v.id}}\" ng-bind=\"v.defaults.title\"></a>  &raquo;</h3>\r" +
    "\n" +
    "            </div>\r" +
    "\n" +
    "            <div class=\"app-footer\">\r" +
    "\n" +
    "                <div class=\"app-footer-in\">\r" +
    "\n" +
    "                    <a href=\"#module/post/{{v.id}}\" class=\"btn btn-default\">\r" +
    "\n" +
    "                        <i class=\"fa fa-plus fa-lg text-success\"></i> <span class=\"btn-name\" ng-bind=\"_t('lb_add_app')\"></span>\r" +
    "\n" +
    "                    </a>\r" +
    "\n" +
    "                    <a href=\"\" class=\"btn btn-default btn-sm\" ng-click=\"deleteModule({'id': v.id}, _t('app_delete_confirm'),'#local_module_' + v.id)\" ng-if=\"v.custom && !v.hasReset\">\r" +
    "\n" +
    "                        <i class=\"fa fa-remove fa-lg text-danger\"></i> <span class=\"btn-name\" ng-bind=\"_t('lb_remove')\"></span>\r" +
    "\n" +
    "                    </a>\r" +
    "\n" +
    "                    <a href=\"\" class=\"btn btn-default btn-sm\" ng-click=\"resetModule({'id': v.id}, _t('app_reset_confirm'),'#local_module_' + v.id)\" ng-if=\"v.custom && v.hasReset\">\r" +
    "\n" +
    "                        <i class=\"fa fa-remove fa-refresh text-warning\"></i> <span class=\"btn-name\" ng-bind=\"_t('reset')\"></span>\r" +
    "\n" +
    "                    </a>\r" +
    "\n" +
    "                </div>\r" +
    "\n" +
    "            </div>\r" +
    "\n" +
    "        </div>\r" +
    "\n" +
    "    </div>\r" +
    "\n" +
    "</div>"
  );


  $templateCache.put('app/views/apps/app_module_alpaca.html',
    "<!-- Appp module ad  view -->\r" +
    "\n" +
    "<div class=\"mobile-padding\" id=\"page_module_update\" ng-controller=\"AppModuleAlpacaController\">\r" +
    "\n" +
    "    <div class=\"alpaca-perex clearfix\"> \r" +
    "\n" +
    "        <img class=\"app-image-alpaca\" ng-src=\"{{moduleMediaUrl + input.moduleName + '/' + input.icon}}\" ng-if=\"input.icon\" alt=\"img\" />\r" +
    "\n" +
    "        <h1 ng-bind=\"input.moduleTitle\"></h1>\r" +
    "\n" +
    "        <p class=\"help-block\">{{_t('lb_module_id')}}: {{input.moduleId}} | {{_t('lb_instance_id')}}: {{input.instanceId}} <!--| {{_t('lb_category')}}: {{_t(input.category)}}--></p>\r" +
    "\n" +
    "       \r" +
    "\n" +
    "    </div>\r" +
    "\n" +
    "    <!-- <h2 ng-bind=\"input.moduleTitle\"></h2>\r" +
    "\n" +
    "    <p class=\"help-block\">{{_t('lb_module_id')}}: {{input.moduleId}} | {{_t('lb_instance_id')}}: {{input.instanceId}} | {{_t('lb_category')}}: {{_t(input.category)}}</p>-->\r" +
    "\n" +
    "    <div class=\"alert alert-warning\" ng-hide=\"showForm\">\r" +
    "\n" +
    "        <span ng-bind=\"_t('lb_no_module')\"></span> <a href=\"#apps\" class=\"btn btn-default\" ng-bind=\"_t('lb_cancel')\"></a>\r" +
    "\n" +
    "    </div>\r" +
    "\n" +
    "    <form id=\"form_module\" ng-show=\"showForm\">\r" +
    "\n" +
    "        <input name=\"instanceId\" id=\"instanceId\" type=\"hidden\" class=\"form-control\" value=\"{{input.instanceId}}\" />\r" +
    "\n" +
    "        <input name=\"moduleId\" id=\"moduleId\" type=\"hidden\" class=\"form-control\" value=\"{{input.moduleId}}\" />\r" +
    "\n" +
    "        <div class=\"form-group\">\r" +
    "\n" +
    "            <input type=\"checkbox\" name=\"active\" value=\"{{input.active}}\" id=\"active\" ng-model=\"input.active\" ng-checked=\"input.active\" /> <label>{{_t('lb_active')}}</label>\r" +
    "\n" +
    "        </div>\r" +
    "\n" +
    "        <div class=\"form-group\">\r" +
    "\n" +
    "            <label>{{_t('lb_name')}}</label>\r" +
    "\n" +
    "            <input name=\"title\" id=\"title\" type=\"text\" class=\"form-control\" value=\"{{input.title}}\" ng-model=\"input.title\" />\r" +
    "\n" +
    "        </div>\r" +
    "\n" +
    "         <!--<div class=\"form-group\">\r" +
    "\n" +
    "            <label>{{_t('lb_description')}}</label>\r" +
    "\n" +
    "            <textarea name=\"description\" id=\"description\" class=\"form-control\" ng-model=\"input.description\" placeholder=\"{{_t('lb_your_notes')}}\"></textarea>\r" +
    "\n" +
    "\r" +
    "\n" +
    "        </div> -->\r" +
    "\n" +
    "\r" +
    "\n" +
    "        <div id=\"alpaca_data\" ng-show=\"alpacaData\" data-module-postrender=\"{{input.modulePostrender}}\"></div>\r" +
    "\n" +
    "\r" +
    "\n" +
    "        <!-- Submit -->\r" +
    "\n" +
    "        <fieldset class=\"submit-entry\">\r" +
    "\n" +
    "            <button type=\"button\" class=\"btn btn-default\" bb-go-back><i class=\"fa fa-times  text-danger\"></i> <span ng-bind=\"_t('lb_cancel')\"></span></button>\r" +
    "\n" +
    "            <button type=\"submit\" \r" +
    "\n" +
    "                    id=\"btn_module_submit_ang\"\r" +
    "\n" +
    "                    class=\"btn btn-submit\" \r" +
    "\n" +
    "                    ng-click=\"store(input)\"\r" +
    "\n" +
    "                    ng-hide=\"alpacaData\">{{_t('lb_save')}} <i class=\"fa fa-spinner fa-spin module-spinner\"></i></button>\r" +
    "\n" +
    "                    <button type=\"submit\" \r" +
    "\n" +
    "                    id=\"btn_module_submit\"\r" +
    "\n" +
    "                    class=\"btn btn-submit\"\r" +
    "\n" +
    "                    data-sid=\"{{ZWAYSession}}\"\r" +
    "\n" +
    "                    data-lang=\"{{lang}}\"\r" +
    "\n" +
    "                    ng-show=\"alpacaData\">{{_t('lb_save')}} <i class=\"fa fa-spinner fa-spin module-spinner\"></i></button>\r" +
    "\n" +
    "           \r" +
    "\n" +
    "        </fieldset>\r" +
    "\n" +
    "\r" +
    "\n" +
    "    </form><!-- /form --> \r" +
    "\n" +
    "\r" +
    "\n" +
    "</div> <!-- /ng-controller --> \r" +
    "\n"
  );


  $templateCache.put('app/views/apps/app_online.html',
    "<!-- Online app view -->\r" +
    "\n" +
    " <div class=\"page-control form-inline\">\r" +
    "\n" +
    "    <a class=\"btn btn-default\" href=\"\" ng-click=\"expandNavi('appsCategories',$event)\"><i class=\"fa fa-chevron-down text-success\" ng-class=\"naviExpanded.appsCategories ? 'fa-chevron-up': 'fa-chevron-down'\"></i> <span ng-bind=\"currentCategory.name || _t('select_category')\"></span></a>\r" +
    "\n" +
    "    <div class=\"input-group search-form hide-on-mobile_\">\r" +
    "\n" +
    "        <input type=\"text\" ng-model=\"q\" class=\"form-control\" value=\"{{q}}\">\r" +
    "\n" +
    "        <span class=\"input-group-addon\"><i class=\"fa fa-search\"></i></span> \r" +
    "\n" +
    "    </div>\r" +
    "\n" +
    "    <a class=\"btn btn-default\" href=\"\" ng-click=\"resetFilter('/apps')\" ng-if=\"currentCategory.id\"><i class=\"fa fa-refresh text-danger\"></i> <span class=\"btn-name\">{{_t('clear_all_filters')}}</span> </a>\r" +
    "\n" +
    "</div>\r" +
    "\n" +
    "<div class=\"page-navi\" ng-if=\"naviExpanded.appsCategories\">\r" +
    "\n" +
    "    <div class=\"page-navi-in\">\r" +
    "\n" +
    "        <ul>\r" +
    "\n" +
    "            <li class=\"page-cat-{{v.id}}\" ng-repeat=\"v in categories\" ng-if=\"modulesCats.indexOf(v.id) > -1\" ng-class=\"currentCategory.id == v.id ? 'active': ''\">\r" +
    "\n" +
    "                <a href=\"#apps/category/{{v.id}}\" ng-switch=\"v.id\">\r" +
    "\n" +
    "                    <i class=\"fa fa-cube\" ng-switch-when=\"basic_gateway_modules\"></i>\r" +
    "\n" +
    "                <i class=\"fa fa-wrench\" ng-switch-when=\"legacy_products_workaround\"></i>\r" +
    "\n" +
    "                 <i class=\"fa fa-object-group\" ng-switch-when=\"support_external_ui\"></i>\r" +
    "\n" +
    "                 <i class=\"fa fa-cubes\" ng-switch-when=\"support_external_dev\"></i>\r" +
    "\n" +
    "                 <i class=\"fa fa-refresh\" ng-switch-when=\"automation_basic\"></i>\r" +
    "\n" +
    "                 <i class=\"fa fa-caret-square-o-up\" ng-switch-when=\"device_enhancements\"></i>\r" +
    "\n" +
    "                 <i class=\"fa fa-file-code-o\" ng-switch-when=\"developers_stuff\"></i>\r" +
    "\n" +
    "                 <i class=\"fa fa-link\" ng-switch-when=\"complex_applications\"></i>\r" +
    "\n" +
    "                 <i class=\"fa fa-chevron-right\" ng-switch-when=\"automation\"></i>\r" +
    "\n" +
    "                 <i class=\"fa fa-shield\" ng-switch-when=\"security\"></i>\r" +
    "\n" +
    "                 <i class=\"fa fa-bolt\" ng-switch-when=\"peripherals\"></i>\r" +
    "\n" +
    "                 <i class=\"fa fa-chevron-right\" ng-switch-when=\"logging\"></i>\r" +
    "\n" +
    "                 <i class=\"fa fa-chevron-right\" ng-switch-when=\"scripting\"></i>\r" +
    "\n" +
    "                 <i class=\"fa fa-cogs\" ng-switch-when=\"devices\"></i>\r" +
    "\n" +
    "                 <i class=\"fa fa-chevron-right\" ng-switch-when=\"scheduling\"></i>\r" +
    "\n" +
    "                 <i class=\"fa fa-chevron-right\" ng-switch-when=\"climate\"></i>\r" +
    "\n" +
    "                 <i class=\"fa fa-chevron-right\" ng-switch-when=\"environment\"></i>\r" +
    "\n" +
    "                 <i class=\"fa fa-chevron-right\" ng-switch-when=\"scenes\"></i>\r" +
    "\n" +
    "                 <i class=\"fa fa-calendar\" ng-switch-when=\"notifications\"></i>\r" +
    "\n" +
    "                 <i class=\"fa fa-tags\" ng-switch-when=\"tagging\"></i> \r" +
    "\n" +
    "                    {{v.name}} <span class=\"page-navi-icon\"><i class=\"fa fa-chevron-right\"></i></span>\r" +
    "\n" +
    "                </a>\r" +
    "\n" +
    "            </li>\r" +
    "\n" +
    "        </ul>\r" +
    "\n" +
    "    </div>\r" +
    "\n" +
    "</div>\r" +
    "\n" +
    "<div class=\"row row-page\" id=\"_page_app_local\">\r" +
    "\n" +
    "    <div class=\"col-lg-4 col-md-6 col-sm-6 app-entry\" \r" +
    "\n" +
    "         ng-class=\"localModules.ids.indexOf(v.modulename) !== -1 ? 'app-entry-green': ''\" \r" +
    "\n" +
    "         ng-repeat=\"v in onlineModules| orderBy:'title' | filter:q track by v.id\">\r" +
    "\n" +
    "        <div class=\"app-border app-gradient app-shadow app-entry-in\" ng-class=\"localModules.ids.indexOf(v.modulename) !== -1 ? 'app-gradient-green': ''\">\r" +
    "\n" +
    "            <img class=\"app-image\" alt=\"{{v.title}}\" \r" +
    "\n" +
    "                 ng-src=\"{{v.icon ? onlineMediaUrl + v.icon : 'storage/img/placeholder-img.png'}}\" \r" +
    "\n" +
    "                 ng-click=\"redirectToRoute(localModules.ids.indexOf(v.modulename) !== -1 ? false : 'apps/online/' + v.modulename)\" />\r" +
    "\n" +
    "            <div class=\"app-body\">\r" +
    "\n" +
    "                <h3 class=\"entry-title\">\r" +
    "\n" +
    "                    <a href=\"#apps/online/{{v.modulename}}\" ng-if=\"localModules.ids.indexOf(v.modulename) === -1\">{{v.title}}  &raquo;</a>\r" +
    "\n" +
    "                    <span ng-if=\"localModules.ids.indexOf(v.modulename) !== -1\" ng-bind=\"v.title\"></span>\r" +
    "\n" +
    "                </h3>\r" +
    "\n" +
    "               \r" +
    "\n" +
    "            </div>\r" +
    "\n" +
    "            <div class=\"app-footer\">\r" +
    "\n" +
    "                <div class=\"app-footer-in\">\r" +
    "\n" +
    "                    <!-- Download -->\r" +
    "\n" +
    "                    <button href=\"\" class=\"btn btn-default btn-sm\" ng-click=\"installModule(v.file,'online_install')\" ng-if=\"localModules.ids.indexOf(v.modulename) === -1\">\r" +
    "\n" +
    "                        <i class=\"fa fa-download fa-lg text-success\"></i> <span class=\"btn-name_\">{{_t('lb_download')}}</span>\r" +
    "\n" +
    "                    </button> \r" +
    "\n" +
    "                     <!-- Update -->\r" +
    "\n" +
    "                    <button href=\"\" class=\"btn btn-default btn-sm\" ng-click=\"updateModule(v.file,_t('app_update_confirm'))\" ng-if=\"localModules.ids.indexOf(v.modulename) !== -1 && localModules.all[v.modulename].version != v.version\">\r" +
    "\n" +
    "                        <i class=\"fa fa-level-up fa-lg text-primary\"></i> <span class=\"btn-name_\">{{_t('update_to_latest')}}</span>\r" +
    "\n" +
    "                    </button> \r" +
    "\n" +
    "                      <!-- Installed -->\r" +
    "\n" +
    "                    <button class=\"btn btn-default btn-sm\" disabled ng-if=\"localModules.ids.indexOf(v.modulename) !== -1 && localModules.all[v.modulename].version == v.version\">\r" +
    "\n" +
    "                        <i class=\"fa fa-check fa-lg\"></i> <span class=\"btn-name_\">{{_t('installed')}}</span>\r" +
    "\n" +
    "                    </button> \r" +
    "\n" +
    "                </div>\r" +
    "\n" +
    "            </div>\r" +
    "\n" +
    "        </div>\r" +
    "\n" +
    "    </div>\r" +
    "\n" +
    "</div>"
  );


  $templateCache.put('app/views/apps/apps.html',
    "<!-- Appp view -->\r" +
    "\n" +
    "<div ng-controller=\"AppController\">\r" +
    "\n" +
    "    <bb-loader></bb-loader>\r" +
    "\n" +
    "    <div class=\"tabs-container\">\r" +
    "\n" +
    "        <ul class=\"nav nav-tabs nav-tabs-3\" role=\"tablist\">\r" +
    "\n" +
    "            <li ng-class=\"activeTab == 'local' ? 'active' : ''\">\r" +
    "\n" +
    "                <a href=\"\" title=\"{{_t('lb_local_modules')}}\" data-target=\"#module_local\" data-toggle=\"tab\" ng-click=\"setTab('local')\">\r" +
    "\n" +
    "                    <i class=\"fa fa-cloud-download fa-lg tab-icon\"></i> <span class=\"tab-name\">{{_t('lb_local_modules')}}</span>\r" +
    "\n" +
    "                </a>\r" +
    "\n" +
    "            </li>\r" +
    "\n" +
    "            <li ng-class=\"activeTab == 'online' ? 'active' : ''\">\r" +
    "\n" +
    "                <a href=\"\" title=\"{{_t('lb_online_modules')}}\" data-target=\"#module_online\" data-toggle=\"tab\" ng-click=\"setTab('online')\">\r" +
    "\n" +
    "                    <i class=\"fa fa-globe fa-lg tab-icon\"></i> <span class=\"tab-name\">{{_t('lb_online_modules')}}</span>\r" +
    "\n" +
    "                </a>\r" +
    "\n" +
    "            </li>\r" +
    "\n" +
    "            <li ng-class=\"activeTab == 'instance' ? 'active' : ''\">\r" +
    "\n" +
    "                <a href=\"\" title=\"{{_t('lb_active')}}\" data-target=\"#module_instance\" data-toggle=\"tab\" ng-click=\"setTab('instance')\">\r" +
    "\n" +
    "                    <i class=\"fa fa-cog fa-fire tab-icon\"></i> <span class=\"tab-name\">{{_t('lb_active')}}</span>\r" +
    "\n" +
    "                </a>\r" +
    "\n" +
    "            </li>\r" +
    "\n" +
    "             <!-- <li ng-class=\"activeTab == 'hidden' ? 'active' : ''\">\r" +
    "\n" +
    "                <a href=\"\" title=\"{{_t('lb_hidden_app')}}\" data-target=\"#module_hidden\" data-toggle=\"tab\" ng-click=\"setTab('hidden')\">\r" +
    "\n" +
    "                    <i class=\"fa fa-eye tab-icon\"></i> <span class=\"tab-name\">{{_t('lb_hidden_app')}}</span>\r" +
    "\n" +
    "                </a>\r" +
    "\n" +
    "            </li>-->\r" +
    "\n" +
    "        </ul>\r" +
    "\n" +
    "    </div>\r" +
    "\n" +
    "\r" +
    "\n" +
    "    <!-- Tab panes -->\r" +
    "\n" +
    "    <div class=\"tab-content\">\r" +
    "\n" +
    "        <!-- Local -->\r" +
    "\n" +
    "        <div class=\"tab-pane\" id=\"module_local\" ng-class=\"activeTab == 'local' ? 'active' : ''\" ng-include=\"'app/views/apps/app_local.html'\"></div>\r" +
    "\n" +
    "        <!-- Online -->\r" +
    "\n" +
    "        <div class=\"tab-pane\" id=\"module_local\" ng-class=\"activeTab == 'online' ? 'active' : ''\" ng-include=\"'app/views/apps/app_online.html'\"></div>\r" +
    "\n" +
    "        <!-- Active -->\r" +
    "\n" +
    "        <div class=\"tab-pane\" id=\"module_instance\" ng-class=\"activeTab == 'instance' ? 'active' : ''\" ng-include=\"'app/views/apps/app_instance.html'\"></div>\r" +
    "\n" +
    "         <!-- Hidden -->\r" +
    "\n" +
    "         <!--<div class=\"tab-pane\" id=\"module_hidden\" ng-class=\"activeTab == 'hidden' ? 'active' : ''\" ng-include=\"'app/views/apps/app_hidden.html'\"></div>-->\r" +
    "\n" +
    "    </div>\r" +
    "\n" +
    "\r" +
    "\n" +
    "    <div id=\"footer\" ng-show=\"showFooter__\">\r" +
    "\n" +
    "        <div class=\"navbar navbar-default navbar-fixed-bottom\">\r" +
    "\n" +
    "            <div class=\"container\">\r" +
    "\n" +
    "               <div class=\"form-inline\" role=\"form\">\r" +
    "\n" +
    "                    <!--<div class=\"btn-group dropup\" ng-if=\"showInFooter.categories\">\r" +
    "\n" +
    "                        <button type=\"button\" class=\"btn btn-default\" ng-bind=\"_t('lb_filter_by')\"></button>\r" +
    "\n" +
    "                        <button type=\"button\" class=\"btn btn-default dropdown-toggle\" data-toggle=\"dropdown\">\r" +
    "\n" +
    "                            <span class=\"caret\"></span>\r" +
    "\n" +
    "                            <span class=\"sr-only\">Toggle Dropdown</span>\r" +
    "\n" +
    "                        </button>\r" +
    "\n" +
    "                        <ul class=\"dropdown-menu\">\r" +
    "\n" +
    "                            <li ng-class=\"!currentCategory.id ? 'active': ''\">\r" +
    "\n" +
    "                                <a href=\"#apps\">{{_t('lb_all')}}</a> \r" +
    "\n" +
    "                            </li>\r" +
    "\n" +
    "                            <li ng-repeat=\"v in categories\" ng-if=\"modulesCats.indexOf(v.id) > -1\" ng-class=\"currentCategory.id == v.id ? 'active': ''\">\r" +
    "\n" +
    "                                <a href=\"#apps/category/{{v.id}}\">{{v.name}}</a> \r" +
    "\n" +
    "                            </li>\r" +
    "\n" +
    "                        </ul>\r" +
    "\n" +
    "                    </div>-->\r" +
    "\n" +
    "                    <div class=\"input-group search-form hide-on-mobile\">\r" +
    "\n" +
    "                       <input type=\"text\" ng-model=\"q\" class=\"form-control\" value=\"{{q}}\">\r" +
    "\n" +
    "                        <span class=\"input-group-addon\"><i class=\"fa fa-search\"></i></span> \r" +
    "\n" +
    "                    </div>\r" +
    "\n" +
    "                </div>\r" +
    "\n" +
    "            </div>\r" +
    "\n" +
    "        </div>\r" +
    "\n" +
    "    </div>\r" +
    "\n" +
    "</div> <!-- /ng-controller --> "
  );


  $templateCache.put('app/views/apps/apps_instance.html',
    "<!-- Instance view -->\r" +
    "\n" +
    "<div ng-controller=\"AppBaseController\">\r" +
    "\n" +
    "    <div ng-controller=\"AppInstanceController\">\r" +
    "\n" +
    "         <!-- Apps navigation -->\r" +
    "\n" +
    "        <div ng-include=\"'app/views/apps/navi.html'\"></div>\r" +
    "\n" +
    "<div class=\"table-responsive_\">\r" +
    "\n" +
    "    <table id=\"table_apps_instance\" class=\"table table-condensed table-report\">\r" +
    "\n" +
    "        <tbody>\r" +
    "\n" +
    "            <tr class=\"bcg-active\"\r" +
    "\n" +
    "                id=\"instance_{{$index}}\" \r" +
    "\n" +
    "                ng-repeat=\"v in dataHolder.instances.all|orderBy:'-creationTime' track by v.id\" \r" +
    "\n" +
    "                ng-class=\"v.active ? 'true': 'false'\"\r" +
    "\n" +
    "                ng-if=\"dataHolder.modules.cameraIds.indexOf(v.moduleId) === -1\">\r" +
    "\n" +
    "                <td class=\"td-img\">\r" +
    "\n" +
    "                    <img class=\"report-img\" ng-src=\"{{moduleMediaUrl + v.moduleId + '/' + dataHolder.modules.imgs[v.moduleId]}}\" ng-if=\"dataHolder.modules.imgs[v.moduleId]\" alt=\"img\" />\r" +
    "\n" +
    "                    <img class=\"report-img\" ng-src=\"storage/img/placeholder-img.png\" ng-if=\"!dataHolder.modules.imgs[v.moduleId]\" alt=\"img\" />\r" +
    "\n" +
    "                    <!-- <img class=\"report-img\" ng-src=\"storage/img/apps/app.png\" alt=\"icon\" />-->\r" +
    "\n" +
    "                </td>\r" +
    "\n" +
    "                <td>\r" +
    "\n" +
    "                   <a href=\"#module/put/{{v.id}}\"><span ng-bind=\"v.title\"></span> <span ng-bind=\"_t('lb_use')\"></span> <strong ng-bind=\"v.module\"></strong></a>\r" +
    "\n" +
    "                </td>\r" +
    "\n" +
    "                <td class=\"td-action\">\r" +
    "\n" +
    "                    <a href=\"#module/put/{{v.id}}\" class=\"btn btn-default btn-sm\">\r" +
    "\n" +
    "                        <i class=\"fa fa-cog fa-lg\"></i>\r" +
    "\n" +
    "                    </a>\r" +
    "\n" +
    "                    <button title=\"{{_t('lb_deactivate')}}\" \r" +
    "\n" +
    "                            class=\"btn btn-default btn-sm\" href=\"\" \r" +
    "\n" +
    "                            ng-show=\"v.active\"\r" +
    "\n" +
    "                            ng-click=\"activateInstance(v, false)\"\r" +
    "\n" +
    "                            >\r" +
    "\n" +
    "                        <i class=\"fa fa-power-off fa-lg text-primary\"></i> <span class=\"btn-name\" ng-bind=\"_t('lb_deactivate')\"></span>\r" +
    "\n" +
    "                    </button>\r" +
    "\n" +
    "                    <button title=\"{{_t('lb_activate')}}\" \r" +
    "\n" +
    "                            class=\"btn btn-default btn-sm\" \r" +
    "\n" +
    "                            ng-show=\"!v.active\" \r" +
    "\n" +
    "                            ng-click=\"activateInstance(v, true)\r" +
    "\n" +
    "                            \">\r" +
    "\n" +
    "                        <i class=\"fa fa-refresh fa-lg text-success\"></i> <span class=\"btn-name\" ng-bind=\"_t('lb_activate')\"></span>\r" +
    "\n" +
    "                    </button>\r" +
    "\n" +
    "                    <button title=\"{{_t('lb_remove')}}\" \r" +
    "\n" +
    "                            class=\"btn btn-default btn-sm\"\r" +
    "\n" +
    "                            ng-click=\"deleteInstance('#instance_' + $index, {'id': v.id}, _t('lb_delete_confirm'))\"\r" +
    "\n" +
    "                            >\r" +
    "\n" +
    "                        <i class=\"fa fa-remove fa-lg text-danger\"></i> <span class=\"btn-name\" ng-bind=\"_t('lb_remove')\"></span>\r" +
    "\n" +
    "                    </button>\r" +
    "\n" +
    "                </td>\r" +
    "\n" +
    "            </tr>\r" +
    "\n" +
    "        </tbody>\r" +
    "\n" +
    "    </table>\r" +
    "\n" +
    "</div>\r" +
    "\n" +
    "    </div> <!-- /ng-controller --> \r" +
    "\n" +
    "</div> <!-- /ng-controller --> "
  );


  $templateCache.put('app/views/apps/apps_local.html',
    "<!-- Local apps view -->\r" +
    "\n" +
    "<div ng-controller=\"AppBaseController\">\r" +
    "\n" +
    "    <div ng-controller=\"AppLocalController\">\r" +
    "\n" +
    "        <!-- Apps navigation -->\r" +
    "\n" +
    "        <div ng-include=\"'app/views/apps/navi.html'\"></div>\r" +
    "\n" +
    "    \r" +
    "\n" +
    "        <div class=\"page-control form-inline\">\r" +
    "\n" +
    "            <a class=\"btn btn-default\" href=\"\" ng-click=\"expandNavi('appsCategories', $event)\"><i class=\"fa fa-chevron-down text-success\" ng-class=\"naviExpanded.appsCategories ? 'fa-chevron-up': 'fa-chevron-down'\"></i> \r" +
    "\n" +
    "                 <span ng-if=\"dataHolder.modules.filter.category\">{{dataHolder.modules.categories[dataHolder.modules.filter.category].name|cutText:true:30}}</span>\r" +
    "\n" +
    "                 <span ng-if=\"dataHolder.modules.filter.featured\">{{_t('featured_apps')}}</span>\r" +
    "\n" +
    "                 <span ng-if=\"_.isEmpty(dataHolder.modules.filter)\">{{_t('all_apps')}}</span>\r" +
    "\n" +
    "            </a>\r" +
    "\n" +
    "            <div class=\"input-group search-form hide-on-mobile_\">\r" +
    "\n" +
    "                <input type=\"text\" ng-model=\"q\" class=\"form-control\" value=\"{{q}}\">\r" +
    "\n" +
    "                <span class=\"input-group-addon\"><i class=\"fa fa-search\"></i></span> \r" +
    "\n" +
    "            </div>\r" +
    "\n" +
    "\r" +
    "\n" +
    "        </div>\r" +
    "\n" +
    "        <div class=\"page-navi\" ng-if=\"naviExpanded.appsCategories\">\r" +
    "\n" +
    "        <div class=\"page-navi-in\">\r" +
    "\n" +
    "            <ul>\r" +
    "\n" +
    "                <li class=\"page-cat-0\" ng-class=\"_.isEmpty(dataHolder.modules.filter) == true ? 'active': ''\"><a href=\"\" ng-click=\"setFilter()\"><i class=\"fa fa-check-circle-o\"></i> {{_t('all_apps')}}</a></li>\r" +
    "\n" +
    "                <li class=\"page-cat-0\" ng-class=\"dataHolder.modules.filter.featured == true ? 'active': ''\"><a href=\"\" ng-click=\"setFilter({featured: true})\"><i class=\"fa fa-thumbs-o-up\"></i> {{_t('featured_apps')}}</a></li>\r" +
    "\n" +
    "                <li class=\"page-cat-{{v.id}}\" ng-repeat=\"v in dataHolder.modules.categories\" ng-if=\"dataHolder.modules.cats.indexOf(v.id) > -1\" ng-class=\"dataHolder.modules.filter.category == v.id ? 'active': ''\">\r" +
    "\n" +
    "                    <a href=\"\" ng-click=\"setFilter({category: v.id})\" ng-switch=\"v.id\">\r" +
    "\n" +
    "                        <i class=\"fa fa-cube\" ng-switch-when=\"basic_gateway_modules\"></i>\r" +
    "\n" +
    "                    <i class=\"fa fa-wrench\" ng-switch-when=\"legacy_products_workaround\"></i>\r" +
    "\n" +
    "                     <i class=\"fa fa-object-group\" ng-switch-when=\"support_external_ui\"></i>\r" +
    "\n" +
    "                     <i class=\"fa fa-cubes\" ng-switch-when=\"support_external_dev\"></i>\r" +
    "\n" +
    "                     <i class=\"fa fa-refresh\" ng-switch-when=\"automation_basic\"></i>\r" +
    "\n" +
    "                     <i class=\"fa fa-caret-square-o-up\" ng-switch-when=\"device_enhancements\"></i>\r" +
    "\n" +
    "                     <i class=\"fa fa-file-code-o\" ng-switch-when=\"developers_stuff\"></i>\r" +
    "\n" +
    "                     <i class=\"fa fa-link\" ng-switch-when=\"complex_applications\"></i>\r" +
    "\n" +
    "                     <i class=\"fa fa-chevron-right\" ng-switch-when=\"automation\"></i>\r" +
    "\n" +
    "                     <i class=\"fa fa-shield\" ng-switch-when=\"security\"></i>\r" +
    "\n" +
    "                     <i class=\"fa fa-bolt\" ng-switch-when=\"peripherals\"></i>\r" +
    "\n" +
    "                     <i class=\"fa fa-chevron-right\" ng-switch-when=\"logging\"></i>\r" +
    "\n" +
    "                     <i class=\"fa fa-chevron-right\" ng-switch-when=\"scripting\"></i>\r" +
    "\n" +
    "                     <i class=\"fa fa-cogs\" ng-switch-when=\"devices\"></i>\r" +
    "\n" +
    "                     <i class=\"fa fa-chevron-right\" ng-switch-when=\"scheduling\"></i>\r" +
    "\n" +
    "                     <i class=\"fa fa-chevron-right\" ng-switch-when=\"climate\"></i>\r" +
    "\n" +
    "                     <i class=\"fa fa-chevron-right\" ng-switch-when=\"environment\"></i>\r" +
    "\n" +
    "                     <i class=\"fa fa-chevron-right\" ng-switch-when=\"scenes\"></i>\r" +
    "\n" +
    "                     <i class=\"fa fa-calendar\" ng-switch-when=\"notifications\"></i>\r" +
    "\n" +
    "                     <i class=\"fa fa-tags\" ng-switch-when=\"tagging\"></i> \r" +
    "\n" +
    "                        {{v.name|cutText:true:30}} <span class=\"page-navi-icon\"><i class=\"fa fa-chevron-right\"></i></span>\r" +
    "\n" +
    "                    </a>\r" +
    "\n" +
    "                </li>\r" +
    "\n" +
    "            </ul>\r" +
    "\n" +
    "        </div>\r" +
    "\n" +
    "    </div>\r" +
    "\n" +
    "    <div class=\"row row-page\" id=\"_page_app_local\">\r" +
    "\n" +
    "            <div class=\"col-lg-4 col-md-6 col-sm-6 app-entry\"\r" +
    "\n" +
    "                 id=\"local_module_{{v.id}}\" \r" +
    "\n" +
    "                 ng-repeat=\"v in dataHolder.modules.all|orderBy:'defaults.title' | filter:q  track by v.id\" \r" +
    "\n" +
    "                 ng-class=\"dataHolder.onlineModules.ids[v.id] && dataHolder.onlineModules.ids[v.id].version != v.version ? 'app-entry-green': ''\">\r" +
    "\n" +
    "                    <div class=\"app-border app-gradient app-shadow app-entry-in\" ng-class=\"dataHolder.onlineModules.ids[v.id] && dataHolder.onlineModules.ids[v.id].version != v.version ? 'app-gradient-green': ''\"> \r" +
    "\n" +
    "                    <a href=\"#apps/local/{{v.id}}\">\r" +
    "\n" +
    "                        <img class=\"app-image\" ng-src=\"{{moduleMediaUrl + v.moduleName + '/' + v.icon}}\" ng-if=\"v.icon\" alt=\"{{v.defaults.title}}\" />\r" +
    "\n" +
    "                        <img class=\"app-image\" ng-src=\"storage/img/placeholder-img.png\" ng-if=\"!v.icon\" alt=\"{{v.defaults.title}}\" />\r" +
    "\n" +
    "                    </a>\r" +
    "\n" +
    "\r" +
    "\n" +
    "                    <div class=\"app-body\">\r" +
    "\n" +
    "                        <h3 class=\"entry-title\"><a href=\"#apps/local/{{v.id}}\" ng-bind=\"v.defaults.title\"></a>  &raquo;</h3>\r" +
    "\n" +
    "                    </div>\r" +
    "\n" +
    "                    <div class=\"app-footer\">\r" +
    "\n" +
    "                        <div class=\"app-footer-in\">\r" +
    "\n" +
    "                            <a href=\"#module/post/{{v.id}}\" class=\"btn btn-default\">\r" +
    "\n" +
    "                                <i class=\"fa fa-plus fa-lg text-success\"></i> <span class=\"btn-name\" ng-bind=\"_t('lb_add_app')\"></span>\r" +
    "\n" +
    "                            </a>\r" +
    "\n" +
    "                            <a href=\"\" class=\"btn btn-default btn-sm\" ng-click=\"deleteModule({'id': v.id}, _t('app_delete_confirm'),'#local_module_' + v.id)\" ng-if=\"v.custom && !v.hasReset\">\r" +
    "\n" +
    "                                <i class=\"fa fa-remove fa-lg text-danger\"></i> <span class=\"btn-name\" ng-bind=\"_t('lb_remove')\"></span>\r" +
    "\n" +
    "                            </a>\r" +
    "\n" +
    "                            <a href=\"\" class=\"btn btn-default btn-sm\" ng-click=\"resetModule({'id': v.id}, _t('app_reset_confirm'),'#local_module_' + v.id)\" ng-if=\"v.custom && v.hasReset\">\r" +
    "\n" +
    "                                <i class=\"fa fa-remove fa-refresh text-warning\"></i> <span class=\"btn-name\" ng-bind=\"_t('reset')\"></span>\r" +
    "\n" +
    "                            </a>\r" +
    "\n" +
    "                        </div>\r" +
    "\n" +
    "                    </div>\r" +
    "\n" +
    "                </div>\r" +
    "\n" +
    "            </div>\r" +
    "\n" +
    "        </div>\r" +
    "\n" +
    "\r" +
    "\n" +
    "    </div> <!-- /ng-controller --> \r" +
    "\n" +
    "</div> <!-- /ng-controller --> "
  );


  $templateCache.put('app/views/apps/apps_local_id.html',
    "<!-- AppLocalDetailController -->\r" +
    "\n" +
    "<div ng-controller=\"AppLocalDetailController\">\r" +
    "\n" +
    "     <bb-loader></bb-loader>\r" +
    "\n" +
    "     <div class=\"app-border app-gradient app-shadow app-detail-header\">\r" +
    "\n" +
    "        <div class=\"app-detail-header-in\">\r" +
    "\n" +
    "            <div class=\"app-detail-img\">\r" +
    "\n" +
    "                <img class=\"app-image-detail\" ng-src=\"{{moduleMediaUrl + module.moduleName + '/' + module.icon}}\" ng-if=\"module.icon\" alt=\"{{module.defaults.title}}\" />\r" +
    "\n" +
    "                <img class=\"app-image-detail\" ng-src=\"storage/img/placeholder-img.png\" ng-if=\"!module.icon\" alt=\"{{module.defaults.title}}\" />\r" +
    "\n" +
    "            </div>\r" +
    "\n" +
    "        \r" +
    "\n" +
    "        <div class=\"app-detail-body\">\r" +
    "\n" +
    "            <h2 ng-bind=\"module.defaults.title\"></h2>\r" +
    "\n" +
    "            <p class=\"app-detail-perex\" ng-bind-html=\"module.defaults.description|toTrusted\"></p>\r" +
    "\n" +
    "            <p class=\"app-detail-list\" ng-show=\"module.dependencies.length > 0\">\r" +
    "\n" +
    "                <i class=\"fa fa-sitemap fa-lg\"></i> <strong>{{_t('lb_instance_of')}}:</strong> <span ng-repeat=\"i in module.dependencies\">{{i}}, </span>\r" +
    "\n" +
    "            </p>\r" +
    "\n" +
    "            <p class=\"app-detail-list\" ng-show=\"module.category\">\r" +
    "\n" +
    "                <i class=\"fa fa-list fa-lg\"></i> <span ng-bind=\"categoryName\"></span>\r" +
    "\n" +
    "            </p>\r" +
    "\n" +
    "            <p class=\"app-detail-list\" ng-show=\"module.author\">\r" +
    "\n" +
    "                <i class=\"fa fa-user fa-lg\"></i>\r" +
    "\n" +
    "                    <span ng-show=\"!module.homepage\" ng-bind=\"module.author\"></span>\r" +
    "\n" +
    "                    <a ng-href=\"{{module.homepage}}\" ng-show=\"module.homepage\" ng-bind=\"module.author\"></a> \r" +
    "\n" +
    "            </p>\r" +
    "\n" +
    "            <p class=\"app-detail-list\" ng-show=\"module.version\">\r" +
    "\n" +
    "               <i class=\"fa fa-info-circle fa-lg\"></i> <span class=\"app-version\" ng-bind=\"module.version\"></span>\r" +
    "\n" +
    "                    <span class=\"label\"\r" +
    "\n" +
    "                          ng-class=\"module.maturity == 'stable' ? 'label-success':'label-warning'\"\r" +
    "\n" +
    "                          >{{module.maturity}}</span>\r" +
    "\n" +
    "            </p>\r" +
    "\n" +
    "             <!-- <div class=\"app-detail-control\">\r" +
    "\n" +
    "                 <a href=\"#apps/online/{{module.id}}\" class=\"btn btn-default\" ng-if=\"isOnline && isOnline.version != module.version\">\r" +
    "\n" +
    "                        <i class=\"fa fa-download fa-lg text-info\"></i> <span class=\"btn-name_\">{{_t('lb_app_new_version')}} ({{isOnline.version}})</span>\r" +
    "\n" +
    "                    </a>\r" +
    "\n" +
    "                  </div> --> \r" +
    "\n" +
    "        </div>\r" +
    "\n" +
    "      </div>\r" +
    "\n" +
    "    </div>\r" +
    "\n" +
    "     <div class=\"fieldset submit-entry\">\r" +
    "\n" +
    "        <button type=\"button\" class=\"btn btn-default\" bb-go-back><i class=\"fa fa-times  text-danger\"></i> <span ng-bind=\"_t('lb_cancel')\"></span></button>\r" +
    "\n" +
    "          <a class=\"btn btn-submit\" href=\"#module/post/{{module.id}}\" ><i class=\"fa fa-plus\"></i> <span class=\"btn-name_\">{{_t('lb_add_app')}}</span></a>\r" +
    "\n" +
    "     </div>\r" +
    "\n" +
    "\r" +
    "\n" +
    "</div> <!-- /ng-controller --> "
  );


  $templateCache.put('app/views/apps/apps_online.html',
    "<!-- Online apps view -->\r" +
    "\n" +
    "<div ng-controller=\"AppBaseController\">\r" +
    "\n" +
    "    <div ng-controller=\"AppOnlineController\">\r" +
    "\n" +
    "         <!-- Apps navigation -->\r" +
    "\n" +
    "        <div ng-include=\"'app/views/apps/navi.html'\"></div>\r" +
    "\n" +
    "        <div class=\"page-control form-inline\">\r" +
    "\n" +
    "            <a class=\"btn btn-default\" href=\"\" ng-click=\"expandNavi('appsCategories', $event)\"><i class=\"fa fa-chevron-down text-success\" ng-class=\"naviExpanded.appsCategories ? 'fa-chevron-up': 'fa-chevron-down'\"></i> \r" +
    "\n" +
    "                <span ng-if=\"dataHolder.onlineModules.filter.category\">{{dataHolder.modules.categories[dataHolder.onlineModules.filter.category].name|cutText:true:30}}</span>\r" +
    "\n" +
    "                <span ng-if=\"dataHolder.onlineModules.filter.featured\">{{_t('featured_apps')}}</span>\r" +
    "\n" +
    "                <span ng-if=\"_.isEmpty(dataHolder.onlineModules.filter)\">{{_t('all_apps')}}</span>\r" +
    "\n" +
    "            </a>\r" +
    "\n" +
    "            <div class=\"input-group search-form hide-on-mobile_\">\r" +
    "\n" +
    "                <input type=\"text\" ng-model=\"q\" class=\"form-control\" value=\"{{q}}\">\r" +
    "\n" +
    "                <span class=\"input-group-addon\"><i class=\"fa fa-search\"></i></span> \r" +
    "\n" +
    "            </div>\r" +
    "\n" +
    "\r" +
    "\n" +
    "        </div>\r" +
    "\n" +
    "        <div class=\"page-navi\" ng-if=\"naviExpanded.appsCategories\">\r" +
    "\n" +
    "            <div class=\"page-navi-in\">\r" +
    "\n" +
    "                <ul>\r" +
    "\n" +
    "                    <li class=\"page-cat-0\" ng-class=\"_.isEmpty(dataHolder.onlineModules.filter) == true ? 'active': ''\"><a href=\"\" ng-click=\"setFilter()\"><i class=\"fa fa-check-circle-o\"></i> {{_t('all_apps')}}</a></li>\r" +
    "\n" +
    "                    <li class=\"page-cat-0\" ng-class=\"dataHolder.onlineModules.filter.featured == true ? 'active': ''\"><a href=\"\" ng-click=\"setFilter({featured: true})\"><i class=\"fa fa-thumbs-o-up\"></i> {{_t('featured_apps')}}</a></li>\r" +
    "\n" +
    "                    <li class=\"page-cat-{{v.id}}\" ng-repeat=\"v in dataHolder.modules.categories\" ng-if=\"dataHolder.modules.cats.indexOf(v.id) > -1\" ng-class=\"dataHolder.onlineModules.filter.category == v.id ? 'active': ''\">\r" +
    "\n" +
    "                        <a href=\"\" ng-click=\"setFilter({category: v.id})\" ng-switch=\"v.id\">\r" +
    "\n" +
    "                            <i class=\"fa fa-cube\" ng-switch-when=\"basic_gateway_modules\"></i>\r" +
    "\n" +
    "                            <i class=\"fa fa-wrench\" ng-switch-when=\"legacy_products_workaround\"></i>\r" +
    "\n" +
    "                            <i class=\"fa fa-object-group\" ng-switch-when=\"support_external_ui\"></i>\r" +
    "\n" +
    "                            <i class=\"fa fa-cubes\" ng-switch-when=\"support_external_dev\"></i>\r" +
    "\n" +
    "                            <i class=\"fa fa-refresh\" ng-switch-when=\"automation_basic\"></i>\r" +
    "\n" +
    "                            <i class=\"fa fa-caret-square-o-up\" ng-switch-when=\"device_enhancements\"></i>\r" +
    "\n" +
    "                            <i class=\"fa fa-file-code-o\" ng-switch-when=\"developers_stuff\"></i>\r" +
    "\n" +
    "                            <i class=\"fa fa-link\" ng-switch-when=\"complex_applications\"></i>\r" +
    "\n" +
    "                            <i class=\"fa fa-chevron-right\" ng-switch-when=\"automation\"></i>\r" +
    "\n" +
    "                            <i class=\"fa fa-shield\" ng-switch-when=\"security\"></i>\r" +
    "\n" +
    "                            <i class=\"fa fa-bolt\" ng-switch-when=\"peripherals\"></i>\r" +
    "\n" +
    "                            <i class=\"fa fa-chevron-right\" ng-switch-when=\"logging\"></i>\r" +
    "\n" +
    "                            <i class=\"fa fa-chevron-right\" ng-switch-when=\"scripting\"></i>\r" +
    "\n" +
    "                            <i class=\"fa fa-cogs\" ng-switch-when=\"devices\"></i>\r" +
    "\n" +
    "                            <i class=\"fa fa-chevron-right\" ng-switch-when=\"scheduling\"></i>\r" +
    "\n" +
    "                            <i class=\"fa fa-chevron-right\" ng-switch-when=\"climate\"></i>\r" +
    "\n" +
    "                            <i class=\"fa fa-chevron-right\" ng-switch-when=\"environment\"></i>\r" +
    "\n" +
    "                            <i class=\"fa fa-chevron-right\" ng-switch-when=\"scenes\"></i>\r" +
    "\n" +
    "                            <i class=\"fa fa-calendar\" ng-switch-when=\"notifications\"></i>\r" +
    "\n" +
    "                            <i class=\"fa fa-tags\" ng-switch-when=\"tagging\"></i> \r" +
    "\n" +
    "                            {{v.name|cutText:true:30}} <span class=\"page-navi-icon\"><i class=\"fa fa-chevron-right\"></i></span>\r" +
    "\n" +
    "                        </a>\r" +
    "\n" +
    "                    </li>\r" +
    "\n" +
    "                </ul>\r" +
    "\n" +
    "            </div>\r" +
    "\n" +
    "        </div>\r" +
    "\n" +
    "        \r" +
    "\n" +
    "        <div class=\"row row-page\" id=\"_page_app_local\">\r" +
    "\n" +
    "            <div class=\"col-lg-4 col-md-6 col-sm-6 app-entry\" \r" +
    "\n" +
    "                 ng-class=\"dataHolder.modules.ids[v.modulename] ? 'app-entry-green': ''\" \r" +
    "\n" +
    "                 ng-repeat=\"v in dataHolder.onlineModules.all| orderBy:'title' | filter:q track by v.id\">\r" +
    "\n" +
    "                <div class=\"app-border app-gradient app-shadow app-entry-in\" ng-class=\"dataHolder.modules.ids[v.modulename] ? 'app-gradient-green': ''\">\r" +
    "\n" +
    "                    <img class=\"app-image\" alt=\"{{v.title}}\" \r" +
    "\n" +
    "                         ng-src=\"{{v.icon ? onlineMediaUrl + v.icon : 'storage/img/placeholder-img.png'}}\" \r" +
    "\n" +
    "                         ng-click=\"redirectToRoute(dataHolder.modules.ids[v.modulename] ? false : 'apps/online/' + v.modulename)\" />\r" +
    "\n" +
    "                    <div class=\"app-body\">\r" +
    "\n" +
    "                        <h3 class=\"entry-title\">\r" +
    "\n" +
    "                            <a href=\"#apps/online/{{v.modulename}}\" ng-if=\"dataHolder.modules.ids.indexOf(v.modulename) === -1\">{{v.title}}  &raquo;</a>\r" +
    "\n" +
    "                            <span ng-if=\"dataHolder.modules.ids.indexOf(v.modulename) !== -1\" ng-bind=\"v.title\"></span>\r" +
    "\n" +
    "                        </h3>\r" +
    "\n" +
    "\r" +
    "\n" +
    "                    </div>\r" +
    "\n" +
    "                    <div class=\"app-footer\">\r" +
    "\n" +
    "                        <div class=\"app-footer-in\">\r" +
    "\n" +
    "                            <!-- Download -->\r" +
    "\n" +
    "                            <button href=\"\" class=\"btn btn-default btn-sm\" ng-click=\"installModule(v.file, 'online_install')\" ng-if=\"!dataHolder.modules.ids[v.modulename]\">\r" +
    "\n" +
    "                                <i class=\"fa fa-download fa-lg text-success\"></i> <span class=\"btn-name_\">{{_t('lb_download')}}</span>\r" +
    "\n" +
    "                            </button> \r" +
    "\n" +
    "                            <!-- Update -->\r" +
    "\n" +
    "                            <button href=\"\" class=\"btn btn-default btn-sm\" ng-click=\"updateModule(v.file, _t('app_update_confirm'))\" ng-if=\"dataHolder.modules.ids[v.modulename] && dataHolder.modules.ids[v.modulename].version != v.version\">\r" +
    "\n" +
    "                                <i class=\"fa fa-level-up fa-lg text-primary\"></i> <span class=\"btn-name_\">{{_t('update_to_latest')}}</span>\r" +
    "\n" +
    "                            </button> \r" +
    "\n" +
    "                            <!-- Installed -->\r" +
    "\n" +
    "                            <button class=\"btn btn-default btn-sm\" disabled ng-if=\"dataHolder.modules.ids[v.modulename] && dataHolder.modules.ids[v.modulename].version == v.version\">\r" +
    "\n" +
    "                                <i class=\"fa fa-check fa-lg\"></i> <span class=\"btn-name_\">{{_t('installed')}}</span>\r" +
    "\n" +
    "                            </button> \r" +
    "\n" +
    "                        </div>\r" +
    "\n" +
    "                    </div>\r" +
    "\n" +
    "                </div>\r" +
    "\n" +
    "            </div>\r" +
    "\n" +
    "        </div>\r" +
    "\n" +
    "\r" +
    "\n" +
    "    </div> <!-- /ng-controller --> \r" +
    "\n" +
    "</div> <!-- /ng-controller --> "
  );


  $templateCache.put('app/views/apps/apps_online_id.html',
    "<!-- AppOnlineDetailController -->\r" +
    "\n" +
    "<div ng-controller=\"AppOnlineDetailController\">\r" +
    "\n" +
    "     <bb-loader></bb-loader>\r" +
    "\n" +
    "    <div class=\"app-border app-gradient app-shadow app-detail-header\">\r" +
    "\n" +
    "        <div class=\"app-detail-header-in\" ng-if=\"module\">\r" +
    "\n" +
    "            <div class=\"app-detail-img\">\r" +
    "\n" +
    "              <img class=\"app-image-detail\" ng-src=\"{{onlineMediaUrl + module.icon}}\" ng-if=\"module.icon\" alt=\"{{module.title}}\" />\r" +
    "\n" +
    "                <img class=\"app-image-detail\" ng-src=\"storage/img/placeholder-img.png\" ng-if=\"!module.icon\" alt=\"{{module.title}}\" />\r" +
    "\n" +
    "            </div>\r" +
    "\n" +
    "\r" +
    "\n" +
    "            <div class=\"app-detail-body\">\r" +
    "\n" +
    "                <h2 ng-bind=\"module.title\"></h2>\r" +
    "\n" +
    "                <p class=\"app-detail-perex\" ng-bind-html=\"module.description|toTrusted\"></p>\r" +
    "\n" +
    "                <p class=\"app-detail-list\" ng-show=\"module.category\">\r" +
    "\n" +
    "                    <i class=\"fa fa-list fa-lg\"></i> <span ng-bind=\"categoryName\"></span>\r" +
    "\n" +
    "                </p>\r" +
    "\n" +
    "                <p class=\"app-detail-list\" ng-show=\"module.author\">\r" +
    "\n" +
    "                    <i class=\"fa fa-user fa-lg\"></i>\r" +
    "\n" +
    "                    <span ng-show=\"!module.homepage\" ng-bind=\"module.author\"></span>\r" +
    "\n" +
    "                    <a ng-href=\"{{module.homepage}}\" ng-show=\"module.homepage\" ng-bind=\"module.author\"></a> \r" +
    "\n" +
    "                </p>\r" +
    "\n" +
    "                <p class=\"app-detail-list\" ng-show=\"module.version\">\r" +
    "\n" +
    "                    <i class=\"fa fa-info-circle fa-lg\"></i> <span class=\"app-version\" ng-bind=\"module.version\"></span>\r" +
    "\n" +
    "                    <span class=\"label\"\r" +
    "\n" +
    "                          ng-class=\"module.maturity == 'stable' ? 'label-success':'label-warning'\"\r" +
    "\n" +
    "                          >{{module.maturity}}</span>\r" +
    "\n" +
    "                </p> \r" +
    "\n" +
    "                <p class=\"app-detail-list\" ng-show=\"module.last_updated\">\r" +
    "\n" +
    "                    <i class=\"fa fa-clock-o fa-lg\"></i> <span ng-bind=\"module.last_updated\"></span>\r" +
    "\n" +
    "                </p>\r" +
    "\n" +
    "                \r" +
    "\n" +
    "            </div>\r" +
    "\n" +
    "        </div>\r" +
    "\n" +
    "    </div>\r" +
    "\n" +
    "     <div class=\"fieldset submit-entry\">\r" +
    "\n" +
    "        <button type=\"button\" class=\"btn btn-default\" bb-go-back><i class=\"fa fa-times  text-danger\"></i> <span ng-bind=\"_t('lb_cancel')\"></span></button>\r" +
    "\n" +
    "        <button class=\"btn btn-submit\" ng-click=\"downloadModule(module.modulename)\" ng-if=\"!local.installed\">\r" +
    "\n" +
    "            <i class=\"fa fa-lg text-success fa-download\"></i> <span class=\"btn-name_\">{{_t('lb_download')}}</span>\r" +
    "\n" +
    "        </button> \r" +
    "\n" +
    "        <button class=\"btn btn-default\" disabled ng-if=\"local.installed\">\r" +
    "\n" +
    "            <i class=\"fa fa-check fa-lg\"></i> <span class=\"btn-name_\">{{_t('installed')}}</span>\r" +
    "\n" +
    "        </button>\r" +
    "\n" +
    "     </div>\r" +
    "\n" +
    "</div> <!-- /ng-controller --> "
  );


  $templateCache.put('app/views/apps/navi.html',
    "<div class=\"tabs-container\">\r" +
    "\n" +
    "    <ul class=\"nav nav-tabs nav-tabs-3\" role=\"tablist\">\r" +
    "\n" +
    "        <li ng-class=\"activeTab == 'local' ? 'active' : ''\">\r" +
    "\n" +
    "            <a href=\"#apps/local\">\r" +
    "\n" +
    "                <i class=\"fa fa-cloud-download fa-lg tab-icon\"></i> <span class=\"tab-name\">{{_t('lb_local_modules')}}</span>\r" +
    "\n" +
    "            </a>\r" +
    "\n" +
    "        </li>\r" +
    "\n" +
    "        <li ng-class=\"activeTab == 'online' ? 'active' : ''\">\r" +
    "\n" +
    "            <a href=\"#apps/online\">\r" +
    "\n" +
    "                <i class=\"fa fa-globe fa-lg tab-icon\"></i> <span class=\"tab-name\">{{_t('lb_online_modules')}}</span>\r" +
    "\n" +
    "            </a>\r" +
    "\n" +
    "        </li>\r" +
    "\n" +
    "        <li ng-class=\"activeTab == 'instance' ? 'active' : ''\">\r" +
    "\n" +
    "            <a href=\"#apps/instance\">\r" +
    "\n" +
    "                <i class=\"fa fa-cog fa-fire tab-icon\"></i> <span class=\"tab-name\">{{_t('lb_active')}}</span>\r" +
    "\n" +
    "            </a>\r" +
    "\n" +
    "        </li>\r" +
    "\n" +
    "    </ul>\r" +
    "\n" +
    "</div>\r" +
    "\n"
  );


  $templateCache.put('app/views/auth/login.html',
    "<!-- Login view -->\r" +
    "\n" +
    "<div ng-controller=\"LoginController\" class=\"mobile-padding\">\r" +
    "\n" +
    "    <bb-loader></bb-loader>\r" +
    "\n" +
    "    <div ng-if=\"input.form\">\r" +
    "\n" +
    "    <div class=\"login-lang\" ng-if=\"!input.fromexpert\">\r" +
    "\n" +
    "       <a href=\"\" ng-repeat=\"v in cfg.lang_list\" class=\"lang-item\" ng-click=\"setLoginLang(v)\">\r" +
    "\n" +
    "        <img ng-src=\"app/img/flags/{{v}}.png\" alt=\"{{v}}\"/>\r" +
    "\n" +
    "    </a> \r" +
    "\n" +
    "    </div>\r" +
    "\n" +
    "    \r" +
    "\n" +
    "    <div class=\"welcome-screen\" ng-if=\"!lastLogin\">\r" +
    "\n" +
    "        <h1 ng-bind=\"_t('welcome_1')\"></h1>\r" +
    "\n" +
    "        <p ng-bind=\"_t('welcome_2')\"></p>\r" +
    "\n" +
    "        <div class=\"alert alert-warning\"><i class=\"fa fa-exclamation-triangle\"></i> <span  ng-bind=\"_t('welcome_3')\"></span></div>\r" +
    "\n" +
    "        \r" +
    "\n" +
    "    </div>\r" +
    "\n" +
    "    <bb-alert alert=\"alert\"></bb-alert>\r" +
    "\n" +
    "    \r" +
    "\n" +
    "    <form name=\"form_login\" id=\"form_login\" class=\"form form-page\" ng-submit=\"login(input)\" novalidate>\r" +
    "\n" +
    "        <fieldset>\r" +
    "\n" +
    "            <h3><i class=\"fa fa-chevron-down\"></i> <span ng-bind=\"_t('nav_login')\"></span></h3>\r" +
    "\n" +
    "            <!-- login -->\r" +
    "\n" +
    "            <div class=\"form-group\">\r" +
    "\n" +
    "                <input name=\"login\" id=\"login\" type=\"text\" class=\"form-control\" placeholder=\"{{_t('lb_login')}}\" value=\"{{input.login}}\" ng-model=\"input.login\" />\r" +
    "\n" +
    "            </div>\r" +
    "\n" +
    "            <!-- password -->\r" +
    "\n" +
    "            <div class=\"form-group\">\r" +
    "\n" +
    "                <input name=\"password\" id=\"password\" type=\"password\" class=\"form-control\" placeholder=\"{{_t('lb_password')}}\" value=\"\" ng-model=\"input.password\" />\r" +
    "\n" +
    "            </div>\r" +
    "\n" +
    "            <!--<p>\r" +
    "\n" +
    "                <a href=\"#passwordforgot\"><i class=\"fa fa-question-circle text-primary\"></i> {{_t('password_forgot')}}</a>\r" +
    "\n" +
    "                    \r" +
    "\n" +
    "            </p>-->\r" +
    "\n" +
    "        </fieldset>\r" +
    "\n" +
    "       <div class=\"form-footer\">\r" +
    "\n" +
    "            <button type=\"submit\" class=\"btn btn-primary btn-block\" ng-bind=\"_t('lb_enter')\"></button>\r" +
    "\n" +
    "        </div>\r" +
    "\n" +
    "    </form>\r" +
    "\n" +
    "    </div>\r" +
    "\n" +
    "</div>"
  );


  $templateCache.put('app/views/auth/logout.html',
    "<!-- Logoutview -->\r" +
    "\n" +
    "<div ng-controller=\"LogoutController\" class=\"mobile-padding\">\r" +
    "\n" +
    "    <bb-loader></bb-loader> \r" +
    "\n" +
    "</div>"
  );


  $templateCache.put('app/views/auth/password.html',
    "<!-- Passwort change -->\r" +
    "\n" +
    "<div ng-controller=\"PasswordController\" class=\"mobile-padding\">\r" +
    "\n" +
    "    <bb-loader></bb-loader> \r" +
    "\n" +
    "    <div class=\"alert alert-warning\"><i class=\"fa fa-exclamation-circle\"></i> {{_t('password_info')}}</div>\r" +
    "\n" +
    "    <form name=\"form_password\" id=\"form_password\" class=\"form form-page\" ng-submit=\"changePassword(form_password, input)\" novalidate>\r" +
    "\n" +
    "        <!-- password -->    \r" +
    "\n" +
    "        <fieldset>\r" +
    "\n" +
    "            <label class=\"isrequired\">{{_t('lb_new_password')}}: </label>\r" +
    "\n" +
    "            <input name=\"password\" id=\"password\" type=\"password\" class=\"form-control\" value=\"\" ng-model=\"input.password\" ng-blur=\"passwordBlur = true\" ng-required=\"true\" ng-minlength=\"6\" />\r" +
    "\n" +
    "            <bb-validator input-name='form_password.password.$error.required' trans='_t(\"field_required\")' has-blur='passwordBlur'></bb-validator> \r" +
    "\n" +
    "            <bb-validator input-name='form_password.password.$error.minlength' trans='_t(\"password_valid\")' has-blur='passwordBlur'></bb-validator>\r" +
    "\n" +
    "\r" +
    "\n" +
    "        </fieldset>\r" +
    "\n" +
    "        <!-- confirm password -->  \r" +
    "\n" +
    "        <fieldset>\r" +
    "\n" +
    "            <label class=\"isrequired\">{{_t('confirm_password')}}: </label>\r" +
    "\n" +
    "             <input name=\"password_confirm\" id=\"password_confirm\" type=\"password\" class=\"form-control\" value=\"\" ng-blur=\"passwordConfirmBlur = true\" ng-model=\"input.passwordConfirm\" bb-compare-to=\"password\" />\r" +
    "\n" +
    "             <bb-validator input-name='form_password.password_confirm.$error.compareto' trans='_t(\"passwords_must_match\")' has-blur='passwordConfirmBlur'></bb-validator>\r" +
    "\n" +
    "            \r" +
    "\n" +
    "           \r" +
    "\n" +
    "        </fieldset>\r" +
    "\n" +
    "      \r" +
    "\n" +
    "        <fieldset>\r" +
    "\n" +
    "             <div class=\"form-group\">\r" +
    "\n" +
    "                 <label>{{_t('lb_email')}}: </label>\r" +
    "\n" +
    "                 <input name=\"email\" id=\"email\" type=\"email\" class=\"form-control\" value=\"\" ng-model=\"input.email\" ng-blur=\"emailBlur = true\" />\r" +
    "\n" +
    "                 <bb-validator input-name='form_password.email.$error.required' trans='_t(\"field_required\")' has-blur='emailBlur'></bb-validator> \r" +
    "\n" +
    "                 <bb-validator input-name='form_password.email.$error.email' trans='_t(\"email_invalid\")' has-blur='emailBlur'></bb-validator> \r" +
    "\n" +
    "                 </div>\r" +
    "\n" +
    "        </fieldset>\r" +
    "\n" +
    "        <fieldset class=\"submit-entry\">\r" +
    "\n" +
    "            <button type=\"submit\" class=\"btn btn-submit\" ng-disabled=\"form_password.$invalid\"><i class=\"fa fa-check\"></i> <span ng-bind=\"_t('lb_submit')\"></span></button>\r" +
    "\n" +
    "        </fieldset>\r" +
    "\n" +
    "    </form>\r" +
    "\n" +
    "</div>"
  );


  $templateCache.put('app/views/auth/password_forgot.html',
    "<!-- Passwort change -->\r" +
    "\n" +
    "<div ng-controller=\"PasswordForgotController\" class=\"mobile-padding\">\r" +
    "\n" +
    "    <bb-loader></bb-loader> \r" +
    "\n" +
    "    <bb-alert alert=\"passwordForgot.alert\"></bb-alert>\r" +
    "\n" +
    "    <form name=\"form_password\" id=\"form_password\" class=\"form form-page\" ng-submit=\"sendEmail(form_password, passwordForgot)\" novalidate ng-hide=\"passwordForgot.alert.status == 'alert-success'\">\r" +
    "\n" +
    "        <fieldset>\r" +
    "\n" +
    "            <h3><i class=\"fa fa-chevron-down\"></i> {{_t('password_forgot_info')}}</h3>\r" +
    "\n" +
    "            \r" +
    "\n" +
    "             <div class=\"form-group\">\r" +
    "\n" +
    "                 <label class=\"isrequired\">{{_t('lb_email')}}: </label>\r" +
    "\n" +
    "                 <input name=\"email\" id=\"email\" type=\"email\" class=\"form-control\" value=\"\" ng-model=\"passwordForgot.input.email\" ng-blur=\"emailBlur = true\" ng-required=\"true\" />\r" +
    "\n" +
    "                 <bb-validator input-name='form_password.email.$error.required' trans='_t(\"field_required\")' has-blur='emailBlur'></bb-validator> \r" +
    "\n" +
    "                 <bb-validator input-name='form_password.email.$error.email' trans='_t(\"email_invalid\")' has-blur='emailBlur'></bb-validator> \r" +
    "\n" +
    "                 </div>\r" +
    "\n" +
    "        </fieldset>\r" +
    "\n" +
    "        <fieldset class=\"submit-entry\">\r" +
    "\n" +
    "            <button type=\"submit\" class=\"btn btn-submit\" ng-disabled=\"form_password.$invalid\"><i class=\"fa fa-check\"></i> <span ng-bind=\"_t('lb_submit')\"></span></button>\r" +
    "\n" +
    "        </fieldset>\r" +
    "\n" +
    "    </form>\r" +
    "\n" +
    "</div>"
  );


  $templateCache.put('app/views/auth/password_reset.html',
    "<!-- Passwort change -->\r" +
    "\n" +
    "<div ng-controller=\"PasswordResetController\" class=\"mobile-padding\">\r" +
    "\n" +
    "    <bb-loader></bb-loader>\r" +
    "\n" +
    "     <bb-alert alert=\"passwordReset.alert\"></bb-alert>\r" +
    "\n" +
    "    <form name=\"form_password\" id=\"form_password\" class=\"form form-page\" ng-submit=\"changePassword(form_password, passwordReset.input)\" novalidate ng-if=\"passwordReset.input.id !== null\">\r" +
    "\n" +
    "        <!-- password -->    \r" +
    "\n" +
    "        <fieldset>\r" +
    "\n" +
    "            <h3><i class=\"fa fa-chevron-down\"></i> {{_t('password_reset')}}</h3>\r" +
    "\n" +
    "            <div class=\"form-group\">\r" +
    "\n" +
    "            <label class=\"isrequired\">{{_t('lb_new_password')}}: </label>\r" +
    "\n" +
    "            <input name=\"password\" id=\"password\" type=\"password\" class=\"form-control\" value=\"\" ng-model=\"passwordReset.input.password\" ng-blur=\"passwordBlur = true\" ng-required=\"true\" ng-minlength=\"6\" />\r" +
    "\n" +
    "            <bb-validator input-name='form_password.password.$error.required' trans='_t(\"field_required\")' has-blur='passwordBlur'></bb-validator> \r" +
    "\n" +
    "            <bb-validator input-name='form_password.password.$error.minlength' trans='_t(\"password_valid\")' has-blur='passwordBlur'></bb-validator>\r" +
    "\n" +
    "            </div>\r" +
    "\n" +
    "            <div class=\"form-group\">\r" +
    "\n" +
    "            <label class=\"isrequired\">{{_t('confirm_password')}}: </label>\r" +
    "\n" +
    "             <input name=\"password_confirm\" id=\"password_confirm\" type=\"password\" class=\"form-control\" value=\"\" ng-blur=\"passwordConfirmBlur = true\" ng-model=\"passwordReset.input.passwordConfirm\" bb-compare-to=\"password\" />\r" +
    "\n" +
    "             <bb-validator input-name='form_password.password_confirm.$error.compareto' trans='_t(\"passwords_must_match\")' has-blur='passwordConfirmBlur'></bb-validator>\r" +
    "\n" +
    "            \r" +
    "\n" +
    "           </div>\r" +
    "\n" +
    "        </fieldset>\r" +
    "\n" +
    "      \r" +
    "\n" +
    "        <fieldset class=\"submit-entry\">\r" +
    "\n" +
    "            <button type=\"submit\" class=\"btn btn-submit\" ng-disabled=\"form_password.$invalid\"><i class=\"fa fa-check\"></i> <span ng-bind=\"_t('lb_submit')\"></span></button>\r" +
    "\n" +
    "        </fieldset>\r" +
    "\n" +
    "    </form>\r" +
    "\n" +
    "</div>"
  );


  $templateCache.put('app/views/camera/camera_add.html',
    "<!-- Camera add view -->\r" +
    "\n" +
    "<div ng-controller=\"CameraAddController\">\r" +
    "\n" +
    "    <div ng-show=\"ipcameraDevices\">\r" +
    "\n" +
    "        <table class=\"table table-condensed table-report table-products\">\r" +
    "\n" +
    "            <tbody>\r" +
    "\n" +
    "                <tr ng-repeat=\"v in ipcameraDevices | orderBy:'defaults.title' track by v.moduleName \">\r" +
    "\n" +
    "                    <td class=\"td-img\">\r" +
    "\n" +
    "                        <img class=\"product-img\" ng-src=\"{{moduleMediaUrl + v.moduleName + '/' + v.icon}}\" ng-if=\"v.icon\" alt=\"img\" />\r" +
    "\n" +
    "                        <img class=\"product-img\" ng-src=\"storage/img/icons/camera.png\" ng-if=\"!v.icon\" alt=\"img\" />\r" +
    "\n" +
    "                    </td>\r" +
    "\n" +
    "                    <td ng-bind=\"v.defaults.title\"></td>\r" +
    "\n" +
    "                    <td class=\"td-camera-action\">\r" +
    "\n" +
    "                        <a href=\"#module/post/{{v.id}}\" class=\"btn btn-default\"><i class=\"fa fa-plug text-primary\"></i> {{_t('lb_include_device')}}</a>\r" +
    "\n" +
    "\r" +
    "\n" +
    "                    </td>\r" +
    "\n" +
    "                </tr>\r" +
    "\n" +
    "            </tbody>\r" +
    "\n" +
    "        </table>\r" +
    "\n" +
    "    </div>\r" +
    "\n" +
    "    <div class=\"device-logo\" ng-include=\"'app/views/camera/camera_nav.html'\"></div>\r" +
    "\n" +
    "</div> <!-- /ng-controller --> \r" +
    "\n" +
    "\r" +
    "\n"
  );


  $templateCache.put('app/views/camera/camera_manage.html',
    "<!-- Camera manage view -->\r" +
    "\n" +
    "<div ng-controller=\"CameraManageController\">\r" +
    "\n" +
    "    <table id=\"table_apps_instance\" class=\"table table-condensed table-report table-products\">\r" +
    "\n" +
    "        <tbody>\r" +
    "\n" +
    "            <tr class=\"bcg-active\" ng-repeat=\"v in instances |orderBy:'title' track by v.id\" id=\"instance_{{$index}}\" ng-class=\"v.active ? 'true': 'false'\">\r" +
    "\n" +
    "                <td class=\"td-img\">\r" +
    "\n" +
    "                    <img class=\"product-img\" ng-src=\"{{modules.mediaUrl + v.moduleId + '/' + modules.imgs[v.moduleId]}}\" ng-if=\"modules.imgs[v.moduleId]\" alt=\"img\" />\r" +
    "\n" +
    "                    <img class=\"product-img\" ng-src=\"storage/img/placeholder-img.png\" ng-if=\"!modules.imgs[v.moduleId]\" alt=\"img\" />\r" +
    "\n" +
    "                    <!-- <img class=\"report-img\" ng-src=\"storage/img/apps/app.png\" alt=\"icon\" />-->\r" +
    "\n" +
    "                </td>\r" +
    "\n" +
    "                <td>\r" +
    "\n" +
    "                   <a href=\"#module/put/{{v.id}}\"><span ng-bind=\"v.title\"></span> <span ng-bind=\"_t('lb_use')\"></span> <strong ng-bind=\"v.module\"></strong></a>\r" +
    "\n" +
    "                </td>\r" +
    "\n" +
    "                <td class=\"td-action\">\r" +
    "\n" +
    "                    <a href=\"#module/put/{{v.id}}\" class=\"btn btn-default btn-sm\">\r" +
    "\n" +
    "                        <i class=\"fa fa-cog fa-lg\"></i>\r" +
    "\n" +
    "                    </a>\r" +
    "\n" +
    "                    <button title=\"{{_t('lb_deactivate')}}\" \r" +
    "\n" +
    "                            class=\"btn btn-default btn-sm\" href=\"\" \r" +
    "\n" +
    "                            ng-show=\"v.active\"\r" +
    "\n" +
    "                            ng-click=\"activateInstance(v, false)\"\r" +
    "\n" +
    "                            >\r" +
    "\n" +
    "                        <i class=\"fa fa-power-off fa-lg text-primary\"></i> <span class=\"btn-name\" ng-bind=\"_t('lb_deactivate')\"></span>\r" +
    "\n" +
    "                    </button>\r" +
    "\n" +
    "                    <button title=\"{{_t('lb_activate')}}\" \r" +
    "\n" +
    "                            class=\"btn btn-default btn-sm\" \r" +
    "\n" +
    "                            ng-show=\"!v.active\" \r" +
    "\n" +
    "                            ng-click=\"activateInstance(v, true)\r" +
    "\n" +
    "                            \">\r" +
    "\n" +
    "                        <i class=\"fa fa-refresh fa-lg text-success\"></i> <span class=\"btn-name\" ng-bind=\"_t('lb_activate')\"></span>\r" +
    "\n" +
    "                    </button>\r" +
    "\n" +
    "                    <button title=\"{{_t('lb_remove')}}\" \r" +
    "\n" +
    "                            class=\"btn btn-default btn-sm\"\r" +
    "\n" +
    "                            ng-click=\"deleteInstance('#instance_' + $index, {'id': v.id}, _t('lb_delete_confirm'))\"\r" +
    "\n" +
    "                            >\r" +
    "\n" +
    "                        <i class=\"fa fa-remove fa-lg text-danger\"></i> <span class=\"btn-name\" ng-bind=\"_t('lb_remove')\"></span>\r" +
    "\n" +
    "                    </button>\r" +
    "\n" +
    "                </td>\r" +
    "\n" +
    "            </tr>\r" +
    "\n" +
    "        </tbody>\r" +
    "\n" +
    "    </table>\r" +
    "\n" +
    "    <div class=\"device-logo\" ng-include=\"'app/views/camera/camera_nav.html'\"></div>\r" +
    "\n" +
    "</div> <!-- /ng-controller --> \r" +
    "\n" +
    "\r" +
    "\n"
  );


  $templateCache.put('app/views/camera/camera_nav.html',
    "<!-- Nav zwave -->\r" +
    "\n" +
    "<a href=\"#devices\"><img class=\"apps-image\" ng-src=\"app/img/logo-camera.png\" alt=\"Logo\" /></a>"
  );


  $templateCache.put('app/views/devices/devices.html',
    "<!-- Devicess view -->\r" +
    "\n" +
    "<div ng-controller=\"DeviceController\">\r" +
    "\n" +
    "        <h2  class=\"mobile-padding\" ng-bind=\"_t('lb_select_device_type')\"></h2>\r" +
    "\n" +
    "        <table class=\"table table-report table-products\">\r" +
    "\n" +
    "            <tbody>\r" +
    "\n" +
    "                <tr>\r" +
    "\n" +
    "                    <td>\r" +
    "\n" +
    "                        <img class=\"device-type-logo\" ng-src=\"app/img/logo-zwave.png\" alt=\"Logo\" />\r" +
    "\n" +
    "                    </td>\r" +
    "\n" +
    "                    <td class=\"td-action\">\r" +
    "\n" +
    "                         <a class=\"btn btn-default\" href=\"\" ng-click=\"toExpert('/expert',_t('redirect_to_expert'))\" ng-if=\"elementAccess(cfg.role_access.admin,isMobile) && cfg.app_type === 'default'\">\r" +
    "\n" +
    "                            <i class=\"fa fa-external-link\"></i> <span class=\"btn-name\" ng-bind=\"_t('manage_with_expertui')\"></span>\r" +
    "\n" +
    "                        </a>\r" +
    "\n" +
    "                        <a class=\"btn btn-default\" href=\"#zwave/add\">\r" +
    "\n" +
    "                            <i class=\"fa fa-plus text-success\"></i> <span class=\"btn-name\" ng-bind=\"_t('add_new')\"></span>\r" +
    "\n" +
    "                        </a>\r" +
    "\n" +
    "                        <a class=\"btn btn-default\" href=\"#zwave/devices\">\r" +
    "\n" +
    "                            <i class=\"fa fa-edit text-primary\"></i> <span class=\"btn-name\" ng-bind=\"_t('manage')\"></span>\r" +
    "\n" +
    "                        </a>\r" +
    "\n" +
    "                    </td>\r" +
    "\n" +
    "                </tr>\r" +
    "\n" +
    "                <tr>\r" +
    "\n" +
    "                    <td>\r" +
    "\n" +
    "                        <img class=\"device-type-logo\" ng-src=\"app/img/logo-camera.png\" alt=\"Logo\" />\r" +
    "\n" +
    "                    </td>\r" +
    "\n" +
    "                   <td class=\"td-action\">\r" +
    "\n" +
    "                        <a class=\"btn btn-default\" href=\"#camera/add\">\r" +
    "\n" +
    "                            <i class=\"fa fa-plus text-success\"></i> <span class=\"btn-name\" ng-bind=\"_t('add_new')\"></span>\r" +
    "\n" +
    "                        </a>\r" +
    "\n" +
    "                       <a class=\"btn btn-default\" href=\"#camera/manage\">\r" +
    "\n" +
    "                            <i class=\"fa fa-edit text-primary\"></i> <span class=\"btn-name\" ng-bind=\"_t('manage')\"></span>\r" +
    "\n" +
    "                        </a> \r" +
    "\n" +
    "                    </td>\r" +
    "\n" +
    "                </tr>\r" +
    "\n" +
    "                <tr ng-if=\"enocean.installed\">\r" +
    "\n" +
    "                    <td>\r" +
    "\n" +
    "                        <img class=\"device-type-logo\" ng-src=\"app/img/logo-enocean.png\" alt=\"Logo\" />\r" +
    "\n" +
    "                    </td>\r" +
    "\n" +
    "                     <td class=\"td-action\">\r" +
    "\n" +
    "                          <bb-alert-text alert=\"enocean.alert\"></bb-alert-text>\r" +
    "\n" +
    "                          <div ng-if=\"enocean.active\">\r" +
    "\n" +
    "                          <a class=\"btn btn-default\" href=\"#enocean/devices\">\r" +
    "\n" +
    "                            <i class=\"fa fa-plus text-success\"></i> <span class=\"btn-name\" ng-bind=\"_t('add_new')\"></span>\r" +
    "\n" +
    "                        </a>\r" +
    "\n" +
    "                         <a class=\"btn btn-default\" href=\"#enocean/manage\">\r" +
    "\n" +
    "                            <i class=\"fa fa-edit text-primary\"></i> <span class=\"btn-name\" ng-bind=\"_t('manage')\"></span>\r" +
    "\n" +
    "                        </a> \r" +
    "\n" +
    "                        </div>\r" +
    "\n" +
    "                    </td>\r" +
    "\n" +
    "                </tr>\r" +
    "\n" +
    "            </tbody>\r" +
    "\n" +
    "        </table>\r" +
    "\n" +
    "</div> <!-- /ng-controller --> "
  );


  $templateCache.put('app/views/dir-pagination.html',
    "<ul class=\"pagination\" ng-if=\"1 < pages.length\">\r" +
    "\n" +
    "    <li ng-if=\"boundaryLinks\" ng-class=\"{ disabled : pagination.current == 1 }\">\r" +
    "\n" +
    "        <a href=\"\" ng-click=\"setCurrent(1)\">&laquo;</a>\r" +
    "\n" +
    "    </li>\r" +
    "\n" +
    "    <li ng-if=\"directionLinks\" ng-class=\"{ disabled : pagination.current == 1 }\" class=\"ng-scope\">\r" +
    "\n" +
    "        <a href=\"\" ng-click=\"setCurrent(pagination.current - 1)\" class=\"ng-binding\">‹</a>\r" +
    "\n" +
    "    </li>\r" +
    "\n" +
    "    <li ng-repeat=\"pageNumber in pages track by $index\" ng-class=\"{ active : pagination.current == pageNumber, disabled : pageNumber == '...' }\">\r" +
    "\n" +
    "        <a href=\"\" ng-click=\"setCurrent(pageNumber)\">{{ pageNumber }}</a>\r" +
    "\n" +
    "    </li>\r" +
    "\n" +
    "\r" +
    "\n" +
    "    <li ng-if=\"directionLinks\" ng-class=\"{ disabled : pagination.current == pagination.last }\" class=\"ng-scope\">\r" +
    "\n" +
    "        <a href=\"\" ng-click=\"setCurrent(pagination.current + 1)\" class=\"ng-binding\">›</a>\r" +
    "\n" +
    "    </li>\r" +
    "\n" +
    "    <li ng-if=\"boundaryLinks\"  ng-class=\"{ disabled : pagination.current == pagination.last }\">\r" +
    "\n" +
    "        <a href=\"\" ng-click=\"setCurrent(pagination.last)\">&raquo;</a>\r" +
    "\n" +
    "    </li>\r" +
    "\n" +
    "</ul>"
  );


  $templateCache.put('app/views/elements/dragdrop.html',
    "<!-- Elements 1 view -->\r" +
    "\n" +
    "<div class=\"simpleDemo\" ng-controller=\"DragDropController\">\r" +
    "\n" +
    "    <h1>Drag & Drop</h1>\r" +
    "\n" +
    "    \r" +
    "\n" +
    "<!--<ul class=\"dragdrop\" dnd-list=\"models.list\">\r" +
    "\n" +
    "    <li class=\"itemlist\" ng-repeat=\"item in models.list\"\r" +
    "\n" +
    "        dnd-draggable=\"item\"\r" +
    "\n" +
    "        dnd-moved=\"itemMoved($index, 1)\"\r" +
    "\n" +
    "        dnd-effect-allowed=\"move\"\r" +
    "\n" +
    "        dnd-selected=\"models.selected = item\"\r" +
    "\n" +
    "        ng-class=\"{'selected': models.selected === item}\"\r" +
    "\n" +
    "        >\r" +
    "\n" +
    "        {{item.label}}\r" +
    "\n" +
    "    </li>\r" +
    "\n" +
    "</ul>-->\r" +
    "\n" +
    "    \r" +
    "\n" +
    "    \r" +
    "\n" +
    "<ul class=\"dragdrop\" dnd-list=\"elements.list\">\r" +
    "\n" +
    "    <li class=\"itemlist\" ng-repeat=\"v in elements.list\"\r" +
    "\n" +
    "        dnd-draggable=\"v\"\r" +
    "\n" +
    "        dnd-moved=\"elementMoved($index, 1)\"\r" +
    "\n" +
    "        dnd-effect-allowed=\"move\"\r" +
    "\n" +
    "        dnd-selected=\"elements.selected = v\"\r" +
    "\n" +
    "        ng-class=\"{'selected': elements.selected === v}\"\r" +
    "\n" +
    "        >\r" +
    "\n" +
    "        {{v.metrics.title}}\r" +
    "\n" +
    "    </li>\r" +
    "\n" +
    "</ul>\r" +
    "\n" +
    "</div> <!-- /ng-controller --> "
  );


  $templateCache.put('app/views/elements/element.html',
    "<!-- Element view -->\r" +
    "\n" +
    "<div ng-controller=\"ElementDetailController\" class=\"mobile-padding\">\r" +
    "\n" +
    "    <bb-loader></bb-loader>\r" +
    "\n" +
    "    <div ng-show=\"input\">\r" +
    "\n" +
    "        <h2><span ng-bind=\"_t('lb_cfg_view')\"></span>: <span ng-bind=\"input.metrics.title\"></span></h2>\r" +
    "\n" +
    "        <form name=\"form_element\" id=\"form_element\" class=\"form form-page\" ng-submit=\"store(input)\" novalidate>\r" +
    "\n" +
    "            <fieldset ng-if=\"elementAccess(cfg.role_access.admin)\">\r" +
    "\n" +
    "                <p class=\"form-control-static\">\r" +
    "\n" +
    "                            <span ng-bind=\"_t('element_id')\"></span>: <strong ng-bind=\"input.id\"></strong>\r" +
    "\n" +
    "                        </p>\r" +
    "\n" +
    "                <div class=\"form-group_\">\r" +
    "\n" +
    "                    <label ng-bind=\"_t('lb_element_name')\">{{}}:</label>\r" +
    "\n" +
    "                    <input name=\"title\" id=\"title\" type=\"text\" class=\"form-control\" value=\"{{input.metrics.title}}\" placeholder=\"{{_t('lb_element_name')}}\" ng-model=\"input.title\" />\r" +
    "\n" +
    "                </div>\r" +
    "\n" +
    "            </fieldset>\r" +
    "\n" +
    "            <fieldset>\r" +
    "\n" +
    "                <h3><i class=\"fa fa-chevron-down\"></i> <span ng-bind=\"_t('lb_configuration')\"></span></h3>\r" +
    "\n" +
    "                 <div>\r" +
    "\n" +
    "                    <!-- instance -->\r" +
    "\n" +
    "                    <div class=\"form-group\" ng-if=\"input.appType.instance\">\r" +
    "\n" +
    "                        <span ng-bind=\"_t('lb_gen_by_module')\"></span> \r" +
    "\n" +
    "                        <a class=\"btn btn-default btn-sm\" ng-href=\"#module/put/{{input.appType.instance.id}}\">\r" +
    "\n" +
    "                            <strong ng-bind=\"input.appType.instance.title\"></strong> - <span ng-bind=\"input.appType.instance.module\"></span>\r" +
    "\n" +
    "                        </a>\r" +
    "\n" +
    "                    </div>\r" +
    "\n" +
    "                    <!-- zwave -->\r" +
    "\n" +
    "                    <div class=\"form-group\" ng-if=\"input.appType.zwave\">\r" +
    "\n" +
    "                        <span ng-bind=\"_t('lb_gen_by')\"></span> <a href=\"#zwave/devices/{{input.appType.zwave}}\" class=\"btn btn-default btn-sm\"><span ng-bind=\"_t('lb_zwave_device')\"></span> #{{input.appType.zwave}}</a>\r" +
    "\n" +
    "                    </div>\r" +
    "\n" +
    "                    <!-- enocean -->\r" +
    "\n" +
    "                    <div class=\"form-group\" ng-if=\"input.appType.enocean\">\r" +
    "\n" +
    "                        <span ng-bind=\"_t('lb_gen_by')\"></span> <a href=\"#enocean/manage/{{input.appType.enocean}}\" class=\"btn btn-default btn-sm\"><span ng-bind=\"_t('enocean_device')\"></span> #{{input.appType.enocean}}</a>\r" +
    "\n" +
    "                    </div>\r" +
    "\n" +
    "                    \r" +
    "\n" +
    "                    <!-- dashboard etc -->\r" +
    "\n" +
    "                    <div class=\"form-group\">\r" +
    "\n" +
    "                        <div>\r" +
    "\n" +
    "                            <input type=\"checkbox\" name=\"dashboard\" value=\"{{input.dashboard}}\" id=\"dashboard\" ng-model=\"input.dashboard\" ng-checked=\"input.dashboard\" /> <label ng-bind=\"_t('lb_add_dashboard')\"></label>\r" +
    "\n" +
    "                        </div>\r" +
    "\n" +
    "                        <div ng-if=\"elementAccess(cfg.role_access.admin) && input.cfg.zwaveId\"> \r" +
    "\n" +
    "                            <input type=\"checkbox\" name=\"permanently_hidden\" id=\"permanently_hidden\" value=\"\" \r" +
    "\n" +
    "                                   ng-model=\"input.permanently_hidden\" \r" +
    "\n" +
    "                                   ng-checked=\"input.permanently_hidden\"   \r" +
    "\n" +
    "                                   _ng-confirm-click_=\"This means that you can never use this element again. Are you sure?\" /> <label ng-bind=\"_t('lb_permanently_hide')\"></label>\r" +
    "\n" +
    "                        </div>\r" +
    "\n" +
    "                        <div>\r" +
    "\n" +
    "                            <input type=\"checkbox\" name=\"hide_events\" value=\"{{input.id}}\" id=\"hide_events\" ng-model=\"input.hide_events\" ng-checked=\"user.hide_single_device_events.indexOf(input.id) === -1 ? false : true\" /> <label ng-bind=\"_t('lb_hide_events_device')\"></label>\r" +
    "\n" +
    "                        </div>\r" +
    "\n" +
    "                    </div>\r" +
    "\n" +
    "                    <!-- Rooms -->\r" +
    "\n" +
    "                    <div class=\"form-group form-inline\" ng-if=\"elementAccess(cfg.role_access.admin)\">\r" +
    "\n" +
    "                        <label>{{_t('lb_assign_room')}} </label>\r" +
    "\n" +
    "                        <select class=\"form-control\" ng-model=\"input.location\">\r" +
    "\n" +
    "                            <!-- <option value=\"\">--- Select one ---</option>-->\r" +
    "\n" +
    "                            <option ng-repeat=\"v in rooms\" ng-selected=\"input.location == v.id\" value=\"{{v.id}}\" ng-bind=\"(v.id === 0 ? _t(v.title) : v.title)\"></option>\r" +
    "\n" +
    "                        </select>\r" +
    "\n" +
    "                    </div>\r" +
    "\n" +
    "\r" +
    "\n" +
    "                </div>\r" +
    "\n" +
    "            </fieldset>\r" +
    "\n" +
    "            <fieldset  ng-if=\"elementAccess(cfg.role_access.admin)\">\r" +
    "\n" +
    "                <h3><i class=\"fa fa-chevron-down\"></i> <span ng-bind=\"_t('lb_tags')\"></span></h3>\r" +
    "\n" +
    "                \r" +
    "\n" +
    "                    <div class=\"form-group_ clearfix\">\r" +
    "\n" +
    "                        <div class=\"btn-device\" id=\"tag_{{$index}}\" ng-repeat=\"t in input.tags\">{{t}} \r" +
    "\n" +
    "                            <a href=\"\" ng-click=\"removeTag($index)\"><i class=\"fa fa-times text-danger\"></i></a>\r" +
    "\n" +
    "                        </div>\r" +
    "\n" +
    "                    </div>\r" +
    "\n" +
    "                <br />\r" +
    "\n" +
    "                \r" +
    "\n" +
    "                    <div class=\"form-group_\">\r" +
    "\n" +
    "                    <div class=\"btn-group dropup form-inline\">\r" +
    "\n" +
    "                       <input name=\"add_tag\" id=\"add_tag\" type=\"text\" class=\"form-control\" value=\"\" placeholder=\"{{_t('lb_add_tag')}}\" ng-model=\"searchText\" bb-key-event=\"searchMe(searchText);\" data-toggle=\"dropdown\" />\r" +
    "\n" +
    "                        <button type=\"button\" class=\"btn btn-default btn-tag\" ng-click=\"addTag(searchText)\"><i class=\"fa fa-plus text-success\"></i></button>\r" +
    "\n" +
    "                        <ul class=\"dropdown-menu\" ng-if=\"autoCompletePanel\">\r" +
    "\n" +
    "                            <li href=\"\" ng-click=\"addTag(v)\" ng-repeat=\"v in suggestions\"><a href=\"\"><span ng-bind=\"v\"></span> <i class=\"fa fa-plus text-success\"></i></a></li>\r" +
    "\n" +
    "                        </ul>\r" +
    "\n" +
    "                       \r" +
    "\n" +
    "                    </div>\r" +
    "\n" +
    "                </div>\r" +
    "\n" +
    "\r" +
    "\n" +
    "\r" +
    "\n" +
    "            </fieldset>\r" +
    "\n" +
    "            <!-- Submit -->\r" +
    "\n" +
    "            <fieldset class=\"submit-entry\">\r" +
    "\n" +
    "                 <button type=\"button\" class=\"btn btn-default\" bb-go-back><i class=\"fa fa-times text-danger\"></i> <span ng-bind=\"_t('lb_cancel')\"></span></button>\r" +
    "\n" +
    "                 <button type=\"submit\" class=\"btn btn-submit\"><i class=\"fa fa-check\"></i> <span ng-bind=\"_t('lb_save')\"></span></button>\r" +
    "\n" +
    "            </fieldset>\r" +
    "\n" +
    "        </form>\r" +
    "\n" +
    "    </div>\r" +
    "\n" +
    "\r" +
    "\n" +
    "</div> <!-- /ng-controller --> "
  );


  $templateCache.put('app/views/elements/elements.html',
    "<!-- Elements 1 view -->\r" +
    "\n" +
    "<div ng-controller=\"ElementController\">\r" +
    "\n" +
    "    <bb-loader></bb-loader>\r" +
    "\n" +
    "    <h1 ng-if=\"headline\" ng-bind=\"headline\"></h1>\r" +
    "\n" +
    "    <bb-alert alert=\"alert\"></bb-alert>\r" +
    "\n" +
    "    <div class=\"dashboard-welcome\" ng-if=\"welcome\" ng-include=\"'app/views/elements/welcome.html'\"></div>\r" +
    "\n" +
    "    <div class=\"row\">\r" +
    "\n" +
    "        <div ng-if=\"v.visibility === true\" id=\"Widget_{{v.id}}\" class=\"col-lg-4 col-md-6 col-sm-6 widget-entry\" ng-repeat=\"v in collection| filter:q | orderBy: '-creationTime' track by v.id\">\r" +
    "\n" +
    "            <div class=\"widget-block {{v.deviceType}} {{v.probeType}}\" ng-switch=\"v.deviceType\" ng-init=\"levelVal[v.id] = v.level\">\r" +
    "\n" +
    "\r" +
    "\n" +
    "                <!-- {{v.id}}: {{levelVal[v.id]}} icon {{v.icon}} -->\r" +
    "\n" +
    "                <div class=\"widget-block-in clearfix app-border app-gradient app-shadow is-new-{{v.cfg.isNew}}\" ng-class=\"v.level === 'ALERT'? 'app-gradient-red' :  (v.level === 'OK!'? 'app-gradient-yellow' : (v.level === 'OK'? 'app-gradient-green' : ''))\">\r" +
    "\n" +
    "                    <!-- Widget icon -->\r" +
    "\n" +
    "                    <!-- icon of widget type text -->\r" +
    "\n" +
    "                    <img id=\"widget_img_{{v.id}}\" ng-if=\"v.deviceType === 'text'\" ng-show=\"v.metrics.icon\" class=\"widget-image\" ng-src=\"{{v.metrics.icon}}\" alt=\"{{v.title}}\" ng-click=\"showModal('#modal_promo', {'type': v.deviceType, 'title': v.title, 'text': v.metrics.text, 'url': v.metrics.icon})\" />\r" +
    "\n" +
    "\r" +
    "\n" +
    "                    <!-- icon of widget type sensorMultiline -->\r" +
    "\n" +
    "                    <img id=\"widget_img_{{v.id}}\" ng-if=\"v.deviceType === 'sensorMultiline'\" class=\"widget-image\" ng-src=\"{{v.icon|getElementIcon:v:levelVal[v.id]}}\" alt=\"{{v.title}}\" ng-click=\"loadMultilineSensor('#modal_multiline', v.id, v, 'sensors')\"/>\r" +
    "\n" +
    "\r" +
    "\n" +
    "                    <!-- default icon -->\r" +
    "\n" +
    "                    <img id=\"widget_img_{{v.id}}\" class=\"widget-image\" ng-if=\"cfg.element_update_icon.indexOf(v.deviceType) === - 1 && v.deviceType !== 'text' && v.deviceType !== 'sensorMultiline'\" ng-src=\"{{v.icon|getElementIcon:v:levelVal[v.id]}}\" alt=\"img\" />\r" +
    "\n" +
    "                    <!-- with update cmd -->\r" +
    "\n" +
    "                    <a href=\"\" ng-click=\"runCmd(v.id + '/command/' + (v.deviceType === 'switchControl' ? 'on' : 'update'))\" ng-if=\"cfg.element_update_icon.indexOf(v.deviceType) > - 1\">\r" +
    "\n" +
    "                        <img id=\"widget_img_{{v.id}}\" class=\"widget-image  widget-img-update\" ng-src=\"{{v.icon|getElementIcon:v:levelVal[v.id]}}\" alt=\"img\" />\r" +
    "\n" +
    "                    </a>\r" +
    "\n" +
    "\r" +
    "\n" +
    "                    <!-- Widget header -->\r" +
    "\n" +
    "                    <div class=\"widget-header\">\r" +
    "\n" +
    "                        <a class=\"widget-history\" href=\"\" ng-click=\"loadDeviceHistory(v.id)\" ng-if=\"v.hasHistory\"><i class=\"fa fa-history fa-lg\"></i></a>\r" +
    "\n" +
    "                        <a class=\"widget-config\" href=\"#element/{{v.id}}\" ng-if=\"elementAccess(cfg.role_access.element)\"><i class=\"fa fa-cog fa-lg\"></i></a>\r" +
    "\n" +
    "                    </div> \r" +
    "\n" +
    "\r" +
    "\n" +
    "                    <!-- Widget body -->\r" +
    "\n" +
    "                    <div class=\"widget-body\" ng-class=\"{'text-widget': v.deviceType == 'text','text-widget-no-img': v.deviceType == 'text' && v.metrics.icon == ''}\" ng-mouseleave=\"goHidden[v.id] = false; goHistory[v.id] = false;\" >\r" +
    "\n" +
    "                        <div class=\"widget-content-wrap\">\r" +
    "\n" +
    "                            <span class=\"widget-room\"><span ng-if=\"v.location !== 0\">{{rooms[v.location].title|cutText:true:25}}</span>&nbsp;</span>\r" +
    "\n" +
    "                            <!-- title of widget type text -->\r" +
    "\n" +
    "                            <h3 ng-if=\"v.deviceType === 'text'\" class=\"entry-title\" title=\"{{v.title}}\" ng-click=\"showModal('#modal_promo', {'type': v.deviceType, 'title': v.title, 'text': v.metrics.text, 'url': v.metrics.icon})\">{{v.title|cutText:true:25}}</h3>\r" +
    "\n" +
    "\r" +
    "\n" +
    "                            <!-- title of widget type sensorMultiline MultilineSensor-->\r" +
    "\n" +
    "                            <h3 ng-if=\"v.deviceType === 'sensorMultiline' && v.metrics.multilineType == 'multilineSensor'\" class=\"entry-title\" title=\"{{v.title}}\" ng-click=\"loadMultilineSensor('#modal_multiline', v.id, v, 'sensors')\">{{v.title|cutText:true:25}}</h3>\r" +
    "\n" +
    "\r" +
    "\n" +
    "                            <!-- title of widget type sensorMultiline FireProtection-->\r" +
    "\n" +
    "                            <h3 ng-if=\"v.deviceType === 'sensorMultiline' && v.metrics.multilineType == 'protection'\" class=\"entry-title\" title=\"{{v.title}}\" ng-click=\"loadMultilineSensor('#modal_multiline', v.id, v, 'sensors')\">{{v.title|cutText:true:25}}</h3>\r" +
    "\n" +
    "                            <!-- title of widget type sensorMultiline multilineType-->\r" +
    "\n" +
    "                            <h3 ng-if=\"v.deviceType === 'sensorMultiline' && v.metrics.multilineType == 'climateControl'\" class=\"entry-title\" title=\"{{v.title}}\">{{v.title|cutText:true:25}}</h3>\r" +
    "\n" +
    "\r" +
    "\n" +
    "                            <!-- title of widget type sensorMultiline OpenWeather-->\r" +
    "\n" +
    "                            <h3 ng-if=\"v.deviceType === 'sensorMultiline' && v.metrics.multilineType == 'openWeather'\" class=\"entry-title\" title=\"{{v.title}}\" ng-click=\"goHidden[v.id] = !goHidden[v.id]\">{{v.title|cutText:true:25}}</h3>\r" +
    "\n" +
    "\r" +
    "\n" +
    "                            <!-- default title -->\r" +
    "\n" +
    "                            <h3 ng-if=\"v.deviceType !== 'text' && v.deviceType !== 'sensorMultiline'\" class=\"entry-title\" title=\"{{v.title}}\" ng-click=\"goHidden[v.id] = !goHidden[v.id]\">{{v.title|cutText:true:25}}</h3>\r" +
    "\n" +
    "\r" +
    "\n" +
    "                        </div>\r" +
    "\n" +
    "                        <div class=\"widget-control-wrap clearfix\">\r" +
    "\n" +
    "                            <!-- ////////// switchMultilevel ////////// -->\r" +
    "\n" +
    "                            <div ng-switch-when=\"switchMultilevel\">\r" +
    "\n" +
    "                                <div class=\"widget-control control-right widget-click-popup\" ng-click=\"goHidden[v.id] = !goHidden[v.id]\">\r" +
    "\n" +
    "                                    <i class=\"fa fa-caret-down\"></i> <span class=\"widget-level\" ng-bind=\"levelVal[v.id] | getMaxLevel:v.probeType\"></span><span class=\"widget-scale\">%</span>\r" +
    "\n" +
    "                                </div>\r" +
    "\n" +
    "                                <div class=\"widget-control control-left\">\r" +
    "\n" +
    "                                    <div class=\"btn-group\" ng-if=\"v.metrics.icon == 'blinds'\">\r" +
    "\n" +
    "                                        <button \r" +
    "\n" +
    "                                            class=\"btn btn-sm widget-btn-off\" \r" +
    "\n" +
    "                                            id=\"btn_off_{{ v.id}}\"\r" +
    "\n" +
    "                                            data-ng-click=\"levelVal[v.id] == 0; runCmd(v.id + '/command/off', v.id); goHidden = false\"\r" +
    "\n" +
    "                                            ng-class=\"levelVal[v.id] < 1 ? 'btn-primary': 'btn-default'\"\r" +
    "\n" +
    "                                            title=\"{{_t('lb_down')}}\"><i class=\"fa fa-arrow-down\"></i> <span class=\"widget-btn-label\">{{_t('lb_down')}}</span></button>\r" +
    "\n" +
    "                                        <button \r" +
    "\n" +
    "                                            class=\"btn btn-sm widget-btn-on\" \r" +
    "\n" +
    "                                            id=\"btn_on_{{ v.id}}\"\r" +
    "\n" +
    "                                            data-ng-click=\"levelVal[v.id] == 99; runCmd(v.id + '/command/on', v.id); goHidden = false\"\r" +
    "\n" +
    "                                            ng-class=\"levelVal[v.id] > 0 ? 'btn-primary': 'btn-default'\"\r" +
    "\n" +
    "                                            title=\"{{_t('lb_up')}}\"><i class=\"fa fa-arrow-up\"></i> <span class=\"widget-btn-label\">{{_t('lb_up')}}</span></button>\r" +
    "\n" +
    "                                    </div>\r" +
    "\n" +
    "                                    <div class=\"btn-group\" ng-if=\"v.metrics.icon == 'multilevel'\">\r" +
    "\n" +
    "                                        <button \r" +
    "\n" +
    "                                            class=\"btn btn-sm widget-btn-off\" \r" +
    "\n" +
    "                                            id=\"btn_off_{{ v.id}}\"\r" +
    "\n" +
    "                                            data-ng-click=\"levelVal[v.id] == v.minMax.min; runCmd(v.id + '/command/off', v.id); goHidden = false\"\r" +
    "\n" +
    "                                            ng-class=\"levelVal[v.id] < 1 ? 'btn-primary': 'btn-default'\"\r" +
    "\n" +
    "                                            title=\"{{_t('lb_off')}}\"><span class=\"widget-btn-symbol\">0</span> <span class=\"widget-btn-label\">{{_t('lb_off')}}</span></button>\r" +
    "\n" +
    "                                        <button \r" +
    "\n" +
    "                                            class=\"btn btn-sm widget-btn-on\" \r" +
    "\n" +
    "                                            id=\"btn_on_{{ v.id}}\"\r" +
    "\n" +
    "                                            data-ng-click=\"levelVal[v.id] == v.minMax.min; runCmd(v.id + '/command/on', v.id); goHidden = false\"\r" +
    "\n" +
    "                                            ng-class=\"levelVal[v.id] > 0 ? 'btn-primary': 'btn-default'\"\r" +
    "\n" +
    "                                            title=\"{{_t('lb_on')}}\"><span class=\"widget-btn-symbol\">I</span> <span class=\"widget-btn-label\">{{_t('lb_on')}}</span></button>\r" +
    "\n" +
    "                                            <button \r" +
    "\n" +
    "                                            class=\"btn btn-sm widget-btn-full\" \r" +
    "\n" +
    "                                            id=\"btn_on_{{ v.id}}\"\r" +
    "\n" +
    "                                            data-ng-click=\"levelVal[v.id] == v.minMax.max; runCmdExact(v.id, v.minMax.max, v.minMax.min, v.minMax.max); goHidden = false\"\r" +
    "\n" +
    "                                            ng-class=\"levelVal[v.id] == v.minMax.max ? 'btn-primary': 'btn-default'\"\r" +
    "\n" +
    "                                            title=\"{{_t('lb_on')}}\"><i class=\"fa fa-arrow-up text-primary\"></i> <span class=\"widget-btn-label\">{{_t('lb_full')}}</span></button>\r" +
    "\n" +
    "                                    </div>\r" +
    "\n" +
    "                                </div>\r" +
    "\n" +
    "\r" +
    "\n" +
    "                            </div>\r" +
    "\n" +
    "\r" +
    "\n" +
    "                            <!-- ////////// switchBinary ////////// -->\r" +
    "\n" +
    "                            <div ng-switch-when=\"switchBinary\">\r" +
    "\n" +
    "                                <div class=\"widget-control control-right\">\r" +
    "\n" +
    "                                    <div class=\"btn-group widget-btn-on-off\">\r" +
    "\n" +
    "                                        <button \r" +
    "\n" +
    "                                            class=\"btn btn-sm widget-btn-off\" \r" +
    "\n" +
    "                                            id=\"btn_off_{{ v.id}}\"\r" +
    "\n" +
    "                                            data-ng-click=\"levelVal[v.id] = 'off'; runCmd(v.id + '/command/off', v.id)\"\r" +
    "\n" +
    "                                            ng-class=\"levelVal[v.id]=='off' ? 'btn-primary': 'btn-default'\"\r" +
    "\n" +
    "                                            title=\"{{_t('lb_off')}}\"><span class=\"widget-btn-symbol\">0</span> <span class=\"widget-btn-label\">{{_t('lb_off')}}</span></button>\r" +
    "\n" +
    "                                        <button \r" +
    "\n" +
    "                                            class=\"btn btn-sm widget-btn-on\" \r" +
    "\n" +
    "                                            id=\"btn_on_{{ v.id}}\"\r" +
    "\n" +
    "                                            data-ng-click=\"levelVal[v.id] = 'on'; runCmd(v.id + '/command/on', v.id)\"\r" +
    "\n" +
    "                                            ng-class=\"levelVal[v.id]=='on' ? 'btn-primary': 'btn-default'\"\r" +
    "\n" +
    "                                            title=\"{{_t('lb_on')}}\"><span class=\"widget-btn-symbol\">I</span> <span class=\"widget-btn-label\">{{_t('lb_on')}}</span></button>\r" +
    "\n" +
    "                                    </div>\r" +
    "\n" +
    "                                </div>\r" +
    "\n" +
    "                                <div class=\"widget-control control-left\">\r" +
    "\n" +
    "\r" +
    "\n" +
    "                                </div>\r" +
    "\n" +
    "                            </div><!-- /.widget-control .right --> \r" +
    "\n" +
    "\r" +
    "\n" +
    "                            <!-- ////////// switchRGBW ////////// -->\r" +
    "\n" +
    "                            <div  ng-switch-when=\"switchRGBW\" ng-init=\"rgbVal[v.id] = v.rgbColors\">\r" +
    "\n" +
    "                                <!-- <div class=\"widget-control control-right widget-click-popup\" \r" +
    "\n" +
    "                                     colorpicker=\"rgb\" ng-model=\"rgbVal[v.id]\"\r" +
    "\n" +
    "                                     cmdurl=\"{{cfg.server_url + cfg.api_url}}devices/{{v.id}}/command/exact\"\r" +
    "\n" +
    "                                     sid=\"{{ZWAYSession}}\"\r" +
    "\n" +
    "                                     lang=\"{{lang}}\"\r" +
    "\n" +
    "                                     ng-click=\"showColor = !showColor\">\r" +
    "\n" +
    "                                     <span class=\"color-picker-show\" style=\"background-color: {{rgbVal[v.id]}};\">&nbsp;</span> <span>RGB <i class=\"fa fa-caret-down\"></i></span> -->\r" +
    "\n" +
    "                                     <div class=\"widget-control control-right widget-click-popup\" ng-click=\"loadRgbWheel('#modal_rgb_wheel', v.id,v)\">\r" +
    "\n" +
    "                                     <span class=\"color-picker-show\" style=\"background-color: {{rgbVal[v.id]}};\">&nbsp;</span> <span>RGB <i class=\"fa fa-caret-down\"></i></span>\r" +
    "\n" +
    "                                </div>\r" +
    "\n" +
    "                                <div class=\"widget-control control-left\">\r" +
    "\n" +
    "                                    <div class=\"btn-group\"> \r" +
    "\n" +
    "\r" +
    "\n" +
    "                                        <button \r" +
    "\n" +
    "                                            class=\"btn widget-btn-off btn-sm\" \r" +
    "\n" +
    "                                            id=\"btn_off_{{ v.id}}\"\r" +
    "\n" +
    "                                            ng-class=\"levelVal[v.id]=='off' ? 'btn-primary': 'btn-default'\"\r" +
    "\n" +
    "                                            data-ng-click=\"levelVal[v.id] = 'off'; runCmd(v.id + '/command/off', v.id)\"\r" +
    "\n" +
    "                                            title=\"{{_t('lb_off')}}\"><span class=\"widget-btn-symbol\">0</span> <span class=\"widget-btn-label\">{{_t('lb_off')}}</span></button>\r" +
    "\n" +
    "                                        <button \r" +
    "\n" +
    "                                            class=\"btn widget-btn-on btn-sm\" \r" +
    "\n" +
    "                                            id=\"btn_on_{{ v.id}}\"\r" +
    "\n" +
    "                                            ng-class=\"levelVal[v.id]=='on' ? 'btn-primary': 'btn-default'\"\r" +
    "\n" +
    "                                            data-ng-click=\"levelVal[v.id] = 'on'; runCmd(v.id + '/command/on', v.id)\"\r" +
    "\n" +
    "                                            title=\"{{_t('lb_on')}}\"><span class=\"widget-btn-symbol\">I</span> <span class=\"widget-btn-label\">{{_t('lb_on')}}</span></button>\r" +
    "\n" +
    "                                    </div>\r" +
    "\n" +
    "                                </div><!-- /.widget-control .right --> \r" +
    "\n" +
    "                            </div><!-- /switchRGBW --> \r" +
    "\n" +
    "                            <!-- ////////// /switchRGBW ////////// -->\r" +
    "\n" +
    "\r" +
    "\n" +
    "                            <!-- ////////// doorlock ////////// -->\r" +
    "\n" +
    "                            <div class=\"widget-control control-right\" ng-switch-when=\"doorlock\">\r" +
    "\n" +
    "                                <div class=\"btn-group\">\r" +
    "\n" +
    "                                    <button \r" +
    "\n" +
    "                                        class=\"btn widget-btn-off btn-sm\"\r" +
    "\n" +
    "                                        ng-class=\"levelVal[v.id]=='close' ? 'btn-primary': 'btn-default'\"\r" +
    "\n" +
    "                                        data-ng-click=\"levelVal[v.id] = 'close'; runCmd(v.id + '/command/close', v.id)\"\r" +
    "\n" +
    "                                        ><i class=\"fa fa-lock\"></i>\r" +
    "\n" +
    "                                    </button>\r" +
    "\n" +
    "                                    <button \r" +
    "\n" +
    "                                        class=\"btn widget-btn-on btn-sm\"\r" +
    "\n" +
    "                                        ng-class=\"levelVal[v.id]=='open' ? 'btn-primary': 'btn-default'\"\r" +
    "\n" +
    "                                        data-ng-click=\"levelVal[v.id] = 'open'; runCmd(v.id + '/command/open', v.id)\"\r" +
    "\n" +
    "                                        ><i class=\"fa fa-unlock\"></i>\r" +
    "\n" +
    "                                    </button>\r" +
    "\n" +
    "                                </div>\r" +
    "\n" +
    "                            </div><!-- /.widget-control .right -->\r" +
    "\n" +
    "                            <!-- ////////// /doorlock ////////// -->\r" +
    "\n" +
    "\r" +
    "\n" +
    "                            <!-- ////////// doorLockControl ////////// -->\r" +
    "\n" +
    "                            <div ng-switch-when=\"doorLockControl\">\r" +
    "\n" +
    "                                <div class=\"widget-control control-right widget-click-popup\" ng-click=\"loadDoorLock('#modal_doorlock', v.id, v)\">\r" +
    "\n" +
    "                                    <i class=\"fa fa-caret-down\"></i> <span class=\"widget-level\">Closed at</span> <span>{{v.updateTime|isToday:true:_t('lb_days'):_t('lb_yesterday')}}</span>\r" +
    "\n" +
    "                                </div>\r" +
    "\n" +
    "                                <div class=\"widget-control control-left\"> \r" +
    "\n" +
    "                                    <div class=\"btn-group\">\r" +
    "\n" +
    "                                        <button \r" +
    "\n" +
    "                                            class=\"btn widget-btn-off btn-sm\"\r" +
    "\n" +
    "                                            ng-class=\"levelVal[v.id]=='close' ? 'btn-primary': 'btn-default'\"\r" +
    "\n" +
    "                                            data-ng-click=\"levelVal[v.id] = 'closed'; runCmd(v.id + '/command/close', v.id)\"\r" +
    "\n" +
    "                                            ><i class=\"fa fa-lock\"></i>\r" +
    "\n" +
    "                                        </button>\r" +
    "\n" +
    "                                        <button \r" +
    "\n" +
    "                                            class=\"btn widget-btn-on btn-sm\"\r" +
    "\n" +
    "                                            ng-class=\"levelVal[v.id]=='open' ? 'btn-primary': 'btn-default'\"\r" +
    "\n" +
    "                                            data-ng-click=\"levelVal[v.id] = 'open'; runCmd(v.id + '/command/open', v.id)\"\r" +
    "\n" +
    "                                            ><i class=\"fa fa-unlock\"></i>\r" +
    "\n" +
    "                                        </button>\r" +
    "\n" +
    "                                    </div>\r" +
    "\n" +
    "                                </div><!-- /.widget-control .right --> \r" +
    "\n" +
    "                            </div>\r" +
    "\n" +
    "                            <!-- ////////// /doorLockControl ////////// -->\r" +
    "\n" +
    "\r" +
    "\n" +
    "                            <!-- ////////// toggleButton ////////// -->\r" +
    "\n" +
    "                            <div ng-switch-when=\"toggleButton\">\r" +
    "\n" +
    "                                <div class=\"widget-control control-right\">\r" +
    "\n" +
    "                                    <div class=\"btn-group\">\r" +
    "\n" +
    "                                        <button \r" +
    "\n" +
    "                                            class=\"btn btn-sm btn-default\" \r" +
    "\n" +
    "                                            ng-click=\"runCmd(v.id + '/command/on')\"  title=\"{{_t('lb_on')}}\">\r" +
    "\n" +
    "                                            <span class=\"widget-btn-label-on\">{{_t('lb_on')}}</span>\r" +
    "\n" +
    "                                        </button>\r" +
    "\n" +
    "                                    </div>\r" +
    "\n" +
    "                                </div>\r" +
    "\n" +
    "                                <div class=\"widget-control control-left\">\r" +
    "\n" +
    "                                    <button class=\"btn btn-default txt-widget-time\"><i class=\"fa fa-clock-o\"></i> <span class=\"widget-update-time\">{{v.updateTime|isToday:true:_t('lb_days'):_t('lb_yesterday')}}</span></button>    \r" +
    "\n" +
    "                                </div>\r" +
    "\n" +
    "                            </div><!-- /.widget-control .right -->\r" +
    "\n" +
    "                            <!-- ////////// /toggleButton ////////// -->\r" +
    "\n" +
    "\r" +
    "\n" +
    "                            <!-- ////////// sensorMultilevel ////////// -->\r" +
    "\n" +
    "                            <div  ng-switch-when=\"sensorMultilevel\">\r" +
    "\n" +
    "                                <div class=\"widget-control control-right widget-click-popup\">\r" +
    "\n" +
    "                                    <span class=\"widget-level\" ng-bind=\"v.level\"></span> <span class=\"widget-scale\" ng-bind=\"v.scaleTitle\"></span>\r" +
    "\n" +
    "                                </div>\r" +
    "\n" +
    "\r" +
    "\n" +
    "                                <div class=\"widget-control control-left\">\r" +
    "\n" +
    "                                    <div class=\"btn-group\">\r" +
    "\n" +
    "                                        <button class=\"btn btn-default btn-sm btn-widget-time\" ng-click=\"runCmd(v.id + '/command/update')\"> <i class=\"fa fa-clock-o\"></i> <span class=\"widget-update-time\">{{v.updateTime|isToday:true:_t('lb_days'):_t('lb_yesterday')}}</span></button>\r" +
    "\n" +
    "                                    </div>\r" +
    "\n" +
    "                                </div><!-- /.widget-control .right -->\r" +
    "\n" +
    "                            </div>\r" +
    "\n" +
    "                            <!-- ////////// /sensorMultilevel ////////// -->\r" +
    "\n" +
    "\r" +
    "\n" +
    "                            <!-- ////////// sensorBinary ////////// -->\r" +
    "\n" +
    "                            <div  ng-switch-when=\"sensorBinary\">\r" +
    "\n" +
    "                                <div class=\"widget-control control-right widget-click-popup\">\r" +
    "\n" +
    "                                    <span class=\"widget-level\" ng-bind=\"v.level\"></span> <span class=\"widget-scale\" ng-bind=\"v.scaleTitle\"></span>\r" +
    "\n" +
    "                                </div>\r" +
    "\n" +
    "\r" +
    "\n" +
    "                                <div class=\"widget-control control-left\">\r" +
    "\n" +
    "                                    <div class=\"btn-group\">\r" +
    "\n" +
    "                                        <button class=\"btn btn-default btn-sm btn-widget-time\" ng-click=\"runCmd(v.id + '/command/update')\"> <i class=\"fa fa-clock-o\"></i> <span class=\"widget-update-time\">{{v.updateTime|isToday:true:_t('lb_days'):_t('lb_yesterday')}}</span></button>\r" +
    "\n" +
    "                                    </div>\r" +
    "\n" +
    "                                </div>\r" +
    "\n" +
    "                            </div>\r" +
    "\n" +
    "                            <!-- ////////// /sensorBinary ////////// -->\r" +
    "\n" +
    "\r" +
    "\n" +
    "                            <!-- ////////// sensorMultiline ////////// -->\r" +
    "\n" +
    "                            <div ng-switch-when=\"sensorMultiline\"> \r" +
    "\n" +
    "                                <!-- climateControl sensorMultiline -->\r" +
    "\n" +
    "                                <div ng-if=\"v.metrics.multilineType === 'climateControl'\"> \r" +
    "\n" +
    "                                    <div class=\"widget-control control-right widget-click-popup\">\r" +
    "\n" +
    "                                        <span ng-if_=\"climatePerRoom[v.id]\"><i class=\"fa fa-caret-down\"></i> <strong ng-click=\"loadClimateControl('#modal_climate_control', v.id, v)\">{{_t('lb_settings')}}</strong></span>\r" +
    "\n" +
    "                                         <!--<span class=\"text-disabled\" ng-if=\"!climatePerRoom[v.id]\"><i class=\"fa fa-caret-down\"></i> <strong>{{_t('lb_settings')}}</strong></span>-->\r" +
    "\n" +
    "                                    </div><!-- /.widget-control .left -->\r" +
    "\n" +
    "                                    <div class=\"widget-control control-left\">\r" +
    "\n" +
    "                                        <div class=\"btn-group\">\r" +
    "\n" +
    "                                            <button \r" +
    "\n" +
    "                                                class=\"btn btn-sm widget-btn widget-btn-full widget-btn-frostProtection\" \r" +
    "\n" +
    "                                                id=\"btn_frostProtection_{{ v.id}}\"\r" +
    "\n" +
    "                                                ng-click=\"runCmd(v.id + '/command/' + climateElementModes[0] + '?room=null', false); climatePerRoom[v.id] = false\"\r" +
    "\n" +
    "                                                ng-class=\"v.metrics.state =='frostProtection' ? 'btn-primary': 'btn-default'\"\r" +
    "\n" +
    "                                                title=\"{{_t(climateElementModes[0])}}\"><i class=\"fa fa-asterisk text-primary\"></i>\r" +
    "\n" +
    "                                            </button>\r" +
    "\n" +
    "                                            <button \r" +
    "\n" +
    "                                                class=\"btn btn-sm widget-btn widget-btn-full widget-btn-energySave\" \r" +
    "\n" +
    "                                                id=\"btn_energySave_{{ v.id}}\"\r" +
    "\n" +
    "                                                ng-click=\"runCmd(v.id + '/command/' + climateElementModes[1] + '?room=null', false); climatePerRoom[v.id] = false\"\r" +
    "\n" +
    "                                               ng-class=\"v.metrics.state =='energySave' ? 'btn-primary': 'btn-default'\"\r" +
    "\n" +
    "                                                title=\"{{_t(climateElementModes[1])}}\"><i class=\"fa fa-leaf text-success\"></i>\r" +
    "\n" +
    "                                            </button>\r" +
    "\n" +
    "                                            <button \r" +
    "\n" +
    "                                                class=\"btn btn-sm widget-btn widget-btn-full widget-btn-comfort\" \r" +
    "\n" +
    "                                                id=\"btn_comfort_{{ v.id}}\"\r" +
    "\n" +
    "                                                ng-click=\"runCmd(v.id + '/command/' + climateElementModes[2] + '?room=null', false); climatePerRoom[v.id] = true\"\r" +
    "\n" +
    "                                                ng-class=\"v.metrics.state =='comfort' ? 'btn-primary': 'btn-default'\"\r" +
    "\n" +
    "                                                title=\"{{_t(climateElementModes[2])}}\"><i class=\"fa fa-building text-warning\"></i>\r" +
    "\n" +
    "                                            </button>\r" +
    "\n" +
    "                                        </div>\r" +
    "\n" +
    "                                    </div><!-- /.widget-control .right -->\r" +
    "\n" +
    "                                </div>\r" +
    "\n" +
    "                                <!-- MultilineSensor sensorMultiline -->\r" +
    "\n" +
    "                                <div ng-if=\"v.metrics.multilineType === 'multilineSensor'\">\r" +
    "\n" +
    "                                    <div class=\"widget-control control-right widget-click-popup\" ng-click=\"loadMultilineSensor('#modal_multiline', v.id, v, 'sensors')\">\r" +
    "\n" +
    "                                        <i class=\"fa fa-caret-down\"></i> <span class=\"widget-level\" ng-bind=\"v.level\"></span> <span class=\"widget-scale\" ng-bind=\"v.scaleTitle\"></span>\r" +
    "\n" +
    "                                    </div><!-- /.widget-control .left -->\r" +
    "\n" +
    "                                    <div class=\"widget-control control-left\">\r" +
    "\n" +
    "                                        <div class=\"btn-group\">\r" +
    "\n" +
    "                                            <button class=\"btn btn-default btn-sm btn-widget-time\" ng-click=\"runCmd(v.id + '/command/update')\"> <i class=\"fa fa-clock-o\"></i> <span class=\"widget-update-time\">{{v.updateTime|isToday:true:_t('lb_days'):_t('lb_yesterday')}}</span></button>\r" +
    "\n" +
    "                                        </div>\r" +
    "\n" +
    "                                    </div><!-- /.widget-control .right -->\r" +
    "\n" +
    "                                </div>\r" +
    "\n" +
    "\r" +
    "\n" +
    "                                <!-- Protection sensorMultiline -->\r" +
    "\n" +
    "                                <div ng-if=\"v.metrics.multilineType === 'protection'\">\r" +
    "\n" +
    "                                    <div class=\"widget-control control-right widget-click-popup\" ng-click=\"loadMultilineSensor('#modal_multiline', v.id, v, 'sensors')\">\r" +
    "\n" +
    "                                        <i class=\"fa fa-caret-down\"></i> <span class=\"widget-level\" ng-bind=\"v.level\"></span>\r" +
    "\n" +
    "                                        <!-- <i ng-if=\"v.metrics.state == 'armed' && v.metrics.level == 'OK'\" class=\"fa fa-eye\"></i> -->\r" +
    "\n" +
    "                                    </div><!-- /.widget-control .left -->\r" +
    "\n" +
    "                                    <div class=\"widget-control control-left\">\r" +
    "\n" +
    "                                        <div class=\"btn-group\">\r" +
    "\n" +
    "                                            <button \r" +
    "\n" +
    "                                                class=\"btn btn-sm widget-btn-off\" \r" +
    "\n" +
    "                                                id=\"btn_off_{{ v.id}}\"\r" +
    "\n" +
    "                                                data-ng-click=\"v.metrics.state == 'disarmed'; runCmd(v.id + '/command/disarm', v.id)\"\r" +
    "\n" +
    "                                                ng-class=\"v.metrics.state =='disarmed' ? 'btn-primary': 'btn-default'\"\r" +
    "\n" +
    "                                                title=\"{{_t('lb_disarm')}}\"><span class=\"widget-btn-symbol\">0</span> <span class=\"widget-btn-label\">{{_t('lb_disarm')}}</span></button>\r" +
    "\n" +
    "                                            <button \r" +
    "\n" +
    "                                                class=\"btn btn-sm widget-btn-on\" \r" +
    "\n" +
    "                                                id=\"btn_on_{{ v.id}}\"\r" +
    "\n" +
    "                                                data-ng-click=\"v.metrics.state == 'armed'; runCmd(v.id + '/command/arm', v.id)\"\r" +
    "\n" +
    "                                                ng-class=\"v.metrics.state =='armed' ? 'btn-primary': 'btn-default'\"\r" +
    "\n" +
    "                                                title=\"{{_t('lb_arm')}}\"><span class=\"widget-btn-symbol\">I</span> <span class=\"widget-btn-label\">{{_t('lb_arm')}}</span></button>\r" +
    "\n" +
    "                                            <!-- <button class=\"btn btn-default btn-sm\" ng-click=\"runCmd(v.id + '/command/update')\"> <i class=\"fa fa-clock-o\"></i> <span class=\"widget-update-time\">{{v.updateTime|isToday:true:_t('lb_days'):_t('lb_yesterday')}}</span></button> -->\r" +
    "\n" +
    "                                        </div>\r" +
    "\n" +
    "                                    </div><!-- /.widget-control .right -->\r" +
    "\n" +
    "                                </div>\r" +
    "\n" +
    "\r" +
    "\n" +
    "                                <!-- OpenWeather sensorMultiline -->\r" +
    "\n" +
    "                                <div ng-if=\"v.metrics.multilineType === 'openWeather'\">\r" +
    "\n" +
    "                                    <div class=\"widget-control control-right widget-click-popup\" ng-click=\"goHidden[v.id] = !goHidden[v.id]\" ng-if=\"v.metrics.multilineType === 'openWeather'\">\r" +
    "\n" +
    "                                        <i class=\"fa fa-caret-down\"></i> <span class=\"widget-level\" ng-bind=\"v.level\"></span> <span class=\"widget-scale\" ng-bind=\"v.scaleTitle\"></span>\r" +
    "\n" +
    "                                    </div><!-- /.widget-control .left -->\r" +
    "\n" +
    "\r" +
    "\n" +
    "                                    <div class=\"widget-control control-left\">\r" +
    "\n" +
    "                                        <div class=\"btn-group\">\r" +
    "\n" +
    "                                            <button class=\"btn btn-default btn-sm btn-widget-time\" ng-click=\"runCmd(v.id + '/command/update')\"> <i class=\"fa fa-clock-o\"></i> <span class=\"widget-update-time\">{{v.updateTime|isToday:true:_t('lb_days'):_t('lb_yesterday')}}</span></button>\r" +
    "\n" +
    "                                        </div>\r" +
    "\n" +
    "                                    </div><!-- /.widget-control .right -->\r" +
    "\n" +
    "                                </div>\r" +
    "\n" +
    "\r" +
    "\n" +
    "                            </div> \r" +
    "\n" +
    "                            <!-- ////////// /sensorMultiline ////////// -->\r" +
    "\n" +
    "\r" +
    "\n" +
    "                            <!-- <div ng-switch-when=\"sensorMultiline>______\">\r" +
    "\n" +
    "                                <div class=\"widget-control control-left widget-click-popup\" ng-click=\"goHidden[v.id] = !goHidden[v.id]\">\r" +
    "\n" +
    "                                    <span class=\"widget-level\" ng-bind=\"v.level\"></span> <span ng-show=\"v.scaleTitle\" ng-bind=\"v.scaleTitle\"></span> <i class=\"fa fa-caret-down\"></i>\r" +
    "\n" +
    "                                </div>\r" +
    "\n" +
    "\r" +
    "\n" +
    "                                <div class=\"widget-control control-right\">\r" +
    "\n" +
    "                                    <div class=\"btn-group\">\r" +
    "\n" +
    "                                        <button class=\"btn btn-default btn-sm\" ng-click=\"runCmd(v.id + '/command/update')\"> <i class=\"fa fa-clock-o\"></i> <span class=\"widget-update-time\">{{v.updateTime|isToday:true}}</span></button>\r" +
    "\n" +
    "                                    </div>\r" +
    "\n" +
    "                                </div>\r" +
    "\n" +
    "                            </div> /.widget-control .right -->\r" +
    "\n" +
    "\r" +
    "\n" +
    "                            <!-- ////////// thermostat ////////// -->\r" +
    "\n" +
    "                            <div class=\"widget-control control-right widget-click-popup\" ng-switch-when=\"thermostat\" ng-click=\"goHidden[v.id] = !goHidden[v.id]\">\r" +
    "\n" +
    "                                <i class=\"fa fa-caret-down\"></i> <span class=\"widget-level\">{{levelVal[v.id]}}</span> <span class=\"widget-scale\" ng-bind=\"v.scaleTitle\"></span>\r" +
    "\n" +
    "                            </div>\r" +
    "\n" +
    "                            <!-- ////////// /thermostat ////////// -->\r" +
    "\n" +
    "\r" +
    "\n" +
    "                            <!-- ////////// switchMultilevelLinear ////////// -->\r" +
    "\n" +
    "                            <div class=\"widget-control control-right widget-click-popup\" ng-switch-when=\"switchMultilevelLinear\">\r" +
    "\n" +
    "                                <span class=\"widget-level\">{{v.level}}</span> <span class=\"widget-scale\" ng-bind=\"v.scaleTitle\"></span>\r" +
    "\n" +
    "                            </div>\r" +
    "\n" +
    "                            <!-- ////////// /switchMultilevelLinear ////////// -->\r" +
    "\n" +
    "\r" +
    "\n" +
    "                            <!-- ////////// camera ////////// -->\r" +
    "\n" +
    "                            <div class=\"widget-control control-right\" ng-switch-when=\"camera\">\r" +
    "\n" +
    "                                <a href=\"\" class=\"btn btn-default\" ng-click=\"showModal('#modal_camera', v)\"><i class=\"fa fa-video-camera text-primary\"></i></a>\r" +
    "\n" +
    "                            </div>\r" +
    "\n" +
    "                            <!-- ////////// camera ////////// -->\r" +
    "\n" +
    "\r" +
    "\n" +
    "                            <!-- ////////// text ////////// -->\r" +
    "\n" +
    "                            <div ng-switch-when=\"text\">\r" +
    "\n" +
    "                                <div class=\"widget-control control-left widget-click-popup text\">\r" +
    "\n" +
    "                                    <a href=\"\" ng-click=\"showModal('#modal_promo', {'type': v.deviceType, 'title': v.title, 'text': v.metrics.text, 'url': v.metrics.icon})\" ng-bind=\"v.metrics.text|stripTags|cutText:true:50\"></a>\r" +
    "\n" +
    "                                </div>\r" +
    "\n" +
    "                            </div>\r" +
    "\n" +
    "                            <!-- ////////// /text ////////// -->\r" +
    "\n" +
    "\r" +
    "\n" +
    "                            <!-- ////////// switchControl ////////// -->\r" +
    "\n" +
    "                            <div ng-switch-when=\"switchControl\">\r" +
    "\n" +
    "                                <div class=\"widget-control control-right\"> \r" +
    "\n" +
    "                                    <div class=\"btn-group\">\r" +
    "\n" +
    "                                        <button \r" +
    "\n" +
    "                                            class=\"btn btn-sm widget-btn-off\" \r" +
    "\n" +
    "                                            id=\"btn_off_{{ v.id}}\"\r" +
    "\n" +
    "                                            data-ng-click=\"levelVal[v.id] = 'off'; runCmd(v.id + '/command/off', v.id)\"\r" +
    "\n" +
    "                                            ng-class=\"levelVal[v.id]=='off' ? 'btn-primary': 'btn-default'\"\r" +
    "\n" +
    "                                            title=\"{{_t('lb_off')}}\"><span class=\"widget-btn-symbol\">0</span> <span class=\"widget-btn-label\">{{_t('lb_off')}}</span></button>\r" +
    "\n" +
    "                                        <button \r" +
    "\n" +
    "                                            class=\"btn btn-sm widget-btn-on\" \r" +
    "\n" +
    "                                            id=\"btn_on_{{ v.id}}\"\r" +
    "\n" +
    "                                            data-ng-click=\"levelVal[v.id] = 'on'; runCmd(v.id + '/command/on', v.id)\"\r" +
    "\n" +
    "                                            ng-class=\"levelVal[v.id]=='on' ? 'btn-primary': 'btn-default'\"\r" +
    "\n" +
    "                                            title=\"{{_t('lb_on')}}\"><span class=\"widget-btn-symbol\">I</span> <span class=\"widget-btn-label\">{{_t('lb_on')}}</span></button>\r" +
    "\n" +
    "                                    </div>\r" +
    "\n" +
    "                                </div>\r" +
    "\n" +
    "                                <div class=\"widget-control control-left\">\r" +
    "\n" +
    "\r" +
    "\n" +
    "                                </div><!-- /.widget-control .right -->\r" +
    "\n" +
    "                            </div>\r" +
    "\n" +
    "                            <!-- ////////// /switchControl ////////// -->\r" +
    "\n" +
    "\r" +
    "\n" +
    "                            <!-- ////////// buttonControl ////////// -->\r" +
    "\n" +
    "                            <!-- <div ng-switch-when=\"buttonControl\">\r" +
    "\n" +
    "                                <div class=\"widget-control control-left\">\r" +
    "\n" +
    "                                    <i class=\"fa fa-clock-o\"></i> <span class=\"widget-update-time\">{{v.updateTime|isToday:true:_t('lb_days'):_t('lb_yesterday')}}</span>\r" +
    "\n" +
    "                                    \r" +
    "\n" +
    "                                </div>\r" +
    "\n" +
    "                                 <div class=\"widget-control control-right\">\r" +
    "\n" +
    "                                      <div class=\"btn-group\">\r" +
    "\n" +
    "                                        <button class=\"btn btn-sm btn-primary widget-btn-on\" ng-click=\"runCmd(v.id + '/command/on')\"  ng-bind=\"_t('lb_on')\"></button>\r" +
    "\n" +
    "                                    </div>\r" +
    "\n" +
    "                                </div><!-- /.widget-control .right -->\r" +
    "\n" +
    "                            <!-- </div> -->\r" +
    "\n" +
    "                            <!-- ////////// / buttonControl ////////// -->\r" +
    "\n" +
    "\r" +
    "\n" +
    "                            <!-- ////////// Default ////////// -->\r" +
    "\n" +
    "                            <div class=\"widget-control control-right widget-click-popup\" ng-switch-default>\r" +
    "\n" +
    "                                <span class=\"widget-level\" ng-bind=\"v.level\"></span> <span class=\"widget-scale\" ng-bind=\"v.scaleTitle\"></span>\r" +
    "\n" +
    "                            </div>\r" +
    "\n" +
    "                            <!-- ////////// /Default ////////// -->\r" +
    "\n" +
    "\r" +
    "\n" +
    "                        </div><!-- /.widget-control-wrap --> \r" +
    "\n" +
    "\r" +
    "\n" +
    "                        <!-- ------------------------------ Hidden windows ------------------------------ -->\r" +
    "\n" +
    "\r" +
    "\n" +
    "                        <!-- History -->\r" +
    "\n" +
    "                        <div class=\"col-sm-11 element-hidden hidden-history\" ng-show=\"goHistory[v.id]\">\r" +
    "\n" +
    "                            <a class=\"hidden-close\" href=\"\" ng-click=\"goHistory[v.id] = !goHistory[v.id]\"><i class=\"fa fa-times\"></i></a>\r" +
    "\n" +
    "                            <p class=\"popup-title\">{{v.title|cutText:true:30}}</p>\r" +
    "\n" +
    "                            <div class=\"alert alert-warning\" ng-if=\"!history[v.id].data\">\r" +
    "\n" +
    "                                <i class=\"fa {{history[v.id].icon}}\"></i> <span ng-bind=\"history[v.id].message\"></span>\r" +
    "\n" +
    "                            </div>\r" +
    "\n" +
    "                            <div ng-if=\"history[v.id].data\">\r" +
    "\n" +
    "                                <canvas tc-chartjs-line chart-data=\"history[v.id].data\" chart-options=\"chartOptions\" width=\"260\" height=\"150\"></canvas>\r" +
    "\n" +
    "                            </div>\r" +
    "\n" +
    "                        </div>\r" +
    "\n" +
    "\r" +
    "\n" +
    "                        <!-- Hidden switchMultilevel -->\r" +
    "\n" +
    "                        <div class=\"col-sm-11 element-hidden hidden-switch-multilevel animate-show\" ng-switch-when=\"switchMultilevel\" ng-show=\"goHidden[v.id]\">\r" +
    "\n" +
    "                            <a class=\"hidden-close\" href=\"\" ng-click=\"goHidden[v.id] = !goHidden[v.id]\"><i class=\"fa fa-times\"></i></a>\r" +
    "\n" +
    "                            <div>\r" +
    "\n" +
    "                                <p class=\"text-center\">{{v.title}} </p>\r" +
    "\n" +
    "                                <table>\r" +
    "\n" +
    "                                    <tbody>\r" +
    "\n" +
    "                                        <tr>\r" +
    "\n" +
    "                                            <td>\r" +
    "\n" +
    "                                                <!--<myknob knob-data=\"v.level\" knob-options=\"knobopt\"></myknob> -->\r" +
    "\n" +
    "                                                <input \r" +
    "\n" +
    "                                                    type=\"text\" \r" +
    "\n" +
    "                                                    id=\"knob_{{v.id}}\"\r" +
    "\n" +
    "                                                    value=\"{{levelVal[v.id]|getMaxLevel:v.probeType}}\" \r" +
    "\n" +
    "                                                    class=\"dial widget-level-knob\" \r" +
    "\n" +
    "                                                    data-width=\"100\" \r" +
    "\n" +
    "                                                    data-height=\"100\" \r" +
    "\n" +
    "                                                    data-min=\"0\"\r" +
    "\n" +
    "                                                    data-max=\"255\" \r" +
    "\n" +
    "                                                    knob-id=\"v.id\" \r" +
    "\n" +
    "                                                    knob-data=\"v.level\" \r" +
    "\n" +
    "                                                    knob-options=\"knobopt\" \r" +
    "\n" +
    "                                                    ng-model=\"levelVal[v.id]\" myknob ng-if=\"cfg.knob_255.indexOf(v.probeType) > - 1\" /> \r" +
    "\n" +
    "                                                <input \r" +
    "\n" +
    "                                                    type=\"text\" \r" +
    "\n" +
    "                                                    id=\"knob_{{v.id}}\"\r" +
    "\n" +
    "                                                    value=\"{{levelVal[v.id]|getMaxLevel:v.probeType}}\" \r" +
    "\n" +
    "                                                    class=\"dial widget-level-knob\" \r" +
    "\n" +
    "                                                    data-width=\"100\" \r" +
    "\n" +
    "                                                    data-height=\"100\" \r" +
    "\n" +
    "                                                    data-min=\"0\"\r" +
    "\n" +
    "                                                    data-max=\"100\" \r" +
    "\n" +
    "                                                    knob-id=\"v.id\" \r" +
    "\n" +
    "                                                    knob-data=\"v.level\" \r" +
    "\n" +
    "                                                    knob-options=\"knobopt\" \r" +
    "\n" +
    "                                                    ng-model=\"levelVal[v.id]\" myknob ng-if=\"cfg.knob_255.indexOf(v.probeType) === - 1\" />\r" +
    "\n" +
    "                                                <!--<input type=\"text\" value=\"v.level\" class=\"dial\" data-width=\"100\" data-height=\"100\" ng-model=\"levelVal[v.id]\" knob /> -->  \r" +
    "\n" +
    "                                            </td>\r" +
    "\n" +
    "                                            <td>\r" +
    "\n" +
    "                                                <button class=\"btn btn-primary\"\r" +
    "\n" +
    "                                                        data-ng-click=\"runCmdExact(v.id, '+', 1, v.minMax.max)\"\r" +
    "\n" +
    "                                                        >\r" +
    "\n" +
    "                                                    <i class=\"fa fa-angle-up fa-lg\"></i>\r" +
    "\n" +
    "                                                </button>&nbsp;\r" +
    "\n" +
    "                                                <button class=\"btn btn-info\"\r" +
    "\n" +
    "                                                        data-ng-click=\"runCmdExact(v.id, v.minMax.max, v.minMax.min, v.minMax.max)\"\r" +
    "\n" +
    "                                                        ><i class=\"fa fa-angle-double-up fa-lg\"></i>\r" +
    "\n" +
    "                                                </button><br /><br />\r" +
    "\n" +
    "                                                <button class=\"btn btn-primary\"\r" +
    "\n" +
    "                                                        data-ng-click=\"runCmdExact(v.id, '-', 1, v.minMax.max)\"\r" +
    "\n" +
    "                                                        ><i class=\"fa fa-angle-down fa-lg\"></i>\r" +
    "\n" +
    "                                                </button>&nbsp;\r" +
    "\n" +
    "                                                <button class=\"btn btn-info\"\r" +
    "\n" +
    "                                                        data-ng-click=\"runCmdExact(v.id, v.minMax.min, v.minMax.min, v.minMax.max)\"\r" +
    "\n" +
    "                                                        >\r" +
    "\n" +
    "                                                    <i class=\"fa fa-angle-double-down fa-lg\"></i>\r" +
    "\n" +
    "                                                </button>\r" +
    "\n" +
    "                                            </td>\r" +
    "\n" +
    "                                            <td>\r" +
    "\n" +
    "                                                <button class=\"btn btn-info\"\r" +
    "\n" +
    "                                                        data-ng-click=\"runCmdExact(v.id, v.minMax.max, v.minMax.min, v.minMax.max)\"\r" +
    "\n" +
    "                                                        ng-bind=\"_t('lb_full')\">\r" +
    "\n" +
    "                                                </button>\r" +
    "\n" +
    "                                            </td>\r" +
    "\n" +
    "                                        </tr>\r" +
    "\n" +
    "                                    </tbody>\r" +
    "\n" +
    "                                </table>\r" +
    "\n" +
    "                            </div>\r" +
    "\n" +
    "                        </div>\r" +
    "\n" +
    "\r" +
    "\n" +
    "                        <!-- Hidden thermostat -->\r" +
    "\n" +
    "                        <div class=\"col-sm-11 element-hidden thermostat\" ng-switch-when=\"thermostat\" ng-show=\"goHidden[v.id]\">\r" +
    "\n" +
    "                            <a class=\"hidden-close\" href=\"\" ng-click=\"goHidden[v.id] = !goHidden[v.id]\"><i class=\"fa fa-times\"></i></a>\r" +
    "\n" +
    "                            <div>\r" +
    "\n" +
    "                                <p class=\"text-center\">{{v.title}} </p>\r" +
    "\n" +
    "                                <table>\r" +
    "\n" +
    "                                    <tbody>\r" +
    "\n" +
    "                                        <tr>\r" +
    "\n" +
    "                                            <td>\r" +
    "\n" +
    "                                                <!--<myknob knob-data=\"v.level\" knob-options=\"knobopt\"></myknob> -->\r" +
    "\n" +
    "                                                <input \r" +
    "\n" +
    "                                                    type=\"text\" \r" +
    "\n" +
    "                                                    value=\"v.level\" \r" +
    "\n" +
    "                                                    class=\"dial\" \r" +
    "\n" +
    "                                                    data-width=\"100\" \r" +
    "\n" +
    "                                                    data-height=\"100\" \r" +
    "\n" +
    "                                                    data-min=\"6\"\r" +
    "\n" +
    "                                                    data-max=\"28\" \r" +
    "\n" +
    "                                                    knob-id=\"v.id\" \r" +
    "\n" +
    "                                                    knob-data=\"v.level\" \r" +
    "\n" +
    "                                                    knob-options=\"knobopt\" \r" +
    "\n" +
    "                                                    ng-model=\"levelVal[v.id]\" myknob ng-if=\"v.scaleTitle !== '°F'\" />  \r" +
    "\n" +
    "                                                <input \r" +
    "\n" +
    "                                                    type=\"text\" \r" +
    "\n" +
    "                                                    value=\"v.level\" \r" +
    "\n" +
    "                                                    class=\"dial\" \r" +
    "\n" +
    "                                                    data-width=\"100\" \r" +
    "\n" +
    "                                                    data-height=\"100\" \r" +
    "\n" +
    "                                                    data-min=\"40\"\r" +
    "\n" +
    "                                                    data-max=\"104\" \r" +
    "\n" +
    "                                                    knob-id=\"v.id\" \r" +
    "\n" +
    "                                                    knob-data=\"v.level\" \r" +
    "\n" +
    "                                                    knob-options=\"knobopt\" \r" +
    "\n" +
    "                                                    ng-model=\"levelVal[v.id]\" myknob ng-if=\"v.scaleTitle === '°F'\" />  \r" +
    "\n" +
    "                                                <!--<input type=\"text\" value=\"v.level\" class=\"dial\" data-width=\"100\" data-height=\"100\" ng-model=\"levelVal[v.id]\" knob /> -->  \r" +
    "\n" +
    "                                            </td>\r" +
    "\n" +
    "                                            <td>\r" +
    "\n" +
    "                                                <button class=\"btn btn-primary\"\r" +
    "\n" +
    "                                                        data-ng-click=\"runCmdExact(v.id, '+', v.scaleTitle === '°F'? 41 : 5, v.scaleTitle === '°F'? 104 : 40)\"\r" +
    "\n" +
    "                                                        >\r" +
    "\n" +
    "                                                    <i class=\"fa fa-angle-up fa-lg\"></i>\r" +
    "\n" +
    "                                                </button>&nbsp;\r" +
    "\n" +
    "                                                <button class=\"btn btn-info\"\r" +
    "\n" +
    "                                                        data-ng-click=\"runCmdExact(v.id, 40, v.scaleTitle === '°F'? 41 : 5, v.scaleTitle === '°F'? 104 : 40)\"\r" +
    "\n" +
    "                                                        ><i class=\"fa fa-angle-double-up fa-lg\"></i>\r" +
    "\n" +
    "                                                </button><br /><br />\r" +
    "\n" +
    "                                                <button class=\"btn btn-primary\"\r" +
    "\n" +
    "                                                        data-ng-click=\"runCmdExact(v.id, '-', v.scaleTitle === '°F'? 41 : 5, v.scaleTitle === '°F'? 104 : 40)\"\r" +
    "\n" +
    "                                                        ><i class=\"fa fa-angle-down fa-lg\"></i>\r" +
    "\n" +
    "                                                </button>&nbsp;\r" +
    "\n" +
    "                                                <button class=\"btn btn-info\"\r" +
    "\n" +
    "                                                        data-ng-click=\"runCmdExact(v.id, 5, 0, v.scaleTitle === '°F'? 104 : 40)\"\r" +
    "\n" +
    "                                                        >\r" +
    "\n" +
    "                                                    <i class=\"fa fa-angle-double-down fa-lg\"></i>\r" +
    "\n" +
    "                                                </button>\r" +
    "\n" +
    "                                            </td>\r" +
    "\n" +
    "                                        </tr>\r" +
    "\n" +
    "                                    </tbody>\r" +
    "\n" +
    "                                </table>\r" +
    "\n" +
    "                            </div>\r" +
    "\n" +
    "                        </div>\r" +
    "\n" +
    "\r" +
    "\n" +
    "                        <!-- Hidden sensorMultilevel -->\r" +
    "\n" +
    "                        <!--<div class=\"col-sm-11 element-hidden hidden-history\" ng-switch-when=\"sensorMultilevel\" ng-show=\"goHidden\">\r" +
    "\n" +
    "                           <p class=\"text-center popup-title\">{{v.title|cutText:true:30}}</p>\r" +
    "\n" +
    "                           <div>\r" +
    "\n" +
    "                               <canvas tc-chartjs-line chart-data=\"history[v.id]\" chart-options=\"chartOptions\" width=\"260\" height=\"150\"></canvas>\r" +
    "\n" +
    "                           </div>\r" +
    "\n" +
    "                       </div>-->\r" +
    "\n" +
    "\r" +
    "\n" +
    "                        <!-- Hidden sensorMultiline -->\r" +
    "\n" +
    "                        <div class=\"col-sm-11 element-hidden hidden-sensor-multiline\" ng-class=\"v.metrics.sensors? 'multiline-sensor' : ''\" ng-switch-when=\"sensorMultiline\" ng-show=\"goHidden[v.id]\">\r" +
    "\n" +
    "                            <a class=\"hidden-close\" href=\"\" ng-click=\"goHidden[v.id] = !goHidden[v.id]\"><i class=\"fa fa-times\"></i></a>\r" +
    "\n" +
    "                            <div class=\"text-center\">\r" +
    "\n" +
    "                                <h4>{{v.title}}, {{v.metrics.country}}</h4>\r" +
    "\n" +
    "                                <img ng-src=\"{{v.metrics.flag}}\">\r" +
    "\n" +
    "                            </div>\r" +
    "\n" +
    "                            <table class=\"table-condensed\">\r" +
    "\n" +
    "                                <tbody>\r" +
    "\n" +
    "                                    <tr>\r" +
    "\n" +
    "                                        <td><b>{{_t('lb_humidity')}}</b></td>\r" +
    "\n" +
    "                                        <td><span ng-bind=\"v.metrics.zwaveOpenWeather.main.humidity\"/><span> %</span></td>    \r" +
    "\n" +
    "                                    </tr>\r" +
    "\n" +
    "                                    <tr>\r" +
    "\n" +
    "                                        <td><b>{{_t('lb_pressure')}}</b></td>\r" +
    "\n" +
    "                                        <td><span ng-bind=\"v.metrics.zwaveOpenWeather.main.pressure\"/><span> hPa</span></td>\r" +
    "\n" +
    "                                    </tr>\r" +
    "\n" +
    "                                    <tr>\r" +
    "\n" +
    "                                        <td><b>{{_t('lb_weather')}}</b></td>\r" +
    "\n" +
    "                                        <td><span ng-bind=\"v.metrics.zwaveOpenWeather.weather[0].description\"/></td>\r" +
    "\n" +
    "                                    </tr>\r" +
    "\n" +
    "                                    <tr>\r" +
    "\n" +
    "                                        <td><b>{{_t('lb_wind')}}</b></td>\r" +
    "\n" +
    "                                        <td>\r" +
    "\n" +
    "                                            <span ng-bind=\"v.metrics.zwaveOpenWeather.wind.speed | number:1\"/><span> m/s</span> \r" +
    "\n" +
    "                                            <!-- Choose correct wind direction -->\r" +
    "\n" +
    "                                            <span ng-if=\"v.metrics.zwaveOpenWeather.wind.deg === 0\">{{_t('lb_n')}}</span>\r" +
    "\n" +
    "                                            <span ng-if=\"0 < v.metrics.zwaveOpenWeather.wind.deg < 45\">{{_t('lb_ne')}}</span>\r" +
    "\n" +
    "                                            <span ng-if=\"v.metrics.zwaveOpenWeather.wind.deg === 90\">{{_t('lb_e')}}</span>\r" +
    "\n" +
    "                                            <span ng-if=\"90 < v.metrics.zwaveOpenWeather.wind.deg < 180\">{{_t('lb_se')}}</span>\r" +
    "\n" +
    "                                            <span ng-if=\"v.metrics.zwaveOpenWeather.wind.deg === 180\">{{_t('lb_s')}}</span>\r" +
    "\n" +
    "                                            <span ng-if=\"180 < v.metrics.zwaveOpenWeather.wind.deg < 270\">{{_t('lb_sw')}}</span>\r" +
    "\n" +
    "                                            <span ng-if=\"v.metrics.zwaveOpenWeather.wind.speed === 270\">{{_t('lb_w')}}</span>\r" +
    "\n" +
    "                                            <span ng-if=\"270 < v.metrics.zwaveOpenWeather.wind.deg < 360\">{{_t('lb_nw')}}</span>\r" +
    "\n" +
    "                                            <!-- Wind dirction in degree -->\r" +
    "\n" +
    "                                            (<span ng-bind=\"v.metrics.zwaveOpenWeather.wind.deg | number:0\"/><span>°</span>)\r" +
    "\n" +
    "                                        </td>\r" +
    "\n" +
    "                                    </tr>\r" +
    "\n" +
    "                                    <tr>\r" +
    "\n" +
    "                                        <td><b>{{_t('lb_last_update')}}</b></td>\r" +
    "\n" +
    "                                        <td>{{v.updateTime|isToday:true}}</td>\r" +
    "\n" +
    "\r" +
    "\n" +
    "                                    </tr>\r" +
    "\n" +
    "                                </tbody>\r" +
    "\n" +
    "                            </table>\r" +
    "\n" +
    "                        </div>\r" +
    "\n" +
    "\r" +
    "\n" +
    "\r" +
    "\n" +
    "                        <!-- Hidden switchMultilevelLinear -->\r" +
    "\n" +
    "                        <div class=\"col-sm-11 element-hidden hidden-sensor-multilevel-linear\" ng-switch-when=\"switchMultilevelLinear\" ng-show=\"goHidden[v.id]\">\r" +
    "\n" +
    "                            <a class=\"hidden-close\" href=\"\" ng-click=\"goHidden[v.id] = !goHidden[v.id]\"><i class=\"fa fa-times\"></i></a>\r" +
    "\n" +
    "                            <p class=\"text-center\">{{v.title}} </p>\r" +
    "\n" +
    "                            <table>\r" +
    "\n" +
    "                                <tbody>\r" +
    "\n" +
    "                                    <tr>\r" +
    "\n" +
    "                                        <td>\r" +
    "\n" +
    "                                            <div range-slider min=\"0\" orientation_=\"vertical\" max=\"100\" model-max=\"slider.modelMax\" pin-handle=\"min\"></div>\r" +
    "\n" +
    "                                        </td>\r" +
    "\n" +
    "                                        <td>\r" +
    "\n" +
    "                                            <a class=\"btn btn-primary\" href=\"\"><i class=\"fa fa-angle-up fa-lg\"></i></a>&nbsp;<a class=\"btn btn-info\" href=\"\"><i class=\"fa fa-angle-double-up fa-lg\"></i></a><br /><br />\r" +
    "\n" +
    "                                            <a class=\"btn btn-primary\" href=\"\"><i class=\"fa fa-angle-down fa-lg\"></i></a>&nbsp;<a class=\"btn btn-info\" href=\"\"><i class=\"fa fa-angle-double-down fa-lg\"></i></a>\r" +
    "\n" +
    "                                        </td>\r" +
    "\n" +
    "                                    </tr>\r" +
    "\n" +
    "                                </tbody>\r" +
    "\n" +
    "                            </table>\r" +
    "\n" +
    "                        </div>\r" +
    "\n" +
    "                    </div><!-- /.panel-body -->\r" +
    "\n" +
    "                </div>\r" +
    "\n" +
    "            </div>\r" +
    "\n" +
    "\r" +
    "\n" +
    "\r" +
    "\n" +
    "        </div><!-- /.col -->\r" +
    "\n" +
    "    </div>\r" +
    "\n" +
    "\r" +
    "\n" +
    "    <!-- Modal promo -->\r" +
    "\n" +
    "    <div class=\"modal modal-vertical-centered fade\" id=\"modal_promo\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myModalLabel\" aria-hidden=\"true\">\r" +
    "\n" +
    "        <div class=\"modal-dialog modal-dialog-center\" ng-class=\"{'text-widget-modal': input.type == 'text'}\">\r" +
    "\n" +
    "            <div class=\"modal-content\">\r" +
    "\n" +
    "                <div class=\"modal-header\">\r" +
    "\n" +
    "                    <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-hidden=\"true\">&times;</button>\r" +
    "\n" +
    "                    <h4 class=\"modal-title\" ng-bind=\"input.title\"></h4>\r" +
    "\n" +
    "                </div>\r" +
    "\n" +
    "                <div class=\"modal-body\">\r" +
    "\n" +
    "                    <img class=\"widget-promo-image\" ng-show=\"input.url\" ng-src=\"{{input.url}}\" alt=\"input.title\"/>\r" +
    "\n" +
    "                    <div class=\"widget-promo-text\" ng-bind-html=\"input.text | toTrusted\"></div>\r" +
    "\n" +
    "                </div>\r" +
    "\n" +
    "            </div>\r" +
    "\n" +
    "        </div>\r" +
    "\n" +
    "    </div><!-- /.Modal -->\r" +
    "\n" +
    "\r" +
    "\n" +
    "    <!-- Modal camera -->\r" +
    "\n" +
    "    <div class=\"modal modal-vertical-centered modal-no-padding fade\" id=\"modal_camera\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myModalLabel\" aria-hidden=\"true\">\r" +
    "\n" +
    "        <div class=\"modal-dialog modal-dialog-center\">\r" +
    "\n" +
    "            <div class=\"modal-content\">\r" +
    "\n" +
    "                <div class=\"modal-header\">\r" +
    "\n" +
    "                    <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-hidden=\"true\">&times;</button>\r" +
    "\n" +
    "                    <h4 class=\"modal-title\" ng-bind=\"input.title\"></h4>\r" +
    "\n" +
    "                </div>\r" +
    "\n" +
    "                <div class=\"modal-body\">\r" +
    "\n" +
    "                    <p class=\"text-center element-camera-control\">\r" +
    "\n" +
    "                        <a href=\"\" ng-click=\"runCmd(input.id + '/command/zoomIn')\" ng-if=\"input.metrics.hasZoomIn\"><i class=\"fa fa-search-plus fa-lg\"></i></a>&nbsp;&nbsp;&nbsp;\r" +
    "\n" +
    "                        <a href=\"\" ng-click=\"runCmd(input.id + '/command/zoomOut')\" ng-if=\"input.metrics.hasZoomOut\"><i class=\"fa fa-search-minus fa-lg\"></i></a>&nbsp;&nbsp;&nbsp;\r" +
    "\n" +
    "                        <a href=\"\" ng-click=\"runCmd(input.id + '/command/left')\" ng-if=\"input.metrics.hasLeft\"><i class=\"fa fa-arrow-circle-left fa-lg\"></i></a>&nbsp;&nbsp;&nbsp;\r" +
    "\n" +
    "                        <a href=\"\" ng-click=\"runCmd(input.id + '/command/right')\" ng-if=\"input.metrics.hasRight\"><i class=\"fa fa-arrow-circle-right fa-lg\"></i></a>&nbsp;&nbsp;&nbsp;\r" +
    "\n" +
    "                        <a href=\"\" ng-click=\"runCmd(input.id + '/command/up')\" ng-if=\"input.metrics.hasUp\"><i class=\"fa fa-arrow-circle-up fa-lg\"></i></a>&nbsp;&nbsp;&nbsp;\r" +
    "\n" +
    "                        <a href=\"\" ng-click=\"runCmd(input.id + '/command/down')\" ng-if=\"input.metrics.hasDown\"><i class=\"fa fa-arrow-circle-down fa-lg\"></i></a>&nbsp;&nbsp;&nbsp;\r" +
    "\n" +
    "                        <a href=\"\" ng-click=\"runCmd(input.id + '/command/open')\" ng-if=\"input.metrics.hasOpen\"><i class=\"fa fa-power-off fa-lg\"></i></a>&nbsp;&nbsp;&nbsp;\r" +
    "\n" +
    "                        <a href=\"\" ng-click=\"runCmd(input.id + '/command/close')\" ng-if=\"input.metrics.hasClose\"><i class=\"fa fa-close fa-lg\"></i></a>&nbsp;&nbsp;&nbsp;\r" +
    "\n" +
    "                    </p>\r" +
    "\n" +
    "\r" +
    "\n" +
    "                    <div class=\"camera-img\">\r" +
    "\n" +
    "                        <img class=\"text-center camera-img\" ng-src=\"{{input.metrics.url}}\">\r" +
    "\n" +
    "                    </div>\r" +
    "\n" +
    "\r" +
    "\n" +
    "                </div>\r" +
    "\n" +
    "            </div>\r" +
    "\n" +
    "        </div>\r" +
    "\n" +
    "    </div><!-- /.Modal -->\r" +
    "\n" +
    "\r" +
    "\n" +
    "    <!-- Modal multiline -->\r" +
    "\n" +
    "    <div class=\"modal modal-vertical-centered modal-no-padding fade\" id=\"modal_multiline\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myModalLabel\" aria-hidden=\"true\">\r" +
    "\n" +
    "        <div class=\"modal-dialog modal-dialog-center\">\r" +
    "\n" +
    "            <div class=\"modal-content\">\r" +
    "\n" +
    "                <div class=\"modal-header\">\r" +
    "\n" +
    "                    <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-hidden=\"true\" ng-click=\"closeMultilineSensor()\">&times;</button>\r" +
    "\n" +
    "                    <h4 class=\"modal-title\" ng-bind=\"input.title\"></h4>\r" +
    "\n" +
    "                </div>\r" +
    "\n" +
    "                <div class=\"modal-body \">\r" +
    "\n" +
    "                    <div class=\"alert alert-warning\" ng-if=\"!multilineSensors.data\">\r" +
    "\n" +
    "                        <i class=\"fa {{multilineSensors.icon}}\"></i> <span ng-bind=\"multilineSensors.message\"></span>\r" +
    "\n" +
    "                    </div>\r" +
    "\n" +
    "                    <div class=\"multiline-entry\" ng-if=\"multilineSensors.data\">\r" +
    "\n" +
    "                        <table class=\"table table-report table-condensed\">\r" +
    "\n" +
    "                            <tbody>\r" +
    "\n" +
    "                                <!-- <tr class=\"text-right\" ng-if=\"multiLineDev.data.metrics.multilineType == 'protection'\">\r" +
    "\n" +
    "                                   <td>\r" +
    "\n" +
    "                                       <button class=\"btn btn-default btn-sm\" ng-click=\"runCmd(multiLineDev.data.id + '/command/update')\"> <i class=\"fa fa-clock-o\"></i> <span class=\"widget-update-time\">{{multiLineDev.data.updateTime|isToday:true:_t('lb_days'):_t('lb_yesterday')}}</span></button>\r" +
    "\n" +
    "                                   </td>\r" +
    "\n" +
    "                                </tr> -->\r" +
    "\n" +
    "                                <tr ng-repeat=\"n in multilineSensors.data track by n.id\" ng-class_=\"n.metrics.level === 'on'?'app-gradient-red' : ''\">\r" +
    "\n" +
    "                                    <td class=\"td-img\">\r" +
    "\n" +
    "                                        <img id=\"widget_multiline_img_{{n.id}}\" class=\"report-img\" ng-src=\"{{n.metrics.icon|getElementIcon:n:n.metrics.level}}\" alt=\"img\" />\r" +
    "\n" +
    "                                    </td>\r" +
    "\n" +
    "                                    <td>\r" +
    "\n" +
    "                                        <span ng-bind=\"n.metrics.title\"/></span><br />\r" +
    "\n" +
    "                                    </td>\r" +
    "\n" +
    "                                    <td>\r" +
    "\n" +
    "                                        <strong ng-bind=\"n.metrics.level | numberFixedLen\"></strong> <strong ng-show=\"n.metrics.scaleTitle\" ng-bind=\"n.metrics.scaleTitle\"></strong>\r" +
    "\n" +
    "                                    </td>\r" +
    "\n" +
    "                                    <td class=\"text-right\">\r" +
    "\n" +
    "                                        <a class=\"widget-history\" href=\"\" ng-click=\"loadMultiLineDeviceHistory(n.id)\" ng-if=\"n.hasHistory\"><i class=\"fa fa-history fa-lg\"></i></a>&nbsp;\r" +
    "\n" +
    "                                        <button class=\"btn btn-default btn-sm\" ng-click=\"runCmd(n.id + '/command/update')\" ng-if=\"cfg.element_update_time_btn.indexOf(n.deviceType) > - 1 && n.updateTime\"> <i class=\"fa fa-clock-o\"></i> <span class=\"widget-update-time\">{{n.updateTime|isToday:true:_t('lb_days'):_t('lb_yesterday')}}</span></button>\r" +
    "\n" +
    "                                        <div class=\"element-hidden hidden-history\" ng-if=\"goMutiLineHistory[n.id]\">\r" +
    "\n" +
    "                                            <a class=\"hidden-close\" href=\"\" ng-click=\"goMutiLineHistory[n.id] = !goMutiLineHistory[n.id]\"><i class=\"fa fa-times\"></i></a>\r" +
    "\n" +
    "                                            <p class=\"text-left\">{{n.metrics.title|cutText:true:30}}</p>\r" +
    "\n" +
    "                                            <div class=\"alert alert-warning\" ng-if=\"!multiLineHistory[n.id].data\">\r" +
    "\n" +
    "                                                <i class=\"fa {{multiLineHistory[n.id].icon}}\"></i> <span ng-bind=\"multiLineHistory[n.id].message\"></span>\r" +
    "\n" +
    "                                            </div>\r" +
    "\n" +
    "                                            <div ng-if=\"multiLineHistory[n.id].data\">\r" +
    "\n" +
    "                                                <canvas tc-chartjs-line chart-data=\"multiLineHistory[n.id].data\" chart-options=\"chartOptions\" width=\"260\" height=\"150\"></canvas>\r" +
    "\n" +
    "                                            </div>\r" +
    "\n" +
    "                                        </div>\r" +
    "\n" +
    "                                    </td>\r" +
    "\n" +
    "                                </tr>\r" +
    "\n" +
    "                            </tbody>\r" +
    "\n" +
    "                        </table>\r" +
    "\n" +
    "                    </div>\r" +
    "\n" +
    "                </div>\r" +
    "\n" +
    "            </div>\r" +
    "\n" +
    "        </div>\r" +
    "\n" +
    "    </div><!-- /.Modal multiline -->\r" +
    "\n" +
    "\r" +
    "\n" +
    "    <!-- Modal multiline -->\r" +
    "\n" +
    "    <div class=\"modal modal-vertical-centered modal-no-padding fade\" id=\"modal_climate_control\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myModalLabel\" aria-hidden=\"true\">\r" +
    "\n" +
    "        <div class=\"modal-dialog modal-dialog-center\">\r" +
    "\n" +
    "            <div class=\"modal-content\">\r" +
    "\n" +
    "                <div class=\"modal-header\">\r" +
    "\n" +
    "                    <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-hidden=\"true\" ng-click=\"closeMultilineSensor()\">&times;</button>\r" +
    "\n" +
    "                    <h4 class=\"modal-title\" ng-bind=\"input.title\"></h4>\r" +
    "\n" +
    "                </div>\r" +
    "\n" +
    "                <div class=\"modal-body \">\r" +
    "\n" +
    "                    <div class=\"alert alert-warning\" ng-if=\"climateControl.message\">\r" +
    "\n" +
    "                        <i class=\"fa {{climateControl.icon}}\"></i> <span ng-bind=\"climateControl.message\"></span>\r" +
    "\n" +
    "                    </div>\r" +
    "\n" +
    "                    <div class=\"multiline-entry\" ng-if=\"climateControl.data\">\r" +
    "\n" +
    "                        <table class=\"table table-report table-condensed\">\r" +
    "\n" +
    "                            <tbody>\r" +
    "\n" +
    "                                <tr class=\"bcg-success\" ng-repeat=\"n in climateControl.data.metrics.rooms\" ng-if=\"n.room > 0\">\r" +
    "\n" +
    "                                    <!--<td class=\"td-img\">\r" +
    "\n" +
    "                                        <img class=\"report-img\" ng-src=\"storage/img/rooms/{{n.default_img}}\" alt=\"img\" />\r" +
    "\n" +
    "                                    </td> -->\r" +
    "\n" +
    "                                    <td class=\"td-img\">\r" +
    "\n" +
    "                                        <img class=\"report-img img-circle\" ng-src=\"{{rooms[n.room]|getRoomIcon}}\" />\r" +
    "\n" +
    "                                    </td>\r" +
    "\n" +
    "                                    <td ng-bind=\"rooms[n.room].title\"></td>\r" +
    "\n" +
    "                                    <td class=\"text-right\">\r" +
    "\n" +
    "                                        <span class=\"text-primary_\">{{elements.all[n.mainSensor].metrics.level}}  {{elements.all[n.mainSensor].metrics.scaleTitle}}</span>\r" +
    "\n" +
    "                                        <!--(<span><i class=\"fa fa-clock-o\"></i> {{input.updateTime|isToday:true:_t('lb_days'):_t('lb_yesterday')}})</span>-->\r" +
    "\n" +
    "                                    </td>\r" +
    "\n" +
    "                                    <td class=\"text-right\">\r" +
    "\n" +
    "                                        =>\r" +
    "\n" +
    "                                    </td>\r" +
    "\n" +
    "                                    <td class=\"text-right\">\r" +
    "\n" +
    "                                       <span class=\"text-success\">{{n.targetTemp}}  {{elements.all[n.mainSensor].metrics.scaleTitle}}</span>\r" +
    "\n" +
    "                                        <!--(<span><i class=\"fa fa-clock-o\"></i> {{input.updateTime|isToday:true:_t('lb_days'):_t('lb_yesterday')}})</span>-->\r" +
    "\n" +
    "                                    </td>\r" +
    "\n" +
    "                                    <!--<td class=\"text-primary\">\r" +
    "\n" +
    "                                        Set <span ng-bind=\"n.comfort\"></span> <span ng-bind=\"n.scaleTitle\"></span>\r" +
    "\n" +
    "                                    </td> -->\r" +
    "\n" +
    "                                    <td class=\"text-right\">\r" +
    "\n" +
    "                                        <i class=\"fa fa-spinner fa-spin\" ng-if=\"changeClimateControlProcess[n.room]\"></i>&nbsp;\r" +
    "\n" +
    "                                    </td>\r" +
    "\n" +
    "                                    <td class=\"text-right\">\r" +
    "\n" +
    "\r" +
    "\n" +
    "                                        <select class=\"form-control\" \r" +
    "\n" +
    "                                                name=\"changeMode_{{n.room}}\" \r" +
    "\n" +
    "                                                id=\"changeMode_{{n.room}}\"\r" +
    "\n" +
    "                                                ng-model=\"climateControlMode\" \r" +
    "\n" +
    "                                                ng-disabled=\"changeClimateControlProcess[n.room]\"\r" +
    "\n" +
    "                                                ng-change=\"changeClimateControlMode({cmd: input.id + '/command/' + climateControlMode + '?room=' + n.room, room: n.room})\">\r" +
    "\n" +
    "                                            <option value=\"{{m}}\" ng-repeat=\"m in climateElementModes\" ng-selected=\"n.state == m\" ng-bind=\"_t(m)\"></option>\r" +
    "\n" +
    "                                        </select>\r" +
    "\n" +
    "                                    </td>\r" +
    "\n" +
    "                                </tr>\r" +
    "\n" +
    "                            </tbody>\r" +
    "\n" +
    "                        </table>\r" +
    "\n" +
    "\r" +
    "\n" +
    "                    </div>\r" +
    "\n" +
    "                </div>\r" +
    "\n" +
    "            </div>\r" +
    "\n" +
    "        </div>\r" +
    "\n" +
    "    </div><!-- /.Modal multiline -->\r" +
    "\n" +
    "\r" +
    "\n" +
    "    <!-- Modal door lock -->\r" +
    "\n" +
    "    <div class=\"modal modal-vertical-centered modal-no-padding fade\" id=\"modal_doorlock\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myModalLabel\" aria-hidden=\"true\">\r" +
    "\n" +
    "        <div class=\"modal-dialog modal-dialog-center\">\r" +
    "\n" +
    "            <div class=\"modal-content\">\r" +
    "\n" +
    "                <div class=\"modal-header\">\r" +
    "\n" +
    "                    <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-hidden=\"true\">&times;</button>\r" +
    "\n" +
    "                    <h4 class=\"modal-title\" ng-bind=\"input.title\"></h4>\r" +
    "\n" +
    "                </div>\r" +
    "\n" +
    "                <div class=\"modal-body \">\r" +
    "\n" +
    "                    <div class=\"alert alert-warning\" ng-if=\"!doorLock.data\">\r" +
    "\n" +
    "                        <i class=\"fa {{doorLock.icon}}\"></i> <span ng-bind=\"doorLock.message\"></span>\r" +
    "\n" +
    "                    </div>\r" +
    "\n" +
    "                    <div class=\"multiline-entry\" ng-if=\"doorLock.data\">\r" +
    "\n" +
    "                        <table class=\"table table-report table-condensed\">\r" +
    "\n" +
    "                            <tbody>\r" +
    "\n" +
    "                                <tr class=\"bcg-success {{n.success}}\" ng-repeat=\"n in doorLock.data.metrics.events| orderBy: '-updateTime'\">\r" +
    "\n" +
    "                                    <td class=\"td-img\">\r" +
    "\n" +
    "                                        <img class=\"report-img\" ng-src=\"storage/img/icons/lock-{{n.level}}.png\" alt=\"img\" />\r" +
    "\n" +
    "                                    </td>\r" +
    "\n" +
    "                                    <td>\r" +
    "\n" +
    "                                        <strong ng-if=\"!n.success\">not</strong> <strong ng-bind=\"n.level\"></strong> <span ng-if=\"n.user\">by {{n.user}}</span>\r" +
    "\n" +
    "                                    </td>\r" +
    "\n" +
    "                                    <td class=\"text-left\">\r" +
    "\n" +
    "                                        <i class=\"fa fa-clock-o\"></i> <span ng-bind=\"n.updateTime|isToday:true:_t('lb_days'):_t('lb_yesterday')\"></span>\r" +
    "\n" +
    "                                    </td>\r" +
    "\n" +
    "                                </tr>\r" +
    "\n" +
    "                            </tbody>\r" +
    "\n" +
    "                        </table>\r" +
    "\n" +
    "                    </div>\r" +
    "\n" +
    "                </div>\r" +
    "\n" +
    "            </div>\r" +
    "\n" +
    "        </div>\r" +
    "\n" +
    "    </div><!-- /.Modal multiline -->\r" +
    "\n" +
    "    \r" +
    "\n" +
    "    <!-- Modal RGB wheel -->\r" +
    "\n" +
    "    <div class=\"modal modal-vertical-centered fade\" id=\"modal_rgb_wheel\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myModalLabel\" aria-hidden=\"true\">\r" +
    "\n" +
    "        <div class=\"modal-dialog modal-dialog-center\">\r" +
    "\n" +
    "            <div class=\"modal-content\">\r" +
    "\n" +
    "                <div class=\"modal-header\">\r" +
    "\n" +
    "                    <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-hidden=\"true\">&times;</button>\r" +
    "\n" +
    "                    <h4 class=\"modal-title\" ng-bind=\"input.title\"></h4>\r" +
    "\n" +
    "                </div>\r" +
    "\n" +
    "                <div class=\"modal-body \">\r" +
    "\n" +
    "\r" +
    "\n" +
    "                    <div class=\"row wheel-colorpicker\">\r" +
    "\n" +
    "                        <div class=\"col-rgb col-sm-6\">\r" +
    "\n" +
    "                            <canvas id=\"wheel_picker\" var=\"4\" width=\"300\" height=\"300\" ng-mousemove=\"setColor($element)\"></canvas>\r" +
    "\n" +
    "                            <input type=\"hidden\" id=\"rgbVal\" />\r" +
    "\n" +
    "                        </div>\r" +
    "\n" +
    "                        <div class=\"col-rgb col-sm-6\">\r" +
    "\n" +
    "                            <div id=\"wheel_picker_preview\">\r" +
    "\n" +
    "                                 <div id=\"wheel_picker_preview_spin\" ng-if=\"rgbWheel.process\">\r" +
    "\n" +
    "                                <i class=\"fa fa-spinner fa-spin fa-lg\"></i> {{_t('updating')}}\r" +
    "\n" +
    "                                </div>\r" +
    "\n" +
    "                            </div>\r" +
    "\n" +
    "                            <p><input class=\"form-control\" type=\"text\" id=\"rVal\" disabled /></p>\r" +
    "\n" +
    "                            <p><input class=\"form-control\" type=\"text\" id=\"gVal\" disabled /></p>\r" +
    "\n" +
    "                            <p><input class=\"form-control\" type=\"text\" id=\"bVal\" disabled /></p>\r" +
    "\n" +
    "                        </div>\r" +
    "\n" +
    "                        <!-- preview element -->\r" +
    "\n" +
    "\r" +
    "\n" +
    "\r" +
    "\n" +
    "                    </div>\r" +
    "\n" +
    "                </div>\r" +
    "\n" +
    "            </div>\r" +
    "\n" +
    "        </div>\r" +
    "\n" +
    "    </div><!-- /.Modal RGB wheel -->\r" +
    "\n" +
    "    \r" +
    "\n" +
    "    \r" +
    "\n" +
    "\r" +
    "\n" +
    "    <!-- Elements footer view -->\r" +
    "\n" +
    "    <div id=\"footer\" ng-show=\"showFooter\">\r" +
    "\n" +
    "        <div class=\"navbar navbar-default navbar-fixed-bottom\">\r" +
    "\n" +
    "            <div class=\"container\">\r" +
    "\n" +
    "                <div class=\"form-inline\" role=\"form\">\r" +
    "\n" +
    "                    <div class=\"btn-group dropup\">\r" +
    "\n" +
    "                        <button type=\"button\" class=\"btn btn-default\" ng-bind=\"_t('lb_categories')\"></button>\r" +
    "\n" +
    "                        <button type=\"button\" class=\"btn btn-default dropdown-toggle\" data-toggle=\"dropdown\">\r" +
    "\n" +
    "                            <span class=\"caret\"></span>\r" +
    "\n" +
    "                            <span class=\"sr-only\">Toggle Dropdown</span>\r" +
    "\n" +
    "                        </button>\r" +
    "\n" +
    "                        <ul class=\"dropdown-menu dropdown-menu-bottom\">\r" +
    "\n" +
    "                            <li><a href=\"#elements\" ng-bind=\"_t('lb_all')\"></a></li>\r" +
    "\n" +
    "                            <li ng-repeat=\"v in deviceType\"><a href=\"#elements/deviceType/{{v.key}}\" ng-bind=\"_t(v.key)\"></a></li>\r" +
    "\n" +
    "                        </ul>\r" +
    "\n" +
    "                    </div>\r" +
    "\n" +
    "                    <div class=\"btn-group dropup\">\r" +
    "\n" +
    "                        <button type=\"button\" class=\"btn btn-default\" ng-bind=\"_t('lb_tags')\"></button>\r" +
    "\n" +
    "                        <button type=\"button\" class=\"btn btn-default dropdown-toggle\" data-toggle=\"dropdown\">\r" +
    "\n" +
    "                            <span class=\"caret\"></span>\r" +
    "\n" +
    "                            <span class=\"sr-only\">Toggle Dropdown</span>\r" +
    "\n" +
    "                        </button>\r" +
    "\n" +
    "                        <div class=\"dropdown-menu dropdown-menu-bottom drop-down-tags\">\r" +
    "\n" +
    "                            <div>\r" +
    "\n" +
    "                                <a href=\"#elements\" ng-bind=\"_t('lb_all')\"></a>\r" +
    "\n" +
    "                                <a href=\"#elements/tags/{{v.key}}\" ng-repeat=\"v in tags\" ng-bind=\"v.key\"></a>\r" +
    "\n" +
    "                            </div>\r" +
    "\n" +
    "                        </div>\r" +
    "\n" +
    "                    </div>\r" +
    "\n" +
    "                    <div class=\"input-group search-form hide-on-mobile\">\r" +
    "\n" +
    "                        <input type=\"text\" ng-model=\"q\" class=\"form-control\">\r" +
    "\n" +
    "                        <span class=\"input-group-addon\"><i class=\"fa fa-search\"></i></span>\r" +
    "\n" +
    "                    </div>\r" +
    "\n" +
    "\r" +
    "\n" +
    "                </div>\r" +
    "\n" +
    "\r" +
    "\n" +
    "            </div>\r" +
    "\n" +
    "        </div>\r" +
    "\n" +
    "    </div>\r" +
    "\n" +
    "</div> <!-- /ng-controller --> "
  );


  $templateCache.put('app/views/elements/welcome.html',
    "<!-- Welcome view -->\r" +
    "\n" +
    "<div>\r" +
    "\n" +
    "    <!--<div class=\"device-perex clearfix welcome-promo\"> \r" +
    "\n" +
    "        <div class=\"include-device-img\">\r" +
    "\n" +
    "            <img class=\"welcome-img\" ng-src=\"app/img/welcome.png\" alt=\"img\" />\r" +
    "\n" +
    "        </div>\r" +
    "\n" +
    "        <div class=\"include-device-txt\">\r" +
    "\n" +
    "            <h2>Welcome to SmartHome</h2>\r" +
    "\n" +
    "\r" +
    "\n" +
    "            <p>Donec ultricies tempor augue a placerat. Pellentesque blandit augue velit, vel fermentum sem vestibulum id. In quis faucibus ipsum. Morbi imperdiet tincidunt felis, vel porta ipsum. Nam et dui facilisis.</p>\r" +
    "\n" +
    "        </div>\r" +
    "\n" +
    "    </div> -->\r" +
    "\n" +
    "    <div class=\"welcome-alert app-border app-gradient app-shadow\">\r" +
    "\n" +
    "        <h2>{{_t('welcome_no_devices')}}</h2>\r" +
    "\n" +
    "        <table class=\"table table-report table-welcome\">\r" +
    "\n" +
    "            <tbody>\r" +
    "\n" +
    "                <tr>\r" +
    "\n" +
    "                    <td><span class=\"badge badge-number\">1</span> <span class=\"welcome-help\"><a href=\"#elements\">{{_t('welcome_step1')}} <i class=\"fa fa-clone\"></i></a></span></td>  \r" +
    "\n" +
    "                </tr>\r" +
    "\n" +
    "                <tr>\r" +
    "\n" +
    "                    <td><span class=\"badge badge-number\">2</span> <span class=\"welcome-help\">{{_t('welcome_step2')}} <i class=\"fa fa-cog\"></i></span></td>  \r" +
    "\n" +
    "                </tr>\r" +
    "\n" +
    "                <tr>\r" +
    "\n" +
    "                    <td><span class=\"badge badge-number\">3</span> <span class=\"welcome-help\">{{_t('welcome_step3')}}</span></td>  \r" +
    "\n" +
    "                </tr>\r" +
    "\n" +
    "            </tbody>\r" +
    "\n" +
    "        </table>\r" +
    "\n" +
    "        <a class=\"btn btn-primary btn-block\" href=\"#elements\">{{_t('welcome_go')}} <i class=\"fa fa-chevron-right\"></i></a>\r" +
    "\n" +
    "    </div>\r" +
    "\n" +
    "\r" +
    "\n" +
    "</div>"
  );


  $templateCache.put('app/views/enocean/assign.html',
    "<div ng-controller=\"EnoceanAssignController\" class=\"mobile-padding\">\r" +
    "\n" +
    "    <!-- Enocean navigation -->\r" +
    "\n" +
    "    <div ng-include=\"'app/views/enocean/navi.html'\"></div>\r" +
    "\n" +
    "     <bb-loader></bb-loader> \r" +
    "\n" +
    "    <div class=\"tab-content\">\r" +
    "\n" +
    "        <!-- inclusion -->\r" +
    "\n" +
    "        <div class=\"col-device app-border app-gradient app-shadow\">\r" +
    "\n" +
    "            <table class=\"table table-report table-inclusion\">\r" +
    "\n" +
    "                <tbody>\r" +
    "\n" +
    "                    <!-- 1 -->\r" +
    "\n" +
    "                    <tr>\r" +
    "\n" +
    "                        <td><span class=\"badge badge-number\">1</span></td>\r" +
    "\n" +
    "                        <td>\r" +
    "\n" +
    "                             <strong ng-bind=\"_t('assign_profile')\"></strong>\r" +
    "\n" +
    "                            <div class=\"form-group\">\r" +
    "\n" +
    "                                \r" +
    "\n" +
    "                                <select name=\"enoceanProfiles\" class=\"form-control\" ng-model=\"profile\" ng-change=\"loadDevice(profile)\" ng-disabled=\"inclusion.promisc || inclusion.done\">\r" +
    "\n" +
    "                                    <option value=\"{{manProfile}}\" \r" +
    "\n" +
    "                                            ng-repeat=\"v in enoceanProfiles| orderBy:'_funcDescription'\" \r" +
    "\n" +
    "                                            ng-init=\"manProfile = {rorg:v._rorg,funcId: v._func,typeId: v._type}\"\r" +
    "\n" +
    "                                            >{{v._funcDescription}} | rorg: {{v._rorg}} | func: {{v._func}} | type: {{v._type}}</option>\r" +
    "\n" +
    "                                </select>\r" +
    "\n" +
    "                            </div>\r" +
    "\n" +
    "                        </td>\r" +
    "\n" +
    "                    </tr>\r" +
    "\n" +
    "                    <!-- 2 -->\r" +
    "\n" +
    "                    <tr>\r" +
    "\n" +
    "                        <td><span class=\"badge badge-number\">2</span></td>\r" +
    "\n" +
    "                        <td>\r" +
    "\n" +
    "                             <strong ng-bind=\"_t('teach_in')\"></strong>\r" +
    "\n" +
    "                             <div class=\"alert\" ng-if=\"inclusion.message\" ng-class=\"inclusion.status\">\r" +
    "\n" +
    "                                <i class=\"fa fa-lg\" ng-class=\"inclusion.icon\"></i> <span ng-bind-html=\"inclusion.message | toTrusted\"></span>\r" +
    "\n" +
    "                                <button\r" +
    "\n" +
    "                                    class=\"btn btn-danger btn-sm\"\r" +
    "\n" +
    "                                    ng-if=\"!inclusion.done && inclusion.promisc\"\r" +
    "\n" +
    "                                    ng-click=\"runCmd('controller.data.promisc=false')\">\r" +
    "\n" +
    "                                    <span ng-bind=\"_t('stop_teachin')\"></span>\r" +
    "\n" +
    "                                </button>\r" +
    "\n" +
    "                                <button class=\"btn btn-success btn-sm\"\r" +
    "\n" +
    "                                        ng-if=\"!inclusion.done && !inclusion.promisc\"\r" +
    "\n" +
    "                                        ng-click=\"runCmd('controller.data.promisc=true')\"\r" +
    "\n" +
    "                                        ><span ng-bind=\"_t('start_teachin')\"></span></button>\r" +
    "\n" +
    "                            </div>\r" +
    "\n" +
    "                            \r" +
    "\n" +
    "                        </td>\r" +
    "\n" +
    "                    </tr>\r" +
    "\n" +
    "                    <!-- 3 -->\r" +
    "\n" +
    "                    <tr>\r" +
    "\n" +
    "                        <td><span class=\"badge badge-number\">3</span></td>\r" +
    "\n" +
    "                        <td>\r" +
    "\n" +
    "                            <strong ng-bind=\"_t('lb_settings')\"></strong>\r" +
    "\n" +
    "                            <form name=\"form_enocean_config\" id=\"form_enocean_config\" class=\"form form-page\" ng-if=\"inclusion.config\" novalidate>\r" +
    "\n" +
    "                                <!-- <p>{{lastIncludedDevice.profile._funcDescription}} (#{{lastIncludedDevice.id}})</p> -->\r" +
    "\n" +
    "                                 <!-- Name  -->\r" +
    "\n" +
    "                                    <fieldset>\r" +
    "\n" +
    "                                         <div class=\"form-group form-inline\">\r" +
    "\n" +
    "                                        <input type=\"text\" name=\"enocean_name\" id=\"enocean_name\" class=\"form-control form-control-md\" \r" +
    "\n" +
    "                                               ng-model=\"lastIncludedDevice.name\" value=\"{{lastIncludedDevice.name}}\" />\r" +
    "\n" +
    "                                        <button class=\"btn btn-primary\" ng-click=\"runCmd('devices[\\'x' + lastIncludedDevice.id + '\\'].data.givenName=\\'' + lastIncludedDevice.name + '\\'')\" ng-bind=\"_t('rename_device')\"></button>\r" +
    "\n" +
    "                                    </div>\r" +
    "\n" +
    "                                    </fieldset>\r" +
    "\n" +
    "                                 <div class=\"alert alert-warning\" ng-if=\"apiDevices.length < 1\">\r" +
    "\n" +
    "                                <i class=\"fa fa-lg fa-exclamation-circle\"></i> <span ng-bind=\"_t('enocean_no_settings')\"></span>\r" +
    "\n" +
    "                                </div>\r" +
    "\n" +
    "                                <fieldset ng-if=\"apiDevices\">\r" +
    "\n" +
    "                                    <div class=\"form-group form-inline\" ng-repeat=\"e in apiDevices| orderBy:'title':false\" ng-init=\"dev[e.id] = e\">\r" +
    "\n" +
    "\r" +
    "\n" +
    "                                        <h3>\r" +
    "\n" +
    "                                            <img id=\"widget_img_{{v.id}}\" class=\"report-img\" ng-src=\"{{e.metrics.icon|getElementIcon:e:e.level}}\" alt=\"img\" />\r" +
    "\n" +
    "                                            <span ng-bind=\"dev[e.id].metrics.title\"></span>\r" +
    "\n" +
    "                                        </h3>\r" +
    "\n" +
    "                                        <div>\r" +
    "\n" +
    "                                            <input type=\"text\" name=\"fdf\" class=\"form-control form-control-md\" ng-model=\"dev[e.id].metrics.title\" value=\"{{dev[e.id].metrics.title}}\" />\r" +
    "\n" +
    "                                            <button class=\"btn btn-primary\" ng-click=\"updateDevice(dev[e.id])\" ng-bind=\"_t('rename_element')\"></button> \r" +
    "\n" +
    "                                            <button class=\"btn\" \r" +
    "\n" +
    "                                                    ng-click=\"updateDevice({id: e.id, permanently_hidden: e.permanently_hidden ? false : true})\" \r" +
    "\n" +
    "                                                    ng-bind=\"e.permanently_hidden ? _t('show_element') : _t('hide_element')\"\r" +
    "\n" +
    "                                                    ng-class=\"e.permanently_hidden ? 'btn-danger' : 'btn-info'\"> </button>\r" +
    "\n" +
    "                                        </div>\r" +
    "\n" +
    "                                    </div>\r" +
    "\n" +
    "                                </fieldset>\r" +
    "\n" +
    "                                <fieldset ng-if=\"apiDevices\">\r" +
    "\n" +
    "                                    <!-- Rooms -->\r" +
    "\n" +
    "                                    <div class=\"form-group form-inline\" ng-if=\"rooms\">\r" +
    "\n" +
    "                                        <h3><i class=\"fa fa-chevron-down\"></i> <span ng-bind=\"_t('devices_to_room')\"></span></h3>\r" +
    "\n" +
    "                                        <select class=\"form-control\" ng-model=\"modelRoom\">\r" +
    "\n" +
    "                                            <option value=\"\">------</option>\r" +
    "\n" +
    "                                            <option ng-repeat=\"v in rooms\" ng-selected_=\"input.location == v.id\" value=\"{{v.id}}\" ng-bind=\"v.title\"></option>\r" +
    "\n" +
    "                                        </select>\r" +
    "\n" +
    "                                        <button class=\"btn btn-primary\" ng-click=\"devicesToRoom(modelRoom, apiDevices)\" ng-bind=\"_t('lb_save')\"></button> \r" +
    "\n" +
    "\r" +
    "\n" +
    "                                    </div>\r" +
    "\n" +
    "                                </fieldset>\r" +
    "\n" +
    "\r" +
    "\n" +
    "                                <!--<div class=\"submit-entry\">\r" +
    "\n" +
    "                                    <button class=\"btn btn-default\" ng-bind=\"_t('ok')\" bb-go-back></button>\r" +
    "\n" +
    "                                </div>-->\r" +
    "\n" +
    "                            </form>\r" +
    "\n" +
    "\r" +
    "\n" +
    "                        </td>\r" +
    "\n" +
    "                    </tr>\r" +
    "\n" +
    "                </tbody>\r" +
    "\n" +
    "            </table>\r" +
    "\n" +
    "\r" +
    "\n" +
    "        </div>\r" +
    "\n" +
    "        <div class=\"submit-entry save-continue\" ng-if=\"inclusion.done\">\r" +
    "\n" +
    "        <a href=\"#enocean/manage\" class=\"btn btn-info\">{{_t('continue')}} <i class=\"fa fa-chevron-right\"></i></a>\r" +
    "\n" +
    "        </div>\r" +
    "\n" +
    "    </div>\r" +
    "\n" +
    "      <div class=\"device-logo\" ng-include=\"'app/views/enocean/enocean_nav.html'\"></div>\r" +
    "\n" +
    "\r" +
    "\n" +
    "</div> <!-- /ng-controller --> "
  );


  $templateCache.put('app/views/enocean/controller.html',
    "<div ng-controller=\"EnoceanControllerController\" class=\"mobile-padding\">\r" +
    "\n" +
    "    <bb-loader></bb-loader> \r" +
    "\n" +
    "     <!-- Enocean navigation -->\r" +
    "\n" +
    "    <div ng-include=\"'app/views/enocean/navi.html'\"></div>\r" +
    "\n" +
    "    <div class=\"tab-content\">\r" +
    "\n" +
    "        <table class=\"table table-report table-condensed\">\r" +
    "\n" +
    "            <tbody>\r" +
    "\n" +
    "                <tr ng-repeat=\"(k,v) in controller\" id=\"row_controller_{{ v}}\" ng-if=\"controllerShow.indexOf(k) > -1\">\r" +
    "\n" +
    "                    <td style=\"width: 30%;\" ng-bind=\"k\"></td>\r" +
    "\n" +
    "                    <td ng-bind=\"v.value\"></td>\r" +
    "\n" +
    "                </tr>\r" +
    "\n" +
    "            </tbody>\r" +
    "\n" +
    "        </table>\r" +
    "\n" +
    "     </div>\r" +
    "\n" +
    "    <div class=\"device-logo\" ng-include=\"'app/views/enocean/enocean_nav.html'\"></div>\r" +
    "\n" +
    "</div> <!-- /ng-controller --> "
  );


  $templateCache.put('app/views/enocean/devices.html',
    "<div ng-controller=\"EnoceanDeviceController\" class=\"mobile-padding\">\r" +
    "\n" +
    "    <bb-loader></bb-loader> \r" +
    "\n" +
    "    \r" +
    "\n" +
    "    <div class=\"tab-content\">\r" +
    "\n" +
    "        <bb-alert alert=\"alert\"></bb-alert>\r" +
    "\n" +
    "        <div ng-if=\"hasEnOcean\">\r" +
    "\n" +
    "            <div class=\"row device-manufacturers\" ng-hide=\"enoceanDevices\">\r" +
    "\n" +
    "                <div class=\"col-sm-2 col-device-vendor\" ng-repeat=\"v in manufacturers\">\r" +
    "\n" +
    "                    <a ng-href=\"#enocean/devices/{{v.vendor}}\" class=\"vendor-list\">\r" +
    "\n" +
    "                        <p class=\"vendor-image\"><img ng-src=\"storage/img/enocean/vendors/{{v.vendorLogo}}\" alt=\"img\" ng-show=\"v.vendorLogo\" /></p>\r" +
    "\n" +
    "                    </a>\r" +
    "\n" +
    "                </div>\r" +
    "\n" +
    "            </div>\r" +
    "\n" +
    "            <div ng-if=\"manufacturer\">\r" +
    "\n" +
    "                <h3 class=\"mobile-padding\"><a class=\"btn btn-default btn-back\" href=\"\" bb-go-back><i class=\"fa fa-arrow-left\"></i></a> <span ng-bind=\"manufacturer\"></span></h3> \r" +
    "\n" +
    "                <table class=\"table table-condensed table-report table-products\">\r" +
    "\n" +
    "                    <tbody>\r" +
    "\n" +
    "                        <tr ng-repeat=\"v in enoceanDevices track by v.id\">\r" +
    "\n" +
    "                            <td class=\"td-img\">\r" +
    "\n" +
    "                                <img class=\"product-img\" ng-src=\"storage/img/enocean/devices/{{v.image}}\" alt=\"img\" />\r" +
    "\n" +
    "                            </td>\r" +
    "\n" +
    "                            <td class=\"text-left\">\r" +
    "\n" +
    "                                <span ng-bind=\"v.name\"></span>\r" +
    "\n" +
    "                            </td>\r" +
    "\n" +
    "\r" +
    "\n" +
    "                            <td class=\"td-action\">\r" +
    "\n" +
    "                                <a href=\"#enocean/teachin/{{v.id}}\" class=\"btn btn-default\"><i class=\"fa fa-plug text-primary\"></i> <span class=\"btn-name\" ng-bind=\"_t('teach_in')\"></span></a>\r" +
    "\n" +
    "                            </td>\r" +
    "\n" +
    "                        </tr>\r" +
    "\n" +
    "                    </tbody>\r" +
    "\n" +
    "                </table>\r" +
    "\n" +
    "            </div>\r" +
    "\n" +
    "        </div>\r" +
    "\n" +
    "    </div>\r" +
    "\n" +
    "    <div class=\"device-logo\" ng-include=\"'app/views/enocean/enocean_nav.html'\"></div>\r" +
    "\n" +
    "</div> <!-- /ng-controller --> "
  );


  $templateCache.put('app/views/enocean/enocean_nav.html',
    "<!-- Nav zwave -->\r" +
    "\n" +
    "<a href=\"#devices\"><img class=\"apps-image\" ng-src=\"app/img/logo-enocean.png\" alt=\"Logo\" /></a>"
  );


  $templateCache.put('app/views/enocean/manage.html',
    "<div ng-controller=\"EnoceanManageController\" class=\"mobile-padding\">\r" +
    "\n" +
    "    <bb-loader></bb-loader> \r" +
    "\n" +
    "    <!-- Enocean navigation -->\r" +
    "\n" +
    "    <div ng-include=\"'app/views/enocean/navi.html'\"></div>\r" +
    "\n" +
    "    <div class=\"tab-content\">\r" +
    "\n" +
    "        <div  ng-if=\"enoceanDevices\">\r" +
    "\n" +
    "             <!--<p ng-bind=\"_t('manage_enocean_devices')\"></p>-->\r" +
    "\n" +
    "            <table class=\"table table-condensed table-report\">\r" +
    "\n" +
    "                <tbody>\r" +
    "\n" +
    "                    <tr id=\"enocean_row_{{v.id}}\" ng-repeat=\"v in enoceanDevices track by v.id\">\r" +
    "\n" +
    "                        <td class=\"text-left\">\r" +
    "\n" +
    "                            <a href=\"\" class=\"network-zwave-title\" ng-click=\"goEdit[v.id] = !goEdit[v.id]\">\r" +
    "\n" +
    "                                <i class=\"fa\" ng-class=\"goEdit[v.id] ? 'fa-chevron-up': 'fa-chevron-down'\"></i> <span ng-bind=\"v.givenName\"></span> (#{{v.id}}) \r" +
    "\n" +
    "                            </a>\r" +
    "\n" +
    "                            <div class=\"network-zwave-element\" ng-repeat=\"e in v.elements| orderBy:'title':false\" ng-if=\"goEdit[v.id]\">\r" +
    "\n" +
    "                                <img class=\"report-img\" ng-src=\"{{e.metrics.icon|getElementIcon:e:e.level}}\" alt=\"img\" /> \r" +
    "\n" +
    "                                <span class=\"network-hidden-{{e.permanently_hidden}}\" ng-bind=\"e.title\"></span>\r" +
    "\n" +
    "                            </div>\r" +
    "\n" +
    "                        </td>\r" +
    "\n" +
    "\r" +
    "\n" +
    "                        <td class=\"td-action\">\r" +
    "\n" +
    "                            <a href=\"#enocean/manage/x{{v.id}}\" class=\"btn btn-default\"><i class=\"fa fa-cog text-primary\"></i> <span class=\"btn-name\" ng-bind=\"_t('lb_configuration')\"></span></a>\r" +
    "\n" +
    "                            <button title=\"{{_t('lb_remove')}}\"\r" +
    "\n" +
    "                                    class=\"btn btn-default\"\r" +
    "\n" +
    "                                    ng-click=\"deleteDevice(v.id, '#enocean_row_' + v.id, _t('lb_delete_confirm'))\"\r" +
    "\n" +
    "                                    >\r" +
    "\n" +
    "                                <i class=\"fa fa-remove fa-lg text-danger\"></i>\r" +
    "\n" +
    "                            </button>\r" +
    "\n" +
    "                        </td>\r" +
    "\n" +
    "                    </tr>\r" +
    "\n" +
    "                </tbody>\r" +
    "\n" +
    "            </table>\r" +
    "\n" +
    "        </div>\r" +
    "\n" +
    "    </div>\r" +
    "\n" +
    "    <div class=\"device-logo\" ng-include=\"'app/views/enocean/enocean_nav.html'\"></div>\r" +
    "\n" +
    "</div> <!-- /ng-controller --> "
  );


  $templateCache.put('app/views/enocean/manage_detail.html',
    "<div ng-controller=\"EnoceanManageDetailController\" class=\"mobile-padding\">\r" +
    "\n" +
    "    <bb-loader></bb-loader> \r" +
    "\n" +
    "    <!-- Enocean navigation -->\r" +
    "\n" +
    "    <div ng-include=\"'app/views/enocean/navi.html'\"></div>\r" +
    "\n" +
    "     <div class=\"tab-content\">\r" +
    "\n" +
    "    <h2><span ng-bind=\"_t('enocean_device')\"></span>: {{input.name}} (#{{input.id}})</h2>\r" +
    "\n" +
    "    <form name=\"form_enocean_edit\" id=\"form_enocean_edit\" class=\"form form-page\" ng-submit=\"store(input)\" novalidate>\r" +
    "\n" +
    "        <fieldset>\r" +
    "\n" +
    "                <!-- name  -->\r" +
    "\n" +
    "                <h3><i class=\"fa fa-chevron-down\"></i> <span ng-bind=\"_t('lb_name')\"></span></h3>\r" +
    "\n" +
    "                <div class=\"form-group\">\r" +
    "\n" +
    "                    <input name=\"name\" id=\"name\" type=\"text\" class=\"form-control\" value=\"{{input.name}}\" ng-model=\"input.name\" />\r" +
    "\n" +
    "                </div>\r" +
    "\n" +
    "                \r" +
    "\n" +
    "                 <!-- Profile -->\r" +
    "\n" +
    "                 <h3><i class=\"fa fa-chevron-down\"></i> <span ng-bind=\"_t('select_profile')\"></span></h3>\r" +
    "\n" +
    "                <div class=\"form-group\">\r" +
    "\n" +
    "                    <select name=\"enoceanProfiles\" class=\"form-control\" ng-model=\"input.profileId\">\r" +
    "\n" +
    "                       <option value=\"{{manProfile}}\" \r" +
    "\n" +
    "                                 ng-repeat=\"v in enoceanProfiles | orderBy:'_funcDescription'\" \r" +
    "\n" +
    "                                 ng-init=\"manProfile = {rorg:v._rorg,funcId: v._func,typeId: v._type}\"\r" +
    "\n" +
    "                                 ng-selected=\"v.id == input.deviceProfileId\"\r" +
    "\n" +
    "                                 ng-if=\"input.rorg == v.rorgInt\">{{v._funcDescription}} | rorg: {{v._rorg}} | func: {{v._func}} | type: {{v._type}}</option>\r" +
    "\n" +
    "                                </select>\r" +
    "\n" +
    "                </div>\r" +
    "\n" +
    "        </fieldset>\r" +
    "\n" +
    "        <fieldset class=\"submit-entry\">\r" +
    "\n" +
    "                    <button type=\"submit\" class=\"btn btn-primary\" ng-bind=\"_t('lb_save')\"></button>\r" +
    "\n" +
    "                </fieldset>\r" +
    "\n" +
    "    </form>\r" +
    "\n" +
    "    \r" +
    "\n" +
    "    <form name=\"form_enocean_config\" id=\"form_enocean_config\" class=\"form form-page\" novalidate ng-if=\"apiDevices\">\r" +
    "\n" +
    "        <fieldset>\r" +
    "\n" +
    "        <div class=\"form-group form-inline\" ng-repeat=\"e in apiDevices | orderBy:'title':false\" ng-init=\"dev[e.id] = e\">\r" +
    "\n" +
    "            <h3>\r" +
    "\n" +
    "                <img id=\"widget_img_{{v.id}}\" class=\"report-img\" ng-src=\"{{e.metrics.icon|getElementIcon:e:e.level}}\" alt=\"img\" />\r" +
    "\n" +
    "                 <span ng-bind=\"dev[e.id].metrics.title\"></span>\r" +
    "\n" +
    "            </h3>\r" +
    "\n" +
    "                <div>\r" +
    "\n" +
    "                        <input type=\"text\" name=\"fdf\" class=\"form-control form-control-md\" ng-model=\"dev[e.id].metrics.title\" value=\"{{dev[e.id].metrics.title}}\" />\r" +
    "\n" +
    "                         <button class=\"btn btn-primary\" ng-click=\"updateDevice(dev[e.id])\" ng-bind=\"_t('rename_element')\"></button> \r" +
    "\n" +
    "                         <button class=\"btn\" \r" +
    "\n" +
    "                             ng-click=\"updateDevice({id: e.id,permanently_hidden: e.permanently_hidden ? false : true})\" \r" +
    "\n" +
    "                             ng-bind=\"e.permanently_hidden ? _t('show_element') : _t('hide_element')\"\r" +
    "\n" +
    "                             ng-class=\"e.permanently_hidden ? 'btn-danger' : 'btn-info'\"> </button>\r" +
    "\n" +
    "                 </div>\r" +
    "\n" +
    "            </div>\r" +
    "\n" +
    "        </fieldset>\r" +
    "\n" +
    "         <fieldset>\r" +
    "\n" +
    "            <!-- Rooms -->\r" +
    "\n" +
    "            <div class=\"form-group form-inline\">\r" +
    "\n" +
    "                <h3><i class=\"fa fa-chevron-down\"></i> <span ng-bind=\"_t('devices_to_room')\"></span></h3>\r" +
    "\n" +
    "                <select class=\"form-control\" ng-model=\"modelRoom\">\r" +
    "\n" +
    "                    <option ng-repeat=\"v in rooms\" value=\"{{v.id}}\" ng-bind=\"(v.id === 0 ? _t(v.title) : v.title)\"></option>\r" +
    "\n" +
    "                </select>\r" +
    "\n" +
    "                <button class=\"btn btn-primary\" ng-click=\"devicesToRoom(modelRoom, apiDevices)\" ng-bind=\"_t('lb_save')\"></button> \r" +
    "\n" +
    "\r" +
    "\n" +
    "            </div>\r" +
    "\n" +
    "        </fieldset>\r" +
    "\n" +
    "    </form>\r" +
    "\n" +
    "     <div class=\"submit-entry save-continue\">\r" +
    "\n" +
    "            <button class=\"btn btn-info\" bb-go-back>{{_t('continue')}} <i class=\"fa fa-chevron-right\"></i></button>\r" +
    "\n" +
    "        </div>\r" +
    "\n" +
    "   </div>\r" +
    "\n" +
    "    <div class=\"device-logo\" ng-include=\"'app/views/enocean/enocean_nav.html'\"></div>\r" +
    "\n" +
    "</div> <!-- /ng-controller --> "
  );


  $templateCache.put('app/views/enocean/navi.html',
    "<ul class=\"nav nav-tabs nav-tabs-3\" role=\"tablist\">\r" +
    "\n" +
    "    <li ng-class=\"activeTab == 'controller' ? 'active' : ''\">\r" +
    "\n" +
    "         <a href=\"#enocean/controller\"><i class=\"fa fa-info-circle\"></i> <span class=\"tab-name\">{{_t('controller_info')}}</span></a>\r" +
    "\n" +
    "    </li>\r" +
    "\n" +
    "    <li ng-class=\"activeTab == 'manage' ? 'active' : ''\">\r" +
    "\n" +
    "         <a href=\"#enocean/manage\"><i class=\"fa fa-edit\"></i> <span class=\"tab-name\">{{_t('manage')}}</span></a>\r" +
    "\n" +
    "    </li>\r" +
    "\n" +
    "    <li ng-class=\"activeTab == 'assign' ? 'active' : ''\">\r" +
    "\n" +
    "        <a href=\"#enocean/assign\"><i class=\"fa fa-book\"></i> <span class=\"tab-name\">{{_t('teach_in')}}</span></a>\r" +
    "\n" +
    "    </li>\r" +
    "\n" +
    "</ul>\r" +
    "\n"
  );


  $templateCache.put('app/views/enocean/teachin.html',
    "<div ng-controller=\"EnoceanTeachinController\" class=\"mobile-padding\">\r" +
    "\n" +
    "     <bb-loader></bb-loader> \r" +
    "\n" +
    "    <!-- Auto inclusion -->\r" +
    "\n" +
    "    <div class=\"device-perex clearfix\">\r" +
    "\n" +
    "        <div class=\"include-device-img\" ng-if=\"device.image\">\r" +
    "\n" +
    "            <img ng-src=\"storage/img/enocean/devices/{{device.image}}\" alt=\"img\" ng-if=\"device.image\" />\r" +
    "\n" +
    "        </div>\r" +
    "\n" +
    "\r" +
    "\n" +
    "        <div class=\"include-device-txt\">\r" +
    "\n" +
    "            <p ng-bind=\"_t('teach_in')\"></p>\r" +
    "\n" +
    "            <h1 ng-bind=\"device.name\"></h1>\r" +
    "\n" +
    "            <p ng-if=\"device.description\" ng-bind=\"device.description\"></p>\r" +
    "\n" +
    "        </div>\r" +
    "\n" +
    "    </div>\r" +
    "\n" +
    "    <!-- inclusion -->\r" +
    "\n" +
    "    <div class=\"col-device app-border app-gradient app-shadow\">\r" +
    "\n" +
    "            <table class=\"table table-report table-inclusion\">\r" +
    "\n" +
    "                <tbody>\r" +
    "\n" +
    "                    <!-- 1 -->\r" +
    "\n" +
    "                    <tr>\r" +
    "\n" +
    "                        <td><span class=\"badge badge-number\">1</span></td>\r" +
    "\n" +
    "                        <td>\r" +
    "\n" +
    "                            <div class=\"alert\" ng-if=\"inclusion.message\" ng-class=\"inclusion.status\">\r" +
    "\n" +
    "                                <i class=\"fa fa-lg\" ng-class=\"inclusion.icon\"></i> <span ng-bind-html=\"inclusion.message | toTrusted\"></span>\r" +
    "\n" +
    "                                <button\r" +
    "\n" +
    "                                    class=\"btn btn-danger btn-sm\"\r" +
    "\n" +
    "                                    ng-if=\"!inclusion.done && inclusion.promisc\"\r" +
    "\n" +
    "                                    ng-click=\"runCmd('controller.data.promisc=false')\">\r" +
    "\n" +
    "                                    <span ng-bind=\"_t('stop_teachin')\"></span>\r" +
    "\n" +
    "                                </button>\r" +
    "\n" +
    "                                <button class=\"btn btn-success btn-sm\"\r" +
    "\n" +
    "                                        ng-if=\"!inclusion.done && !inclusion.promisc\"\r" +
    "\n" +
    "                                        ng-click=\"runCmd('controller.data.promisc=true')\"\r" +
    "\n" +
    "                                        ><span ng-bind=\"_t('start_teachin')\"></span></button>\r" +
    "\n" +
    "                            </div>\r" +
    "\n" +
    "                        </td>\r" +
    "\n" +
    "                    </tr>\r" +
    "\n" +
    "                    <!-- 2 -->\r" +
    "\n" +
    "                    <tr>\r" +
    "\n" +
    "                        <td><span class=\"badge badge-number\">2</span></td>\r" +
    "\n" +
    "                        <td>\r" +
    "\n" +
    "                            <strong ng-bind=\"_t('lb_settings')\"></strong>\r" +
    "\n" +
    "                            <form name=\"form_enocean_config\" id=\"form_enocean_config\" class=\"form form-page\" ng-if=\"inclusion.config\" novalidate>\r" +
    "\n" +
    "                                 <!-- <p>{{lastIncludedDevice.profile._funcDescription}} (#{{lastIncludedDevice.id}})</p> -->\r" +
    "\n" +
    "                                    <!-- Name  -->\r" +
    "\n" +
    "                                    <fieldset>\r" +
    "\n" +
    "                                         <div class=\"form-group form-inline\">\r" +
    "\n" +
    "                                        <input type=\"text\" name=\"enocean_name\" id=\"enocean_name\" class=\"form-control form-control-md\" \r" +
    "\n" +
    "                                               ng-model=\"lastIncludedDevice.name\" value=\"{{lastIncludedDevice.name}}\" />\r" +
    "\n" +
    "                                        <button class=\"btn btn-primary\" ng-click=\"runCmd('devices[\\'x' + lastIncludedDevice.id + '\\'].data.givenName=\\'' + lastIncludedDevice.name + '\\'')\" ng-bind=\"_t('rename_device')\"></button>\r" +
    "\n" +
    "                                    </div>\r" +
    "\n" +
    "                                    </fieldset>\r" +
    "\n" +
    "                                <div class=\"alert alert-warning\" ng-if=\"apiDevices.length < 1\">\r" +
    "\n" +
    "                                <i class=\"fa fa-lg fa-exclamation-circle\"></i> <span ng-bind=\"_t('enocean_no_settings')\"></span>\r" +
    "\n" +
    "                                </div>\r" +
    "\n" +
    "                                    \r" +
    "\n" +
    "                                <fieldset ng-if=\"apiDevices\">\r" +
    "\n" +
    "                                <div class=\"form-group form-inline\" ng-repeat=\"e in apiDevices | orderBy:'title':false\" ng-init=\"dev[e.id] = e\">\r" +
    "\n" +
    "\r" +
    "\n" +
    "                                    <h3>\r" +
    "\n" +
    "                                        <img id=\"widget_img_{{v.id}}\" class=\"report-img\" ng-src=\"{{e.metrics.icon|getElementIcon:e:e.level}}\" alt=\"img\" />\r" +
    "\n" +
    "                                         <span ng-bind=\"dev[e.id].metrics.title\"></span>\r" +
    "\n" +
    "                                    </h3>\r" +
    "\n" +
    "                                        <div>\r" +
    "\n" +
    "                                                <input type=\"text\" name=\"fdf\" class=\"form-control form-control-md\" ng-model=\"dev[e.id].metrics.title\" value=\"{{dev[e.id].metrics.title}}\" />\r" +
    "\n" +
    "                                                 <button class=\"btn btn-primary\" ng-click=\"updateDevice(dev[e.id])\" ng-bind=\"_t('rename_element')\"></button> \r" +
    "\n" +
    "                                                 <button class=\"btn\" \r" +
    "\n" +
    "                                                     ng-click=\"updateDevice({id: e.id,permanently_hidden: e.permanently_hidden ? false : true})\" \r" +
    "\n" +
    "                                                     ng-bind=\"e.permanently_hidden ? _t('show_element') : _t('hide_element')\"\r" +
    "\n" +
    "                                                     ng-class=\"e.permanently_hidden ? 'btn-danger' : 'btn-info'\"> </button>\r" +
    "\n" +
    "                                         </div>\r" +
    "\n" +
    "                                    </div>\r" +
    "\n" +
    "                                </fieldset>\r" +
    "\n" +
    "                                <fieldset ng-if=\"apiDevices\">\r" +
    "\n" +
    "                                    <!-- Rooms -->\r" +
    "\n" +
    "                                    <div class=\"form-group form-inline\" ng-if=\"rooms\" >\r" +
    "\n" +
    "                                        <h3><i class=\"fa fa-chevron-down\"></i> <span ng-bind=\"_t('devices_to_room')\"></span></h3>\r" +
    "\n" +
    "                                        <select class=\"form-control\" ng-model=\"modelRoom\">\r" +
    "\n" +
    "                                            <option value=\"\">------</option>\r" +
    "\n" +
    "                                            <option ng-repeat=\"v in rooms\" ng-selected_=\"input.location == v.id\" value=\"{{v.id}}\" ng-bind=\"v.title\"></option>\r" +
    "\n" +
    "                                        </select>\r" +
    "\n" +
    "                                        <button class=\"btn btn-primary\" ng-click=\"devicesToRoom(modelRoom, apiDevices)\" ng-bind=\"_t('lb_save')\"></button> \r" +
    "\n" +
    "\r" +
    "\n" +
    "                                    </div>\r" +
    "\n" +
    "                                </fieldset>\r" +
    "\n" +
    "                                \r" +
    "\n" +
    "                                <!--<div class=\"submit-entry\">\r" +
    "\n" +
    "                                    <button class=\"btn btn-default\" ng-bind=\"_t('ok')\" bb-go-back></button>\r" +
    "\n" +
    "                                </div>-->\r" +
    "\n" +
    "                            </form>\r" +
    "\n" +
    "                            \r" +
    "\n" +
    "                        </td>\r" +
    "\n" +
    "                    </tr>\r" +
    "\n" +
    "                </tbody>\r" +
    "\n" +
    "            </table>\r" +
    "\n" +
    "\r" +
    "\n" +
    "        </div>\r" +
    "\n" +
    "    <div class=\"submit-entry save-continue\">\r" +
    "\n" +
    "        <a href=\"#enocean/manage\" class=\"btn btn-info\">{{_t('manage_enocean_devices')}} <i class=\"fa fa-chevron-right\"></i></a>\r" +
    "\n" +
    "        </div>\r" +
    "\n" +
    "    <div class=\"device-logo\" ng-include=\"'app/views/enocean/enocean_nav.html'\"></div>\r" +
    "\n" +
    "</div> <!-- /ng-controller --> "
  );


  $templateCache.put('app/views/error.html',
    "<!-- Error view -->\r" +
    "\n" +
    "<div ng-controller=\"ErrorController\">\r" +
    "\n" +
    "    <div class=\"alert alert-danger\">\r" +
    "\n" +
    "        <i class=\"fa {{errorCfg.icon}}\"></i> <span ng-bind=\"_t('error_' + errorCfg.code)\"></span><br />\r" +
    "\n" +
    "        <strong ng-if=\"errorCfg.code == 401\">\r" +
    "\n" +
    "            <a ng-href=\"#login\">You are not authorized. Please login</a>\r" +
    "\n" +
    "        </strong>\r" +
    "\n" +
    "    </div>\r" +
    "\n" +
    "</div><!-- /ng-controller --> "
  );


  $templateCache.put('app/views/events/events.html',
    "<!-- Events view -->\r" +
    "\n" +
    "<div ng-controller=\"EventController\">\r" +
    "\n" +
    "    <bb-loader></bb-loader>\r" +
    "\n" +
    "     <h2 ng-if=\"page.title\">{{page.title|cutText:true:50}}</h2>\r" +
    "\n" +
    "    <div class=\"events-header\">\r" +
    "\n" +
    "        <button class=\"btn btn-default\" ng-click=\"changeTime(1)\" ng-disabled=\"timeFilter.day == 1\" ng-bind=\"_t('lb_today')\"></button>\r" +
    "\n" +
    "        <button class=\"btn btn-default\" ng-click=\"changeTime(2)\" ng-disabled=\"timeFilter.day == 2\" ng-bind=\"_t('lb_yesterday')\"></button>\r" +
    "\n" +
    "        <!--<button class=\"btn btn-default\" ng-click=\"changeTime(3)\" ng-disabled=\"timeFilter.day == 3\">3 <span ng-bind=\"_t('lb_days')\"></span></button>\r" +
    "\n" +
    "        <button class=\"btn btn-default\" ng-click=\"changeTime(4)\" ng-disabled=\"timeFilter.day == 4\">4 <span ng-bind=\"_t('lb_days')\"></span></button>\r" +
    "\n" +
    "        <button class=\"btn btn-default\" ng-click=\"changeTime(5)\" ng-disabled=\"timeFilter.day == 5\">5 <span ng-bind=\"_t('lb_days')\"></span></button>\r" +
    "\n" +
    "        <button class=\"btn btn-default\" ng-click=\"changeTime(6)\" ng-disabled=\"timeFilter.day == 6\">6 <span ng-bind=\"_t('lb_days')\"></span></button>-->\r" +
    "\n" +
    "        <button class=\"btn btn-default\" ng-click=\"changeTime(7)\" ng-disabled=\"timeFilter.day == 7\">7 <span ng-bind=\"_t('lb_days')\"></span></button>\r" +
    "\n" +
    "    </div>\r" +
    "\n" +
    "      <div class=\"info-lert\" ng-if=\"collection.length < 1 || devices.find.id\"><i class=\"fa fa-info-circle text-info\"></i> {{_t('device_no_event')}}.</div>\r" +
    "\n" +
    "    <div class=\"table-responsive_\">\r" +
    "\n" +
    "        <table class=\"table table-condensed table-report table-events\">\r" +
    "\n" +
    "            <tbody>\r" +
    "\n" +
    "                <tr class=\"td-event-{{v.level}}\" dir-paginate=\"v in collection | orderBy: '-timestamp' | itemsPerPage: pageSize\" current-page=\"currentPage\" id=\"row_{{v.id}}\">\r" +
    "\n" +
    "\r" +
    "\n" +
    "                    <td class=\"td-event-icon td-event-{{v.level}}\">\r" +
    "\n" +
    "                        <img id=\"event_img_{{v.id}}\" class=\"report-img\" ng-src=\"storage/img/events/{{v.type|getEventIcon:v.message}}\" alt=\"{{v.type}}\"/>\r" +
    "\n" +
    "\r" +
    "\n" +
    "                    </td>\r" +
    "\n" +
    "                    <td>\r" +
    "\n" +
    "                        <span class=\"text-supp event-date\" title=\"{{v.timestamp| date:'dd.MM.yyyy H:mm'}}\" ng-bind=\"v.timestamp | eventDate\"></span> <span class=\"hide-on-mobile\">|</span>\r" +
    "\n" +
    "                        <span  ng-if=\"v.source && v.message\">\r" +
    "\n" +
    "                        <a ng-href=\"#element/{{v.source}}\" ng-if=\"elementAccess(cfg.role_access.element) && (cfg.events_clickable.indexOf(v.level) > -1)\">\r" +
    "\n" +
    "                            <span ng-if=\"v.message | hasNode:'l'\"> <span ng-bind=\"v.message.dev\"></span> {{_t('lb_is')}} <strong ng-bind=\"v.message.l\"></strong></span>\r" +
    "\n" +
    "                            <span ng-if=\"!(v.message | hasNode:'l')\" ng-bind=\"v.message\"></span>\r" +
    "\n" +
    "                         </a>\r" +
    "\n" +
    "                         <span  ng-if=\"!elementAccess(cfg.role_access.element) || (cfg.events_clickable.indexOf(v.level) === -1)\">\r" +
    "\n" +
    "                            <span ng-if=\"v.message | hasNode:'l'\"> <span ng-bind=\"v.message.dev\"></span> {{_t('lb_is')}} <strong ng-bind=\"v.message.l\"></strong></span>\r" +
    "\n" +
    "                            <span ng-if=\"!(v.message | hasNode:'l')\" ng-bind=\"v.message\"></span>\r" +
    "\n" +
    "                         </span>\r" +
    "\n" +
    "                         </span>\r" +
    "\n" +
    "                        <span class=\"report-message\" ng-bind=\"v.message\" ng-if=\"!v.source && !v.message\"></span>\r" +
    "\n" +
    "                    </td>\r" +
    "\n" +
    "                    <td class=\"td-action\">\r" +
    "\n" +
    "                        <div class=\"btn-group\">\r" +
    "\n" +
    "                            <button type=\"button\" class=\"btn btn-default dropdown-toggle\" data-toggle=\"dropdown\"><i class=\"fa fa-caret-down\"></i></button>\r" +
    "\n" +
    "                            <ul class=\"dropdown-menu pull-right\">\r" +
    "\n" +
    "                                <!--<li><a href=\"\" ng-click=\"markAsRead(v.id)\" ng-bind=\"_t('lb_mark_read')\"></a></li>-->\r" +
    "\n" +
    "                                <li>\r" +
    "\n" +
    "                                    <a ng-href=\"#events\"> <i class=\"fa fa-eye\"></i> <span ng-bind=\"_t('lb_show_all')\"></span></a>\r" +
    "\n" +
    "                                </li>\r" +
    "\n" +
    "                                <li>\r" +
    "\n" +
    "                                    <a ng-href=\"#events/source/{{v.source}}\"><i class=\"fa fa-check\"></i> <span ng-bind=\"_t('lb_events_source')\"></span></a>\r" +
    "\n" +
    "                                </li> \r" +
    "\n" +
    "                                <li>\r" +
    "\n" +
    "                                    <a ng-href=\"#events/type/{{v.type}}\"><i class=\"fa fa-check-square\"></i> <span ng-bind=\"_t('lb_events_type')\"></span></a>\r" +
    "\n" +
    "                                </li> \r" +
    "\n" +
    "                                <li>\r" +
    "\n" +
    "                                    <a ng-href=\"#events/source_type?source={{v.source}}&type={{v.type}}\">\r" +
    "\n" +
    "                                        <i class=\"fa fa-check-circle\"></i> <span ng-bind=\"_t('lb_events_source_type')\"></span>\r" +
    "\n" +
    "                                    </a>\r" +
    "\n" +
    "                                </li>\r" +
    "\n" +
    "                                <li ng-if=\"elementAccess(cfg.role_access.element) && (cfg.events_clickable.indexOf(v.level) > -1) && (v.source && v.message)\">\r" +
    "\n" +
    "                                    <a href=\"#element/{{v.source}}\">\r" +
    "\n" +
    "                                        <i class=\"fa fa-cog\"></i> <span ng-bind=\"_t('lb_source_cfg')\"></span>   \r" +
    "\n" +
    "                                    </a>\r" +
    "\n" +
    "                                </li> \r" +
    "\n" +
    "                                <li>\r" +
    "\n" +
    "\r" +
    "\n" +
    "                                    <a href=\"\" ng-click=\"hideSourceEvents(v.source)\" \r" +
    "\n" +
    "                                       ng-if=\"user.hide_single_device_events.indexOf(v.source) === -1\">\r" +
    "\n" +
    "                                        <i class=\"fa fa-minus-circle text-danger\"></i> <span  ng-bind=\"_t('lb_hide_events_source')\" ></span>\r" +
    "\n" +
    "                                    </a>\r" +
    "\n" +
    "                                </li>\r" +
    "\n" +
    "                                <li ng-if=\"elementAccess(cfg.role_access.event_delete)\">\r" +
    "\n" +
    "                                    <a href=\"\"ng-click=\"deleteEvent(v.id, '?uid=' + v.h, '#row_' + v.id,_t('lb_delete_confirm'))\" ng-if=\"v.level == 'error' || v.level == 'notification'\">\r" +
    "\n" +
    "                                        <i class=\"fa fa-times text-danger\"></i> <span  ng-bind=\"_t('lb_delete_event')\" ></span>\r" +
    "\n" +
    "                                    </a>\r" +
    "\n" +
    "                                </li>\r" +
    "\n" +
    "\r" +
    "\n" +
    "                            </ul>\r" +
    "\n" +
    "                        </div>\r" +
    "\n" +
    "                    </td>\r" +
    "\n" +
    "                </tr>\r" +
    "\n" +
    "            </tbody>\r" +
    "\n" +
    "        </table>\r" +
    "\n" +
    "        <div class=\"info-lert\" ng-if=\"user.hide_all_device_events || user.hide_system_events\"><i class=\"fa fa-info-circle text-info\"></i> <span ng-bind=\"_t('events_hidden')\"></span></div>\r" +
    "\n" +
    "        <div class=\"text-center mobile-padding\" ng-if=\"collection.length > 0\">\r" +
    "\n" +
    "            <dir-pagination-controls boundary-links=\"true\"></dir-pagination-controls>\r" +
    "\n" +
    "        </div>\r" +
    "\n" +
    "    </div>\r" +
    "\n" +
    "    <!-- Elements footer view -->\r" +
    "\n" +
    "    <div id=\"footer\">\r" +
    "\n" +
    "        <div class=\"navbar navbar-default navbar-fixed-bottom\">\r" +
    "\n" +
    "            <div class=\"container\">\r" +
    "\n" +
    "                <form class=\"form-inline form-events-filter\" role=\"form\">\r" +
    "\n" +
    "                     <div class=\"btn-group dropup\">\r" +
    "\n" +
    "                        {{_t('lb_filter_by')}}:\r" +
    "\n" +
    "                         </div>\r" +
    "\n" +
    "                     <div class=\"btn-group dropup\">\r" +
    "\n" +
    "                        <button type=\"button\" class=\"btn btn-default\" ng-bind=\"_t('error_type')\"></button>\r" +
    "\n" +
    "                        <button type=\"button\" class=\"btn btn-default dropdown-toggle\" data-toggle=\"dropdown\">\r" +
    "\n" +
    "                             <i class=\"fa fa-caret-up\"></i>\r" +
    "\n" +
    "                        </button>\r" +
    "\n" +
    "                        <ul class=\"dropdown-menu dropdown-menu-bottomr\">\r" +
    "\n" +
    "                            <li ng-repeat=\"v in eventLevels\" ng-class=\"v.key == currLevel ? 'active':''\">\r" +
    "\n" +
    "                                <a href=\"#events/level/{{v.key}}\"><i class=\"fa fa-check\" ng-if=\"v.key == currLevel\"></i> {{_t('lb_notify_' + v.val)}}</a> \r" +
    "\n" +
    "                            </li>\r" +
    "\n" +
    "                        </ul>\r" +
    "\n" +
    "                    </div>\r" +
    "\n" +
    "                    <div class=\"btn-group dropup\">\r" +
    "\n" +
    "                        <button type=\"button\" class=\"btn btn-default\">\r" +
    "\n" +
    "                              <span ng-if_=\"!devices.find.title\">{{_t('lb_device')}}</span>\r" +
    "\n" +
    "                        </button>\r" +
    "\n" +
    "                        <button type=\"button\" class=\"btn btn-default dropdown-toggle\" data-toggle=\"dropdown\">\r" +
    "\n" +
    "                            <i class=\"fa fa-caret-up\"></i>\r" +
    "\n" +
    "                        </button>\r" +
    "\n" +
    "                        <ul class=\"dropdown-menu dropdown-menu-bottom pull-right\">\r" +
    "\n" +
    "                            <!--<li><a href=\"\" ng-click=\"markAsRead(v.id)\" ng-bind=\"_t('lb_mark_read')\"></a></li>-->\r" +
    "\n" +
    "                            <li ng-repeat=\"v in devices.data\" ng-class=\"v.id===devices.find.id ? 'active':''\">\r" +
    "\n" +
    "                                <a ng-href=\"#events/source/{{v.id}}\"><i class=\"fa fa-check\" ng-if=\"v.id===devices.find.id\"></i> {{v.metrics.title}}</a>\r" +
    "\n" +
    "                            </li>\r" +
    "\n" +
    "                         </ul>\r" +
    "\n" +
    "                    </div>\r" +
    "\n" +
    "                </form>\r" +
    "\n" +
    "            </div>\r" +
    "\n" +
    "        </div>\r" +
    "\n" +
    "    </div>\r" +
    "\n" +
    "</div> <!-- /ng-controller --> "
  );


  $templateCache.put('app/views/expertui/configuration.html',
    "<!-- Configuration view -->\r" +
    "\n" +
    "<div ng-controller=\"ConfigConfigurationController\" class=\"mobile-padding\">\r" +
    "\n" +
    "     <bb-loader></bb-loader>\r" +
    "\n" +
    "    <!-- Config navigation -->\r" +
    "\n" +
    "\r" +
    "\n" +
    "    <div ng-show=\"deviceId > 0\">\r" +
    "\n" +
    "        <h1>(#{{deviceId}}) <span ng-bind=\"deviceName\"></span></h1> \r" +
    "\n" +
    "         <!--<div class=\"alert alert-warning\" ng-show=\"!configCont\"><i class=\"fa fa-exclamation-triangle\"></i> {{_t('no_zddx_file')}}</div>-->\r" +
    "\n" +
    "\r" +
    "\n" +
    "        <!-- config_cont -->\r" +
    "\n" +
    "        <div class=\"cfg-block\" id=\"config_cont\" ng-if=\"configCont\">\r" +
    "\n" +
    "\r" +
    "\n" +
    "             <h2>{{_t('configurations_list')}}</h2>\r" +
    "\n" +
    "            <div class=\"alert-list\">\r" +
    "\n" +
    "        <p class=\"text-danger text-alert-list\" ng-repeat=\"v in configCont\" ng-if=\"v.configCconfigValue != v.configZwaveValue\">{{v.label}}: {{_t('value_changed_to')}} <strong config-value-title collection='v' show_value='v.configCconfigValue'></strong> {{_t('value_not_stored_indevice')}}</p>\r" +
    "\n" +
    "    </div>\r" +
    "\n" +
    "            <div class=\"cfg-block-content\" ng-init=\"formName = 'form_config'\">\r" +
    "\n" +
    "                <form \r" +
    "\n" +
    "                    name=\"{{formName}}\" \r" +
    "\n" +
    "                    id=\"{{formName}}\"\r" +
    "\n" +
    "                    class=\"form\" \r" +
    "\n" +
    "                    role=\"form\"\r" +
    "\n" +
    "                    ng-submit=\"submitApplyConfigCfg(formName,{'id': deviceId,'instance': '0','commandclass': '70','command': 'Set'}, configCont, hasBattery)\" \r" +
    "\n" +
    "                    novalidate>\r" +
    "\n" +
    "                    <div class=\"cfg-control-content\" id=\"cfg_control_{{v.confNum}}\" ng-repeat=\"v in configCont\">\r" +
    "\n" +
    "                        \r" +
    "\n" +
    "                        <div class=\"form-inline\">\r" +
    "\n" +
    "                            <expert-command-input\r" +
    "\n" +
    "                                collection='v'\r" +
    "\n" +
    "                                div_id='$index'\r" +
    "\n" +
    "                                default_value='v.defaultValue'\r" +
    "\n" +
    "                                show_default_value='v.showDefaultValue'\r" +
    "\n" +
    "                                curr_value='v.configCconfigValue'\r" +
    "\n" +
    "                                ></expert-command-input>\r" +
    "\n" +
    "                        </div>\r" +
    "\n" +
    "                        <div class=\"text-danger text-alert\" ng-if=\"v.configCconfigValue != v.configZwaveValue\" title=\"Val: {{v.configCconfigValue}} | Device: {{v.configZwaveValue}}\"><i class=\"fa fa-exclamation-triangle\"></i> {{_t('value_changed_to')}} <strong config-value-title collection='v' show_value='v.configCconfigValue'></strong> {{_t('value_not_stored_indevice')}}</div> \r" +
    "\n" +
    "                        <p class=\"cfg-info\">\r" +
    "\n" +
    "\r" +
    "\n" +
    "                            <span class=\"is-updated-{{v.isUpdated}}\">{{_t('updated')}}: {{v.updateTime}}</span>\r" +
    "\n" +
    "\r" +
    "\n" +
    "                            <span> | {{_t('default_value_is')}}: <config-default-value collection='v' show_default_value='v.showDefaultValue' default_value='v.defaultValue'></config-default-value></span>\r" +
    "\n" +
    "                            <!-- <span ng-if=\"v.showDefaultValue > -1\"> | {{_t('default_value_is')}}: {{v.showDefaultValue}}</span>\r" +
    "\n" +
    "                            <span ng-if=\"v.defaultValue === ''\"> | {{_t('param_default_value_undefined')}}</span>-->\r" +
    "\n" +
    "                            <span ng-if=\"v.description\">  | \r" +
    "\n" +
    "                                <a href=\"\" ng-click=\"goInfo = !goInfo\"><i class=\"fa fa-info-circle fa-lg\"></i></a> \r" +
    "\n" +
    "                                <em ng-show=\"goInfo\">{{v.description}}</em>\r" +
    "\n" +
    "                            </span>\r" +
    "\n" +
    "                        </p>\r" +
    "\n" +
    "                        <button \r" +
    "\n" +
    "                            type=\"button\" \r" +
    "\n" +
    "                            class=\"btn btn-info spin-true\"\r" +
    "\n" +
    "                            ng-click=\"submitApplyConfigCfg(formName, {'id': deviceId, 'instance': '0', 'commandclass': '70', 'command': 'Set'}, configCont, hasBattery,v.confNum)\"\r" +
    "\n" +
    "                            >{{_t('apply_config_into_device')}} <i class=\"fa fa-spinner fa-spin\"></i></button>\r" +
    "\n" +
    "\r" +
    "\n" +
    "\r" +
    "\n" +
    "                    </div>\r" +
    "\n" +
    "                    <fieldset class=\"submit-entry\">\r" +
    "\n" +
    "                        <button type=\"button\" class=\"btn btn-default\" bb-go-back><i class=\"fa fa-times  text-danger\"></i> <span ng-bind=\"_t('lb_cancel')\"></span></button>\r" +
    "\n" +
    "                        <a\r" +
    "\n" +
    "                        class=\"btn btn-primary\"\r" +
    "\n" +
    "                        ng-click=\"updateFromDeviceCfg('devices[' + deviceId + '].instances[0].commandClasses[0x70].Get', configCont,deviceId)\" \r" +
    "\n" +
    "                        ><i class=\"fa fa-refresh\"></i> {{_t('btn_update_from_device')}}</a>\r" +
    "\n" +
    "                    <button \r" +
    "\n" +
    "                        type=\"submit\" \r" +
    "\n" +
    "                        class=\"btn btn-submit\" \r" +
    "\n" +
    "                        ><i class=\"fa fa-check\"></i> {{_t('apply_config')}}</button> \r" +
    "\n" +
    "                     </fieldset>    \r" +
    "\n" +
    "                </form>\r" +
    "\n" +
    "            </div>\r" +
    "\n" +
    "        </div>\r" +
    "\n" +
    "        <!-- wakeup_cont -->\r" +
    "\n" +
    "        <div class=\"cfg-block\" id=\"wakeup_cont\" ng-if=\"wakeupCont\">\r" +
    "\n" +
    "             <h2>{{_t('wakeup_list')}}</h2>\r" +
    "\n" +
    "            <div class=\"cfg-block-content\" ng-init=\"formName = 'form_wakeup'\">\r" +
    "\n" +
    "                <form \r" +
    "\n" +
    "                    name=\"{{formName}}\" \r" +
    "\n" +
    "                    id=\"{{formName}}\"\r" +
    "\n" +
    "                    class=\"form\" \r" +
    "\n" +
    "                    role=\"form\"\r" +
    "\n" +
    "                    ng-submit=\"submitApplyConfigCfg(formName,{'id': deviceId,'instance': '0','commandclass': '84','command': 'Set'}, wakeupCont, hasBattery)\" \r" +
    "\n" +
    "                    novalidate>\r" +
    "\n" +
    "                    <div class=\"clearfix\"></div>\r" +
    "\n" +
    "                    <div class=\"cfg-control-content\">\r" +
    "\n" +
    "                        <div ng-repeat=\"v in wakeupCont.params\">\r" +
    "\n" +
    "                            <div class=\"form-inline\" >\r" +
    "\n" +
    "                                <expert-command-input \r" +
    "\n" +
    "                                    collection='v'\r" +
    "\n" +
    "                                    values='wakeupCont.values[0]'\r" +
    "\n" +
    "                                    devices='devices'\r" +
    "\n" +
    "                                    get-node-devices='getNodeDevices'\r" +
    "\n" +
    "                                    curr_value='wakeupCont.configCconfigValue'\r" +
    "\n" +
    "                                    curr_node_value='wakeupCont.configCconfigNodeValue'\r" +
    "\n" +
    "                                    name='wakeupCont.name'\r" +
    "\n" +
    "                                    ></expert-command-input>\r" +
    "\n" +
    "                            </div>\r" +
    "\n" +
    "\r" +
    "\n" +
    "                        </div>\r" +
    "\n" +
    "                        <div class=\"clearfix\"></div>\r" +
    "\n" +
    "                        <p class=\"cfg-info\">\r" +
    "\n" +
    "                            <span class=\"is-updated-{{wakeupCont.isUpdated}}\">{{_t('updated')}}: {{wakeupCont.updateTime}} </span>\r" +
    "\n" +
    "                            <span> | {{_t('default_value_is')}}: <config-default-value  collection='v' show_default_value='wakeupCont.showDefaultValue' default_value='wakeupCont.defaultValue'></config-default-value></span>\r" +
    "\n" +
    "                        </p>\r" +
    "\n" +
    "                    </div>\r" +
    "\n" +
    "                    <fieldset class=\"submit-entry\">\r" +
    "\n" +
    "                        <button type=\"button\" class=\"btn btn-default\" bb-go-back><i class=\"fa fa-times  text-danger\"></i> <span ng-bind=\"_t('lb_cancel')\"></span></button>\r" +
    "\n" +
    "                        <a\r" +
    "\n" +
    "                        href=\"\" \r" +
    "\n" +
    "                        class=\"btn btn-primary\"\r" +
    "\n" +
    "                        ng-click=\"updateFromDevice(wakeupCont.cmd + '.Get()',hasBattery)\"\r" +
    "\n" +
    "                        ><i class=\"fa fa-refresh\"></i> {{_t('btn_update_from_device')}}</a>\r" +
    "\n" +
    "                    <button \r" +
    "\n" +
    "                        type=\"submit\" \r" +
    "\n" +
    "                        class=\"btn btn-submit\" \r" +
    "\n" +
    "                        ><i class=\"fa fa-check\"></i> {{_t('apply_config')}}</button> \r" +
    "\n" +
    "                     </fieldset>    \r" +
    "\n" +
    "                </form>\r" +
    "\n" +
    "            </div>\r" +
    "\n" +
    "        </div>\r" +
    "\n" +
    "        <!-- switchall_cont -->\r" +
    "\n" +
    "        <div class=\"cfg-block\" id=\"switchall_cont\" ng-if=\"switchAllCont\">\r" +
    "\n" +
    "            <h2>{{_t('switchall_list')}}</h2>\r" +
    "\n" +
    "            <div class=\"cfg-block-content\" ng-init=\"formName = 'form_switch_all'\">\r" +
    "\n" +
    "                <form \r" +
    "\n" +
    "                    name=\"{{formName}}\" \r" +
    "\n" +
    "                    id=\"{{formName}}\"\r" +
    "\n" +
    "                    class=\"form\" \r" +
    "\n" +
    "                    role=\"form\"\r" +
    "\n" +
    "                    ng-submit=\"submitApplyConfigCfg(formName,{'id': deviceId,'instance': '0','commandclass': '27','command': 'Set'}, switchAllCont, hasBattery)\" \r" +
    "\n" +
    "                    novalidate>\r" +
    "\n" +
    "                    <div class=\"cfg-control-content\" ng-repeat=\"v in switchAllCont.params\">\r" +
    "\n" +
    "                        <div class=\"form-inline\" >\r" +
    "\n" +
    "                            <expert-command-input \r" +
    "\n" +
    "                                collection='v'\r" +
    "\n" +
    "                                values='switchAllCont.values[0]'\r" +
    "\n" +
    "                                default_value='switchAllCont.defaultValue'\r" +
    "\n" +
    "                                curr_value='switchAllCont.configCconfigValue'\r" +
    "\n" +
    "                                name='switchAllCont.name'\r" +
    "\n" +
    "                                is_dropdown='1'\r" +
    "\n" +
    "                                ></expert-command-input>\r" +
    "\n" +
    "                        </div>\r" +
    "\n" +
    "                        <p class=\"cfg-info\">\r" +
    "\n" +
    "                            <span class=\"is-updated-{{switchAllCont.isUpdated}}\">{{_t('updated')}}: {{switchAllCont.updateTime}} </span>\r" +
    "\n" +
    "                            <span> | {{_t('default_value_is')}}: <config-default-value  collection='v' show_default_value='switchAllCont.showDefaultValue' default_value='switchAllCont.defaultValue'></config-default-value></span>\r" +
    "\n" +
    "                        </p>\r" +
    "\n" +
    "                    </div>\r" +
    "\n" +
    "                    <fieldset class=\"submit-entry\">\r" +
    "\n" +
    "                        <button type=\"button\" class=\"btn btn-default\" bb-go-back><i class=\"fa fa-times  text-danger\"></i> <span ng-bind=\"_t('lb_cancel')\"></span></button>\r" +
    "\n" +
    "                        <a\r" +
    "\n" +
    "                        class=\"btn btn-primary\"\r" +
    "\n" +
    "                        ng-click=\"updateFromDevice(switchAllCont.cmd + '.Get()',hasBattery)\"\r" +
    "\n" +
    "                        ><i class=\"fa fa-refresh\"></i> {{_t('btn_update_from_device')}}</a>\r" +
    "\n" +
    "                    <button \r" +
    "\n" +
    "                        type=\"submit\" \r" +
    "\n" +
    "                        class=\"btn btn-submit\" \r" +
    "\n" +
    "                        ><i class=\"fa fa-check\"></i> {{_t('apply_config')}}</button> \r" +
    "\n" +
    "                     </fieldset>    \r" +
    "\n" +
    "                </form>\r" +
    "\n" +
    "            </div>\r" +
    "\n" +
    "        </div>\r" +
    "\n" +
    "        <!-- protection_cont -->\r" +
    "\n" +
    "        <div class=\"cfg-block\" id=\"protection_cont\" ng-if=\"protectionCont\">\r" +
    "\n" +
    "            <h2>{{_t('protection_list')}}</h2>\r" +
    "\n" +
    "            <div class=\"cfg-block-content\" ng-init=\"formName = 'form_protection_list'\">\r" +
    "\n" +
    "                <form \r" +
    "\n" +
    "                    name=\"{{formName}}\" \r" +
    "\n" +
    "                    id=\"{{formName}}\"\r" +
    "\n" +
    "                    class=\"form\" \r" +
    "\n" +
    "                    role=\"form\"\r" +
    "\n" +
    "                    ng-submit=\"submitApplyConfigCfg(formName,{'id': deviceId,'instance': '0','commandclass': '75','command': 'Set'}, protectionCont, hasBattery)\" \r" +
    "\n" +
    "                    novalidate>\r" +
    "\n" +
    "                    \r" +
    "\n" +
    "                    <div class=\"cfg-control-content\" ng-repeat=\"v in protectionCont.params\">\r" +
    "\n" +
    "                        <div class=\"form-inline\" >\r" +
    "\n" +
    "                            <expert-command-input \r" +
    "\n" +
    "                                collection='v'\r" +
    "\n" +
    "                                values='protectionCont.values[0]'\r" +
    "\n" +
    "                                default_value='protectionCont.defaultValue'\r" +
    "\n" +
    "                                curr_value='protectionCont.configCconfigValue'\r" +
    "\n" +
    "                                name='protectionCont.name'\r" +
    "\n" +
    "                                is_dropdown='1'\r" +
    "\n" +
    "                                ></expert-command-input>\r" +
    "\n" +
    "                        </div>\r" +
    "\n" +
    "                        <p class=\"cfg-info\">\r" +
    "\n" +
    "                            <span class=\"is-updated-{{protectionCont.isUpdated}}\">{{_t('updated')}}: {{protectionCont.updateTime}} </span>\r" +
    "\n" +
    "                            <span> | {{_t('default_value_is')}}: <config-default-value  collection='v' show_default_value='protectionCont.showDefaultValue' default_value='protectionCont.defaultValue'></config-default-value></span>\r" +
    "\n" +
    "                        </p>\r" +
    "\n" +
    "                    </div>\r" +
    "\n" +
    "                    <fieldset class=\"submit-entry\">\r" +
    "\n" +
    "                        <button type=\"button\" class=\"btn btn-default\" bb-go-back><i class=\"fa fa-times  text-danger\"></i> <span ng-bind=\"_t('lb_cancel')\"></span></button>\r" +
    "\n" +
    "                        <a\r" +
    "\n" +
    "                        class=\"btn btn-primary\"\r" +
    "\n" +
    "                        ng-click=\"updateFromDevice(protectionCont.cmd + '.Get()',hasBattery)\"\r" +
    "\n" +
    "                        ><i class=\"fa fa-refresh\"></i> {{_t('btn_update_from_device')}}</a>\r" +
    "\n" +
    "                    <button \r" +
    "\n" +
    "                        type=\"submit\" \r" +
    "\n" +
    "                        class=\"btn btn-submit\"\r" +
    "\n" +
    "                        ><i class=\"fa fa-check\"></i> {{_t('apply_config')}}</button> \r" +
    "\n" +
    "                     </fieldset>    \r" +
    "\n" +
    "                </form>      \r" +
    "\n" +
    "\r" +
    "\n" +
    "            </div>\r" +
    "\n" +
    "        </div>\r" +
    "\n" +
    "    </div>\r" +
    "\n" +
    "</div><!-- /ng-controler -->\r" +
    "\n"
  );


  $templateCache.put('app/views/include.html',
    " <h2>\r" +
    "\n" +
    "        Without Track-By\r" +
    "\n" +
    "    </h2>\r" +
    "\n" +
    " \r" +
    "\n" +
    "    <ul>\r" +
    "\n" +
    "        <li\r" +
    "\n" +
    "            ng-repeat=\"friend in friendsOne\"\r" +
    "\n" +
    "            bn-log-dom-creation=\"Without\">\r" +
    "\n" +
    " \r" +
    "\n" +
    "            {{ friend.id }} &mdash; {{ friend.name }}\r" +
    "\n" +
    " \r" +
    "\n" +
    "        </li>\r" +
    "\n" +
    "    </ul>\r" +
    "\n" +
    " \r" +
    "\n" +
    " \r" +
    "\n" +
    "    <h2>\r" +
    "\n" +
    "        With Track-By\r" +
    "\n" +
    "    </h2>\r" +
    "\n" +
    " \r" +
    "\n" +
    "    <!--\r" +
    "\n" +
    "        This time, we're going to use the same data structure;\r" +
    "\n" +
    "        however, we're going to use the \"track by\" syntax to tell\r" +
    "\n" +
    "        AngularJS how to map the objects to the DOM node.\r" +
    "\n" +
    "        --\r" +
    "\n" +
    "        NOTE: You can also use a $scope-based function like:\r" +
    "\n" +
    "        ... track by identifier( item )\r" +
    "\n" +
    "    -->\r" +
    "\n" +
    "    <ul>\r" +
    "\n" +
    "        <li\r" +
    "\n" +
    "            ng-repeat=\"friend in friendsTwo track by friend.id\"\r" +
    "\n" +
    "            bn-log-dom-creation=\"With\">\r" +
    "\n" +
    " \r" +
    "\n" +
    "            {{ friend.id }} &mdash; {{ friend.name }}\r" +
    "\n" +
    " \r" +
    "\n" +
    "        </li>\r" +
    "\n" +
    "    </ul>"
  );


  $templateCache.put('app/views/management/management.html',
    "<!-- Home view -->\r" +
    "\n" +
    "<div ng-controller=\"ManagementController\" class=\"mobile-padding\">\r" +
    "\n" +
    "    \r" +
    "\n" +
    "    <!-- ///////////////////////////// User management ///////////////////////////// -->\r" +
    "\n" +
    "    <div class=\"admin-entry\" ng-include=\"'app/views/management/management_user.html'\"></div>\r" +
    "\n" +
    "\r" +
    "\n" +
    "    <!-- ///////////////////////////// Remote access ///////////////////////////// -->\r" +
    "\n" +
    "    <div class=\"admin-entry\" ng-include=\"'app/views/management/management_remote.html'\"></div>\r" +
    "\n" +
    "\r" +
    "\n" +
    "    <!-- ///////////////////////////// Licence key ///////////////////////////// -->\r" +
    "\n" +
    "    <div class=\"admin-entry\" \r" +
    "\n" +
    "         ng-if=\"controllerInfo.uuid && cfg.find_hosts.indexOf(hostName) === -1 && cfg.app_type !== 'popp' && !isMobile\" \r" +
    "\n" +
    "         ng-include=\"'app/views/management/management_licence.html'\"></div>\r" +
    "\n" +
    "    \r" +
    "\n" +
    "     <!-- ///////////////////////////// Backup ///////////////////////////// -->\r" +
    "\n" +
    "     <!--<div class=\"admin-entry\" ng-include=\"'app/views/management/management_backup.html'\"></div>-->\r" +
    "\n" +
    "    \r" +
    "\n" +
    "     <!-- ///////////////////////////// Restore ///////////////////////////// -->\r" +
    "\n" +
    "     <!--<div class=\"admin-entry\" ng-include=\"'app/views/management/management_restore.html'\"></div>-->\r" +
    "\n" +
    "\r" +
    "\n" +
    "    <!-- ///////////////////////////// Firmware update ///////////////////////////// --> \r" +
    "\n" +
    "    <div class=\"admin-entry\" \r" +
    "\n" +
    "         ng-if=\"cfg.find_hosts.indexOf(hostName) === -1 && cfg.app_type !== 'wd' && !isMobile\"\r" +
    "\n" +
    "         ng-include=\"'app/views/management/management_firmware.html'\"></div>\r" +
    "\n" +
    "\r" +
    "\n" +
    "    <!-- ///////////////////////////// App Store access ///////////////////////////// -->\r" +
    "\n" +
    "   <div class=\"admin-entry\" ng-include=\"'app/views/management/management_appstore.html'\"></div>\r" +
    "\n" +
    "    \r" +
    "\n" +
    "    <!-- ///////////////////////////// Report ///////////////////////////// -->\r" +
    "\n" +
    "    <div class=\"admin-entry\" ng-include=\"'app/views/management/management_report.html'\"></div>\r" +
    "\n" +
    "\r" +
    "\n" +
    "    <!-- ///////////////////////////// Info ///////////////////////////// -->\r" +
    "\n" +
    "    <div class=\"admin-entry\" ng-include=\"'app/views/management/management_info.html'\"></div>\r" +
    "\n" +
    "\r" +
    "\n" +
    "   \r" +
    "\n" +
    "</div> <!-- /ng-controller --> "
  );


  $templateCache.put('app/views/management/management_appstore.html',
    "<!-- Admin App Store view -->\r" +
    "\n" +
    "<h2 class=\"admin-entry-title\" ng-click=\"expandElement('appstore')\">\r" +
    "\n" +
    "    <i class=\"fa fa-cart-plus\"></i> <span ng-bind=\"_t('app_store_access')\"></span>\r" +
    "\n" +
    "     <i class=\"fa subnavi-arrow\" ng-class=\"expand.appstore  ? 'fa-chevron-up':'fa-chevron-down'\"></i>\r" +
    "\n" +
    "</h2>\r" +
    "\n" +
    "<div class=\"admin-entry-ctrl\" ng-if=\"expand.appstore\" ng-controller=\"ManagementAppStoreController\">\r" +
    "\n" +
    "    <form name=\"form_appatore\" id=\"form_appatore\" class=\"form form-inline form-page\" ng-submit=\"appStoreAddToken()\" novalidate>\r" +
    "\n" +
    "        <fieldset>{{_t('app_store_access_info')}}</fieldset>\r" +
    "\n" +
    "        <fieldset>\r" +
    "\n" +
    "            <input name=\"appstore_token\" id=\"appstore_token\" class=\"form-control\" value=\"\" ng-model=\"appStore.input.token\" />\r" +
    "\n" +
    "            <button type=\"submit\" class=\"btn btn-success\"><i class=\"fa fa-plus\"></i> <span ng-bind=\"_t('add_token')\"></span></button>\r" +
    "\n" +
    "        </fieldset> \r" +
    "\n" +
    "        <fieldset>\r" +
    "\n" +
    "            <table class=\"table table-condensed table-report\">\r" +
    "\n" +
    "                <tbody>\r" +
    "\n" +
    "                    <tr ng-repeat=\"v in appStore.tokens track by $index\">\r" +
    "\n" +
    "                        <td>{{v}}</td>\r" +
    "\n" +
    "                        <td class=\"td-action\">\r" +
    "\n" +
    "                            <button class=\"btn btn-default\" type=\"button\" \r" +
    "\n" +
    "                                    ng-click=\"appStoreRemoveToken(v, _t('lb_delete_confirm'))\"\r" +
    "\n" +
    "                                    ><i class=\"fa fa-times fa-lg text-danger\"></i></button>   \r" +
    "\n" +
    "                        </td>\r" +
    "\n" +
    "                    </tr>\r" +
    "\n" +
    "                </tbody>\r" +
    "\n" +
    "            </table>\r" +
    "\n" +
    "        </fieldset> \r" +
    "\n" +
    "        <fieldset class=\"submit-entry\">\r" +
    "\n" +
    "            <button type=\"button\" class=\"btn btn-default\" ng-click=\"expandElement('appstore')\"><i class=\"fa fa-times  text-danger\"></i> <span ng-bind=\"_t('lb_cancel')\"></span></button>\r" +
    "\n" +
    "        </fieldset>\r" +
    "\n" +
    "    </form>\r" +
    "\n" +
    "</div>"
  );


  $templateCache.put('app/views/management/management_backup.html',
    "<!-- Admin backup view -->\r" +
    "\n" +
    "<h2 class=\"admin-entry-title\" ng-click=\"expandElement('backup')\">\r" +
    "\n" +
    "    <i class=\"fa fa-cloud-download\"></i> <span ng-bind=\"_t('backup')\"></span>\r" +
    "\n" +
    "     <i class=\"fa subnavi-arrow\" ng-class=\"expand.backup  ? 'fa-chevron-up':'fa-chevron-down'\"></i>\r" +
    "\n" +
    "</h2>\r" +
    "\n" +
    "<div class=\"admin-entry-ctrl\" ng-if=\"expand.backup\" ng-controller=\"ManagementBackupController\">\r" +
    "\n" +
    "    <div class=\"form form-inline form-page\">\r" +
    "\n" +
    "        <div class=\"fieldset\">\r" +
    "\n" +
    "            <bb-help-text trans=\"_t('backup_info')\"></bb-help-text>\r" +
    "\n" +
    "            <bb-alert alert=\"managementBackup.alert\"></bb-alert>\r" +
    "\n" +
    "        </div>\r" +
    "\n" +
    "        <div class=\"fieldset submit-entry\">\r" +
    "\n" +
    "            <button type=\"button\" class=\"btn btn-default\" ng-click=\"expandElement('backup')\"><i class=\"fa fa-times  text-danger\"></i> <span ng-bind=\"_t('lb_cancel')\"></span></button>\r" +
    "\n" +
    "            <a class=\"btn btn-submit\" ng-click=\"downloadBackupFile()\"><i class=\"fa fa-cloud-download\"></i> {{_t('nm_backup_download')}}</a>\r" +
    "\n" +
    "        </div>\r" +
    "\n" +
    "    </div>\r" +
    "\n" +
    "</div>\r" +
    "\n"
  );


  $templateCache.put('app/views/management/management_firmware.html',
    "<!-- Admin firmware view -->\r" +
    "\n" +
    "<h2 class=\"admin-entry-title\" ng-click=\"expandElement('firmware')\">\r" +
    "\n" +
    "    <i class=\"fa fa-level-up\"></i> <span ng-bind=\"_t('firmware_update')\"></span>\r" +
    "\n" +
    "     <i class=\"fa subnavi-arrow\" ng-class=\"expand.firmware  ? 'fa-chevron-up':'fa-chevron-down'\"></i>\r" +
    "\n" +
    "</h2>\r" +
    "\n" +
    "<div class=\"admin-entry-ctrl\" ng-if=\"expand.firmware\" ng-controller=\"ManagementFirmwareController\">\r" +
    "\n" +
    "    <form name=\"form_firmware\" id=\"form_firmware\" class=\"form form-page\" ng-submit=\"updateFirmware()\" novalidate>\r" +
    "\n" +
    "        <fieldset>\r" +
    "\n" +
    "            <!-- Currentt version -->\r" +
    "\n" +
    "\r" +
    "\n" +
    "            <p class=\"form-control-static\">\r" +
    "\n" +
    "                <span ng-bind=\"_t('current_firmware')\"></span>: <strong ng-bind=\"controllerInfo.softwareRevisionVersion\"></strong>\r" +
    "\n" +
    "            </p>\r" +
    "\n" +
    "\r" +
    "\n" +
    "            <div class=\"form-group\">\r" +
    "\n" +
    "                <bb-help-text trans=\"_t('firmware_update_info')\"></bb-help-text>\r" +
    "\n" +
    "            </div>\r" +
    "\n" +
    "        </fieldset>\r" +
    "\n" +
    "        <fieldset class=\"submit-entry\">\r" +
    "\n" +
    "            <button type=\"button\" class=\"btn btn-default\" ng-click=\"expandElement('firmware')\"><i class=\"fa fa-times  text-danger\"></i> <span ng-bind=\"_t('lb_cancel')\"></span></button>\r" +
    "\n" +
    "            <button type=\"button\" class=\"btn btn-submit\" ng-click=\"showModalFirmware('#modal_firmware')\"><i class=\"fa fa-level-up\"></i> <span ng-bind=\"_t('update_to_latest')\"></span></button>\r" +
    "\n" +
    "        </fieldset>\r" +
    "\n" +
    "\r" +
    "\n" +
    "    </form>\r" +
    "\n" +
    "\r" +
    "\n" +
    "     <!-- Modal firmware -->\r" +
    "\n" +
    "    <div class=\"modal fade\" id=\"modal_firmware\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myModalLabel\" aria-hidden=\"true\" ng-if=\"cfg.find_hosts.indexOf(hostName) === -1 && cfg.app_type !== 'wd' && !isMobile\">\r" +
    "\n" +
    "        <div class=\"modal-dialog modal-firmware-iframe\">\r" +
    "\n" +
    "            <div class=\"modal-content\">\r" +
    "\n" +
    "                <div class=\"modal-header\">\r" +
    "\n" +
    "                    <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-hidden=\"true\">&times;</button>\r" +
    "\n" +
    "                    <h4 class=\"modal-title\" ng-bind=\"_t('firmware_update')\"></h4>\r" +
    "\n" +
    "                </div>\r" +
    "\n" +
    "                <div class=\"modal-body\">\r" +
    "\n" +
    "\r" +
    "\n" +
    "                    <iframe ng-src=\"{{firmwareUpdateUrl}}\" height=\"600\" style=\"width: 100%; \"></iframe> \r" +
    "\n" +
    "\r" +
    "\n" +
    "                </div>\r" +
    "\n" +
    "            </div>\r" +
    "\n" +
    "        </div>\r" +
    "\n" +
    "    </div><!-- /.Modalfirmware -->\r" +
    "\n" +
    "\r" +
    "\n" +
    "</div>\r" +
    "\n"
  );


  $templateCache.put('app/views/management/management_info.html',
    "<!-- Admin info view -->\r" +
    "\n" +
    "<h2 class=\"admin-entry-title\" ng-click=\"expandElement('appinfo')\">\r" +
    "\n" +
    "    <i class=\"fa fa-info-circle\"></i> <span ng-bind=\"_t('info')\"></span>\r" +
    "\n" +
    "    <i class=\"fa subnavi-arrow\" ng-class=\"expand.appinfo  ? 'fa-chevron-up':'fa-chevron-down'\"></i>\r" +
    "\n" +
    "</h2>\r" +
    "\n" +
    "<div class=\"admin-entry-ctrl\" ng-if=\"expand.appinfo\" ng-controller=\"ManagementInfoController\">\r" +
    "\n" +
    "    <div class=\"form form-inline form-page\">\r" +
    "\n" +
    "        <div class=\"fieldset\">\r" +
    "\n" +
    "            <h3>{{_t('software_info')}}</h3>\r" +
    "\n" +
    "            <table class=\"table table-report\">\r" +
    "\n" +
    "                <tbody>\r" +
    "\n" +
    "                    <tr>\r" +
    "\n" +
    "                        <td>{{_t('firmware_version')}}</td>\r" +
    "\n" +
    "                        <td class=\"td20\">{{controllerInfo.softwareRevisionVersion}}</td>\r" +
    "\n" +
    "                    </tr>\r" +
    "\n" +
    "                    <tr>\r" +
    "\n" +
    "                        <td>{{_t('ui_version')}}</td>\r" +
    "\n" +
    "                        <td class=\"td20\">{{cfg.app_version}}</td>\r" +
    "\n" +
    "                    </tr>\r" +
    "\n" +
    "                    <tr>\r" +
    "\n" +
    "                        <td>{{_t('ctrl_info_caps_cap_title')}}</td>\r" +
    "\n" +
    "                        <td class=\"td20\">{{controllerInfo.capabillities}}</td>\r" +
    "\n" +
    "                    </tr>\r" +
    "\n" +
    "                </tbody>\r" +
    "\n" +
    "            </table>\r" +
    "\n" +
    "        </div>\r" +
    "\n" +
    "        <div class=\"fieldset\"><bb-help-text trans=\"_t('management_trans_info')\"></bb-help-text></div>\r" +
    "\n" +
    "        <div class=\"fieldset submit-entry\">\r" +
    "\n" +
    "            <button type=\"button\" class=\"btn btn-default\" ng-click=\"expandElement('appinfo')\"><i class=\"fa fa-times  text-danger\"></i> <span ng-bind=\"_t('lb_cancel')\"></span></button>\r" +
    "\n" +
    "        </div>\r" +
    "\n" +
    "    </div>\r" +
    "\n" +
    "</div>\r" +
    "\n"
  );


  $templateCache.put('app/views/management/management_licence.html',
    "<!-- Admin licence view -->\r" +
    "\n" +
    "<h2 class=\"admin-entry-title\" ng-click=\"expandElement('licence')\">\r" +
    "\n" +
    "            <i class=\"fa fa-key\"></i> <span ng-bind=\"_t('licence_upgrade')\"></span> \r" +
    "\n" +
    "            <i class=\"fa subnavi-arrow\" ng-class=\"expand.licence  ? 'fa-chevron-up':'fa-chevron-down'\"></i>\r" +
    "\n" +
    "</h2>\r" +
    "\n" +
    "<div class=\"admin-entry-ctrl\" ng-class=\"\" ng-if=\"expand.licence\" ng-controller=\"ManagementLicenceController\">\r" +
    "\n" +
    "    \r" +
    "\n" +
    "    <form name=\"form_licence\" id=\"form_password\" class=\"form form-page\" ng-submit=\"getLicense(inputLicence)\" novalidate>\r" +
    "\n" +
    "        <fieldset>\r" +
    "\n" +
    "            <!--\r" +
    "\n" +
    "           <p class=\"form-control-static\" ng-bind=\"_t('licence_upgrade_info')\"></p>\r" +
    "\n" +
    "           <p><a ng-href=\"{{cfg.buy_licence_key}}\" class=\"btn btn-info\">{{_t('btn_licence_buy')}}</a></p>\r" +
    "\n" +
    "            -->\r" +
    "\n" +
    "            <!-- password -->\r" +
    "\n" +
    "            <div class=\"alert alert-danger\" ng-if=\"controllerInfo.isZeroUuid\"><i class=\"fa fa-plug\"></i> {{_t('replug_device')}}</div>\r" +
    "\n" +
    "            <p>{{_t('licence_upgrade_key')}}</p>\r" +
    "\n" +
    "            <label>{{_t('licence_key_insert')}}:</label>\r" +
    "\n" +
    "            <input\r" +
    "\n" +
    "                class=\"form-control form-control-sm\" \r" +
    "\n" +
    "                type=\"text\" \r" +
    "\n" +
    "                name=\"scratch_id\"\r" +
    "\n" +
    "                id=\"scratch_id\" \r" +
    "\n" +
    "                value=\"\" \r" +
    "\n" +
    "                ng-disabled=\"controllerInfo.isZeroUuid\"\r" +
    "\n" +
    "                ng-model=\"inputLicence.scratch_id\" />\r" +
    "\n" +
    "\r" +
    "\n" +
    "            <div><br />\r" +
    "\n" +
    "                <p ng-if=\"proccessVerify.message\">\r" +
    "\n" +
    "                    <i class=\"fa-lg\" ng-class=\"proccessVerify.status\"></i> <strong ng-bind=\"proccessVerify.message\"></strong>\r" +
    "\n" +
    "                </p>\r" +
    "\n" +
    "                <p ng-if=\"proccessUpdate.message\">\r" +
    "\n" +
    "                    <i class=\"fa-lg\" ng-class=\"proccessUpdate.status\"></i> <strong ng-bind=\"proccessUpdate.message\"></strong>\r" +
    "\n" +
    "                </p>\r" +
    "\n" +
    "            </div>\r" +
    "\n" +
    "        </fieldset> \r" +
    "\n" +
    "        <fieldset class=\"submit-entry\">\r" +
    "\n" +
    "            <button type=\"button\" class=\"btn btn-default\" ng-click=\"expandElement('licence')\" ng-disabled=\"proccessLicence\">\r" +
    "\n" +
    "                <i class=\"fa fa-times  text-danger\"></i> <span ng-bind=\"_t('lb_cancel')\"></span>\r" +
    "\n" +
    "            </button>\r" +
    "\n" +
    "            <button type=\"submit\" class=\"btn btn-submit\" ng-disabled=\"proccessLicence || controllerInfo.isZeroUuid\">\r" +
    "\n" +
    "                <i class=\"fa fa-share\"></i> <span ng-bind=\"_t('btn_licence_verify')\"></span>\r" +
    "\n" +
    "            </button>\r" +
    "\n" +
    "        </fieldset>\r" +
    "\n" +
    "    </form>\r" +
    "\n" +
    "\r" +
    "\n" +
    "</div>\r" +
    "\n"
  );


  $templateCache.put('app/views/management/management_remote.html',
    "<!-- Admin remote view -->\r" +
    "\n" +
    "<h2 class=\"admin-entry-title\" ng-click=\"expandElement('remote')\">\r" +
    "\n" +
    "    <i class=\"fa fa-wifi\"></i> <span ng-bind=\"_t('remote_access_manage')\"></span>\r" +
    "\n" +
    "     <i class=\"fa subnavi-arrow\" ng-class=\"expand.remote  ? 'fa-chevron-up':'fa-chevron-down'\"></i>\r" +
    "\n" +
    "</h2>\r" +
    "\n" +
    "\r" +
    "\n" +
    "<div class=\"admin-entry-ctrl\" ng-class=\"\" ng-if=\"expand.remote\" ng-controller=\"ManagementRemoteController\">\r" +
    "\n" +
    "    <form name=\"form_remote\" id=\"form_remote\" class=\"form form-page\" ng-submit=\"putRemoteAccess(remoteAccess, newRemoteAccessPassword)\" novalidate>\r" +
    "\n" +
    "        <fieldset>\r" +
    "\n" +
    "            <p ng-bind=\"_t('remote_access_info')\"></p>\r" +
    "\n" +
    "            <bb-alert alert=\"alert\"></bb-alert>\r" +
    "\n" +
    "            <div ng-if=\"remoteAccess\">\r" +
    "\n" +
    "                <div class=\"form-group\">\r" +
    "\n" +
    "                    <!-- Remote access ID -->\r" +
    "\n" +
    "                    <p class=\"form-control-static\">\r" +
    "\n" +
    "                        <span ng-bind=\"_t('remote_access_id')\"></span>: <strong ng-bind=\"remoteAccess.params.userId\"></strong>\r" +
    "\n" +
    "                    </p>\r" +
    "\n" +
    "                    <!-- Remote access password -->\r" +
    "\n" +
    "                    <p>\r" +
    "\n" +
    "                        <label>{{_t('remote_access_password')}}: </label>\r" +
    "\n" +
    "                        <input name=\"remote_password\" id=\"remote_password\" type=\"password\" class=\"form-control form-control-sm\" value=\"\" ng-model=\"remoteAccess.params.pass\" />\r" +
    "\n" +
    "                    <bb-help-text trans=\"_t('keep_password_empty')\"></bb-help-text>\r" +
    "\n" +
    "                    </p>\r" +
    "\n" +
    "                </div>\r" +
    "\n" +
    "\r" +
    "\n" +
    "                <div class=\"form-group\">\r" +
    "\n" +
    "                    <div>\r" +
    "\n" +
    "                        <input type=\"checkbox\" name=\"remote_access\" value=\"true\" id=\"remote_access\" ng-model=\"remoteAccess.params.zbwStatus\" ng-checked=\"remoteAccess.params.zbwStatus\" /> \r" +
    "\n" +
    "                        <label ng-bind=\"_t('remote_access')\"></label>\r" +
    "\n" +
    "                        <div class=\"alert alert-warning\" ng-bind=\"_t('remote_access_warning')\" ng-if=\"!remoteAccess.params.zbwStatus\"></div>\r" +
    "\n" +
    "                    </div>\r" +
    "\n" +
    "                    <div>\r" +
    "\n" +
    "                        <input type=\"checkbox\" name=\"remote_support\" value=\"true\" id=\"remote_support\" ng-model=\"remoteAccess.params.sshStatus\" ng-checked=\"remoteAccess.params.sshStatus\" /> \r" +
    "\n" +
    "                        <label ng-bind=\"_t('remote_access_support')\"></label>\r" +
    "\n" +
    "                    </div>\r" +
    "\n" +
    "                </div>\r" +
    "\n" +
    "            </div>\r" +
    "\n" +
    "        </fieldset>\r" +
    "\n" +
    "        <fieldset class=\"submit-entry\">\r" +
    "\n" +
    "            <button type=\"button\" class=\"btn btn-default\" ng-click=\"expandElement('remote')\"><i class=\"fa fa-times  text-danger\"></i> <span ng-bind=\"_t('lb_cancel')\"></span></button>\r" +
    "\n" +
    "            <button type=\"submit\" class=\"btn btn-submit\"><i class=\"fa fa-check\"></i> <span ng-bind=\"_t('lb_save')\"></span></button>\r" +
    "\n" +
    "        </fieldset>\r" +
    "\n" +
    "    </form>\r" +
    "\n" +
    "</div>"
  );


  $templateCache.put('app/views/management/management_report.html',
    "<!-- Admin report view -->\r" +
    "\n" +
    "<h2 class=\"admin-entry-title\" ng-click=\"expandElement('report')\">\r" +
    "\n" +
    "    <i class=\"fa fa-bug\"></i> <span ng-bind=\"_t('nav_report')\"></span>\r" +
    "\n" +
    "    <i class=\"fa subnavi-arrow\" ng-class=\"expand.report  ? 'fa-chevron-up':'fa-chevron-down'\"></i>\r" +
    "\n" +
    "</h2>\r" +
    "\n" +
    " <div class=\"admin-entry-ctrl\" ng-if=\"expand.report\"  ng-controller=\"ManagementReportController\">\r" +
    "\n" +
    "    <form name=\"form_report\" id=\"form_profile\" class=\"form form-page\" ng-submit=\"sendReport(form_report,input)\" novalidate>\r" +
    "\n" +
    "        <fieldset>\r" +
    "\n" +
    "            <div class=\"alert alert-warning\"><i class=\"fa fa-exclamation-circle\"></i> {{_t('bugreport_info')}}</div>\r" +
    "\n" +
    "\r" +
    "\n" +
    "            <!-- content -->\r" +
    "\n" +
    "                <div class=\"form-group_\">\r" +
    "\n" +
    "                    <textarea name=\"content\" id=\"content\" class=\"form-control report-content\" ng-blur=\"contentBlur = true\" ng-model=\"input.content\" ng-required=\"true\"></textarea>\r" +
    "\n" +
    "                    <bb-validator input-name='form_report.content.$error.required' trans='_t(\"field_required\")' has-blur='contentBlur'></bb-validator> \r" +
    "\n" +
    "                </div>\r" +
    "\n" +
    "            <!-- email -->\r" +
    "\n" +
    "                 <div class=\"form-group form-inline\">\r" +
    "\n" +
    "                        <label>{{_t('lb_email')}}: </label>\r" +
    "\n" +
    "                        <input name=\"email\" id=\"email\" type=\"email\" class=\"form-control\" value=\"{{input.email}}\" ng-blur=\"emailBlur = true\" ng-model=\"input.email\" ng-required=\"true\" />\r" +
    "\n" +
    "                        <bb-validator input-name='form_report.email.$error.required' trans='_t(\"email_invalid\")' has-blur='emailBlur'></bb-validator> \r" +
    "\n" +
    "                    </div>\r" +
    "\n" +
    "        </fieldset>\r" +
    "\n" +
    "        <fieldset class=\"submit-entry\">\r" +
    "\n" +
    "            <button type=\"button\" class=\"btn btn-default\" ng-click=\"expandElement('report')\"><i class=\"fa fa-times  text-danger\"></i> <span ng-bind=\"_t('lb_cancel')\"></span></button>\r" +
    "\n" +
    "                 <button type=\"submit\" class=\"btn btn-submit\" ng-disabled=\"form_report.$invalid\"><i class=\"fa fa-check\"></i> <span ng-bind=\"_t('lb_submit')\"></span></button>\r" +
    "\n" +
    "        </fieldset>\r" +
    "\n" +
    "    </form>\r" +
    "\n" +
    "</div>\r" +
    "\n"
  );


  $templateCache.put('app/views/management/management_restore.html',
    "<!-- Admin restore view -->\r" +
    "\n" +
    "<h2 class=\"admin-entry-title\" ng-click=\"expandElement('restore')\">\r" +
    "\n" +
    "    <i class=\"fa fa-repeat\"></i> <span ng-bind=\"_t('nm_restore_backup_upload')\"></span>\r" +
    "\n" +
    "    <i class=\"fa subnavi-arrow\" ng-class=\"expand.restore  ? 'fa-chevron-up':'fa-chevron-down'\"></i>\r" +
    "\n" +
    "</h2>\r" +
    "\n" +
    "<div class=\"admin-entry-ctrl\" ng-if=\"expand.restore\" ng-controller=\"ManagementRestoreController\">\r" +
    "\n" +
    "    <div class=\"form form-page\">\r" +
    "\n" +
    "        <div class=\"fieldset\">\r" +
    "\n" +
    "            <bb-alert alert=\"managementRestore.alert\"></bb-alert>\r" +
    "\n" +
    "            <div ng-hide=\"managementRestore.alert.message\">\r" +
    "\n" +
    "                <div class=\"alert alert-warning\">\r" +
    "\n" +
    "                <input type=\"checkbox\" name=\"restore_confirm\" value=\"1\" id=\"restore_confirm\" ng-click=\"managementRestore.confirm = !managementRestore.confirm\" /> <span ng-bind=\"_t('are_you_sure_restore')\"></span>\r" +
    "\n" +
    "            </div>\r" +
    "\n" +
    "            <div class=\"form-group\" ng-show=\"managementRestore.confirm\">\r" +
    "\n" +
    "                <!--<input type=\"file\" name=\"file\" onchange=\"angular.element(this).scope().uploadFile(this.files)\"/> -->\r" +
    "\n" +
    "                <input type=\"file\" class=\"form-control_\" file-model=\"myFile\" />\r" +
    "\n" +
    "            </div>\r" +
    "\n" +
    "            </div>\r" +
    "\n" +
    "            \r" +
    "\n" +
    "        </div>\r" +
    "\n" +
    "        \r" +
    "\n" +
    "        <div class=\"fieldset submit-entry\">\r" +
    "\n" +
    "            <button type=\"button\" class=\"btn btn-default\" ng-click=\"expandElement('restore')\"><i class=\"fa fa-times  text-danger\"></i> <span ng-bind=\"_t('lb_cancel')\"></span></button>\r" +
    "\n" +
    "            <button type=\"button\" class=\"btn btn-submit\" ng-click=\"uploadFile()\" ng-disabled=\"!managementRestore.confirm || managementRestore.alert.message\"><i class=\"fa fa-download\"></i> {{_t('nm_restore_pick_up')}}</button>\r" +
    "\n" +
    "            \r" +
    "\n" +
    "        </div>\r" +
    "\n" +
    "    </div>\r" +
    "\n" +
    "</div>\r" +
    "\n"
  );


  $templateCache.put('app/views/management/management_user.html',
    "<!-- Admin user list view -->\r" +
    "\n" +
    "<h2 class=\"admin-entry-title\" ng-click=\"expandElement('user')\">\r" +
    "\n" +
    "            <i class=\"fa fa-users\"></i> <span ng-bind=\"_t('nav_admin')\"></span>  <i class=\"fa subnavi-arrow\" ng-class=\"expand.user ? 'fa-chevron-up':'fa-chevron-down'\"></i>\r" +
    "\n" +
    "</h2>\r" +
    "\n" +
    "<div class=\"admin-entry-ctrl\" ng-class=\"\" ng-if=\"expand.user\" ng-controller=\"ManagementUserController\">\r" +
    "\n" +
    "    <table id=\"table_cfg_admin\" class=\"table table-condensed table-report\">\r" +
    "\n" +
    "        <tbody>\r" +
    "\n" +
    "            <tr ng-repeat=\"v in profiles\" id=\"row_{{v.id}}\">\r" +
    "\n" +
    "                <td>\r" +
    "\n" +
    "                    <img class=\"report-img\" ng-src=\"storage/img/icons/user.png\" alt=\"{{v.name}}\" /> \r" +
    "\n" +
    "                    <span class=\"report-message\" ng-bind=\"v.name\"></span>\r" +
    "\n" +
    "                </td>\r" +
    "\n" +
    "                <td class=\"td-action\">\r" +
    "\n" +
    "                    <a class=\"btn btn-default\" href=\"#admin/user/{{v.id}}\"><i class=\"fa fa-pencil fa-lg text-info\"></i></a>\r" +
    "\n" +
    "                    <button class=\"btn btn-default\" \r" +
    "\n" +
    "                            ng-hide=\"v.id == 1\"\r" +
    "\n" +
    "                            ng-click=\"deleteProfile('#row_' + v.id, {'id': v.id}, _t('lb_delete_confirm'), 1)\"\r" +
    "\n" +
    "                            ><i class=\"fa fa-times fa-lg text-danger\"></i></button>   \r" +
    "\n" +
    "                </td>\r" +
    "\n" +
    "            </tr>\r" +
    "\n" +
    "        </tbody>\r" +
    "\n" +
    "    </table>\r" +
    "\n" +
    "    <div class=\"fieldset submit-entry\">\r" +
    "\n" +
    "        <button type=\"button\" class=\"btn btn-default\" ng-click=\"expandElement('user')\"><i class=\"fa fa-times  text-danger\"></i> <span ng-bind=\"_t('lb_cancel')\"></span></button>\r" +
    "\n" +
    "        <a class=\"btn btn-submit\" ng-href=\"#admin/user/0\"><i class=\"fa fa-plus\"></i> {{_t('lb_add_user')}}</a>\r" +
    "\n" +
    "    </div>\r" +
    "\n" +
    "</div>\r" +
    "\n"
  );


  $templateCache.put('app/views/management/management_user_id.html',
    "<!-- Admin user view -->\r" +
    "\n" +
    "<div ng-controller=\"ManagementUserIdController\" class=\"mobile-padding\">\r" +
    "\n" +
    "    <bb-loader></bb-loader>\r" +
    "\n" +
    "     \r" +
    "\n" +
    "    <div ng-show=\"input\">\r" +
    "\n" +
    "        <h2><span ng-bind=\"_t('lb_user')\"></span>: <span ng-show=\"input.id > 0\">(#{{input.id}})</span> <span ng-bind=\"input.name\"></span></h2>\r" +
    "\n" +
    "        <form name=\"form_profile\" id=\"form_profile\" class=\"form form-page\" ng-submit=\"store(input)\" novalidate>\r" +
    "\n" +
    "            <fieldset>\r" +
    "\n" +
    "                 <h3><i class=\"fa fa-chevron-down\"></i> <span ng-bind=\"_t('lb_name')\"></span></h3>\r" +
    "\n" +
    "                <div>\r" +
    "\n" +
    "                     <!-- name -->\r" +
    "\n" +
    "                    <div class=\"form-group\">\r" +
    "\n" +
    "                        <input name=\"name\" id=\"name\" type=\"text\" class=\"form-control\" placeholder=\"{{_t('lb_profile_name_insert')}}\" value=\"{{input.name}}\" ng-model=\"input.name\" />\r" +
    "\n" +
    "                    </div>\r" +
    "\n" +
    "                </div>\r" +
    "\n" +
    "             </fieldset>\r" +
    "\n" +
    "            \r" +
    "\n" +
    "             <fieldset ng-if=\"id == 0\">\r" +
    "\n" +
    "                 <h3><i class=\"fa fa-chevron-down\"></i> <span ng-bind=\"_t('lb_login')\"></span></h3>\r" +
    "\n" +
    "                <div>\r" +
    "\n" +
    "                    <!-- login -->\r" +
    "\n" +
    "                    <div class=\"form-group\">\r" +
    "\n" +
    "                        <input name=\"login\" id=\"login\" type=\"text\" class=\"form-control\" placeholder=\"{{_t('lb_login')}}\" value=\"{{input.login}}\" ng-model=\"input.login\" />\r" +
    "\n" +
    "                    </div>\r" +
    "\n" +
    "                    <!-- password -->\r" +
    "\n" +
    "                    <div class=\"form-group\">\r" +
    "\n" +
    "                        <input name=\"password\" id=\"password\" type=\"password\" class=\"form-control\" placeholder=\"{{_t('lb_password')}}\" value=\"{{input.lpassword}}\" ng-model=\"input.password\" />\r" +
    "\n" +
    "                    </div>\r" +
    "\n" +
    "                </div>\r" +
    "\n" +
    "             </fieldset>\r" +
    "\n" +
    "            \r" +
    "\n" +
    "             <fieldset>\r" +
    "\n" +
    "                <h3><i class=\"fa fa-chevron-down\"></i> <span ng-bind=\"_t('lb_settings')\"></span></h3>\r" +
    "\n" +
    "                <div>\r" +
    "\n" +
    "                     <!-- role -->\r" +
    "\n" +
    "                    <div class=\"form-group form-inline\" ng-if=\"user.id != id\">\r" +
    "\n" +
    "                        <label>{{_t('lb_role')}}:</label> </br>\r" +
    "\n" +
    "                        <input type=\"radio\" name=\"role\" value=\"1\" ng-model=\"input.role\" ng-checked=\"input.role == 1\" /> {{_t('lb_admin')}} </br>\r" +
    "\n" +
    "                        <input type=\"radio\" name=\"role\" value=\"2\" ng-model=\"input.role\" ng-checked=\"input.role == 2\" /> {{_t('lb_user')}} </br> \r" +
    "\n" +
    "                        <input type=\"radio\" name=\"role\" value=\"3\" ng-model=\"input.role\" ng-checked=\"input.role == 3\" /> {{_t('lb_local')}} </br>\r" +
    "\n" +
    "                        <input type=\"radio\" name=\"role\" value=\"4\" ng-model=\"input.role\" ng-checked=\"input.role == 4\" /> {{_t('lb_anonymous')}}\r" +
    "\n" +
    "                    </div>\r" +
    "\n" +
    "                     <!-- Default UI\r" +
    "\n" +
    "                    <div class=\"form-group form-inline\">\r" +
    "\n" +
    "                        <label>{{_t('lb_default_ui')}}: </label> <input type=\"radio\" name=\"default_ui\" value=\"1\" ng-model=\"input.default_ui\" ng-checked=\"input.default_ui == 1\" /> {{_t('lb_ui_smarthome')}}\r" +
    "\n" +
    "                         <input type=\"radio\" name=\"default_ui\" value=\"2\" ng-model=\"input.default_ui\" ng-checked=\"input.default_ui == 2\" /> {{_t('lb_ui_expert')}}\r" +
    "\n" +
    "                    </div> -->\r" +
    "\n" +
    "                    <!-- lang -->\r" +
    "\n" +
    "                    <div class=\"form-group form-inline\">\r" +
    "\n" +
    "                        <label>{{_t('lb_language')}}:</label>\r" +
    "\n" +
    "                        <span ng-repeat=\"v in cfg.lang_list\" >\r" +
    "\n" +
    "                            <input class=\"form-control-hidden\" type=\"radio\" name=\"color\" value=\"{{v}}\" ng-model=\"input.lang\" ng-checked=\"input.color == v\" />\r" +
    "\n" +
    "                            <img class=\"form-control-img profile-lang\" ng-click=\"input.lang = v\" ng-class=\"v == input.lang ? 'control-active':''\" ng-src=\"app/img/flags/{{v}}.png\" alt=\"{{ v}}\"/>\r" +
    "\n" +
    "                        </span>\r" +
    "\n" +
    "                        <span ng-bind=\"input.lang\"></span>\r" +
    "\n" +
    "                    </div>\r" +
    "\n" +
    "                    <!-- colors -->\r" +
    "\n" +
    "                    <div class=\"form-group\">\r" +
    "\n" +
    "                        <label>{{_t('lb_profile_color')}}: </label>\r" +
    "\n" +
    "                        <span ng-repeat=\"v in cfg.profile_colors\" >\r" +
    "\n" +
    "                            <input class=\"form-control-hidden\" type=\"radio\" name=\"color\" value=\"{{v}}\" ng-model=\"input.color\" ng-checked=\"input.color == v\" />\r" +
    "\n" +
    "                            <span class=\"form-control-img profile-color\" style=\"background-color: {{v}}\" ng-click=\"input.color = v\" ng-class=\"v == input.color ? 'control-active':''\">&nbsp;</span> \r" +
    "\n" +
    "                        </span>\r" +
    "\n" +
    "                        <span ng-bind=\"input.color\"></span>\r" +
    "\n" +
    "                    </div>\r" +
    "\n" +
    "\r" +
    "\n" +
    "                </div>\r" +
    "\n" +
    "            </fieldset>\r" +
    "\n" +
    "\r" +
    "\n" +
    "            <fieldset>\r" +
    "\n" +
    "                <h3><i class=\"fa fa-chevron-down\"></i> <span ng-bind=\"_t('lb_allow_rooms')\"></span></h3>\r" +
    "\n" +
    "                <div>\r" +
    "\n" +
    "                    <div class=\"device-assigned-block\">\r" +
    "\n" +
    "                        <div class=\"btn-device-admin\" id=\"device_assigned_{{$index}}\" ng-repeat=\"d in rooms\" ng-if=\"input.rooms.indexOf(d.id) > -1\"> \r" +
    "\n" +
    "                            <a href=\"\" ng-click=\"removeRoom(d.id)\">{{d.title}} <i class=\"fa fa-times text-danger\"></i></a>\r" +
    "\n" +
    "                        </div>\r" +
    "\n" +
    "                    </div>\r" +
    "\n" +
    "                <div class=\"device-available-block\">\r" +
    "\n" +
    "                     <h3><i class=\"fa fa-chevron-down\"></i> <span ng-bind=\"_t('lb_available_rooms')\"></span></h3>\r" +
    "\n" +
    "                    <div class=\"btn-device-admin\" id=\"device_unassigned_{{$index}}\" ng-repeat=\"d in rooms\" ng-if=\"input.rooms.indexOf(d.id) === -1\">\r" +
    "\n" +
    "                        <a href=\"\" ng-click=\"assignRoom(d.id)\">{{d.title}} <i class=\"fa fa-plus text-success\"></i></a>\r" +
    "\n" +
    "                    </div>\r" +
    "\n" +
    "                </div>\r" +
    "\n" +
    "                </div>\r" +
    "\n" +
    "             </fieldset>\r" +
    "\n" +
    "\r" +
    "\n" +
    "            <!-- active -->\r" +
    "\n" +
    "            <!--<div class=\"form-group\">\r" +
    "\n" +
    "                <input type=\"checkbox\" name=\"active\" value=\"true\" id=\"active\" ng-model=\"input.active\" ng-checked=\"input.active\" /> <label ng-bind=\"_t('lb_active')\"></label>\r" +
    "\n" +
    "            </div>-->\r" +
    "\n" +
    "            <fieldset class=\"submit-entry\">\r" +
    "\n" +
    "                <button type=\"button\" class=\"btn btn-default\" bb-go-back><i class=\"fa fa-times  text-danger\"></i> <span ng-bind=\"_t('lb_cancel')\"></span></button>\r" +
    "\n" +
    "                 <button type=\"submit\" class=\"btn btn-submit\"><i class=\"fa fa-check\"></i> <span ng-bind=\"_t('lb_save')\"></span></button>\r" +
    "\n" +
    "            </fieldset>\r" +
    "\n" +
    "        </form>\r" +
    "\n" +
    "        \r" +
    "\n" +
    "        <!-- ///////////////////////////// Change login and password Form ///////////////////////////// -->\r" +
    "\n" +
    "        <div ng-if=\"id > 0\">\r" +
    "\n" +
    "        <h2 ng-bind=\"_t('local_access')\"></h2>\r" +
    "\n" +
    "        <form name=\"form_password\" id=\"form_password\" class=\"form form-page\" ng-submit=\"changeAuth(auth)\" novalidate>\r" +
    "\n" +
    "            <fieldset>\r" +
    "\n" +
    "                <!-- login -->\r" +
    "\n" +
    "                    <div class=\"form-group\">\r" +
    "\n" +
    "                        <label>{{_t('lb_login')}}: <strong>{{input.login}}</strong></label>\r" +
    "\n" +
    "                        <input name=\"login\" id=\"login\" type=\"text\" class=\"form-control form-control-sm\" value=\"\" ng-model=\"auth.login\" />\r" +
    "\n" +
    "                    </div>\r" +
    "\n" +
    "                <!-- password -->\r" +
    "\n" +
    "                <div class=\"form-group\">\r" +
    "\n" +
    "                    <label ng-bind=\"_t('lb_new_password')\"></label>\r" +
    "\n" +
    "                    <input name=\"password\" id=\"password\" type=\"password\" class=\"form-control form-control-sm\" value=\"\" ng-model=\"auth.password\" />\r" +
    "\n" +
    "                </div>\r" +
    "\n" +
    "            </fieldset>\r" +
    "\n" +
    "            <fieldset class=\"submit-entry\">\r" +
    "\n" +
    "                <button type=\"button\" class=\"btn btn-default\" bb-go-back><i class=\"fa fa-times  text-danger\"></i> <span ng-bind=\"_t('lb_cancel')\"></span></button>\r" +
    "\n" +
    "                 <button type=\"submit\" class=\"btn btn-submit\"><i class=\"fa fa-check\"></i> <span ng-bind=\"_t('lb_submit')\"></span></button>\r" +
    "\n" +
    "            </fieldset>\r" +
    "\n" +
    "        </form>\r" +
    "\n" +
    "        </div>\r" +
    "\n" +
    "    </div>\r" +
    "\n" +
    "\r" +
    "\n" +
    "</div> <!-- /ng-controller --> "
  );


  $templateCache.put('app/views/mysettings/mysettings.html',
    "<!-- Home view -->\r" +
    "\n" +
    "<div ng-controller=\"MySettingsController\" class=\"mobile-padding\">\r" +
    "\n" +
    "    <bb-loader></bb-loader>\r" +
    "\n" +
    "    <div ng-show=\"input\">\r" +
    "\n" +
    "        <h2 ng-bind=\"_t('nav_myaccess')\"></h2>\r" +
    "\n" +
    "        <form name=\"form_profile\" id=\"form_profile\" class=\"form form-page\" ng-submit=\"store(input)\" novalidate>\r" +
    "\n" +
    "            <fieldset>\r" +
    "\n" +
    "                <div class=\"form-group\">\r" +
    "\n" +
    "                    <!-- name -->\r" +
    "\n" +
    "                     <label>{{_t('lb_name')}}: </label>\r" +
    "\n" +
    "                    <input name=\"name\" id=\"name\" type=\"text\" class=\"form-control\" placeholder=\"{{_t('lb_profile_name_insert')}}\" value=\"{{input.name}}\" ng-model=\"input.name\" />\r" +
    "\n" +
    "                </div>\r" +
    "\n" +
    "                <div class=\"form-group\">\r" +
    "\n" +
    "                    <!-- email -->\r" +
    "\n" +
    "                 <label>{{_t('lb_email')}}: </label>\r" +
    "\n" +
    "                 <input name=\"email\" id=\"email\" type=\"email\" class=\"form-control\" value=\"{{input.email}}\" ng-model=\"input.email\" />\r" +
    "\n" +
    "                 </div>\r" +
    "\n" +
    "            </fieldset>\r" +
    "\n" +
    "            <fieldset>\r" +
    "\n" +
    "                <h3><i class=\"fa fa-chevron-down\"></i> <span ng-bind=\"_t('lb_settings')\"></span></h3>\r" +
    "\n" +
    "                <div>\r" +
    "\n" +
    "                    <!-- lang -->\r" +
    "\n" +
    "                    <div class=\"form-group form-inline\">\r" +
    "\n" +
    "                        <label>{{_t('lb_language')}}:</label>\r" +
    "\n" +
    "                        <span ng-repeat=\"v in cfg.lang_list\" >\r" +
    "\n" +
    "                            <input class=\"form-control-hidden\" type=\"radio\" name=\"color\" value=\"{{v}}\" ng-model=\"input.lang\" ng-checked=\"input.color == v\" />\r" +
    "\n" +
    "                            <img class=\"form-control-img profile-lang\" ng-click=\"input.lang = v\" ng-class=\"v == input.lang ? 'control-active':''\" ng-src=\"app/img/flags/{{v}}.png\" alt=\"{{ v}}\"/>\r" +
    "\n" +
    "                        </span>\r" +
    "\n" +
    "                        <span ng-bind=\"input.lang\"></span>\r" +
    "\n" +
    "                    </div>\r" +
    "\n" +
    "                    <!-- colors -->\r" +
    "\n" +
    "                    <div class=\"form-group\">\r" +
    "\n" +
    "                        <label>{{_t('lb_profile_color')}}: </label>\r" +
    "\n" +
    "                        <span ng-repeat=\"v in cfg.profile_colors\" >\r" +
    "\n" +
    "                            <input class=\"form-control-hidden\" type=\"radio\" name=\"color\" value=\"{{v}}\" ng-model=\"input.color\" ng-checked=\"input.color == v\" />\r" +
    "\n" +
    "                            <span class=\"form-control-img profile-color\" style=\"background-color: {{v}}\" ng-click=\"input.color = v\" ng-class=\"v == input.color ? 'control-active':''\">&nbsp;</span> \r" +
    "\n" +
    "                        </span>\r" +
    "\n" +
    "                        <span ng-bind=\"input.color\"></span>\r" +
    "\n" +
    "                    </div>\r" +
    "\n" +
    "                    <!-- interval -->\r" +
    "\n" +
    "                    <div class=\"form-group form-inline\">\r" +
    "\n" +
    "                        <label>{{_t('lb_interval')}}: </label>\r" +
    "\n" +
    "                        <input name=\"interval\" id=\"interval\" type=\"text\" class=\"form-control\" placeholder=\"{{_t('lb_interval_placeholder')}}\" value=\"{{input.interval}}\" ng-model=\"input.interval\" />\r" +
    "\n" +
    "                        ({{_t('miliseconds')}})\r" +
    "\n" +
    "                    </div>\r" +
    "\n" +
    "\r" +
    "\n" +
    "                </div>\r" +
    "\n" +
    "            </fieldset>\r" +
    "\n" +
    "            <!-- Expert view -->\r" +
    "\n" +
    "            <fieldset ng-if=\"elementAccess(cfg.role_access.expert_view)\">\r" +
    "\n" +
    "                <h3><i class=\"fa fa-chevron-down\"></i> <span ng-bind=\"_t('lb_expert_view')\"></span></h3>                  \r" +
    "\n" +
    "                <div class=\"form-group form-inline\">\r" +
    "\n" +
    "                    <input type=\"checkbox\" name=\"expert_view\" ng-model=\"input.expert_view\" ng-checked=\"input.expert_view\" />\r" +
    "\n" +
    "                    <label ng-bind=\"_t('lb_expert_app_view')\"></label>\r" +
    "\n" +
    "                </div>\r" +
    "\n" +
    "            </fieldset>\r" +
    "\n" +
    "            <fieldset>\r" +
    "\n" +
    "                <h3><i class=\"fa fa-chevron-down\"></i> <span ng-bind=\"_t('nav_events')\"></span></h3>\r" +
    "\n" +
    "                <div>\r" +
    "\n" +
    "                    <div>\r" +
    "\n" +
    "                        <input type=\"checkbox\" name=\"hide_all_device_events\" value=\"true\" id=\"hide_all_device_events\" ng-model=\"input.hide_all_device_events\" ng-checked=\"input.hide_all_device_events\" /> \r" +
    "\n" +
    "                        <label ng-bind=\"_t('lb_hide_device_events')\"></label>\r" +
    "\n" +
    "                    </div>\r" +
    "\n" +
    "                    <div>\r" +
    "\n" +
    "                        <input type=\"checkbox\" name=\"hide_system_events\" value=\"true\" id=\"hide_system_events\" ng-model=\"input.hide_system_events\" ng-checked=\"input.hide_system_events\" /> \r" +
    "\n" +
    "                        <label ng-bind=\"_t('lb_hide_system_events')\"></label>\r" +
    "\n" +
    "                    </div>\r" +
    "\n" +
    "                </div>\r" +
    "\n" +
    "            </fieldset>\r" +
    "\n" +
    "            <fieldset>\r" +
    "\n" +
    "                <h3><i class=\"fa fa-chevron-down\"></i> <span ng-bind=\"_t('lb_hidden_events_device')\"></span></h3>\r" +
    "\n" +
    "                <div class=\"device-assigned-block_\">\r" +
    "\n" +
    "                    <div class=\"btn-device-admin\" id=\"device_assigned_{{$index}}\" ng-repeat=\"d in devices\" ng-if=\"input.hide_single_device_events.indexOf(d.id) > -1\"> \r" +
    "\n" +
    "                        <a href=\"\" ng-click=\"removeDevice(d.id)\">{{d.metrics.title}} <i class=\"fa fa-times text-danger\"></i></a>\r" +
    "\n" +
    "                    </div>\r" +
    "\n" +
    "                </div>\r" +
    "\n" +
    "                <!--<div class=\"device-available-block\">\r" +
    "\n" +
    "                    \r" +
    "\n" +
    "                    <h3 ng-click=\"showDevices = !showDevices\"><i class=\"fa fa-chevron-down\"></i> {{_t('lb_available_devices')}}</h3>\r" +
    "\n" +
    "                    <div ng-if=\"showDevices\">\r" +
    "\n" +
    "                    <div class=\"btn-device-admin\" id=\"device_unassigned_{{$index}}\" ng-repeat=\"d in devices\" ng-if=\"input.hide_single_device_events.indexOf(d.id) === -1\">\r" +
    "\n" +
    "                        <a href=\"\" ng-click=\"assignDevice(d.id)\">{{d.metrics.title}} <i class=\"fa fa-plus text-success\"></i></a>\r" +
    "\n" +
    "                    </div>\r" +
    "\n" +
    "                    </div>\r" +
    "\n" +
    "                </div> --> \r" +
    "\n" +
    "\r" +
    "\n" +
    "            </fieldset>\r" +
    "\n" +
    "            <fieldset class=\"submit-entry\">\r" +
    "\n" +
    "                <button type=\"button\" class=\"btn btn-default\" bb-go-back><i class=\"fa fa-times  text-danger\"></i> <span ng-bind=\"_t('lb_cancel')\"></span></button>\r" +
    "\n" +
    "                 <button type=\"submit\" class=\"btn btn-submit\"><i class=\"fa fa-check\"></i> <span ng-bind=\"_t('lb_save')\"></span></button>\r" +
    "\n" +
    "            </fieldset>\r" +
    "\n" +
    "        </form>\r" +
    "\n" +
    "\r" +
    "\n" +
    "        <!-- ///////////////////////////// Change password Form ///////////////////////////// -->\r" +
    "\n" +
    "        <h2 ng-bind=\"_t('my_local_access')\"></h2>\r" +
    "\n" +
    "        <form name=\"form_password\" id=\"form_password\" class=\"form form-page\" ng-submit=\"changePassword(newPassword)\" novalidate>\r" +
    "\n" +
    "            <fieldset>\r" +
    "\n" +
    "                <!-- login  -->\r" +
    "\n" +
    "                <p class=\"form-control-static\">\r" +
    "\n" +
    "                    <span ng-bind=\"_t('lb_login')\"></span>: <strong ng-bind=\"input.login\"></strong>\r" +
    "\n" +
    "                </p>\r" +
    "\n" +
    "                <!-- password -->\r" +
    "\n" +
    "                <div>\r" +
    "\n" +
    "                    <label>{{_t('lb_new_password')}}: </label>\r" +
    "\n" +
    "                    <input name=\"password\" id=\"password\" type=\"password\" class=\"form-control form-control-sm\" value=\"\" ng-model=\"newPassword\" />\r" +
    "\n" +
    "                </div>\r" +
    "\n" +
    "\r" +
    "\n" +
    "            </fieldset>\r" +
    "\n" +
    "            <fieldset class=\"submit-entry\">\r" +
    "\n" +
    "                <button type=\"button\" class=\"btn btn-default\" bb-go-back><i class=\"fa fa-times  text-danger\"></i> <span ng-bind=\"_t('lb_cancel')\"></span></button>\r" +
    "\n" +
    "                 <button type=\"submit\" class=\"btn btn-submit\"><i class=\"fa fa-check\"></i> <span ng-bind=\"_t('lb_change_password')\"></span></button>\r" +
    "\n" +
    "            </fieldset>\r" +
    "\n" +
    "        </form>\r" +
    "\n" +
    " </div>\r" +
    "\n" +
    "\r" +
    "\n" +
    "</div> <!-- /ng-controller --> "
  );


  $templateCache.put('app/views/pages/about.html',
    "<!-- About view -->\r" +
    "\n" +
    "<div ng-controller=\"AboutController\" class=\"mobile-padding\">\r" +
    "\n" +
    "    <h1>{{_t('nav_about')}}</h1>\r" +
    "\n" +
    "    <p>This User Interfaces allows to operate a Smart Home Network based on Z-Wave devices. It utilizes the software architecture \"Z_Way\", certified as Z-Wave Plus Controller under the Certification number ZC10-14110009. </p>\r" +
    "\n" +
    "    <p><em>All rights reserved by Z-Wave Me, c/o Alsenet S.A. Switzerland</em></p>\r" +
    "\n" +
    "</div>"
  );


  $templateCache.put('app/views/rooms/config_rooms.html',
    "<!-- Rooms view -->\r" +
    "\n" +
    "<div ng-controller=\"RoomConfigController\">\r" +
    "\n" +
    "     <bb-loader></bb-loader>\r" +
    "\n" +
    "     <h2 class=\"mobile-padding\" ng-bind=\"_t('nav_rooms')\"></h2>\r" +
    "\n" +
    "    <table id=\"table_cfg_rooms\" class=\"table table-condensed table-report\">\r" +
    "\n" +
    "        <tbody>\r" +
    "\n" +
    "            <tr ng-repeat=\"v in collection\" id=\"row_{{v.id}}\">\r" +
    "\n" +
    "                <td class=\"td-img\">\r" +
    "\n" +
    "                     <img class=\"report-img img-circle\" ng-src=\"{{v|getRoomIcon}}\" />\r" +
    "\n" +
    "                </td>\r" +
    "\n" +
    "                 <td ng-bind=\"v.title\"></td>\r" +
    "\n" +
    "                <td class=\"td-action\">\r" +
    "\n" +
    "                    <a class=\"btn btn-default\" href=\"#config-rooms/{{v.id}}\"><i class=\"fa fa-pencil fa-lg text-info\"></i></a>\r" +
    "\n" +
    "                    <button class=\"btn btn-default\" \r" +
    "\n" +
    "                       ng-click=\"delete('#row_' + v.id, v.id, _t('lb_delete_confirm'))\"\r" +
    "\n" +
    "                       ><i class=\"fa fa-times fa-lg text-danger\"></i></button>   \r" +
    "\n" +
    "                </td>\r" +
    "\n" +
    "            </tr>\r" +
    "\n" +
    "        </tbody>\r" +
    "\n" +
    "    </table>\r" +
    "\n" +
    "     <div class=\"fieldset submit-entry\">\r" +
    "\n" +
    "        <button type=\"button\" class=\"btn btn-default\" bb-go-back><i class=\"fa fa-times  text-danger\"></i> <span ng-bind=\"_t('lb_cancel')\"></span></button>\r" +
    "\n" +
    "          <a type=\"button\" class=\"btn btn-submit\" ng-href=\"#config-rooms/0\"><i class=\"fa fa-plus\"></i> {{_t('lb_add_room')}}</a>\r" +
    "\n" +
    "     </div>\r" +
    "\n" +
    "</div> <!-- /ng-controller --> "
  );


  $templateCache.put('app/views/rooms/config_rooms_edit.html',
    "<!-- Config rooms edit -->\r" +
    "\n" +
    "<div ng-controller=\"RoomConfigEditController\" class=\"mobile-padding\">\r" +
    "\n" +
    "    <bb-loader></bb-loader>\r" +
    "\n" +
    "\r" +
    "\n" +
    "    <div ng-show=\"input\">\r" +
    "\n" +
    "        <h2><span ng-bind=\"_t('lb_room')\"></span>: <span ng-show=\"input.id > 0\">(#{{input.id}})</span> <span ng-bind=\"input.title\"></span></h2>\r" +
    "\n" +
    "        <form name=\"form_profile\" id=\"form_profile\" class=\"form form-page\" ng-submit=\"store(input)\" novalidate>\r" +
    "\n" +
    "            <fieldset>\r" +
    "\n" +
    "                <h3><i class=\"fa fa-chevron-down\"></i> <span ng-bind=\"_t('lb_name')\"></span></h3>\r" +
    "\n" +
    "                <div>\r" +
    "\n" +
    "                    <!-- name -->\r" +
    "\n" +
    "                    <div class=\"form-group\">\r" +
    "\n" +
    "                        <input name=\"title\" id=\"title\" type=\"text\" class=\"form-control\" placeholder=\"{{_t('lb_room_name')}}\" value=\"{{input.title}}\" ng-model=\"input.title\" />\r" +
    "\n" +
    "                    </div>\r" +
    "\n" +
    "                </div>\r" +
    "\n" +
    "            </fieldset>\r" +
    "\n" +
    "\r" +
    "\n" +
    "            <fieldset>\r" +
    "\n" +
    "                <h3><i class=\"fa fa-chevron-down\"></i> <span ng-bind=\"_t('lb_select_image')\"></span></h3>\r" +
    "\n" +
    "                <div class=\"clearfix\">\r" +
    "\n" +
    "                    <div class=\"room-images\">\r" +
    "\n" +
    "                         <!--<input type=\"radio\" name=\"default_img\" class=\"form-control-hidden\" value=\"{{v}}\" ng-model=\"input.default_img\" ng-checked=\"input.default_img == v\" />-->\r" +
    "\n" +
    "                        <img class=\"room-image form-control-img\" \r" +
    "\n" +
    "                             ng-repeat=\"v in defaultImages\"\r" +
    "\n" +
    "                             ng-click=\"input.default_img = v;input.img_type = 'default'\" \r" +
    "\n" +
    "                             ng-class=\"input.img_type == 'default' && v == input.default_img ? 'control-active':''\" \r" +
    "\n" +
    "                             ng-src=\"storage/img/rooms/{{v}}\" alt=\"{{v}}\" />\r" +
    "\n" +
    "                        \r" +
    "\n" +
    "                         <!--<input type=\"radio\" class=\"form-control-hidden\" name=\"user_img\" value=\"{{input.user_img}}\" ng-model=\"input.user_img\" ng-checked=\"input.img_type == 'user'\" />-->\r" +
    "\n" +
    "                        <img class=\"room-image form-control-img\" \r" +
    "\n" +
    "                             ng-click=\"input.user_img = input.user_img;input.img_type = 'user'\"\r" +
    "\n" +
    "                             ng-class=\"input.img_type == 'user' ? 'control-active':''\" \r" +
    "\n" +
    "                             ng-src=\"{{userImageUrl + input.user_img}}\" \r" +
    "\n" +
    "                             ng-if=\"input.user_img\" />\r" +
    "\n" +
    "                    </div>\r" +
    "\n" +
    "                </div>\r" +
    "\n" +
    "            </fieldset>\r" +
    "\n" +
    "            <fieldset ng-if=\"!isMobile\">\r" +
    "\n" +
    "                <h3><i class=\"fa fa-chevron-down\"></i> <span ng-bind=\"_t('lb_upload_image')\"></span></h3>\r" +
    "\n" +
    "                <div>\r" +
    "\n" +
    "                  <div class=\"form-group\">\r" +
    "\n" +
    "                       <bb-help-text trans=\"_t('room_image_upload_info')\"></bb-help-text>\r" +
    "\n" +
    "                         <!--<input type=\"file\" class=\"form-control_\" file-model=\"myFile\" /><br />-->  \r" +
    "\n" +
    "                         <input type=\"file\" name=\"file\" onchange=\"angular.element(this).scope().uploadFile(this.files)\"/>\r" +
    "\n" +
    "                         <!--<button type=\"button\" class=\"btn btn-primary\" id=\"btn_upload_img\" ng-click=\"uploadFile()\"><i class=\"fa fa-upload\"></i> <span ng-bind=\"_t('lb_upload_image')\"></span></button>-->  \r" +
    "\n" +
    "                    </div>\r" +
    "\n" +
    "                </div>\r" +
    "\n" +
    "            </fieldset>\r" +
    "\n" +
    "            \r" +
    "\n" +
    "             <fieldset>\r" +
    "\n" +
    "                <h3><i class=\"fa fa-chevron-down\"></i> <span ng-bind=\"_t('nav_devices')\"></span></h3>\r" +
    "\n" +
    "                <div class=\"device-assigned-block\">\r" +
    "\n" +
    "                        <h4>{{_t('lb_devices_in_room')}}</h4>\r" +
    "\n" +
    "                        <div class=\"btn-device-admin\" id=\"device_assigned_{{$index}}\" ng-repeat=\"d in devices\" ng-if=\"devicesAssigned.indexOf(d.id) > -1 && d.location !== 0\"> \r" +
    "\n" +
    "                            <a href=\"\" ng-click=\"removeDevice(d)\">{{d.metrics.title}} <i class=\"fa fa-times text-danger\"></i></a>\r" +
    "\n" +
    "                        </div>\r" +
    "\n" +
    "                    </div>\r" +
    "\n" +
    "                <div class=\"device-available-block\">\r" +
    "\n" +
    "                    <h4>{{_t('lb_available_devices')}}</h4>\r" +
    "\n" +
    "                    <div class=\"btn-device-admin\" id=\"device_unassigned_{{$index}}\" ng-repeat=\"d in devices\" ng-if=\"devicesAssigned.indexOf(d.id) === -1 || d.location === 0\">\r" +
    "\n" +
    "                        <a href=\"\" ng-click=\"assignDevice(d)\">{{d.metrics.title}} <i class=\"fa fa-plus text-success\"></i></a>\r" +
    "\n" +
    "                    </div>\r" +
    "\n" +
    "                </div>\r" +
    "\n" +
    "            </fieldset>\r" +
    "\n" +
    "            <fieldset class=\"submit-entry\">\r" +
    "\n" +
    "                 <button type=\"button\" class=\"btn btn-default\" bb-go-back><i class=\"fa fa-times  text-danger\"></i> <span ng-bind=\"_t('lb_cancel')\"></span></button>\r" +
    "\n" +
    "                 <button type=\"submit\" class=\"btn btn-submit\"><i class=\"fa fa-check\"></i> <span ng-bind=\"_t('lb_save')\"></span></button>\r" +
    "\n" +
    "            </fieldset>\r" +
    "\n" +
    "        </form>\r" +
    "\n" +
    "\r" +
    "\n" +
    "    </div>\r" +
    "\n" +
    "\r" +
    "\n" +
    "</div> <!-- /ng-controller --> "
  );


  $templateCache.put('app/views/rooms/rooms.html',
    "<!-- Rooms view -->\r" +
    "\n" +
    "<div ng-controller=\"RoomController\" class=\"mobile-padding\">\r" +
    "\n" +
    "    <bb-loader></bb-loader>\r" +
    "\n" +
    "    <div class=\"row\">\r" +
    "\n" +
    "        <div class=\"col-md-3 col-sm-6 room-entry has-device-{{devices.count[v.id].length||'false'}}\" \r" +
    "\n" +
    "             id=\"panel_{{$index}}\"\r" +
    "\n" +
    "             ng-hide=\"v.id === 0 && !devices.count[v.id]\"\r" +
    "\n" +
    "             ng-repeat=\"v in collection\">\r" +
    "\n" +
    "            <div class=\"room-in\" ng-init=\"room_title = (v.id == 0 ? _t(v.title) : v.title)\">\r" +
    "\n" +
    "                 <h3 class=\"entry-title\">\r" +
    "\n" +
    "                    <a href=\"#/elements/location/{{v.id}}/{{room_title}}\" ng-if=\"devices.count[v.id].length\">{{room_title}} ({{devices.count[v.id].length||0}})</a>\r" +
    "\n" +
    "                    <span ng-if=\"!devices.count[v.id].length\">{{room_title}} ({{devices.count[v.id].length||0}})</span>\r" +
    "\n" +
    "                </h3>\r" +
    "\n" +
    "                <a href=\"#/elements/location/{{v.id}}/{{room_title}}\" ng-if=\"devices.count[v.id].length\">\r" +
    "\n" +
    "                    <img class=\"room-image-big img-circle\" ng-src=\"storage/img/rooms/{{v.default_img}}\" ng-if=\"v.img_type == 'default' && v.default_img\" alt=\"img\" />\r" +
    "\n" +
    "                      <img class=\"room-image-big img-circle\" ng-src=\"{{userImageUrl + v.user_img}}\" ng-if=\"v.img_type == 'user' && v.user_img\" alt=\"img\" />\r" +
    "\n" +
    "                      <img class=\"room-image-big img-circle\" ng-src=\"storage/img/placeholder-img.png\" ng-if=\"!v.default_img && !v.user_img && v.id != 0\" alt=\"img\" />\r" +
    "\n" +
    "                       <img class=\"room-image-big img-circle\" ng-src=\"storage/img/rooms/unassigned.png\" ng-if=\"v.id == 0\" alt=\"img\" />\r" +
    "\n" +
    "                </a>\r" +
    "\n" +
    "                 <span ng-if=\"!devices.count[v.id].length\">\r" +
    "\n" +
    "                    <img class=\"room-image-big img-circle\" ng-src=\"storage/img/rooms/{{v.default_img}}\" ng-if=\"v.img_type == 'default' && v.default_img\" alt=\"img\" />\r" +
    "\n" +
    "                      <img class=\"room-image-big img-circle\" ng-src=\"{{userImageUrl + v.user_img}}\" ng-if=\"v.img_type == 'user' && v.user_img\" alt=\"img\" />\r" +
    "\n" +
    "                      <img class=\"room-image-big img-circle\" ng-src=\"storage/img/placeholder-img.png\" ng-if=\"!v.default_img && !v.user_img && v.id != 0\" alt=\"img\" />\r" +
    "\n" +
    "                       <img class=\"room-image-big img-circle\" ng-src=\"storage/img/rooms/unassigned.png\" ng-if=\"v.id == 0\" alt=\"img\" />\r" +
    "\n" +
    "                </span>\r" +
    "\n" +
    "            </div>\r" +
    "\n" +
    "        </div>\r" +
    "\n" +
    "        <div class=\"col-md-3 col-sm-6 room-entry\" id=\"panel_new_room\" ng-if=\"elementAccess(cfg.role_access.config_rooms)\">\r" +
    "\n" +
    "            <div class=\"room-in\">\r" +
    "\n" +
    "                <h3 class=\"entry-title\"><a href=\"#config-rooms/0\" ng-bind=\"_t('lb_add_room')\"></a></h3>\r" +
    "\n" +
    "                <a href=\"#config-rooms/0\">\r" +
    "\n" +
    "                    <img class=\"room-image-big img-circle\" src=\"storage/img/rooms/add-icon.png\" alt=\"{{_t('lb_add_room')}}\" />\r" +
    "\n" +
    "                </a>\r" +
    "\n" +
    "            </div>\r" +
    "\n" +
    "        </div>\r" +
    "\n" +
    "        \r" +
    "\n" +
    "    </div>\r" +
    "\n" +
    "</div> <!-- /ng-controller --> "
  );


  $templateCache.put('app/views/zwave/navi.html',
    " <ul class=\"nav nav-tabs nav-tabs-3\" role=\"tablist\">\r" +
    "\n" +
    "    <li ng-class=\"activeTab == 'devices' ? 'active' : ''\">\r" +
    "\n" +
    "        <a href=\"#zwave/devices\" title=\"{{_t('lb_zwave_devices')}}\">\r" +
    "\n" +
    "            <i class=\"fa fa-wifi fa-lg tab-icon\"></i> <span class=\"tab-name\">{{_t('lb_zwave_devices')}}</span>\r" +
    "\n" +
    "        </a>\r" +
    "\n" +
    "    </li>\r" +
    "\n" +
    "    <li ng-class=\"activeTab == 'batteries' ? 'active' : ''\" ng-if=\"elementAccess(cfg.role_access.network)\">\r" +
    "\n" +
    "        <a href=\"#zwave/batteries\" title=\"{{_t('lb_battery_status')}}\">\r" +
    "\n" +
    "            <i class=\"fa fa-bolt fa-lg tab-icon\"></i> <span class=\"tab-name\">{{_t('lb_battery_status')}}</span>\r" +
    "\n" +
    "        </a>\r" +
    "\n" +
    "    </li>\r" +
    "\n" +
    "    <li ng-class=\"activeTab == 'network' ? 'active' : ''\" ng-if=\"elementAccess(cfg.role_access.network)\">\r" +
    "\n" +
    "        <a href=\"#zwave/network\" title=\"{{_t('nav_network_health')}}\">\r" +
    "\n" +
    "            <i class=\"fa fa-sitemap tab-icon\"></i> <span class=\"tab-name\">{{_t('lb_network_status')}}</span> \r" +
    "\n" +
    "        </a>\r" +
    "\n" +
    "    </li>\r" +
    "\n" +
    "</ul>\r" +
    "\n"
  );


  $templateCache.put('app/views/zwave/zwave_add.html',
    "<!-- Zwave device view -->\r" +
    "\n" +
    "<div ng-controller=\"ZwaveAddController\">\r" +
    "\n" +
    "<div class=\"mobile-padding\">\r" +
    "\n" +
    "   <div class=\"text-center device-autodetect\"><a href=\"#zwave/include\" class=\"btn btn-default btn-lg btn-block\"><i class=\"fa fa-compass\"></i> {{_t('lb_zwave_autodetect')}}</a></div>\r" +
    "\n" +
    "    <div class=\"row device-manufacturers\" ng-hide=\"zwaveDevices\">\r" +
    "\n" +
    "        <div class=\"col-sm-2 col-device-vendor\" ng-repeat=\"v in manufacturers\">\r" +
    "\n" +
    "            <a ng-href=\"#zwave/add/{{v.brandname}}\" class=\"vendor-list\">\r" +
    "\n" +
    "                <p class=\"vendor-image\"><img ng-src=\"storage/img/zwave/vendors/{{v.brand_image}}\" alt=\"img\" ng-show=\"v.brandname\" /></p>\r" +
    "\n" +
    "            </a>\r" +
    "\n" +
    "        </div>\r" +
    "\n" +
    "    </div>\r" +
    "\n" +
    " </div>\r" +
    "\n" +
    "    <div ng-if=\"manufacturer\">\r" +
    "\n" +
    "        <h3 class=\"mobile-padding\"> <a class=\"btn btn-default\" href=\"\" bb-go-back><i class=\"fa fa-arrow-left\"></i></a> <span ng-bind=\"manufacturer\"></span></h3> \r" +
    "\n" +
    "        <table class=\"table table-condensed table-report table-products\">\r" +
    "\n" +
    "            <tbody>\r" +
    "\n" +
    "                <tr ng-repeat=\"(k,v) in zwaveDevices\">\r" +
    "\n" +
    "                    <td class=\"td-img\">\r" +
    "\n" +
    "                        <img class=\"product-img\" ng-src=\"storage/img/zwave/devices/{{v.product_image}}\" alt=\"img\" ng-if=\"v.product_image\" />\r" +
    "\n" +
    "                        <img class=\"product-img\" ng-src=\"storage/img/zwave/vendors/{{v.brand_image}}\" alt=\"img\" ng-if=\"!v.product_image\" />\r" +
    "\n" +
    "                    </td>\r" +
    "\n" +
    "                    <td class=\"text-left\">\r" +
    "\n" +
    "                        <span ng-bind=\"v.name\"></span> <!--<em ng-bind=\"v.ZManufacturersName\"></em>-->\r" +
    "\n" +
    "                    </td>\r" +
    "\n" +
    "                    <td class=\"td-action\">\r" +
    "\n" +
    "                        <a href=\"#zwave/include/{{v.id}}\" class=\"btn btn-default\"><i class=\"fa fa-plug text-primary\"></i> <span class=\"btn-name\" ng-bind=\"_t('lb_include_device')\"></span></a>\r" +
    "\n" +
    "\r" +
    "\n" +
    "                    </td>\r" +
    "\n" +
    "                </tr>\r" +
    "\n" +
    "            </tbody>\r" +
    "\n" +
    "        </table>\r" +
    "\n" +
    "    </div>\r" +
    "\n" +
    "     <div class=\"device-logo\" ng-include=\"'app/views/zwave/zwave_nav.html'\"></div>\r" +
    "\n" +
    "</div> <!-- /ng-controller --> \r" +
    "\n" +
    "\r" +
    "\n"
  );


  $templateCache.put('app/views/zwave/zwave_batteries.html',
    "<!-- Zwave battery view -->\r" +
    "\n" +
    "<div ng-controller=\"ZwaveManageController\">\r" +
    "\n" +
    "    <!-- Zwave navigation -->\r" +
    "\n" +
    "    <div ng-include=\"'app/views/zwave/navi.html'\"></div>\r" +
    "\n" +
    "    <div class=\"tab-pane\" id=\"module_battery\">\r" +
    "\n" +
    "        <table class=\"table table-report table-condensed\">\r" +
    "\n" +
    "            <tbody>\r" +
    "\n" +
    "                <tr ng-repeat=\"v in devices.batteries| orderBy:'level':false\" id=\"row_battery_{{ v.rowId}}\">\r" +
    "\n" +
    "                    <td class=\"td-img\">\r" +
    "\n" +
    "\r" +
    "\n" +
    "                        <img class=\"report-img\" ng-src=\"storage/img/icons/{{v.metrics.level|getBatteryIcon}}\" alt=\"img\" />\r" +
    "\n" +
    "                    </td>\r" +
    "\n" +
    "                    <td class=\"network-zwave-device\">\r" +
    "\n" +
    "                        <div>(#{{v.nodeId}}) {{v.nodeName}}</div>\r" +
    "\n" +
    "                    </td>\r" +
    "\n" +
    "                    <td>\r" +
    "\n" +
    "                        <span class=\"text-success\" ng-show=\"v.metrics.level >= 80\">{{v.metrics.level}} %</span>\r" +
    "\n" +
    "                        <span class=\"text-default\" ng-show=\"v.metrics.level < 80 && v.metrics.level > 20\">{{v.metrics.level}} %</span>\r" +
    "\n" +
    "                        <span class=\"text-danger\" ng-show=\"v.metrics.level <= 20\"><i class=\"fa fa-exclamation-triangle\"></i> {{v.metrics.level}} %</span>\r" +
    "\n" +
    "\r" +
    "\n" +
    "                    </td>\r" +
    "\n" +
    "                </tr>\r" +
    "\n" +
    "            </tbody>\r" +
    "\n" +
    "        </table>\r" +
    "\n" +
    "    </div>\r" +
    "\n" +
    "    <div class=\"device-logo\" ng-include=\"'app/views/zwave/zwave_nav.html'\"></div>\r" +
    "\n" +
    "</div> <!-- /ng-controller --> "
  );


  $templateCache.put('app/views/zwave/zwave_devices.html',
    "<!-- Zwave device view -->\r" +
    "\n" +
    "<div ng-controller=\"ZwaveManageController\">\r" +
    "\n" +
    "    <!-- Zwave navigation -->\r" +
    "\n" +
    "    <div ng-include=\"'app/views/zwave/navi.html'\"></div>\r" +
    "\n" +
    "    <div class=\"tab-pane\" id=\"module_zwave\">\r" +
    "\n" +
    "            <table class=\"table table-condensed table-report\">\r" +
    "\n" +
    "            <tbody>\r" +
    "\n" +
    "                 <tr ng-repeat=\"v in zWaveDevices | orderBy:'title':false\" id=\"row_zwave_{{v.id}}\" ng-if=\"v.elements\">\r" +
    "\n" +
    "                     <td class=\"network-zwave-device\">\r" +
    "\n" +
    "                        <a href=\"\" class=\"network-zwave-title\" ng-click=\"goEdit[v.id] = !goEdit[v.id]\">\r" +
    "\n" +
    "                            <i class=\"fa\" ng-class=\"goEdit[v.id] ? 'fa-chevron-up': 'fa-chevron-down'\"></i> {{v.title}} (#{{v.id}}) \r" +
    "\n" +
    "                        </a>\r" +
    "\n" +
    "                        <div class=\"network-zwave-element\" ng-repeat=\"e in v.elements | orderBy:'title':false\" ng-if=\"goEdit[v.id]\">\r" +
    "\n" +
    "                            <img class=\"report-img\" ng-src=\"{{e.metrics.icon|getElementIcon:e:e.level}}\" alt=\"img\" /> \r" +
    "\n" +
    "                                <span class=\"zwave-hidden-{{e.permanently_hidden}}\" ng-bind=\"e.title\"></span>\r" +
    "\n" +
    "                          </div>\r" +
    "\n" +
    "                    </td>\r" +
    "\n" +
    "                    <td class=\"td-action\" ng-if=\"elementAccess(cfg.role_access.network)\">\r" +
    "\n" +
    "                        <a class=\"btn btn-default\" href=\"#zwave/devices/{{v.id}}\" ng-if_=\"v.cfg.length > 0\">\r" +
    "\n" +
    "                           <i class=\"fa fa-cog text-primary\"></i> <span class=\"btn-name\" ng-bind=\"_t('lb_configuration')\"></span>\r" +
    "\n" +
    "                       </a>\r" +
    "\n" +
    "                        <a class=\"btn btn-default\" href=\"#zwave/exclude/{{v.id}}\" title=\"{{_t('lb_remove')}}\">\r" +
    "\n" +
    "                                <i class=\"fa fa-remove fa-lg text-danger\"></i>\r" +
    "\n" +
    "                        </a>\r" +
    "\n" +
    "                    </td>\r" +
    "\n" +
    "                </tr>\r" +
    "\n" +
    "            </tbody>\r" +
    "\n" +
    "        </table>\r" +
    "\n" +
    "        </div>\r" +
    "\n" +
    "    <div class=\"device-logo\" ng-include=\"'app/views/zwave/zwave_nav.html'\"></div>\r" +
    "\n" +
    "</div> <!-- /ng-controller --> "
  );


  $templateCache.put('app/views/zwave/zwave_exclude.html',
    "<!-- Include -->\r" +
    "\n" +
    "<div ng-controller=\"ZwaveExcludeController\">\r" +
    "\n" +
    "    \r" +
    "\n" +
    "    <div ng-if=\"zWaveDevice.id\">\r" +
    "\n" +
    "        <div class=\"device-perex clearfix\"> \r" +
    "\n" +
    "            <h2>{{zWaveDevice.name}}</h2>\r" +
    "\n" +
    "            <p>{{_t('remove_device_from_network')}} </p>\r" +
    "\n" +
    "        </div>\r" +
    "\n" +
    "        <div class=\"col-device app-border app-gradient app-shadow\">\r" +
    "\n" +
    "            <!-- RemoveNodeFromNetwork proccess --> \r" +
    "\n" +
    "            <div ng-if=\"zWaveDevice.lastExcludedDevice != zWaveDevice.id\">\r" +
    "\n" +
    "                <div class=\"exclude-device\" ng-hide=\"[5].indexOf(zWaveDevice.controllerState) > -1\">\r" +
    "\n" +
    "                    <p><strong>{{_t('start_removal')}} </strong></p>\r" +
    "\n" +
    "                    <button class=\"btn btn-default btn-lg\"\r" +
    "\n" +
    "                            ng-click=\"runZwaveCmd('controller.RemoveNodeFromNetwork(1)')\"\r" +
    "\n" +
    "                            ><i class=\"fa fa-play-circle fa-lg text-success\"></i> {{_t('btn_exclusion_start')}}</button> \r" +
    "\n" +
    "                </div>\r" +
    "\n" +
    "                <div class=\"exclude-device\" ng-show=\"zWaveDevice.controllerState == 5\">\r" +
    "\n" +
    "                    <div class=\"alert alert-warning\"><i class=\"fa fa-spinner fa-spin\"></i> <strong>{{_t('confirm_exclusion')}}</strong></div>\r" +
    "\n" +
    "                    <button \r" +
    "\n" +
    "                        class=\"btn btn-default btn-lg\"\r" +
    "\n" +
    "                        ng-click=\"runZwaveCmd('controller.RemoveNodeFromNetwork(0)')\">\r" +
    "\n" +
    "                        <i class=\"fa fa-ban fa-lg text-danger\"></i> {{_t('btn_exclusion_stop')}}</button>\r" +
    "\n" +
    "                </div>\r" +
    "\n" +
    "            </div>\r" +
    "\n" +
    "            <!-- RemoveNodeFromNetwork result --> \r" +
    "\n" +
    "            <div class=\"exclude-device\" ng-if=\"zWaveDevice.lastExcludedDevice == zWaveDevice.id\">\r" +
    "\n" +
    "                <div class=\"alert alert-success\">\r" +
    "\n" +
    "                    <i class=\"fa fa-check\"></i> <strong>{{_t('lb_device_excluded')}}</strong>\r" +
    "\n" +
    "                </div>\r" +
    "\n" +
    "            </div>\r" +
    "\n" +
    "        </div>\r" +
    "\n" +
    "        <div class=\"fieldset submit-entry\">\r" +
    "\n" +
    "            <button type=\"button\" class=\"btn btn-default\" bb-go-back><i class=\"fa fa-times  text-danger\"></i> <span ng-bind=\"_t('lb_cancel')\"></span></button>\r" +
    "\n" +
    "            <!-- <a href=\"#zwave/devices\" class=\"btn btn-info\">{{_t('continue')}} <i class=\"fa fa-chevron-right\"></i></a> --> \r" +
    "\n" +
    "        </div>\r" +
    "\n" +
    "        <p>&nbsp;</p>\r" +
    "\n" +
    "\r" +
    "\n" +
    "        <div class=\"col-device app-border app-gradient app-shadow\">\r" +
    "\n" +
    "            <!-- RemoveFailedNode proccess --> \r" +
    "\n" +
    "            <div ng-if=\"!zWaveDevice.removeNodeProcess\">\r" +
    "\n" +
    "                <div class=\"exclude-device\">\r" +
    "\n" +
    "                    <button class=\"btn btn-default btn-lg\"\r" +
    "\n" +
    "                            ng-disabled_=\"[5, 6, 7, 20].indexOf(controllerState) > -1\"\r" +
    "\n" +
    "                            ng-show_=\"[1, 2, 3, 4].indexOf(controllerState) == -1\"\r" +
    "\n" +
    "                            ng-click=\"zWaveDevice.removeNode = !zWaveDevice.removeNode\" ><i class=\"fa fa-chain-broken fa-lg text-danger\"></i> {{_t('broken_device')}}</button>\r" +
    "\n" +
    "                </div>\r" +
    "\n" +
    "                <div class=\"exclude-device\" ng-if=\"zWaveDevice.removeNode\">\r" +
    "\n" +
    "                    <div class=\"alert alert-warning\"><i class=\"fa fa-info-circle\"></i> {{_t('broken_device_war')}}</div>\r" +
    "\n" +
    "\r" +
    "\n" +
    "                    <button class=\"btn btn-danger btn-lg\"\r" +
    "\n" +
    "                            ng-click=\"removeFailedNode('devices[' + zWaveDevice.id + '].RemoveFailedNode()')\"\r" +
    "\n" +
    "                            ><i class=\"fa fa-exclamation-triangle fa-lg\"></i> {{_t('remove_permanently')}}</button>\r" +
    "\n" +
    "\r" +
    "\n" +
    "                </div>\r" +
    "\n" +
    "            </div>\r" +
    "\n" +
    "            <div class=\"exclude-device\" ng-if=\"zWaveDevice.removeNodeProcess\">\r" +
    "\n" +
    "                <div class=\"alert alert-warning\">\r" +
    "\n" +
    "                    <i class=\"fa fa-spinner fa-spin\"></i> <strong>{{_t('broken_device_info')}}</strong>\r" +
    "\n" +
    "                </div>\r" +
    "\n" +
    "            </div>\r" +
    "\n" +
    "        </div>\r" +
    "\n" +
    "        <div class=\"fieldset submit-entry\">\r" +
    "\n" +
    "            <button type=\"button\" class=\"btn btn-default\" bb-go-back><i class=\"fa fa-times text-danger\"></i> <span ng-bind=\"_t('lb_cancel')\"></span></button>\r" +
    "\n" +
    "        </div>\r" +
    "\n" +
    "    </div>\r" +
    "\n" +
    "    <div class=\"device-logo\" ng-include=\"'app/views/zwave/zwave_nav.html'\"></div>\r" +
    "\n" +
    "</div> <!-- /ng-controller --> \r" +
    "\n" +
    "\r" +
    "\n"
  );


  $templateCache.put('app/views/zwave/zwave_include.html',
    "<!-- Include -->\r" +
    "\n" +
    "<div ng-controller=\"ZwaveIncludeController\">\r" +
    "\n" +
    "     <bb-loader></bb-loader> \r" +
    "\n" +
    "      <!-- interviewCfg {{interviewCfg}}-->\r" +
    "\n" +
    "    <div class=\"device-perex clearfix\"> \r" +
    "\n" +
    "         <div class=\"include-device-img\">\r" +
    "\n" +
    "          <img class=\"include-device-img\" ng-src=\"storage/img/zwave/devices/{{device.data.product_image}}\" alt=\"img\" ng-show=\"device.data.product_image\" /> \r" +
    "\n" +
    "        </div>\r" +
    "\n" +
    "        <div class=\"include-device-txt\">\r" +
    "\n" +
    "            <p ng-bind=\"_t('lb_include_device')\"></p> \r" +
    "\n" +
    "        <h1><strong ng-show=\"device.data\" ng-bind=\"device.data.brandname + ' '  + device.data.name\"></strong></h1> \r" +
    "\n" +
    "        </div>\r" +
    "\n" +
    "    </div>\r" +
    "\n" +
    "     <!--<bb-help file=\"interview\" lang=\"{{lang}}\"></bb-help>-->\r" +
    "\n" +
    "    <div class=\"col-device app-border app-gradient app-shadow\">\r" +
    "\n" +
    "        <table class=\"table table-report table-inclusion\">\r" +
    "\n" +
    "            <tbody>\r" +
    "\n" +
    "                <!-- 1 -->\r" +
    "\n" +
    "                <tr>\r" +
    "\n" +
    "                    <td><span class=\"badge badge-number\">1</span></td>\r" +
    "\n" +
    "                    <td>\r" +
    "\n" +
    "                         <!-- Text -->\r" +
    "\n" +
    "                        <div ng-show=\"[5, 6, 7].indexOf(controllerState) == -1\">\r" +
    "\n" +
    "                        <span class=\"device-step-body\">\r" +
    "\n" +
    "                            <strong>{{_t('lb_preparation')}}: </strong>\r" +
    "\n" +
    "                            <span ng-bind=\"_t('lb_include_preparation')\"></span> \r" +
    "\n" +
    "                             <a href=\"\" \r" +
    "\n" +
    "                                ng-disabled=\"[1, 2, 3, 4, 20].indexOf(controllerState) > -1\"\r" +
    "\n" +
    "                                \r" +
    "\n" +
    "                                ng-click=\"runZwaveCmd('controller.RemoveNodeFromNetwork(1)');\r" +
    "\n" +
    "                                            clearStepStatus = true\">\r" +
    "\n" +
    "                                <strong ng-bind=\"_t('lb_include_preparation_start')\"></strong>\r" +
    "\n" +
    "                            </a>\r" +
    "\n" +
    "                            <br /><span  ng-show=\"device.data.prep\" ng-bind=\"device.data.prep\"></span>\r" +
    "\n" +
    "                                     \r" +
    "\n" +
    "                        </span>\r" +
    "\n" +
    "                        </div>\r" +
    "\n" +
    "                         <!-- Exclusion -->\r" +
    "\n" +
    "                        <div class=\"alert alert-warning\" ng-show=\"controllerState == 5\">\r" +
    "\n" +
    "                            <i class=\"fa fa-spinner fa-spin\"></i> <span ng-bind=\"_t('lb_ready_exclude')\"></span> <strong ng-bind=\"device.data.exc\"></strong>\r" +
    "\n" +
    "                            <button \r" +
    "\n" +
    "                                class=\"btn btn-danger\"\r" +
    "\n" +
    "                                ng-show=\"[5, 6, 7].indexOf(controllerState) > -1\"\r" +
    "\n" +
    "                                ng-click=\"runZwaveCmd('controller.RemoveNodeFromNetwork(0)')\" \r" +
    "\n" +
    "                                ng-bind=\"_t('btn_exclusion_stop')\"></button>\r" +
    "\n" +
    "                        </div>\r" +
    "\n" +
    "                        <!-- last Excluded Device -->\r" +
    "\n" +
    "                         <div class=\"alert alert-success alert-dismissible\" ng-show=\"lastExcludedDevice != null\">\r" +
    "\n" +
    "                            <button type=\"button\" class=\"close\" data-dismiss=\"alert\" aria-label=\"Close\"><span aria-hidden=\"true\">&times;</span></button>\r" +
    "\n" +
    "                            <i class=\"fa fa-check\"></i> <span ng-bind=\"_t('lb_device_excluded')\"></span>\r" +
    "\n" +
    "                        </div>\r" +
    "\n" +
    "\r" +
    "\n" +
    "                    </td>\r" +
    "\n" +
    "                    <td>&nbsp;<!--<i class=\"fa fa-check fa-2x text-success\"></i>--></td>\r" +
    "\n" +
    "                </tr>\r" +
    "\n" +
    "\r" +
    "\n" +
    "                <!-- 2 -->\r" +
    "\n" +
    "                <tr>\r" +
    "\n" +
    "                    <td><span class=\"badge  badge-number\">2</span></td>\r" +
    "\n" +
    "                    <td>\r" +
    "\n" +
    "                        <button class=\"btn btn-success btn-lg\"\r" +
    "\n" +
    "                                ng-disabled=\"[5, 6, 7, 20].indexOf(controllerState) > -1\"\r" +
    "\n" +
    "                                ng-show=\"[1, 2, 3, 4].indexOf(controllerState) == -1\"\r" +
    "\n" +
    "                                ng-click=\"startInclusion('controller.AddNodeToNetwork(1)');success2 = !success2\"\r" +
    "\n" +
    "                                ><i class=\"fa fa-plug\"></i> <span ng-bind=\"_t('btn_inclusion_start')\"></span></button>\r" +
    "\n" +
    "                        <button \r" +
    "\n" +
    "                            class=\"btn btn-danger btn-lg\"\r" +
    "\n" +
    "                            id=\"btn_nm_include_stop\"\r" +
    "\n" +
    "                            ng-show=\"[1, 2, 3, 4].indexOf(controllerState) > -1\"\r" +
    "\n" +
    "                            ng-click=\"runZwaveCmd('controller.AddNodeToNetwork(0)');setSecureInclusion(true);success2 = !success2\"\r" +
    "\n" +
    "                            ng-bind=\"_t('btn_inclusion_stop')\"></button>\r" +
    "\n" +
    "                    </td>\r" +
    "\n" +
    "                    <td>\r" +
    "\n" +
    "                        <i class=\"fa fa-check fa-2x text-success\" ng-show=\"(!clearStepStatus || !inclusionError) && (success2)\"></i> \r" +
    "\n" +
    "                        <i class=\"fa fa-times fa-2x text-danger\" ng-show=\"inclusionError && !clearStepStatus\"></i>\r" +
    "\n" +
    "                    </td>\r" +
    "\n" +
    "                </tr>\r" +
    "\n" +
    "\r" +
    "\n" +
    "                <!-- 3 -->\r" +
    "\n" +
    "                <tr>\r" +
    "\n" +
    "                    <td><span class=\"badge badge-number\">3</span></td>\r" +
    "\n" +
    "                    <td>\r" +
    "\n" +
    "                        <strong ng-hide_=\"controllerState == 1 || includedDeviceId\" ng-bind=\"_t('lb_inclusion_progress')\"></strong>\r" +
    "\n" +
    "                        <div ng-show=\"!inclusionError\">\r" +
    "\n" +
    "                            <div class=\"alert alert-warning\" ng-show=\"controllerState == 1\"><i class=\"fa fa-spinner fa-spin\"></i> <strong ng-bind=\"_t('lb_ready_include')\"></strong> <span ng-bind=\"device.data.inc\"></span></div>\r" +
    "\n" +
    "                            <div class=\"alert alert-warning\" ng-show=\"deviceFound\"><i class=\"fa fa-spinner fa-spin\"></i> <span ng-bind=\"_t('lb_new_device_found')\"></span> <span>(#{{includedDeviceId}})</span></div>\r" +
    "\n" +
    "                        </div>\r" +
    "\n" +
    "                    </td>\r" +
    "\n" +
    "                    <td>\r" +
    "\n" +
    "                        <i class=\"fa fa-check fa-2x text-success\" ng-show=\"(!clearStepStatus || !inclusionError) && (includedDeviceId || lastIncludedDevice)\"></i> \r" +
    "\n" +
    "                        <i class=\"fa fa-times fa-2x text-danger\" ng-show=\"inclusionError && !clearStepStatus\"></i>\r" +
    "\n" +
    "                    </td>\r" +
    "\n" +
    "                </tr>\r" +
    "\n" +
    "\r" +
    "\n" +
    "                <!-- 4 -->\r" +
    "\n" +
    "                <tr>\r" +
    "\n" +
    "                    <td><span class=\"badge badge-number\">4</span></td>\r" +
    "\n" +
    "                    <td>\r" +
    "\n" +
    "                        <strong ng-hide_=\"lastIncludedDevice\" ng-bind=\"_t('automated_konfiguration')\"></strong>\r" +
    "\n" +
    "                        <div ng-hide=\"[1, 2, 3, 4].indexOf(controllerState) > -1\">\r" +
    "\n" +
    "                        <div ng-show=\"!inclusionError\" ng-hide=\"(interviewCfg.stop > interviewCfg.time) && (interviewCfg.commandClassesCnt > interviewCfg.isDone.length)\">\r" +
    "\n" +
    "                            <div class=\"alert alert-warning\" ng-show=\"checkInterview\"><i class=\"fa fa-spinner fa-spin\"></i> <strong ng-bind=\"_t('configuring_device')\"></strong> <span>(#{{includedDeviceId}})</span></div>\r" +
    "\n" +
    "                            <div class=\"alert alert-success\" ng-show=\"lastIncludedDevice\"><i class=\"fa fa-check\"></i> <strong ng-bind=\"_t('lb_new_device_configured')\"></strong>:  <span ng-bind=\"lastIncludedDevice\"></span></div>\r" +
    "\n" +
    "                            \r" +
    "\n" +
    "                        </div>\r" +
    "\n" +
    "                        <div ng-if=\"inclusionError\">\r" +
    "\n" +
    "                            <div class=\"alert alert-danger\" ng-show=\"!hasBattery\"><i class=\"fa fa-minus-circle\"></i> <span ng-bind=\"_t('lb_include_device_mains_error')\"></span></div>\r" +
    "\n" +
    "                            <div class=\"alert alert-danger\" ng-show=\"hasBattery\"><i class=\"fa fa-minus-circle\"></i> <span ng-bind=\"_t('lb_include_device_battery_error')\"></span> <span ng-bind=\"device.data.wake\"></span></div>\r" +
    "\n" +
    "                        </div>\r" +
    "\n" +
    "                        <div class=\"alert alert-warning\" ng-if=\"((interviewCfg.stop > interviewCfg.time) && (interviewCfg.commandClassesCnt > interviewCfg.isDone.length))\">\r" +
    "\n" +
    "                            <i class=\"fa fa-info-circle\"></i> <strong ng-bind=\"_t('inclusion_interview_not_complete')\"></strong> \r" +
    "\n" +
    "                           <button \r" +
    "\n" +
    "                            class=\"btn btn-success\"\r" +
    "\n" +
    "                            id=\"btn_nm_include_stop\"\r" +
    "\n" +
    "                            ng-click=\"retryInclusion('controller.RemoveNodeFromNetwork(1)',true)\">\r" +
    "\n" +
    "                               <i class=\"fa fa-refresh\"></i> <span  ng-bind=\"_t('retry')\"></span></button>\r" +
    "\n" +
    "                              <bb-help file=\"interview\" lang=\"{{lang}}\"></bb-help>\r" +
    "\n" +
    "                        </div>\r" +
    "\n" +
    "                      </div>\r" +
    "\n" +
    "                    </td>\r" +
    "\n" +
    "                    <td>\r" +
    "\n" +
    "                        <i class=\"fa fa-check fa-2x text-success\" ng-show=\"(!clearStepStatus || !inclusionError) && lastIncludedDevice\"></i> \r" +
    "\n" +
    "                        <i class=\"fa fa-times fa-2x text-danger\" ng-show=\"inclusionError && !clearStepStatus\"></i>\r" +
    "\n" +
    "                    </td>\r" +
    "\n" +
    "                </tr>\r" +
    "\n" +
    "                 <!-- 5 -->\r" +
    "\n" +
    "                <tr>\r" +
    "\n" +
    "                    <td><span class=\"badge badge-number\">5</span></td>\r" +
    "\n" +
    "                    <td colspan=\"2\">\r" +
    "\n" +
    "                        <strong ng-bind=\"_t('manual_konfiguration')\"></strong>\r" +
    "\n" +
    "                        <div class=\"alert alert-warning\" ng-show=\"nodeId > 0\"><i class=\"fa fa-spinner fa-spin\"></i> <strong ng-bind=\"_t('manual_config_prepare')\"></strong></div>\r" +
    "\n" +
    "                     </td>\r" +
    "\n" +
    "                </tr>\r" +
    "\n" +
    "            </tbody>\r" +
    "\n" +
    "        </table>\r" +
    "\n" +
    "    </div>\r" +
    "\n" +
    "       <div class=\"fieldset submit-entry\">\r" +
    "\n" +
    "           <button type=\"button\" class=\"btn btn-default\" bb-go-back><i class=\"fa fa-times  text-danger\"></i> <span ng-bind=\"_t('lb_cancel')\"></span></button>\r" +
    "\n" +
    "         <!-- <a href=\"#zwave/devices\" class=\"btn btn-info\">{{_t('continue')}} <i class=\"fa fa-chevron-right\"></i></a> --> \r" +
    "\n" +
    "        </div>\r" +
    "\n" +
    "     <div class=\"device-logo\" ng-include=\"'app/views/zwave/zwave_nav.html'\"></div>\r" +
    "\n" +
    "</div> <!-- /ng-controller --> \r" +
    "\n" +
    "\r" +
    "\n"
  );


  $templateCache.put('app/views/zwave/zwave_manage_id.html',
    "<!-- Zwave manage config view -->\r" +
    "\n" +
    "<div ng-controller=\"ZwaveManageIdController\" class=\"mobile-padding\">\r" +
    "\n" +
    "    <bb-loader></bb-loader> \r" +
    "\n" +
    "    <h1>(#{{zWaveDevice.id}}) {{formInput.deviceName}}</h1>\r" +
    "\n" +
    "    <!-- Zwave config form -->\r" +
    "\n" +
    " <form name=\"form_network_config\" id=\"form_profile\" class=\"form form-page\" ng-submit=\"updateAllDevices(formInput)\" novalidate>\r" +
    "\n" +
    "        <fieldset>\r" +
    "\n" +
    "                \r" +
    "\n" +
    "                        <label ng-bind=\"_t('rename_device')\"></label>\r" +
    "\n" +
    "                        <input name=\"device_name\" id=\"device_name\" type=\"text\" class=\"form-control\" value=\"{{formInput.deviceName}}\" ng-model=\"formInput.deviceName\" />\r" +
    "\n" +
    "            </fieldset>\r" +
    "\n" +
    "        <fieldset>\r" +
    "\n" +
    "            <!-- Rooms -->\r" +
    "\n" +
    "            <div class=\"form-group form-inline\">\r" +
    "\n" +
    "                <label ng-bind=\"_t('devices_to_room')\"></label><br />\r" +
    "\n" +
    "                <select class=\"form-control\" name=\"to_room\" id=\"to_room\" ng-model=\"formInput.room\">\r" +
    "\n" +
    "                   <option ng-repeat=\"v in rooms\" ng-selected_=\"input.location == v.id\" value=\"{{v.id}}\" ng-bind=\"(v.id === 0 ? _t(v.title) : v.title)\"></option>\r" +
    "\n" +
    "                </select>\r" +
    "\n" +
    "            </div>\r" +
    "\n" +
    "        </fieldset>\r" +
    "\n" +
    "        <fieldset>\r" +
    "\n" +
    "        <div class=\"form-group form-inline zwave-hidden-{{formInput.elements[e.id].permanently_hidden}}\" ng-repeat=\"e in devices | orderBy:'title':false track by e.id\" ng-init=\"dev[e.id] = e\">\r" +
    "\n" +
    "            \r" +
    "\n" +
    "            <h3>\r" +
    "\n" +
    "                <img id=\"widget_img_{{v.id}}\" class=\"report-img\" ng-src=\"{{e.metrics.icon|getElementIcon:e:e.level}}\" alt=\"img\" />\r" +
    "\n" +
    "                 <span ng-bind=\"formInput.elements[e.id].metrics.title\"></span>\r" +
    "\n" +
    "            </h3>\r" +
    "\n" +
    "                <div>\r" +
    "\n" +
    "                        <input type=\"text\" name=\"title_{{$index}}\" id=\"title_{{$index}}\" class=\"form-control form-control-md\" ng-model=\"formInput.elements[e.id].metrics.title\" value=\"{{formInput.elements[e.id].metrics.title}}\" />\r" +
    "\n" +
    "                         <!-- <button class=\"btn btn-primary\" ng-click=\"updateDevice(dev[e.id])\" ng-bind=\"_t('rename_element')\"></button> --> \r" +
    "\n" +
    "                         <input type=\"checkbox\" name=\"permanently_hidden_{{$index}}\" id=\"permanently_hidden_{{$index}}\" ng-model=\"formInput.elements[e.id].permanently_hidden\" ng-checked=\"formInput.elements[e.id].permanently_hidden\" />\r" +
    "\n" +
    "                        <label ng-bind=\"_t('hide_element')\"></label>\r" +
    "\n" +
    "                        <!-- <a class=\"btn\" href=\"\" \r" +
    "\n" +
    "                             ng-click=\"updateDevice({id: e.id,permanently_hidden: e.permanently_hidden ? false : true})\" \r" +
    "\n" +
    "                             ng-bind=\"e.permanently_hidden ? _t('show_element') : _t('hide_element')\"\r" +
    "\n" +
    "                             ng-class=\"e.permanently_hidden ? 'btn-danger' : 'btn-primary'\"> </a> --> \r" +
    "\n" +
    "                 </div>\r" +
    "\n" +
    "            </div>\r" +
    "\n" +
    "            \r" +
    "\n" +
    "             <div class=\"form-group form-inline\">\r" +
    "\n" +
    "             <a class=\"btn btn-primary\" href=\"#deviceconfig/{{zWaveDevice.id}}\" ng-if=\"zWaveDevice.cfg.length > 0\">\r" +
    "\n" +
    "                           <i class=\"fa fa-wrench\"></i> <span class=\"btn-name\" ng-bind=\"_t('hardware_konfiguration')\"></span>\r" +
    "\n" +
    "                       </a>\r" +
    "\n" +
    "            </div>\r" +
    "\n" +
    "        </fieldset>\r" +
    "\n" +
    "        <fieldset class=\"submit-entry\">\r" +
    "\n" +
    "            <button type=\"button\" class=\"btn btn-default\" ng-if=\"!nohistory\" bb-go-back><i class=\"fa fa-times  text-danger\"></i> <span ng-bind=\"_t('lb_cancel')\"></span></button>\r" +
    "\n" +
    "            <button type=\"submit\" class=\"btn btn-submit\"><i class=\"fa fa-check\"></i> <span ng-bind=\"_t('lb_save')\"></span></button>\r" +
    "\n" +
    "            \r" +
    "\n" +
    "        </fieldset>\r" +
    "\n" +
    "    </form>\r" +
    "\n" +
    "    <div class=\"device-logo\" ng-include=\"'app/views/zwave/zwave_nav.html'\"></div>\r" +
    "\n" +
    "</div> <!-- /ng-controller --> "
  );


  $templateCache.put('app/views/zwave/zwave_nav.html',
    "<!-- Nav zwave -->\r" +
    "\n" +
    "<a href=\"#devices\"><img class=\"apps-image\" ng-src=\"app/img/logo-zwave.png\" alt=\"Logo\" /></a>"
  );


  $templateCache.put('app/views/zwave/zwave_network.html',
    "<!-- Zwave network view -->\r" +
    "\n" +
    "<div ng-controller=\"ZwaveManageController\">\r" +
    "\n" +
    "    <!-- Zwave navigation -->\r" +
    "\n" +
    "    <div ng-include=\"'app/views/zwave/navi.html'\"></div>\r" +
    "\n" +
    "    <div class=\"tab-pane\" id=\"module_health\">\r" +
    "\n" +
    "        <table class=\"table table-condensed table-report\">\r" +
    "\n" +
    "            <tbody>\r" +
    "\n" +
    "                <tr ng-repeat=\"v in zWaveDevices| orderBy:'id':false\" id=\"row_health_{{v.id}}\" ng-if=\"v.messages\">\r" +
    "\n" +
    "                    <td class=\"td-img\">\r" +
    "\n" +
    "                        <img class=\"report-img\" ng-src=\"{{v.icon|getElementIcon:e}}\" alt=\"{{ v.title}}\" />\r" +
    "\n" +
    "                    </td>\r" +
    "\n" +
    "                    <td class=\"network-zwave-device\">\r" +
    "\n" +
    "                        <span class=\"network-node-name\">(#{{v.id}}) {{v.title}}</span>\r" +
    "\n" +
    "                        <div  class=\"network-zwave-device\" ng-repeat=\"e in v.elements| orderBy:'title':false\" ng-bind=\"e.title\"></div>\r" +
    "\n" +
    "                    </td>\r" +
    "\n" +
    "                    <td>\r" +
    "\n" +
    "                        <div class=\"text-danger\" ng-repeat=\"m in v.messages|unique:true\">\r" +
    "\n" +
    "                            <span ng-if=\"!isMobile\">\r" +
    "\n" +
    "                                <a class=\"text-danger\" href=\"\" ng-if=\"m.type == 'failed' || m.type == 'config'\" ng-click=\"toExpert('/expert/#help/' + v.id, _t('redirect_to_expert'))\" >\r" +
    "\n" +
    "                                    <span  ng-bind=\"m.error\"></span> <i class=\"fa fa-external-link\"></i>\r" +
    "\n" +
    "                                </a>\r" +
    "\n" +
    "                            </span>\r" +
    "\n" +
    "                            <span ng-if=\"isMobile\">\r" +
    "\n" +
    "                                <span  class=\"text-danger\" ng-if=\"m.type == 'failed' || m.type == 'config'\" ng-bind=\"m.error\"></span>\r" +
    "\n" +
    "                            </span>\r" +
    "\n" +
    "                            <span ng-if=\"m.type == 'battery'\" ng-bind=\"m.error\"></span>\r" +
    "\n" +
    "                        </div>\r" +
    "\n" +
    "                    </td>\r" +
    "\n" +
    "                </tr>\r" +
    "\n" +
    "            </tbody>\r" +
    "\n" +
    "        </table>\r" +
    "\n" +
    " \r" +
    "\n" +
    "    </div>\r" +
    "\n" +
    "    <div class=\"device-logo\" ng-include=\"'app/views/zwave/zwave_nav.html'\"></div>\r" +
    "\n" +
    "</div> <!-- /ng-controller --> "
  );

}]);
