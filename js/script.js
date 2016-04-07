$(function(){
    
    function weather(zip, key){
        $.getJSON("//api.openweathermap.org/data/2.5/weather?zip=" + zip + ",us&units=imperial&appid=" + key)
        .done(function(data){
            $("#weather").append("<p>It is " + data.main.temp + " F, in " + data.name + "</p>");
        }).fail(function(){
            $("#weather").append("<p>sorry we are having trouble displaying your data</p>");
        });
    }
/*function weather(zip, key) {
    $.ajax({url: "api.openweathermap.org/data/2.5/weather?zip=" + zip + ",us&APPID=" + key,
success: function(data) {
    $("#weather").append("<p>It is " + data.main.temp[2] + " F, in " + data.name + "</p>");
},
error: function(data) {
    $("#weather").append("<p>sorry we are having trouble displaying your data</p>");
}
});
}*/
    /*var button = $("<button>Submit</button>").on("click", function() {
        document.getElementById("zip");
    });
    
    $("#wether").apped(button) */
    
    //button info and useage goes here.
    
    $("#submit").on("click", function(event) {
        event.preventDefault();

        var zip = $("#zip").val();
        var key = $("#key").val();

    weather(zip, key);
    }); 
});

//apikey - 042760549d18d25fa9442d2fc978cee1