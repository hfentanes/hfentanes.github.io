//mi objeto
const order = {};

//compruebo si hay una ciudad
if (!order?.customer?.address?.city) {
  console.log("City is required");
}
