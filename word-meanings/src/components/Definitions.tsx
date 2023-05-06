import axios from "axios";

const URL_API = "https://api.dictionaryapi.dev/api/v2/entries/en/";
//{word && <Definitions word={word/>}

// process word data retrieved via api
//   useEffect(() => {
//     console.log(fetchedData);
//   }, [fetchedData]);
//   const [fetchedData, setFetchedData] = useState([]);
//   // call api only when user submits search
//   function buttonHandler() {
//     const urlApi = URL_API + word;
//     const getData = async () => {
//       const result = await axios.get(urlApi);
//       setFetchedData(result.data);
//     };
//     getData();
//   }
type wordProps = {
  wordSearch: string
}
function Definitions({wordSearch}:wordProps) {
  return <section className='definition'>
    {wordSearch}
    </section>;
}

export default Definitions;
