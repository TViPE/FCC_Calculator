$(function){
	total = 0;
	var zero = $('btn_0');
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
	var temp = 0;

	function addition(num) {
		temp += num;
	};

	function substraction(num) {
		temp -= num;
	};

	function multiplication(num) {
		temp *= num;
	};
	function division(num) {
		temp /= num;
	};

}