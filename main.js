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
    name: '#',
    color: 'blue'
}
var playerTwo = {
    name: '#',
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

$('.blank').on('click', function (player) {
    console.log('clicked blank')
        if (counter % 2 === 0) {
            $(this).toggleClass('blank').addClass('blue')
            $('.piece').addClass('red')
        } else {
            $(this).toggleClass('blank').addClass('red')
            $('.piece').addClass('red')
        }
        counter += 1
})


//attach click handler to clear board button that will reload board

$('.clearBoard').on('click', function() {
    console.log('clear clicked')
    // $('.blue').addClass('animated slideDown')
    // $('.red').addClass('animated slideDown')
    $('.blue').addClass('animated slideInUp blank')
    $('.red').addClass('animated slideInUp blank')
    $('.blank').addClass('animated slideInUp')

    // reloadBoard()
    $('.getStarted').show()
    
})

// function reloadBoard() {
//     board.show()
// }

//logic to check vertical win


//logic to check horizontal win


//logic to check diagonal win


//create counter to store player's number of wins