import countryList from "../data/countryList";

export default function autoComplete(str: string) {
  // dont return results until we have at least 3 letters
  if (str.length < 3) return [];

  const list: string[] = [];
  const length = countryList.length;
  countryList.forEach((c) => {
    if (c.toLowerCase().includes(str.toLowerCase())) {
      list.push(c);
    }
  });
  return list;
}
