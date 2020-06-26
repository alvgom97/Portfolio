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

loadTheme();