function calculateProfit() {
    let purchasePrice = parseFloat(document.getElementById('purchase-price').value) || 0;
    let renoCosts = parseFloat(document.getElementById('reno-costs').value) || 0;
    let holdingCosts = parseFloat(document.getElementById('holding-costs').value) || 0;
    let sellingPrice = parseFloat(document.getElementById('selling-price').value) || 0;
    let closingCosts = parseFloat(document.getElementById('closing-costs').value) || 0;

    let profit = sellingPrice - (purchasePrice + renoCosts + holdingCosts + closingCosts);
    document.getElementById('profit').textContent = profit.toLocaleString();

    updateChart(purchasePrice, renoCosts, holdingCosts, closingCosts, profit);
}

// Remove "0" when typing in inputs
document.querySelectorAll('input').forEach(input => {
    input.addEventListener('focus', function () {
        if (this.value === "0") {
            this.value = "";
        }
    });
    input.addEventListener('blur', function () {
        if (this.value === "") {
            this.value = "0";
        }
    });
});

// Chart.js for visualizing numbers
let ctx = document.getElementById('profitChart').getContext('2d');
let profitChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ['Purchase Price', 'Renovation Costs', 'Holding Costs', 'Closing Costs', 'Profit'],
        datasets: [{
            label: 'Cost Breakdown',
            data: [0, 0, 0, 0, 0],
            backgroundColor: ['#ff4757', '#ffa502', '#2ed573', '#3742fa', '#1e90ff']
        }]
    },
    options: {
        responsive: true,
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});

function updateChart(purchasePrice, renoCosts, holdingCosts, closingCosts, profit) {
    profitChart.data.datasets[0].data = [purchasePrice, renoCosts, holdingCosts, closingCosts, profit];
    profitChart.update();
}
