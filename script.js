// Fetch JSON data using Axios
Promise.all([
    axios.get('linechart.json'),
    axios.get('barchart.json')
])
.then(responses => {
    const lineChartData = responses[0].data;
    const barChartData = responses[1].data;

    // Create line chart
    var options = {
        chart: {
            height: 350,
            type: 'line',
            zoom: {
                enabled: false
            }
        },
        series: [{
            name: 'series-1',
            data: lineChartData.data
        }],
        xaxis: {
            categories: lineChartData.labels
        }
    };

    var chart = new ApexCharts(document.querySelector("#chart"), options);
    chart.render();

    // Create bar chart
    var options2 = {
        chart: {
            height: 350,
            type: 'bar'
        },
        series: [{
            name: 'series-1',
            data: barChartData.data
        }],
        xaxis: {
            categories: barChartData.labels
        }
    };

    var chart2 = new ApexCharts(document.querySelector("#bar-chart"), options2);
    chart2.render();
})
.catch(error => {
    console.error('Error fetching data:', error);
});