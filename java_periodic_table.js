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

function ShowData(element) {
	testArea.innerText = 'This is element ' + element;
}


function RemoveData() {
	testArea.innerText = '';
}

$(document).ready(function() {
//$("#atom").mouseover(function() {

	alert('JS Works!');	

	function parse(document) {
		$(document).find("ATOM").each(function() {
		
			$("#content").append(
				'<p> Symbol: '+$(this).find('SYMBOL').text()+
				/*
				'<br />Name: '+$(this).find('NAME').text()+
				'<br /> Atomic Weight: '+$(this).find('ATOMIC_WEIGHT').text()+
				'<br /> Atomic Number'+$(this).find('ATOMIC_NUMBER').text()+
				'<br /> Oxidation States: '+$(this).find('OXIDATION_STATES').text()+
				'<br /> Boiling Point: '+$(this).find('BOILING_POINT').text()+
				'<br /> Density: '+$(this).find('DENSITY').text()+
				'<br /> Electron Configuration: '+$(this).find('ELECTRON_CONFIGURATION').text()+
				'<br /> Electronegativity: '+$(this).find('ELECTRONNEGATIVITY').text()+
				'<br /> Atomic Radius: '+$(this).find('ATOMIC_RADIUS').text()+
				'<br /> Atomic Volume: '+$(this).find('ATOMIC_VOLUME').text()+
				'<br /> Specific Heat Capacity: '+$(this).find('SPECIFIC_HEAT_CAPACITY').text()+
				'<br /> Ionization Potential: '+$(this).find('IONIZATION_POTENTIAL').text()+
				'<br /> Thermal Conductivity: '+$(this).find('THERMAL_CONDUCTIVITY').text()+
				*/
				'</p>'
			);	
		});
	}

	$.ajax({
		 url: 'allelements.xml', // name of file you want to parse
		 dataType: "xml",
		 success: parse,
		 error: function(){alert("Error: Something went wrong :'(");}
		 });
     

}
);

/*
$("#atom").hover(function() {
        var val = $(this).html();
        
        
        /*$.ajax({
		 url: 'allelements.xml', // name of file you want to parse
		 dataType: "xml",
		 success: parse,
		 error: function(){alert("Error: Something went wrong :'(");}
     });
     
     alert("Hover works!");
}
*/