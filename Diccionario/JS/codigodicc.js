$(document).ready(function(){
    $(".foto").click(function(){
        $(".desc").slideToggle("slow")
    })

    $(function(){
        $(".elemento").click(function(){
            $(".elemento").removeClass("resaltado");
            $(this).addClass("resaltado")

        })

    })
    $("#m1").click(function(){
        $("div").filter("#m1"),addClass("resaltado");
    })

    $("#tbxbuscar").on("keyup", function(){
        let valor=$(this).val().toLowerCase();
        $(".elemento").filter(function(){
            $(this).toggle($(this).text().toLowerCase().indexOf(valor) > -1)
        })
    })  
})



