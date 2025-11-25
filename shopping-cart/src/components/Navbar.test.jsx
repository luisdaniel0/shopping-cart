import { expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import Navbar from "./Navbar";

test("renders Home, Shop, and Cart link", () => {
  render(
    <MemoryRouter>
      <Navbar productsInCart={3} />
    </MemoryRouter>
  );

  expect(screen.getByRole("link", { name: "Home" })).toBeInTheDocument();
  expect(screen.getByRole("link", { name: "Shop" })).toBeInTheDocument();
  expect(screen.getByRole("link", { name: "Cart (3)" })).toBeInTheDocument();
});

test("all links point to the right router", () => {
  render(
    <MemoryRouter>
      <Navbar productsInCart={2} />
    </MemoryRouter>
  );

  expect(screen.getByRole("link", { name: "Home" }).getAttribute("href")).toBe(
    "/"
  );
  expect(screen.getByRole("link", { name: "Shop" }).getAttribute("href")).toBe(
    "/shop"
  );
  expect(
    screen.getByRole("link", { name: "Cart (2)" }).getAttribute("href")
  ).toBe("/cart");
});

test("displays the correct number of products in cart", () => {
  render(
    <MemoryRouter>
      <Navbar productsInCart={10} />
    </MemoryRouter>
  );

  expect(screen.getByRole("link", { name: "Cart (10)" })).toBeInTheDocument();
});
