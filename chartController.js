angular.module("myApp", ["chart.js",'uiGmapgoogle-maps'])
.controller("ChartCtrl", function($scope) {
    $scope.map = {
        center: {
                latitude: 56.162939,
                longitude: 10.203921
        },
        zoom: 8
};

    $scope.datasetOverride = [{
        yAxisID: 'y-axis-1'
    }, {
        yAxisID: 'y-axis-2'
    }];
    $scope.options = {
        scales: {
            yAxes: [{
                id: 'y-axis-1',
                type: 'linear',
                display: true,
                position: 'left'
            }, {
                id: 'y-axis-2',
                type: 'linear',
                display: true,
                position: 'right'
            }]
        }
    };
    $scope.labels = ['week1', 'week2', 'week3', 'week4', 'week5', 'week6'];
    $scope.series = ['average journey hours from cityA to city B'];

    $scope.data = [
        [65, 59, 80, 81, 56, 55, 40]
    ];
});
