var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var studentProfileRouter = require('./routes/studentProfile');
var announcementRouter = require('./routes/announcement');
var flashcardsRouter = require('./routes/StudySetServer');
var app = express();
var cors = require('cors');

app.use(logger('dev'));
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/studentProfile', studentProfileRouter);
app.use('/announcements', announcementRouter);
app.use('/studysets/flashcards', flashcardsRouter);
module.exports = app;
