import countryList from "../data/countryList";

export default function autoComplete(str: string) {
  const list: string[] = [];
  const length = countryList.length;
  countryList.forEach((c) => {
    if (c.toLowerCase().includes(str.toLowerCase())) {
      list.push(c);
    }
  });
  return list;
}
