describe('Sessions', function(){ //describe your object type
    beforeEach(module('oe.sessions')); //load module
    
    //declare controller
    var $controller;

    beforeEach(inject(function(_$controller_){ //inject the controller
        $controller = _$controller_;        
    }));  
    
    describe('Chronological Sort',function(){ //describe your app name
        
        it('should order the sessions chronologically', function(){  //write tests
            var $scope = {};
            var controller = $controller('SessionsController', {$scope:$scope});
            var sessions = $scope.Sessions;
            expect(sessions[0]).toEqual('Die Abschaffung der Wahrheit');
            expect(sessions[1]).toEqual('I am as old as the Web and this is what I want.');
            
            //after we get the other issue fixed I will create a for loop that checks for every index corresponding to every index on the app
        }); 
    
    });
    
});