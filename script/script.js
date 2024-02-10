let noButtonClickCount = 0; // นับจำนวนครั้งที่คลิกที่ปุ่ม "ไม่"
let noButtonState = 0; // สถานะปัจจุบันของปุ่ม "ไม่"


document.getElementById('gifContainer').style.display = 'block';

document.getElementById('siBtn').addEventListener('click', function() {

    document.getElementById('sadGifContainer').style.display = 'none';
    document.getElementById('sadGifContainer1').style.display = 'none';
    document.getElementById('sadGifContainer2').style.display = 'none';
    document.getElementById('gifContainer').style.display = 'none';
    document.getElementById('happyGifContainer').style.display = 'block';

    
    document.getElementById('question').style.display = 'none';
    document.getElementById('siBtn').style.display = 'none';
    document.body.classList.add('bg-green');
    document.getElementById('noBtn').style.display = 'none';

    
    document.getElementById('messageContainer').style.display = 'block';
    document.getElementById('messageContainer').innerHTML = 'เย้!! รักที่สู้ดดดดดดดดดดดดด';

    
    setTimeout(function() {
        document.getElementById('happyGifContainer').style.display = 'none';
        document.getElementById('happyGifContainer2').style.display = 'block';
    }, 1000);

    setTimeout(function() {
        document.getElementById('happyGifContainer2').style.display = 'none';
        document.getElementById('happyGifContainer3').style.display = 'block';
    }, 2000);
    setTimeout(function() {
        document.getElementById('happyGifContainer3').style.display = 'none';
        document.getElementById('happyGifContainer4').style.display = 'block';
    }, 3000);
});

document.getElementById('noBtn').addEventListener('click', function() {
    switch (noButtonState) {
        case 0:
            
            document.getElementById('happyGifContainer').style.display = 'none';
            document.getElementById('gifContainer').style.display = 'none';
            document.getElementById('sadGifContainer').style.display = 'block';

            
            document.getElementById('noBtn').innerHTML = 'ไม่ยอมรับหรอ ?';
            document.getElementById('noBtn').style.backgroundColor = '#F1330A';
          
            document.getElementById('siBtn').style.fontSize = '40px';
            document.getElementById('siBtn').style.padding = '20px 40px';
        
            noButtonClickCount++;
            noButtonState++;
            break;

        case 1:
    

            document.getElementById('noBtn').innerHTML = 'จริง ๆ หรอ ?';
            document.getElementById('noBtn').style.backgroundColor = '#F1330A';
            document.getElementById('sadGifContainer').style.display = 'none';
            document.getElementById('sadGifContainer2').style.display = 'block';

            
            document.getElementById('siBtn').style.fontSize = '50px';
            document.getElementById('siBtn').style.padding = '30px 50px';
        
            noButtonState++;
            break;

        case 2:
           
            document.getElementById('noBtn').innerHTML = 'ให้คิดอีกที ?';
            document.getElementById('noBtn').style.backgroundColor = '#F1330A';
            document.getElementById('sadGifContainer').style.display = 'none';
            document.getElementById('sadGifContainer2').style.display = 'none';
            document.getElementById('sadGifContainer1').style.display = 'block';

            
            document.getElementById('siBtn').style.fontSize = '60px';
            document.getElementById('siBtn').style.padding = '40px 60px';
        
            noButtonState++;
            break;
        
        case 3:
           
            document.getElementById('noBtn').innerHTML = 'คิดดี ๆ !!';
            document.getElementById('noBtn').style.backgroundColor = '#F1330A';

            
            document.getElementById('siBtn').style.fontSize = '70px';
            document.getElementById('siBtn').style.padding = '50px 70px';
        
            noButtonState++;
            break;
            
        case 4:
           
            document.getElementById('noBtn').innerHTML = 'ยังอีก!!!';
            document.getElementById('noBtn').style.backgroundColor = '#F1330A';

            
            document.getElementById('siBtn').style.fontSize = '80px';
            document.getElementById('siBtn').style.padding = '60px 80px';
         
            noButtonState++;
            break;

        case 5:
           
            document.getElementById('noBtn').innerHTML = 'ยังอีก!!!!!!!!!!!!!!';
            document.getElementById('noBtn').style.backgroundColor = '#F1330A';

            
            document.getElementById('siBtn').style.fontSize = '90px';
            document.getElementById('siBtn').style.padding = '70px 90px';

            noButtonState++;
            break;

        case 6:
           
            document.getElementById('noBtn').innerHTML = 'ยังอีก!!!!!!!!!!!!!!!!!!!!';
            document.getElementById('noBtn').style.backgroundColor = '#F1330A';

            
            document.getElementById('siBtn').style.fontSize = '100px';
            document.getElementById('siBtn').style.padding = '80px 100px';
            
            noButtonState++;
            break;

        case 7:
           
            document.getElementById('noBtn').innerHTML = 'รับเถอะนะ';
            document.getElementById('noBtn').style.backgroundColor = '#F1330A';

            
            document.getElementById('siBtn').style.fontSize = '120px';
            document.getElementById('siBtn').style.padding = '90px 120px';
  
            noButtonState++;
            break;

        case 8:
           
            document.getElementById('noBtn').innerHTML = 'นะ ๆๆๆๆๆ';
            document.getElementById('noBtn').style.backgroundColor = '#F1330A';

            document.getElementById('siBtn').style.fontSize = '140px';
            document.getElementById('siBtn').style.padding = '100px 140px';
       
            noButtonState++;
            break;

        case 9:
           
            document.getElementById('noBtn').innerHTML = 'น้าาาาาาาาาาาาาาาาาาาาาาาาา';
            document.getElementById('noBtn').style.backgroundColor = '#F1330A';

            
            document.getElementById('siBtn').style.fontSize = '160px';
            document.getElementById('siBtn').style.padding = '110px 160px';
          
            noButtonState++;
            break;

        case 10:
           
            document.getElementById('noBtn').innerHTML = 'ไม่ยอมรับจริง ๆ หรอ 😢';
            document.getElementById('noBtn').style.backgroundColor = '#F1330A';

         
            document.getElementById('siBtn').style.fontSize = '180px';
            document.getElementById('siBtn').style.padding = '120px 180px';
    
            noButtonState++;
            break;

        case 11:
           
            document.getElementById('noBtn').innerHTML = 'จะร้องแล้วนะ 😭';
            document.getElementById('noBtn').style.backgroundColor = '#F1330A';

            document.getElementById('siBtn').style.fontSize = '200px';
            document.getElementById('siBtn').style.padding = '130px 200px';
            
            noButtonState++;
            break;
        
        case 12:
           
            document.getElementById('noBtn').innerHTML = 'ไม่เอาก็ได้เชอะ !!!!!!!';
            document.getElementById('noBtn').style.backgroundColor = '#F1330A';

            
            document.getElementById('siBtn').style.fontSize = '220px';
            document.getElementById('siBtn').style.padding = '140px 220px';
    
            noButtonState = 0;
            break;

        default:
            break;
    }
});

