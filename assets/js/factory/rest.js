"use strict";

const angular = require("angular");

angular.module("io").factory("RestFactory", function($q, $http, RESTDB) {
    let getArt = () => {
        return $q((resolve, reject) => {
            $http.get(`${RESTDB.url}/artsy?apikey=${RESTDB.key}&sort=date&dir=-1`)
                .then(({data}) => resolve(data))
                .catch(err => reject(err));
        });
    };
    let getCode = () => {
        return $q((resolve, reject) => {
            $http.get(`${RESTDB.url}/code?apikey=${RESTDB.key}&sort=date&dir=-1`)
                .then(({data}) => resolve(data))
                .catch(err => reject(err));
        });
    };

    let getArtPost = id => {
        return $q((resolve, reject) => {
            $http.get(`${RESTDB.url}/artsy/${id}?apikey=${RESTDB.key}`)
                .then(({data}) => resolve(data))
                .catch(err => reject(err));
        });
    };

    let getCodePost = id => {
        return $q((resolve, reject) => {
            $http.get(`${RESTDB.url}/code/${id}?apikey=${RESTDB.key}`)
                .then(({data}) => resolve(data))
                .catch(err => reject(err));
        });
    };

    return { getArt, getCode, getArtPost, getCodePost };
});