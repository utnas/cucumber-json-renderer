(function () {
    'use strict';

    var xmlHttp = new XMLHttpRequest(),
        response;

    xmlHttp.open("GET", 'http://localhost:3000/api/features/stats', true);
    xmlHttp.send();

    xmlHttp.onreadystatechange = function () {
        if (xmlHttp.readyState == 4 && xmlHttp.status == 200) {
            response = JSON.parse(xmlHttp.response);
        }
    };

    var drawChart = function drawChart() {
        var chartContent = [
                ['Status', 'Number'],
                ['Skipped', response.skipped],
                ['Failed', response.failures],
                ['Pending', response.pending],
                ['Passed', response.success]
            ],
            data = google.visualization.arrayToDataTable(chartContent),
            options = {},
            chart1 = new google.visualization.PieChart(document.getElementById('piechart1')),
            chart2 = new google.visualization.PieChart(document.getElementById('piechart2'));
        chart1.draw(data, options);
        chart2.draw(data, options);
    };

    google.load('visualization', '1', {packages: ['corechart']});
    google.setOnLoadCallback(drawChart);
}());