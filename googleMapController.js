 angular.module("myApp", ['uiGmapgoogle-maps'])
                .controller("Example", function($scope, $interval) {
                        $scope.map = {
                                center: {
                                        latitude: 56.162939,
                                        longitude: 10.203921
                                },
                                zoom: 8
                        };
                });
        
