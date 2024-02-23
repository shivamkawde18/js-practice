import React from "react";

export const RemoveExtraSpaces = () => {
  const str = "     om this is        muiii       ";
  let ans = "";

  for (let i = 0; i < str.length; i++) {
    if (str.charAt(i) === " ") {
      if (i + 1 < str.length && str.charAt(i + 1) !== " ") {
        ans = ans + " ";
      }
    } else {
      ans = ans + str.charAt(i);
    }
  }

  console.log(ans.trim()); // Use trim() to remove leading and trailing spaces

  return <div>RemoveExtraSpaces</div>;
};
