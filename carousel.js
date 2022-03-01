        let leftArrow = document.querySelector(".arrow-left")
        let rightArrow = document.querySelector(".arrow-right")
        let btn = document.querySelectorAll(".btn")
        let btnArray = Array.from(document.querySelectorAll(".btn"))
        let slides = document.querySelectorAll(".silde")
        let slideArray = Array.from(document.querySelectorAll(".silde"))
        let counter = 1

        function right() {
            //rest style while click on right
            slides.forEach((slid) => {
                btn.forEach((btnn) => {
                    btnn.removeAttribute("id")
                    slid.removeAttribute("id")
                })
            })
            // for rest counter 
            if (counter == slides.length) {
                counter = 0;
            }
            // set style and increase counter
            slides[counter].setAttribute("id", "active")
            btn[counter].setAttribute("id", "activeBtn")
            counter++
            console.log(slides.length );
        }

        function left() {
            //rest style while click on right
            slides.forEach((slid) => {
                btn.forEach((btnn) => {
                    btnn.removeAttribute("id")
                    slid.removeAttribute("id")
                })
            })
            // for rest counter 
            if (counter > slides.length) {
                counter = 1;
            }
             // set style and decrease counter
            slides[slides.length - counter].setAttribute("id", "active")
            btn[btn.length - counter].setAttribute("id", "activeBtn")
            counter++
        }

        function buttonAction() {
            //For rest button style
            btnArray.forEach((btn2) => {
                btn2.addEventListener("click", () => {
                    btnArray.forEach((btn3) => {
                        btn3.removeAttribute("id", "activeBtn")
                        console.log(btn3);
                    })
                })
            })
            // For Link slides with Buttons
            slideArray.forEach((slid) => {
                btnArray.forEach((btnn) => {
                    btnn.addEventListener("click", () => {
                        slid.removeAttribute("id", "active")
                        if (slideArray.indexOf(slid) == btnArray.indexOf(btnn)) {
                            slid.setAttribute("id", "active")
                            btnn.setAttribute("id", "activeBtn")
                        }
                    })
                })
            })
        }
        buttonAction()
