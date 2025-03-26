function calculateProfit() {
    let purchasePrice = parseFloat(document.getElementById('purchase-price').value) || 0;
    let renoCosts = parseFloat(document.getElementById('reno-costs').value) || 0;
    let holdingCosts = parseFloat(document.getElementById('holding-costs').value) || 0;
    let sellingPrice = parseFloat(document.getElementById('selling-price').value) || 0;
    let closingCosts = parseFloat(document.getElementById('closing-costs').value) || 0;

    let profit = sellingPrice - (purchasePrice + renoCosts + holdingCosts + closingCosts);
    document.getElementById('profit').textContent = profit.toLocaleString();
}
