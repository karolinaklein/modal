(function($){
	
	$(document).ready(function(){
		
		$(".modalbtn").modal({

		});
		
		function updateItemDetailsSummary(){
			var lengthCm = parseFloat($("#length_cm").val());
			var widthCm = parseFloat($("#width_cm").val());
			var heightCm = parseFloat($("#height_cm").val());
			var weightKg = parseFloat($("#weight_kg").val());
			var summaryParts = [];
			if(!isNaN(lengthCm) && !isNaN(widthCm) && !isNaN(heightCm)){
				var volumeM3 = (lengthCm * widthCm * heightCm) / 1000000;
				summaryParts.push("Volume: " + volumeM3.toFixed(3) + " m³");
			}
			if(!isNaN(weightKg)){
				summaryParts.push("Weight: " + weightKg.toFixed(1) + " kg");
			}
			$("#calc-summary").text(summaryParts.join(" • "));
		}

		$(document).on("input change", "#item-details-form #length_cm, #item-details-form #width_cm, #item-details-form #height_cm, #item-details-form #weight_kg", updateItemDetailsSummary);

		$(document).on("submit", "#item-details-form", function(event){
			event.preventDefault();
			var formElement = this;
			if(!formElement.checkValidity()){
				formElement.reportValidity();
				return;
			}
			var payload = {
				category: $("#category").val(),
				title: $("#title").val().trim(),
				description: $("#description").val().trim(),
				quantity: parseInt($("#quantity").val(), 10),
				dimensions_cm: {
					length: parseInt($("#length_cm").val(), 10),
					width: parseInt($("#width_cm").val(), 10),
					height: parseInt($("#height_cm").val(), 10)
				},
				weight_kg: parseFloat($("#weight_kg").val()),
				is_fragile: $("#is_fragile").is(":checked"),
				is_stackable: $("#is_stackable").is(":checked")
			};
			console.log("Item details (Clicktrans):", payload);
			$("#calc-summary").text("Saved. You can close this dialog.");
		});
		
	});
	
})(jQuery);