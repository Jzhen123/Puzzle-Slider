function Tile(props) {

    if (props.blank === true){
        return (
            <div id="Tile" className="col-3 border square" />
        )
    }
    return (
        <div id="Tile" onClick={() => props.move(props.item)} className="col-3 border square text-center">
            {props.pos[1]}
        </div>
    )
}
export default Tile;