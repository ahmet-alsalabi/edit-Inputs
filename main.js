
const capitall = () => {
    let val = document.getElementById("custName").value;
    let amplify = val.toUpperCase();
    document.getElementById("cap").textContent = amplify;    

}


const small = () => {
    let val = document.getElementById("custName").value;
    let diminution = val.toLowerCase();
    document.getElementById("sma").textContent = diminution;    

}

