export const readyDate = thirteenDigitDate => {
  const date = new Date(parseInt(thirteenDigitDate));
  const newDate = new Date(date).toLocaleDateString('en-US');
  const newTime = new Date(date).toLocaleTimeString('en-US');
  return `${newDate} at ${newTime}`;
};
