import { expect, it } from "vitest";
import { Equal, Expect } from "../helpers/type-utils";

// was testing with extends keyword in the class generic
type T1 = {
  a: number;
  b: number;
  c: number;
};

type T2 = {
  a: string;
  b: number;
  c: boolean;
};

// export class Component<TProps extends T1> {
export class Component<TProps> {
  private props: TProps;

  constructor(props: TProps) {
    this.props = props;
  }

  getProps = () => this.props;
}

it("Should create an object containing props", () => {
  const component = new Component({ a: 1, b: 2, c: 3 });

  // this should have type inference
  const result = component.getProps();

  expect(result).toEqual({ a: 1, b: 2, c: 3 });

  type tests = [
    Expect<Equal<typeof result, { a: number; b: number; c: number }>>
  ];
});
