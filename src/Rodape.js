import '../src/CurriculoC.css'
import rodape from '../src/img/img2.png';
function Rodape() {
    return (<>

        <footer>
           <div id="rodape">
               <img src={rodape} alt='rodape' style={{ width: 160, height: 35 }} />
                <p id="legenda">Ihosana de Assis| Copyright © 2022 UFRN</p>
            </div>
        </footer>
    </>);
}

export default Rodape;