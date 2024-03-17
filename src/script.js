document.getElementById("form").addEventListener("submit", function (event) {
  event.preventDefault();
  var name = document.getElementById("name").value;
  fetch("/", {
    method: "POST",
    body: JSON.stringify({ name: name }),
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then(function (response) {
      if (!response.ok) {
        throw new Error("Erro HTTP, status " + response.status);
      }
      return response.json();
    })
    .then(function (data) {
      document.getElementById("response").innerText = data.message;
    })
    .catch(function (error) {
      console.error("Erro:", error);
      document.getElementById("response").innerText = "Erro: " + error.message;
    });
});
