function verify(idInput) {

  var id = idInput || document.getElementById("cert").value.trim().toUpperCase();

  var data = {
    "EMS-30600": {
      name: "DEEPAK KUMAR DALEI",
      course: "Lead Auditor",
      issueDate: "30-01-2026",
      status: "Valid"
    }
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
  } else {
    document.getElementById("result").innerHTML =
      "<span style='color:red;'>Invalid Certificate ❌</span>";
  }
}

// 🔥 AUTO RUN when QR scanned
window.onload = function() {
  const params = new URLSearchParams(window.location.search);
  const id = params.get("id");

  if(id){
    verify(id.toUpperCase());
  }
};