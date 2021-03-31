Puzzle Slider Pseudocode

Note from Session

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

    - Allowed moves based on the location of open square