'use strict';

//Complete this algo
const isLoop = (linkedlist) => {
    let currentNode = linkedlist.head
    if(currentNode === null){
        return false
    }
    
    while(currentNode.next !== null){
        const nextNode = currentNode.next;
        if(nextNode.previous !== currentNode){
            return true;
        }
        currentNode = nextNode;
    }
    return false;
};

/*
EXTRA CREDIT:

Write a function findLoop() that consumes a linkedlist with a loop
This function should return the Node value the loop begins at
Remember to write some test specs too!

*/
module.exports = isLoop