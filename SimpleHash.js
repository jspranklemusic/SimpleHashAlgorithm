class SimpleHash{
    constructor(){
        //Pass this into this.shuffle() to make it secure and randomized, and then replace it in the original code. 
        this.fullChars = [
            'a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z',
            'A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z',
            '0','1','2','3','4','5','6','7','8','9','!','@','#','$','?','_'
        ]
        //characters from which the random strings. Numbers are included multiple times to provide a balance between
        //letters and numbers.  
        this.chars = [
            'a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z',
            'A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z',
            '0','1','2','3','4','5','6','7','8','9','0','1','2','3','4','5','6','7','8','9',
            '0','1','2','3','4','5','6','7','8','9','0','1','2','3','4','5','6','7','8','9',
            '0','1','2','3','4','5','6','7','8','9'
        ]
    }

    //generates a random string of length num
    generateString(num = 1){
        let str = ""
        for(let i = 0; i < num; i++){
          str += this.chars[Math.floor(Math.random()*this.chars.length)];
        }
        return str;
    }

    //switches out a character with a different one from this.fullChars
    switchHash(char){
        let returnedStr = "";
       
       for(let i=0; i<this.fullChars.length; i++){
         if(this.fullChars[i] == char){
           if(i>=5){
             returnedStr = this.fullChars[i - 5]
           }else{
             returnedStr = this.fullChars[this.fullChars.length - (1 + i)]
           }
         }
       }
        return returnedStr
      }
    
    //returns the switched character for the original
    unswitchHash(char){
        let returnedStr = "";
       
       for(let i=0; i<fullChars.length; i++){
         if(fullChars[i] == char){
           if(i<=fullChars.length - 6){
             returnedStr = fullChars[i + 5]
           }else{
             returnedStr = fullChars[fullChars.length - (i + 1)]
           }
         }
       }
        return returnedStr
      }

    // Randomizes the array
    shuffle(arr) {
        let currentInd = arr.length, temporaryValue, randomInd;
      
        // While there remain elements to shuffle...
        while (0 !== currentInd) {
      
          // Pick a remaining element...
          randomInd = Math.floor(Math.random() * currentInd);
          currentInd -= 1;
      
          // And swap it with the current element.
          temporaryValue = arr[currentInd];
          arr[currentInd] = arr[randomInd];
          arr[randomInd] = temporaryValue;
        }
      
        return arr;
      }

      // A basic hashing function that generates 3 random characters and then a hashed character.
      basicHash(str=""){
        if(str.length < 1) return str;
        let returnedStr = "";
        str = str.split("").reverse();
        
        for(let i = 0; i < str.length; i++){
             returnedStr+=generateString(3)
          returnedStr+=switchHash(str[i])
        }
        
        return returnedStr;
      }

      //reverses the hash and returns the original string
      basicUnhash(str){
        let returnedStr = "";
           for(let i = 0; i < str.length; i++){
          if( (i + 1) % 4 == 0){
            let hashedChar = str.charAt(i);
            returnedStr += unswitchHash(hashedChar);
          }
        }
        return returnedStr.split("").reverse().join("");
      }
    

}

export default SimpleHash
