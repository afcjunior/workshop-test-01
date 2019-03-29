import leftRotation from ('../src/left-rotation-AJ');

const { caseOne, caseTwo, caseThree, caseFour } = {
  caseOne: {
    array: [1, 2, 3, 4, 5],
    rotation: 4,
    expected: '5 1 2 3 4',
  },
  caseTwo: {
    array: [
      41, 73, 89, 7, 10, 1, 59, 58, 84, 77,
      77, 97, 58, 1, 86, 58, 26, 10, 86, 51
    ],
    rotation: 10,
    expected: '77 97 58 1 86 58 26 10 86 51 41 73 89 7 10 1 59 58 84 77',
  },
  caseThree: {
    array: [
      98, 67, 35, 1, 74, 79, 7, 26, 54, 63,
      24, 17, 32, 81,
    ],
    rotation: 7,
    expected: '26 54 63 24 17 32 81 98 67 35 1 74 79 7',
  },
  caseFour: {
    array: [
      431, 397, 149, 275, 556, 362, 852, 789, 601, 357,
      516, 575, 670, 507, 127, 888, 284, 405, 806, 27,
      495, 879, 976, 467, 342, 356, 908, 750, 769, 947,
      425, 643, 754, 396, 653, 595, 108, 75, 347, 394,
      935, 252, 683, 966, 553, 724, 629, 567, 93, 494,
      693, 965, 328, 187, 728, 389, 70, 288, 509, 252,
      449,
    ],
    rotation: 48,
    expected: '93 494 693 965 328 187 728 389 70 288 509 252 449 431 397 149 \
      275 556 362 852 789 601 357 516 575 670 507 127 888 284 405 806 27 495 \
      879 976 467 342 356 908 750 769 947 425 643 754 396 653 595 108 75 347 \
      394 935 252 683 966 553 724 629 567',
  },
}

describe(
  'leftRotation([], D) - Receives an array of size (1 <= N <= 10ˆ5), rotates it \
  (1 <= D <= N) times to the left, and returns the input value post D rotation(s), \
  separated by spaces.', () => {

  it(
    'Should only receive input values contained within the set constraints',
    () => {

    // test if the input Array.Length is between 1 and 1.000.000

    // test if the d (number of rotations) is between 1 and Array.Length

    // test for  <= a*i* <= 10^6, whatever the hell this is. Ask david?
  });

  it('Should output a string of space-separated ints, with as many values as \
  the input array\'s length.', () => {

    // test if the output is a string of ints separated by spaces

    // test if the quantity of ints is the same as the input array.length

  });

  it('Should correctly rotate arrays thrown at it D number of times.', () => {

    // test the 4 cases of the exercise to make sure it rotates the array correctly

  });
});
