// Get DOM elements

const gameContainer = document.querySelector(".container"),
    userChoice = document.querySelector(".user-choice"),
    computerChoice = document.querySelector(".computer-choice"),
    subtitle = document.querySelector(".subtitle"),
    options = document.querySelectorAll(".option");


// Loop through each element in image
options.forEach((image, index) => {
    image.addEventListener("click", (event) => {
        // Deactivate all options
        options.forEach((option) => {
            option.classList.remove("active");
        });

        // Activate the clicked option
        image.classList.add("active");

        // Get image source
        let imageSrc = event.target.src;

        // Set user image to selected image
        userChoice.src = imageSrc

        // Generate random number from 0 - 2
        let random = Math.floor(Math.random() * 3);
        let imageArr = [
            "images/rock.png",
            "images/paper.png",
            "images/scissors.png"
        ]
        computerChoice.src = imageArr[random]

        // Game logic
        // Assign letter to user and computer choice
        let userValue = ["R", "P", "S"][index];
        let computerValue = ["R", "P", "S"][random];
       
        let outcomes = {
            RR : "Draw",
            RP : "Computer",
            RS : "You",
            PP : "Draw",
            PR : "You",
            PS : "Computer",
            SS : "Draw",
            SP : "You",
            SR : "Computer",
        }

        let resultValue = outcomes[userValue+computerValue];
        subtitle.textContent = userValue === computerValue ? "Draw" : `${resultValue} Won!!`
        
    });
});