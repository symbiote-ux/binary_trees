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

const printInOrder = tree => {
  if (tree == null) {
    return;
  }
  printInOrder(tree.left);
  console.log(tree.value);
  printInOrder(tree.right);
};

const printPreOrder = tree => {
  if (tree == null) {
    return;
  }
  console.log(tree.value);
  printPreOrder(tree.left);
  printPreOrder(tree.right);
};

const printPostOrder = tree => {
  if (tree == null) {
    return;
  }
  printPostOrder(tree.left);
  printPostOrder(tree.right);
  console.log(tree.value);
};

const binarySearchTree = (tree, value) => {
  let root = tree;
  while (true) {
    if (root == null) return false;
    if (root.value === value) return true;
    if (value > root.value) root = root.right;
    else root = root.left;
  }
};

const main = () => {
  const list = [10, 5, 1, 8, 15].reduce(insert, null);
  const result = binarySearchTree(list, 5);
  console.log(result);
};

module.exports = { insert, printInOrder,binarySearchTree };
