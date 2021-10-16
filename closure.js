/*function init(){
    var a=0;
    function display(){
        return a=a+1
    }
    return display
}
let increament =init()
console.log(increament())
console.log(increament())
console.log(increament())*/


/*function init(){
    var a=0;
    function display(){
        return a++
    }
    return display
}
let increament =init()
console.log(increament())
console.log(increament())
console.log(increament())*/


function init(){
    var a=0;
    function display(){
        return ++a
    }
    return display
}
let increament =init()
console.log(increament())
console.log(increament())
console.log(increament())