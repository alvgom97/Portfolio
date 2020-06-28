const persistTheme = (theme) => {

    localStorage.setItem("theme", theme);
};

const loadTheme = () => {

    if(localStorage.getItem("theme")){

        if(localStorage.getItem("theme") === "light"){
            setLightTheme();
        } else {
            setDarkTheme();
        }
    } else {
        localStorage.setItem("theme", "dark");
        setDarkTheme();
    }
};

const setDarkTheme = () => {
    document.documentElement.style.setProperty('--background', '#202020');
    document.documentElement.style.setProperty('--color', '#B8ACD1');
    document.querySelector("main").style.backgroundColor = "rgba(32, 32, 32, 0.6)";
    document.querySelector("aside").style.backgroundColor = "rgba(32, 32, 32, 0.6)";
    document.querySelector("#dark svg").style.opacity = "1";
    document.querySelector("#light svg").style.opacity = "0.5";
}

const setLightTheme = () => {
    document.documentElement.style.setProperty('--background', '#B8ACD1');
    document.documentElement.style.setProperty('--color', '#202020');
    document.querySelector("main").style.backgroundColor = "rgba(184, 172, 209, 0.6)";
    document.querySelector("aside").style.backgroundColor = "rgba(184, 172, 209, 0.6)";
    document.querySelector("#dark svg").style.opacity = "0.5";
    document.querySelector("#light svg").style.opacity = "1";
}

document.getElementById("burger").addEventListener("click", function(){
    
    let buttons = document.querySelectorAll("header > button");

    for (const b of buttons) {

        if(b.style.display == "inline"){
            b.style.display = "none";
            document.getElementById("burger").style.display = 'inline';
        } else {
            b.style.display = "inline";
        }
    }
    
});

document.getElementById("light").addEventListener("click", function() {
    
    setLightTheme();
    persistTheme("light");
});

document.getElementById("dark").addEventListener("click", function() {
    
    setDarkTheme();
    persistTheme("dark");
});

const capitalize = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

if(document.title === "Home"){

    document.getElementById("sendForm").addEventListener("click", function(){

        const inputs = document.querySelectorAll("main ul input");
        const textarea = document.querySelector("main ul textarea");
    
        let filled = true;
    
        let message = "Please, fill the following fields:  \n";
    
        for (const i of inputs) {
            
            if(i.value.length === 0){
                filled = false;
                message += "- " + capitalize(i.name) + " \n";
            }
        }
    
        if(textarea.value.length === 0){
    
            message += "- " + capitalize(textarea.name);
        }
    
        if(message.length > 37){
            alert(message);
        } else {
            alert("Thank you for your message! \nYou will receive an answer as soon as possible.");
            for (const i of inputs) {
            
                i.value = ""; 
            }
    
            textarea.value = "";
        }
    });
}



loadTheme();