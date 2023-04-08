var output = document.getElementById('output')
var historic = ""

function commands(command) {
    output.innerHTML = ""
    switch(command) {
        case "valmnt avatar":
            outputCommand(command, `
                <img width=250 height=250 style="border-radius: 100%;" src="./assets/avatar.png" />
            `)
        break
        case "valmnt about":
            outputCommand(command, `
                Hello! Let me introduce myself. <br /><br />
                My name is Mont Valentin and I am a 23-year-old iOS developer currently pursuing a master's degree <br /> while working in an alternating internship at SFR in Grenoble. </br /><br />
                As an iOS developer, I have gained valuable experience in creating and maintaining mobile applications for Apple devices. <br /><br />
                My skills include proficiency in programming languages such as Swift, as well as knowledge of various iOS frameworks and technologies.
            `)
        break
        case "valmnt skills":
            outputCommand(command, `
                * Swift <br />
                * Git <br />
                * iOS CD/CD <br />
                * NoSQL <br />
                * SQL <br />
                * Linux <br />
            `)
        break
        case "valmnt degrees":
            outputCommand(command, `
                * Bachelor in software engineering (2021)
            `)
        break
        case "valmnt jobs":
            outputCommand(command, `
                * iOS developer at SFR (Altice France) in Grenoble, France (2020 - 2023) <br /><br />
                * Software developer at Danone in Saint-Just-Chaleyssin, France (june 2020 - sept. 2020)
            `)
        break
        case "valmnt contact":
            outputCommand(command, `
                * Linkedin: <a style="color: white;" href="https://www.linkedin.com/in/valentin-mont/">https://www.linkedin.com/in/valentin-mont/</a> <br />
                * Github: <a style="color: white;" href="https://github.com/valmnt">https://github.com/valmnt</a> <br />
                * Phone number: +33651845896 <br />
                * Mail: valentinmont8@gmail.com
            `)
        break
        case "clear":
            historic = ""
            break
        default: 
        outputCommand(command, `
            valmnt: '${command}' is not a valmnt command.
        `)
        break
    }
    output.innerHTML += historic
    initInput()
    window.scrollTo(0, document.body.scrollHeight)
}

function outputCommand(command, output) {
    historic += `
    <p style="color: #17F018; font-size: 130%; font-family:monospace;">
        [root@localhost ~]$ ${command}
    </p>
    <p style="color: white; font-size: 130%; font-family:monospace;">
        ${output}
    </p>
    `
}

function initInput() {
    output.innerHTML += `
    <p style="color: #17F018; font-size: 130%; font-family:monospace;">
        [root@localhost ~]$ <input id="input" style="background-color: transparent; outline: none; border: 0; color: #17F018; font-size: 100%; font-family:monospace" autofocus/>
    </p>
    `
    
    input.addEventListener("keypress", function(event) {
        if (event.key === "Enter") {
          event.preventDefault()
          commands(input.value)
        }
    })

    input.focus()
}

initInput()