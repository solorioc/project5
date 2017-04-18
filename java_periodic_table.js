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

	//alert('JavaScript is working!');

		$.ajax({
			 url: 'allelements.xml', // name of file you want to parse
			 dataType: "xml",
			 success: getXML, 
		 	 error: function(){alert("Error: Something went wrong :'(");}
		 });  
		 
	$('.atom').on("click", function() {
		//alert('Clicking works!');
		var mass = $(this).find('.mass').text();
		//alert('Mass is: ' + mass);
		
		var symNode = $(XMLRoot).find("ATOMIC_WEIGHT:contains('"+mass+"')");
		
		//alert(symNode.text());
		
		var atomNode = symNode.parent();
		
		$("#elementName").html($(atomNode).find('NAME').text());
		$("#symbol").html($(atomNode).find('SYMBOL').text());
		$("#density").html($(atomNode).find('DENSITY').text()+" g/cm^3");
		$("#specHeat").html($(atomNode).find('SPECIFIC_HEAT_CAPACITY').text()+" J/g/K");
		$("#weight").html($(atomNode).find('ATOMIC_WEIGHT').text()+" amu");
		$("#electronConfig").html($(atomNode).find('ELECTRON_CONFIGURATION').text());
		$("#ionPotential").html($(atomNode).find('IONIZATION_POTENTIAL').text());
		$("#atomicNum").html($(atomNode).find('ATOMIC_NUMBER').text());
		$("#electroNeg").html($(atomNode).find('ELECTRONEGATIVITY').text());
		$("#thermConductivity").html($(atomNode).find('THERMAL_CONDUCTIVITY').text()+" W/m/K");
		$("#oxStates").html($(atomNode).find('OXIDATION_STATES').text());
		$("#atomRadius").html($(atomNode).find('ATOMIC_RADIUS').text()+" &Aring");
		$("#boilingPoint").html($(atomNode).find('BOILING_POINT').text()+" K");
		$("#atomicVol").html($(atomNode).find('ATOMIC_VOLUME').text()+" cm^3/mole");
		$("#meltingPoint").html($(atomNode).find('MELTING_POINT').text()+" K");
		$("#covalentRadius").html($(atomNode).find('Covalent_RADIUS').text()+" &Aring");
		$("#hoFusion").html($(atomNode).find('HEAT_OF_FUSION').text()+" kJ/mole");
		$("#hoVape").html($(atomNode).find('HEAT_OF_VAPORIZATION').text()+" kJ/mole");
		
		

	});
});

function getXML(document) {
		XMLRoot = document;
		//alert('Loaded XML!');
}
