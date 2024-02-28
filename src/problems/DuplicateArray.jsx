import React from "react";

export const DuplicateArray = () => {
  const arr = [5, 5, 5, 34, 2, 2, 1, 3, 4, 5, 1, 1, 4, 5, 6, 6, 5, 5];

  const giveDuplicates = (arr) => {
    let duplicateArray = [];
    for (let i = 0; i < arr.length; i++) {
      for (let j = i + 1; j < arr.length; j++) {
        if (arr[i] === arr[j] && !duplicateArray.includes(arr[i])) {
          duplicateArray.push(arr[i]);
        }
      }
    }

    return duplicateArray;
  };

  console.log(giveDuplicates(arr));

  return <div>DuplicateArray</div>;
};
