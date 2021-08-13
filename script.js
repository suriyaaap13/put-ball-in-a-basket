var color = ['red', 'blue', 'yellow', 'lightgrey', 'darkorchid', 'black', 'orange', 'deeppink', 'green', 'purple', 'saddlebrown', 'lightseagreen', 'deepskyblue', 'firebrick', 'crimson'];


$('#add-ball-btn').on('click',function(){
    let bg = color[Math.floor(Math.random()*color.length)];
    console.log('add ball button clicked', bg);
    $('ul').append('<li class="ball" id= '+ bg +'></li>');
    
});