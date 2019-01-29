'use strict';

const dynamodb = require('./dynamodb');

module.exports.get = (event, context, callback) => {
  console.log(event.pathParameters.organization);
  const params = {
    TableName: "CompanyInternshipDetails",
    KeyConditionExpression: "organization = :a",
    ExpressionAttributeValues: {
        ":a": event.pathParameters.organization,        
    }   
  };

  // fetch todo from the database
  dynamodb.query(params, (error, result) => {
    // handle potential errors
    if (error) {
      console.error(error);
      callback(null, {
        statusCode: error.statusCode || 501,
        headers: { 'Content-Type': 'text/plain' },
        body: 'Couldn\'t fetch the todo item.',
      });
      return;
    }

    // create a response
    const response = {
      statusCode: 200,
      body: JSON.stringify(result.Item),
    };
    callback(null, response);
  });
};
