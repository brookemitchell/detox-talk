test("When 'Buy Now' pressed - call checkoutHandler", () => {
  // Given
  const checkoutHandler = jest.fn();
  const itemsInCart = ["peas", "porridge"];
  const componentInstance = (
    <Cart onPress={checkoutHandler} itemsInCart={itemsInCart} />
  );

  // When
  render(componentInstance)
    .find({ text: "BUY NOW" })
    .simulate("press");

  //Then
  expect(checkoutHandler).toBeCalledWith(itemsInCart);
});
