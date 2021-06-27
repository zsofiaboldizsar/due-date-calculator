import { isWorkingHours } from './src/util';

export const calculateDueDate = (submissionDate: Date, turnaroundTime: number): Date | Error => {
  if (!isWorkingHours(submissionDate)) {
    throw new Error('Please submit your issue during working hours');
  }
  if (isNaN(turnaroundTime)) {
    throw new Error('Please provide a number for the turnaround time');
  }

  let dueDate = new Date(submissionDate.getTime());
  let elapsedHours = 0;
  while (elapsedHours < turnaroundTime) {
    dueDate = new Date(dueDate.setHours(dueDate.getHours() +1));
    if (isWorkingHours(dueDate)) {
      elapsedHours++;
    }
  }

  return dueDate;
};

// console.log('Due date:', calculateDueDate(new Date('2021-06-25 16:00:00'), 16));
