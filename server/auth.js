const express = require('express');
const app = express();
const axios = require('axios');
const qs = require('querystring');

const google_client_id = '359306750432-51mucb2s70jm6h6t7tv99blr11luv5pu.apps.googleusercontent.com';
const google_secret_id = 'Qnf1HkSBELy3I4pz6F0Y51tT';
const firebaseApiKey = 'AIzaSyCWJ50Er9Pq5MGmYuFbPVb2WlgXXw8xX2s';

const process_url = 'http://localhost:3013';

app.get('/', (req, res) => {
  const referer = req.headers.referer;
  if (!referer) {
    res.redirect('/');
    res.end();
  }
  const google_oauth_url = 'https://accounts.google.com/o/oauth2/v2/auth?' +
  'scope=email%20profile' +
  '&redirect_uri=' + process_url + '/auth/google' +
  '&state=' + referer +
  '&response_type=code' +
  '&client_id=' + google_client_id;
  
  res.redirect(google_oauth_url);
});

app.get('/google', async (req, res) => {
  let referer = req.query.state;
  if (referer.indexOf('?') > -1) {
    referer = referer + '&'
  } else {
    referer = referer + '?'
  }

  // 取得 google 的 access_token
  const api_url = 'https://oauth2.googleapis.com/token';
  const config = {
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded'
    }
  };

  const token_option = {
    code: req.query.code,
    client_id: google_client_id,
    client_secret: google_secret_id,
    redirect_uri: process_url + '/auth/google',
    grant_type: 'authorization_code',
  };

  const result = await axios.post(api_url, qs.stringify(token_option), config);
  // const id_token = result.data.id_token;
  const access_token = result.data.access_token;
  
  console.log(access_token, 'access_tokenaccess_tokenaccess_token')

  // 使用google 的 access_token 換取 firebase 的 token
  const google_firebase = 'https://identitytoolkit.googleapis.com/v1/accounts:signInWithIdp?key=' + firebaseApiKey;

  const firebase_result = await axios.post(google_firebase, {
    requestUri: process_url,
    postBody: 'access_token=' + access_token + '&providerId=google.com',
    returnSecureToken: true,
    returnIdpCredential: true,
  });

  // 要給前端的資訊
  const firebase_id_token = firebase_result.data.idToken;
  const refresh_token = firebase_result.data.refreshToken;

  res.redirect(referer + 'id_token=' + firebase_id_token + '&refresh_token=' + refresh_token);
})

module.exports = app;
