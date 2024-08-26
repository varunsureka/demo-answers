import { render, screen } from "@testing-library/react";
import { ShoppingBagHeader } from "./components/ShoppingBagHeader";
import { ProductList } from "./components/ProductList";
import App from "./App";
import { ShoppingBag } from "./components/ShoppingBag";
import { fireEvent } from "@testing-library/react";

let productList = [
  { id: 1, name: "Product 1", price: 10, quantity: 1 },
  { id: 2, name: "Product 2", price: 30, quantity: 3 },
];

// describe test cases for initial load
describe("initial load", () => {
  test("renders product list correctly", () => {
    render(<ShoppingBag productData={productList} />);
    const productElements = screen.getAllByTestId("product-list");
    expect(productElements).toHaveLength(productList.length);
  });
  test("renders count in shopping bag header correctly", () => {
    render(<ShoppingBag productData={productList} />);
    const itemCountElement = screen.getByTestId("item-count");
    expect(itemCountElement).toHaveTextContent(4);
  });
  test("renders subtotal and total correctly on initial load", () => {
    render(<ShoppingBag productData={productList} />);
    const subTotalElement = screen.getByText("Subtotal");
    expect(subTotalElement).toHaveTextContent(100);
    const taxElement = screen.getByText("Tax");
    const totalElement = screen.getByText("Total");
    expect(totalElement).toHaveTextContent(
      taxElement.value + subTotalElement.value
    );
  });
}, 0);

// describe test cases for quantity update
describe("quantity update", () => {
  test("header updated successfully", () => {
    render(<ShoppingBag productData={productList} />);
    const quantityInput = screen.getAllByTestId("quantity")[0];
    fireEvent.change(quantityInput, { target: { value: "5" } });
    const itemCountElement = screen.getByTestId("item-count");
    expect(itemCountElement).toHaveTextContent(8);
  });
  test("header updated successfully 2 ", () => {
    render(<ShoppingBag productData={productList} />);
    const quantityInput = screen.getAllByTestId("quantity")[0];
    fireEvent.change(quantityInput, { target: { value: "" } });
    const valueToType = '888';
    for (let char of valueToType) {
      fireEvent.change(quantityInput, { target: { value: quantityInput.value + char } });
    }

    const itemCountElement = screen.getByTestId("item-count");
    expect(itemCountElement).toHaveTextContent(91);
  });
  test("subtotal and total updated successfully", () => {
    render(<ShoppingBag productData={productList} />);
    const quantityInput = screen.getAllByTestId("quantity")[0];
    fireEvent.change(quantityInput, { target: { value: "5" } });
    const subTotalElement = screen.getByText("Subtotal");
    expect(subTotalElement).toHaveTextContent(140);
    const taxElement = screen.getByText("Tax");
    const totalElement = screen.getByText("Total");
    expect(totalElement).toHaveTextContent(
      taxElement.value + subTotalElement.value
    );
  });
}, 0);

// describe test case for remove product
describe("remove product", () => {
  test("product removed successfully from DOM", () => {
    render(<ShoppingBag productData={productList} />);
    const removeButton = screen.getAllByTestId("remove-button")[0];
    fireEvent.click(removeButton);
    const productElements = screen.getAllByTestId("product-list");
    expect(productElements).toHaveLength(productList.length - 1);
  });
  test("header updated successfully", () => {
    render(<ShoppingBag productData={productList} />);
    const removeButton = screen.getAllByTestId("remove-button")[0];
    fireEvent.click(removeButton);
    const itemCountElement = screen.getByTestId("item-count");
    expect(itemCountElement).toHaveTextContent(3);
  });
  test("subtotal and total updated successfully", () => {
    render(<ShoppingBag productData={productList} />);
    const removeButton = screen.getAllByTestId("remove-button")[0];
    fireEvent.click(removeButton);
    const subTotalElement = screen.getByText("Subtotal");
    expect(subTotalElement).toHaveTextContent(90);
    const taxElement = screen.getByText("Tax");
    const totalElement = screen.getByText("Total");
    expect(totalElement).toHaveTextContent(
      taxElement.value + subTotalElement.value
    );
  });
});

// describe test cases for promo code
describe("promo code", () => {
  const PROMOTIONS = [
    {
      code: "SUMMER",
      discount: "50%"
    },
    {
      code: "AUTUMN",
      discount: "40%"
    },
    {
      code: "WINTER",
      discount: "30%"
    }
  ];
  test("discount applied successfully", () => {
    render(<ShoppingBag productData={productList} promotionsData={PROMOTIONS} />);
    const promoCodeInput = screen.getByLabelText("Have A Promo Code?");
    fireEvent.change(promoCodeInput, { target: { value: "SUMMER" } });
    const applyButton = screen.getByText("Apply");
    fireEvent.click(applyButton);
    const discountElement = screen.getByText("Discount");
    expect(discountElement).toHaveTextContent(50);
    const subTotalElement = screen.getByText("Subtotal");
    expect(subTotalElement).toHaveTextContent(100);
    const taxElement = screen.getByText("Tax");
    const totalElement = screen.getByText("Total");
    expect(totalElement).toHaveTextContent(
      taxElement.value + subTotalElement.value - discountElement.value
    );
  });
});
