let nameInput = document.getElementById("name-input");

document.getElementById("send").addEventListener("click", function () {
  const name = nameInput.value;

  if (name == "") {
    document.getElementById("error-name").innerText = "Please enter your name";
  } else {
    document.getElementById("name").innerText = name;
  }
});

document.getElementById("formulir").addEventListener("submit", function (event) {
  event.preventDefault(); // Mencegah pengiriman formulir default

  //membuat tanggal sekarang
  const now = new Date();
  const dateTimeString = now.toLocaleString();

  // Ambil nilai dari formulir

  const nama = document.getElementById("nama").value;
  const tglLahir = document.getElementById("tgl_lahir").value;
  const jenisKelamin = document.querySelector('input[name="jenis_kelamin"]:checked').value;
  const pesan = document.getElementById("message").value;

  // Buat teks hasil inputan
  const resultText = `Date/time: ${dateTimeString}\n \nNama: ${nama}\nTanggal Lahir: ${tglLahir}\nJenis Kelamin: ${jenisKelamin}\nPesan:\n${pesan}`;

  // Tampilkan hasil inputan di text area
  document.getElementById("result").value = resultText;

  // Tampilkan pesan alert
  alert("Message Send!");
  document.getElementById("nama").value = "";
  document.getElementById("tgl_lahir").value = "";
  document.getElementById("message").value = "";
});
