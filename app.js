setTimeout(function(){
    $('.loader_bg').fadeToggle();
}, 4500);

function init() {
    setTimeout(typeAnim, 5000);
    
}
init();

let summary = document.querySelector('.summary');

let htmlSummaryText = ` <p class="about" style="font-family: 'Proxima Nova', sans-serif; font-size:18px;"></p>`
summary.innerHTML+= htmlSummaryText;

let summaryTextValue = `Currently taking a gap year since I'm doing a credit transfer from my China campus to an Australia campus. I'm taking computer science as my major and currently , I'm learning web development and mobile development to enhance my software development skills. I was born in 2002, and I was born and raised in Jakarta , Indonesia .`

let summaryText = document.querySelector(".about");
summaryText.innerHTML = '';

//type animation summary
let wordIndex = 0;

function typeAnim(){
    let text = '';
    text = summaryTextValue.substring(0, text.length + wordIndex);
    summaryText.innerHTML = text
    if(wordIndex!=summaryTextValue.length){
        setTimeout(typeAnim, 30);
        wordIndex++;
    }
}

const sr= ScrollReveal({
    origin:'top',
    distance:'60px',
    duration:2500,
    delay:400,
    //reset:true
})

sr.reveal('.about-row',{delay:5500})
sr.reveal('.my-heading',{delay:5500})
sr.reveal('.link-container',{delay:5500})

sr.reveal('.experience',{delay:7000})
sr.reveal('.about-row',{delay:5500})

sr.reveal('.about-row',{origin:'left'})
