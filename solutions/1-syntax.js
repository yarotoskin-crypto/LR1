// BEGIN (write your solution here)
export const getWeekends = (format = 'long') => {
  if (format === 'short') {
    return ['sat', 'sun'];
  }
  if (format === 'long') {
    return ['saturday', 'sunday'];
  }
};
// END
