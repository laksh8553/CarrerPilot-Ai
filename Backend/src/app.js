const express = require('express');
const cookieParser = require('cookie-parser');
const cors = require('cors');

const app = express();
const PORT =process.env.PORT || 3000;

app.use(
  cors({
    origin: "https://carrerpilot-ai-tool.onrender.com",
    credentials: true,
  }),
);
app.use(express.json());
app.use(cookieParser());

//require all the routes here
const authRouter = require('./routes/auth.routes.js');
const interviewRouter=require("./routes/interview.routes.js")

//using all the routes here
app.use('/api/auth', authRouter);
app.use('/api/interview', interviewRouter);

module.exports = app;