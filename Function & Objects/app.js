//Function , block of code that does the same work again and again
//function banana // initialize krna 

// function sayHello() {
//     var x = 1
//     var y = 2
//     console.log('Hello_world', x+y)
// }
// sayHello()

// function owais() {
//     console.log(
//         'my name is owais sikander hayat khan'
        
//     )
//     for(var i=0; i<10; i++){
//         console.log('Owais_sikander')
//     }

// }

// // owais() 

// var p = document.getElementById('intro')
// function showless(){
//     p.innerText = 'My name is owais'
// }

// function showmore(){
//     p.innerText ='My name is owais sikander, Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates odit voluptatu '
// }




// var p =document.getElementById('intro')
// console.log(p)

// function showLess(){
//     p.innerText = 'My name is owais & want to know about me then click on show more'
// }
// function showMore(){
//     p.innerText = 'My name is owais & Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates odit voluptatum nisi iu      '

// }

// var span =document.getElementById('updates')
// var count = 1

// function increment(){
//     span.innerText = ++count

// }
// function decrement(){
//     span.innerText = --count

// }

// var p = document.getElementById('para')
// console.log(p)

// // function showMore() {
// //     p.innerText = 'The Document Object Model is a cross-platform and language-independent interface that treats an HTML or XML document as a tree structure wherein each node is an object representing a part of the document. The DOM represents a document with a logical tree.'
// // }
// // function showLess() {
// //     p.innerText = 'The Document Object Model is a cross-platform and language-independent interface that treats an HTML or XML document as a tree structure.'
// // }
  


// sayHello()

// var arr = ['1', '2', '3'].length

// arr.push('4')

// console.log(arr)



// var span = document.getElementById('number')
// var count = 1

// function increment() {
//     // count++
//     span.innerText = ++count
// }

// function decrement() {
//     // count--
//     span.innerText = --count

// }


// function seeLettersWords(){
//     var input = document.getElementById('input')
//     var value = input.value
//     var letter = value.length
//     var words = value.split(' ').length
//     document.getElementById('output').innerText = 'Total Words : ' + words + ' Total Letters : ' + letter
// }

function check(){
var input =document.getElementById('input')
var value = input.value
var letter = value.length
var word = value.split(' ').length

document.getElementById('output').innerText = 'in this paragra contain words'+ word + ' & letters'+ letter

}