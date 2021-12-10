import { useState, useEffect } from 'react';
import './filme-info.css';
import { useParams } from 'react-router';
import api from '../../services/api';
import { useHistory } from 'react-router-dom';

export default function Filme() {
  const { id } = useParams();
  const history = useHistory();
  const [filme, setFilme] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadFilme() {
      const response = await api.get(`r-api/?api=filmes/${id}`);
      if (response.data.length === 0) {
        history.replace('/');
        return;
      }
      setFilme(response.data);
      setLoading(false);
    }
    loadFilme();
    return () => {};
  }, [history, id]);

  if (loading) {
    return (
      <div>
        <h1 style={{ color: 'white' }}>Carregando...</h1>
      </div>
    );
  }
  return (
    <div className="filme-info">
      <h1>{filme.nome}</h1>
      <img src={filme.foto} alt={filme.nome} />
      <h3 style={{ color: '#fff' }}>Sinopse</h3>
      <p>{filme.sinopse}</p>
      <div className="botoes">
        <button onClick={() => {}}>Salvar</button>
        <button>
          <a
            target="_blank"
            href={`https://www.youtube.com/results?search_query=${filme.nome} Trailer`}
          >
            Trailer
          </a>
        </button>
      </div>
    </div>
  );
}
