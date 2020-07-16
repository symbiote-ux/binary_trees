const binarySearch = (list, value, start = 0, end = list.length - 1) => {
  const mid = Math.floor((start + end) / 2);
  if (list[mid] === value) return mid;
  if (start === end) return -1;
  if (value > list[mid]) return binarySearch(list, value, mid + 1, end);
  return binarySearch(list, value, start, mid - 1);
};

const main = () => {
  const list = [10, 20, 30, 40, 50, 60];
  const value = 40;
  const index = binarySearch(list, value);
  console.log(index);
};

main();
