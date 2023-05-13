        

        document.addEventListener("DOMContentLoaded", function() {
          const banners = [b1, b2, b3, b4, b5]; // Array of banner names
          const ban = document.getElementById("banner"); // The element where the banner will be displayed
          
          function pickRandomBanner() {
            const randomIndex = Math.floor(Math.random() * banners.length); // Generate a random index
            const randomBanner = banners[randomIndex]; // Get the banner at the random index
            ban.innerHTML = randomBanner; // Display the banner
          }
        
          pickRandomBanner(); // Call the function to display a random banner on page load
        });
        

        // Get the terminal elements
        const terminal = document.getElementById("terminal");
        const output = document.getElementById("command-output");
        const input = document.getElementById("command-input");

        // Add an event listener for the Enter key
        input.addEventListener("keyup", function(event) {
          if (event.key === "Enter") {
            // Get the command entered by the user
            const command = input.value.trim().toLowerCase().replace(/<[^>]*>?/gm, '');

            // Execute the command or display an error message
            // if (command === "hello") {
            //   output.innerHTML += "<div class='inp'><p class='name'>user@Void-04:~$ </p><p class='msg'>  " + command + "</p></div>";
            //   output.innerHTML += "<p class='outp-msg'>Hello, world!</p>";
            // } else if (command === "alert") {
            //   output.innerHTML += "<div class='inp'><p class='name'>user@Void-04:~$ </p><p class='msg'> " + command + "</p></div>";
            //   alert("This is an alert message!");}

            if (root == true) {
              nameusr = "root";
            }
            
            else if (root == false) {
              nameusr = "user";
            }

            if (command === "help") {
              
              output.innerHTML += "<div class='inp'><p class='name'>" + nameusr+ "@Void-04:~$ </p><p class='msg'>  " + command + "</p></div>";
              output.innerHTML += list;
            }
            
            else if (command === "clear" || command === "Clear") {
                output.innerHTML = "";
                // output.innerHTML += "<div class='inp'><p class='name'>user@Void-04:~$ </p><p class='msg'>  " + command + "</p></div>";
                // output.innerHTML += "<p class='outp-msg'>terminal cleared.</p>";
              }
              
              else if (command === "ls") {
                output.innerHTML += "<div class='inp'><p class='name'>" + nameusr+ "@Void-04:~$ </p><p class='msg'>  " + command + "</p></div>";
                output.innerHTML += lsdir;
              }
              
              else if (command === "") {
                output.innerHTML += "<div class='inp'><p class='name'>" + nameusr+ "@Void-04:~$ </p><p class='msg'>  " + command + "</p></div>";
              }
              
              else if (command === "./links") {
                output.innerHTML += "<div class='inp'><p class='name'>" + nameusr+ "@Void-04:~$ </p><p class='msg'>  " + command + "</p></div>";
                output.innerHTML += lnklist;
              }

              else if (command === "./games") {
                output.innerHTML = "";
                output.innerHTML += "<div class='inp'><p class='name'>" + nameusr+ "@Void-04:~$ </p><p class='msg'>  " + command + "</p></div>";
                output.innerHTML += gamebox;
              }

              else if (command === "jeff") {
                output.innerHTML += "<div class='inp'><p class='name'>" + nameusr+ "@Void-04:~$ </p><p class='msg'>  " + command + "</p></div>";
                output.innerHTML += "<p class='outp-msg'>Jeffery's Sister is</p> 😱";
              }

              else if (command === "edit") {
                output.innerHTML += "<div class='inp'><p class='name'>" + nameusr+ "@Void-04:~$ </p><p class='msg'>  " + command + "</p></div>";
                output.innerHTML += "edit: true";
                alert("Edit Commands:\n Ctrl+m: stop \n Tab+r: reset")
              }
              
              else if (command === "exit") {
                if (root == true) {
                  output.innerHTML += "<div class='inp'><p class='name'>root@Void-04:~$ </p><p class='msg'>  " + command + "</p></div>";
                  output.innerHTML += `<p class='err-msg'>Complete.</p>`;
                  document.getElementById("root").innerHTML = "user@Void-04:~$ ";
                  root = false;
                }else if (root == false) {
                  output.innerHTML += "<div class='inp'><p class='name'>user@Void-04:~$ </p><p class='msg'>  " + command + "</p></div>";
                  output.innerHTML += `<p class='err-msg'>Error: Must run as Root.</p>`;
                }
              }
              
              else if (command === "./void") {
                if (root == true) {
                  output.innerHTML += "<div class='inp'><p class='name'>root@Void-04:~$ </p><p class='msg'>  " + command + "</p></div>";
                  alert("comming soon!")
                }else if (root == false) {
                  output.innerHTML += "<div class='inp'><p class='name'>user@Void-04:~$ </p><p class='msg'>  " + command + "</p></div>";
                  output.innerHTML += `<p class='err-msg'>Error: Must run as Root.</p>`;
                }
              }
              
              else if (command === "sudo su" || command === "Sudo su" || command === "Sudo Su" || command === "sudo Su") {
                output.innerHTML = "";
                output.innerHTML += "<div class='inp'><p class='name'>" + nameusr+ "@Void-04:~$ </p><p class='msg'>  " + command + "</p></div>";
                output.innerHTML += "<p class='err-msg'>root Entered.</p>";
                root = true;
                document.getElementById("root").innerHTML = "root@Void-04:~$ ";
                
              }
              
              else {
                if (root == true) {
                  output.innerHTML += "<div class='inp'><p class='name'>root@Void-04:~$ </p><p class='msg'>  " + command + "</p></div>";
                  output.innerHTML += `<p class='err-msg'>Error: Command '${command}' not found.</p>`;
                } else {
                  output.innerHTML += "<div class='inp'><p class='name'>user@Void-04:~$ </p><p class='msg'>  " + command + "</p></div>";
                  output.innerHTML += `<p class='err-msg'>Error: Command '${command}' not found.</p>`;
                }
            }

            // Clear the input field
            input.value = "";

            // Scroll to the bottom of the output div
            terminal.scrollTop = terminal.scrollHeight;
          }
        });

        // Set focus on the input field
        input.focus();

        var root = false;
        var nameusr = "user"

        const list = `
        
        <div class="help-out">
<pre class="list-help out">
    Welcome to void-04, list of commands:
<span class="lins">
    ╔══════════════════════════════════╗
    ║ ./cheat - run cheats for games   ║
    ║══════════════════════════════════║
    ║ ./games - runs games to play     ║
    ║══════════════════════════════════║
    ║ ./links - fun links to visit     ║
    ║══════════════════════════════════║
    ║ ./theme - change banner theme    ║
    ║══════════════════════════════════║
    ║ scp - run user script            ║
    ║══════════════════════════════════║
    ║ clear - clear terminal           ║
    ║══════════════════════════════════║
    ║ edit - edit page                 ║
    ║══════════════════════════════════║
    ║ sudo su - Enter root             ║
    ╚══════════════════════════════════╝
</span>
</pre>
            </div>
        
        `

        const lsdir = `
        
        <div class="help-out">
<pre class="list-help outp-msg">
    cheats    games    links

    void
</pre>
            </div>
        
        `

        const lnklist = `
        
        <div class="help-out">
<pre class="list-help outp-msg">
    <a class="linka" target="_blank" href="https://poki.pl/">Poki-games</a>    <a class="linka" target="_blank" href="http://chatz.rf.gd/index.php">chat-room</a>    <a class="linka" target="_blank" href="https://unblocked-games.s3.amazonaws.com/masked-special-forces.html">msked-spl-frce</a>

    <a class="linka" target="_blank" href="https://minesraft2.github.io/Blooket-Cheats/#">blo0ket-cheat</a>     [More coming soon]
</pre>
            </div>
        
        `

