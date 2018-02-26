"use strict";

const angular = require("angular");

angular.module("io").factory("RestFactory", function($q, $http, RESTDB) {
    let getBlog = () => {
        return $q((resolve, reject) => {
            $http.get(`${RESTDB.url}/blog?apikey=${RESTDB.key}`)
                .then(response => resolve(response))
                .catch(err => reject(err));
        });
    };

    return { getBlog };
});