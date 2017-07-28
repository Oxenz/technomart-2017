
	// index.html

	var $location = document.querySelector('.btn-location');
	var $feedback = document.querySelector('.popup-feedback');
	var $close1 = document.querySelector('.close-1');
	var $form = $feedback.querySelector('form');
	var $login = $feedback.querySelector('[name=login]');
	var $email = $feedback.querySelector('[name=email]');
	var $storage = localStorage.getItem('login');
	var $overlay = document.querySelector('.modal-overlay');


	$location.addEventListener('click', function(event) {
		event.preventDefault();
		$feedback.classList.toggle('open');
		if ($storage) {
			$login.value = $storage;
			$email.focus();
		} else {
			$login.focus();
		}
		$overlay.style.display='block';
		console.log('stage 1.1 (отмена перехода по ссылке, добавление .open), work');
	});

	window.addEventListener('keydown', function(event) {
		if (event.keyCode === 27) {
			$overlay.style.display='none';
			$feedback.classList.remove('open');
			$popupmap.classList.remove('open');
			$additem.classList.remove('open');
			$additem.classList.remove('animate');
			$popupmap.classList.remove('animate');
			$feedback.classList.remove('popup-error');
			console.log('stage 1.2 (скрытие .overlay и удаление .open .animate .popup-error по ESC), work');
		}
	});

	$form.addEventListener('submit', function(event) {
		if (!$login.value || !$email.value) {
			event.preventDefault();
			console.log('Какой-то из 2-ух полей не заполнено, JUST DO IT');
			$feedback.classList.remove('popup-error');
					$feedback.offsetWidth = $feedback.offsetWidth; // исп. как разделить действий
					$feedback.classList.add('popup-error');
				} else {
					localStorage.setItem('login', $login.value);
					setTimeout('$overlay.style.display="none"', 1500);

				}
				console.log('stage 1.3 (проверка полей ввода и создание ключа localStorage), work');
			});

	$overlay.addEventListener('click', function() {
		$overlay.style.display='none';
		$feedback.classList.remove('open');
		$popupmap.classList.remove('open');
		$popupmap.classList.remove('animate');
		$feedback.classList.remove('popup-error');
		console.log('stage 1.4 (скрытие .overlay и удаление .open .animate .popup-error по l-click), work');
	});

	$close1.addEventListener('click', function() {
		$overlay.style.display='none';
		$feedback.classList.remove('open');
		$feedback.classList.remove('popup-error');
		console.log('stage 1.5 (скрытие .overlay и удаление .open .popup-error по .close), work');
	});



	// index.html Display '.popup-additem' when adding goods

	var $items = document.querySelector('.items');
	var $additem = document.querySelector('.popup-additem');
	var $continue = document.querySelector('.btn-additem-continue');
	var $close2 = document.querySelector('.close-2');


	if ($items) {
		$items.addEventListener('click', function (event) {
			var target = event.target;
			if (target.classList.contains('btn-buy')) {
				event.preventDefault();
				$additem.classList.add('open');
				$additem.classList.add('animate');
				console.log('stage 2.1 (добавление .open и .animate), work');
			}
		});
	}

	$close2.addEventListener('click', function() {
		$additem.classList.remove('open');
		$additem.classList.remove('animate');
		console.log('stage 2.2 (удаление .open и .animate по .close), work');
	});

	$continue.addEventListener('click', function() {
		$additem.classList.remove('open');
		$additem.classList.remove('animate');
		console.log('stage 2.3 (удаление .open и .animate по .btn-additem-continue)');
	});




	// interactive google map

	var $mapcanvas = document.querySelector('#map-canvas');
	var $popupmap = document.querySelector('.popup-map');
	var $close3 = document.querySelector('.close-3');


	$mapcanvas.addEventListener('click', function(event) {
		event.preventDefault();
		$overlay.style.display='block';
		$popupmap.classList.add('open');
		$popupmap.classList.add('animate');
		window.dispatchEvent(new Event('resize')); // fix displa: none grey popup bg
		console.log('stage 3.1 (добавление для большой карты классов .open и .animate), work');
	});

	$close3.addEventListener('click', function() {
		$overlay.style.display='none';
		$popupmap.classList.remove('open');
		$popupmap.classList.remove('animate');
		console.log('stage 3.2 (удаление для большой карты классов .open и .animate, изменение display на none), work');
	});



	// Initialization and settings google maps

	function initMap() {
		var map = new google.maps.Map(document.getElementById('map-canvas'), {
			center: {lat: 59.938800, lng: 30.323073},
			scrollwheel: false,
			disableDefaultUI: true,
			zoom: 17,
		});

		var marker = new google.maps.Marker({
			position: {lat: 59.938800, lng: 30.323073},
			map: map,
			title: 'Мы здесь "ул. Б. Конюшенная, д. 19"',
		});

		var fullmap = new google.maps.Map(document.getElementById('map-full'), {
			center: {lat: 59.941384, lng: 30.310371},
			zoom: 16,
		});

		var myMark = 'img/markerzzz.png'
		var marker = new google.maps.Marker({
			position: {lat: 59.938800, lng: 30.323073},
			map: fullmap,
			title: 'Мы здесь "ул. Б. Конюшенная, д. 19"',
			icon: myMark,
		});

	}	// last

