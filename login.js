const AWS = require("aws-sdk");
const fs = require('fs');
const STS = new AWS.STS();

fs.readFile('.config', function(err, data) {
    var config = JSON.parse(data);
    const params = {
        DurationSeconds: 3600, 
        SerialNumber: config['VirturalVFADeviceARN'], 
        TokenCode: process.argv[2]
    };
    
    STS.getSessionToken(params, (error, data) => {
        if (error) {
            return {};
        } else {
            const script = 
`set AWS_ACCESS_KEY_ID=${data.Credentials.AccessKeyId}
set AWS_SECRET_ACCESS_KEY=${data.Credentials.SecretAccessKey}
set AWS_SESSION_TOKEN=${data.Credentials.SessionToken}`;
    
            fs.writeFile('vars.bat', script, function (err) {
                if (err) throw err;
            });
        }
    });

  });

