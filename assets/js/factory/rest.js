'use strict';

const _ = require('lodash');

angular.module('io').factory('RestFactory', function($q, $http, RESTDB) {
  let getArt = () => {
    return $q((resolve, reject) => {
      $http
        .get(`${RESTDB.url}/artsy?apikey=${RESTDB.key}&sort=date&dir=-1`)
        .then(({ data }) => resolve(data))
        .catch(err => reject(err));
    });
  };
  let getCode = () => {
    return $q((resolve, reject) => {
      $http
        .get(`${RESTDB.url}/code?apikey=${RESTDB.key}&sort=date&dir=-1`)
        .then(({ data }) => resolve(data))
        .catch(err => reject(err));
    });
  };

  let getArtPost = id => {
    return $q((resolve, reject) => {
      $http
        .get(`${RESTDB.url}/artsy/${id}?apikey=${RESTDB.key}`)
        .then(({ data }) => resolve(data))
        .catch(err => reject(err));
    });
  };

  let getNextArtPost = date => {
    return $q((resolve, reject) => {
      $http
        .get(
          `${RESTDB.url}/artsy?apikey=${
            RESTDB.key
          }&q={"date":{"$lt": ${date}}}&sort=date&dir=-1&max=1`
        )
        .then(({ data }) => resolve(data))
        .catch(err => reject(err));
    });
  };

  let getPrevArtPost = date => {
    return $q((resolve, reject) => {
      $http
        .get(
          `${RESTDB.url}/artsy?apikey=${
            RESTDB.key
          }&q={"date":{"$gt": ${date}}}&sort=date&max=1`
        )
        .then(({ data }) => resolve(data))
        .catch(err => reject(err));
    });
  };

  let getCodePost = id => {
    return $q((resolve, reject) => {
      $http
        .get(`${RESTDB.url}/code/${id}?apikey=${RESTDB.key}`)
        .then(({ data }) => resolve(data))
        .catch(err => reject(err));
    });
  };

  return {
    getArt,
    getCode,
    getArtPost,
    getCodePost,
    getNextArtPost,
    getPrevArtPost,
  };
});
