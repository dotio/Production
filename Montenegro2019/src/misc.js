export const firebaseLooper = snap => {
  const data = [];
  snap.forEach(element => {
    data.push({
      ...element.val(),
      id: element.key
    });
  });
  return data;
};

// reverse array
export const reverseArray = array => {
  let reversedArray = [];
  for (let i = array.length - 1; i >= 0; i--) {
    reverseArray.push(array[i]);
  }
  return reversedArray;
};
