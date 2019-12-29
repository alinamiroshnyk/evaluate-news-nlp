import { checkForName } from './js/nameChecker'
import { handleSubmit } from './js/formHandler'
import "./styles/index.scss";

if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
      navigator.serviceWorker.register('/service-worker.js');
    });
  }

document.getElementById("submit-button").onclick = function (e) {
    e.preventDefault()
    console.log("hey")
    const link = document.getElementById("link").value
    console.log(link)
    fetch('http://localhost:3000/evaluate', {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          },
        body: JSON.stringify({
            link
        })
    }).then((res) => res.json())
    .then((res) => {
        console.log(res)
        const output = document.getElementById("results");
        output.innerHTML = res.text;
    }) 
}
