window.onscroll = function(){
    pagina_scroll();
};

function selecionaimagem(x)/*parametro 'x' == this.id do elemento do DOM*/ {
    //console.log(x);
    var id = x;
    //console.log(id);
    $.getJSON('imagens_lib.json', function (data) {//get json file e guarda na 'data'
        for (var i = 0; i < data.length; i++) {//passa pela 'data' até a sua length
            if (data[i].id == id) {//se o obj index.id for igual ao id
                //console.log(data[i]);
                $('#titulo').html(data[i].titulo);//add to html, titulo
                $('#comentario').html(data[i].comentario);//add to html, comentario
            }
        }
    });
}

function pagina_scroll(){
    var logo = document.getElementById("footer_logo");

    var navbar = document.getElementById("nav");
    var navbar_top = navbar.offsetTop;
    var footer = document.getElementById("footer");
    var footer_top = footer.offsetTop;
    if(window.pageYOffset >= footer_top){
        logo.classList.remove("logo_desativar");
        logo.classList.add("logo_ativar");
    }else{
        logo.classList.remove("logo_ativar");
        logo.classList.add("logo_desativar");
    }

    if(window.pageYOffset >= navbar_top){
        navbar.classList.remove("nav_desativar");
        navbar.classList.add("nav_ativar")
    }else{
        navbar.classList.remove("nav_ativar");
        navbar.classList.add("nav_desativar");
    }
}