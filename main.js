function putDisp(digit){
    document.getElementById("inp").value+=digit;
}

function clrDisp(){
    document.getElementById("inp").value='';
}

function calcnum(){
    var exp=document.getElementById("inp").value;
    try {
        const result = Function('"use strict";return (' + exp + ')')();
        document.getElementById("inp").value=result;
    } catch (error) {
        alert('Enter Correct Input');
        document.getElementById("inp").value='';
    }
}