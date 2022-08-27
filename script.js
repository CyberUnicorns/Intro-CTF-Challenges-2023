window.addEventListener("load", main)
function main()
{
    //get the last p
    //set a timer
    let p = document.createElement("p");
    p.innerHTML = "try /secret.html";
    window.setTimeout(temp, 30000);
    function temp(){
        document.body.appendChild(p)
    }
}
