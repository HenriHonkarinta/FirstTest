window.sr = ScrollReveal();
	sr.reveal('.showcase-left', {
		duration: 2000,
		origin:'top',
		distance: '250px'
	});
	sr.reveal('.showcase-right p', {
		duration: 1300,
		origin:'right',
		distance: '50px',
		easing: 'cubic-bezier(.45, .29, .68, .98)',
		viewFactor: 0.35,
		reset: true
	});
	sr.reveal('.showcase-btn', {
		duration: 1000,
		delay: 600,
		origin:'bottom',
		rotate: { x: 15, y: 15, z: 15 },
		reset: true
	});
	sr.reveal('.showcase-left2', {
		duration: 2000,
		origin:'top',
		viewFactor: 0.98
	});
	sr.reveal('.showcase-right2', {
		duration: 2000,
		origin:'right',
		viewFactor: 0.98
	});
	sr.reveal('.showcase-left3', {
		duration: 2000,
		origin:'top'
	});
	sr.reveal('.showcase-right3', {
		duration: 2000,
		origin:'right'
	});


