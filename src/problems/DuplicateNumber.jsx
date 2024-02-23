import React from "react";

export const DuplicateNumber = () => {
  const arr = [2, 2, 2, 2, 234, 323, 23,23];

  for (let i = 0; i < arr.length; i++) {
    let count = 0;
    for (let j = 0; j < arr.length; j++) {
      if ( arr[i] === arr[j]) {
        count = count + 1;
      }

    }
    console.log(arr[i] ,"-",count)
  }

  
  return <div>DuplicateNumber</div>;
};
