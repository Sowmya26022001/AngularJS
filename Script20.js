
/// <reference path="angular.min.js" />


var app = angular
    .module("myModule", [])
    .controller("myController", function ($scope, $http,$log) {


        $http({
            method: 'GET',
            url: 'EmployeeService.asmx/GetAllEmployees'})
            .then(function (response) {
                $scope.employees = response.data;
                $log.info(response);
            });
    });

