function stringMatchCounter(string, pattern){
    let count = 0;
    for (let x = 0; x < string.length; x++) {
      for (let y = 0; y < pattern.length; y++) {
        if (pattern[y] !== string[x + y]) break;
        if (y === pattern.length - 1) count++;
      }
    }
    return count;
}
  
console.log(stringMatchCounter("helloeveryonehowareyoueveryone", "hello")); // return 1