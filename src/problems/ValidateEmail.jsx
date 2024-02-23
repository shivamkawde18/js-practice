import React from "react";

export const ValidateEmail = () => {
  const str = "shivam@@gmai.com";

  const vaildateEmail = (str) => {
    if (str.length === 0) return false;
    if (str.includes("@")) {
      const strArr = str.split(".");
      if (strArr.length > 2) {
        return false;
      }

      if (strArr[strArr.length - 1] === "com") {
        return true;
      }
    }
    return false;
  };
  console.log(vaildateEmail(str));

  return <div>ValidateEmail</div>;
};
