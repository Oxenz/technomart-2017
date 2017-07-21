
	// index.html

	var $location = document.querySelector('.btn-location');
	var $feedback = document.querySelector('.popup-feedback');
	var $close = document.querySelector('.modal-close');
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
		console.log('stage 1 (добавление .open), work');
	});

	window.addEventListener('keydown', function(event) {
		if (event.keyCode === 27) {
			$feedback.classList.remove('open')
			$overlay.style.display='none';
			$feedback.classList.remove('popup-error');
			console.log('stage 2 (скрытие .overlay и удаление .open по ESC), work');
		}
	});

	$form.addEventListener('submit', function(event) {
		if (!$login.value || !$email.value) {
			event.preventDefault();
			console.log('Какое из 2-ух полей не заполнено, JUST DO IT');
			$feedback.classList.remove('popup-error')
					$feedback.offsetWidth = $feedback.offsetWidth; // исп. как разделить действий
					$feedback.classList.add('popup-error')
				} else {
					localStorage.setItem('login', $login.value)
					setTimeout('$overlay.style.display="none"', 1500);

				}
				console.log('stage 3 (проверка полей ввода и создание ключа localStorage), work');
			});

	$overlay.addEventListener('click', function() {
		$overlay.style.display='none';
		$feedback.classList.remove('open');
		$feedback.classList.remove('popup-error');
		console.log('stage 4 (скрытие .overlay и удаление .open по l-click), work');
	});

	$close.addEventListener('click', function() {
		$overlay.style.display='none';
		$feedback.classList.remove('open');
		$feedback.classList.remove('popup-error');
		console.log('stage 5 (скрытие .overlay и удаление .open по .close), work');
	});