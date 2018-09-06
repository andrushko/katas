function buildMathString(prefexpr){
    var str = '';
    debugger;

    toMathExpression(prefexpr);

    function toMathExpression(prefexpr) {

        var c = /\([^(]+?\)/g;

        while(res = c.exec(prefexpr)){
            var sres = res[0].replace(/[()]/g, '')
            str = prefexpr.slice(0, res.index) + 
                '(' + sres.split(' ')[1] + sres.split(' ')[0] +  
                sres.split(' ')[2]+ ')' + prefexpr.slice(res.index + res[0].length);
            toMathExpression(str.replace(/[()]/g, ''));
            
        } 
    }
    return str;
}
