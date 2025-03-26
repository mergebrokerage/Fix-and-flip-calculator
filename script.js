<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Fix & Flip Calculator</title>
    <script src="https://cdn.jsdelivr.net/npm/chart.js"></script>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <div class="container">
        <h2>Fix & Flip Calculator</h2>
        <label>Estimated ARV ($)</label>
        <input type="number" id="arv" value="0">
        
        <label>Purchase Price ($)</label>
        <input type="number" id="purchase" value="0">
        
        <label>Rehab Costs ($)</label>
        <input type="number" id="rehab" value="0">
        
        <label>Carrying Costs ($)</label>
        <input type="number" id="carrying" value="0">
        
        <label>Closing Costs ($)</label>
        <input type="number" id="closing" value="0">
        
        <label>Miscellaneous Costs ($)</label>
        <input type="number" id="misc" value="0">
        
        <button onclick="calculateProfit()">Calculate</button>
        <canvas id="profitChart"></canvas>
    </div>

    <script src="script.js"></script>
</body>
</html>
