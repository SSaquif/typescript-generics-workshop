import { expect, it } from "vitest";
import { Equal, Expect } from "../helpers/type-utils";

// See solution for better solution (see video explanation to know why that's better)
const fetchData = async <T>(url: string): Promise<T> => {
  // here data is of type any instead of T
  // basically asign a type to data, instead of return type in the function definition
  const data = await fetch(url).then((response) => response.json());
  return data;
};

it("Should fetch data from an API", async () => {
  const data = await fetchData<{ name: string }>(
    "https://swapi.dev/api/people/1"
  );
  expect(data.name).toEqual("Luke Skywalker");

  type tests = [Expect<Equal<typeof data, { name: string }>>];
});
