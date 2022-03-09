/*
adjacency list creater
*/

// grid set up
const grid = [
    0, 1, 1, 0,
    0, 0, 1, 0,
    1, 1, 1, 1,
    1, 1, 0, 0
]
// valid moves
const validMoves = [-1, 1, -4, 4]

function adjacencyList(data, moves){
    // map
    const map = new Map()
    
    // every element inside of grid
    data.forEach((el, index) => {
        if (el == 1) {
            const arr = []
            // check valid indexes
            moves.forEach(move=>{
                if (data[index+move] == 1) {
                    arr.push(index+move)
                }
            })
            map[index] = arr
        }
    });
    return map
}
// driver code
let list = adjacencyList(grid, validMoves)

console.log(list)
