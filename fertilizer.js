document.addEventListener('DOMContentLoaded',function(){
    const menu_btn = document.querySelector('.right-bar');
    const mobile_nav = document.querySelector('.mobile_nav');

    menu_btn.addEventListener('click',function(){
        menu_btn.classList.toggle('is-active');
        mobile_nav.classList.toggle('is-active');
        
   
    });

});


//main card
let mega = document.querySelector('.mega');



/**********************************************Sweet Potato******************************************************/
// Card 1
let containers_mega1 = document.querySelector('.containers-mega1');



 document.querySelector('#buy1').onclick = ()=>{
        

        mega.style.display = 'flex';
       containers_mega1.classList.add('actived');  
    
        }

    document.querySelector('#close1').onclick = ()=>{
        mega.style.display = 'none';
        containers_mega1.classList.remove('actived');
       
        
       
    };

           
    const immgs = document.querySelectorAll('.container1 .imgs a');
   
    let imgId = 1;

    immgs.forEach((img)=>{
        img.addEventListener('click',(e)=>{
            e.preventDefault();
            imgId = img.dataset.id1;
     
            moveImage();
        });
    })



    function moveImage()
    {
        const imgwidth = document.querySelector('.main-image1 img:first-child').clientWidth;

        let width = (imgId-1)*imgwidth;
        

        document.querySelector('.main-image1').style.transform = `translateX(${-width}px)`;
     
    }


    let minus_qty1 = document.querySelector('.qty_minus1');
let plus_qty1 = document.querySelector('.qty_plus1');
let qty_value1 = document.querySelector('.qty_value1');

minus_qty1.addEventListener('click',function(){
    let qty1 = parseInt(qty_value1.value);
        if(qty1>1)
        {
            qty1--;
            qty_value1.value=qty1;
       }
});

plus_qty1.addEventListener('click',function(){
    let qty1 = parseInt(qty_value1.value);
    if(qty1>=1){
        qty1++;
        qty_value1.value = qty1;
    }
});
/**********************************************Sweet Potato******************************************************/













/**********************************************Corn******************************************************/
//card 2
let containers_mega2 = document.querySelector('.containers-mega2');



 document.querySelector('#buy2').onclick = ()=>{
        
   
        mega.style.display = 'flex';
       containers_mega2.classList.add('actived2');  
    
        }

    document.querySelector('#close2').onclick = ()=>{
        mega.style.display = 'none';
        containers_mega2.classList.remove('actived2'); 

    };

           
    const immgs2 = document.querySelectorAll('.container2 .imgs a');
   
    let imgId2 = 1;

    immgs2.forEach((img2)=>{
        img2.addEventListener('click',(e)=>{
            e.preventDefault();
            imgId2 = img2.dataset.id2;
     
            moveImage2();
        });
    })



    function moveImage2()
    {
        const imgwidth2 = document.querySelector('.main-image2 img:first-child').clientWidth;

        let width2 = (imgId2-1)*imgwidth2;
        

        document.querySelector('.main-image2').style.transform = `translateX(${-width2}px)`;
     
    }
    let minus_qty2 = document.querySelector('.qty_minus2');
let plus_qty2 = document.querySelector('.qty_plus2');
let qty_value2 = document.querySelector('.qty_value2');

minus_qty2.addEventListener('click',function(){
    let qty2= parseInt(qty_value2.value);
        if(qty2>1)
        {
            qty2--;
            qty_value2.value=qty2;
       }
});

plus_qty2.addEventListener('click',function(){
    let qty2 = parseInt(qty_value2.value);
    if(qty2>=1){
        qty2++;
        qty_value2.value = qty2;
    }
});
/**********************************************Corn******************************************************/










/**********************************************Wheat******************************************************/
//card 3
let containers_mega3 = document.querySelector('.containers-mega3');


 document.querySelector('#buy3').onclick = ()=>{
        
   
        mega.style.display = 'flex';
       containers_mega3.classList.add('actived3');  
    
        }

    document.querySelector('#close3').onclick = ()=>{
        mega.style.display = 'none';
        containers_mega3.classList.remove('actived3'); 

    };

           
    const immgs3 = document.querySelectorAll('.container3 .imgs a');
   
    let imgId3 = 1;

    immgs3.forEach((img3)=>{
        img3.addEventListener('click',(e)=>{
            e.preventDefault();
            imgId3 = img3.dataset.id3;
     
            moveImage3();
        });
    })



    function moveImage3()
    {
        const imgwidth3 = document.querySelector('.main-image3 img:first-child').clientWidth;

        let width3 = (imgId3-1)*imgwidth3;
        

        document.querySelector('.main-image3').style.transform = `translateX(${-width3}px)`;
     
    }



