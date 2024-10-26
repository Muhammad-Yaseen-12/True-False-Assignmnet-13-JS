var isFound = false;
var arrays = ["ahmer123@gmail.com", "ahmer321@gmail.com"];

for (var i = 0; i < arrays.length; i++) {
    console.log(arrays[i]);
    if (arrays[i].length > 1) {
        // console.log(arrays[i].length);
        // console.log(arrays[i]);
        isFound = true; 
    } else {
        isFound = false;
    }
}

arrays.splice([i], 0, "hello world");

console.log(arrays);
console.log(arrays[i]);
