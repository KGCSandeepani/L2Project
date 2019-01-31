'use strict';

const uuid = require('uuid');
const dynamodb = require('./dynamodb');

module.exports.create = (event, context, callback) => {
  const timestamp = new Date().getTime();
  const data = JSON.parse(event.body);
  if (typeof data.text !== 'string') {
    console.error('Validation Failed');
    callback(null, {
      statusCode: 400,
      headers: { 'Content-Type': 'text/plain' },
      body: 'Couldn\'t create the todo item.',
    });
    return;
  }

  const params = {
    TableName: process.env.DYNAMODB_TABLE,
    Item: {
      id: uuid.v1(),
      name: data.text,
      password: data.psw,
      batch: data.batch,
      availability:true,
      username:data.text1,  
      email: null,
      phoneNo: null,
      l1s1: null,
      l1s2: null,
      l2s1: null,
      l2s2: null,
      cgpa: null,
      //organization1: null,
      //organization2: null,
      //organization3: null,
      //organization4: null,
      //organization5: null,
      interest1: null,
      interest2: null,
      interest3: null,
      uploadPdfUrl:null,
      //checked: false,
      //createdAt: timestamp,
      //updatedAt: timestamp,
    },
  };

  // write the todo to the database
  dynamodb.put(params, (error) => {
    // handle potential errors
    if (error) {
      console.error(error);
      callback(null, {
        statusCode: error.statusCode || 501,
        headers: { 'Content-Type': 'text/plain' },
        body: 'Couldn\'t create the todo item.',
      });
      return;
    }

    // create a response
    const response = {
      statusCode: 200,
      body: JSON.stringify(params.Item),
    };
    callback(null, response);
  });
};
