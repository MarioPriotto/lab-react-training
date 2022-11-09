import './Greetings-02.css';

let objetoTraducao = new Map();
objetoTraducao.set("de","Hallo");
objetoTraducao.set("en","Hello");
objetoTraducao.set("es","Hola");
objetoTraducao.set("fr","Bonjour");

function Greetings (props) {
    return (
        <div>
            <section className="c02-section">
                {objetoTraducao.get(props.lang) + " " + props.children}
            </section>        
        </div>
    )
}

export default Greetings;
