// $(document).ready(function() {
//   $('iframe#mnchtw-355').load(function() {
//     console.log("loaded iframe");
//     var frame = $('iframe#posts').contents()
//     /* other code */
//   });
//   // $("iframe#mnchtw-355").contents().find("._1krz").hide();
// });

// $("iframe").contents().find("._1krz").addClass("hidden");
$(document).ready(function(){
    $('iframe').load(function(){
        $('#mnchtw-355').contents().find('body').html('Hey, i`ve changed content of <body>! Yay!!!');
    });
});
