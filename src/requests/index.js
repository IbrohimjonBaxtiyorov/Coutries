export async function getCountries(point = "all", countryName) {
  let url = `https://restcountries.com/v3.1/`;

  if (countryName) {
    url += `name/${countryName}`;
  } else {
    url += point;
  }

  const req = await fetch(url);
  if (req.status === 200) {
    const res = await req.json();
    return res;
  } else {
    throw new Error("Xatolik bo'ldi, ko'rmisan?");
  }
}
