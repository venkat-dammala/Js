
var list = [1, 2, 3, 4, 5, 6,12,34,13,15,12,1212];


//recursive call
remove(list.length-1);

function remove(index) {
    if(list.length > 0){
        if(list[index]%2!==0){
            list.splice(index,1);
        } else{
            
        }
        if(index >0){
            remove(index-1);
        }

    }}
console.log(list);
