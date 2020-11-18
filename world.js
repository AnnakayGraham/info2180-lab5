

$(document).ready(function(){

    function Tester(city=""){
        var e=$("#country").val();
        $.ajax("world.php",{
            method: 'GET',
            data:{
                country:e,
                context:city
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

    $("#lookup-cities").click(function(){
        Tester("cities");
    });

    
});

  