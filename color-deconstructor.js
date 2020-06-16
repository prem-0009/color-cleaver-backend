function colorDeconstructor(col){
    if(col === 'orange'){
        return 'Orange is made by combining red and yellow!'
    } else if ( col === 'purple'){
        return 'Purple is made by combining red and blue!'
    } else if (col === 'green'){
        return 'Green is made by combining blue and yellow!'
    } else if (col !== 'orange' || col !== 'purple'  || col !== 'green' ){
        return "Sorry, that's not a secondary color!"
    }
}


module.exports = colorDeconstructor;