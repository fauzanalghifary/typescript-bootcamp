// const stuff: string[] = ["a", "b", "c"];

const color: [number, number, number] = [255, 0, 255];

type HTTPResponse = [number, string];

const goodRes: HTTPResponse = [200, "OK"];
// goodRes.push(123); GAK ERROR, EMANG ANEH.

const responses: HTTPResponse[] = [
  [404, "Not Found"],
  [200, "OK"],
];

// ================================================= ENUMS

const enum OrderStatus {
  PENDING,
  SHIPPED,
  DELIVERED,
  RETURNED,
}

const myStatus = OrderStatus.DELIVERED;

function isDelivered(status: OrderStatus) {
  return status === OrderStatus.DELIVERED;
}

isDelivered(OrderStatus.RETURNED);

const enum ArrowKey {
  UP = "up",
  DOWN = "down",
  LEFT = "left",
  RIGHT = "right",
}
