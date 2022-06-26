/// <reference path="angular.min.js" />

var app = angular
    .module("myModule", [])
    .controller("myController", function ($scope) {

        var employees = [
            { firstName: "sowmya", lastName: "mahes", gender: "female", salary: 55000 },
            { firstName: "akila", lastName: "devi", gender: "Female", salary: 68000 },
            { firstName: "maha", lastName: "vishnu", gender: "Male", salary: 57000 },
            { firstName: "sathya", lastName: "moorthy", gender: "male", salary: 53000 },
            { firstName: "priya", lastName: "anand", gender: "female", salary: 60000 }
        ];

        $scope.employees = employees;
    });