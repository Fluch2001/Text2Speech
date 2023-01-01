const text = document.getElementById("text"),
      voiceSelectBox = document.getElementById("voice"),
      volume = document.getElementById("volume"),
      rate = document.getElementById("rate"),
      pitch = document.getElementById("pitch"),
      playBtn = document.getElementById("play"),
      pauseBtn = document.getElementById("pause"),
      resumeBtn = document.getElementById("resume"),
      resetBtn = document.getElementById("reset"),
      volume_amount = document.getElementById("volume_amount"),
      rate_amount = document.getElementById("rate_amount"),
      pitch_amount = document.getElementById("pitch_amount")

      let speech = new SpeechSynthesisUtterance(text.value)
      speech.lang='en'

    let voicesOptions = []
      window.speechSynthesis.onvoiceschanged = function(){
        voicesOptions = window.speechSynthesis.getVoices()
        speech.voice = voicesOptions[0]  //setting default voice
        voicesOptions.forEach(function(systemVoice,index){
            voiceSelectBox.options[index] = new Option(systemVoice.name,index)// setting options in select box
        })
      }


      voiceSelectBox.addEventListener("change",function(){
        speech.voice = voicesOptions[voiceSelectBox.value]
      })


    //  event listeners

      volume.addEventListener("input",function(){
        speech.volume = volume.value;
        volume_amount.innerText = volume.value
      })

      rate.addEventListener("input",function(){
        speech.rate = rate.value;
        rate_amount.innerText = rate.value
      })

      pitch.addEventListener("input",function(){
        speech.pitch = pitch.value;
        pitch_amount.innerText = pitch.value
      })


      playBtn.addEventListener("click",function(){
        speech.text = text.value
        window.speechSynthesis.speak(speech)
      })

      pauseBtn.addEventListener("click",()=>window.speechSynthesis.pause())
      resumeBtn.addEventListener("click",()=>window.speechSynthesis.resume())
      resetBtn.addEventListener("click",()=>window.speechSynthesis.cancel())

      


        // Navbar navigate 
        
        function scrollToTop(){
          window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
        };

        window.onscroll = function() {
          scrollFunction()
      };
  
      function scrollFunction() {
          if (document.body.scrollTop > 0 || document.documentElement.scrollTop > 0) {
              document.getElementById("about").style.display = "block";
          } else {
              document.getElementById("about").style.display = "none";
          }
      }

  
      // When the user clicks on the button, scroll to the top of the document
      function topFunction() {
          document.body.scrollTop = 0; // For Safari
          document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
      }


      // Dark & light theme toggle

      const buttonAdd = document.querySelector('.add');


const buttonToggle = document.querySelector('.toggle');
buttonToggle.addEventListener('click', toggleClass);

function removeClass(){
  const element = document.querySelector('body');
  element.classList.remove('body');
}

function toggleClass(){
  const element = document.querySelector('body');
  element.classList.toggle('new-class');
}


// Change between "Dark & Light theme"

function toggleTheme() {
  var x = document.getElementById("darkToggle");
  if (x.innerHTML === "CHANGE TO LIGHT THEME") {
    x.innerHTML = "CHANGE TO DARK THEME";
  } else {
    x.innerHTML = "CHANGE TO LIGHT THEME";
  }
}