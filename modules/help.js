function replyHelp () {
  const answers = 'Welcome to the callDeskBot, I can help you for knowing all capitals city, for example you can ask me:\n-What\'s the capital of France?\n\nHave fun!!'
  return new Promise((resolve, reject) => {
    resolve(answers)
  })
}

module.exports = replyHelp