let minus_qty3 = document.querySelector('.qty_minus3');
let plus_qty3 = document.querySelector('.qty_plus3');
let qty_value3 = document.querySelector('.qty_value3');

minus_qty3.addEventListener('click',function(){
    let qty3= parseInt(qty_value3.value);
        if(qty3>1)
        {
            qty3--;
            qty_value3.value=qty3;
       }
});

plus_qty3.addEventListener('click',function(){
    let qty3 = parseInt(qty_value3.value);
    if(qty3>=1){
        qty3++;
        qty_value3.value = qty3;
    }
});
/**********************************************Wheat******************************************************/






/**********************************************Potatoes******************************************************/
//card 4
let containers_mega4 = document.querySelector('.containers-mega4');


 document.querySelector('#buy4').onclick = ()=>{
        
   
        mega.style.display = 'flex';
       containers_mega4.classList.add('actived4');  
    
        }

    document.querySelector('#close4').onclick = ()=>{
        mega.style.display = 'none';
        containers_mega4.classList.remove('actived4'); 

    };

           
    const immgs4 = document.querySelectorAll('.container4 .imgs a');
   
    let imgId4 = 1;

    immgs4.forEach((img4)=>{
        img4.addEventListener('click',(e)=>{
            e.preventDefault();
            imgId4 = img4.dataset.id4;
     
            moveImage4();
        });
    })



    function moveImage4()
    {
        const imgwidth4 = document.querySelector('.main-image4 img:first-child').clientWidth;

        let width4 = (imgId4-1)*imgwidth4;
        

        document.querySelector('.main-image4').style.transform = `translateX(${-width4}px)`;
     
    }


let minus_qty4 = document.querySelector('.qty_minus4');
let plus_qty4 = document.querySelector('.qty_plus4');
let qty_value4 = document.querySelector('.qty_value4');

minus_qty4.addEventListener('click',function(){
    let qty4= parseInt(qty_value4.value);
        if(qty4>1)
        {
            qty4--;
            qty_value4.value=qty4;
       }
});

plus_qty4.addEventListener('click',function(){
    let qty4 = parseInt(qty_value4.value);
    if(qty4>=1){
        qty4++;
        qty_value4.value = qty4;
    }
});
/**********************************************Potatoes******************************************************/








/**********************************************Rice******************************************************/
//card 5
let containers_mega5 = document.querySelector('.containers-mega5');


 document.querySelector('#buy5').onclick = ()=>{
        
   
        mega.style.display = 'flex';
       containers_mega5.classList.add('actived5');  
    
        }

    document.querySelector('#close5').onclick = ()=>{
        mega.style.display = 'none';
        containers_mega5.classList.remove('actived5'); 

    };

           
    const immgs5 = document.querySelectorAll('.container5 .imgs a');
   
    let imgId5 = 1;

    immgs5.forEach((img5)=>{
        img5.addEventListener('click',(e)=>{
            e.preventDefault();
            imgId5 = img5.dataset.id5;
     
            moveImage5();
        });
    })



    function moveImage5()
    {
        const imgwidth5 = document.querySelector('.main-image5 img:first-child').clientWidth;

        let width5 = (imgId5-1)*imgwidth5;
        

        document.querySelector('.main-image5').style.transform = `translateX(${-width5}px)`;
     
    }




    let minus_qty5 = document.querySelector('.qty_minus5');
let plus_qty5 = document.querySelector('.qty_plus5');
let qty_value5 = document.querySelector('.qty_value5');

minus_qty5.addEventListener('click',function(){
    let qty5= parseInt(qty_value5.value);
        if(qty5>1)
        {
            qty5--;
            qty_value5.value=qty5;
       }
});

plus_qty5.addEventListener('click',function(){
    let qty5 = parseInt(qty_value5.value);
    if(qty5>=1){
        qty5++;
        qty_value5.value = qty5;
    }
});
/**********************************************Rice******************************************************/









