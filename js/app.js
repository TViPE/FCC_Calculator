$(function(){

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
	var sign = "";
	var arr = [];

	
	$('.btn-default').on('click', function(){
		if(result.value == null){
			result.value = "";
		}
		result.value += $(this).val();

		// Dont touch
		// ------------------------------------- //
		if(result.value[0] == "0" && result.value.length >1){

			var nonZeroIndex = result.value.split("").findIndex(function (elem){
				return elem != "0";
			});

			result.value = result.value.slice(nonZeroIndex);
			console.log(result.value);
		}
		// ------------------------------------- //
		result.val(result.value);
	});

	$('.btn-success').on('click', function(){

		temp = result.value;
		result.value = "";
		sign = $(this).attr('value');
		console.log("Temp: " + temp);
	})
	equal.on('click', function() {
		if (sign == ""){
			sign = "+";
		} 
		var total = temp + " " + sign + " " + result.value;
		// Check if the total isNaN

		console.log("Total: " + total);
		var check = eval(total);
		result.value = check;
		console.log("Check: " + check);
		console.log("Result Value : " + result.value);
		console.log(check);

		if((isNaN(check) === true) || (isFinite(check) == false)){
			$('.btn-default').prop('disabled', true);
			check = check + " - Press AC to clear";
			result.value = "";
		}
		result.val(check);
	});

	ac.on('click', function() {
		$('.btn-default').prop('disabled', false);
		result.value = "";
		result.val(result.value);
	});
});