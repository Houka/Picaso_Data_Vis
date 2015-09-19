const AWS_REGION = 'us-east-1';

var aws = require('aws-sdk');
aws.config.update({
    region: AWS_REGION
});
var db = new aws.DynamoDB.DocumentClient();

var params = {
    TableName: '2012',
    KeyConditionExpression: '#t = :ticker and #d between :date1 and :date2',
    ExpressionAttributeNames: {
	'#t': 'Ticker',
	'#d': 'Date'
    },
    ExpressionAttributeValues: {
	':ticker': 'COWSTOTT Index',
	':date1': '2012-01-01',
	':date2': '2012-12-31'
    }
};

// db.query(params, function(err, data) {
//     if (err)
// 	console.log(err, err.stack);
//     else
// 	console.log(data);	
// }

    document.getElementById("test").innerHTML = "akjsdh'fakljhfjkahdfkhakjf";

);