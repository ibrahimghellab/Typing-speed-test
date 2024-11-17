const text=document.getElementById("text");
const button=document.getElementById("button");
const timerElement=document.getElementById("timer");
const input=document.getElementById("input");
const mistakesElement=document.getElementById("mistakes");
const WPM=document.getElementById("WPM");
const correctAnswerElement=document.getElementById("correctAnswer");

let nb=0;
let mistakes=0;
let correctAnswer=0;
let nbWords=0;
const paragraph=[
    "In today's interconnected world, typing has become a fundamental skill, essential for communication and productivity. From crafting professional emails to completing academic assignments, the ability to type quickly and accurately is invaluable. It is no longer a specialized skill reserved for typists or secretaries but a requirement for virtually every career. Furthermore, the rise of remote work has placed even greater emphasis on digital communication tools, where typing efficiency directly impacts workflow. By mastering typing, individuals not only save time but also reduce the mental strain associated with slow or error-prone input.",
    "Typing as a practice has undergone a remarkable transformation over the past century. In the early 20th century, the clacking of typewriter keys was synonymous with office work, requiring physical effort and precision. With the advent of computers, the keyboard became a universal input tool, revolutionizing how information was processed and shared. Today, touchscreens and voice-to-text technologies coexist with traditional keyboards, offering new ways to input data. However, despite these advancements, the keyboard remains irreplaceable in many scenarios, making typing proficiency as relevant as ever.",
    "Improving typing speed and accuracy requires a combination of practice, technique, and patience. Start by maintaining proper posture and hand placement on the keyboard. This minimizes strain and promotes efficiency. Using typing software or games designed to enhance muscle memory can make practice enjoyable and productive. Additionally, focus on minimizing errors rather than just typing faster—accuracy is often more beneficial than raw speed. Regular practice, combined with a focus on correcting common mistakes, can significantly enhance typing performance over time.",
    "Did you know that typing can positively affect mental health? The act of typing engages multiple cognitive processes, from motor skills to language comprehension. When done regularly, typing can improve focus and concentration, akin to meditative practices. For some, typing out thoughts or journaling digitally can serve as a therapeutic outlet, helping to organize emotions and reduce stress. Moreover, typing exercises designed to promote speed and accuracy can provide a sense of accomplishment, boosting confidence and motivation."
];

let paragraphSplited=0;
let lastRand=-1;
let timer=60;
const initialize=()=>{
    nb=0;
    mistakes=0;
    text.innerHTML="";
    timer=60;
    let rand= Math.floor(Math.random()*paragraph.length);
    while(rand==lastRand){
       rand= Math.floor(Math.random()*paragraph.length);
    }
    lastRand=rand;
    spaned(rand);
    paragraphSplited=paragraph[rand].split("");
    
}

function checkEnd(){
    if (timer<=0){
        timer=0;
        input.disabled=true;
    }
    
}

function spaned(rand){
    paragraph[rand].split("").forEach(span=>{
        let spanTag=`<span>${span}</span>`;
        text.innerHTML+=spanTag;
    })
    
}

input.addEventListener("input",()=>{
    const chars=text.querySelectorAll("span");
    let temp=input.value;
    input.value="";
    if(temp===paragraphSplited[nb]){
        chars[nb].classList.add("correct");
        correctAnswerElement.textContent= `CPM: ${++correctAnswer}`;
    }else{
        chars[nb].classList.add("false");
        mistakesElement.textContent=`Mistakes : ${++mistakes}`;
    }
    if(chars[nb].innerText==" "){
        WPM.textContent= `WPM: ${++nbWords}`;
    }
    nb++;
    
})

function setTimer(){
    timerElement.textContent="Time : "+timer--;
    checkEnd();
}

initialize();
setTimer();
setInterval("setTimer()",1000);


button.addEventListener("click",initialize);

document.getElementById("text").addEventListener("click",()=>{
    console.log("clicked")
    document.getElementById("input").focus();
})

