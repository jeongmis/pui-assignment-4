var cart = 0;

var chosen = [];

var numItems = 0;
var totalPrice = 0.00;

if(localStorage.getItem("chosen")) chosen = JSON.parse(localStorage.getItem("chosen"));
if(localStorage.getItem("numItems")) numItems = localStorage.getItem("numItems");
if(localStorage.getItem("totalPrice")) totalPrice = parseFloat(localStorage.getItem("totalPrice")).toFixed(2);



var $one = $("<div class='added-item'>" +
                        "<div class='added-item1'>" +
                          " <a href='##'><img src='Images/original.jpg'></a>" +
                       "</div>" +
                        "<div class='added-item2'>" +
                            "<p><em>Original</em></p>" +
                            "<p class='price'>$2.99</p>" +
                         "</div>" +
                        "<div class='added-item3'>" +
                            "<div  class='quan one'>" +
                                "<textarea id='quanone' rows='2' cols='3'>1</textarea>" +
                            "</div>" +
                            "<div class='quan'>" +
                                "<a class='delete one'><img src='Images/delete.png'></a>" +
                            "</div>" +
                        "</div>" +
                    "</div>\n" );

var $six = $("<div class='added-item'>" +
                        "<div class='added-item1'>" +
                          " <a href='##''><img src='Images/original.jpg'></a>" +
                       "</div>" +
                        "<div class='added-item2'>" +
                            "<p><em>Original</em></p>" +
                            "<p class='price'>$10.99</p>" +
                            "<a href='##'><img src='Images/birthdaycake.jpg'></a>" +
                            "<a href='##'><img src='Images/mapleapplepecan.jpg'></a>" +
                         "</div>" +
                        "<div class='added-item3'>" +
                            "<div  class='quan two'>" +
                                "<textarea id='quantwo' rows='2' cols='3'>1</textarea>" +
                            "</div>" +
                            "<div class='quan'>" +
                                "<a class='delete two'><img src='Images/delete.png'></a>" +
                            "</div>" +
                        "</div>" +
                    "</div>\n") ;	

var $twelve = $("<div class='added-item'>" +
                        "<div class='added-item1'>" +
                          " <a href='##'><img src='Images/original.jpg'></a>" +
                       "</div>" +
                        "<div class='added-item2'>" +
                            "<p><em>Original</em></p>" +
                            "<p class='price'>$19.99</p>" +
                            "<a href='##'><img src='Images/birthdaycake.jpg'></a>" +
                            "<a href='##'><img src='Images/mapleapplepecan.jpg'></a>" +
                         "</div>" +
                        "<div class='added-item3'>" +
                            "<div class='quan three'>" +
                                "<textarea id='quanthree' rows='2' cols='3'>1</textarea>" +
                            "</div>" +
                            "<div class='quan'>" +
                                "<a class='delete three'><img src='Images/delete.png'></a>" +
                            "</div>" +
                        "</div>" +
                    "</div>\n");	

