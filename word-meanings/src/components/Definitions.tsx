import axios from "axios";
import { useEffect, useState } from "react";

const URL_API = "https://api.dictionaryapi.dev/api/v2/entries/en/";
type wordProps = {
  wordSearch: string;
};
type DefinitionType = {
  definition: string;
  synonyms: string[];
  antonyms: string[];
};

type MeaningType = {
  partOfSpeech: string;
  definitions: DefinitionType[];
  synonyms: string[];
  antonyms: string[];
};

type dataProps = {
  word: string;
  phonetic: string;
  meanings: MeaningType[];
};

function Definitions({ wordSearch }: wordProps) {
  const [fetchedData, setFetchedData] = useState<dataProps[]>([]);

  // process word data retrieved via api
  useEffect(() => {
    const urlApi = URL_API + wordSearch;

    const getData = async () => {
      const res = await axios.get(urlApi);
      const data = res.data;
      setFetchedData(data);
    };
    getData();
  }, [wordSearch]);

  console.log(fetchedData);
  return (
    <ul className='definition'>
      {fetchedData.map(({ word, phonetic, meanings }, idx) => (
        <li key={`word-${idx}`}>
          <strong>{word}</strong> ({phonetic})
          <ul>
            {meanings.map(({ definitions, partOfSpeech }, index) => (
              <li key={`meaning-${index}`}>
                {partOfSpeech}
                <ul>
                  {definitions.map(({definition},idxd) => (
                    <li key={`definition-${idxd}`}>{definition}</li>
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
