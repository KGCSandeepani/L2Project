'use strict';

const dynamodb = require('./dynamodb');

module.exports.update = (event, context, callback) => {
  const timestamp = new Date().getTime();
  const data = JSON.parse(event.body);

  // validation
  /*if (typeof data.text !== 'string' || typeof data.checked !== 'boolean') {
    console.error('Validation Failed');
    callback(null, {
      statusCode: 400,
      headers: { 'Content-Type': 'text/plain' },
      body: 'Couldn\'t update the todo item.',
    });
    return;
  }
*/

  const params = {
    TableName: process.env.DYNAMODB_TABLE,
    Key: {
      name: event.pathParameters.name,
    },
    ExpressionAttributeNames: {
      '#todo_password': 'password',
    },
    ExpressionAttributeValues: {
      ':password': data.password,
    },
    UpdateExpression: 'SET #todo_password = :password ',
    ReturnValues: 'ALL_NEW',
  };

  // update the todo in the database
  dynamodb.update(params , (error, result) => {
    // handle potential errors
    if (error) {
      console.error(error);
      callback(null, {
        statusCode: error.statusCode || 501,
        headers: { 'Content-Type': 'text/plain' },
        body: 'Couldn\'t update the todo item.',
      });
      return;
    }

    // create a response
    const response = {
      statusCode: 200,
      body: JSON.stringify(result.Attributes),
    };
    callback(null, response);
  });
};