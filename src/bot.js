// @flow

import config from '../config.js'
import { Wit } from 'node-wit'
import { replyMessage } from './facebook.js'

// IMPORTintents

import getGreetings from '../modules/greetings.js'
import getGoodbyes from '../modules/goodbyes.js'
import getCapitals from '../modules/capitale.js'
import getThanks from '../modules/thanks.js'
import getHelp from '../modules/help.js'

// functions intents
const INTENTS = {
  goodbyes: getGoodbyes,
  greetings: getGreetings,
  capitale: getCapitals,
  thanks: getThanks,
  help: getHelp
}

const client = new Wit({ accessToken: config.wit })

/*
* call to facebbok to send the message
*/

function handleMessage (event/* : Object */) {
  const senderID = event.sender.id
  const messageText = event.message.text

  if (messageText) {
    client.message(messageText, {})
    .then((data) => {
      if (data.entities.intent) {
        const intent = data.entities.intent[0].value

        if (intent && INTENTS[intent]) {
          INTENTS[intent](data)
          .then((reply) => { replyMessage(senderID, reply) })
          .catch((reply) => { replyMessage(senderID, reply) })
        } else { replyMessage(senderID, 'I cannot help you on this point') }
      } else {
        replyMessage(senderID, 'I cannot help you on this point')
      }
    })
  }
}

module.exports = {
  handleMessage
}
