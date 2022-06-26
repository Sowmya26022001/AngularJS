/// <reference path="angular.min.js" />

var app = angular
    .module("myModule", [])
    .controller("myController", function ($scope) {

        var employees = [
            { name: "sathyamoorthy", gender: "Male", city: "coimbatore", salary: 55000 },
            { name: "sowmya", gender: "Female", city: "Chennai", salary: 68000 },
            { name: "vinoth", gender: "Male", city: "salem", salary: 57000 },
            { name: "akila", gender: "Female", city: "coimbatore", salary: 53000 },
            { name: "srinivasan", gender: "Male", city: "Chennai", salary: 60000 }
        ];

        $scope.employees = employees;
    });