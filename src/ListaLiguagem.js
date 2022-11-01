import '../src/CurriculoC.css' 
import icon1 from './img/icon2.png';
import icon2 from './img/icon4.png';
import icon3 from './img/icon3.png';
import icon4 from './img/icon1.png';
import icon5 from './img/icon5.png';
import icon6 from './img/icon6.png';
import icon8 from './img/icon8.png';
import icon9 from './img/icon9.png';
function ListaLinguagem(){
return(
    <>
 <h3>Lista de Liguagem de programação</h3>    
<ul>
    <li className="liguagens">
    <img src={icon1} alt='figure' style={{ width: 40, backgroundColor:'white',height: 40, marginTop: 20}} />
    </li>
    <li className='liguagens'>
    <img src={icon2} alt='figure' style={{ width: 58,backgroundColor:'white', height: 57, marginTop: 20}} />
    </li>
    <li  className='liguagens'>
    <img src={icon3} alt='figure' style={{ width: 77,backgroundColor:'white', height: 60, marginTop: 20 }} />
    </li>
    <li  className='liguagens'>
    <img src={icon4} alt='figure' style={{ width: 40,backgroundColor:'white', height: 40, marginTop: 20 }} />
    </li>
    <li  className='liguagens'>
    <img src={icon5} alt='figure' style={{ width: 40,backgroundColor:'white', height: 40, marginTop: 20 }} />
    </li>
    <li  className='liguagens'>
    <img src={icon6} alt='figure' style={{ width: 47,backgroundColor:'white', height: 40,marginTop: 20}} />
    </li> 
    <li  className='liguagens'>
    <img src={icon8} alt='figure' style={{ width: 47,backgroundColor:'white', height: 40,marginTop: 20}} />
    </li>
    <li  className='liguagens'>
    <img src={icon9} alt='figure' style={{ width: 66,backgroundColor:'white', height: 66,marginTop: 20}} />
    </li>
</ul>
    </>
);
}

export default ListaLinguagem;