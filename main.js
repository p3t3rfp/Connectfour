//create the board

var gameBoard = [
    ['', '', '', '', '', '', ''],
    ['', '', '', '', '', '', ''],
    ['', '', '', '', '', '', ''],
    ['', '', '', '', '', '', ''],
    ['', '', '', '', '', '', '']
]


//create modal to accept player names on start game button click and assign them red or blue

var playerOne = {
    name: 'playerOne',
    color: 'blue'
}
var playerTwo = {
    name: 'playerTwo',
    color: 'red'
}

//logic to load new game

var board = $('.board')

board.hide()

function loadBoard() {
    board.show()
}

//attach click handler to start game button that loads the board and alerts playerOne it is their turn

$('.getStarted').on('click', function () {
    loadBoard()
    // alert(`${playerOne.name} it is your turn`)
    $('.getStarted').hide()
})

//attach click handler to game piece that will follow mouse and drop into board column


//add logic to alternate turns

let counter = 2
// let player = [playerOne, playerTwo]

//function to not allow a piece to be overridden or clicked again
$('.blank').not('.blue').on('click', function () {
    if ($(this).hasClass('blue') || $(this).hasClass('red')) {
        return
    }
    if (counter % 2 === 0) {
        $(this).toggleClass('blank').addClass('blue')
        $('.piece').css('background-color', 'red')
    } else {
        $(this).toggleClass('blank').addClass('red')
        $('.piece').css('background-color', 'blue')
    }
    counter += 1
})


//attach click handler to clear board button that will reload board

$('.clearBoard').on('click', function () {
    $('.blue').addClass('animated slideInUp blank').removeClass('blue')
    $('.red').addClass('animated slideInUp blank').removeClass('red')
    $('.blank').addClass('animated slideInUp')
    loadBoard()
})

//logic to check vertical win


//logic to check horizontal win


//logic to check diagonal win


//create counter to store player's number of wins