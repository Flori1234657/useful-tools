export const compareDates = (date1: Date | string, date2: Date): boolean => {
  if (
    `${date1}` === `${date2.getDate()}${date2.getMonth()}${date2.getFullYear()}`
  )
    return true;

  return false;
};
