const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
const port = 5000;

app.use(cors());
app.use(express.json());

mongoose.connect('mongodb://300yashsinghal:mntFzMj4gjXVW7et@300yashsinghal/?ssl=true&replicaSet=atlas-h3pjqt-shard-0&authSource=admin&retryWrites=true&w=majority&appName=Cluster0', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

const questionSchema = new mongoose.Schema({
  topicName: String,
  position: Number,
  started: Boolean,
  doneQuestions: Number,
  questions: [
    {
      Topic: String,
      Problem: String,
      Done: Boolean,
      Bookmark: Boolean,
      Notes: String,
      URL: String,
      URL2: String
    }
  ]
});

const Question = mongoose.model('Question', questionSchema);

app.get('/questions', async (req, res) => {
  const questions = await Question.find();
  res.send(questions);
});

app.post('/questions', async (req, res) => {
  const question = new Question(req.body);
  await question.save();
  res.send(question);
});

app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});
