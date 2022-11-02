import { render } from "@testing-library/react";
import { FirstApp } from "../src/FirstApp";

describe("Pruebas en First App", () => {
  /* test("debe de hacer match con el snapshot", () => {
    const title = "Hola, soy Carmelo";
    const { container } = render(<FirstApp title={title} />);
    expect(container).toMatchSnapshot();
  }); */

  test("debe mostrar el título en un h1", () => {
    const title = "Hola, soy Carmelo";
    const { container, getByText, getByTestId } = render(
      <FirstApp title={title} />
    );

    expect(getByText(title)).toBeTruthy(); // que en el render exista ese titulo
    expect(getByTestId("test-title").innerHTML).toContain(title);
  });

  test("debe de mostrar el subtítulo enviado por props", () => {
    const title = "Hola, soy Carmelo";
    const subtitle = "Soy un subtítulo";
    const { getAllByText } = render(
      <FirstApp title={title} subtitle={subtitle} />
    );

    expect(getAllByText(subtitle).length).toBe(2); // que el subtitle exista dos veces con el mismo valor
  });
});
