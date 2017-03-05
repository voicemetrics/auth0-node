var request = require("request");

var URL_AUTH0 = "YOUR AUTH0 URL";
var BEARER_AUTH0 =  'Bearer YOUR AUTH0 BEARER TOKEN';

var USERID = "YOUR VM USERID";
var BEARER_VM = "YOUR VM BEARER TOKEN";

var options2 = { method: 'GET',
    url: URL_AUTH0,
    headers: { authorization: BEARER_AUTH0 }};

request(options2, function (error, response, body) {
    if (error) throw new Error(error);

    console.log(body);
    var bodyParsed = JSON.parse(body);

    var postData = {
        "userid": USERID,
        "data_name": "Auth0",
        "data": bodyParsed[0]
    };
    console.log(postData);
    var options3 = {
        method: 'POST',
        url: 'http://app.vmapi.net/company/data',
        json: postData,
        headers: {authorization: BEARER_VM}};

    request(options3, function (error, response, body) {
        if (error) throw new Error(error);
        console.log(body);
    })
});
