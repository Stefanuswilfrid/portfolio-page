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

let summaryTextValue = `Currently taking a gap year since I'm doing a credit transfer from my China campus to an Australia campus. 
I'm a young and passionate programmer & currently seeking opportunities to further enhance my technical and personal skills through internship programs
/ hackathon . You can reach me at stephanuswilfrid@gmail.com .`

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

sr.reveal('.experience',{delay:1000})
sr.reveal('.cta',{delay:500})
sr.reveal('.about-row',{delay:5500})

sr.reveal('.about-row',{origin:'left'})
