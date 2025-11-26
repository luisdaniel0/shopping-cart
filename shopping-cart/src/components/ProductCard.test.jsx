import ProductCard from "./ProductCard";
import { expect, vi, describe, it } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";

describe("ProductCard", () => {
  const mockProduct = {
    id: 1,
    title: "sample product",
    image: "test.jpg",
    price: 19.99,
  };

  it("renders product details", () => {
    render(<ProductCard product={mockProduct} addToCart={() => {}} />);

    expect(screen.getByText("sample product")).toBeInTheDocument();
    expect(screen.getByText("19.99")).toBeInTheDocument();
    expect(screen.getByRole("img")).toHaveAttribute("src", "test.jpg");
  });

  it("increments when clicking +", () => {
    render(<ProductCard product={mockProduct} addToCart={() => {}} />);

    const input = screen.getByRole("spinbutton");
    const plusButton = screen.getByText("+");

    fireEvent.click(plusButton);

    expect(input.value).toBe("2");
  });

  it("does not decrement below 1", () => {
    render(<ProductCard product={mockProduct} addToCart={() => {}} />);

    const input = screen.getByRole("spinbutton");
    const minusButton = screen.getByText("-");

    fireEvent.click(minusButton);

    expect(input.value).toBe("1");
  });

  it("updates quantity when typing in the input", () => {
    render(<ProductCard product={mockProduct} addToCart={() => {}} />);

    const input = screen.getByRole("spinbutton");

    fireEvent.change(input, { target: { value: 5 } });

    expect(input.value).toBe("5");
  });

  it("calls addToCart with correct id and quantity", () => {
    const addToCartMock = vi.fn();

    render(<ProductCard product={mockProduct} addToCart={addToCartMock} />);

    const plusButton = screen.getByText("+");
    const addButton = screen.getByText("Add to Cart");

    fireEvent.click(plusButton);
    fireEvent.click(plusButton);

    fireEvent.click(addButton);

    expect(addToCartMock).toHaveBeenCalledWith(1, 3);
  });
});
