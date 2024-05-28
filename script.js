const answerContainer = document.querySelector("#answer-container");

const inputContainer = document.querySelector(".input");

const buttonValue = document.querySelectorAll(".num").innerHTML;

document.addEventListener("click", function(e) {
   if(e.target.classList.contains("btn")) {
    e.target.classList.add("pressed");
    setTimeout(() => {
        e.target.classList.remove("pressed");
    }, 100);
   } 
});

document.addEventListener("click", function(f) {
    if(f.target.classList.contains("num")) {
        inputContainer.value += f.target.innerHTML;
    } 
    
    else if(f.target.classList.contains("clear")) {
        inputContainer.value = '';
    } 
    
    else if(f.target.classList.contains("plus")) {
        inputContainer.value += f.target.innerHTML;
    } 
    
    else if(f.target.classList.contains("multiply")) {
        inputContainer.value += f.target.innerHTML;
    } 
    
    else if(f.target.classList.contains("divide")) {
        inputContainer.value += f.target.innerHTML;
    } 
    
    else if(f.target.classList.contains("modulo")) {
        inputContainer.value += f.target.innerHTML;
    } 
    
    else if(f.target.classList.contains("comma")) {
        inputContainer.value += f.target.innerHTML;
    } 
    
    else if(f.target.classList.contains("minus")) {
        inputContainer.value += f.target.innerHTML;
    } 
    
    else if(f.target.classList.contains("plus")) {
        inputContainer.value += f.target.innerHTML;
    } 
    
    else if(f.target.classList.contains("delete")) {
        let sumLength = inputContainer.value.length;
        inputContainer.value = inputContainer.value.slice(0, sumLength-1);
    } 
    
    else if(f.target.classList.contains("equal")) {
        inputContainer.value = eval(inputContainer.value);
        let li = document.createElement("li");
        li.innerHTML = inputContainer.value;
        answerContainer.appendChild(li);
    }
});
