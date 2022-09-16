//логотип
var canvas, stage, exportRoot, anim_container, dom_overlay_container, fnStartAnimation;
function initLog() {
	canvas = document.getElementById("canvas1");
	anim_container = document.getElementById("animation_container1");
	dom_overlay_container = document.getElementById("dom_overlay_container1");
	var comp=AdobeAn.getComposition("4E8FC9893DD8D048AEDE48B97339A37E");
	var lib=comp.getLibrary();
	var loader = new createjs.LoadQueue(false);
	loader.addEventListener("fileload", function(evt){handleFileLoadLog(evt,comp)});
	loader.addEventListener("complete", function(evt){handleCompleteLog(evt,comp)});
	var lib=comp.getLibrary();
	loader.loadManifest(lib.properties.manifest);
}
function handleFileLoadLog(evt, comp) {
	var images=comp.getImages();	
	if (evt && (evt.item.type == "image")) { images[evt.item.id] = evt.result; }	
}
function handleCompleteLog(evt,comp) {
	//This function is always called, irrespective of the content. You can use the variable "stage" after it is created in token create_stage.
	var lib=comp.getLibrary();
	var ss=comp.getSpriteSheet();
	var queue = evt.target;
	var ssMetadata = lib.ssMetadata;
	for(i=0; i<ssMetadata.length; i++) {
		ss[ssMetadata[i].name] = new createjs.SpriteSheet( {"images": [queue.getResult(ssMetadata[i].name)], "frames": ssMetadata[i].frames} )
	}
	exportRoot = new lib.Logo();
	stage = new lib.Stage(canvas);	
	//Registers the "tick" event listener.
	fnStartAnimation = function() {
		stage.addChild(exportRoot);
		createjs.Ticker.framerate = lib.properties.fps;
		createjs.Ticker.addEventListener("tick", stage);
	}	    
	//Code to support hidpi screens and responsive scaling.
	AdobeAn.makeResponsive(false,'both',false,1,[canvas,anim_container,dom_overlay_container]);	
	AdobeAn.compositionLoaded(lib.properties.id);
	fnStartAnimation();
}
window.onload = initLog();

// о студии

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

// Обработчик изменяет позицию слайдера, после того, как мы убедились,
// что в качестве активной обозначена нужная нам ссылка.
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
//обработка замены фото (блок наши услуги)
window.onload = function()
{
let img = document.getElementById ("zal1");
let imgOne = document.getElementById ("zal2");
let imgTwo = document.getElementById ("zal3");
let imgTree = document.getElementById ("zal4");
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
	
//отработка кнопки "Подробнее" (появление текста и скрытие по клику)
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
//video
//доступ к элементам страницы
let video = document.querySelector("video");
let buttons = document.getElementsByClassName("dir");
video.addEventListener("canplay",function(){
	if 	(document.querySelector(".overlay"))
		{	
		document.querySelector(".overlay").remove();
		}	
	})
//программируем кнопку play
let playBut = document.querySelector(".play");
playBut.addEventListener("click",function(){
	if (video.paused)
	{
		video.play();
	}
	else
	{
		video.pause();
	}
})
			
//play и pause
video.addEventListener("pause",function(){
	playBut.classList.add("play");
	playBut.classList.remove("pause");
	video.currentTime = 0;
})
			
video.addEventListener("play",function(){
	playBut.classList.add("pause");
	playBut.classList.remove("play");
})
			
//переход на первый кадр
let startBut = document.querySelector(".start");
startBut.addEventListener("click",function(){
	video.play();
	video.currentTime = 0;
})
//если звук выключен, включаем его и наоборот.
let muteButton = document.querySelector(".muteOn");
muteButton.addEventListener("click",
function(){
	console.log(video.muted)
		if (!video.muted)
		{
			this.classList.add("muteOff");
			this.classList.remove("muteOn");
			video.muted = true;
		}
		else{
			this.classList.add("muteOn");
			this.classList.remove("muteOff");
			video.muted = false;
				}
}
)

let volumeButton = document.querySelector(".volume");
volumeButton.addEventListener("click",
	function(){
		let volOfVideo = video.volume + video.diff;
			if (volOfVideo >= 1)
			{
				volOfVideo = 1;
				video.diff = -0.1;
			}
			if (volOfVideo <= 0)
			{
				volOfVideo = 0;
				muteButton.classList.add("muteOff");
				muteButton.classList.remove("muteOn");
				video.diff = 0.1;
			}
			video.volume = volOfVideo;
	}
)
video.diff = 0.1;
//громкость звука
video.addEventListener("volumechange", function(){
})
			
//еще видео

let btn = document.querySelector(".btn");
let clip = document.querySelector(".clip");
let closeOne = document.querySelector(".close");
let vidOne = document.querySelector(".vidOne");
btn.onclick = function(){
	btn.classList.add("active");
	clip.classList.add("active");
	vidOne.play();
	vidOne.currentTime = 0;
}
closeOne.onclick = function(){
	btn.classList.remove("active");
	clip.classList.remove("active");
	vidOne.pause();
}

let btnTu = document.querySelector(".btnTu");
let clipTu = document.querySelector(".clipTu");
let closeTu = document.querySelector(".closeTu");
let vidTu = document.querySelector(".vidTu");
btnTu.onclick = function(){
	btnTu.classList.add("active");
	clipTu.classList.add("active");
	vidTu.play();
	vidTu.currentTime = 0;
}
closeTu.onclick = function(){
	btnTu.classList.remove("active");
	clipTu.classList.remove("active");
	vidTu.pause();
}
let btnTru = document.querySelector(".btnTru");
let clipTru = document.querySelector(".clipTru");
let closeTru = document.querySelector(".closeTru");
let vidTru = document.querySelector(".vidTru");
btnTru.onclick = function(){
	btnTru.classList.add("active");
	clipTru.classList.add("active");
	vidTru.play();
	vidTru.currentTime = 0;
}
closeTru.onclick = function(){
	btnTru.classList.remove("active");
	clipTru.classList.remove("active");
	vidTru.pause();
}
let btnFor = document.querySelector(".btnFor");
let clipFor = document.querySelector(".clipFor");
let closeFor = document.querySelector(".closeFor");
let vidFor = document.querySelector(".vidFor");
btnFor.onclick = function(){
	btnFor.classList.add("active");
	clipFor.classList.add("active");
	vidFor.play();
	vidFor.currentTime = 0;
}
closeFor.onclick = function(){
	btnFor.classList.remove("active");
	clipFor.classList.remove("active");
	vidFor.pause();
}

//форма

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
	
	