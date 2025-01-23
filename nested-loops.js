let n = parseInt(inp); // Don't change this 

for (let i = 1; i < n; i++) {
    for (let j = 1; j < n; j++) {
        if (i + j === n) {
            console.log(i, j);
        }
    }
}

// example output: 
// 1 5
// 2 4
// 3 3
// 4 2
// 5 1

// The above example should be true, if the input (n) was 6.  both output numbers should add up to (n). 
