// var userInput = prompt('ENTER YOUR FULL_NAME')
// var userInput_arr = userInput.split(' ')
// console.log('username', userInput)
// console.log('user input aray', userInput_arr)
// for (var i = 0; i < userInput_arr.length; i++) {
//     var word = userInput_arr[i]
//     console.log(word)
//     var capital = word.charAt(0).toUpperCase() + word.slice(1)
//     console.log('capital', capital)
//     userInput_arr[i] = capital
// }

// console.log('user array after updates==>', userInput_arr)
// userInput = userInput_arr.join(' ')
// console.log('username after updates', userInput)



// var user_Name = prompt('Enter your name')
// var userName_arr = user_Name.split(' ')
// for (var i = 0; i < userName_arr.length; i++) {
//     var word = userName_arr[i]
//     var capital = word.charAt(0).toUpperCase() + word.slice(1)
//     userName_arr[i] = capital
// }
// console.log('array after updates', userName_arr)
// user_Name = userName_arr.join(' ')
// console.log('user name after updates', user_Name)



// how to find vowels words in any Name 


// var num = prompt('enter your name')
// var vowels = 0
// var none_vowels = 0

// for (var i = 0; i < num.length; i++) {
//     console.log(num.charAt(i))
//     var sales = (num.charAt(i).toLowerCase())
//     if (sales == 'a' || sales == 'i' || sales == 'e' || sales == 'o' || sales == 'u'){
//         vowels++
//     }
//     else if(sales !== ' '){
//         none_vowels++
//     }
// }

// console.log('vowels are ', vowels, 'No vowels', none_vowels)








// var capitalLetters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
// var numbers = '1234567890'
// var password = prompt('Password')
// var minLength = false
// var capitalLetterHe = false
// var numberHe = false
// if (password.length >= 8) minLength = true
// for (var i = 0; i < password.length; i++) {
//     console.log(password[i])
//     if (capitalLetters.indexOf(password[i]) !== -1) {
//         capitalLetterHe = true
//     }
//     if (numbers.indexOf(password[i]) !== -1) {
//         numberHe = true
//     }
// }
// if (minLength && capitalLetterHe && numberHe) {
//     alert('Password is ok')
// } else {
//     alert('Password is not ok')
// }



var capital_alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
var number = '1234567890'
var User_password = prompt('Enter your password')
var minLength = false
var capital_letter = false
var numebr_han = false
if (User_password.length >= 8) minLength = true
for (var i = 0; i < User_password.length; i++) {
    console.log(User_password[i])
    if (capital_alphabet.indexOf(User_password[i]) !== -1) {
        capital_letter = true
    }
    if (number.indexOf(User_password[i] !== -1)) {
        numebr_han = true
    }
}
if (minLength && capital_letter && numebr_han) {
    alert('password is okay')
} else (
    alert('password is not okay')
)