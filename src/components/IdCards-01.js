import './IdCards-01.css';

let matrizIdCards = [
    {lastName: 'Santos', firstName: 'Cristina', gender: 'female', height: 170, birth: new Date("1992-01-10"), picture: "https://randomuser.me/api/portraits/women/14.jpg"},
    {lastName: 'Silva', firstName: 'John', gender: 'male', height: 171, birth: new Date("1993-02-11"), picture: "https://randomuser.me/api/portraits/men/24.jpg"},
    {lastName: 'Pereira', firstName: 'Adriana', gender: 'female', height: 172, birth: new Date("1994-03-12"), picture: "https://randomuser.me/api/portraits/women/34.jpg"},
    {lastName: 'Gonçalves', firstName: 'Linda', gender: 'female', height: 173, birth: new Date("1995-04-13"), picture: "https://randomuser.me/api/portraits/women/44.jpg"},
    {lastName: 'Ribeiro', firstName: 'John', gender: 'male', height: 174, birth: new Date("1996-05-14"), picture: "https://randomuser.me/api/portraits/men/54.jpg"},
    {lastName: 'Pires', firstName: 'Carlos', gender: 'male', height: 175, birth: new Date("1997-06-15"), picture: "https://randomuser.me/api/portraits/men/64.jpg"},
];

function IdCards () {

    const cards = matrizIdCards.map( (current, index, array) => {
        return (
            <article className="artName" key={index}>
                <img className="imgFoto" src={current.picture} alt={'Imagem Linha '+index}/>
                <div className='divDados'>
                    <p className="titName">First name: <span className="texName">{current.firstName}</span></p>
                    <p className="titName">Last name: <span className="texName">{current.lastName}</span></p>
                    <p className="titName">Gender: <span className="texName">{current.gender}</span></p>
                    <p className="titName">Height: <span className="texName">{current.height}</span></p>
                    <p className="titName">Birth: <span className="texName">{ current.birth.toDateString() }</span></p>
                </div>
            </article>
        );
    });

    return (
        <div>
            { cards }
        </div>
    )
}

export default IdCards;
