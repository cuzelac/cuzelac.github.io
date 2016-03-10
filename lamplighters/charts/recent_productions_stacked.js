var bar_chart = {
    chart: {
      type: 'column',
    },
    xAxis: {
      categories: ["The Merry Widow 2007", "Carousel 2007", "Pinafore 2007", "The Secret Garden 2008", "Mikado 2008", "Iolanthe 2009", "Bittersweet 2009", "My Fair Lady 2009", "Gala: Star Drek, The Generation After That 2009", "Patience 2010", "Pirates 2010", "Yeomen 2011", "Engaged 2011", "Trial 2011", "Pinafore 2011", "Gondoliers 2012", "Mikado 2012", "Princess Ida 2013", "The Sorcerer 2013", "Grand Duke 2015"]
    },

    yAxis: {
      title: {
        text: '# Performers'
      }
    },

    title: {
      text: "Cast composition per production by Time in Lamplighters (Raw Numbers)"
    },

    plotOptions: {
      series: {
        stacking: 'normal'
      }
    },

    series: [{
      data: [8, 11, 9, 10, 13, 9, 0, 5, 0, 8, 19, 7, 1, 9, 12, 14, 12, 6, 3, 6],
      name: 'first show'
    }, {
      data: [6, 5, 9, 2, 9, 7, 0, 6, 0, 7, 6, 12, 1, 5, 9, 12, 13, 10, 10, 4],
      name: 'started within 2y'
    }, {
      data: [21, 17, 11, 12, 17, 17, 5, 12, 1, 19, 16, 25, 8, 22, 25, 18, 12, 22, 16, 20],
      name: 'established'
    }],

    tooltip: {
      pointFormat: '{series.name}: <b>{point.y}</b> ({point.percentage:.1f}%)<br/>'
    }
  }

var pct_chart = jQuery.extend(true, {}, bar_chart)
pct_chart.plotOptions.series.stacking = 'percent'
pct_chart.yAxis.title.text = '% performers'
pct_chart.title.text = "Cast composition per production by Time in Lamplighters (Percentage)"

$(function () {
  $('#stacked').highcharts(bar_chart);
  $('#stacked_pct').highcharts(pct_chart);
});
