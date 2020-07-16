const {
  insert,
  printInOrder,
  binarySearchTree
} = require('./binarySearchTree');

const removeNodeFromMiddle = () => {
  const list = [10, 5, 1, 8, 20, 25, 15].reduce(insert, null);
  printInOrder(list);
  console.log('------------------------');
  deleteValue(list, 10);
  const tree = JSON.stringify(list);
  console.log(tree);
  printInOrder(list);
};

const removeSingleRoot = () => {
  const list = [10, 5].reduce(insert, null);
  printInOrder(list);
  console.log('------------------------');
  deleteValue(list, 10);
  const tree = JSON.stringify(list);
  console.log(tree);
  printInOrder(list);
};

const removeLeaf = () => {
  const list = [10, 5, 15].reduce(insert, null);
  printInOrder(list);
  console.log('------------------------');
  deleteValue(list, 5);
  const tree = JSON.stringify(list);
  console.log(tree);
  printInOrder(list);
};

const getMinTree = tree => {
  if (tree.left === null) return tree;
  return getMinTree(tree.left);
};

const deleteValue = (tree, value) => {
  const isPresent = binarySearchTree(tree, value);
  if (!isPresent) return tree;
  if (tree.left === null && tree.right === null && tree.value === value) {
    return null;
  } 
  if (tree.value > value) {
    tree.left = deleteValue(tree.left, value);
    return tree;
  }
  if (tree.value < value) {
    tree.right = deleteValue(tree.right, value);
    return tree;
  }
  if (tree.right === null) {
    tree.value = tree.left.value;
    tree.left = deleteValue(tree.left, tree.left.value);
    return tree;
  }
  const minTree = getMinTree(tree.right);
  tree.value = minTree.value;
  tree.right = deleteValue(tree.right, minTree.value);
  return tree;
};

const main = () => {
  removeLeaf();
  removeSingleRoot();
  removeNodeFromMiddle();
};

main();
