
function Func(obj)
	{


		document.addEventListener("click", (e) => {
			
			
		if(e.target.getAttribute('type') == 'checkbox') {
			let b_i = e.target.parentNode.id; // Получила id div, в котором нажат checkbox
			var b_id = d.getElementById(b_i);
			let n_color = b_i.replace('div','');
			colorr = m_color[n_color-1];
			console.log(colorr);
			if (e.target.checked)  {
				b_id.style.backgroundColor = null;
				b_id.style.backgroundColor = 'grey';
				b_id.style.textDecoration = 'line-through';
			}
			else {
				b_id.style.backgroundColor = null;
				b_id.style.backgroundColor = colorr;
				b_id.style.textDecoration = null;
			}
			
			
			
				
		}

		}); 
			

	}
	




	var color = 'red';
	let d = document;
	let i = 1;
	let m_color = [];

		//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//
		//клик на цвет
		//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//
	document.addEventListener("click", (e) => {
		  if(e.target.getAttribute('type') == 'button')
			if (e.target.value !== 'Add')  {
				color = e.target.value;
				m_color.push(color);
				}

		}); 

		//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//
		//Рандомный цвет
		//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//
	document.addEventListener("click", (e) => {
		if(e.target.getAttribute('type') == 'text')  {

			let colors = ['blue', '#ffa400', 'green', 'red', '#00d669','#530cff' ];

				function getRandom(min, max) {
  					return Math.random() * (max - min) + min;
				}

			let number = getRandom(0, colors.length);
			color = colors[parseInt(number)];
			m_color.push(color);
		    
		}
	}); 




function Add_item (obj)
	{
		
			
	    var div_new_div = d.getElementById("add_new_div"); //обращение к div на странице
	    var div_new_input = d.getElementById("add_new_input"); //обращение к div на странице

		//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//
		//Добавление checkbox
		//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//
		let str_item;		
	    str_item = d.getElementById('item').value; // Считываем значения с формы
	    if (str_item == '') {
        	alert('Add new item');
        }
        else {

		var box = d.createElement("input"); //Создание инпут
		var div = d.createElement('div');
    	box.setAttribute("type", "checkbox"); //определение типа инпут
    	div.id = 'div' + i;
    	box.id = 'box' + i;
    	if (box.id = 'box' + i)  {
    		i++;
    	} 


    	div.appendChild(box);
        div.appendChild(d.createTextNode(str_item));
        d.getElementById("add_new_input").appendChild(div);
    	item.value = "";//очистка строки после отправки

		//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//
		//Выбор цвета
		//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

		div.style.backgroundColor = color;  
	}
	}

