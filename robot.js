function bouncer(arr) {
    let newArray = [];
    for(let i = 0; i < arr.length; i++){
      if (arr[i]) newArray.push(arr[i]);
    }
    return newArray;
  }
  
  bouncer([7, "ate", "", false, 9]);

  
  function getIndexToIns(arr, num) {
    
    var times = arr.length;
    var count = 0;
    for(var i = 0; i < times; i++){
      if (num > arr[i]){
        count++;
      }
    }
    return count;
  }
  
  getIndexToIns([40, 60], 50);
  
  
  
  function mutation(arr) {
    var test = arr[1].toLowerCase();
    var target = arr[0].toLowerCase();

    for(var i = 0; i < test.length; i++){
      if(target.indexOf(test[i]) < 0) return false;
    }
    return true;
  }
  
  mutation(["hello", "hey"]);


  function chunkArrayInGroups(arr, size) {
    var arr2 = [];
    for(var i = 0; i < arr.length; i += size){
      arr2.push(arr.slice(i, i + size));
    }
    return arr2;
  }
  
  chunkArrayInGroups(["a", "b", "c", "d"], 2);
