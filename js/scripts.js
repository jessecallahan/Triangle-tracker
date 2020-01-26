$(document).ready(function () {
    $("form#triangle").submit(function (event) {
        event.preventDefault();
        var sideaInput = parseInt($(".sideA").val());
        var sidebInput = parseInt($(".sideB").val());
        var sidecInput = parseInt($(".sideC").val());
        console.log(sideaInput);

if (isNaN(sideaInput) || isNaN(sidebInput) || isNaN(sidecInput) ){
    $("#outputb").show();
    $("#outputa").hide();
    $("#outputc").hide();
    $("#outputd").hide();
}
else if (sideaInput === 0 || sidebInput === 0 || sidecInput === 0 ){
    $("#outputb").show();
    $("#outputa").hide();
    $("#outputc").hide();
    $("#outputd").hide();
}
        else if (sideaInput === sidebInput && sidebInput === sidecInput) {
         $("#outputa").show();
         $("#outputb").hide();
         $("#outputc").hide();
         $("#outputd").hide();
            
        }
        else if (sideaInput + sidebInput <= sidecInput || sideaInput + sidecInput <= sidebInput || sidebInput + sidecInput <= sideaInput){
            $("#outputb").show();
         $("#outputa").hide();
         $("#outputc").hide();
         $("#outputd").hide();
        }
        else if (sideaInput != sidebInput && sideaInput != sidecInput && sidebInput != sidecInput) {
        $("#outputc").show();
        $("#outputb").hide();
        $("#outputa").hide();
        $("#outputd").hide();

        }
       
        else {$("#outputd").show();
        $("#outputb").hide();
        $("#outputc").hide();
        $("#outputa").hide();}
   
    });

});
