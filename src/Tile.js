function Tile(props) {
    return (
        <div id="Tile" className="col-3 border square">
            {props.pos[0]}, {props.pos[1]}
        </div>
    )
}
export default Tile;