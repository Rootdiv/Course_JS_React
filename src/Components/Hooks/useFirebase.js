import {
  useEffect,
  useState
} from 'react';

export const useFirebase = database => {
  const [response, setResponse] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const json = await database().ref('goods').once('value');
        const res = await json.val();
        setResponse(res);
      } catch (err) {
        setError(err);
      }
    };
    fetchData();
  }, [database]);
  return {
    response,
    error
  };
};
