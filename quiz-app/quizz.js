const quiz = [
    {
        question: "What is the most used programming language in 2021?",
        ans1text: "Java",
        ans2text: "C",
        ans3text: "Python",
        ans4text: "JavaScript",
        answer: "JavaScript",
    },
    {
        question: "Who is the Prime Minister of India?",
        ans1text: "Mr.Narendra Modi",
        ans2text: "Donald Trump",
        ans3text: "virat kolhi",
        ans4text: "you",
        answer: "Mr.Narendra Modi",
    },{
        question: "What does HTML stand for?",
        ans1text: "Hypertext Markup Language",
        ans2text: "Cascading Style Sheet",
        ans3text: "Jason Object Notation",
        ans4text: "Helicopters Terminals Motorboats Lamborginis",
        answer: "Hypertext Markup Language",
    },
    {
        question: "What year was JavaScript launched?",
        ans1text: "1996",
        ans2text: "1995",
        ans3text: "1994",
        ans4text: "none of the above",
        answer: "1995",

    }
]

const ques = document.getElementById('questions');
const opt_a = document.getElementById('A');
const opt_b = document.getElementById('B');
const opt_c = document.getElementById('C');
const opt_d = document.getElementById('D');
const ans  = document.querySelectorAll('.checkbox');

const button = document.getElementById('button');

let index = 0;
let score = 0;

ques.textContent  = quiz[index].question;
opt_a.textContent = quiz[index].ans1text;
opt_b.textContent = quiz[index].ans2text;
opt_c.textContent = quiz[index].ans3text;
opt_d.textContent = quiz[index].ans4text;


console.log(ques.textContent = quiz[index].question)
console.log(ques.textContent)
console.log(ques)

button.addEventListener('click' , () => {
    const ans_chk = document.querySelector('input[type="radio"]:checked')
    console.log(ans_chk);
    console.log(ans_chk.nextElementSibling.textContent);
    if(ans_chk === null){
        alert("please check the answer");

    }
    else{
        if(ans_chk.nextElementSibling.textContent === quiz[index].answer)
        {
        score++;
    }
        // ans_chk.checked=false;

        index++;

        if(index < quiz.length){
            ques.textContent  = quiz[index].question;
            opt_a.textContent = quiz[index].ans1text;
            opt_b.textContent = quiz[index].ans2text;
            opt_c.textContent = quiz[index].ans3text;
            opt_d.textContent = quiz[index].ans4text;
            
            ans_chk.checked=false;

        }
        else{
            alert("your score is :"+score +"out of" + quiz.length);
            location.reload();

        }

    }
}
);