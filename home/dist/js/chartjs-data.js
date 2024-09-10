/*Chartjs Init*/

$( document ).ready(function() {
    "use strict";
    
	if( $('#chart_2').length > 0 ){
		var ctx2 = document.getElementById("chart_2").getContext("2d");
		var data2 = {
			labels: ["Surat Pernyataan Hutang", "Surat Permohonan", "Surat Kuasa", "Surat Kuasa Istimewa", "Berita Acara Mediasi", "Duplik", "Kesimpulan", "Invoice", "Tanda Terima Pembayaran"],
			datasets: [
				{
					label: "Total",
					backgroundColor: "rgba(230,176,52,1)",
					borderColor: "rgba(230,176,52,1)",
					data: [0, 59, 80, 58, 20, 55, 40, 25, 15]
				},
			]
		};
		
		var hBar = new Chart(ctx2, {
			type:"horizontalBar",
			data:data2,
			
			options: {
				tooltips: {
					mode:"label"
				},
				scales: {
					yAxes: [{
						stacked: false,
						gridLines: {
							color: "rgba(33,33,33,0)",
						},
						ticks: {
							fontFamily: "Roboto",
							fontColor:"#878787"
						}
					}],
					xAxes: [{
						stacked: false,
						gridLines: {
							color: "rgba(33,33,33,0)",
						},
						ticks: {
							fontFamily: "Roboto",
							fontColor:"#878787"
						}
					}],
					
				},
				elements:{
					point: {
						hitRadius:40
					}
				},
				animation: {
					duration:	3000
				},
				responsive: true,
				legend: {
					display: false,
				},
				tooltip: {
					backgroundColor:'rgba(33,33,33,1)',
					cornerRadius:0,
					footerFontFamily:"'Roboto'"
				}
				
			}
		});
	}
});