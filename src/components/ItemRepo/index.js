import React from 'react'
import { ItemContainer } from './styles';

function ItemRepo({repo, handleRemoveRepo}) {
    
   // const handleRemoveRepo = () => {
   //    handleRemoveRepo(repo.id)
   // }
    
    return (
        <ItemContainer onClick={handleRemoveRepo}>
            <h3>{repo.name}</h3>
            <p>{repo.full_name}</p>
            <a href={repo.html_url} rel="_blank" >Ver repositorio</a><br/>
            <a href='#' rel="noreferrer" className="remover">Remover</a>
            <hr />
        </ItemContainer>
    )
}

export default ItemRepo;