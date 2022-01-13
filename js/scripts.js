$(document).ready(function() {
  $("form#animalForm").submit(function(event) {
    event.preventDefault();
    $("#lionfacts").hide();
    $("#tigerfacts").hide();
    $("#bearfacts").hide();
    $("#goldiefacts").hide();
    let animalChoice = $("input:radio[name=animals]:checked").val();
    console.log(animalChoice);


    if (animalChoice === "Lions") {
      $("#lionfacts").show();
    } else if (animalChoice === "Tigers") {
      $("#tigerfacts").show();
    } else if (animalChoice === "Bears") {
      $("#bearfacts").show();
    } else {
      $("#goldiefacts").show();
    }    
  });
});