$(document).ready(function() {
	var onelength=0, sixlength=0, twelvelength=0;
	localStorage.setItem("chosen", JSON.stringify(chosen));
	localStorage.setItem("numItems", numItems);
	localStorage.setItem("totalPrice", totalPrice);

	console.log(localStorage);
	document.getElementById('shoppingCartNav').innerHTML = 'Shopping Cart(' + localStorage.getItem("numItems") + ')';
	console.log(window.location.href.split("/").pop());
	if(window.location.href.split("/").pop() == 'shoppingcart.html'){
		document.getElementsByClassName('cartPrice')[0].innerHTML = 'Subtotal('+numItems+'Items) : $' + totalPrice;
		if(parseInt(localStorage.getItem("numItems")) >= 1){
			console.log("HIHI");
			$('.placeholder').remove();
			var elements = $();
			for(var i = 0; i<parseInt(localStorage.getItem("numItems")); i++){
				if(JSON.parse(localStorage.getItem("chosen"))[i] == 1){
				  $('.main-content').append($one);
				  onelength++;
				  document.getElementById('quanone').innerHTML = onelength;
				}  
				else if(JSON.parse(localStorage.getItem("chosen"))[i] == 6){
				  $('.main-content').append($six);
				  sixlength++
				  document.getElementById('quantwo').innerHTML = sixlength;
				}
				else{
  	              $('.main-content').append($twelve);
  	              twelvelength++;
  	              document.getElementById('quanthree').innerHTML = twelvelength;
				}
			}
			
		
			$('.delete.one').click(function(){
				var num = parseInt(localStorage.getItem("numItems"));
				var price = parseFloat(localStorage.getItem("totalPrice"));
				var newchosen = JSON.parse(localStorage.getItem("chosen"));
				num --;
				price -=2.99;
				var chosen = JSON.parse(localStorage.getItem("chosen"));
				for(var i = 0; i<parseInt(localStorage.getItem("numItems")); i++){
					if(JSON.parse(localStorage.getItem("chosen"))[i]==1){
						newchosen.splice(i,1);
						break;
					}
				}
				localStorage.setItem("numItems",num);
				localStorage.setItem("totalPrice",price);
				localStorage.setItem("chosen", JSON.stringify(newchosen));
				window.location.reload(true);
				console.log(localStorage);
 			});

			$('.delete.two').click(function(){
				var num = parseInt(localStorage.getItem("numItems"));
				var price = parseFloat(localStorage.getItem("totalPrice"));
				var newchosen = JSON.parse(localStorage.getItem("chosen"));
				num --;
				price -=10.99;
				var chosen = JSON.parse(localStorage.getItem("chosen"));
				for(var i = 0; i<parseInt(localStorage.getItem("numItems")); i++){
					if(JSON.parse(localStorage.getItem("chosen"))[i]==6){
						newchosen.splice(i,1);
						break;
					}
				}
				localStorage.setItem("numItems",num);
				localStorage.setItem("totalPrice",price);
				localStorage.setItem("chosen", JSON.stringify(newchosen));
				window.location.reload(true);
				console.log(localStorage);
			});

			$('.delete.three').click(function(){
				var num = parseInt(localStorage.getItem("numItems"));
				var price = parseFloat(localStorage.getItem("totalPrice"));
				var newchosen = JSON.parse(localStorage.getItem("chosen"));
				num --;
				price -=19.99;
				var chosen = JSON.parse(localStorage.getItem("chosen"));
				for(var i = 0; i<parseInt(localStorage.getItem("numItems")); i++){
					if(JSON.parse(localStorage.getItem("chosen"))[i]==12){
						newchosen.splice(i,1);
						break;
					}
				}
				localStorage.setItem("numItems",num);
				localStorage.setItem("totalPrice",price);
				localStorage.setItem("chosen", JSON.stringify(newchosen));
				window.location.reload(true);
				console.log(localStorage);
			});
		}


	}


	$('.selection.one').click(function(){
		$(this).addClass("user-selected-bg");
		$(this).children().addClass("user-selected");

		$('.selection.two').removeClass("user-selected-bg");
		$('.selection.two').children().removeClass("user-selected");


		$('.selection.three').removeClass("user-selected-bg");
		$('.selection.three').children().removeClass("user-selected");

		$('.sub-selection').css("opacity", "0.5");
		$('.sub-selection').children().removeAttr("href");


	});

	$('.selection.two').click(function(){
		$(this).addClass("user-selected-bg");
		$(this).children().addClass("user-selected");

		$('.selection.one').removeClass("user-selected-bg");
		$('.selection.one').children().removeClass("user-selected");


		$('.selection.three').removeClass("user-selected-bg");
		$('.selection.three').children().removeClass("user-selected");

		$('.sub-selection').css("opacity", "1");
		$('.sub-selection').children().attr("href","##");
	});


	$('.selection.three').click(function(){
		$(this).addClass("user-selected-bg");
		$(this).children().addClass("user-selected");

		$('.selection.one').removeClass("user-selected-bg");
		$('.selection.one').children().removeClass("user-selected");


		$('.selection.two').removeClass("user-selected-bg");
		$('.selection.two').children().removeClass("user-selected");

		$('.sub-selection').css("opacity", "1");
		$('.sub-selection').children().attr("href","##");
	});

	$('.add-to-cart').click(function(){
		addToCart();
	})

	var choices = 0;
	var prev=[];
	$('.choices').click(function(){
		console.log(choices);
		if(choices == 0){
			prev.push($(this));
			$(this).addClass("selected");
			console.log(prev);
			choices ++;
		}
		else if(choices == 1){
			prev.push($(this));
			$(this).addClass("selected");
			console.log(prev);
			choices ++;
		}
		else if(choices >=2) {
			$(prev.shift()).removeClass("selected");
			$(this).addClass("selected");
			console.log(prev);
			prev.push($(this));
		}
	});





});

function addToCart(){
	var item = document.getElementsByClassName("user-selected");
	if(item[0].innerHTML == '1 Each') cart = 1;
	else if(item[0].innerHTML == '6 Pack') cart = 6;
	if(localStorage.getItem("totalPrice"))totalPrice = parseFloat(localStorage.getItem("totalPrice"));
	else cart = 12;
	numItems ++;
	document.getElementById('shoppingCartNav').innerHTML = 'Shopping Cart(' + numItems + ')';
	chosen.push(cart);
	if(cart == 1) totalPrice += 2.99;
	else if(cart == 6) totalPrice += 10.99;
	else totalPrice += 19.99;
	console.log(totalPrice);
	localStorage.setItem("chosen", JSON.stringify(chosen));
	localStorage.setItem("numItems", numItems);
	localStorage.setItem("totalPrice", totalPrice);

}

function init() {
	localStorage.clear();
	cart = 0;
	chosen = [];
	numItems = 0;
	totalPrice = 0;
	localStorage.setItem("chosen", JSON.stringify(chosen));
	localStorage.setItem("numItems", numItems);
	localStorage.setItem("totalPrice", totalPrice);
}
// window.onload = init;


