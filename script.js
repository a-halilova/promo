//Preloader
function loadData() {
	return new Promise((resolve, reject) => {
	  setTimeout(resolve, 3000);
	})
  }
  loadData()
  .then(() => {
	let preloader = document.getElementById('preloaderContainer');
	preloader.classList.add('hidden');
	preloader.classList.remove('visible');
	});
  
// о магазине (2 страница)
function studija() {
 window.location = "text.html";
}

//Слайдер
let links = document.querySelectorAll(".itemLinks");
let wrapper = document.querySelector("#wrapper");
// activeLink обеспечивает метку для активного элемента
let activeLink = 0;
// устанавливаем отслеживание событий
for (let i = 0; i < links.length; i++) {
  let link = links[i];
  link.addEventListener('click', setClickedItem, false);
// определяем элемент для activeLink
  link.itemID = i;
}
// устанавливаем первый элемент в качестве активного
links[activeLink].classList.add("active");

function setClickedItem(e) {
  removeActiveLinks();
  let clickedLink = e.target;
  activeLink = clickedLink.itemID;
  changePosition(clickedLink);
}

function removeActiveLinks() {
  for (let i = 0; i < links.length; i++) {
  	links[i].classList.remove("active");
  }
}
// Обработчик изменяет позицию слайдера, после того, как мы убедились, что в качестве активной обозначена нужная нам ссылка.
function changePosition(link) {
  link.classList.add("active");
  let position = link.getAttribute("data-pos");
  wrapper.style.left = position;
}
//автоматическай смена слайдов
let timeoutID;
function startTimer() {
  timeoutID = window.setInterval(goToNextItem, 3000);
}
startTimer();
function resetTimer() {
  window.clearInterval(timeoutID);
  startTimer();
}
function goToNextItem() {
  removeActiveLinks();
  if (activeLink < links.length - 1) {
    activeLink++;
  } else {
    activeLink = 0;
  }
  let newLink = links[activeLink];
  changePosition(newLink);
}

//Обработка замены фото (блок наши услуги)
window.onload = function()
{
let img = document.getElementById ("bl1");
let imgOne = document.getElementById ("bl2");
let imgTwo = document.getElementById ("bl3");
let imgTree = document.getElementById ("bl4");
let old = img.src;
let oldOne = imgOne.src;
let oldTwo = imgTwo.src;
let oldTree = imgTree.src;
let zamena = new Image();
let zamenaOne = new Image(); 
let zamenaTwo = new Image();
let zamenaTree = new Image();
	zamena.src = "imag/slide7.jpg";
	zamenaOne.src = "imag/happy_birthday1.jpg";
	zamenaTwo.src = "imag/balloon-1662573_1280.jpg";
	zamenaTree.src = "imag/card4.jpg";
	zamena.addEventListener("load", function(){
		img.onmouseover = function(){ 
		this.src = zamena.src; 
		};
		img.onmouseout = function(){ 
		this.src = old; 
		};
	})
	zamenaTwo.addEventListener("load",function(){
		imgTwo.onmouseover = function(){
		this.src = zamenaTwo.src;
		};
		imgTwo.onmouseout = function(){
		this.src = oldTwo;
		};
	})
	zamenaOne.addEventListener("load",function(){
		imgOne.onmouseover = function(){ 
		this.src = zamenaOne.src; 
		};
		imgOne.onmouseout = function(){ 
		this.src = oldOne; 
		};
	})
	zamenaTree.addEventListener("load",function(){
		imgTree.onmouseover = function(){ 
		this.src = zamenaTree.src; 
		};
		imgTree.onmouseout = function(){ 
		this.src = oldTree; 
		};
	})
}
	
//Отработка кнопки "Подробнее" (появление текста и скрытие по клику)
let salesDiv = document.getElementById("sales");
let butOne = document.getElementById("but1");
  function buy(){
	sales.innerHTML = 'Все молодые пары хотят, чтобы их свадьба была идеальной, и стараются учитывать в организации мероприятия все тонкости. Особое внимание привлекает образ невесты – в нем нет никаких второстепенных компонентов, которыми можно пренебречь. И одной из важных деталей этого образа становится именно свадебный букет.</br><input type="button1" value="Закрыть" onclick="cancel()" />';
	}
function cancel(){
	sales.innerHTML = '<input type="button1" value="Подробнее" onclick="buy()" />';
	}

let salesDivOne = document.getElementById("sales1");
let butTu = document.getElementById("but2");
function buyOne(){
	sales1.innerHTML = 'Букет цветов на день рождения с доставкой призван выручить вас в ситуации, когда вы не успели подготовиться к празднику лучшего друга или другого важного для вас человека. Тем более что без красивых свежих растений не обходится ни одно торжество или праздник.</br><input type="button2" value="Закрыть" onclick="cancelOne()" />';
	} 
function cancelOne(){
	sales1.innerHTML = '<input type="button2" value="Подробнее" onclick="buyOne()" />'
	}

let salesDivTu = document.getElementById("sales2");
let butTru = document.getElementById("but3");
function buyTu(){
	sales2.innerHTML = ' Заказав в нашем интернет-магазине композицию, фонтан, букет, оформление комнаты или другого помещения вы сможете удивить, вызвать восторг у вашего ребенка, друзей, родственников и знакомых. Воздушные шары внесут магию и волшебство на празднование Дня рождения, и конечно же никто не откажется провести фотосессию с именинником и воздушными шариками.</br><input type="button3" value="Закрыть" onclick="cancelTu()" />';
	} 
function cancelTu(){
	sales2.innerHTML = '<input type="button3" value="Подробнее" onclick="buyTu()" />'
	}

let salesDivTree = document.getElementById("sales3");
let butTree = document.getElementById("but4");
function buyTree(){
	sales3.innerHTML = ' Знак внимания ручной работы становится напоминанием о прошедшем торжестве. Открытки могут быть яркими и красочными, нежными и романтичными. Они украшены вручную, что подчёркивает их ценность и исключительность. Для них типична поразительная красота. Каждая отличается неповторимостью. </br><input type="button4" value="Закрыть" onclick="cancelTree()" />';
	} 
function cancelTree(){
	sales3.innerHTML = '<input type="button4" value="Подробнее" onclick="buyTree()" />'
	}	

//Валидация формы
function validate1(forma)
{
//удаляем все сообщения об ошибках при повторной отправке формы на сервер после исправления
	const list = forma.getElementsByTagName("span");
		for (let i=list.length-1; i>=0; i--)
		{
			list[i].remove();
		}
	const vName = isFullText(forma.ima);
	const vTelefon = isCorrectTelefon(forma.telefon);
	return vName && vTelefon;
}
	
function isFullText(fieldInp){
	if (fieldInp.value.trim() === "")
	{
		fieldInp.className = "alert";
		const item = document.createElement("span");
		item.innerHTML = "Пожалуйста, заполните это поле!";
		fieldInp.parentNode.insertBefore(item,fieldInp.nextSibling);
		return false;
	}
		fieldInp.className = fieldInp.className.replace("alert","");
		return true;
}
function isCorrectTelefon(text){
	if (!isFullText(text)) 
	{ return false;}
	const charMatch =  /^(\+375|80)(29|25|44|33)(\d{3})(\d{2})(\d{2})$/;
	if (!charMatch.test(text.value)) {
		text.className = "alert";
		let item = document.createElement("span");
		item.innerHTML = "Телефон указан неверно! Проверьте, пожалуйста."; 
		text.parentNode.insertBefore(item,text.nextSibling);
		return false;
	}
	text.className = "";
	return true;
}
	
	