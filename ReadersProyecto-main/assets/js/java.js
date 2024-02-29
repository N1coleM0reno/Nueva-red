//sidebar 
const menuItems = document.querySelectorAll('.menu-item');

//theme
const theme = document.querySelector('#theme');
const themeModal = document.querySelector('.customize-theme');
const fontSizes = document.querySelectorAll('.choose-size span');
var root = document.querySelector(':root')

//theme/display customization

// abrir modal
const openThemeModal = () => {
    themeModal.style.display = 'grid';
}

//cerrar modal
const closeThemeModal = (e) => {
    if(e.target.classList.contains('customize-theme')){
        themeModal.style.display = 'none';
    }
}

//cerca modal
themeModal.addEventListener('click', closeThemeModal);

theme.addEventListener('click', openThemeModal);
 
//fonts
fontSizes.forEach(size => {
    let fontSize;

    size.addEventListener('click', () => {

        if(size.classList.contains('font-size-1')){
            fontSize = '10px';
            root.style.setProperty('----sticky-top-left', '5.4rem');
            root.style.setProperty('----sticky-top-right', '5.4rem');
        }
        else if(size.classList.contains('font-size-2')){
            fontSize = '13px';
            root.style.setProperty('----sticky-top-left', '5.4rem');
            root.style.setProperty('----sticky-top-right', '-7rem');
        }
        else if(size.classList.contains('font-size-3')){
            fontSize = '16px';
            root.style.setProperty('----sticky-top-left', '-2rem');
            root.style.setProperty('----sticky-top-right', '-17rem');
        }
        else if(size.classList.contains('font-size-4')){
            fontSize = '19px';
            root.style.setProperty('----sticky-top-left', '-5rem');
            root.style.setProperty('----sticky-top-right', '-25rem');
        }
        else if(size.classList.contains('font-size-5')){
            fontSize = '22px';
            root.style.setProperty('----sticky-top-left', '-12rem');
            root.style.setProperty('----sticky-top-right', '-35rem');
        }

     //font the root 
    document.querySelector('html').style.fontSize = fontSize;
    });

});

function agregarEtiqueta() {
    var input = document.getElementById("create-post");
    var texto = input.value.trim(); // Obtener el texto ingresado por el usuario eliminando espacios en blanco al inicio y al final
    var etiqueta = "#etiqueta "; // Definir la etiqueta deseada (en este caso, #etiqueta)

    // Agregar la etiqueta solo si el campo de entrada está vacío
    if (texto === "") {
        input.value = etiqueta; // Agregar la etiqueta al campo de entrada
    }
}