/**********************************************Vegetable******************************************************/
//card 6
let containers_mega6 = document.querySelector('.containers-mega6');


 document.querySelector('#buy6').onclick = ()=>{
        
   
        mega.style.display = 'flex';
       containers_mega6.classList.add('actived6');  
    
        }

    document.querySelector('#close6').onclick = ()=>{
        mega.style.display = 'none';
        containers_mega6.classList.remove('actived6'); 

    };

           
    const immgs6 = document.querySelectorAll('.container6 .imgs a');
   
    let imgId6 = 1;

    immgs6.forEach((img6)=>{
        img6.addEventListener('click',(e)=>{
            e.preventDefault();
            imgId6 = img6.dataset.id6;
     
            moveImage6();
        });
    })



    function moveImage6()
    {
        const imgwidth6 = document.querySelector('.main-image6 img:first-child').clientWidth;

        let width6 = (imgId6-1)*imgwidth6;
        

        document.querySelector('.main-image6').style.transform = `translateX(${-width6}px)`;
     
    }




    let minus_qty6 = document.querySelector('.qty_minus6');
    let plus_qty6 = document.querySelector('.qty_plus6');
    let qty_value6 = document.querySelector('.qty_value6');
    
    minus_qty6.addEventListener('click',function(){
        let qty6= parseInt(qty_value6.value);
            if(qty6>1)
            {
                qty6--;
                qty_value6.value=qty6;
           }
    });
    
    plus_qty6.addEventListener('click',function(){
        let qty6 = parseInt(qty_value6.value);
        if(qty6>=1){
            qty6++;
            qty_value6.value = qty6;
        }
    });
/**********************************************Vegatable******************************************************/









/**********************************************Legumes******************************************************/
//card 7
let containers_mega7 = document.querySelector('.containers-mega7');


 document.querySelector('#buy7').onclick = ()=>{
        
   
        mega.style.display = 'flex';
       containers_mega7.classList.add('actived7');  
    
        }

    document.querySelector('#close7').onclick = ()=>{
        mega.style.display = 'none';
        containers_mega7.classList.remove('actived7'); 

    };

           
    const immgs7 = document.querySelectorAll('.container7 .imgs a');
   
    let imgId7 = 1;

    immgs7.forEach((img7)=>{
        img7.addEventListener('click',(e)=>{
            e.preventDefault();
            imgId7 = img7.dataset.id7;
     
            moveImage7();
        });
    })



    function moveImage7()
    {
        const imgwidth7 = document.querySelector('.main-image7 img:first-child').clientWidth;

        let width7 = (imgId7-1)*imgwidth7;
        

        document.querySelector('.main-image7').style.transform = `translateX(${-width7}px)`;
     
    }



    let minus_qty7 = document.querySelector('.qty_minus7');
    let plus_qty7 = document.querySelector('.qty_plus7');
    let qty_value7 = document.querySelector('.qty_value7');
    
    minus_qty7.addEventListener('click',function(){
        let qty7= parseInt(qty_value7.value);
            if(qty7>1)
            {
                qty7--;
                qty_value7.value=qty7;
           }
    });
    
    plus_qty7.addEventListener('click',function(){
        let qty7 = parseInt(qty_value7.value);
        if(qty7>=1){
            qty7++;
            qty_value7.value = qty7;
        }
    });
/**********************************************Legumes******************************************************/











/**********************************************Pomegranate******************************************************/
//card 8
let containers_mega8 = document.querySelector('.containers-mega8');


 document.querySelector('#buy8').onclick = ()=>{
        
   
        mega.style.display = 'flex';
       containers_mega8.classList.add('actived8');  
    
        }

    document.querySelector('#close8').onclick = ()=>{
        mega.style.display = 'none';
        containers_mega8.classList.remove('actived8'); 

    };

           
    const immgs8 = document.querySelectorAll('.container8 .imgs a');
   
    let imgId8 = 1;

    immgs8.forEach((img8)=>{
        img8.addEventListener('click',(e)=>{
            e.preventDefault();
            imgId8 = img8.dataset.id8;
     
            moveImage8();
        });
    })



    function moveImage8()
    {
        const imgwidth8 = document.querySelector('.main-image8 img:first-child').clientWidth;

        let width8 = (imgId8-1)*imgwidth8;
        

        document.querySelector('.main-image8').style.transform = `translateX(${-width8}px)`;
     
    }



    let minus_qty8 = document.querySelector('.qty_minus8');
    let plus_qty8 = document.querySelector('.qty_plus8');
    let qty_value8 = document.querySelector('.qty_value8');
    
    minus_qty8.addEventListener('click',function(){
        let qty8= parseInt(qty_value8.value);
            if(qty8>1)
            {
                qty8--;
                qty_value8.value=qty8;
           }
    });
    
    plus_qty8.addEventListener('click',function(){
        let qty8 = parseInt(qty_value8.value);
        if(qty8>=1){
            qty8++;
            qty_value8.value = qty8;
        }
    });
