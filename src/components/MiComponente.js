import React, {Component} from 'react';

class MiComponente extends Component{

    render(){

        let skills = {
            nombre: 'Programador web',
            habilidades:['PHP','Laravel','Vue','Bootstrap'],
            senority:'semi-senior'
        };

        return(
            <div className="mi-componente">
                <h1>Soy Sebastian Rojas</h1>
                <h3>{skills.nombre}</h3>
                <h3>{'Señority: ' +  skills.senority}</h3>
                <h4>Habilidades:</h4>
                <ol>
                    {
                        skills.habilidades.map((habilidad, i) => {
                            return(
                                <li key={i}>{habilidad}</li>
                            );
                        })
                    }
                </ol>
                <hr/>
            </div>
            
        );
    }
}

export default MiComponente;