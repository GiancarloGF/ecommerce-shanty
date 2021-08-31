// require('dotenv').config()
import mongoose from 'mongoose';

const connection = {};

async function connect() {
  if (connection.isConnected) {
    console.log('already connected');
    return;
  }
  if (mongoose.connections.length > 0) {
    connection.isConnected = mongoose.connections[0].readyState;
    if (connection.isConnected === 1) {
      console.log('use previous connection');
      return;
    }
    await mongoose.disconnect();
  }
  console.log('me conectare')
  await mongoose.connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  }).then((db)=>{
    console.log('new connection');
    connection.isConnected = db.connections[0].readyState;
  })

}

async function disconnect() {
  if (connection.isConnected) {
    if (process.env.NODE_ENV === 'production') {
      await mongoose.disconnect();
      connection.isConnected = false;
    } else {
      console.log('not disconnected');
    }
  }
}

//db returns data in other format that is not a javascript data, so we need to convert that data to string.
function convertDocToObj(doc) {
  doc._id = doc._id.toString();
  doc.createdAt = doc.createdAt.toString();
  doc.updatedAt = doc.updatedAt.toString();
  return doc;
}

const db = { connect, disconnect, convertDocToObj };

export default db;

// 
// const mongoose = require('mongoose')

// const url = process.env.MONGODB_URI

// console.log('connecting to', url)

// mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true })
//   .then(result => {
//     console.log('connected to MongoDB')
//   })
//   .catch((error) => {
//     console.log('error connecting to MongoDB:', error.message)
//   })
  


{/*
(1) connections is an array that contains all previous connections to the database

(2) In production environment, the connection must be disconnected after each resquest to the db.
    But in development environment it's not necessary to disconnect in order to not over charge resources.

*/}