export default function taskBlock(trueOrFalse) {
  const task = false;
  const task2 = true;

  if (trueOrFalse) {
    const Task = true; // eslint-disable-line no-unused-vars
    const Task2 = false; // eslint-disable-line no-unused-vars
  }

  return [task, task2];
}
