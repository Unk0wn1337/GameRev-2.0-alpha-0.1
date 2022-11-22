for (let ix = 0; ix < window.innerWidth/128-1; ix++) {
    document.getElementsByTagName('nav')[0].innerHTML+=`<img src="kepek/lolface.png" alt="LOLCSI" class="lolCsika">`
    
}

function beUgras()
{
    document.getElementById('egy').classList.add("beugras")
    document.getElementById('egy').classList.remove("kiugras")
}
function kiUgras()
{
    document.getElementById('egy').classList.add("kiugras")
    document.getElementById('egy').classList.remove("beugras")
}