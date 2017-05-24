$(function(){
	total = 0;
	var zero = $('#btn_0');
	var one = $('#btn_1');
	var two = $('#btn_2');
	var three = $('#btn_3');
	var four = $('#btn_4');
	var five = $('#btn_5');
	var six = $('#btn_6');
	var seven = $('#btn_7');
	var eight = $('#btn_8');
	var nine = $('#btn_9');
	var plus = $('#btn_addition');
	var substract = $('btn_substraction');
	var time = $('#btn_multiplication');
	var divide = $('#btn_division');
	var dot = $('#btn_dot');
	var result = $('#result');
	var equal = $('#btn_result');
	var ac = $('#btn_ac');
	var del = $('#btn_del');
	result.value = "";
	var temp = 0;

	$('.btn-default').on('click', function() {
		result.value += $(this).val();
		result.val(result.value);
		console.log(result.value);
	});

	equal.on('click', function(){
		var total = eval(result.value);
		result.value = total;
		result.val(total);
		console.log(result.value);
	});

	del.on('click', function(){
		result.value =  result.value.slice(0, result.value.length-1);
		result.val(result.value);
		console.log(result.value);
	});

	ac.on('click', function(){
		total = 0;
		result.value = "";
		result.val(result.value);
		console.log(result.value);
	})






});