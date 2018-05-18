$(".find-match").on("click", event => {

	event.preventDefault();

	$.ajax({
		type: "POST",
		url: "/api/friends", 
		data: {
			scores: [
				$("#question1").val(),
				$("#question2").val(),
				$("#question3").val(),
				$("#question4").val(),
				$("#question5").val(),
				$("#question6").val(),
				$("#question7").val(),
				$("#question8").val(),
				$("#question9").val(),
				$("#question10").val()
			]
		}
	}).then(data => {
		console.log(data, "data");
		$(".match-spot").html(`<h2>${data.name}</h2><img class="img-thumbnail" src=${data.photo}>`)
	});

	$(".modal").modal("toggle");

});