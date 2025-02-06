import express from 'express';
import cors from 'cors';
import indexRouter from './routes/indexRouter';
import tasksRouter from './routes/tasksRouter';

const app = express();

app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());


app.use('/', indexRouter);
app.use('/tasks', tasksRouter);

app.listen(3000, () => {
  console.log(`Server is listening on port 3000`);
});
