test("Sucessful login shows the homepage", async function() {
  // Press the Login Button - opens menu
  await element(by.id("LoginButton")).press();
  // Enter email
  await element(by.id("LoginEmail")).inputText("test@email.in");
  // Enter password
  await element(by.id("LoginPassword")).inputText("excellentpassword");
  // Press submit
  await element(by.id("SubmitButton")).press();

  // Final destination on successful login -- SUCCESS!
  await expect(element(by.id("HomePage"))).toBeVisible();
});
