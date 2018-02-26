"use strict";

const angular = require("angular");

angular.module("io").factory("RestFactory", function($q, $http, RESTDB) {
    let getBlog = () => {
        return $q((resolve, reject) => {
            $http.get(`${RESTDB.url}/blog?apikey=${RESTDB.key}&sort=date&dir=-1`)
                .then(({data}) => resolve(data))
                .catch(err => reject(err));
        });
    };

    let getPost = id => {
        return $q((resolve, reject) => {
            $http.get(`${RESTDB.url}/blog/${id}?apikey=${RESTDB.key}`)
                .then(({data}) => resolve(data))
                .catch(err => reject(err));
        });
    };

    return { getBlog, getPost };
});