const capitall = () => {
    let val = document.getElementById("custName").value;
    let amplify = val.toUpperCase();
    document.getElementById("output").textContent = amplify;    
}

const small = () => {
    let val = document.getElementById("custName").value;
    let diminution = val.toLowerCase();
    document.getElementById("output").textContent = diminution;    
}
