
    var labels = ['January', 'February', 'March', 'April', 'May', 'June'];
    var actualData = [100, 150, 200, 180, 220, 250]; 
    var forecastedData = [110, 160, 190, 185, 230, 260]; 
    var ctx = document.getElementById('demandChart').getContext('2d');
    var demandChart = new Chart(ctx, {
        type: 'line', // Line chart type
        data: {
            labels: labels, // X-axis labels
            datasets: [{
                label: 'Actual Demand',
                data: actualData, // Actual demand data
                borderColor: 'blue', // Line color
                borderWidth: 1
            }, {
                label: 'Forecasted Demand',
                data: forecastedData, // Forecasted demand data
                borderColor: 'red', // Line color
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero: true
                    }
                }]
            }
        }
    });

