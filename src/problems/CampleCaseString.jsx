export const CampleCaseString = () => {
  const str = "my fun";
  const camelize = (str) => {
    let resultentString = "";
    for (let i = 0; i < str.length; i++) {
      if (str.charAt(i - 1) === " " && i > 0) {
        resultentString = resultentString + str.charAt(i).toUpperCase();
      } else if (str.charAt(i) === " ") {
        console.log("nothing");
      } else {
        resultentString = resultentString + str.charAt(i);
      }
    }
    return resultentString;
  };
  console.log(camelize(str));
  return <div>CampleCaseString</div>;
};
