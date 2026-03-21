function verify(){

  var number = document.getElementById("cert").value
                .replace(/\s+/g, '')
                .toUpperCase();

  if(number === "Q-2025-16401"){
    document.getElementById("result").innerHTML = "Certificate Verified ✅";
  } 
  else{
    document.getElementById("result").innerHTML = "Invalid Certificate ❌";
  }

}