//"<p class='outp-msg'>Available commands: hello, alert, help</p>"


const gamebox = `
        
<div class="help-out">
<pre class="list-help outp-msg">
   <button onclick="g6()" class="btn-game">msk-spc-f</button>    <button onclick="g5()" class="btn-game">smh-cart</button>    <button onclick="g4()" class="btn-game">sbway-surf</button>    <button onclick="g1()" class="btn-game">slope</button>

   <button onclick="g7()" class="btn-game">chess</button>     <button onclick="g3()" class="btn-game">fnaf</button>       <button onclick="g2()" class="btn-game">hppy-wl</button>       <button onclick="g8()" class="btn-game">tmpl-run</button>
</pre>
                 </div>

<div id="gm"></div>
`

const gm1 = `
        
          <iframe class="ifm" id="1" src="https://images-opensocial.googleusercontent.com/gadgets/ifr?url=https://cdn.jsdelivr.net/gh/fr6ks8ab/vi9syd1rm@84d73b06974a0734495c3c1f280653183b357524/ls49v2n/slope.xml" frameborder="0"></iframe>
          <br>
          <button onclick="goFullscreen('1'); return false" class="btn-game">>> Full Screen </button>
        
        `

const gm2 = `

          <iframe class="ifm" id="2" src="https://script.google.com/macros/s/AKfycbwdecqSCXR_X1sdwarB-gGtPwwemdOBzrnq8CPZ-obreDlmAarpJtHNjhx1WqAFYQEp/exec" frameborder="0"></iframe>
          <br>
          <button onclick="goFullscreen('2'); return false" class="btn-game">>> Full Screen </button>

`

const gm3 = `

          <iframe class="ifm" id="3" src="https://dorukyum.github.io/FNAF-Web/" frameborder="0"></iframe>
          <br>
          <button onclick="goFullscreen('3'); return false" class="btn-game">>> Full Screen </button>

`

const gm4 = `

<iframe class="ifm" id="4" src="https://dddavit.github.io/subway/" frameborder="0"></iframe>
                        <br>
                        <button onclick="goFullscreen('4'); return false" class="btn-game">>> Full Screen </button>

`

const gm5 = `

<iframe class="ifm" id="5" src="https://webglmath.github.io/smash-karts/" frameborder="0"></iframe>
                        <br>
                        <button onclick="goFullscreen('5'); return false" class="btn-game">>> Full Screen </button>

`

const gm6 = `

<iframe class="ifm" id="6" src="https://unblocked-games.s3.amazonaws.com/games/2022/unity2/masked-special-forces/index.html" frameborder="0"></iframe>
                        <br>
                        <button onclick="goFullscreen('6'); return false" class="btn-game">>> Full Screen </button>

`

const gm7 = `

<iframe class="ifm" id="7" src="https://mhonert.github.io/chess/" frameborder="0"></iframe>
                        <br>
                        <button onclick="goFullscreen('7'); return false" class="btn-game">>> Full Screen </button>

`

const gm8 = `

<iframe class="ifm" id="8" src="https://ubg365.github.io/temple-run-2/" frameborder="0"></iframe>
                        <br>
                        <button onclick="goFullscreen('8'); return false" class="btn-game">>> Full Screen </button>

`
//page setting

document.addEventListener("visibilitychange", () => {
  if (document.hidden) {
    document.title = "wya?";
  } else {
    document.title = "Void.X";
  }
});
