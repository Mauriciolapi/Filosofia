let trabajoSeleccionado = null;
let animacionEnCurso = false;
const mensajeEtica = document.getElementById("mensajeEtica");

let count = 0;

function mostrarDetallesTrabajo(trabajoId) {

    const todosLosTrabajos = document.querySelectorAll(".job");
    
    for (const trabajo of todosLosTrabajos) {
        trabajo.style.border = "1px solid #ddd";
    }

    const trabajo = document.querySelector(`.job:nth-child(${trabajoId})`);
    trabajo.style.border = "2px solid red";
    trabajoSeleccionado = trabajo;

    const detalles = obtenerDatosDelTrabajo(trabajoId);

    document.getElementById("job-details").style.border = "1px solid #ddd";
    document.getElementById("job-details").innerHTML = `
        <div>
            <h2>Detalles del Trabajo</h2>
            <p>Nombre del trabajo: ${detalles.nombre}</p>
            <p>${detalles.descripcion}</p>
            <p>Fecha de inicio: ${detalles.fechaInicio}</p>
            <p>Costo estimado: ${detalles.costoEstimado}</p>
        </div>
        
        <div>
            <button class="confirm-button" id="confirm-button" onclick="verificarTrabajo(${trabajoId})">Comenzar</button>
            <button class="cancel-button" id="cancel-button" onclick="mostrarGood()">Rechazar</button>
        </div>
    `;

    if (trabajoSeleccionado) {
        trabajoSeleccionado.style.border = "none";
    }

    const currentDiv = document.querySelectorAll(".job");
    for (const current of currentDiv) {
        if (current.innerText === `Trabajo ${trabajoId}`) {
            current.style.border = "2px solid red";
            trabajoSeleccionado = current;
            break;
        }
    }

}

function verificarTrabajo(trabajoId) {
    if (trabajoId === 2) {
        mostrarError("smiling-face-with-horns.svg");
    } else {
        mostrarError();
    }
}

const trabajos = ["", "Robo de datos", "Hacking", "Robo de código", "Phishing", "Intrusiones en la Red", "Creación de Malware", "Difamación en foros", "Suplantación de Identidad", "Monitoreo de dispositivos", "Falsificación de Documentos", "Ciberextorsión", "Distribuición de contenido ilegal"]

const descTrabajos = ["", "Obtener información confidencial de manera no autorizada, como contraseñas o datos personales.", "Acceder ilegalmente a sistemas o redes informáticas con el propósito de robar información o causar daño.", "Copiar o robar el código fuente de softwares o aplicaciones sin autorización.", "Engañar a personas para que revelen información confidencial, a menudo a través de correos electrónicos engañosos.", "Acceder ilegalmente a sistemas informáticos para obtener información o causar daño.", "Desarrollar software malicioso, como virus o troyanos, para dañar sistemas o robar datos.", "Publicar información falsa y perjudicial sobre personas/empresas en línea.", "Hacerse pasar por otra persona en línea con la intención de engañar a otros.", "Vigilar o rastrear a personas sin su consentimiento mediante la intrusión en sus dispositivos o redes.", "Crear o manipular documentos digitales, como certificados o contratos.", "Amenazar con dañar sistemas o revelar información privada a menos que se deposite dinero/bienes.", "Compartir o distribuir contenido ilegal en línea, como material de abuso infantil o información clasificada."];

function obtenerDatosDelTrabajo(trabajoId) {
    return {
        nombre: `${trabajos[trabajoId]}`,
        descripcion: `${descTrabajos[trabajoId]}`,
        fechaInicio: `14/11/2023`,
        costoEstimado: `$30000`
    };
}

let errorTimeout;
document.getElementById("error-message").style.display = "none";

function mostrarError(svg) {
    const errorMessage = document.getElementById("error-message");

    if (errorMessage.style.display === "flex") {
        clearTimeout(errorTimeout);
    }

    errorMessage.style.display = "flex";

    if (svg != null) {
        setTimeout(() => {
            document.getElementById("imgError").style.opacity = "0";
            document.getElementById("imgCamera").style.opacity = "0";
            setTimeout(() => {
                document.getElementById("devil").style.opacity = "1";
                setTimeout(() => {
                    location.href = "../hacking/index.html";   
                }, 1000);
            }, 400);
            errorTimeout = setTimeout(function () {
                errorMessage.style.display = "none";
            }, 2000);
        }, 2000);
    }else{
        errorTimeout = setTimeout(function () {
            errorMessage.style.display = "none";
            if(mensajeEtica.style.opacity = "0"){
                mensajeEtica.style.opacity = "1";
            }
            
        }, 2000);
        
    }    
}

let goodTimeout;
document.getElementById("good-message").style.display = "none";

function mostrarGood() {
    const goodMessage = document.getElementById("good-message");

    if (goodMessage.style.display === "flex") {
        clearTimeout(goodTimeout);
    }

    goodMessage.style.display = "flex";

    goodTimeout = setTimeout(function () {
        goodMessage.style.display = "none";
    }, 2000);
}



function cerrar(){
    mensajeEtica.style.opacity = "0";
}