/**********************************************Pomegranate******************************************************/










/**********************************************Leeks******************************************************/
//card 9
let containers_mega9 = document.querySelector('.containers-mega9');


 document.querySelector('#buy9').onclick = ()=>{
        
   
        mega.style.display = 'flex';
       containers_mega9.classList.add('actived9');  
    
        }

    document.querySelector('#close9').onclick = ()=>{
        mega.style.display = 'none';
        containers_mega9.classList.remove('actived9'); 

    };

           
    const immgs9 = document.querySelectorAll('.container9 .imgs a');
   
    let imgId9 = 1;

    immgs9.forEach((img9)=>{
        img9.addEventListener('click',(e)=>{
            e.preventDefault();
            imgId9 = img9.dataset.id9;
     
            moveImage9();
        });
    })



    function moveImage9()
    {
        const imgwidth9 = document.querySelector('.main-image9 img:first-child').clientWidth;

        let width9 = (imgId9-1)*imgwidth9;
        

        document.querySelector('.main-image9').style.transform = `translateX(${-width9}px)`;
     
    }




    let minus_qty9 = document.querySelector('.qty_minus9');
    let plus_qty9 = document.querySelector('.qty_plus9');
    let qty_value9 = document.querySelector('.qty_value9');
    
    minus_qty9.addEventListener('click',function(){
        let qty9= parseInt(qty_value9.value);
            if(qty9>1)
            {
                qty9--;
                qty_value9.value=qty9;
           }
    });
    
    plus_qty9.addEventListener('click',function(){
        let qty9 = parseInt(qty_value9.value);
        if(qty9>=1){
            qty9++;
            qty_value9.value = qty9;
        }
    });
/**********************************************Leeks******************************************************/











/**********************************************Radish******************************************************/
//card 10
let containers_mega10 = document.querySelector('.containers-mega10');


 document.querySelector('#buy10').onclick = ()=>{
        
   
        mega.style.display = 'flex';
       containers_mega10.classList.add('actived10');  
    
        }

    document.querySelector('#close10').onclick = ()=>{
        mega.style.display = 'none';
        containers_mega10.classList.remove('actived10'); 

    };

           
    const immgs10 = document.querySelectorAll('.container10 .imgs a');
   
    let imgId10 = 1;

    immgs10.forEach((img10)=>{
        img10.addEventListener('click',(e)=>{
            e.preventDefault();
            imgId10 = img10.dataset.id10;
     
            moveImage10();
        });
    })



    function moveImage10()
    {
        const imgwidth10 = document.querySelector('.main-image10 img:first-child').clientWidth;

        let width10 = (imgId10-1)*imgwidth10;
        

        document.querySelector('.main-image10').style.transform = `translateX(${-width10}px)`;
     
    }





    let minus_qty10 = document.querySelector('.qty_minus10');
    let plus_qty10 = document.querySelector('.qty_plus10');
    let qty_value10 = document.querySelector('.qty_value10');
    
    minus_qty10.addEventListener('click',function(){
        let qty10= parseInt(qty_value10.value);
            if(qty10>1)
            {
                qty10--;
                qty_value10.value=qty10;
           }
    });
    
    plus_qty10.addEventListener('click',function(){
        let qty10 = parseInt(qty_value10.value);
        if(qty10>=1){
            qty10++;
            qty_value10.value = qty10;
        }
    });
/**********************************************Radish******************************************************/









