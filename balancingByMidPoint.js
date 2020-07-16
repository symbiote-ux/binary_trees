const createNode = value => {
  return { value, left: null, right: null };
};

const insert = (tree, value) => {
  if (tree == null) return createNode(value);
  let root = tree;
  while (true) {
    if (value > root.value) {
      if (root.right === null) {
        root.right = createNode(value);
        return tree;
      }
      root = root.right;
    } else {
      if (root.left === null) {
        root.left = createNode(value);
        return tree;
      }
      root = root.left;
    }
  }
};

const printInOrder = (tree) => {
  if (tree == null) {
    return;
  }
  printInOrder(tree.left);
  console.log(tree.value);
  printInOrder(tree.right);
};

const createSortedList = (tree, list) => {
  if (tree === null) return list;
  createSortedList(tree.left, list);
  list.push(tree.value);
  createSortedList(tree.right, list);
  return list;
};

const balance = (list, start = 0, end = list.length - 1) => {
  if (start > end) return null;
  const pivot = Math.floor((start + end) / 2);
  const tree = createNode(list[pivot]);
  tree.left = balance(list, start, pivot - 1);
  tree.right = balance(list, pivot + 1, end);
  return tree;
};

const main = () => {
  let tree = [2, 3, 1, 4, 5].reduce(insert, null);
  printInOrder(tree);
  console.log('----------------------------');
  const sortedList = createSortedList(tree, []);
  tree = balance(sortedList);
  console.log(JSON.stringify(tree));
};

main();
