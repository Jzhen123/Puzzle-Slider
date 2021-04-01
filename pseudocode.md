Puzzle Slider Pseudocode

Note from Session

Steps

    1. Set State for Empty Tile Array
    2. In Render have something to check if Tile Array is populated
    3. Since we haven't made it yet, now we fill the Tile Array with 16 Tiles that are in their Win Position.
    4. Use a Shuffle Function that runs 10 or so times so the user sees a shuffled board
        Tile 15 will be the "blank" tile 
        Do a clickable move 10 times starting from the blank tile
        Have a button at all times so the user can shuffle
    5. User should now be able to click on the tiles next the blank tile to basically replace their positions
        Need a function to always check and update which tiles are moveable
    6. When the user moves the last tile in to the right spot display


View

    - 4x4 
        Create using map of as many columns as we need. Rows are auto made based on col size
        Each tile may be like 100x100 pixels and split a picture into 16 tiles
    - 1 Open square
    - Score?
    

Model

    - Heirarchy
        App
            Board
                Tile

    - Data Structure
        Either manage array position or manage object's props to "switch" tiles
        Tile array of objects
            tiles = [{ }, { }, { }]
                Each object may have:
                    id:
                    currentPos: (could be x,y coordinate)
                    winPos


Controller
    
    - Solving the puzzle
    - Shuffle the board 
        Need to have a button that can do this at any time
        Also may need to be ran at the start
    - Allowed moves based on the location of open square
 
    Mapping to display tiles 
        Array of objs
            obj = {
            currentPos: {x:0, y:0}
            winPos:
            blank:
            clickable:
            }

        Array.map(value, index) => {
        return (
            <Tile pos = value.currentPos>
        )
        }

Functions 

    setClickability - Should run on every click
        find Tile that is blank
        then save its current position
        then using some math logic, set all Tiles that are "next" to the white tile clickable property to true and somehow set all the others to false

    move -
        Make temp array
        Switch the currentPos value with the blank tile in temp array
        Update clickablility values of the tiles using setClickability
        setState using the temp array

    haveWeWon -
        If all objects currentPos == winPos
        then display that the user wins

    shuffle -
        Do a bunch of random moves that use the move function we made
        Make sure to shuffle again if the board is in a winning state
        Find the first object that has clickable == true and then run the move function for it

        


