// masala 1

function stringTimes(str, n){
    return str.repeat(n)
}
stringTimes('Hi', 2)

// masala 2

function frontTimes(str, n){
    if(str.length < 3) {
      return str.repeat(n)
    } else {
      return str.slice(0, 3).repeat(n)
    }
}
frontTimes("Abs", 3)

// masala 3

function countXX(str){
    let num = 0;
    for(let i = 0; i < str.length; i++) {
      if(str.charAt(i) == "x" && str.charAt(i + 1) == "x") {
        num++
      } else {
        
      }
    }
    return num
};
countXX("xxxx")

// masala 4

function doubleX(str){
    let indexFirst = str.indexOf("x");
    if(str[indexFirst + 1] == 'x') {
      return true
    } else {
      return false
    }
}
doubleX("asliddin")

// masala 5

function stringBits(str){
    let num = '';
    for(let i = 0; i < str.length; i++) {
      if(i % 2 == 0) {
        num += str.charAt(i);
      }
    }
    return num
}
stringBits('javascript')

// masala 6

function stringSplosion(str){
  
    let text = '';
    for(let i = 0; i < str.length; i++) {
      text += str.slice(0, i)
    }
    return text
}
stringSplosion("javascript")