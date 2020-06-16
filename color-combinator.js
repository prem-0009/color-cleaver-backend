function colorcombinator(col1,col2){
    if(col1 === 'red' && col2 === 'yellow'){
        return 'When you combine '+col1+' and '+col2+', you get orange!'
    } else if (col1 === 'red' && col2 === 'blue'){
        return 'When you combine '+col1+' and '+col2+', you get purple!'
    } else if (col1 === 'yellow' && col2 === 'blue'){
        return 'When you combine '+col1+' and '+col2+', you get green!'
    } else if (( col1 === 'red' || col1 === 'yellow' || col1 === 'blue') && ( col2 !== 'red' || col2 !== 'yellow' || col2 !== 'blue')){
        return 'Sorry, one of those colors is not a primary color!'
    } else if (( col1 !== 'red' || col1 !== 'yellow' || col1 !== 'blue') && ( col2 === 'red' || col2 === 'yellow' || col2 === 'blue')){
        return 'Sorry, one of those colors is not a primary color!'
    } else if (( col1 !== 'red' || col1 !== 'yellow' || col1 !== 'blue') && ( col2 !== 'red' || col2 !== 'yellow' || col2 !== 'blue')){
        return 'Sorry, one of those colors is not a primary color!'
    }
    
}


module.exports = colorcombinator;