
import '../src/CurriculoC.css'
import im from '../src/img/g.png'
import g1 from '../src/img/g2.png';
import g3 from './img/g3.png';
import g4 from './img/g4.png'
function Historico(){
    const config=({
        width:157, height:16
    })
return (
    <>
    <p className="cargo">Personalidades</p>
    <hr className="linha"/>
    <ul>
    
              
        <li className="personalidade">
            Bipolaridade:
        <img src={im} alt='Github' style={config}/>
        </li>
        <li className="personalidade">
            Perseverante:
            <img src={g1} alt='Github' style={config}/>
        </li>
        <li className="personalidade">
            Criativa:
            <img src={g3} alt='Github' style={config}/>
        </li>
        <li className="personalidade">
            Personificada:
            <img src={g4} alt='Github' style={config}/>
        </li>
        <li className="personalidade">
            Determinada:
            <img src={g4} alt='Github' style={config}/>
        </li>
    </ul>
    <p className="cargo">Habilidades</p>
    <hr className="linha"/>
    <ul>

        <li className="personalidade">
            Dominio do conteúdo:
            <img src={g1} alt='Github' style={config}/>
        </li>
        <li className="personalidade">
            Dedicada:
            <img src={g4} alt='Github' style={config}/>
        </li>
        <li className="personalidade">
            Inteligente:
            <img src={im} alt='Github' style={config}/>
        </li>
        <li className="personalidade">
            Aprendizagem rapida:
            <img src={g3} alt='Github' style={config}/>
        </li>
    </ul>
    </>
);
}
export default Historico;