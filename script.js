console.log('🟥 🟦 🟩 🟨');
$(document).ready(onReady);



function onReady(){
    // handle button clicks
    $('#red-btn').on('click', appendRed);
    $('#blue-btn').on('click', appendBlue)
    $('#green-btn').on('click', appendGreen)
    $('#yellow-btn').on('click', appendYellow)
    $('#blocks').on('click', '.block', removeBlock)
    
}

let red = 1;
let blue = 1;
let green = 1;
let yellow = 1;

function appendRed(){
    $('#blocks').append('<div class="block red-fill"></div>')
    $('#red-count').empty()
    red++;
    $('#red-count').append(red)

}

function appendBlue(){
    $('#blocks').append('<div class="block blue-fill"></div>')
    $('#blue-count').empty()
    blue++;
    $('#blue-count').append(blue)
}
function appendGreen(){
    $('#blocks').append('<div class="block green-fill"></div>')
    $('#green-count').empty()
    green++;
    $('#green-count').append(green)
}
function appendYellow(){
$('#blocks').append('<div class="block yellow-fill"></div>')
$('#yellow-count').empty()
yellow++;
$('#yellow-count').append(yellow)
}
function removeBlock(){
    $(this).remove()


}
