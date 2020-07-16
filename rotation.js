const createNode = (value) => {
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

const rightRotate = (tree) => {
  const newTree = tree.right;
  if (newTree === null) return tree;
  newTree && (tree.right = newTree.left);
  newTree && (newTree.left = tree);
  return newTree;
};

const leftRotate = (tree) => {
  const newTree = tree.left;
  if (newTree === null) return tree;
  newTree && (tree.left = newTree.right);
  newTree && (newTree.right = tree);
  return newTree;
};

const getGrandParentNode = (tree, value, grandParent = null) => {
  let root = tree;
  if (
    (root && root.left.value === value) ||
    (root && root.right.value === value)
  )
    return grandParent;
  grandParent = root;
  if (value < tree.value) {
    root = tree.left;
  } else {
    root = tree.right;
  }
  return getGrandParentNode(root, value, grandParent);
};

const rotateAt = (tree, value) => {
  const grandParentNode = getGrandParentNode(tree, value);
  if (grandParentNode === null) {
    return tree.value > value ? leftRotate(tree) : rightRotate(tree);
  }
  if (grandParentNode.value > value) {
    grandParentNode.left =
      grandParentNode.left.value > value
        ? leftRotate(grandParentNode.left)
        : rightRotate(grandParentNode.left);
  }
  return tree;
};

const main = () => {
  const tree = [10, 5, 20, 1, 9, 15, 25].reduce(insert, null);
  const result = rotateAt(tree, 20);
  console.log(JSON.stringify(result));
};

main();
