'use strict';

const dynamodb = require('./dynamodb');

module.exports.get = (event, context, callback) => {
  const params = {
    TableName: "supervisor",
    Key: {
      name: event.pathParameters.name,
    },
  };

  // fetch todo from the database
  dynamodb.get(params, (error, result) => {
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
