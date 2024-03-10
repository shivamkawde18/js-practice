import React from "react";

export const FindNumber = () => {
  var nestedObject = {
    data: {
      info: {
        stuff: {
          thing: {
            moreStuff: {
              magicNumber: 44,
              something: "foo2",
            },
          },
        },
      },
    },
  };

  const isFind = (obj, number) => {
    if (typeof obj !== "object") throw new Error(obj, "is not object");

    let ans = false;
    for (let key in obj) {
      if (obj[key] === number) {
        ans = true;
        return ans;
      }

      if (typeof obj[key] === "object") {
        ans = isFind(obj[key], number);
      }

      return ans;
    }
  };

  console.log(isFind(nestedObject, 44));
  return <div>FindNumber</div>;
};
