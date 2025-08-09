const button = document.getElementById("paniBtn");
const message = document.getElementById("message");

const paniMessages = [
  "⚠️ Error 404: PANI not found.",
  "💡 Your request is being ignored.",
  "🕑 Please wait... forever.",
  
];

const paniSounds = [
  "https://www.myinstants.com/media/sounds/windows-error.mp3",
  
  
];

button.addEventListener("click", () => {
  const action = Math.floor(Math.random() * 5);

  switch (action) {
    case 0: 
      document.body.classList.add("shake");
      setTimeout(() => document.body.classList.remove("shake"), 500);
       message.style.fontSize = "3rem";
      message.style.color = "red";
      message.textContent = paniMessages[Math.floor(Math.random() * paniMessages.length)];
      break;

    case 1: 
      const sound = new Audio(paniSounds[Math.floor(Math.random() * paniSounds.length)]);
      sound.play();
       message.style.fontSize = "3rem";
      message.style.color = "red";
      message.textContent = "🔊";
      break;

    case 2: 
    
      let time = Math.floor(Math.random() * 10) + 5;
      message.textContent = `⏳ Countdown: ${time}`;
       message.style.fontSize = "3rem";
          message.style.color = "red";
      const interval = setInterval(() => {
        if (Math.random() > 0.7) {
          message.textContent = "❌ Timer stuck....";
          let audio = new Audio(URL("https://www.myinstants.com/en/instant/ki-kore-56705/?utm_source=copy&utm_medium=share"));
    audio.play();

          clearInterval(interval);
        } 
      }, 1000);
      break;

    case 3: 
      const uselessSites = [
         "https://longdogechallenge.com/",
        "/public/spiral.html",
        "/public/kashtam.html",
        "/public/snake.html",       
        "/public/qrcode.html",
        
      ];
      message.style.fontSize = "3rem";
      message.style.color = "red";
      message.textContent = "🔀 Redirecting you to something useless...";
      setTimeout(() => {
        window.location.href = uselessSites[Math.floor(Math.random() * uselessSites.length)];
      }, 2000);
      break;

    
     case 4: 
      const uselessSites2 = [
        "/public/nothing.html", 
        "/public/success.html",
        "/public/trytotouch.html",
        
      ];
      message.style.fontSize = "3rem";
      message.style.color = "red";
      message.textContent = "🔀 Redirecting you to something useless...";
      setTimeout(() => {
        window.location.href = uselessSites2[Math.floor(Math.random() * uselessSites2.length)];
      }, 2000);
      break;

     case 5: 
      const uselessSites3 = [
        "/public/nothing.html", 
       
        
      ];
      message.style.fontSize = "3rem";
      message.style.color = "red";
      message.textContent = "🔀 Redirecting you to something useless...";
      setTimeout(() => {
        window.location.href = uselessSites3[Math.floor(Math.random() * uselessSites3.length)];
      }, 2000);
      break;



  }
});
