
class Node {
    constructor(data = null) {
      this.data = data;
      this.left = null;
      this.right = null;
  }
  }
  class Tree {
    constructor(array)
      {
          this.array = array;
          this.root = buildTree(array,0,array.length-1);
      }
  }
  const buildTree = (array,start,end)=>{
      if(start>end)
      {
          return null
      }
      let mid = Math.round((start+end)/2)
      let node = new Node(array[mid])
      node.left = buildTree(array,start,mid-1)
      node.right = buildTree(array,mid+1,end)
      return node
  }
  let arr = [1,2,3,4,5,6,7,8,9,10,12,23,34,45]
  let tree = new Tree(arr)
  const prettyPrint = (node, prefix = "", isLeft = true) => {
    if (node === null) {
      return;
    }
    if (node.right !== null) {
      prettyPrint(node.right, `${prefix}${isLeft ? "│   " : "    "}`, false);
    }
    console.log(`${prefix}${isLeft ? "└── " : "┌── "}${node.data}`);
    if (node.left !== null) {
      prettyPrint(node.left, `${prefix}${isLeft ? "    " : "│   "}`, true);
    }
  };
  const insert = (root,key)=>{
    if(root === null)
    {
        let newNode = new Node(key)
        root = newNode;
        return root
    }
    if(key > root.data)
    {
        root.right = insert(root.right,key)
    }
    else if(key < root.data)
    {
        root.left = insert(root.left,key)
    }
    return root
  }
  insert(tree.root)
  const deleteNode = (root,key)=>{
    if(root === null)
    {
        return root
    }
    //tranveser
    if(root.data >key)
    {
        root.left = deleteNode(root.left,key)
        return root
    }
    else if(root.data < key)
    {
        root.right = deleteNode(root.right,key)
        return root
    }
    //both leaf node and single child,leaf node, will attend both conditions(root right and root left),
    if(root.left === null)
    {
        let tmp = root.right
        delete root
        return tmp
     
    }
    else if(root.right === null)
    {
        let tmp = root.left
        delete root
        return tmp
    }
    else{
        let sucessorParent = root;
        //first get the sucessor,
        let sucessor = root.right;
        //now find the sucessor
        while(sucessor.left!== null)
        {
            sucessorParent = sucessor
            sucessor = sucessor.left
        }
        //if there is right child node the children
        if(sucessorParent !== null)
        {
            sucessorParent.left = sucessor.right
        }
        //if there is no child
        else{
            sucessorParent.right = sucessor.right
        }
        root.key = sucessor.key
        delete sucessor
        return root
  }
}
prettyPrint(tree.root)
const find = (root,key)=>{
    //if there is this this value
    if(root.data === key || root === null)
    {
        return root
    }//
    if(root.data > key)
    {
        return find(root.left,key)
    }
    else if(root.data < key)
    {
        return find(root.right,key)
    }
    
}

const levelOrder = (root)=>{
    if(root === null)
    {
        return []
    }
    let queue = []
    queue.push(root);
    let result = [];
    let height = 0
    
    while(queue.length !== 0)
    {
        
        let current = queue.shift()
        if(current.left !== null)
        {
            queue.push(current.left)
        }
        if(current.right !== null)
        {
            queue.push(current.right)
        }
        result.push(current.data)
    }
    return result
}
console.log(levelOrder(tree.root))
const inorder = (root,array)=>{
    if(root === null)
    {
        return 
    }
    inorder(root.left,array)
    array.push(root.data)
    inorder(root.right,array)
    return array
}
const preorder = (root,array)=>{
    if(root === null)
    {
        return 
    }
    array.push(root.data)
    preorder(root.left,array)
    preorder(root.right,array)
    return array
}
const postorder = (root,array)=>{
    if(root === null)
    {
        return 
    }
    postorder(root.left,array)
    postorder(root.right,array)
    array.push(root.data)
    return array
}
const height = (root)=>{
    if(root === null)
    {
        return -1
    }
    else{
    let leftHeight = height(root.left)
    let rightHeight = height(root.right)
    return Math.max((leftHeight,rightHeight)+1)
}
}

const depth = (root,node)=>{
    let depth = height(root) - height(node)
    return depth
}

const isBalanced = (root)=>{
    if(root === null)
    {
        return 
    }
    let difference = Math.abs(height(root.left) - height(root.right))
    if(difference > 1)
    {
        return "Unbalanced"
    }
    isBalanced(root.right)
    isBalanced(root.left)
    return "Balanced"

}
console.log(isBalanced(tree.root))
insert(tree.root,32000)
insert(tree.root,33000)
insert(tree.root,34000)
insert(tree.root,35000)

console.log(isBalanced(tree.root))
const rebalance = (root,array)=>{
    if(root === null)
    {
        return
    }
    rebalance(root.left,array)
    rebalance(root.right,array)
    array =inorder(root,[])
    
    return buildTree(array,0,array.length-1)
    

}
let treeRebalanced = rebalance(tree.root,[])
console.log(treeRebalanced)
prettyPrint(treeRebalanced)
let randomArray = [
    5, 14, 23, 37, 42, 58, 65, 79, 87, 91
  ];
let newTree = new Tree(randomArray)
console.log(isBalanced(newTree.root))
prettyPrint(newTree.root)
console.log(levelOrder(newTree.root))
console.log(preorder(newTree.root,[]))
console.log(inorder(newTree.root,[]))
console.log(postorder(newTree.root,[]))
console.log(isBalanced(newTree.root))
insert(newTree.root,213)
insert(newTree.root,1000)
insert(newTree.root,999)
insert(newTree.root,12322)
insert(newTree.root,1222)
insert(newTree.root,12222)

prettyPrint(newTree.root)
console.log(isBalanced(newTree.root))
let newTreeRebalanced = rebalance(newTree.root)
console.log(newTreeRebalanced)
prettyPrint(newTreeRebalanced)
console.log(isBalanced(newTreeRebalanced))
console.log(levelOrder(newTreeRebalanced))
console.log(preorder(newTreeRebalanced,[]))
console.log(inorder(newTreeRebalanced,[]))
console.log(postorder(newTreeRebalanced,[]))
