 const themebtn1 = document.querySelector('#themebtn1')
 const themebtn2 = document.querySelector('#themebtn2')

 themebtn1.addEventListener('click',()=>{
     document.body.classList.toggle('dark')
 })
 themebtn2.addEventListener('click',()=>{
    document.body.classList.toggle('dark')
})
const t1 = gsap.timeline({defaults: { ease:'back'} } )

t1.from('.illus', {
    opacity:0,
    duration:7
}).to('#y-1',{
    x: '200px',
    repeat: -1,
    yoyo:true,
    duration: .8
}, '-=5').to('#y-2',{
    x:'150px',
    repeat: -1,
    yoyo:true,
    duration: .5
}, '-=5').to('#y-3',{
    x:'50px',
    repeat: -1,
    yoyo:true,
    duration: .6
},'-=5').to('#r-1',{
    x:'100px',
    repeat: -1,
    yoyo:true,
    duration: .6
}, '-=5')

const t12 = gsap.timeline({default:{ease:'power4'}})

t12.from(' .hero img',{
    opacity:0,
    y:'-20%',
    duration:2,
    delay:1
}).from ('.hero .herotitle',{
    opacity:0,
    y: '100%',
    duration:1
}, '-=2').from(' .hero .herobtns #btn', {
    opacity:0,
    y:'100%',
    duartion:.2,
    staggar:.3
}, '-=1').from(' .navbar',{
    opacity:0,
    duration:2,
    delay:1
}, '-=2')

const scrollabt = gsap.timeline({
    scrollTrigger :{
        trigger: '.about',
        
        start: '400px bottom',
        end: '-100px top',
       
    }
})

scrollabt.from('.about .title',{
    x: '-100%',
    opacity: 0,
    duration: 0.16
}).from('.about .aboutcontent span',{
    y:'50%',
    opacity: 0,
    duration: 0.7,
    stagger:0.2
}).from('.about .abtbtn',{
    y:'100%',
    opacity: 0,
    duration: 0.2,
    
})

const scrollskills = gsap.timeline({
    scrollTrigger :{
        trigger: '.skills',
       
        start: '400px bottom',
        end: 'top top',
       
      
    }
})
scrollskills.from('.skills .title',{
    x: '-100%',
    opacity: 0,
    duration: 0.7
}).from('.skills .cardrow .card ',{
    x:'-100%',
    opacity:0,
    duration:0.5,
    stagger:.1
}, '-=0.6')
const scrollprojects = gsap.timeline({
    scrollTrigger :{
        trigger: '.projects',
       
        start: '400px bottom',
        end: 'top top',
       
      
    }
})

scrollprojects.from('.projects .title',{
    x:'-100%',
    opacity:0,
    duration:0.7
}).from('.projects .cardrow .card',{
    x:'-100%',
    opacity:0,
    duration:0.5,
    stagger:.1
}, '-=0.6')

const scrollcontact = gsap.timeline({
    scrollTrigger :{
        trigger: '.contact',
       
        start: 'top bottom',
        end: 'top center',
       
    }
})
scrollcontact.from('.contact .title',{
    x:'-100%',
    opacity:0,
    duration:0.5,
  
}).from('.contact .iconrow .icon',{
    x:'-100%',
    opacity:0,
    duration:0.5,
    stagger:.1
}, '-=0.6')

