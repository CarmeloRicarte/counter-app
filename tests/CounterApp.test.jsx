import { fireEvent, render, screen } from "@testing-library/react";
import CounterApp from "../src/CounterApp";

describe("Pruebas sobre <CounterApp />", () => {
  const initialValue = 100;
  test("debe hacer match con el snapshot", () => {
    const { container } = render(<CounterApp value={initialValue} />);
    expect(container).toMatchSnapshot();
  });

  test("debe mostrar el valor inicial de 100 pasado como prop", () => {
    render(<CounterApp value={initialValue} />);
    expect(screen.getByText(initialValue)).toBeTruthy();
  });

  test("debe de incrementar con el botón +1", () => {
    render(<CounterApp value={initialValue} />);
    fireEvent.click(screen.getByRole("button", { name: "test-increment" })); // simulate click in button
    expect(screen.getByRole("heading", { level: 2 }).innerHTML).toContain(
      "101"
    );
  });

  test("debe de decrementar con el botón -1", () => {
    render(<CounterApp value={initialValue} />);
    fireEvent.click(screen.getByRole("button", { name: "test-decrement" })); // simulate click in button
    expect(screen.getByRole("heading", { level: 2 }).innerHTML).toContain("99");
  });

  test("debe de funcionar el botón Reset", () => {
    render(<CounterApp value={initialValue} />);
    fireEvent.click(screen.getByRole("button", { name: "test-increment" }));
    fireEvent.click(screen.getByRole("button", { name: "test-increment" }));
    fireEvent.click(screen.getByRole("button", { name: "test-increment" }));
    fireEvent.click(screen.getByRole("button", { name: "test-reset" }));
    expect(screen.getByRole("heading", { level: 2 }).innerHTML).toContain(
      "100"
    );
  });
});
