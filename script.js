function Func(obj)
	{
		//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//
    	//Задание цвета
    	//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

    	

		

	}

function Add_item (obj)
	{

		//Добавление строки
		//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//
		let d = document;
		let str_item;
		// Считываем значения с формы
	    str_item = d.getElementById('item').value;
	    // Находим нужную таблицу
    	var tbody = d.getElementById('tab1').getElementsByTagName('TBODY')[0];
    	// Создаем строку таблицы и добавляем ее
    	var row = d.createElement("TR");
    	tbody.appendChild(row);

    	// Создаем ячейки в вышесозданной строке// и добавляем тх
    	var td1 = d.createElement("TD");
    	var td2 = d.createElement("TD");

    	row.appendChild(td1);
    	row.appendChild(td2);

    	// Наполняем ячейки
    	td2.innerHTML = str_item;


    	//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//
    	//button
    	//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//
    	var x = d.createElement("input");
    	x.setAttribute("type", "checkbox");
    	td1.appendChild(x);
		item.value = "";

		f.addEventListener("click", (e) => {
		  if(e.target.getAttribute('type') == 'button')
		    //console.log(e.target.value);
			if (e.target.value !== 'Add')  {
				let k = e.target.value;
				console.log(k);
				
				}
		});



	}