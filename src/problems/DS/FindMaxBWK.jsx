import React from "react";
//sliding window by brute force
export const FindMaxBWK = () => {
  const arr = [1, 3, -1, -3, 5, 3, 6, 7];
  const k = 3;

  const getMaximumNumber = (arr, k) => {
    const result = [];
    let max = -Infinity;
    for (let i = 0; i <= arr.length - k; i++) {
      let count = k;
      for (let j = i; count > 0; j++) {
        if (arr[j] > max) {
          max = arr[j];
        }

        count--;
      }
      result.push(max);
      max = -Infinity;
    }
    return result;
  };
  console.log(getMaximumNumber(arr, k));

  return <div>FindMaxBWK</div>;
};
