function mySubmit(){
    var val1 = document.frmMain.sct1.value;
    var myURL;



    switch(val1){


        case "1":
            myURL = "D4-A1.mp4"
        break;

        case "2":
            myURL = "D4-B1.mp4"
        break;

        case "3":
            myURL = "D4-C1.mp4"
        break;

        case "4":
            myURL = "D4-D1.mp4"
        break;




        case "5":
            myURL = "D4-A2.mp4"
        break;

        
        
        case "6":
            myURL = "D4-B2.mp4"
        break;


        case "7":
            myURL = "D4-C2.mp4"
        break;

        case "8":
            myURL = "D4-B2.mp4"
            alert("2階講堂はC階段(黄色)エリアの先です。\n okボタンをクリックし、マップから目的地をご確認ください。");
        break;

        case "9":
            myURL = "D4-D2.mp4"
        break;


        case "10":
            myURL = "D4-B3.mp4"
            alert("3階講堂はC階段(黄色)エリアの先です。\n okボタンをクリックし、マップから目的地をご確認ください。");
        break;


        case "11":
            myURL = "D4-A3.mp4"
        break;

        case "12":
            myURL = "D4-B3.mp4"
        break;


        case "13":
            myURL = "D4-D3.mp4"
        break;
        



        case "14":
            myURL = "4d-a.mp4"
        break;


            case "15":
                myURL = "4d-b.mp4"
            break;

     

            case "16":
                myURL = "4F.jpg"
                alert("目的地は現在地と同じ4階D階段(水色)エリアです。\n okボタンをクリックし、マップから目的地をご確認ください。");
            break;


            
        }
    
        location.href = myURL;
        return 0;
        }

        
    