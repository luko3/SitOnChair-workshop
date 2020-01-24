document.addEventListener("DOMContentLoaded", function() {

    // OBSŁUGA MENU

    var menuOpener = document.querySelector(".menu-opener");
    var secondMenu = document.querySelector(".second-menu");
    menuOpener.addEventListener("mouseover", function() {
        secondMenu.style.display = 'flex';
    });
    secondMenu.addEventListener("mouseout", function() {
        secondMenu.style.display = 'none';
    });

    // OBSŁUGA SLIDERA

    var prevElement = document.querySelector(".left-slider-btn");
    var nextElement = document.querySelector(".right-slider-btn");
    var sliderContainers = document.querySelectorAll(".slider-container");
    i = 0;
    nextElement.addEventListener("click", function() {
        if (i < sliderContainers.length-1) {
            sliderContainers[i].classList.remove("visible");
            sliderContainers[i+1].classList.add("visible");
            i++;
            prevElement = document.querySelector(".left-slider-btn");
            nextElement = document.querySelector(".right-slider-btn");
            sliderContainers = document.querySelectorAll(".slider-container");
        } else {
            sliderContainers[i].classList.remove("visible");
            sliderContainers[0].classList.add("visible");
            i = 0;
            prevElement = document.querySelector(".left-slider-btn");
            nextElement = document.querySelector(".right-slider-btn");
            sliderContainers = document.querySelectorAll(".slider-container");
        }
    });
    prevElement.addEventListener("click", function () {
        if (i == 0) {
            sliderContainers[i].classList.remove("visible");
            sliderContainers[2].classList.add("visible");
            i = sliderContainers.length-1;
            prevElement = document.querySelector(".left-slider-btn");
            nextElement = document.querySelector(".right-slider-btn");
        } else {
            sliderContainers[i].classList.remove("visible");
            sliderContainers[i-1].classList.add("visible");
            i--;
            prevElement = document.querySelector(".left-slider-btn");
            nextElement = document.querySelector(".right-slider-btn");
        }
    });

    // UKRYWANIE BLOKU Z NAZWĄ PRODUKTU

    var productBoxes = document.querySelectorAll(".product");

    for (let i=0; i<productBoxes.length; i++) {
        productBoxes[i].addEventListener("mouseover", function () {
            this.firstElementChild.style.display = "none";
        });
    };
    for (let i = 0; i < productBoxes.length; i++) {
        productBoxes[i].addEventListener("mouseout", function () {
            this.firstElementChild.style.display = "block";
        });
    };

    // OBSŁUGA KALKULATORA

    var listArrows = document.querySelectorAll(".list_arrow");
    var summaryPanel = document.querySelector(".summary_panel");
    var panelRight = document.querySelector(".panel_right");
    var chairPrice = document.getElementsByClassName("title value");
    var colorPrice = document.getElementsByClassName("color value");
    var patternPrice = document.getElementsByClassName("pattern value");
    var transportPrice = document.getElementsByClassName("transport value");
    var sum = document.querySelector(".sum").firstElementChild;
    var checkBox = document.getElementById("transport");

    for (let i=0; i < listArrows.length; i++) {
        listArrows[i].addEventListener("click", function() {
            var listPanels = this.parentElement.querySelector(".list_panel");
            if (listPanels.style.display == "block") {
                listPanels.style.display = "none";
            } else {
                listPanels.style.display = "block";
            }
        });
        var listOptions = listArrows[i].parentElement.querySelectorAll("li");
        for (let j=0; j < listOptions.length; j++) {
            listOptions[j].addEventListener("click", function() {
                this.parentElement.parentElement.firstElementChild.innerHTML = this.innerHTML;
                this.parentElement.style.display = "none";
                if (this.parentElement.dataset.number == 1) {
                    summaryPanel.firstElementChild.firstElementChild.innerHTML = this.innerHTML;
                    panelRight.firstElementChild.innerHTML = this.dataset.price;

                } else if (this.parentElement.dataset.number == 2) {
                    summaryPanel.firstElementChild.children[1].innerHTML = this.innerHTML;
                    panelRight.children[1].innerHTML = this.dataset.price;
                } else {
                    summaryPanel.firstElementChild.children[2].innerHTML = this.innerHTML;
                    panelRight.children[2].innerHTML = this.dataset.price;
                }
            });
        };
    };
    panelRight.addEventListener("DOMSubtreeModified", function() {
        var chairPriceVal = parseInt(chairPrice[0].innerHTML) || 0;
        var colorPriceVal = parseInt(colorPrice[0].innerHTML) || 0;
        var patternPriceVal = parseInt(patternPrice[0].innerHTML) || 0;
        var transportPriceVal = parseInt(transportPrice[0].innerHTML) || 0;
        sum.innerHTML = chairPriceVal + patternPriceVal + colorPriceVal + transportPriceVal;
    });
    checkBox.addEventListener("change", function() {
        if (this.checked) {
            panelRight.lastElementChild.innerHTML = 80;
            summaryPanel.firstElementChild.lastElementChild.innerHTML = "Transport";
        } else {
            panelRight.lastElementChild.innerHTML = "";
            summaryPanel.firstElementChild.lastElementChild.innerHTML = "";
        }
    });
});