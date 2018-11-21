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
      id: event.pathParameters.id,
    },
    ExpressionAttributeNames: {
      '#todo_username': 'username',
      '#todo_email': 'email',
      '#todo_phoneNo': 'phoneNo',
      '#todo_l1s1': 'l1s1',
      '#todo_l1s2': 'l1s2',
      '#todo_l2s1': 'l2s1',
      '#todo_l2s2': 'l2s2',
      '#todo_cgpa': 'cgpa',
      '#todo_organization1': 'organization1',
      '#todo_organization2': 'organization2',
      '#todo_organization3': 'organization3',
      '#todo_organization4': 'organization4',
      '#todo_organization5': 'organization5',
      '#todo_interest1': 'interest1',
      '#todo_interest2': 'interest2',
      '#todo_interest3': 'interest3',
    },
    ExpressionAttributeValues: {
      ':username': data.text,
      ':email': data.text1,
      ':phoneNo': data.text2,
      ':l1s1': data.text3,
      ':l1s2': data.text4,
      ':l2s1': data.text5,
      ':l2s2': data.text6,
      ':cgpa': data.text7,
      ':organization1': data.text8,
      ':organization2': data.text9,
      ':organization3': data.text10,
      ':organization4': data.text11,
      ':organization5': data.text12,
      ':interest1': data.text13,
      ':interest2': data.text14,
      ':interest3': data.text15

    },
    UpdateExpression: 'SET #todo_text = :text, checked = :checked, updatedAt = :updatedAt',
    ReturnValues: 'ALL_NEW',
  };

  // update the todo in the database
  dynamodb.update(params, (error, result) => {
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