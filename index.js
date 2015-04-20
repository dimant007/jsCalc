/**
 * Created by ditry_000 on 20.04.2015.
 */
var a, b;
function setValues() {
    a = Number(document.getElementById("a").value);
    b = Number(document.getElementById("b").value);
}
function sum() {
    setValues();
    result = a + b;
    alert("The sum is equals to " + result);
}
function rest() {
    setValues();
    result = a - b;
    alert("The sum is equals to " + result);
}
function mult() {
    setValues();
    result = a * b;
    alert("The sum is equals to " + result);
}
function div() {
    setValues();
    result = a / b;
    alert("The sum is equals to " + result);
}

function num(n){
    document.form.t1.value = document.form.t1.value + n;
}
function num(n){
    document.form.t2.value = document.form.t2.value + n;
}

function fact(){
    n = Number(document.form.t1.value)
    if(errorchecking(n) == false){
        return;
    }

    var answer = 1;
    for(i = n;i >= 2; i--){
        answer = answer*i;
    }
    document.form.t1.value = answer;
}

function operator(op){
    oper = op;
    num = document.form.t1.value;
    document.form.t1.value = "";
}

function doesthejob(n1, n2, op){
    if(op == "+"){
        document.form.t1.value = n1 + n2;
    }
    else if(op == "-"){
        document.form.t1.value = n1 - n2;
    }
    else if(op == "*"){
        document.form.t1.value = n1 * n2;
    }
    else if(op == "/"){
        document.form.t1.value = n1 / n2;
    }
}