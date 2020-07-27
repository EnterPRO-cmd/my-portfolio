function Circlle(el) {
    $(el).circleProgress({fill: {color: '#ffc5c'}})
    .on('circle-animation-progress', function(event, progress, stepValue){

        $(this).find('strong').text(String(stepValue.toFixed(2))+'%');    
        })
    
    };
    Circlle('.round');