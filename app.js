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
    "Did you know that typing can positively affect mental health? The act of typing engages multiple cognitive processes, from motor skills to language comprehension. When done regularly, typing can improve focus and concentration, akin to meditative practices. For some, typing out thoughts or journaling digitally can serve as a therapeutic outlet, helping to organize emotions and reduce stress. Moreover, typing exercises designed to promote speed and accuracy can provide a sense of accomplishment, boosting confidence and motivation.",
    "Nature is a source of endless wonder and inspiration. From the towering peaks of snow-capped mountains to the gentle rustle of leaves in a forest, every aspect of the natural world offers a moment of tranquility. Watching a sunrise, with its radiant hues of orange and pink, reminds us of the beauty that exists all around us. Similarly, the rhythmic crashing of waves on a sandy shore has a calming effect on the mind. Exploring nature not only rejuvenates the body but also nourishes the soul, connecting us to something greater than ourselves.",
    "Exercise is a cornerstone of a healthy lifestyle. Regular physical activity strengthens the heart, improves lung capacity, and boosts overall well-being. Whether it’s a brisk morning walk, a high-intensity workout at the gym, or a calming yoga session, exercise helps to reduce stress and improve mental clarity. Studies show that even 30 minutes of activity a day can lead to significant health benefits. Remember, staying active is not just about looking good—it’s about feeling good and maintaining long-term health.",
    "Technology has transformed the way we live, work, and communicate. In the past century, we’ve moved from rotary phones to smartphones, from bulky desktop computers to sleek laptops. The internet has made the world a smaller place, connecting people across continents in seconds. Innovations like artificial intelligence and virtual reality are pushing the boundaries of what’s possible. While technology brings many conveniences, it also poses challenges, such as ensuring data privacy and managing screen time effectively.",
    "Cooking is more than just preparing food; it is an art form and an act of love. From carefully measuring ingredients to experimenting with spices, cooking allows us to express creativity while nourishing the body. Trying new recipes can be an exciting adventure, especially when incorporating flavors from different cultures. The smell of freshly baked bread or the sizzle of vegetables in a pan can evoke feelings of comfort and happiness. Sharing a home-cooked meal with loved ones creates lasting memories and strengthens bonds.",
    "Traveling opens the door to new experiences and broadens our perspectives. Visiting unfamiliar places allows us to immerse ourselves in different cultures, taste exotic cuisines, and meet people with unique stories. Whether exploring bustling city streets, hiking through rugged mountains, or relaxing on pristine beaches, travel brings a sense of adventure. It teaches us to embrace the unknown and adapt to new situations, leaving us with cherished memories and a deeper appreciation for the world.",
    "Reading is a gateway to knowledge and imagination. A good book can transport you to far-off lands, introduce you to unforgettable characters, and spark creativity. Fiction lets us explore lives different from our own, while non-fiction teaches us about history, science, and the world around us. In an age of constant digital distractions, taking the time to read a book can be a peaceful escape, allowing the mind to wander and grow.",
    "Music is a universal language that transcends boundaries and brings people together. It has the power to evoke emotions, from joy and excitement to nostalgia and reflection. Different genres of music suit different moods—rock for energy, classical for focus, and jazz for relaxation. Playing an instrument or singing can be deeply fulfilling, while simply listening to a favorite song can lift spirits instantly. Music reminds us of the shared human experience and connects us in meaningful ways.",
    "Space exploration represents humanity’s quest to understand the universe. From landing on the moon to sending probes to distant planets, each mission expands our knowledge of what lies beyond Earth. However, exploring space comes with significant challenges. The vast distances require advanced propulsion technologies, and the harsh conditions demand innovative solutions for survival. Despite these difficulties, the pursuit of space exploration inspires innovation and reminds us of the limitless potential of human curiosity.",
    "Mindfulness is the practice of being present in the moment without judgment. In today’s fast-paced world, it can help reduce stress, improve focus, and enhance overall well-being. Simple mindfulness exercises, such as focusing on your breath or observing your surroundings, can bring clarity and calm. Practicing mindfulness regularly can improve emotional regulation and increase feelings of gratitude, making it a powerful tool for a balanced life.",
    "Climate change is one of the most pressing issues of our time. Rising temperatures, melting ice caps, and more frequent extreme weather events are clear signs of a changing planet. Human activities, such as burning fossil fuels and deforestation, have significantly contributed to this crisis. Taking action to reduce carbon emissions and promote sustainable practices is essential to preserving the Earth for future generations. Every small effort, from using renewable energy to reducing waste, makes a difference."
]

let paragraphSplited=0;
let lastRand=-1;
let timer=60;
const initialize=()=>{
    nb=0;

    mistakes=0;
    mistakesElement.textContent="Mistakes: "+0;
    correctAnswer=0;
    correctAnswerElement.textContent="CPM: "+0;
    nbWords=0;
    WPM.textContent="WPM: "+0;


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
    document.getElementById("input").focus();
})

