/**
 * Copyright (c) 2017-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the license found in the
 * LICENSE file in the root directory of this source tree.
 * @flow
 */

 const adsSdk = require('facebook-nodejs-ads-sdk');
const AdAccount = adsSdk.AdAccount;
const CustomAudience = adsSdk.CustomAudience;

let access_token = '<ACCESS_TOKEN>';
let app_secret = '<APP_SECRET>';
let app_id = '<APP_ID>';
let id = '<ID>';
const api = adsSdk.FacebookAdsApi.init(access_token);
const showDebugingInfo = true; // Setting this to true shows more debugging info.
if (showDebugingInfo) {
  api.setDebug(true);
}

const logApiCallResult = (apiCallName, data) => {
  console.log(apiCallName);
  if (showDebugingInfo) {
    console.log('Data:' + JSON.stringify(data));
  }
};

let fields, params;
fields = [
];
params = {
  'name' : 'My Test Engagement Custom Audience',
  'rule' : {'inclusions':{'operator':'or','rules':[{'event_sources':[{'id':'<pageID>','type':'page'}],'retention_seconds':31536000,'filter':{'operator':'and','filters':[{'field':'event','operator':'eq','value':'page_engaged'},{'field':'event','operator':'eq','value':'page_engaged'}]}}]}},
  'prefill' : '1',
};
let customaudiences = (new AdAccount(id)).createCustomAudience(
  fields,
  params
);
logApiCallResult('customaudiences api call complete.', customaudiences);