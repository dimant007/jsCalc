/**
 * Created by ditry_000 on 20.04.2015.
 */
function number(n){
    document.form.display.value = document.form.display.value + n;
}

var num, oper;

function acting(act){
    oper = act;
    num = document.form.display.value;
    document.form.display.value = "";
}
function equal(){
    calculating(parseFloat(num), parseFloat(document.form.display.value), oper);
}
function calculating(n1, n2, act){
    if(act == "+"){
        document.form.display.value = n1 + n2;
    }
    else if(act == "-"){
        document.form.display.value = n1 - n2;
    }
    else if(act == "*"){
        document.form.display.value = n1 * n2;
    }
    else if(act == "/"){
        document.form.display.value = n1 / n2;
    }
}



