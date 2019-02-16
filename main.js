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

//attach click handler to game piece that will place into board column

let counter = 2

$('.blank').on('click', function () {

    //function to not allow a piece to be overridden or clicked again
    if ($(this).hasClass('blue') || $(this).hasClass('red') || $(this).next().hasClass('blank')) {
        return
    }
    //logic to alternate turns
    if (counter % 2 === 0) {
        $(this).toggleClass('blank').addClass('blue')
        $('.piece').css('background-color', 'red')
    } else {
        $(this).toggleClass('blank').addClass('red')
        $('.piece').css('background-color', 'blue')
    }

    //place each selected piece into the gameBoard array by color
    counter += 1
    rowLocation = this
    columnLocation = this.parentNode
    row = parseInt(rowLocation.classList[0])
    column = parseInt(columnLocation.classList[1])
    color = rowLocation.classList[1]
    // console.log(`${row} is row and ${column} is column`)
    gameBoard[row][column] = color

    if (color === 'blue') {
        checkForWin(gameBoard, 'blue')
    } else {
        checkForWin(gameBoard, 'red')
    }
    return false
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

function verticalWin(array, color) {
    for (let i = 0; i < 5; i++) {
        if (array[0][i] === color
            && array[1][i] === color
            && array[2][i] === color
            && array[3][i] === color
        ) alert(`${color} wins!`)

        if (array[1][i] === color
            && array[2][i] === color
            && array[3][i] === color
            && array[4][i] === color
        ) alert(`${color} wins!`)
        
        if (array[2][i] === color
            && array[3][i] === color
            && array[4][i] === color
            && array[5][i] === color
        ) alert(`${color} wins!`)
    }
    return false
}

//logic to check horizontal win

function horizontalWin(array, color) {
    for (let i = 0; i < 6; i++) {
        if (array[i][0] === color
            && array[i][1] === color
            && array[i][2] === color
            && array[i][3] === color
        ) alert(`${color} wins!`);

        if (array[i][1] === color
            && array[i][2] === color
            && array[i][3] === color
            && array[i][4] === color
        ) alert(`${color} wins!`);

        if (array[i][2] === color
            && array[i][3] === color
            && array[i][4] === color
            && array[i][5] === color
        ) alert(`${color} wins!`);

        if (array[i][3] === color
            && array[i][4] === color
            && array[i][5] === color
            && array[i][6] === color
        ) alert(`${color} wins!`);
    }
    return false;
}

// function horizontal() {
//     let blue = 'blue'
//     let red = 'red'
//     for (let i = 0; i < gameBoard.length; i ++) {
//         for (let j = 0; j < gameBoard[i].length; j ++) {
//             if (gameBoard[i][j] = blue) {
//             } 
//         }
//     }
// }


//logic to check diagonal wins

//function to check for game winner by color includes all 4 variations - vertical/horizontal
//forward diagonal and backward diagonal

function checkForWin(array, color) {
    return verticalWin(array, color)
        || horizontalWin(array, color)
        // || checkDiagonal1(array, color)
        // || checkDiagonal2(array, color)
}


//create counter to store player's number of wins