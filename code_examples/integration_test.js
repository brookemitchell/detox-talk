import { CheckoutComponent } from "components";

test("Calls a very important function with the cart contents when pressed", () => {
  const checkoutHandler = jest.fn();
  const itemsInCart = ["peas", "porridge"];

  // Given
  const componentInstance = (
    <MyFavoutiteComponent onPress={checkoutHandler} itemsInCart={itemsInCart} />
  );

  // When
  render(componentInstance).simulate("press");

  //Then
  expect(checkoutHandler).toBeCalledWith(itemsInCart);
});
