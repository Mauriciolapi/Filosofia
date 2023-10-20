const principal = document.getElementById('principal');
const links = document.getElementById('links');

function change1(){
    links.style.display = 'flex';
    principal.style.opacity = '0';
    links.style.opacity = '1';
    principal.style.display = 'none'; 
}

function change2(){
    principal.style.display = 'flex';
    links.style.opacity = '0';
    principal.style.opacity = '1';
    links.style.display = 'none'; 
}