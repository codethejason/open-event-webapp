var sessionsModule = angular.module('oe.sessions', ['ui.router', 
        'ngStorage',
        'ngMaterial']);

/* ----------------------------- Sessions List ---------------------------- */
var singleSession = {};
sessionsModule.config(['$stateProvider', function($stateProvider) {
    $stateProvider.state('sessions', {
        url: '/sessions',
        templateUrl: 'app/components/sessions/sessions.html',
        controller: 'SessionsController'
    })
}]);

sessionsModule.controller('SessionsController',
    ['$mdDialog', '$sessionStorage', '$rootScope',
        function($mdDialog, $sessionStorage, $rootScope) {
            // var sc = this;
            // if ($sessionStorage.sessions === null ||
            //     typeof($sessionStorage.sessions) == 'undefined')
            // {
            //     $sessionStorage.sessions = [];
            // }

            // sc.showLoaders = false;
            // sc.Sessions = new Array(openevent.totalDays);
            // sc.Days = $sessionStorage.days;

            // if ($sessionStorage.sessions.length === 0) {
            //     sc.showLoaders = true;
            //     ApiJsonFactory.getJson('sessions')
            //         .then(function (response) {
            //             $sessionStorage.sessions = response.data.sessions;
            //             for (var i = 0; i < openevent.totalDays; i+=1) {
            //                 sc.Sessions[i] = [];
            //             }
            //             $sessionStorage.sessionset = sc.Sessions;

            //             for (var j = 0; j < response.data.sessions.length; j+= 1) {
            //                 var dayDiff = DateUtils.DateDiff.inDays(
            //                     $sessionStorage.event.begin,
            //                     response.data.sessions[j].begin);
            //                 //Filter out any mistakenly entered sessions outside date range
            //                 if (dayDiff>openevent.totalDays || dayDiff < 0) {
            //                     console.log('Session date = ' + dayDiff
            //                         +' outside event date range = '
            //                         + openevent.totalDays);
            //                     continue;
            //                 }
            //                 sc.Sessions[dayDiff].push(response.data.sessions[j]);
            //                 $sessionStorage.days[dayDiff].sessions = sc.Sessions[dayDiff];
            //                 $sessionStorage.days[dayDiff].sessions.sort(SortUtils.sortBy(
            //                 	'begin',
            //                 	false,
            //                 	function(a){return a;}
            //                 	));
            //             }
            //             sc.showLoaders = false;
            //             sc.Days = $sessionStorage.days;

            //         }, function (error) {
            //             console.error(error);
            //         });
            // }

            // sc.duration = function(session) {
            //     var start = DateUtils.getHourMin(session.begin);
            //     var end = DateUtils.getHourMin(session.end);

            //     return {start: start, end: end};
            // };

            // sc.showSession = function(session, event) {
            //     $mdDialog.session = {
            //         singleSession: session
            //     };
            //     $mdDialog.show({
            //         controller: 'SessionDialogController',
            //         templateUrl: 'app/components/sessions/sessiondialog.html',
            //         parent: angular.element(document.body),
            //         targetEvent: event,

            //     });
            // };

        }]);