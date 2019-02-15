//create the board

var board = [
    ['','','','','','',''],
    ['','','','','','',''],
    ['','','','','','',''],
    ['','','','','','',''],
    ['','','','','','','']
]


//create modal to accept player names on start game button click and assign them red or blue

var playerOne = {
    name: '#',
    color: 'blue'
}
var playerTwo = {
    name: '#',
    color: 'red'
}

//logic to load new game

var board = $('.board').hide()

function loadBoard() {
    $('.board').toggle()
}

//attach click handler to start game button that loads the board and alerts playerOne it is their turn

$('.getStarted').on('click', function() {
    loadBoard()
    alert(`${playerOne.name} it is your turn`)
    $('.getStarted').hide()
})

//attach click handler to game piece that will drop into board

//add logic to alternate turns


//attach click handler to clear board button that will reload board


//logic to check vertical win


//logic to check horizontal win


//logic to check diagonal win


//create counter to store player's number of wins