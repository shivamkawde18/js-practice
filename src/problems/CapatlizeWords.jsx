export const CapatlizeWords = () => {
  const str = "js string  exercises.";

  const capitalize_Words = (str) => {
    let resultentString = "";
    for (let i = 0; i < str.length; i++) {
      if (str.charAt(i) === " ") {
        resultentString = resultentString + " ";
      } else if (i > 0 && str.charAt(i - 1) === " ") {
        resultentString = resultentString + str.charAt(i).toUpperCase();
      } else if (i === 0) {
        resultentString = resultentString + str.charAt(i).toUpperCase();
      } else {
        resultentString = resultentString + str.charAt(i);
      }
    }
    return resultentString;
  };
  console.log(capitalize_Words(str));

  return <div>CapatlizeWords</div>;
};
