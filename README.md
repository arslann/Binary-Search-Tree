# AppAcademy Open - Binary Trees Project

## Learning Goals
* Construct a Binary Search Tree
* Search for data in a Binary Search Tree in logarithmic time
* Describe the properties and functionality of a Binary Tree
* Describe the properties and functionality of a Tree
* Traverse a Binary Tree in pre-order, in-order and post-order
* Traverse and Search a Tree in both Depth and Breadth-First order
* Solve coding challenges involving trees

## Part 1: Traversing Trees
As a refresher, a breadth-first traversal or search looks through all the siblings on each level of a tree before moving to the next, while a depth-first traversal looks down as far as possible through each child before going to the next sibling.

Starter code is given to you at ./implementation/tree-traversals.js

## The Tree Node
Before we can actually build out these traversals, we have to start by creating our own tree node implementation!

Recall that a node should have a value, a left pointer, and a right pointer.

Breadth-First Traversal
Now that you have the basic building block of a tree, try to implement a breadth-first traversal by writing a function that returns an array of the values seen in order given the root tree node.

``` 
Breadth First Traversal (root)
    if root has no value, return empty array
    
    initialize a queue with the root node 
    
    while queue is not empty 
        print and remove first node in queue

        if the node has a left node
            push the left node on the back of the queue
        if the node has a right node
            push the right node on the back of the queue 
```

## Depth-First Traversals
In the reading, you've seen how a depth-first traversal iteratively with a stack, but not the recursive traversals.

First, try to implement the iterative implementation of the depth-first traversal without referencing the code in the reading.

```
Depth First Traversal (root)
    if root has no value, return empty array
    
    initialize a stack with the root node 
    
    while stack is not empty 
        print and remove top node in stack

        if the node has a left node
            push the left node on top of the stack
        if the node has a right node
            push the right node on top of the stack
```
There are three ways to traverse a binary tree depth-first using recursion: pre-order, in-order, and post-order. Try to implement these traversals by printing out the values in the order specified.

## Pre-Order Traversal
A pre-order traversal accesses the value of a node before recursively descending to the left and right:

```
Pre Order Traversal (node)
    If node has no data, return 

    Print value at current node

    Recursively print values from left sub tree
    Recursively print values from right sub tree
```

## In-Order Traversal
An in-order traversal accesses the value of the node after recursively descending to the left, but before the right:

```
In Order Traversal (node)
    If node has no data, return 

    Recursively print values from the left sub tree

    Print value at current node

    Recursively print values from right sub tree
```

## Post-Order Traversal
A post-order traversal accesses the value of the node after recursively descending to the left and right:

```
Post Order Traversal (node)
    If node has no data, return 

    Recursively print values from left sub tree
    Recursively print values from right sub tree

    Print value at current node
```

## Part 2: Practice Problems
Now that you've gotten a hang of how the various traversal methods work, lets try putting that knowledge to use!

Starter file is located at ./practice/tree-practice.js

### Find Min
Given the root of a binary search tree, find the minimum value in the tree.

(Hint: Recall how binary trees are formed. How does a parent relate to its children?)

### Get Height
Given the root of a tree, find the height of the tree. The height of a tree is the number of edges between the root and its furthest leaf.

### Balanced Binary Tree
Given a binary tree, determine if it is height-balanced.

A height-balanced binary tree is defined as a binary tree in which the left and right subtrees of every node differ in height by no more than 1.

### Lowest Common Ancestor of a Binary Tree
Given a binary tree, find the lowest common ancestor (LCA) of two given nodes in the tree.

The lowest common ancestor is defined between two nodes p and q as the lowest node in T that has both p and q as descendants (where we allow a node to be a descendant of itself).

### Construct Binary Tree
Given the pre-order and in-order traversals of a binary tree, reconstruct the tree.

