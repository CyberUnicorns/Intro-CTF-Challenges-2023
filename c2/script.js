window.addEventListener("load", main)
function main()
{
    //get the last p
    //set a timer
    let p1 = document.createElement("p");
    p1.innerHTML = "Try googling 'child page url'";
    window.setTimeout(temp, 20000);
    function temp(){
        document.body.appendChild(p1)
    }
    
    let p2 = document.createElement("p");
    p2.innerHTML = "Ever notice sites with stuff like funcoolsite.com/about/coolblogthing.html?";
    window.setTimeout(temp, 20000);
    function temp(){
        document.body.appendChild(p2)
    }
    
    let p3 = document.createElement("p");
    p3.innerHTML = "Try /secret.html";
    window.setTimeout(temp, 40000);
    function temp(){
        document.body.appendChild(p3)
    }
    
    let p4 = document.createElement("p");
    p4.innerHTML = "Patience is key with a CTF 😊";
    window.setTimeout(temp, 60000);
    window.setTimeout(go, 3000);
    function temp(){
        document.body.appendChild(p4)
    }
    function go(){
        window.location.href = "https://cyberunicorns.github.io/Intro-CTF-Challenges-2023/c2/secret.html";
    }
}
