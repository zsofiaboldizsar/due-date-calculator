import { isWorkingHours } from './src/util';

export const calculateDueDate = (submissionDate: Date, turnaroundTime: any): Date | Error => {
  if (!isWorkingHours(submissionDate)) {
    return new Error('Please submit your issue during working hours');
  }
  if (isNaN(turnaroundTime)) {
    return new Error('Please provide a number for the turnaround time');
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

// console.log('Due date:', calculateDueDate(new Date('2021-06-25 17:00:00'), 16));
