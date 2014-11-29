(function () {
    'use strict';

    var xmlHttp = new XMLHttpRequest(),
        response;

    xmlHttp.open("GET", 'http://localhost:3000/api/features', true);
    xmlHttp.send();

    xmlHttp.onreadystatechange = function () {
        if (xmlHttp.readyState == 4 && xmlHttp.status == 200) {
            response = JSON.parse(xmlHttp.response);
            var scenarios = response[0];
            console.log(scenarios);
            console.log(xmlHttp);
        }
    };

    var drawChart = function drawChart() {
        var chartContent = [
                ['Status', 'Number'],
                ['Skipped', 12],
                ['Failed', 22],
                ['Pending', 8],
                ['Passed', 127]
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