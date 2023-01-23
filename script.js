var data = 0;
var text_val = 1;
var tip;
var final_val;
var tip_pp;
var total_pp;

document.getElementById("counting").innerText = data;

function increment() {
    data = data + 1;
    data = data < 0 ? 0 : data;
    document.getElementById("counting").innerText = data;
    return data;
}


function decrement() {
    data = data - 1;
    data = data < 0 ? 0 : data;
    document.getElementById("counting").innerText = data;
    return data;
}



function myFunc(a) {

    text_val = (document.getElementById('myText').value)
    tip = Number(text_val) * Number(a/100);
    final_val = Number(text_val) + Number(tip);
    total_pp = Number(final_val) / Number(data);
    fixed_pp = total_pp.toFixed(1);
    tip_pp = Number(tip) / Number(data);
    tFixed_pp = tip_pp.toFixed(1);

    return text_val, total_pp;

}

let ab = document.getElementById('display_rText-2');
let cd = document.getElementById('display_rText');
let reset = document.getElementById('reset');

function btn() {


    ab.innerHTML = '₹' + fixed_pp;
    cd.innerHTML = '₹' + tFixed_pp;

    if(reset.innerHTML == "RESET") {
        document.getElementById('myText').value = 0;
        ab.innerHTML = 0;
        cd.innerHTML = 0;
        document.getElementById("counting").innerHTML = 0;
        data = 0;
        reset.innerHTML = "Generate";
    } else {
        reset.innerHTML = "Reset";
    }
}


