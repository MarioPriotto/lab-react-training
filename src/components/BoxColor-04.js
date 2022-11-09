import './BoxColor-04.css';

function BoxColor (props) {
    
    let colorBack = "rgb(" + props.r.toString() + "," + props.g.toString() + "," + props.b.toString() + ")";
    
    let r1 = props.r + 128; 
    r1 = r1 > 255 ? r1 - 255 : r1;
    let r2 = props.g + 128;
    r2 = r2 > 255 ? r2 - 255 : r2;
    let r3 = props.b + 128;
    r3 = r3 > 255 ? r3 - 255 : r3;
    let colorText = "rgb(" + r1.toString() + "," + r2.toString() + "," + r3.toString() + ")";

    let divBack = { backgroundColor: colorBack };
    let divText = { color: colorText };

    return (
        <div>
            <div className="c04-div" style={divBack}>
                <div style={divText}>  
                    {colorBack}
                </div>
            </div>
        </div>
    )
}

export default BoxColor;
