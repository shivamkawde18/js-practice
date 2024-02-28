import React from "react";

export const PermutationofArray = () => {
  const getPermutation = (arr) => {
    if (arr.length === 1) {
      return [arr];
    }
    const result = [];

    for (let i = 0; i < arr.length; i++) {
      const currentValue = arr[i];
      const left = arr.slice(0, i);
      const right = arr.slice(i + 1);

      const permutation = getPermutation([...left, ...right]);

      for (let i = 0; i < permutation.length; i++) {
        const newArr = [currentValue, ...permutation[i]];
        result.push(newArr);
      }
    }
    return result;
  };
  const arr = [1, 2, 3];
  console.log(getPermutation(arr));

  return <div>PermutationofArray</div>;
};
