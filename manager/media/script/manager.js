$(document).ready(function($) {
	
	$('#dob').datepicker({
		changeMonth: true,
		changeYear: true,
		yearRangeType: 'c-90:c+90',
		dateFormat: config.date_format
	});
	
	if($('#blockeduntil').length) {
		$( '#blockeduntil, #blockedafter').datetimepicker({
			changeMonth: true,
			changeYear: true,
			yearRangeType: 'c-'+config.datepicker_year_range+':c+'+config.datepicker_year_range,
			dateFormat: config.date_format,
			timeFormat: config.time_format
		});
	}
	
	$( '#pub_date, #unpub_date, input[id^="tv"].DatePicker').datetimepicker({
		changeMonth: true,
		changeYear: true,
		yearRangeType: 'c-'+config.datepicker_year_range+':c+'+config.datepicker_year_range,
		dateFormat: config.date_format,
		timeFormat: config.time_format
	});

	$("#tabs").tabs();
	
	//hide configuration tab if empty
	if(typeof(config_display) != "undefined" && !config_display){
		$('#tabs').tabs('remove', 1);
	}
	
	$('#search-documents').dataTable({
		"bJQueryUI": true,
		"aoColumns": [
	      {"bSortable": false },
	      null,
	      null,
	      null,
	      {"bSortable": false}
    ]
	});
	
	$('#schedule-all-events').dataTable({
		"bJQueryUI": true,
		"aaSorting": [[ 2, "desc" ]]
	});
	
	$('#schedule-unpublish-events').dataTable({
		"bJQueryUI": true,
		"aaSorting": [[ 2, "asc" ]]
	});
	

});