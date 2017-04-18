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

var XMLRoot;

$(document).ready(function() {

	alert('JavaScript is working!');

		$.ajax({
			 url: 'allelements.xml', // name of file you want to parse
			 dataType: "xml",
			 success: getXML, 
		 	 error: function(){alert("Error: Something went wrong :'(");}
		 });  
		 
	$('.atom').on("click", function() {
		alert('Clicking works!');
		var mass = $(this).find('.mass').text();
		alert('Mass is: ' + mass);
		
		var symNode = $(XMLRoot).find("ATOMIC_WEIGHT:contains('"+mass+"')");
		
		alert(symNode.text());
		
		var atomNode = symNode.parent();
		
		$("#elementName").html($(atomNode).find('NAME').text());
		$("#symbol").html($(atomNode).find('SYMBOL').text());
		$("#density").html($(atomNode).find('DENSITY').text());
		$("#specHeat").html($(atomNode).find('SPECIFIC_HEAT_CAPACITY').text());
		$("#weight").html($(atomNode).find('ATOMIC_WEIGHT').text());
		$("#electronConfig").html($(atomNode).find('ELECTRON_CONFIGURATION').text());
		$("#ionPotential").html($(atomNode).find('IONIZATION_POTENTIAL').text());
		$("#atomicNum").html($(atomNode).find('ATOMIC_NUMBER').text());
		$("#electroNeg").html($(atomNode).find('ELECTRONEGATIVITY').text());
		$("#thermConductivity").html($(atomNode).find('THERMAL_CONDUCTIVITY').text());
		$("#oxStates").html($(atomNode).find('OXIDATION_STATES').text());
		$("#atomRadius").html($(atomNode).find('ATOMIC_RADIUS').text());
		$("#boilingPoint").html($(atomNode).find('BOILING_POINT').text());
		$("#atomicVol").html($(atomNode).find('ATOMIC_VOLUME').text());

	});
});

function getXML(document) {
		XMLRoot = document;
		//alert('Loaded XML!');
}

/*function parse(document) {
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
}*/

