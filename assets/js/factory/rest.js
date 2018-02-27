"use strict";

const angular = require("angular");
const _ = require("lodash");

angular.module("io").factory("RestFactory", function($q, $http, RESTDB) {
    let getBlog = () => {
        return $q((resolve, reject) => {
            Promise.all([
                getArt(),
                getCode()
            ]).then(results => {
                resolve(_.sortBy(_.flatten(results), i => -i.date));
            });
        });
    };

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

    return { getBlog, getArt, getCode, getArtPost, getCodePost };
});