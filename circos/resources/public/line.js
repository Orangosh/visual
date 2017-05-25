	 var circosLine = new Circos({
	 container: '#chart',
	 width: 2000,
	 height: 2000
	 })


	 var drawCircos = function (error, pi) {
	 pi = pi.map(function (d) {
	 return {
	 block_id: d.sample,
	 position: parseInt(d.position),
	 value: d.value
    }
  })
	 
	 circosLine
	 .layout(
         [{len: 235000, color: "#29CCFF", label: "519-Pb", id: "02-519-Pb"}],
	 {
	 innerRadius: 450,
	 outerRadius: 500,
	 
	 labels: {
	 display: true,
	 position: 'center',
	 size: '10000px',
	 color: '#200000',
	 radialOffset: 20,
	 },
	 ticks: {
	 display: true,
	 color: 'grey',
	 spacing: 10,
	 labels: true,
	 labelSpacing: 1000,
	 labelSuffix: 'kb',
	 labelDenominator: 1000,
	 labelDisplay0: true,
	 labelSize: '20px',
	 labelColor: '#000000',
	 labelFont: 'default',
	 majorSpacing: 5,
	 size: {
	 minor: 2,
	 major: 5,
	 },
	 },
	 }
	 )
	 .line('diversity', pi, {
	 innerRadius: 1.1,
	 outerRadius: 1.4,
	 maxGap: 1000000,
	 min: 0,
	 max: 0.7,
	 color: '#222222',
	 axes: [
	 {spacing: 0.05,
	 color: 'green',
	 thickness: 0.5},
	 {spacing: 0.1,
	 color: 'red',
	 thickness: 1,
	 lables: true}],
	 backgrounds: [
	 {
	 start: 0.0,
	 color: '#4caf50',
	 opacity: 0.1
	 },
	 {
	 start: 0.2,
	 end: 0.5,
	 color: '#d3d3d3',
	 opacity: 0.5
	 },
	 {
	 end: 1.0,
      color: '#f44336',
	 opacity: 0.1
	 }
	 ],
	 tooltipContent: null
	 })
	 .render()
	 }

	 d3.queue()
	 .defer(d3.csv, './data/S19-Pb.csv')
	 .await(drawCircos)
