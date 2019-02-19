//create the board

var gameBoard = [
    ['', '', '', '', '', '', ''],
    ['', '', '', '', '', '', ''],
    ['', '', '', '', '', '', ''],
    ['', '', '', '', '', '', ''],
    ['', '', '', '', '', '', ''],
    ['', '', '', '', '', '', '']
]

//create modal to accept player names on start game button click and assign them red or black

var playerOne = {
    name: 'playerOne',
    color: 'black',
    gamesWon: 0
}

var playerTwo = {
    name: 'playerTwo',
    color: 'red',
    gamesWon: 0
}

// var scoreboard = $('.scoreboard')

//logic to load new game

var board = $('.board')

board.hide()

function loadBoard() {
    board.show()
    $('.playerNames').hide()
    $('.clearBoard').css('visibility', 'visible')
    $('.col').removeClass('black red')
    counter = 2
}

//attach click handler to start game button that loads the board and alerts playerOne it is their turn

$('.getStarted').on('click', function () {
    loadBoard()
    playerOne.name = $('.playerOne').val()
    playerTwo.name = $('.playerTwo').val()
    $('.p1name').text(playerOne.name)
    $('.p2name').text(playerTwo.name)

})

//attach click handler to game piece that will place into board column

let counter = 2

$('.blank').on('click', function () {

    //function to not allow a piece to be overridden or clicked again
    if ($(this).hasClass('black') || $(this).hasClass('red') || $(this).next().hasClass('blank')) {
        return
    }
    //logic to alternate turns
    if (counter % 2 === 0) {
        $(this).toggleClass('blank').addClass('black')
        $('.piece').css('background-color', 'red')
    } else {
        $(this).toggleClass('blank').addClass('red')
        $('.piece').css('background-color', 'black')
    }

    //place each selected piece into the gameBoard array by color
    counter += 1
    rowLocation = this
    columnLocation = this.parentNode
    row = parseInt(rowLocation.classList[0])
    column = parseInt(columnLocation.classList[1])
    color = rowLocation.classList[1]
    gameBoard[row][column] = color

    if (color === 'black') {
        checkForWin(gameBoard, 'black')
    } else {
        checkForWin(gameBoard, 'red')
    }
    return false
})


//attach click handler to clear board button that will reload board

$('.clearBoard').on('click', function () {
    $('.black').addClass('blank').removeClass('black')
    $('.red').addClass('blank').removeClass('red')
    loadBoard()
    for (i = 0; i < gameBoard.length; i++) {
        for (j = 0; j < gameBoard[i].length; j++) {
            gameBoard[i][j] = ''
        }
    }
})

//logic to check vertical win

function verticalWin(array, color) {
    for (let i = 0; i < 7; i++) {
        if (array[0][i] === color
            && array[1][i] === color
            && array[2][i] === color
            && array[3][i] === color
        ) {
            alert(`${color} wins!`)
            return true
        }

        if (array[1][i] === color
            && array[2][i] === color
            && array[3][i] === color
            && array[4][i] === color
        ) {
            alert(`${color} wins!`)
            return true
        }

        if (array[2][i] === color
            && array[3][i] === color
            && array[4][i] === color
            && array[5][i] === color
        ) {
            alert(`${color} wins!`)
            return true
        }
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
        ) {
            alert(`${color} wins!`)
            return true
        }

        if (array[i][1] === color
            && array[i][2] === color
            && array[i][3] === color
            && array[i][4] === color
        ) {
            alert(`${color} wins!`)
            return true
        }

        if (array[i][2] === color
            && array[i][3] === color
            && array[i][4] === color
            && array[i][5] === color
        ) {
            alert(`${color} wins!`)
            return true
        }

        if (array[i][3] === color
            && array[i][4] === color
            && array[i][5] === color
            && array[i][6] === color
        ) {
            alert(`${color} wins!`)
            return true
        }
    }
    return false;
}

//logic to check diagonal wins

//bottom left to top right

function diagonalOne(array, color) {
    for (let i = 3; i < array.length; i++) {
        for (let j = 0; j < array[0].length; j++) {
            if (array[i][j] === color
                && array[i - 1][j + 1] === color
                && array[i - 2][j + 2] === color
                && array[i - 3][j + 3] === color
            ) {
                alert(`${color} wins!`)
                return true
            }
        }
    }
}


//bottom right to top left

function diagonalTwo(array, color) {
    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < 4; j++) {
            if (array[i][j] === color
                && array[i + 1][j + 1] === color
                && array[i + 2][j + 2] === color
                && array[i + 3][j + 3] === color
            ) {
                alert(`${color} wins!`)
                return true
            }
        }
    }
}


//function to check for game winner by color includes all 4 variations - vertical/horizontal
//forward diagonal and backward diagonal

function checkForWin(array, color) {
    if (verticalWin(array, color)
        || horizontalWin(array, color)
        || diagonalOne(array, color)
        || diagonalTwo(array, color)) {
            updateWins(color)
        }
}


//create counter to store player's number of wins

function updateWins(color) {
    if (color === 'black') {
        playerOne.gamesWon += 1
        $('.p1wins').text(playerOne.gamesWon)
    } else if (color === 'red') {
        playerTwo.gamesWon += 1
        $('.p2wins').text(playerTwo.gamesWon)
    }
    return false
}
