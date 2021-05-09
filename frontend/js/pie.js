google.charts.load('current', {'packages':['corechart']});
      google.charts.setOnLoadCallback(drawChart);
 
function drawChart() {
    

        var data = google.visualization.arrayToDataTable([
          ['platfrom', 'prblm solved'],
          ['Leetcode',     0],
          ['Codechef',         4],
          ['Codeforces',  2],
          ['Mentorpick',120 ],
          ['Vjudge',    103]

        ]);
   
 var options = {
          title: 'Problems solved  '
          
        };

        var chart = new google.visualization.PieChart(document.getElementById('piechart'));

        chart.draw(data, options);
      }