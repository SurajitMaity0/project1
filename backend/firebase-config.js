var admin = require("firebase-admin");

var serviceAccount = require("./maitytv-642f4-firebase-adminsdk-6c0ep-1005814778.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});

module.exports = admin;
