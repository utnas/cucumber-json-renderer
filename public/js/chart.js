(function () {
    'use strict';

    google.load("visualization", "1", {packages: ["corechart"]});
    google.setOnLoadCallback(drawChart);

    function drawChart() {
        var chartContent = [
                ['Scenario', 'Status'],
                ['Passed', 11],
                ['Failed', 2],
                ['Pending', 2],
                ['Skipped', 7]
            ],
            data = google.visualization.arrayToDataTable(chartContent),
            options = {},
            chart1 = new google.visualization.PieChart(document.getElementById('piechart1')),
            chart2 = new google.visualization.PieChart(document.getElementById('piechart2'));
        chart1.draw(data, options);
        chart2.draw(data, options);
    }
})();