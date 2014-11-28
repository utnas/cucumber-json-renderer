(function () {
    'use strict';

    var xmlHttp = new XMLHttpRequest();

    google.load('visualization', '1', {packages: ['corechart']});
    google.setOnLoadCallback(drawChart);

    xmlHttp.open("GET", 'http://localhost:3000/api/features', true);
    xmlHttp.send();

    xmlHttp.onreadystatechange = function () {
        if (xmlHttp.readyState == 4 && xmlHttp.status == 200) {
            var myArr = JSON.parse(xmlHttp.responseText);
            console.log('Result: ' + myArr);
        }
    };

    function drawChart() {
        var chartContent = [
                ['Status', 'Number'],
                ['Skipped', 11],
                ['Failed', 2],
                ['Pending', 2],
                ['Passed', 127]
            ],
            data = google.visualization.arrayToDataTable(chartContent),
            options = {},
            chart1 = new google.visualization.PieChart(document.getElementById('piechart1')),
            chart2 = new google.visualization.PieChart(document.getElementById('piechart2'));
        chart1.draw(data, options);
        chart2.draw(data, options);
    }
}());