import axios from "axios";
import { useEffect, useState } from "react";

const URL_API = "https://api.dictionaryapi.dev/api/v2/entries/en/";
type wordProps = {
  wordSearch: string;
};

function Definitions({ wordSearch }: wordProps) {
  const [fetchedData, setFetchedData] = useState([]);

  // process word data retrieved via api
  useEffect(() => {
    const urlApi = URL_API + wordSearch;

    const getData = async () => {
      const res = await axios.get(urlApi);
      const data = res.data;
      setFetchedData(data);
    };
    getData();

    //console.log(fetchedData);
  }, [wordSearch]);

  console.log(fetchedData);
  return (
    <ul className='definition'>
      {fetchedData.map((item, idx) => (
        <li key={`word-${idx}`}>
          <strong>{item.word}</strong> ({item.phonetic})
          {console.log(item.meanings)}
          <ul>
            {item.meanings.map((m, idm) => (
              <li key={`meaning-${idm}`}>
                {m.partOfSpeech}
                <ul>
                  {m.definitions.map((d, idd) => (
                    <li key={`definition-${idd}`}>{d.definition}</li>
                  ))}
                </ul>
              </li>
            ))}
          </ul>
        </li>
      ))}
    </ul>
  );
}

export default Definitions;
