import '../src/CurriculoC.css'

/*
import im from '../src/img/im2.jpeg'; */
import icone1 from '../src/img/png1.png';
import icone2 from '../src/img/png2.png';
import Historico from './Historico';
import ListaInteresse from './ListaInteresse';
import ListaLinguagem from './ListaLiguagem';
import Rodape from './Rodape';
import Tabela from './TabelaH';

function Curriculo() {
   return (
      <>
         <section>
       
            <div id='posicao'>
               <div id='retangulo'>
                  <div id='top'>
                     
                 <div id="perfil"></div>
                     <div className='textos'>
                      
                       <h1 id='ajuste'>Ihosana de Assis</h1>
                     
                        <ul>
                           <li className='ajustIcones'>
                              <img src={icone2} alt='Github' style={{width:30, height:30}}/>
                             <p className='ajustTituloIcone'> GitHub:<a href='https://github.com/ihosana'>https://github.com/ihosana</a></p>
                           </li>
                           <li className='ajustIcones'> 
                           <img src={icone1} alt='Github' style={{width:30, height:30}}/> 
                              <p className='ajustTituloIcone'>Linkedin:<a href=' https://www.linkedin.com/in/ihosana-de-assis-667016217/'> https://bityli.com/LOJrbEqRW</a></p>
                           </li>
                        </ul>
                     </div>

                  </div>
                  <Historico/>
               </div>
               <div id='descricao'>
                  <h3>Descrição Pessoal</h3>
                 <div>
                 
                     <p>
                     Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in
                      a piece of classical Latin literature from 45 BC, making it over 2000 years old.R
                      ichard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looke
                      d up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage
                      , and going through the cites of the word in classical literature, discovered the
                       undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de F
                       inibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in
                        45 BC. This book is a treatise on the theory of ethics, very popular during the
                        Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes
                         from a line in section 1.10.32.Nascida no interior da Bahia(BA). Teve a oportunidade de estudar
                     no Rio Grande do Norte(RN) e de deixar sua familia para dá um futuro
                     melhor para sua mãe. E ainda na luta para realizar seus sonhos idependente
                     das dificuldades e dos obstaculos. 
                     </p>
                 </div>
                   
                     <hr className="linha1"/>
                     <ListaInteresse/>
                     <hr className="linha1"/>
                     <ListaLinguagem/>
                     <hr className="linha1"/>
                     <Tabela/>
                  
               </div>
            </div>
            <Rodape/>
         </section>

      </>);
}

export default Curriculo;