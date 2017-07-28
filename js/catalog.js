
	// catalog.html change class for toggle sorting


	var $label_top = document.querySelector('[for=f-toggle-top]');
	var $label_bottom = document.querySelector('[for=f-toggle-bottom]');


	$label_bottom.addEventListener('click', function() {
		console.log('Запуск прослушивание .f-toogle-top');
		$label_bottom.classList.toggle('label-active');
		$label_top.classList.remove('label-active');
		$label_top.classList.add('label-not-active');
		$label_bottom.classList.remove('label-not-active');
		console.log('Заверщение добавление/удаление классов .top');
	});

	$label_top.addEventListener('click', function() {
		console.log('Запуск прослушивание .f-toogle-bottom');
		$label_top.classList.toggle('label-active');
		$label_bottom.classList.remove('label-active');
		$label_bottom.classList.add('label-not-active');
		$label_top.classList.remove('label-not-active');
		console.log('Заверщение добавление/удаление классов .bottom');
	});


	// catalog.html Display '.popup-additem' when adding goods


	var $catalog = document.querySelector('.catalog');
	var $additem = document.querySelector('.popup-additem');
	var $close = document.querySelector('.modal-close');
	var $continue = document.querySelector('.btn-additem-continue');


	if ($catalog) {
		$catalog.addEventListener('click', function (event) {
			var target = event.target;
			if (target.classList.contains('btn-buy')) {
				event.preventDefault();
				$additem.classList.add('open');
				$additem.classList.add('animate');
				console.log('stage 1.1 (добавление .open и .animate), work');
			}
		});
	}

	window.addEventListener('keydown', function(event) {
		if (event.keyCode === 27) {
			$additem.classList.remove('open');
			$additem.classList.remove('animate');
			console.log('stage 1.2 (удаление .open и .animate по ESC), work');
		}
	});

	$close.addEventListener('click', function() {
		$additem.classList.remove('open');
		$additem.classList.remove('animate');
		console.log('stage 1.3 (удаление .open и .animate по .close), work');
	});

	$continue.addEventListener('click', function() {
		$additem.classList.remove('open');
		$additem.classList.remove('animate');
		console.log('stage 1.4 (удаление .open и .animate по .btn-additem-continue)');
	});