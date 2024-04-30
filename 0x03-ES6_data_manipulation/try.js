let buffer = new ArrayBuffer(16);

// Create a view of the buffer as 32-bit signed integers
let int32View = new Int32Array(buffer);

// Populate the view with values
for (let i = 0; i < int32View.length; i++) {
    int32View[i] = i * 2;
}

console.log(int32View); // Output: Int32Array [0, 2, 4, 6]

// Create a view of the buffer as 8-bit unsigned integers
let uint8View = new Uint8Array(buffer);

// The buffer is shared between the views, so changes in one view will be reflected in the other
uint8View[0] = 128;
console.log(`length of uint8 typed arrray is ${uint8View.length} and it is\n ${uint8View}`);

console.log(int32View); // Output: Int32Array [128, 2, 4, 6]
