function replyGoodbyes () {
  const answers = [
    'Bye!',
    'That\'s great to talk with you!',
    'Have a great day!',
    'See you soon'
  ]
  return new Promise((resolve, reject) => {
    resolve(answers[Math.floor(Math.random() * 4)])
  })
}

module.exports = replyGoodbyes
