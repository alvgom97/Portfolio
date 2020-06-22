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
    
    document.documentElement.style.setProperty('--background', '#B8ACD1');
    document.documentElement.style.setProperty('--color', '#202020');
    document.querySelector("main").style.backgroundColor = "rgba(184, 172, 209, 0.6)";
});

document.getElementById("dark").addEventListener("click", function() {
    
    document.documentElement.style.setProperty('--background', '#202020');
    document.documentElement.style.setProperty('--color', '#B8ACD1');
    document.querySelector("main").style.backgroundColor = "rgba(32, 32, 32, 0.6)";
});