import './Random-03.css';

function Random (props) {
    return (
        <div>
            <section className="c03-section">
                Random value between {props.min} and {props.max} => { Math.floor(Math.random() * ((props.max - props.min) + 1) + props.min ) }
            </section>
        </div>
    )
}

export default Random;
