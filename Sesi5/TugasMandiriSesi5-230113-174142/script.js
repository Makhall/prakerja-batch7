function cetakPesan() {
  var pesan = document.getElementById("pesan").value;
  var jumlah = document.getElementById("jumlah").value;
  var output = "";

  for (var i = 0; i < jumlah; i++) {
    var nmr = i + 1;
    output += nmr + ". " + pesan + "<br>";
  }

  document.getElementById("output").innerHTML = output;
}
