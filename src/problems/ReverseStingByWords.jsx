import React from "react";

export const ReverseStingByWords = () => {
  const question = "the sky is blue";
  //soluction with js methods
  function reverString(str) {
    const newArray = str.split(" ");
    return newArray.reverse().join(" ");
  }

  console.log(reverString(str));

  function reverseSingleString(str) {
    let ans = "";
    for (let i = str.length - 1; i >= 0; i--) {
      ans = ans + str.charAt(i);
    }
    return ans;
  }

  //bruteforce soluction
  function reverStringBrutefoce(str) {
    let resultentStr = "";
    let updatedStr = "";
    for (let i = str.length - 1; i >= 0; i--) {
      if (str.charAt(i) === " ") {
        let ss = reverseSingleString(resultentStr);
        updatedStr = updatedStr + " " + ss;
        resultentStr = "";
      } else if (i === 0) {
        let ss = reverseSingleString(resultentStr + str.charAt(i));
        updatedStr = ss + " " + updatedStr;
        console.log(resultentStr);
        resultentStr = "";
      } else {
        resultentStr = resultentStr + str.charAt(i);
      }
    }

    return updatedStr;
  }
  console.log(reverStringBrutefoce(question));

  return <div>ReverseStingByWords</div>;
};