/**********************************************Cauliflower******************************************************/
//card 11
let containers_mega11 = document.querySelector('.containers-mega11');


 document.querySelector('#buy11').onclick = ()=>{
        
   
        mega.style.display = 'flex';
       containers_mega11.classList.add('actived11');  
    
        }

    document.querySelector('#close11').onclick = ()=>{
        mega.style.display = 'none';
        containers_mega11.classList.remove('actived11'); 

    };

           
    const immgs11 = document.querySelectorAll('.container11 .imgs a');
   
    let imgId11 = 1;

    immgs11.forEach((img11)=>{
        img11.addEventListener('click',(e)=>{
            e.preventDefault();
            imgId11 = img11.dataset.id11;
     
            moveImage11();
        });
    })



    function moveImage11()
    {
        const imgwidth11 = document.querySelector('.main-image11 img:first-child').clientWidth;

        let width11 = (imgId11-1)*imgwidth11;
        

        document.querySelector('.main-image11').style.transform = `translateX(${-width11}px)`;
     
    }






    
    let minus_qty11 = document.querySelector('.qty_minus11');
    let plus_qty11 = document.querySelector('.qty_plus11');
    let qty_value11 = document.querySelector('.qty_value11');
    
    minus_qty11.addEventListener('click',function(){
        let qty11= parseInt(qty_value11.value);
            if(qty11>1)
            {
                qty11--;
                qty_value11.value=qty11;
           }
    });
    
    plus_qty11.addEventListener('click',function(){
        let qty11 = parseInt(qty_value11.value);
        if(qty11>=1){
            qty11++;
            qty_value11.value = qty11;
        }
    });
/**********************************************Cauliflower******************************************************/








/**********************************************Soya Beans******************************************************/
//card 12
let containers_mega12 = document.querySelector('.containers-mega12');


 document.querySelector('#buy12').onclick = ()=>{
        
   
        mega.style.display = 'flex';
       containers_mega12.classList.add('actived12');  
    
        }

    document.querySelector('#close12').onclick = ()=>{
        mega.style.display = 'none';
        containers_mega12.classList.remove('actived12'); 

    };

           
    const immgs12 = document.querySelectorAll('.container12 .imgs a');
   
    let imgId12 = 1;

    immgs12.forEach((img12)=>{
        img12.addEventListener('click',(e)=>{
            e.preventDefault();
            imgId12 = img12.dataset.id12;
     
            moveImage12();
        });
    })



    function moveImage12()
    {
        const imgwidth12 = document.querySelector('.main-image12 img:first-child').clientWidth;

        let width12 = (imgId12-1)*imgwidth12;
        

        document.querySelector('.main-image12').style.transform = `translateX(${-width12}px)`;
     
    }



    let minus_qty12 = document.querySelector('.qty_minus12');
    let plus_qty12 = document.querySelector('.qty_plus12');
    let qty_value12 = document.querySelector('.qty_value12');
    
    minus_qty12.addEventListener('click',function(){
        let qty12= parseInt(qty_value12.value);
            if(qty12>1)
            {
                qty12--;
                qty_value12.value=qty12;
           }
    });
    
    plus_qty12.addEventListener('click',function(){
        let qty12 = parseInt(qty_value12.value);
        if(qty12>=1){
            qty12++;
            qty_value12.value = qty12;
        }
    });
/**********************************************Soya Beans******************************************************/



let sell_mega = document.querySelector('.sell-mega');



let sell_click1 = document.querySelector('.sell-click1');
let sell_close1 = document.querySelector('#sell-close1');
document.querySelector('#sell1').onclick = function(){
    sell_mega.style.display = 'flex';
    sell_click1.style.display = 'block';
}

sell_close1.addEventListener('click',function(){
    sell_mega.style.display = 'none';
    sell_click1.style.display = 'none';
});


let sell_minus_qty_btn1 = document.querySelector('.sell1-minus');
let sell_plus_qty_btn1 = document.querySelector('.sell1-plus');
let sell_qty_value1 = document.querySelector('#sell1_value');



sell_minus_qty_btn1.addEventListener('click',function(){
    
    let qty1 = parseInt(sell_qty_value1.value);
    if(qty1>1)
    {
        qty1--;
        sell_qty_value1.value=qty1;
    }
});
 


