//create the board

var gameBoard = [
    ['', '', '', '', '', '', ''],
    ['', '', '', '', '', '', ''],
    ['', '', '', '', '', '', ''],
    ['', '', '', '', '', '', ''],
    ['', '', '', '', '', '', ''],
    ['', '', '', '', '', '', '']
]

// var testObject = {}

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
let loc
//function to not allow a piece to be overridden or clicked again
$('.blank').on('click', function () {
    if ($(this).hasClass('blue') || $(this).hasClass('red') || $(this).next().hasClass('blank')) {
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
    rowLocation = this
    columnLocation = this.parentNode
    row = parseInt(rowLocation.classList[0])
    column = parseInt(columnLocation.classList[1])
    color = rowLocation.classList[1]
    console.log(`${row} is row and ${column} is column`)
    gameBoard[row][column] = color
    horizontal()
})


//attach click handler to clear board button that will reload board

$('.clearBoard').on('click', function () {
    $('.blue').addClass('animated slideInUp blank').removeClass('blue')
    $('.red').addClass('animated slideInUp blank').removeClass('red')
    $('.blank').addClass('animated slideInUp')
    location.reload(true)
    // loadBoard()
})

//logic to check vertical win


//logic to check horizontal win

function check4horizontal(array) {
    return array.some(function (a, j, aa) {
        return j > 1 && a === aa[j - 3] && a === aa[j - 2] && a === aa[j - 1];
    });
}

// function horizontal() {
//     let blue = 'blue'
//     let red = 'red'
//     for (let i = 0; i < gameBoard.length; i ++) {
//         for (let j = 0; j < gameBoard[i].length; j ++) {
//             if (gameBoard[i][j] = blue) {
//                 check4horizontal(gameBoard)
//             } 
//         }
//     }
// }


//logic to check diagonal win


//create counter to store player's number of wins