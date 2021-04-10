function bai1() {
        let today=new Date ();
        document.getElementById("bai1").innerHTML=today;
    } 
function bai2() {
        let today = new Date();
        let dd = String(today.getDate());
            if (dd < 10 ) {
                dd = '0' + dd;
            }
        let mm = String(today.getMonth() + 1);
            if (mm < 10) {
                mm = '0' + mm;
            }
        let yyyy = today.getFullYear();

        today = mm + '-' + dd + '-' + yyyy;
        
        let today1 = mm + '/' + dd + '/' + yyyy;
       
        let today2 = dd + '-' + mm + '-' + yyyy;
        
        let today3 = dd + '/' + mm + '/' + yyyy;
        let output = today1 + '</br>'  + today2 + '</br>' + today3 + '</br>' + today
        document.getElementById("bai2").innerHTML= output;
      }
function bai3() {
            let n;
            let mang = new Array();
            mang = document.getElementById("Num").value;
            for (let i=0; i < n-1; i++) {
               if (a[i] > a[i+1]) {
               document.getElementById("sai").innerHTML= "false";
               }
           }
               
               document.getElementById("dung").innerHTML= "true";
       }
function bai4() {
        let input = document.getElementById("bai4-input").value;
        let characters = Array.from(input);
        for(let i = 0; i < characters.length; i++) {
            characters[i] = String.fromCharCode(characters[i].charCodeAt(0) + 1);
        }
        document.getElementById('result4').innerHTML=(characters.join(""));
    }
function bai8 () {
          let Month = document.getElementById("Month").value;
          
          switch (Month) {
              case "1": text="tháng một";
              break;
              case "2": text="tháng high";
              break;
              case "3": text="tháng ba";
              break;
              case "4": text="tháng tư";
              break;
              case "5": text="tháng năm";
              break;
              case "6": text="tháng sáu";
              break;
              case "7": text="tháng seven";
              break;
              case "8": text="tháng eight";
              break;
              case "9": text="tháng nine";
              break;
              case "10": text="tháng một không";
              break;
              case "11": text="tháng một một ";
              break;
              case "12": text="tháng một hai";
              break;
              default:
              text = "the result is nothing";
          }
          document.getElementById("demo").innerHTML = text;
      }
function bai7() {
        let str = document.getElementById("str").value;
        let n = str.includes("java");
        document.getElementById("result").innerHTML = n;
        }
function bai9() {
        let str = document.getElementById("str2").value;
        let words = str.split(' ');
        let maxLength = 0; 
        let maxIndex = 0;
        for ( let i=0; i < words.length; i++ ) {
            if (words[i].length > maxLength) {
                maxLength = words[i].length;
                maxIndex= i;
            }
        }
        document.getElementById("result2").innerHTML=words[maxIndex];
      }