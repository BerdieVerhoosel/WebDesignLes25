
$(".redPill").hover(function() {
    $(this).css("cursor", "pointer")
});

$(".bluePill").hover(function() {
    $(this).css("cursor", "pointer")
});

$(".redPill").click(function() {
    //$(".hiddenRed").css("color", "white")
    alert("You stay in Wonderland and see how deep the rabbit hole goes..")
});

$(".bluePill").click(function(){
    //$(".hiddenBlue").css("color", "white")   
    alert("The story ends. You wake up in your bed and believe whatever you want to believe.")
});

//Eigenlijk wilde ik dat jQuery de css zou veranderen. Dat lukte soort van: heel kort werd de tekst wit, om vervolgens weer te verdwijnen (van de <p>). Jammer dat het niet lukte, dan maar een alert.