var topics = ["Snakes", "Bearded Dragons", "Skinks"];
var buttons = $("#button-holder");




$(document).ready(function () {
    updateTopics();
})

function pullGifs(topic) {
    var queryURL = "https://api.giphy.com/v1/gifs/search?api_key=W3thFqBTRpogOBw6WhN4aKrS20BrKphj&q=" + topic + "&limit=25&offset=0&rating=G&lang=en";

    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function (response) {
        console.log(response);
        for (i = 0; i < 10; i++) {
            var newIMG = "<img src=";
            newIMG += (response.data[i].images.original.url + ">");
            $("#images").append(newIMG);
        }

    });

}




$("#add-topic").on("click", function () {
    event.preventDefault();
    var newTopic = $("#new-topic").val().trim();
    if (newTopic != "" && newTopic != undefined) {
        console.log(newTopic);
        topics.push(newTopic);
        console.log(topics);
        $("#new-topic").val("");
        updateTopics();

    }
})

$(".topic-button").on("click",function(){
    console.log(this);

})

function updateTopics() {
    buttons.empty();

    for (var t in topics) {
        let newBtn = $("<button>");
        newBtn.addClass("btn");
        newBtn.addClass("topic-button");
        newBtn.addClass("btn-warning");
        newBtn.attr("id", "button-"+t);
        newBtn.text(topics[t]);
        buttons.append(newBtn);
    }
}