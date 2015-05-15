var app = angular.module('app', ['ngTouch', 'ui.grid',  'ui.grid.selection', 'ui.grid.resizeColumns']);
 
app.controller('MainCtrl', ['$scope', '$window', function ($scope, $window) {


  var csv = 'Unit,Code,Operations,Number of deaths,Number of survivors,Survival %,predicted survival,Actual/ Predicted Survival Ratio\n' +
  			',,,,,,,\n' +

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
    rowObj.Chart = "image"+ (i < 10 ? "0" : "") + (i);
    if(isNaN(parseFloat(rowObj['Survival %']))) {
    	rowObj['Mortality %'] = ""
    }
    else {
    	rowObj['Mortality %'] = (((1000 - 10*parseFloat(rowObj['Survival %']))/10).toString()) + '%';
    }

    return rowObj
  });

	$scope.gridOptions = {
	    columnDefs: [
	        { field: 'Unit', width: 300 },
	        { field: 'Code', width: 70 },
	        { field: 'Operations', width: 105 },
	        { name: 'Deaths', field: 'Number of deaths', width: 80},
	        { name: 'Mortality (%)', field: 'Mortality %', width: 75},
	        { name: 'Survivors', field: 'Number of survivors', width: 95 },
	        { name: 'Survival (%)', field: 'Survival %', width: 70},
	        { name: 'Predicted (%)', field: 'predicted survival', width: 80},
	        { name: 'Actual/ Predicted', field: 'Actual/ Predicted Survival Ratio', width: 80},
	        { name: 'Actual (dot) on Predicted (bands)', field: 'Chart', width: 320, cellClass: function(grid, row, col, rowRenderIndex, colRenderIndex) {
          		//if (grid.getCellValue(row,col) === 'Velity') {
            	return grid.getCellValue(row,col); //'image'+ (rowRenderIndex < 9 ? "0" : "") + (rowRenderIndex+1);
          		}
          	}
	    ],
	    enableGridMenu: true,
	    enableColumnResizing: true,
	    enableRowSelection: true, 
	    enableRowHeaderSelection: false,
	    multiSelect: false
	}

	$scope.gridOptions.data = jsonData;

}]);