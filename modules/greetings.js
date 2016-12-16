function replyGreetings () {
  const answers = [
    'Hello',
    'Welcome there!',
    'Hi'
  ]

  return new Promise((resolve, reject) => {
    resolve(answers[Math.floor(Math.random() * 3)])
  })
}

module.exports = replyGreetings
