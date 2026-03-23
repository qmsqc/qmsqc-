function verify(){

  var id = document.getElementById("cert").value.trim().toUpperCase();

  var data = {
    "Q-2025-16401": {
      name: "ANANTHA PRABU K",
      course: "Lead Auditor",
      issueDate: "19/03/2026",
      status: "Valid"
    }
  };

  if(data[id]){
    document.getElementById("result").innerHTML =
    "Certificate Verified ✅ <br><br>" +
    "Name: " + data[id].name + "<br>" +
    "Course: " + data[id].course + "<br>" +
    "Certificate Number: " + id + "<br>" +
    "Issue Date: " + data[id].issueDate + "<br>" +
    "Status: " + data[id].status;
  }
  else{
    document.getElementById("result").innerHTML = "Invalid Certificate ❌";
  }

}
