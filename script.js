document.addEventListener('DOMContentLoaded',function(){
    const menu_btn = document.querySelector('.right-bar');
    const mobile_nav = document.querySelector('.mobile_nav');

    menu_btn.addEventListener('click',function(){
        menu_btn.classList.toggle('is-active');
        mobile_nav.classList.toggle('is-active');
        
   
    });

    const slide = new IntersectionObserver((entry)=>{
        entry.forEach((e)=>{
            if(e.isIntersecting)
            {
                e.target.classList.add('show');
            }
            else{
                e.target.classList.remove('show');
            }
        })
    });

    const elements = document.querySelectorAll('.actual-card');
    elements.forEach((el)=>{
        slide.observe(el);
    });









    const slide2 = new IntersectionObserver((entries)=>{
        entries.forEach(entry => {
            const intersecting = entry.isIntersecting;
            if(intersecting)
            {
                entry.target.classList.add('show2');
            }
            else{
                entry.target.classList.remove('show2');
            }
           
          })
    });


    slide2.observe(document.querySelector(".sub-hero-image"))




    const slide3 = new IntersectionObserver((entry)=>{
        entry.forEach((e)=>{
            if(e.isIntersecting)
            {
                e.target.classList.add('show3');
            }
            else{
                e.target.classList.remove('show3');
            }
        })
    });

    const elements3 = document.querySelectorAll('#partners-img');
    elements3.forEach((el)=>{
        slide3.observe(el);
    });





    const slide4 = new IntersectionObserver((entry)=>{
        entry.forEach((e)=>{
            if(e.isIntersecting)
            {
                e.target.classList.add('show4');
            }
            else{
                e.target.classList.remove('show4');
            }
        })
    });

    const elements4 = document.querySelectorAll('.recent-pics');
    elements4.forEach((el)=>{
        slide4.observe(el);
    });
      
       
    let slidePosition = 0;
    const sliders = document.querySelectorAll('.review');
    const totalSlider = sliders.length;
    


    function UpdatePosition()
    {
        sliders.forEach((slide)=>{
            slide.classList.remove('active');
            slide.classList.add('hidden');
        });

        sliders[slidePosition].classList.add('active');
    }


 


    setInterval(()=>{
        if(slidePosition==totalSlider-1)
        {
            slidePosition=0;
        }
        else{
            slidePosition++;
        }

        UpdatePosition();
    },5000);
  
});
    




   

   

