const functions = require('firebase-functions');
const admin = require('firebase-admin')
const db = admin.firestore()

exports.sendTestToDB = functions.https.onCall((data, context) => {
  const refTestLevel = db.collection(`patients/${data.patientId}/${data.testId}Test`).doc(`LEVEL_${data.levelId}`)
  refTestLevel.set({
    idParcours: data.levelId,
    captureImg: data.captureImg,
    dateTime: Date.now(),
    succeed: (data.score >= 0.5) ? true : false,
    score: data.score
  }, { merge: true })
    .catch(err => console.log('error', err))
})
