import trollface from '../images/troll face.png'
const Nav = () => {
    const style = {
        height:'72px'
    }
    return ( 
        <nav className="meme--nav">
            <img src = {trollface} alt="meme troll face" style={style} />
            <h2 className='nav--title'>Meme Generator</h2>
            <h3 className='course'>React Course - project 3</h3>
        </nav>
     );
}
 
export default Nav;