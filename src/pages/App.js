
import { useState } from 'react';
import Input from '../components/Input';
import ItemRepo from '../components/ItemRepo';
import Button from '../components/Button';
import { api } from '../services/api';

import { Container } from './styles';

function App() {

  const [currentRepo, setCurrentRepo] = useState('');
  const [respos, setRespos] = useState([]);

  const handleSearchRepo = async () => {

    const {data} = await api.get(`repos/${currentRepo}`)

    if (data.id) {
      setRespos(prev => [...prev, data])
    }
  }

  return (
    <Container>
      <img src="https://cdn-icons-png.flaticon.com/512/25/25231.png" width={50} height={50} alt="github logo"/>
      <Input value={currentRepo} onChange={(e) => setCurrentRepo(e.target.value)}/>
      <Button onClick={handleSearchRepo}/>
      {respos.map(repo => <ItemRepo repo={repo}/>)}
    </Container>
  );
}

export default App;
