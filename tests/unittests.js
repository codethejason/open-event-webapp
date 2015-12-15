describe('Sessions', function(){ //describe your object type
    
    //declare controller
    var $controller,
        scope,
        $rootScope,
        $mdDialog;
    

    beforeEach(module('oe.sessions')); //load module

    beforeEach(inject(function($injector){ //inject the controller
        $controller = $injector.get('$controller'); 
        $mdDialog = $injector.get('mdDialog');
        $rootScope = $injector.get('$rootScope');
        scope = $rootScope.new();
        var controller = $controller('SessionsController', 
                                     {$scope: scope,
                                      $mdDialog: $mdDialog
                                     });
    }));  
    
    describe('Chronological Sort',function(){ //describe your app name
        
        it('should order the sessions chronologically', inject(function($mdDialog){  //write tests
            
            var sessions = scope.Sessions;
            expect(sessions[0]).toEqual('Die Abschaffung der Wahrheit');
            expect(sessions[1]).toEqual('I am as old as the Web and this is what I want.');
            
            //after we get the other issue fixed I will create a for loop that checks for every index corresponding to every index on the app
        })); 
    
    });
    
});