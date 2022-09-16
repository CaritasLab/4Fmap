function mySubmit(){
    var val1 = document.frmMain.sct1.value;
    var myURL;



    switch(val1){

        case "1":
            myURL = "A4-A1.mp4"
        break;

        case "2":
            myURL = "A4-B1.mp4"
        break;

        case "2'":
            myURL = "A4-B1.mp4"
            alert("体育館、資料室は１階B階段（黄色）カテゴリーの正面玄関を左に進むと到着します。\n okボタンをクリックし、マップから目的地をご確認ください。");
        break;

    
        case "3":
            myURL = "A4-C1.mp4"
        break;

        case "4":
            myURL = "A4-D1.mp4"
        break;



        case "5":
            myURL = "A4-A2.mp4"
        break;

        case "6":
            myURL = "A4-B2.mp4"
        break;

        case "7":
            myURL = "A4-C2.mp4"
        break;

        case "8":
            myURL = "A4-B2.mp4"
            alert("2階講堂はB階段（黄色）エリアの先にあります。\n okボタンをクリックし、マップから目的地をご確認ください。");
        break;


        case "9":
            myURL = "A4-D2.mp4"
        break;





        case "10":
            myURL = "A4-B3.mp4"
            alert("3階講堂はB階段（黄色）エリアの先にあります。\n okボタンをクリックし、マップから目的地をご確認ください。");
        break;


        case "11":
            myURL = "A4-A3.mp4"
        break;

        case "12":
            myURL = "A4-B3.mp4"
        break;

        case "13":
            myURL = "A4-D3.mp4"
        break;
        


            case "14":
                myURL = "4F.jpg"
                alert("目的地は現在地と同じ4階A階段(赤)エリアです。\n okボタンをクリックし、マップから目的地をご確認ください。");
            break;


         

            case "15":
                myURL = "4a-b.mp4"
            break;


            case "16":
                myURL = "4a-d.mp4"
            break;

    
            
        }
    
        location.href = myURL;
        return 0;
        }

        
    