import { Equal, Expect } from "../helpers/type-utils";

// set default type argument to string
export const createSet = <T = string>() => {
  return new Set<T>();
};

// overide default type argument to number
const numberSet = createSet<number>();
const stringSet = createSet<string>();
const otherStringSet = createSet();

type tests = [
  Expect<Equal<typeof numberSet, Set<number>>>,
  Expect<Equal<typeof stringSet, Set<string>>>,
  Expect<Equal<typeof otherStringSet, Set<string>>>
];
