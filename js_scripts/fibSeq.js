function fibonacciGenerator (n) {
    //Do NOT change any of the code above 👆
        
        //Write your code here:
        
     var fibSeq = [0,1];
        
      if (n == 1) {
        return [0];
      }
      else if (n == 2) {
        return fibSeq;
      }
      else {
        for (var i = 2; i < n; i++) {
            fibSeq[i] = fibSeq[i- 2] + fibSeq[i - 1];
            //fibSeq.push(fibSeq[i]);
        }return fibSeq;
      }
    
        
        
        
        //Return an array of fibonacci numbers starting from 0.
        
    //Do NOT change any of the code below 👇
    }
    
    