const express = require('express')
const morgan = require('morgan')
const path = require('path')
const app = express()
const compression = require('compression')
module.exports = app
const PORT = process.env.PORT || 8080

const createApp = () => {

  app.use(morgan('dev'))

  app.use(express.json())
  app.use(express.urlencoded({ extended: true }))

  app.use(compression())

  app.use(express.static(path.join(__dirname, '..', 'public')))

  // app.use((req, res, next) => {
  //   if (path.extname(req.path).length) {
  //     const err = new Error('Not found')
  //     err.status = 404
  //     next(err)
  //   } else {
  //     next()
  //   }
  // })

  // app.use('*', (req, res) => {
  //   res.sendFile(path.join(__dirname, '..', 'public/index.html'))
  // })
  app.get('*', function (req, res) {
    res.sendFile(path.join(__dirname, '..', 'public/index.html'))
  });

}

const startListening = () => {
  app.listen(PORT, () =>
    console.log(`Mixing it up on port ${PORT}`)
  )
}



async function bootApp() {
  await createApp()
  await startListening()
}

if (require.main === module) {
  bootApp()
} else {
  createApp()
}
