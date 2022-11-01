import '../src/CurriculoC.css' 

import icone1 from '../src/img/icone1.png';
import icone2 from '../src/img/icone2.png';
import icone3 from '../src/img/icone3.png';
import icone4 from '../src/img/icone4.png';
import icone5 from '../src/img/icone5.png';
import icone6 from '../src/img/icone6.png';
import icone7 from '../src/img/icone7.png';
import icone8 from '../src/img/icone8.png';
const valores={
  width:40, height:40
}
function ListaInteresse(){
return(
    <>
<h3>Lista de Interesses</h3>    
<div id='ajustarInteresse'>
<ul className='espacamento' style={{marginRight:70}}>
    <li className="espaco" >
    <img src={icone1} className='imagemIcon' alt='Github' style={valores}/>
                           
      <p className='ajust'>Terminar a Graduação</p>
    </li>
    <li className="espaco">
    <img src={icone2} className='imagemIcon' alt='Github' style={valores}/>
    <p className='ajust'> Conseguir um estágio</p>
     
    </li>
    <li className="espaco">
    <img src={icone3} className='imagemIcon' alt='Github' style={valores}/>
    <p className='ajust'> Ser idependente</p>
     
     
    </li>
    <li className="espaco">
    <img src={icone4} className='imagemIcon' alt='Github' style={valores}/>
    <p className='ajust'>  Ajudar minha mãe</p>
     
     
    </li>
</ul>
<ul className='espacamento'>
    <li className="espaco" >
    <img src={icone5} className='imagemIcon' alt='Github' style={valores}/>
                           
      <p className='ajust'>Realizar um sonho </p>
    </li>
    <li className="espaco">
    <img src={icone6} className='imagemIcon' alt='Github' style={valores}/>
    <p className='ajust'> Aprender o maximo</p>
     
    </li>
    <li className="espaco">
    <img src={icone7} className='imagemIcon' alt='Github' style={valores}/>
    <p className='ajust'>Conhecer lugares novos</p>
     
     
    </li>
    <li className="espaco">
    <img src={icone8} className='imagemIcon' alt='Github' style={valores}/>
    <p className='ajust'>  Aprender inglês</p>
     
     
    </li>
</ul>
</div>
    </>
);
}


export default ListaInteresse;