import fetch from "node-fetch";

fetch("https://www.fcbarcelona.com")
.then((response) => {
return response.text();
}).then((html) => {
  console.log(html)
})
