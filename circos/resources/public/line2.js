var circosLine = new Circos({
    container: '#chart',
    width: 2200,
    height: 2200
})


var drawCircos = function (error, pi519Pb, pi505Pa, pi520Pa, pi579Pa, genepos, geneneg, CDSpos, CDSneg) {
    pi519Pb = pi519Pb.map(function (d) {
	return {
	    block_id: "HCMV",
	    position: parseInt(d.position1),
	    value: d.value
	}
    })
    pi505Pa = pi505Pa.map(function (d) {
	return {
	    block_id:  "HCMV",
	    position: parseInt(d.position1),
	    value: d.value
	}
    })
    pi520Pa = pi520Pa.map(function (d) {
	return {
	    block_id:  "HCMV",
	    position: parseInt(d.position1),
	    value: d.value
	}
     })
    pi579Pa = pi579Pa.map(function (d) {
	return {
	    block_id:  "HCMV",
	    position: parseInt(d.position1),
	    value: d.value
	}
     })
    genepos = genepos.map(function (d) {
	return {
	    block_id: "HCMV",
	    start: parseInt(d.start),
	    end: parseInt(d.end),
	    name: d.genep
	}
    })
    geneneg = geneneg.map(function (d) {
	return {
	    block_id: "HCMV",
	    start: parseInt(d.start),
	    end: parseInt(d.end),
	    name: d.genen
	}
    })
    CDSpos = CDSpos.map(function (d) {
	return {
	    block_id: "HCMV",
	    start: parseInt(d.start),
	    end: parseInt(d.end),
	    name: d.CDSp
	}
    })
    CDSneg = CDSneg.map(function (d) {
	return {
	    block_id: "HCMV",
	    start: parseInt(d.start),
	    end: parseInt(d.end),
	    name: d.CDSn
	}
    })
    
    circosLine
	.layout(
	    [{len: 235912, color: "#29CCFF", label: "519-Pb", id: "HCMV"}],
	    {
		innerRadius: 750,
		outerRadius: 700,
		
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
		     labelSize: '50px',
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
	.line('diversity1', pi519Pb, {
	    innerRadius: 0.05,
	    outerRadius: 0.9,
	    maxGap: 1000000,
	    min: 0,
	    max: 0.075,
	    direction: 'in',
	    color: 'blue',
	    axes: [
		{spacing: 0.0,
		 color: 'gray',
		 thickness: 0.5},
		{spacing: 0.02,
		 color: 'white',
		 thickness: 1,
		 lables: true}],
	    backgrounds: [
		{
		    start: 0.0,
		    color: 'black',
		    opacity: 0.9
		},
		{
		    start: 0.2,
		    end: 0.5,
		    color: 'black',
		    opacity: 0.9
		},
		{
		    end: 1.0,
		    color: 'black',
		    opacity: 0.9
		}
	    ],
	    tooltipContent: null
	})
	.line('diversity2', pi505Pa, {
	    innerRadius: 0.05,
	    outerRadius: 0.9,
	    maxGap: 1000000,
	    min: 0,
	    max: 0.075,
	    direction: 'in',
	    color: 'green',
	    tooltipContent: null
	})
	.line('diversity3', pi520Pa, {
	    innerRadius: 0.05,
	    outerRadius: 0.9,
	    maxGap: 1000000,
	    min: 0,
	    max: 0.075,
	    direction: 'in',
	    color: 'red',
	    tooltipContent: null
    })
	.line('diversity4', pi579Pa, {
	    innerRadius: 0.05,
	    outerRadius: 0.9,
	    maxGap: 1000000,
	    min: 0,
	    max: 0.075,
	    direction: 'in',
	    color: 'orange',
	    tooltipContent: null
	})
	.highlight('genepos', genepos, {
	    innerRadius: 1.2,
	    outerRadius: 1.24,
	    opacity: 0.7,
	    color: 'red',
	    tooltipContent: function (d) {
		return d.name
	    }
	})
	.highlight('geneneg', geneneg, {
	    innerRadius: 1.31,
	    outerRadius: 1.35,
	    opacity: 0.7,
	    color: 'blue',
	    tooltipContent: function (d) {
		return d.name
	    }
	})
	.highlight('CDSpos', CDSpos, {
	    innerRadius: 1.25,
	    outerRadius: 1.29,
	    opacity: 0.7,
	    color: 'orange',
	    tooltipContent: function (d) {
		return d.name
	    }
	})
	.highlight('CDSneg', CDSneg, {
	    innerRadius: 1.36,
	    outerRadius: 1.4,
	    opacity: 0.7,
	    color: 'green',
	    tooltipContent: function (d) {
		return d.name
	    }
	})
	.text('genep-labels', genepos.map(function (d) {
	    d.position = (d.start + d.end) / 2
	    d.value = d.name
	    return d
	}), {
	    innerRadius: 1.1,
	    outerRadius: 1.3,
	    style: {
		'font-size': 20
	    },
	    color: 'red'
	})
	.text('genen-labels', geneneg.map(function (d) {
	    d.position = (d.start + d.end) / 2
	    d.value = d.name
	    return d
	}), {
	    innerRadius: 1.41,
	    outerRadius: 1.9,
	    style: {
		'font-size': 20
	    },
	    color: 'blue'
	})
	.render()
}

d3.queue()
    .defer(d3.csv, './data/W19-S1a.csv')
    .defer(d3.csv, './data/W05-M.csv')
    .defer(d3.csv, './data/W20-S1a.csv')
    .defer(d3.csv, './data/W79-S1a.csv')
    .defer(d3.csv, './data/genepos.csv')
    .defer(d3.csv, './data/geneneg.csv')
    .defer(d3.csv, './data/CDSpos.csv')
    .defer(d3.csv, './data/CDSneg.csv')

    .await(drawCircos)
