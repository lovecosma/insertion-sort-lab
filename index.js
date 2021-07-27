function findMinAndRemove(array){

    let min = array[0]
    let counter = 0
    let index = 0
     for(let element of array){
         if(element < min){
             min = element
            index = counter
         } 
         counter ++
     }
     array.splice(index, 1)
     return min
}

function selectionSort(array){
    let sorted = []

    while(array.length != 0){
        let min = findMinAndRemove(array)
        sorted.push(min)
    }
    return sorted
}
