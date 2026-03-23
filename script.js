function verify() {
  var id = document.getElementById("cert").value.trim().toUpperCase();

  var data = {
    "Q-2026-16549": {
      name: "MOHAMMAD BADRE MONIR KHAN",
      course: "Lead Auditor",
      issueDate: "25-02-2026",
      status: "Valid"
    }
    // Q-2025-16323 intentionally not included → will show Invalid
  };

  if(data[id]){
    document.getElementById("result").innerHTML =
      "<h3 style='color:green;'>Certificate Verified ✅</h3>" +
      "<div class='result-card'>" +
      "<div class='box'><strong>Name:</strong><br>" + data[id].name + "</div>" +
      "<div class='box'><strong>Course:</strong><br>" + data[id].course + "</div>" +
      "<div class='box'><strong>Certificate Number:</strong><br>" + id + "</div>" +
      "<div class='box'><strong>Issue Date:</strong><br>" + data[id].issueDate + "</div>" +
      "<div class='box'><strong>Status:</strong><br>" + data[id].status + "</div>" +
      "</div>";
  }
  else {
    document.getElementById("result").innerHTML =
      "<span style='color:red;'>Invalid Certificate ❌</span>";
  }
}