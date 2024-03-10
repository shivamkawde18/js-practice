import React from "react";

export const ValidParan = () => {
  const isValidParentheses = (str) => {
    const stack = [];

    for (let i = 0; i < str.length; i++) {
      const ch = str[i];

      if (ch === "(" || ch === "{" || ch === "[") {
        stack.push(ch);
      } else {
        if (
          (ch === "}" && stack[stack.length - 1] === "{") ||
          (ch === ")" && stack[stack.length - 1] === "(") ||
          (ch === "]" && stack[stack.length - 1] === "[")
        ) {
          stack.pop();
        } else {
          stack.push(ch);
        }
      }
    }

    return stack.length === 0; // If stack is empty, parentheses are valid
  };
  return <div>ValidParan</div>;
};
