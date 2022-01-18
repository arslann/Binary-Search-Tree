// Practice problems on binary trees

function findMinBST(rootNode) {

  if (!rootNode.left) return rootNode.val;


  let min = findMinBST(rootNode.left)


  return min;
}

function findMaxBST(rootNode) {

  if (!rootNode.right) return rootNode.val;


  let max = findMaxBST(rootNode.right)


  return max;

}

function findMinBT(rootNode, min = rootNode.val) {
  // cant fixed bug
}

function findMaxBT(rootNode) {

  // Fill this in

}

function getHeight(rootNode) {

  // Fill this in

}

function countNodes(rootNode) {

  // Fill this in

}

function balancedTree(rootNode) {

  // Fill this in

}

function getParentNode(rootNode, target) {

  // Fill this in

}

function inOrderPredecessor(rootNode, target) {

  // Fill this in

}


function deleteNodeBST(rootNode, target) {

  // Fill this in

}

module.exports = [
  findMinBST,
  findMaxBST,
  findMinBT,
  findMaxBT,
  getHeight,
  countNodes,
  balancedTree,
  getParentNode,
  inOrderPredecessor,
  deleteNodeBST
]
