
	// catalog.html

	var $label_top = document.querySelector('[for=f-toggle-top]');
	var $label_bottom = document.querySelector('[for=f-toggle-bottom]');

	$label_bottom.addEventListener('click', function() {
		console.log('Catalog 1.1 start');
		$label_bottom.classList.toggle('label-active');
		$label_top.classList.remove('label-active');
		$label_top.classList.add('label-not-active');
		$label_bottom.classList.remove('label-not-active');
	});

	$label_top.addEventListener('click', function() {
		console.log('Catalog 1.2 start');
		$label_top.classList.toggle('label-active');
		$label_bottom.classList.remove('label-active');
		$label_bottom.classList.add('label-not-active');
		$label_top.classList.remove('label-not-active');
	});