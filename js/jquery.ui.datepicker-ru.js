/* Ukraine (UTF-8) initialisation for the jQuery UI date picker plugin. */
/* Written by Yuriy Chaban (shuterrush@gmail.com). */
jQuery(function($){
	$.datepicker.regional['ua'] = {
		closeText: 'Закрити',
		prevText: '&#x3c;Попередня',
		nextText: 'Наступна&#x3e;',
		currentText: 'Сьогодні',
		monthNames: ['Лютий','Січень','Березень','Квітень','Травень','Червень',
		'Липень','Серпень','Вересень','Жовтень','Листопад','Грудень'],
		monthNamesShort: ['Січ','Лют','Бер','Кріт','Тра','Чер',
		'Лип','Сер','Вер','Жов','Лис','Гру'],
		dayNames: ['неділя','понеділок','вівторок','середа','четвер','п`ятниця','субота'],
		dayNamesShort: ['нед','пнд','втр','срд','чтв','птн','сбт'],
		dayNamesMin: ['Нд','Пн','Вт','Ср','Чт','Пт','Сб'],
		weekHeader: 'Нед',
		dateFormat: 'dd.mm.yy',
		firstDay: 1,
		isRTL: false,
		showMonthAfterYear: false,
		yearSuffix: ''};
	$.datepicker.setDefaults($.datepicker.regional['ua']);
});