var app = angular.module('app', ['ngTouch', 'ui.grid',  'ui.grid.resizeColumns']);
 
app.controller('MainCtrl', ['$scope', '$window', function ($scope, $window) {


  var csv = 'Unit,Code,Operations,Number of deaths,Number of survivors,Survival %,predicted survival,Actual/ Predicted Survival Ratio\n' +
			'"Belfast, RoyalVictoria Hospital",RVB,232,4,228,98.3%,98.4%,0.999\n' +
			'"London, Harley Street Clinic",HSC,483,10,473,97.9%,97.2%,1.008\n' +
			'"Leicester, Glenfield Hospital",GRL,570,12,558,97.9%,97.4%,1.005\n' +
			'"Newcastle, Freeman Hospital",FRE,704,16,688,97.7%,97.1%,1.006\n' +
			'"Dublin, Our Lady\'s Children\'s Hospital",OLS,738,22,716,97.0%,97.8%,0.992\n' +
			'"Glasgow, Royal Hospital for Sick Children",RHS,817,26,791,96.8%,97.6%,0.992\n' +
			'"Bristol Royal Hospital for Children",BRC,886,21,865,97.6%,98.1%,0.995\n' +
			'"Southampton, Wessex Cardiothoracic Centre",SGH,914,14,900,98.5%,97.7%,1.008\n' +
			'"Leeds General Infirmary",LGI,919,32,887,96.5%,97.8%,0.987\n' +
			'"London, Royal Brompton Hospital",NHB,1117,18,1099,98.4%,98.0%,1.004\n' +
			'"London, Evelina Children\'s Hospital",GUY,1165,42,1123,96.4%,97.2%,0.992\n' +
			'"Liverpool, Alder Hey Hospital",ACH,1195,39,1156,96.7%,97.3%,0.994\n' +
			'"Birmingham Children\'s Hospital",BCH,1467,44,1423,97.0%,96.6%,1.004\n' +
			'"London, Great Ormond Street Hospital for Children",GOS,1828,33,1795,98.2%,97.8%,1.004';

  var data = CSV.parse(csv);

  var headers = data[0];

  var jsonData = data.slice(1).map(function(row, i) {
    var rowObj = {};
    row.forEach(function(value, j) {
      rowObj[headers[j]] = value;
    });
    // rowObj.Chart = $window.document.createElement('img');
    // rowObj.Chart.src = "media/bands/horizontal_chart_u"+(i+1).toFixed(2);

    return rowObj
  });

	$scope.gridOptions = {
	    columnDefs: [
	        { field: 'Unit', width: 380 },
	        { field: 'Code', width: 80 },
	        { field: 'Operations', width: 120 },
	        { name: 'Deaths', field: 'Number of deaths', width: 80},
	        { name: 'Survivors', field: 'Number of survivors', width: 100 },
	        { field: 'Survival %', width: 120},
	        { name: 'Predicted %', field: 'predicted survival', width: 120},
	        { name: 'Actual/Predicted', field: 'Actual/ Predicted Survival Ratio', width: 220}
	        // { field: 'Chart', width: 200}
	    ],
	    enableGridMenu: true,
	    enableColumnResizing: true
	}

	$scope.gridOptions.data = jsonData;

}]);