const processOrder = () => {
  console.log("Waiting for fisrt customer to complete");
  setTimeout(() => {
    console.log("Second customer Finished");
  }, 3000);
  setTimeout(() => {
    console.log("Second customer's Order has been taken");
  }, 2000);
  console.log("First customer paid bill");
};
console.log("Hi this is chinese resturaunt \n");

processOrder();
console.log("Thank you please visit again");
