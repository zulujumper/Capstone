const { Router } = require("express");
const axios = require("axios").default;

const router = Router();

router.get("/locations", (request, res) => {

  const options = {
    method: 'POST',
    url: 'https://api-ce.kroger.com/v1/connect/oauth2/token',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
      Authorization: 'Basic ZWdnYnVkZHktOGZhNWFiZmM3ZThiYjllZjYwMDEzN2FjMzg2NDFkZGYxOTAwOTMwMjM1OTUzODIzODE4OkEtSm9hVndETnhCaE4wdGJsbGhxcndiaWYwU2VhNDZROXowYWg2dkM='
    },
    data: {grant_type: 'client_credentials', scope: 'product.compact'}
  };

  axios.request(options).then(function (response) {
    console.log(response.data);
    res.json(response.data);
  }).catch(function (error) {
    console.error(error);
  });
})

module.exports = router;
