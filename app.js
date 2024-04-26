let rows = 5;

// pattern variable carries the final pattern in string format
let pattern = "";

// outer loop runs for `rows` no. of times
for (let n = 1; n <= rows; n++) {
   // inner loop runs for n
   for (let num = 1; num <= n; num++) {
      pattern += n;
   }

   // Add a new line character after contents of each line
   pattern += "\n";
}
console.log(pattern);


1
12
123
1234
12345


var rows = 5
var pattern = ""
for (j = 1; j <= rows; j++) {
   for (i = 1; i <= j; i++) {
      pattern += j
   }
   pattern += "\n"
}
console.log(pattern)


1
12
123
1234
12345



var rows = 4;
var variable = 1 // 1, 2, 3, 4, 5, 6, 7, 8, 9, 10
var pattern = ""

for (var i = 1; i <= rows; i++) {
   for (var j = 1; j <= i; j++) {
      // pattern += j
      pattern += variable;
      variable++;
   }
   pattern += "\n"
}
console.log(pattern)


1
23
456
78910 




var rows = 4
var pattern = ""
var variable = 1
for (var i = 1; i <= rows; i++) {
   for (var j = 1; j <= i; j++) {
      pattern += variable+" "
      variable++;
   }
   pattern += '\n'
}
console.log(pattern)


var rows = 5
var pattern = ""
for (var i = 1; i <= rows; i++) {
   for (var j = 1; j <= 6 - i; j++) {
      pattern += j
   }
   pattern += "\n"
}
console.log(pattern)


var row = 5;
var pattern = ""
for (var i = 1; i <= row; i++) {
   for (var j = 1; j <= 6 - i; j++) {
      pattern += j
   }
   pattern += "\n"
}
console.log(pattern)