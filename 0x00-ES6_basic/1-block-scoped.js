export default function taskBlock(trueOrFalse) {
  const task = false;
  const task2 = true;

  let newTask = task; // Create block-scoped variables to avoid reassignment
  let newTask2 = task2;

  if (trueOrFalse) {
    newTask = true; // Assign values to block-scoped variables
    newTask2 = false;
  }

  return [newTask, newTask2]; // Return the block-scoped variables
}
