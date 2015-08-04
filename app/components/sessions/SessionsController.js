/**
 * Created by championswimmer on 29/5/15.
 */


var sessionsModule = angular.module('oe.sessions', ['ui.router']);

/* ----------------------------- Sessions List ---------------------------- */
var singleSession = {};
var showSession = function(session, event, $mdDialog) {
    singleSession = session;
    $mdDialog.show({
        controller: 'SessionDialogController',
        templateUrl: 'app/components/sessions/sessiondialog.html',
        parent: angular.element(document.body),
        targetEvent: event,

    });
};
sessionsModule.config(['$stateProvider', function($stateProvider) {
    $stateProvider.state('sessions', {
        url: '/sessions',
        templateUrl: 'app/components/sessions/sessions.html',
        controller: 'SessionsController'
    }).state('sessions.session', {
        url: '/sessions/:sessionId',
        onEnter: ['sessionId', '$sessionStorage', 'ApiJsonFactory', '$event', '$mdDialog',
            function (sessionId, $sessionStorage, ApiJsonFactory, $event, $mdDialog) {
                console.log("Opening sessions/sessionId");
            if ($sessionStorage.sessions === null ||
                typeof($sessionStorage.sessions) == 'undefined')
            {
                $sessionStorage.sessions = [];
            }
            var Sessions = $sessionStorage.sessions;

            if (Sessions.length === 0) {
                ApiJsonFactory.getJson('sessions')
                    .then(function (response) {
                        Sessions = response.data.sessions;
                        $sessionStorage.sessions = Sessions;
                    }, function (error) {
                        console.error(error);
                    });
            }
            var i;
            for (i = 0; i < Sessions.length; i++) {
                if (sessionId === i) {
                    showSession(Sessions[i], $event, $mdDialog)
                }
            }
        }]
    });

}]);

sessionsModule.controller('SessionsController',
    ['$mdDialog', '$sessionStorage', '$rootScope', 'ApiJsonFactory',
        function($mdDialog, $sessionStorage, $rootScope, ApiJsonFactory) {
        var sc = this;
        if ($sessionStorage.sessions === null ||
            typeof($sessionStorage.sessions) == 'undefined')
        {
            $sessionStorage.sessions = [];
        }
        sc.Sessions = $sessionStorage.sessions;

        if (sc.Sessions.length === 0) {
            ApiJsonFactory.getJson('sessions')
                .then(function (response) {
                    sc.Sessions = response.data.sessions;
                    $sessionStorage.sessions = sc.Sessions;
                }, function (error) {
                    console.error(error);
                });
        }
        sc.duration = function(session) {
            var start = DateUtils.getHourMin(session.start_time);
            var end = DateUtils.getHourMin(session.end_time);

            return start + ' - ' + end;
        };

        sc.showSession = function(session, event) {
            showSession(session, event, $mdDialog);
        };

    }]);

/* -------------------------- Session Dialog ----------------------- */

sessionsModule.controller('SessionDialogController', ['$mdDialog',
    function($mdDialog) {
    var sdc = this;
    sdc.session = singleSession;

    sdc.close = function () {
        $mdDialog.hide();
    };
    sdc.duration = function(session) {
        var start = DateUtils.getHourMin(session.start_time);
        var end = DateUtils.getHourMin(session.end_time);

        return start + ' - ' + end;
    };
}]);