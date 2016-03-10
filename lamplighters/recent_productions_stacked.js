$(function () {
  $('#stacked').highcharts({
    chart: {
      type: 'column',
    },
    xAxis: {
      categories: ["The Merry Widow", "Carousel", "H.M.S. Pinafore", "The Secret Garden", "The Mikado", "Iolanthe", "Bittersweet", "My Fair Lady", "Gala: Star Drek, The Generation After That", "Patience", "The Pirates Of Penzance", "The Yeomen of the Guard", "Engaged", "Trial by Jury", "H.M.S. Pinafore", "The Gondoliers", "The Mikado", "Princess Ida", "The Sorcerer", "The Grand Duke"]
    },

    title: {
      text: "Cast composition per production by Time in Lamplighters"
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
  });
});
