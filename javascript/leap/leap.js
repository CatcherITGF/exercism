//
// This is only a SKELETON file for the 'Leap' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const isLeap = year => isInteger(year / 4) && !isInteger(year / 100) || isInteger(year / 400);
const isInteger = num => (num ^ 0) === num;
