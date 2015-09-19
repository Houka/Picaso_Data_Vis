const AWS_REGION = 'us-east-1';

var aws = require('aws-sdk');
aws.config.update({
    region: AWS_REGION
});
var db = new aws.DynamoDB();

db.listTables({}, function(err, data) {
    if (err)
	console.log(err, err.stack);
    else
	console.log(data.TableNames);
});