import React from "react";

export const SubArraySum = () => {
  const arr = [1, 4, 20, 3, 10, 5];

  const findSubarray = (arr) => {
    let index = [];
    for (let i = 0; i < arr.length; i++) {
      for (let j = i + 1; j < arr.length; j++) {
        let sum = arr.slice(i, j).reduce((a, value) => a + value);

        if (sum === 33) {
          index.unshift(i);
          return index;
        }

        index.push(j);
      }
      index = [];
    }
    return -1;
  };

  console.log(findSubarray(arr));

  return <div>SubArraySum</div>;
};
