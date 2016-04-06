$(function(){
    
    function Weather(){
        $.getJSON("//api.openweathermap.org/data/2.5/weather?zip=" + zip + ",us&APPID=" + key + "")
        .done(function(data){
            $("#weather").append("<p>It is " + data.main.temp[2] + " F, in " + data.name + "</p>");
        }).fail(function(){
            alert("<p>sorry we are having trouble displaying your data</p>");
        });
    }
/*function weather(zip) {
    $.ajax({url: "api.openweathermap.org/data/2.5/weather?zip=" + zip + ",us",
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
    
    $("#wether").apped(button)*/
    
    //button info and useage goes here.
    
    $("#submit").on("click", function(event) {
        event.preventDefault();
   
    var zip = $("#zip").val();
    var key = $("#key").val();

    weather(zip);
    }); 
    });

//apikey - 042760549d18d25fa9442d2fc978cee1