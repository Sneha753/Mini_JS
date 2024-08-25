const input = document.getElementById("input");

function reverseStr(str) {
    return str.split("").reverse().join("")
}
function check() {
    const value = input.value;
    const reverse = reverseStr(value);

    if (value == reverse){
        document.getElementById("result").innerHTML = `${value} is a palindrome`
    }
    else {
        document.getElementById("result").innerHTML = `${value} is not a palindrome`
    }

    input.value = ""
}