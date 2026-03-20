function verify(){

  var number = document.getElementById("cert").value
                .replace(/\s+/g, '')
                .toUpperCase();

  if(number === "EMS-30752"){
    document.getElementById("result").innerHTML = "Certificate Verified ✅";
  } 
  else{
    document.getElementById("result").innerHTML = "Invalid Certificate ❌";
  }

}
