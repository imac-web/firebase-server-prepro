const admin = require('firebase-admin')
admin.initializeApp()

const stats = require('./https/stats.function.js')
exports.getStats = stats.getStats

const tests = require('./https/tests.function.js')
exports.sendMotricityTestToDB = tests.sendMotricityTestToDB
exports.sendAttentionTestToDB = tests.sendAttentionTestToDB
exports.sendThinkingTestToDB = tests.sendThinkingTestToDB

//const watchers = require('./triggers/watchers.function')
//exports.watchTentatives = watchers.watchTentatives

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//   functions.logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });
