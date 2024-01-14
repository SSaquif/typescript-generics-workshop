import { expect, it } from "vitest";
import { Equal, Expect } from "../helpers/type-utils";

// The explanation in the course is really good. The right side column
// Clarifies a few more things
export class Component<TProps> {
  private props: TProps;

  constructor(props: TProps) {
    this.props = props;
  }

  getProps = () => this.props;
}

// I just didnt name it TProps to  show that you can name it anything
const cloneComponent = <T>(component: Component<T>) => {
  return new Component(component.getProps());
};

it("Should clone the props from a passed-in Component", () => {
  const component = new Component({ a: 1, b: 2, c: 3 });

  const clonedComponent = cloneComponent(component);

  const result = clonedComponent.getProps();

  expect(result).toEqual({ a: 1, b: 2, c: 3 });

  type tests = [
    Expect<Equal<typeof result, { a: number; b: number; c: number }>>
  ];
});