sell_plus_qty_btn1.addEventListener('click',function(){
    
     let qty1 = parseInt(sell_qty_value1.value);
     if(qty1>=1)
     {
         qty1++;
         sell_qty_value1.value=qty1;
     }
 });











 let sell_click2 = document.querySelector('.sell-click2');
 let sell_close2 = document.querySelector('#sell-close2');
 document.querySelector('#sell2').onclick = function(){
     sell_mega.style.display = 'flex';
     sell_click2.style.display = 'block';
 }
 
 sell_close2.addEventListener('click',function(){
     sell_mega.style.display = 'none';
     sell_click2.style.display = 'none';
 });
 
 
 const sell_minus_qty_btn2 = document.querySelector('#sell2-minus');
 const sell_plus_qty_btn2 = document.querySelector('#sell2-plus');
 const sell_qty_value2 = document.querySelector('#sell2_value');
 
 
 
 sell_minus_qty_btn2.addEventListener('click',function(){
   
     let qty2 = parseInt(sell_qty_value2.value);
     if(qty2>1)
     {
         qty2--;
         sell_qty_value2.value=qty2;
     }
 });
  
 
 
 sell_plus_qty_btn2.addEventListener('click',function(){
     
      let qty2 = parseInt(sell_qty_value2.value);
      if(qty2>=1)
      {
        qty2++;
        sell_qty_value2.value=qty2;
      }
  });









  let sell_click3 = document.querySelector('.sell-click3');
  let sell_close3 = document.querySelector('#sell-close3');
  document.querySelector('#sell3').onclick = function(){
      sell_mega.style.display = 'flex';
      sell_click3.style.display = 'block';
  }
  
  sell_close3.addEventListener('click',function(){
      sell_mega.style.display = 'none';
      sell_click3.style.display = 'none';
  });
  
  
  let sell_minus_qty_btn3 = document.querySelector('#sell3-minus');
  let sell_plus_qty_btn3 = document.querySelector('#sell3-plus');
  let sell_qty_value3 = document.querySelector('#sell3_value');
  
  
  
  sell_minus_qty_btn3.addEventListener('click',function(){
     
      let qty3 = parseInt(sell_qty_value3.value);
      if(qty3>1)
      {
          qty3--;
          sell_qty_value3.value=qty3;
      }
  });
   
  
  
  sell_plus_qty_btn3.addEventListener('click',function(){
      
       let qty3 = parseInt(sell_qty_value3.value);
       if(qty3>=1)
       {
           qty3++;
           sell_qty_value3.value=qty3;
       }
   });
 
 
 
 







   let sell_click4 = document.querySelector('.sell-click4');
   let sell_close4 = document.querySelector('#sell-close4');
   document.querySelector('#sell4').onclick = function(){
       sell_mega.style.display = 'flex';
       sell_click4.style.display = 'block';
   }
   
   sell_close4.addEventListener('click',function(){
       sell_mega.style.display = 'none';
       sell_click4.style.display = 'none';
   });
   
   
   let sell_minus_qty_btn4 = document.querySelector('#sell4-minus');
   let sell_plus_qty_btn4 = document.querySelector('#sell4-plus');
   let sell_qty_value4 = document.querySelector('#sell4_value');
   
   
   
   sell_minus_qty_btn4.addEventListener('click',function(){
   
       let qty4 = parseInt(sell_qty_value4.value);
       if(qty4>1)
       {
           qty4--;
           sell_qty_value4.value=qty4;
       }
   });
    
   
   
   sell_plus_qty_btn4.addEventListener('click',function(){
       
        let qty4 = parseInt(sell_qty_value4.value);
        if(qty4>=1)
        {
            qty4++;
            sell_qty_value4.value=qty4;
        }
    });
  






    let sell_click5 = document.querySelector('.sell-click5');
    let sell_close5 = document.querySelector('#sell-close5');
    document.querySelector('#sell5').onclick = function(){
        sell_mega.style.display = 'flex';
        sell_click5.style.display = 'block';
    }
    
    sell_close5.addEventListener('click',function(){
        sell_mega.style.display = 'none';
        sell_click5.style.display = 'none';
    });
    
    
    const sell_minus_qty_btn5 = document.querySelector('#sell5-minus');
    const sell_plus_qty_btn5 = document.querySelector('#sell5-plus');
    const sell_qty_value5 = document.querySelector('#sell5_value');
    
    
    
    sell_minus_qty_btn5.addEventListener('click',function(){
       preventDefault();
        let qty5 = parseInt(sell_qty_value5.value);
        if(qty5>1)
        {
            qty5--;
            sell_qty_value5.value=qty5;
        }
    });
     
    
    
    sell_plus_qty_btn5.addEventListener('click',function(){
        
         let qty5 = parseInt(sell_qty_value5.value);
         if(qty5>=1)
         {
             qty5++;
             sell_qty_value5.value=qty5;
         }
     });
   






     
    let sell_click6 = document.querySelector('.sell-click6');
    let sell_close6 = document.querySelector('#sell-close6');
    document.querySelector('#sell6').onclick = function(){
        sell_mega.style.display = 'flex';
        sell_click6.style.display = 'block';
    }
    
    sell_close6.addEventListener('click',function(){
        sell_mega.style.display = 'none';
        sell_click6.style.display = 'none';
    });
    
    
    const sell_minus_qty_btn6 = document.querySelector('#sell6-minus');
    const sell_plus_qty_btn6 = document.querySelector('#sell6-plus');
    const sell_qty_value6 = document.querySelector('#sell6_value');
    
    
    
    sell_minus_qty_btn6.addEventListener('click',function(){
       
        let qty6 = parseInt(sell_qty_value6.value);
        if(qty6>1)
        {
            qty6--;
            sell_qty_value6.value=qty6;
        }
    });
     
    
    
    sell_plus_qty_btn6.addEventListener('click',function(){
        
         let qty6 = parseInt(sell_qty_value6.value);
         if(qty6>=1)
         {
             qty6++;
             sell_qty_value6.value=qty6;
         }
     });
   








        
    let sell_click7 = document.querySelector('.sell-click7');
    let sell_close7 = document.querySelector('#sell-close7');
    document.querySelector('#sell7').onclick = function(){
        sell_mega.style.display = 'flex';
        sell_click7.style.display = 'block';
    }
    
    sell_close7.addEventListener('click',function(){
        sell_mega.style.display = 'none';
        sell_click7.style.display = 'none';
    });
    
    
    const sell_minus_qty_btn7 = document.querySelector('#sell7-minus');
    const sell_plus_qty_btn7 = document.querySelector('#sell7-plus');
    const sell_qty_value7 = document.querySelector('#sell7_value');
    
    
    
    sell_minus_qty_btn7.addEventListener('click',function(){
       preventDefault();
        let qty7 = parseInt(sell_qty_value7.value);
        if(qty7>1)
        {
            qty7--;
            sell_qty_value7.value=qty7;
        }
    });
     
    
    
    sell_plus_qty_btn7.addEventListener('click',function(){
        
         let qty7 = parseInt(sell_qty_value7.value);
         if(qty7>=1)
         {
             qty7++;
             sell_qty_value7.value=qty7;
         }
     });
   








          
    let sell_click8 = document.querySelector('.sell-click8');
    let sell_close8 = document.querySelector('#sell-close8');
    document.querySelector('#sell8').onclick = function(){
        sell_mega.style.display = 'flex';
        sell_click8.style.display = 'block';
    }
    
    sell_close8.addEventListener('click',function(){
        sell_mega.style.display = 'none';
        sell_click8.style.display = 'none';
    });
    
    
    const sell_minus_qty_btn8 = document.querySelector('#sell8-minus');
    const sell_plus_qty_btn8 = document.querySelector('#sell8-plus');
    const sell_qty_value8 = document.querySelector('#sell8_value');
    
    
    
    sell_minus_qty_btn8.addEventListener('click',function(){
       
        let qty8 = parseInt(sell_qty_value8.value);
        if(qty8>1)
        {
            qty8--;
            sell_qty_value8.value=qty8;
        }
    });
     
    
    
    sell_plus_qty_btn8.addEventListener('click',function(){
        
         let qty8 = parseInt(sell_qty_value8.value);
         if(qty8>=1)
         {
             qty8++;
             sell_qty_value8.value=qty8;
         }
     });
   











     let sell_click9 = document.querySelector('.sell-click9');
     let sell_close9 = document.querySelector('#sell-close9');
     document.querySelector('#sell9').onclick = function(){
         sell_mega.style.display = 'flex';
         sell_click9.style.display = 'block';
     }
     
     sell_close9.addEventListener('click',function(){
         sell_mega.style.display = 'none';
         sell_click9.style.display = 'none';
     });
     
     
     const sell_minus_qty_btn9 = document.querySelector('#sell9-minus');
     const sell_plus_qty_btn9 = document.querySelector('#sell9-plus');
     const sell_qty_value9 = document.querySelector('#sell9_value');
     
     
     
     sell_minus_qty_btn9.addEventListener('click',function(){
        preventDefault();
         let qty9 = parseInt(sell_qty_value9.value);
         if(qty9>1)
         {
             qty9--;
             sell_qty_value9.value=qty9;
         }
     });
      
     
     
     sell_plus_qty_btn9.addEventListener('click',function(){
         
          let qty9 = parseInt(sell_qty_value9.value);
          if(qty9>=1)
          {
              qty9++;
              sell_qty_value9.value=qty9;
          }
      });
    













      let sell_click10 = document.querySelector('.sell-click10');
      let sell_close10 = document.querySelector('#sell-close10');
      document.querySelector('#sell10').onclick = function(){
          sell_mega.style.display = 'flex';
          sell_click10.style.display = 'block';
      }
      
      sell_close10.addEventListener('click',function(){
          sell_mega.style.display = 'none';
          sell_click10.style.display = 'none';
      });
      
      
      const sell_minus_qty_btn10 = document.querySelector('#sell10-minus');
      const sell_plus_qty_btn10 = document.querySelector('#sell10-plus');
      const sell_qty_value10 = document.querySelector('#sell10_value');
      
      
      
      sell_minus_qty_btn10.addEventListener('click',function(){
         preventDefault();
          let qty10 = parseInt(sell_qty_value10.value);
          if(qty10>1)
          {
              qty10--;
              sell_qty_value10.value=qty10;
          }
      });
       
      
      
      sell_plus_qty_btn10.addEventListener('click',function(){
          
           let qty10 = parseInt(sell_qty_value10.value);
           if(qty10>=1)
           {
               qty10++;
               sell_qty_value10.value=qty10;
           }
       });
     








       let sell_click11 = document.querySelector('.sell-click11');
       let sell_close11 = document.querySelector('#sell-close11');
       document.querySelector('#sell11').onclick = function(){
           sell_mega.style.display = 'flex';
           sell_click11.style.display = 'block';
       }
       
       sell_close11.addEventListener('click',function(){
           sell_mega.style.display = 'none';
           sell_click11.style.display = 'none';
       });
       
       
       const sell_minus_qty_btn11 = document.querySelector('#sell11-minus');
       const sell_plus_qty_btn11 = document.querySelector('#sell11-plus');
       const sell_qty_value11 = document.querySelector('#sell11_value');
       
       
       
       sell_minus_qty_btn11.addEventListener('click',function(){
         
           let qty11 = parseInt(sell_qty_value11.value);
           if(qty11>1)
           {
               qty11--;
               sell_qty_value11.value=qty11;
           }
       });
        
       
       
       sell_plus_qty_btn11.addEventListener('click',function(){
           
            let qty11 = parseInt(sell_qty_value11.value);
            if(qty11>=1)
            {
                qty11++;
                sell_qty_value11.value=qty11;
            }
        });
      





        
       let sell_click12 = document.querySelector('.sell-click12');
       let sell_close12 = document.querySelector('#sell-close12');
       document.querySelector('#sell12').onclick = function(){
           sell_mega.style.display = 'flex';
           sell_click12.style.display = 'block';
       }
       
       sell_close12.addEventListener('click',function(){
           sell_mega.style.display = 'none';
           sell_click12.style.display = 'none';
       });
       
       
       const sell_minus_qty_btn12 = document.querySelector('#sell12-minus');
       const sell_plus_qty_btn12 = document.querySelector('#sell12-plus');
       const sell_qty_value12 = document.querySelector('#sell12_value');
       
       
       
       sell_minus_qty_btn12.addEventListener('click',function(){
          
           let qty12 = parseInt(sell_qty_value12.value);
           if(qty12>1)
           {
               qty12--;
               sell_qty_value12.value=qty12;
           }
       });
        
       
       
       sell_plus_qty_btn12.addEventListener('click',function(){
           
            let qty12 = parseInt(sell_qty_value12.value);
            if(qty12>=1)
            {
                qty12++;
                sell_qty_value12.value=qty12;
            }
        });