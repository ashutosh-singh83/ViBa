
export const paymentHandler = async (price, e) => {
    // Amount is extracted dynamically from the product data
    const amount = price * 100; // Convert to paise for INR
    const currency = "INR";
    const receiptId = "qwsaq1";
   const response = await fetch("/order", {
     method: "POST",
     body: JSON.stringify({
       amount,
       currency,
       receipt: receiptId,
     }),
     headers: {
       "Content-Type": "application/json",
     },
   });
   const order = await response.json();
   console.log(order);

   var options = {
     key: "rzp_test_tdA8dnYYhzqLRJ", // Enter the Key ID generated from the Dashboard
     amount, // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
     currency,
     name: "Acme Corp", //your business name
     description: "Test Transaction",
     image: "https://drive.google.com/file/d/1gD-FQPDTzk4rLU0VBD_ZjeL2FWwg0u1l/view?usp=sharing",
     order_id: order.id, //This is a sample Order ID. Pass the `id` obtained in the response of Step 1
     handler: async function (response) {
       const body = {
         ...response,
       };

       const validateRes = await fetch(
         "/order/validate",
         {
           method: "POST",
           body: JSON.stringify(body),
           headers: {
             "Content-Type": "application/json",
           },
         }
       );
       const jsonRes = await validateRes.json();
       console.log(jsonRes);
     },
     prefill: {
       //We recommend using the prefill parameter to auto-fill customer's contact information, especially their phone number
       name: "Web Dev Matrix", //your customer's name
       email: "webdevmatrix@example.com",
       contact: "9000000000", //Provide the customer's phone number for better conversion rates
     },
     notes: {
       address: "Razorpay Corporate Office",
     },
     theme: {
       color: "#3399cc",
     },
   };
   var rzp1 = new window.Razorpay(options);
   rzp1.on("payment.failed", function (response) {
     alert(response.error.code);
     alert(response.error.description);
     alert(response.error.source);
     alert(response.error.step);
     alert(response.error.reason);
     alert(response.error.metadata.order_id);
     alert(response.error.metadata.payment_id);
   });
   rzp1.open();
   e.preventDefault();
 };