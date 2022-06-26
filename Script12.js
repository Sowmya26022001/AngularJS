/// <reference path="angular.min.js" />

var app = angular
    .module("myModule", [])
    .controller("myController", function ($scope) {

        var employees = [
            { name: "sathyamoorthy", gender: "Male", salary: 55000, city: "coimbatore" },
            { name: "sowmya", gender: "Female", salary: 68000, city: "Chennai" },
            { name: "vinoth", gender: "Male", salary: 57000, city: "coimbatore" },
            { name: "akila", gender: "Female", salary: 53000, city: "Chennai" },
            { name: "srinivasan", gender: "Male", salary: 60000, city: "coimbatore" },
        ];

        $scope.employees = employees;
    });