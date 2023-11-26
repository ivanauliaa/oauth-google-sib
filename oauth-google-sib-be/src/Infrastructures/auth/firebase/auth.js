const path = require('path');
const admin = require('firebase-admin');

const serviceAccountPath = path.resolve(process.cwd(), process.env.FIREBASE_SERVICE_ACCOUNT_NAME);
// eslint-disable-next-line import/no-dynamic-require
const serviceAccount = require(serviceAccountPath);

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});

module.exports = admin.auth();
