window.addEventListener("load", main)
function main() {
    const messages = ["Try googling 'child page url'", "Ever notice sites with stuff like funcoolsite.com/about/coolblogthing.html?", "Try /secret.html", "Patience is key with a CTF 😊"];
    let p = document.createElement("p");
    let i = 0;
    p.innerHTML = messages[i];
    let timer = window.setInterval(temp, 20000);
    function temp() {
        if (i < 4) {
            p.innerHTML = messages[i++];
            document.body.appendChild(p);
            p = document.createElement("p");
        }
        if (i === 2) {
            clearInterval(timer);
            timer = window.setInterval(temp, 40000);
        }
        if (i === 3) {
            clearInterval(timer);
            timer = window.setInterval(temp, 60000);
        }
        if (i >= 4){
            timer = window.setTimeout(go, 3000);
        }       
    }
    function go() {
        window.location.href = "https://cyberunicorns.github.io/Intro-CTF-Challenges-2023/c2/secret.html";
    }

}
