// Interactive Periodic Table
// Christian Solorio and John Wilhelm, April 2017
// Kenyon College

// Function to setup the XMLRequest object depending on Browser
 function setup() {
  if (window.XMLHttpRequest)
    {// code for IE7+, Firefox, Chrome, Opera, Safari
    xmlhttp=new XMLHttpRequest();
    }
  else
    {// code for IE6, IE5
    xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
    }
}

$(document).ready(function() {

	alert('JavaScript is working!');

	$('.atom').on( "click", function() {
		alert('Clicking works!');

		$.ajax({
		 url: 'allelements.xml', // name of file you want to parse
		 dataType: "xml",
		 success: parse,
		 error: function(){alert("Error: Something went wrong :'(");}
		 });
		 
	});
	
	function parse(document) {
		$(document).find("ATOM").each(function() {
		
			$("#elementName").append($(this).find('NAME').text());
			$("#symbol").append($(this).find('SYMBOL').text());	
			$("#density").append($(this).find('DENSITY').text());
			$("#specHeat").append($(this).find('SPECIFIC_HEAT_CAPACITY').text());
			$("#weight").append($(this).find('ATOMIC_WEIGHT').text());
			$("#electronConfig").append($(this).find('ELECTRON_CONFIGURATION').text());
			$("#ionPotential").append($(this).find('IONIZATION_POTENTIAL').text());
			$("#atomicNum").append($(this).find('ATOMIC_NUMBER').text());
			$("#electroNeg").append($(this).find('ELECTRONEGATIVITY').text());
			$("#thermConductivity").append($(this).find('OXIDATION_STATES').text());
			$("#atomRadius").append($(this).find('ATOMIC_RADIUS').text());
			$("#boilingPoint").append($(this).find('BOILING_POINT').text());
			$("#atomicVol").append($(this).find('ATOMIC_VOLUME').text());

		});
	}
}
);



