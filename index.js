const purchasePrice = document.querySelector("#purchase-price");
const quatityPurchased = document.querySelector("#quantity");
const marketPrice = document.querySelector("#current-price");
const calculateButton = document.querySelector("#calculate");
const outputEl = document.querySelector("#output");

function calculateProfitAndLoss() {
  let calculation = purchasePrice.value * quatityPurchased.value;

  if (
    purchasePrice.value === "" ||
    marketPrice.value === "" ||
    quatityPurchased.value === ""
  ) {
    outputEl.innerText = "The feilds can't be empty!";
  } else if (
    purchasePrice.value <= 0 ||
    marketPrice.value <= 0 ||
    quatityPurchased.value <= 0
  ) {
    outputEl.innerText = "The values can't be negative or zero!";
  } else {
    if (Number(purchasePrice.value) > Number(marketPrice.value)) {
      var loss =
        (Number(purchasePrice.value) - Number(marketPrice.value)) *
        quatityPurchased.value;
      var lossPercentage = (loss / calculation) * 100;
      outputEl.innerText = `The loss is ${loss} and the percentage of loss is ${lossPercentage}`;
    } else if (Number(purchasePrice.value) < Number(marketPrice.value)) {
      var profit =
        (Number(marketPrice.value) - Number(purchasePrice.value)) *
        quatityPurchased.value;
      var profitPercentage = (profit / calculation) * 100;
      outputEl.innerText = `The profit is ${profit} and the percentage of profit is ${profitPercentage}`;
    } else {
      outputEl.innerText = "There is no profit no loss yet.";
    }
  }
}

calculateButton.addEventListener("click", calculateProfitAndLoss);