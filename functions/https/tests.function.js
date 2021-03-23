const functions = require('firebase-functions');
const admin = require('firebase-admin')
const db = admin.firestore()

exports.sendMotricityTestToDB = functions.https.onCall((data, context) => {
  const refTestLevel = db.collection(`patients/${data.patientId}/${data.testId}Test`).doc(`LEVEL_${data.levelId}`)
  refTestLevel.set({
    captureImg: data.captureImg,
    dateTime: Date.now(),
    succeed: (data.score >= 0.5) ? true : false,
    score: data.score
  }, { merge: true })
    .catch(err => console.log('error', err))
})

exports.sendAttentionTestToDB = functions.https.onCall((data, context) => {
  db.collection('patients')
    .doc(data.patientId)
    .set({
      attentionTest: {
        mistakeNb: data.userErrors,
        score: data.score/100,
        dateTime: Date.now(),
        succeed: (data.score >= 50) ? true : false
      }
    }, { merge: true })
      .catch(err => console.log('error', err))
  })

exports.sendThinkingTestToDB = functions.https.onCall((data, context) => {
  db.collection('patients')
    .doc(data.patientId)
    .set({
      thinkingTest: {
        allResults: data.allResults,
        score: data.score,
        dateTime: Date.now(),
        succeed: (data.score >= 0.5) ? true : false
      }
    }, { merge: true })
      .catch(err => console.log('error', err))
  })
