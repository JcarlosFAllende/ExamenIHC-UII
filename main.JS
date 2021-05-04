const searchForm = document.querySelector("#microfono");

const searchFormInput = searchForm.querySelector("input"); // <=> document.querySelector("#search-form input");
const info = document.querySelector(".info");


function demo(){
    var archivo = document.getElementById("file").files[0];
    var reader = new FileReader();
    if (file) {
      reader.readAsDataURL(archivo);
      reader.onloadend = function () {
          document.getElementById("img").src = reader.result;
          const imagen=document.getElementById("img"); }}}
          
         
          $("#url").change(function(){
            var url = $(this).val();    
            document.getElementById("img").src = url;
            $("#img").html('<img src="'+ url +'" alt="imagen">')
  
         })


const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

if(SpeechRecognition){
    console.log("Your Browwser supports speech Recognition");

    searchForm.insertAdjacentHTML("beforeend", '<center><button type="button"><i class="fas fa-microphone"></i></button></center>');
    const micBtn = searchForm.querySelector("button");
    const micIcon = micBtn.querySelector("i");

    const recognition = new SpeechRecognition();
    recognition.continuous = true;
    recognition.lang = "es-MX";
    recognition.start(); 
    micBtn.addEventListener("click", micBtnClick);
    function micBtnClick(){
        
        //Aquí inicia el reconocimiento de voz.
        if(micIcon.classList.contains("fa-microphone")) {
            recognition.start();
        }
        else{
            recognition.stop();
        }
    }
    //Fin del reconocimiento.
    
    recognition.addEventListener("start", startSpeechRecognition); 
    function startSpeechRecognition() {
        micIcon.classList.remove("fa-microphone");
        micIcon.classList.add("fa-microphone-slash");
        console.log("Speech Recognition Active");
    }

    recognition.addEventListener("end", endSpeechRecognition);
    function endSpeechRecognition() {
        micIcon.classList.remove("fa-microphone-slash");
        micIcon.classList.add("fa-microphone");
        
        console.log("Speech Recognition Disconnected");
    }

    recognition.addEventListener("result", resultOfSpeechRecognition);
    function resultOfSpeechRecognition() {
        const currentResultIndex = event.resultIndex;
        const transcript = event.results[currentResultIndex][0].transcript;
        
        if(transcript.toLowerCase().trim()==="ayuda del sitio") {
            window.open('inicio.html', '__blank');
          }

          else if (transcript.toLowerCase().trim()==="salir del sitio"){
       
            var mensaje;
             var opcion = confirm("¿Seguro que quieres salir?");
            
             if (opcion == true) { 
                window.close();     
           } else {
               mensaje = "No";
           }
             }
        if (transcript.toLowerCase().trim() === "explota") {
            var t1 = just.animate({
                targets: "#img",
                duration: 1200,
                web: {
                   
                    transform: [
                        { offset: 0, value: "scale(1, 1)" },
          { offset: 0.3, value: "scale(1.25, .75)" },
          { offset: 0.4, value: "scale(.75, 1.25)" },
          { offset: 0.5, value: "scale(1.15, .85)" },
          { offset: 0.65, value: "scale(.80, 1.05)" },
          { offset: 0.75, value: "scale(1.05, .95)" },
          { offset: 1, value: "scale(2, 2)" }
                        
                    ]
                }
            });
            t1.play();
        }
        if (transcript.toLowerCase().trim() === "aleatorio") {
            var t1 = just.animate({
                targets: "#img",
                duration: 1200,
                web: {
                    transform: ['translateY(300px)',
                    'translateX(300px)', 
                    'translateX(400px)',
                    'translateY(400px)',
                    'translateX(100px)',
                    'translateY(100px)',
                    'translateY(-100px)',
                    'translateY(-200px)',
                    'translateY(-400px)',
                    'translateX(200px)', 
                    'translatey(200px)',
                    'translateX(-200px)',
                    'translateX(1px)',
                    'translateX(0px)',
                    'translateY(2px)'],
                    opacity: [0,1,0,1,0,1]
                 }
            });
            t1.play();
        }
        else if (transcript.toLowerCase().trim() === "gira") {
            const v = document.querySelector("#img").animate(
                [
                  {transform: "rotate(0)"},
                  {transform: "rotate(360deg)"},
                  
                ],
                {
                  duration: 1000, fill: "forwards"
                }
              );
            t1.play();
        }
        else if (transcript.toLowerCase().trim() === "retrae") {
            var t1 = just.animate({
                targets: "#img",
                duration: 1800,
                web: {
                    opacity: [.25, .75],
                    transform: [
                        { offset: 0.3, value: "scale(.475, .475)" },
                        { offset: 0.4, value: "scale(.55, .55)" },
                        { offset: 0.5, value: "scale(.19, .675)" },
                        { offset: 0.3, value: "scale(.475, .475)" },
                        { offset: 0.6, value: "scale(.80, .85)" },
                        { offset: 0.6, value: "scale(.80, .85)" },
                        { offset: 0.5, value: "scale(.129, .775)" },
                        { offset: 1, value: "scale(0, 0)" }
                        
                        
                     ]   
                }
            });
            t1.play();
        }
        else if (transcript.toLowerCase().trim() === "temblar") {
            const v = document.querySelector("#img").animate(
                [
                  {transform: "rotate(5deg)"},
                  {transform: "rotate(5deg)"},
                  {transform: "rotate(2deg)"},
                  {transform: "rotate(0deg)"},
                  {transform: "rotate(7deg)"},
                  {transform: "rotate(8deg)"},
                  {transform: "rotate(4deg)"},
                  {transform: "rotate(0deg)"},
                  {transform: "rotate(-15deg)"},
                  {transform: "rotate(-10deg)"},
                  {transform: "rotate(-5deg)"},
                  {transform: "rotate(-2deg)"},
                  {transform: "rotate(-15deg)"},
                  {transform: "rotate(-10deg)"},
                  {transform: "rotate(-5deg)"},
                  {transform: "rotate(-2deg)"},
                  {transform: "rotate(0)"}
                ],
                {
                  duration: 1000, fill: "forwards"
                }
              );
            t1.play();
        }
        if(transcript.toLowerCase().trim()==="estira"){
            var t1 = just.animate({
              targets: "#img",
              duration: 1200,
              web: {
                    transform: [
                        { offset: 0.90, value: "scale(4, 1.25)" },
                        { offset: 1, value: "scale(1.25, 4)" },
                        { offset: 1.3, value: "scale(4, 1.25)" },
                        { offset: 1.4, value: "scale(1.25, 4)"},
                        { offset: 1.5, value: "scale(4, 1.25)" },
                        { offset: 1.65, value: "scale(1.25, 4)" },
                        { offset: 1.75, value: "scale(4, 1.25)" },
                        { offset: 2, value: "scale(1, 1)" }
                  ]
              }
            });
            t1.play();
        }
        
        else if (transcript.toLowerCase().trim() === "borroso") {
            const v = document.querySelector("#img").animate(
                [
                  {transform: "translate(0)"},
                  {transform: "translate(100)"},
                  {transform: "skewX(-30deg)"},
                  {transform: "translate(10)"},
                  {transform: "translate(200)"},
                  {transform: "skewX(-60deg)"},
                  {transform: "translate(100)"},
                  {transform: "skewX(20deg)"},
                  {transform: "translate(100)"},
                  {transform: "translate(200)"},
                  {transform: "skewX(40deg)"},
                  {transform: "translate(200)"},
                  {transform: "skewX(-5deg)"},
                  {transform: "skewX(-10deg)"},
                  {transform: "skewX(-15deg)"},
                  {transform: "translate(0)"},
                  {transform: "translate(100)"},
                  {transform: "skewX(-30deg)"},
                  {transform: "translate(10)"},
                  {transform: "translate(200)"},
                  {transform: "skewX(-60deg)"},
                  {transform: "translate(100)"},
                  {transform: "skewX(20deg)"},
                  {transform: "translate(100)"},
                  {transform: "translate(200)"},
                  {transform: "skewX(40deg)"},
                  {transform: "translate(200)"},
                  {transform: "skewX(-5deg)"},
                  {transform: "skewX(-10deg)"},
                  {transform: "skewX(-15deg)"},
                  {transform: "translate(0)"}
                  
                ],
                {
                  duration: 1500, fill: "forwards"
                }
              );
            t1.play();
        }
        if(transcript.toLowerCase().trim()==="sacudir"){
            var t1 = just.animate({
              targets: "#img",
              duration: 1200,
              web: {
                  transform: [
                    { offset: 0, value: "scale(1, 1)" },
                    { offset: 0.3, value: "scale(1.25, .75)" },
                    { offset: 0.4, value: "scale(.75, 1.25)" },
                    { offset: 0.5, value: "scale(1.15, .85)" },
                    { offset: 0.65, value: "scale(.95, 1.05)" },
                    { offset: 0.75, value: "scale(1.05, .95)" },
                    { offset: 1, value: "scale(1, 1)" },
                    { offset: 0, value: "scale(1, 1)" }
                  ]
              }
            });
            t1.play();
        }
        if(transcript.toLowerCase().trim()==="elevador"){
            const v = document.querySelector("#img").animate(
                [
                {transform: "translateY(0)"},
                {transform: "translateY(-200px)"},
                    {transform: "translateX(0)"},
                {transform: "translateY(200px)"},
                {transform: "translateY(0)"},
                {transform: "translateY(-50px)"},
                {transform: "translateY(70px)"}
                ],
                {
                    duration: 1800, fill: "forwards"
                }
                
            );
             t1.play();
            }
            if(transcript.toLowerCase().trim()==="sube"){
                const v = document.querySelector("#img").animate(
                  
                    [
                         {transform: "translateY(200px)"},
                    {transform: "translateY(0)"},
                    {transform: "translateY(-50px)"},
                    {transform: "translateY(0)"},
                    {transform: "translateY(-200px)"},
                    {transform: "translateY(-300px)"},
                    {transform: "translateY(-400px)"},
                  
                    {transform: "translateY(-500px)"},
                        {transform: "translateX(40)"},
                    ],
                    {
                        duration: 1800, fill: "forwards"
                    }
                    
                );
                 t1.play();
                }
            
             if (transcript.toLowerCase().trim() === "flash") {
                var t1 = just.animate({
                      targets: "#img",
                      duration: 3000,
                      web: {
                         opacity: [0, 1],
                      }
                   });
                   t1.play();
            
                  }
                  
                  
                  console.log(event);
          
              }
          }
          else {
              console.log("Your Browser does not support speech Recognition");
          }