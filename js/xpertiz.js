$(document).ready(function() {
	
	/* Tooltip */
	$('[data-toggle="tooltip"]').tooltip();
	
	/* Material */
	$.material.init();
	
	/* Select2 */
	$('select').addClass('js-example-responsive').css('width', '100%').select2({
		minimumResultsForSearch: Infinity
	});
	$(document).on('click', '.select2-container--default .select2-selection--single .select2-selection__rendered', function() {
		$(this).addClass('is-focused');
	});
	$(document).click(function(e) {
		var container = $('.select2-container--default .select2-selection--single .select2-selection__rendered.is-focused');
		if (!container.is(e.target) && container.has(e.target).length === 0) {
			container.removeClass('is-focused');
		}
	});
	
	/* Avatar */
	$(document).on('click', '#avatar-icon', function() {
		$(this).next('ul').show();
	});
	$(document).click(function(e) {
		if( e.target.id != 'avatar-icon') {
			$('#avatar-icon').next('ul').hide();
		}
	});

	/* Menu responsive */
	$(document).on('click', '#menu-opener', function() {
        $('#main-wrapper').append('<div class="backdrop"></div>');
        $('#main-nav').addClass('responsive-toggle');
    });
    $(document).on('click', '#main-nav', function() {
        $('#main-nav').removeClass('responsive-toggle');
        $('.backdrop').remove();
    });
    $(document).on('click', '.backdrop', function() {
        $('#main-nav').removeClass('responsive-toggle');
        $('.backdrop').remove();
    });

	$(document).on('click', '.fc-next-button', function() {
		$('.fc-today').attr('day-number', new Date().getDate());
	});
	$(document).on('click', '.fc-prev-button', function() {
		$('.fc-today').attr('day-number', new Date().getDate());
	});
});