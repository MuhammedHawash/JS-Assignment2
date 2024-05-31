var qoutesArray=[

     {
        qoute: "“Believe you can and you're halfway there.”",
        author: "― Theodore Roosevelt",
     },
     {
        qoute: "“Be yourself; everyone else is already taken.”",

        author: "― Oscar Wilde"
     },
     {
        qoute: "“So many books, so little time.”",
        author: "― Frank Zappa"
     },
     {
        qoute: "“A room without books is like a body without a soul.”",
        author: "― Marcus Tullius Cicero"
     },
     {
        qoute: "“You only live once, but if you do it right, once is enough.”",
        author: "― Mae West"
     },
     {
        qoute: "“If you tell the truth, you don't have to remember anything.”",
        author: "― Mark Twain"
     },

     

]

var myElement= document.querySelector("button");

myElement.addEventListener("click",function(){
    var randomQoute= qoutesArray[Math.floor(Math.random() * qoutesArray.length)];
   document.getElementById("qoute").innerHTML=randomQoute.qoute;
   document.getElementById("auther").innerHTML=randomQoute.author;

   

})
