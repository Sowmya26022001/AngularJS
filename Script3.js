/// <reference path="angular.min.js" />
var myApp = angular
    .module("myModule", [])
    .controller("myController", function ($scope) {
        var employee = {
            firstName: 'sowmya',
            lastName: 'maheswaran',
            gender: 'female'
        };
        $scope.employee = employee;
    });