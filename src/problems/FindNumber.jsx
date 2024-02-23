export const FindNumber = () => {
  //we have a array and we need to find the give number index

  const arr = [22, 2, 3, 12, 2, 66];

  const givenValue = 2;

  //here we have to find the index of 3 output ll be index 2

  //first aucrance
  const findNumberFun = (arr, value) => {
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] === value) return i;
    }
    return -1;
  };

  
  console.log(findNumberFun(arr, givenValue), "index");
  return <div>FindNumber</div>;
};
