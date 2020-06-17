function colorcombinator(col1,col2){
    if(col1 === 'red' && col2 === 'yellow'){
        return 'When you combine '+col1+' and '+col2+', you get orange!'}
    if (col1 === 'red' && col2 === 'blue'){
        return 'When you combine '+col1+' and '+col2+', you get purple!'}
    if (col1 === 'yellow' && col2 === 'blue'){
        return 'When you combine '+col1+' and '+col2+', you get green!'}
    // if (( col1 === 'red' || col1 === 'yellow' || col1 === 'blue') && ( col2 !== 'red' || col2 !== 'yellow' || col2 !== 'blue')){
    //     return 'Sorry, one of those colors is not a primary color!'}
    // if (( col1 !== 'red' || col1 !== 'yellow' || col1 !== 'blue') && ( col2 === 'red' || col2 === 'yellow' || col2 === 'blue')){
    //     return 'Sorry, one of those colors is not a primary color!'}
    if (( col1 !== 'red' || col1 !== 'yellow' || col1 !== 'blue') && ( col2 !== 'red' || col2 !== 'yellow' || col2 !== 'blue')){
        return 'Sorry, one of those colors is not a primary color!'}


    //other way    
    // let answer = '';
    // const firstIsNotPrimary = col1 !=='red' && col1 !== 'yellow' && col1 !== 'blue';
    // const secondIsNotPrimary = col2 !=='red' && col2 !== 'yellow' && col2 !== 'blue';

    // if (firstIsNotPrimary || secondIsNotPrimary){
    //     return 'Sorry, one of those colors is not a primary color!';
    // }


    // if(col1 === 'red' && col2 === 'yellow'){
    //     answer = 'orange'
    // }

    // if(col1 === 'red' && col2 === 'blue'){
    //     answer = 'purple'
    // }

    // if(col1 === 'yellow' && col2 === 'blue'){
    //     answer = 'green'
    // }

    // return  'When you combine '+col1+' and '+col2+', you get '+answer+'!'}

}
module.exports = colorcombinator;
