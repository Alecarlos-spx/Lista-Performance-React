import React, { useCallback, useState } from 'react';
import Pessoa from '../Pessoa'
import { faker } from '@faker-js/faker';

faker.locale = 'pt_BR';

export default function ListaPessoas() {
    const [pessoas, setPessoas] = useState([
        {
            nome: "Maria",
            id: faker.datatype.uuid()
        },
        {
            nome:"João",
            id: faker.datatype.uuid()

        }]);

const deletarPessoa = useCallback((id) => {
    setPessoas(listaAnterior => listaAnterior.filter(pessoa  => pessoa.id !== id))},[]);

   /* const deletarPessoa = (id) => {
        setPessoas(listaAnterior => listaAnterior.filter((pessoa, indexAnterior) => indexAnterior != id))
    }*/

  return (
    <div className='has-text-centered'>
        <ul>
            {pessoas.map((pessoa, index) => <Pessoa key={pessoa.id} {...pessoa} deletar={deletarPessoa}/>)}
        </ul>
        <button 
            className='button is-primary is-outlined' 
            onClick={() => 
                setPessoas(ListaAnterior => 
                    ([...ListaAnterior, 
                        {
                            nome: faker.name.firstName(), 
                            id: faker.datatype.uuid()
                        }
                    ])
                )
            }>
            Adicionar Pessoa
        </button>
    </div>
  )
}
