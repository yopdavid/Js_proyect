$(document).ready(function(){

    // Slider

    if(window.location.href.indexOf('index') > -1){

        $('.galeria').bxSlider({
            mode: 'fade',
            captions: false,
            slideWidth: 1200,
            resposive: true,
            pager: true
        });
    }
    

    // Post
    if(window.location.href.indexOf('index') > -1){

        var posts = [
            {
                title:'Prueba de titulo 1',
                date: 'Publicado el dia '+ moment().date() + " de "+moment().format("MMMM") + " del " + moment().format("YYYY"),
                content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec gravida ac lacus finibus suscipit. Nam sodales ullamcorper sodales. Fusce ac lectus malesuada, sodales mauris quis, elementum est. Morbi condimentum hendrerit libero sed maximus. Sed maximus, quam quis egestas posuere, ligula erat vulputate sem, sed mollis dui elit vel justo. Nam turpis est, faucibus nec quam a, sagittis gravida dui. Aliquam erat volutpat.'
            },
            {
                title:'Prueba de titulo 2',
                date:new Date(),
                content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec gravida ac lacus finibus suscipit. Nam sodales ullamcorper sodales. Fusce ac lectus malesuada, sodales mauris quis, elementum est. Morbi condimentum hendrerit libero sed maximus. Sed maximus, quam quis egestas posuere, ligula erat vulputate sem, sed mollis dui elit vel justo. Nam turpis est, faucibus nec quam a, sagittis gravida dui. Aliquam erat volutpat.'
            },
            {
                title:'Prueba de titulo 3',
                date:new Date(),
                content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec gravida ac lacus finibus suscipit. Nam sodales ullamcorper sodales. Fusce ac lectus malesuada, sodales mauris quis, elementum est. Morbi condimentum hendrerit libero sed maximus. Sed maximus, quam quis egestas posuere, ligula erat vulputate sem, sed mollis dui elit vel justo. Nam turpis est, faucibus nec quam a, sagittis gravida dui. Aliquam erat volutpat.'
            },
            {
                title:'Prueba de titulo 4',
                date:new Date(),
                content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec gravida ac lacus finibus suscipit. Nam sodales ullamcorper sodales. Fusce ac lectus malesuada, sodales mauris quis, elementum est. Morbi condimentum hendrerit libero sed maximus. Sed maximus, quam quis egestas posuere, ligula erat vulputate sem, sed mollis dui elit vel justo. Nam turpis est, faucibus nec quam a, sagittis gravida dui. Aliquam erat volutpat.'
            },
            {
                title:'Prueba de titulo 5',
                date:new Date(),
                content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec gravida ac lacus finibus suscipit. Nam sodales ullamcorper sodales. Fusce ac lectus malesuada, sodales mauris quis, elementum est. Morbi condimentum hendrerit libero sed maximus. Sed maximus, quam quis egestas posuere, ligula erat vulputate sem, sed mollis dui elit vel justo. Nam turpis est, faucibus nec quam a, sagittis gravida dui. Aliquam erat volutpat.'
            },
            
    
        ];
        posts.forEach((item, index) => {
            var post = `
            <article class="post">
                <h2>${item.title}</h2>
                <span class="date">${item.date}</span>
                <p>${item.content}</p>
                <a href="#" class="button-more">Leer mas</a>
            </article>
            `;
            $("#posts").append(post);
        });
    }
    

    // Selector de tema
    var theme = $("#theme");
    $("#to-green").click(function(){
        theme.attr("href", "css/green.css")
    });

    $("#to-red").click(function(){
        theme.attr("href", "css/red.css")
    });

    $("#to-blue").click(function(){
        theme.attr("href", "css/blue.css")
    });
    
    // Scroll arriba de la web
    $('.subir').click(function(e){
        e.preventDefault();

        $('html, body').animate({
            scrollTop: 0
        }, 500);

        return false;
    });

    // Login falso
    $("#login form").submit(function(){
       var form_name = $("#form_name").val();
       console.log(form_name);
       localStorage.setItem("form_name", form_name);
    });

    var form_name = localStorage.getItem("form_name");

    if(form_name != null && form_name != "undefined"){

        var about_parrafo = $("#about p");

        about_parrafo.html("<br><strong>Bienvenido, " +form_name+"</strong>");
        about_parrafo.append("<a href='#' id='logout'> Cerrar sesion</a>");

        $("#login").hide();

        $("#logout").click(function(){
            localStorage.clear();
            location.reload();
        });
    }
    // Acordeon
    if(window.location.href.indexOf('about') > -1){
        $("#acordeon").accordion();
    }
   
    // Reloj
    if(window.location.href.indexOf('reloj') > -1){

        setInterval(function(){
            var reloj = moment().format("h:mm:ss");
        
            $("#reloj").html(reloj);
        }, 1000);
        
        
    }
    // Validacion Se encuentra en http://www.formvalidator.net/  Pluggin
    if(window.location.href.indexOf('contact') > -1){

        $("form input[name='date']").datepicker({
            dateFormat: 'dd-mm-yy'
        });
    $.validate({
        lang: 'es',
        errorMessagePosition:'top',
        scrollToTopOnError: true
      });
    }
});