window.onscroll = function(){
    pagina_scroll();
};

function selecionaimagem(x)/*parametro 'x' == this.id do elemento do DOM*/ {
    //console.log(x);
    var id = x;
    //console.log(id);
    $.getJSON('imagens_lib.json', function (data) {//get json file e guarda na 'data'
        for (var i = 0; i < data.length; i++) {//passa pela 'data' até a sua length
            if (i == id) {//se i == id from parametro x
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

    var section1 = document.getElementById("section_movement1");
    var section1_top = section1.offsetTop;
    console.log("Section_top1",section1_top);

    var section2 = document.getElementById("section_movement2");
    var section2_top = section2.offsetTop;
    console.log("Section_top2",section2_top);

    var section3 = document.getElementById("section_movement3");
    var section3_top = section3.offsetTop;
    console.log("Section_top3",section3_top);

    console.log(window.pageYOffset)
    if(window.pageYOffset >= navbar_top){
        navbar.classList.remove("nav_desativar");
        navbar.classList.add("nav_ativar");
    }else{
        navbar.classList.remove("nav_ativar");
        navbar.classList.add("nav_desativar");
    }

    if(window.pageYOffset >= footer_top){
        logo.classList.remove("logo_desativar");
        logo.classList.add("logo_ativar");
    }else{
        logo.classList.remove("logo_ativar");
        logo.classList.add("logo_desativar");
    }

    if(window.pageYOffset+275 >= section1_top){
        console.log('s1 +');
        section1.classList.remove("text-color_off");
        section1.classList.add("text-color_ativar");
    }else{
        console.log('s1 -');
    }
    if(window.pageYOffset+275 >= section2_top){
        console.log('s2 +');
        section2.classList.remove("text-color_off");
        section2.classList.add("text-color_ativar");
    }else{
        console.log('s2 -');
    }
    if(window.pageYOffset+275 >= section3_top){
        console.log('s3 +');
        section3.classList.remove("text-color_off");
        section3.classList.add("text-color_ativar");
    }else{
        console.log('s3 -');
    }
}