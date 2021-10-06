/** Communication style
 * Process for Problem Solving 
 * 
 * 1. Understand
 * 2. Diagram
 * 3. Code
 */

/**
 * In an infinite chess board with coordinates from - infinity to +infinity, you have a knight at square [0,0].
 * Return the minimum number of steps needed to move the knight to the square [x,y]. It is guaranteed the answer exists. 
 * 
 * Example: 
 * 
 * Input: x = 2, y = 1
 * Output: 1
 * Explanation: [0,0] - [2,1]
 * 
 * 
 * [
 *     [0,0,0,0,0,0,0],
 *     [0,0,0,0,0,0,0],
 *     [0,1,0,1,0,0,0],
 *     [0,1,0,1,0,0,0],
 * ]
 * Double nested for loop
 * depth-first traversal
 * breadth-first traveral
 * 
 * Queue is a data structure that uses first in, first out 
 * [x,y]
 * [0,0]
 * [1,2,1] [2,1,1] [-1,2,1] [1,-2,1] [2, -1,1] [-1,-2,1] [-2,-1,1]
 * 
 * cur = [0,0,0]
 * 
 * - initialzie queue
 * - enqueue [0,0,0]
 * - create visited set
 * 
 * - perform breadth-first traversal
 *     - if ever current coordinate is equal to target coordinate
 *       return steps related to current coordinate 
 *     - find possible knight moves
 *     - if knight move is not visited
 *        - enqeue the move with steps -1
 *        - add coordinate to visited set
 */

function knightMoves(xInput, yInput) {
    let queue = [];
    queue.push([0,0,0]);
    let key = '0-0';
    let visited = new Set();
    visited.add(key);
        let x,y,steps;
    while (queue.length > 0) {
        [x, y, steps] = queue.shift[];
        if (x===xInput && y === yInput) {
            return steps;
        }

        let moves = getMoves(x, y);

        for (move of moves) {
            let key = move[0] + 
        }
    }
        
}

function getMoves(x,y, steps) {
    let moves = [];

    moves.push([x+1, y+2, steps +1]);
    moves.push([x+2, y+1, steps +1]);
    moves.push([x-1, y+2, steps +1]);
    moves.push([x-2, y-2, steps +1]);
    moves.push([x+1, y+2, steps +1]);
    moves.push([x+1, y+2, steps +1]);
    moves.push([x+1, y+2, steps +1]);
    moves.push([x+1, y+2, steps +1]);
}

// leetcode knigh medium problem 1197 


