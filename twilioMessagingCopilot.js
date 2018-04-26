// Download the Node helper library from twilio.com/docs/node/install
// These consts are your accountSid and authToken from https://www.twilio.com/console
const accountSid = '################################';
const authToken = '################################';
const client = require('twilio')(accountSid, authToken);

client.messages
  .create({
    messagingServiceSid: '################################',
    to: '+############',
    body: 'Phantom Menace was clearly the best of the prequel trilogy.',
  })
  .then(message => console.log(message));