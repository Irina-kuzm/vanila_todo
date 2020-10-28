//------------------------------------Переменные-----------------------------------------------------//

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//	
		var color = 'red'; //color div
		let i = 1; //in order to create a unique id div and checkbox
		let arr_color = []; //write the colors of the div so that you can refer to them later

//&&&&&&&&&&&&&& Функции &&&&&&&&&&&&&&//
		let str_item; 
		let colors = ['blue', '#ffa400', 'green', 'red', '#00d669','#530cff' ];
		let number_color = 0; // color number in the array
		let numer_id = 0; // to get a digit from id
		let div_id_clich_form = 0;
		let obj_div = 0;
		let new_checkbox = 0;
		let new_div = 0;
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//


//------------------------------------function-----------------------------------------------------//

function click_div(obj)
	{
		document.addEventListener("click", (colorClickHandler) => {	
		if(colorClickHandler.target.getAttribute('type') == 'checkbox')  {	
			//----------------//
			div_id_clich_form = colorClickHandler.target.parentNode.id; // Got the id of the div where the checkbox was clicked
			obj_div = document.getElementById(div_id_clich_form);
			numer_id = div_id_clich_form.replace('div',''); // to get a digit from id
			//----------------//
			if (colorClickHandler.target.checked)  {
				obj_div.style.backgroundColor = 'grey';
				obj_div.style.textDecoration = 'line-through';
			} else {
				obj_div.style.backgroundColor = arr_color[numer_id-1];
				obj_div.style.textDecoration = null;
			}		
		}
		}); 			
	}

function add_str (str_item) {
		str_item = document.getElementById('item').value; // Reading values ​​from the form
	    add_input();
		if (str_item == '') {
        	alert('Add new item');
    	}
		new_div = document.createElement('div'); 	
    	new_div.id = 'div' + i;
    	new_checkbox.id = 'box' + i;
    	if (new_checkbox.id = 'box' + i)  {
    		i++;
    	} 
    	new_div.appendChild(new_checkbox);
        new_div.appendChild(document.createTextNode(str_item));
        document.getElementById("add_new_input").appendChild(new_div);
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//
//Color selection
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//
		new_div.style.backgroundColor = color; 
		arr_color.push(color); 
}


	
function add_item (obj)  {	
	    add_str();
    	item.value = "";//clearing the line after sending
		}

function getRandom(min, max) {
  			return Math.random() * (max - min) + min;
		}
function add_input (str_item) {
		str_item = document.getElementById('item').value;
		new_checkbox = document.createElement("input"); 
		new_checkbox.setAttribute("type", "checkbox"); 
}

//------------------------------------logic-----------------------------------------------------//

//---------------------//
//click on color
//---------------------//

		document.addEventListener("click", (clickonacolor) => {
			if (clickonacolor.target.value !== 'Add')  {  // accepts values ​​not only of colors, but also add with an empty string
				color = clickonacolor.target.value;
				}
				console.log(clickonacolor.target.value);
		}); 

//---------------------//
//random color
//---------------------//
		document.addEventListener("click", (randomcolor) => {
		if(randomcolor.target.getAttribute('type') == 'text')  {	
			number_color = getRandom(0, colors.length);
			color = colors[parseInt(number_color)];    
		}
		}); 
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//
