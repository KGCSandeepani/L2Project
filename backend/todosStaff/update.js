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
    TableName: "supervisor",
    Key: {
      name: event.pathParameters.name,
    },
    ExpressionAttributeNames: {
      //'#todo_name':'name',
      // '#todo_name': 'name',
      '#todo_username': 'username',
      '#todo_email' : 'email',
      '#todo_contactNo' : 'contactNo',
    },
    ExpressionAttributeValues: {
      // ':name':data.name,
      ':username': data.username,
      ':email': data.email,
      ':contactNo': data.contactNo
      
    },
    UpdateExpression: 'SET #todo_username = :username,#todo_email = :email, #todo_contactNo = :contactNo',
    //#todo_organization1 = :organization1, #todo_organization2 = :organization2, #todo_organization3 = :organization3, #todo_organization4 = :organization4, #todo_organization5 = :organization5,
    ReturnValues: 'ALL_NEW',
  };

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