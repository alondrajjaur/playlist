var list = ["7 rings" , "thank u next" , "problem"]
list.forEach(function(song) {
 $(".myList").append('<p>' + song +'</p>') 
})

var artist = ["ariana" , "ariana" , "ariana"]
artist.forEach(function(song){
    $(".myArtist").append('<p>' + song +'</p>')
})