/// <reference path="angular.js" />

var app = angular
    .module("myModule", [])
    .controller("myController", function ($scope) {

        var employees = [
            { name: "sathyamorrthy", gender: 1, salary: 55000 },
            { name: "sowmya", gender: 2, salary: 68000 },
            { name: "vinoth", gender: 1, salary: 57000 },
            { name: "akila", gender: 2, salary: 53000 },
            { name: "Todd", gender: 3, salary: 60000 }
        ];

        $scope.employees = employees;
        $scope.employeeView = "EmployeeTable.html";
    });
