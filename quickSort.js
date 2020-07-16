const swap = (list, pos1, pos2) => {
  const temp = list[pos1];
  list[pos1] = list[pos2];
  list[pos2] = temp;
};

const partition = (list, start, end) => {
  const pivot = list[end];
  let position = start - 1;
  let index = start;
  while (index <= end) {
    if (list[index] < pivot) {
      position++;
      swap(list, position, index);
    }
    index++;
  }
  position++;
  swap(list, position, end);
  return position;
};

const quickSort = (list, start, end) => {
  if (start < end) {
    const index = partition(list, start, end);
    if (start < index - 1) quickSort(list, start, index - 1);
    if (start < index + 1) quickSort(list, index + 1, end);
  }
};

const main = () => {
  const list = [10, 80, 30, 90, 40, 50, 70];
  quickSort(list, 0, list.length - 1);
  console.log(list);
};

main();
