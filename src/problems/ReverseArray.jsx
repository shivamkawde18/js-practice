export const ReverseArray = () => {
  //we have a method call reverse in js

  const arr = [5, 4, 3, 2, 1];

  //console.log(arr.reverse())

  // we have to with our own approch

  let i = 0;
  let j = arr.length - 1;

  while (i !== j) {
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
    i++;
    j--;
  }

  console.log("new arr", arr);
  return <div>ReverseArray</div>;
};
