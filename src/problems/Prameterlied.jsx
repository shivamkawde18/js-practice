export const Prameterlied = () => {
  const str = "Robin Singh from USA.";

  const string_parameterize = (str) => {
    const mainString = str.toLowerCase();
    let resultentString = "";
    for (let i = 0; i < mainString.length; i++) {
      if (mainString.charAt(i) === " ") {
        resultentString = resultentString + "-";
      } else {
        resultentString = resultentString + mainString.charAt(i);
      }
    }
    return resultentString;
  };
  console.log(string_parameterize(str));

  return <div>Prameterlied</div>;
};
