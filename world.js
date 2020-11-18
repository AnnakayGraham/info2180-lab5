$(document).ready(function(){

    function Tester(){
        var e=$("#country").val();
        $.ajax("world.php",{
            method: 'GET',
            data:{
                country:e,
                
            }
        }).done(function(i){
            let c=i;
            $("#result").html(c);
        }).fail(function(){
            console.log("Issue with request")
        });
    }

    $("#lookup").click(function(){
        Tester();
    });

   

    
});
  