import CartItem from "./CartItem";
import { expect, vi, describe, it } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";

describe("CartItem", () => {
  const mockProduct = {
    id: 1,
    title: "sample product",
    image: "sample.jpg",
    price: 19.99,
  };
  it("renders entire product added to cart", () => {
    render(
      <CartItem
        product={mockProduct}
        itemQuantity={2}
        increaseQuantity={() => {}}
        decreaseQuantity={() => {}}
        removeFromCart={() => {}}
      />
    );

    expect(screen.getByText("sample product")).toBeInTheDocument();
    expect(screen.getByText("19.99")).toBeInTheDocument();
    expect(screen.getByText("2")).toBeInTheDocument();
    expect(screen.getByRole("img")).toHaveAttribute("src", "sample.jpg");
  });

  it("calls increaseQuantity when + is clicked", () => {
    const increaseMock = vi.fn();
    render(
      <CartItem
        product={mockProduct}
        itemQuantity={2}
        increaseQuantity={increaseMock}
        decreaseQuantity={() => {}}
        removeFromCart={() => {}}
      />
    );

    const plusButton = screen.getByText("+");
    fireEvent.click(plusButton);

    expect(increaseMock).toHaveBeenCalledWith(1);
  });

  it("calls decreaseQuantity when - is clicked", () => {
    const decreaseMock = vi.fn();

    render(
      <CartItem
        product={mockProduct}
        itemQuantity={2}
        increaseQuantity={() => {}}
        decreaseQuantity={decreaseMock}
        removeFromCart={() => {}}
      />
    );

    const minusButton = screen.getByText("-");
    fireEvent.click(minusButton);

    expect(decreaseMock).toHaveBeenCalledWith(1);
  });

  it("calls removeFromCart when Remove is clicked", () => {
    const removeMock = vi.fn();

    render(
      <CartItem
        product={mockProduct}
        itemQuantity={2}
        increaseQuantity={() => {}}
        decreaseQuantity={() => {}}
        removeFromCart={removeMock}
      />
    );

    const removeButton = screen.getByText("Remove");
    fireEvent.click(removeButton);

    expect(removeMock).toHaveBeenCalledWith(1);
  });
});
