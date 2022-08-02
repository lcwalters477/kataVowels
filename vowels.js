function getCount(str) {
    let vowelarr = [];
    let arr = (str.split(''));
        for(let i = 0; i < arr.length; i ++){
            if(arr[i] === 'a' || arr[i] === 'e' || arr[i] === 'o' || arr[i] === 'i' || arr[i] === 'u'){
                vowelarr.push(arr[i]);
            }
        }
    console.log(vowelarr.length);
    
}

  getCount('aaazzeeezziii');