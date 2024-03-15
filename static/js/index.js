
    var labels = ['January', 'February', 'March', 'April', 'May', 'June'];
    var actualData0 = [];
    var actualData1 = [50, 95, 78, 115, 79, 85]; 
    var actualData2 = [60, 72, 88, 110, 122, 101]; 
    var forecastedData0 = [];
    var forecastedData1 = [47, 90, 85, 114, 89, 92]; 
    var forecastedData2 = [50, 95, 90, 120, 93, 97];
    var ctx = document.getElementById('demandChart').getContext('2d');
    var demandChart = new Chart(ctx, {
        type: 'line', 
        data: {
            labels: labels, 
            datasets: [{
                label: 'Actual Demand',
                data: actualData0, 
                borderColor: 'blue', 
                borderWidth: 1

            }, {
                label: 'Forecasted Demand',
                data: forecastedData0, 
                borderColor: 'red', 
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero: false,
                        stepSize: 50,
                        min: 0,
                        max: 150
                    }
                }]
            }
        }
    });

    function updateContainer() {
        var selectedOption = document.getElementById("dropdown").value;
        var revenue_value = [8496.104, 7766.836, 0.00]
        document.getElementById("selected-value").innerText = selectedOption;

        if (selectedOption === "23") {
          demandChart.data.datasets[0].data = actualData1;
          demandChart.data.datasets[1].data = forecastedData1;
          document.getElementById("revenue-value-holder").innerText = revenue_value[0];
        } else if (selectedOption === "93") {
            demandChart.data.datasets[0].data = actualData2;
            demandChart.data.datasets[1].data = forecastedData2;
            document.getElementById("revenue-value-holder").innerText = revenue_value[1];
        } else if (selectedOption === "0"){
            demandChart.datasets[0].data = actualData0;
            demandChart.datasets[1].data = forecastedData0;
            document.getElementById("revenue-value-holder").innerText = revenue_value[2];
        }

        demandChart.update();
      }

      function runOnLoad(){
        console.log('Functions executed on loading the page')
      }