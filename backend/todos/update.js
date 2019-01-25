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
      //'#todo_name':'name',
      '#todo_username': 'username',
      '#todo_email': 'email',
      '#todo_phoneNo': 'phoneNo',
      '#todo_l1s1': 'l1s1',
      '#todo_l1s2': 'l1s2',
      '#todo_l2s1': 'l2s1',
      '#todo_l2s2': 'l2s2',
      '#todo_cgpa': 'cgpa',
      //'#todo_organization1': 'organization1',
      //'#todo_organization2': 'organization2',
      //'#todo_organization3': 'organization3',
      //'#todo_organization4': 'organization4',
      //'#todo_organization5': 'organization5',
      '#todo_interest1': 'interest1',
      '#todo_interest2': 'interest2',
      '#todo_interest3': 'interest3',
      '#todo_uploadPdfUrl': 'uploadPdfUrl',
    },
    ExpressionAttributeValues: {
      //':name':data.name,
      ':username': data.username,
      ':email': data.email,
      ':phoneNo': data.phoneNo,
      ':l1s1': data.l1s1,
      ':l1s2': data.l1s2,
      ':l2s1': data.l2s1,
      ':l2s2': data.l2s2,
      ':cgpa': data.cgpa,
      //':organization1': data.organization1,
      //':organization2': data.organization2,
      //':organization3': data.organization3,
      //':organization4': data.organization4,
      //':organization5': data.organization5,
      ':interest1': data.interest1,
      ':interest2': data.interest2,
      ':interest3': data.interest3,
      ':uploadPdfUrl': data.uploadPdfUrl
    },
    UpdateExpression: 'SET #todo_username = :username, #todo_email = :email, #todo_phoneNo = :phoneNo, #todo_l1s1 = :l1s1, #todo_l1s2 = :l1s2, #todo_l2s1 = :l2s1, #todo_l2s2 = :l2s2, #todo_cgpa = :cgpa,  #todo_interest1 = :interest1, #todo_interest2 = :interest2, #todo_interest3 = :interest3 ,#todo_uploadPdfUrl=:uploadPdfUrl',
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