// const express = require('express')
// const cors = require('cors')
// const cookieParser = require('cookie-parser')
// const mongoose = require("mongoose")
// const authRoutes = require('./routes/auth')
// const userRoutes = require('./routes/user')
// const { initSocket } = require('./socket/index')

// const app = express()
// require('dotenv').config()

// const corsOptions = {
//   origin: process.env.CLIENT_URL,
//   credentials: true
// };

// app.use(cors(corsOptions))
// app.use(express.json())
// app.use(express.urlencoded({ extended: false }))
// app.use(cookieParser(process.env.COOKIE_SIGNATURE))

// app.use('/api/auth', authRoutes)
// app.use('/api/users', userRoutes)

// app.get('/', (req, res) => {
//   res.send('Hi there!')
// })

// mongoose.connect(process.env.MONGO_URI)
//   .then(() => console.log("DB connection Success"))
//   .catch((err) => console.log('DB connection Error', err.message))

// const server = app.listen(process.env.PORT, () => {
//   console.log(`App is listening to port ${process.env.PORT}`)
// })

// // socket.io
// initSocket(server, corsOptions)

// module.exports = app;

// const PORT = process.env.PORT || 6001;
// mongoose.connect(process.env.MONGO_URI,{
//   useNewUrlParser:true,
//   useUnifiedTopology:true,

// }).then(()=> {
//   app.listen(PORT,()=> console.log(`Server Port:${PORT}`))
// }).catch((error)=> console.log(`${error} did not connect`))











// const express = require('express');
// const cors = require('cors');
// const cookieParser = require('cookie-parser');
// const mongoose = require('mongoose');
// const authRoutes = require('./routes/auth');
// const userRoutes = require('./routes/user');
// const { initSocket } = require('./socket/index');



// const app = express();
// require('dotenv').config();

// const corsOptions = {
//   //origin: process.env.CLIENT_URL,
//   origin:'*',
//   credentials: true
// };

// app.use(cors(corsOptions));
// app.use(express.json());
// app.use(express.urlencoded({ extended: false }));
// app.use(cookieParser(process.env.COOKIE_SIGNATURE));

// app.use('/api/auth', authRoutes);
// app.use('/api/users', userRoutes);

// app.get('/', (req, res) => {
//   res.send('Hi there!');
// });

// mongoose.connect(process.env.MONGO_URI, {
//   useNewUrlParser: true,
//   useUnifiedTopology: true
// }).then(() => {
//   console.log('DB connection Success');

//   const PORT = process.env.PORT || 6001;
//   const server = app.listen(PORT, () => {
//     console.log(`App is listening to port ${PORT}`);
//   });

//   // socket.io
//   initSocket(server, corsOptions);
// }).catch((err) => {
//   console.log('DB connection Error', err.message);
// });

// module.exports = app;

const express = require('express');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const mongoose = require('mongoose');
const authRoutes = require('./routes/auth');
const userRoutes = require('./routes/user');
const { initSocket } = require('./socket/index');
require('dotenv').config();

const app = express();

const corsOptions = {
  origin: ["http://127.0.0.1:3000"],
  credentials: true
};

app.use(
  cors(corsOptions)
);

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser(process.env.COOKIE_SIGNATURE));

app.use('/api/auth', authRoutes);
app.use('/api/users', userRoutes);

app.get('/', (req, res) => {
  res.send('Hi there!');
});

mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => {
  console.log('DB connection Success');

  const PORT = process.env.PORT || 5000;
  const server = app.listen(PORT, () => {
    console.log(`App is listening on port ${PORT}`);
  });

  // socket.io initialization
  initSocket(server, corsOptions);
}).catch((err) => {
  console.log('DB connection Error', err.message);
});

module.exports = app;