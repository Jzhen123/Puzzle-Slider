function Tile(props) {
    return (
        <div id="Tile" className="col-3 border square">
            {props.pos}
        </div>
    )
}
export default Tile;