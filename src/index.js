export const reverse = (word) => {
  let reversed = "";
  for (const letter of word) {
    reversed = letter + reversed;
  }
  return reversed;
};
