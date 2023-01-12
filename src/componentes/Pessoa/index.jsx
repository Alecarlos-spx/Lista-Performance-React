import React, { memo } from 'react'

export default memo(function Pessoa({nome, deletar, id}) {
    console.log(`Pessoa: ${nome} renderizado`);
  return (
    <li className='box mb-3'>
        {nome}
        <button className='button is-danger ml-2' onClick={() => deletar(id)}>
            Me delete!
        </button>
    </li>
  )
}
)