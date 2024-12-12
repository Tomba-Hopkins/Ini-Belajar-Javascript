const cash = document.querySelector("#cash");
const purchaseBtn = document.querySelector("#purchase-btn");
const changeDue = document.querySelector("#change-due");

const price = 19.5;
const cid = [
  ["PENNY", 1.01],
  ["NICKEL", 2.05],
  ["DIME", 3.1],
  ["QUARTER", 4.25],
  ["ONE", 90],
  ["FIVE", 55],
  ["TEN", 20],
  ["TWENTY", 60],
  ["ONE HUNDRED", 100],
];

const calculateChange = (change, cid) => {
  const currencyUnit = {
    PENNY: 0.01,
    NICKEL: 0.05,
    DIME: 0.1,
    QUARTER: 0.25,
    ONE: 1,
    FIVE: 5,
    TEN: 10,
    TWENTY: 20,
    "ONE HUNDRED": 100,
  };

  const changeArray = [];
  let totalCid = cid.reduce((sum, [, amount]) => sum + amount, 0);
  totalCid = Math.round(totalCid * 100) / 100;

  if (change > totalCid) {
    return { status: "INSUFFICIENT_FUNDS", change: [] };
  }

  const drawer = [...cid].reverse();
  let changeLeft = change;

  drawer.forEach(([unit, amount]) => {
    let toGive = 0;
    const unitValue = currencyUnit[unit];

    while (changeLeft >= unitValue && amount > 0) {
      changeLeft -= unitValue;
      changeLeft = Math.round(changeLeft * 100) / 100;
      amount -= unitValue;
      toGive += unitValue;
    }

    if (toGive > 0) {
      changeArray.push([unit, toGive]);
    }
  });

  if (changeLeft > 0) {
    return { status: "INSUFFICIENT_FUNDS", change: [] };
  }

  if (totalCid === change) {
    return { status: "CLOSED", change: changeArray.reverse() };
  }

  return { status: "OPEN", change: changeArray.reverse() };
};

purchaseBtn.addEventListener("click", () => {
  const cashFloat = parseFloat(cash.value);

  changeDue.style.display = "block";

  if (isNaN(cashFloat)) {
    alert("Customer does not have enough money to purchase the item");
    return;
  }

  const kembalian = cashFloat - price;

  if (kembalian < 0) {
    alert("Customer does not have enough money to purchase the item");
    return;
  }

  if (kembalian === 0) {
    changeDue.textContent = "No change due - customer paid with exact cash";
    return;
  }

  const result = calculateChange(kembalian, cid);

  if (result.status === "INSUFFICIENT_FUNDS") {
    changeDue.textContent = "Status: INSUFFICIENT_FUNDS";
  } else if (result.status === "CLOSED") {
    changeDue.textContent = `Status: CLOSED ${formatChange(result.change)}`;
  } else {
    changeDue.textContent = `Status: OPEN ${formatChange(result.change)}`;
  }
});

function formatChange(change) {
  return change
    .map(([unit, amount]) => `${unit}: $${amount.toFixed(2)}`)
    .join(", ");
}
