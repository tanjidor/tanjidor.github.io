/*FormPicker Init*/

$(document).ready(function() {
	"use strict";
	
	/* Bootstrap Colorpicker Init*/
	$('.colorpicker').colorpicker();

	$('.colorpicker-rgb').colorpicker({
		color: '#AA3399',
		format: 'rgba'
	});

	$('.colorpicker-inline').colorpicker({
		color: '#ffaa00',
		container: true,
		inline: true
	});
	
	/* Datetimepicker Init*/
	$('#datetimepicker1').datetimepicker({
			useCurrent: false,
			icons: {
                    time: "fa fa-clock-o",
                    date: "fa fa-calendar",
                    up: "fa fa-arrow-up",
                    down: "fa fa-arrow-down"
                },
		}).on('dp.show', function() {
		if($(this).data("DateTimePicker").date() === null)
			$(this).data("DateTimePicker").date(moment());
	});

	$('#datetimepicker1-a').datetimepicker({
		useCurrent: false,
		icons: {
				time: "fa fa-clock-o",
				date: "fa fa-calendar",
				up: "fa fa-arrow-up",
				down: "fa fa-arrow-down"
			},
	}).on('dp.show', function() {
	if($(this).data("DateTimePicker").date() === null)
		$(this).data("DateTimePicker").date(moment());
});

	


});