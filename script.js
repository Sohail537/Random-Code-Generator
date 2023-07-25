let quotes=[
    "If you're going through hell keep going.",
    "Never regret whatever happen in life , good things give you happiness and bad things give you learning… ",
    "The scariest moment is always just before you start.",
    "Opportunities don't happen. You create them.",
    "The road to success and the road to failure are almost exactly the same.",
    "Never confuse a single defeat with a final defeat.",
    "The secret of getting ahead is getting started.",
    "We mature with damage, not with years.",
    "If your life just got harder, congratulations, you have leveled up.",
    "We refuse to see how bad something is until it completely destroys us.",
    "It broke my heart, but opened my eyes.",
    "My pain may be the reason for someone's happiness. But my happiness must never be the reason for somebody's pain.",
    "Stop chasing the wrong one, the right one won't run.",
    "Don't let anyone ever make you feel you don't deserve what you want.",
    "The only sensible way to live in this world is without rules.",
    "There is no yoda-there's no one who points you in the right direction.",
    "You've got to figure that out by yourself.",
    "Nobody panics when things go 'according to plan.' Even if the plan is horrifying!",
    "I know the voices in my head aren't real, but sometimes their ideas are absolutely awesome.",
    "As you know, madness is like gravity…all it takes is a little push."
];

var bg = new Array('#011010', '#004400','#013000', '#F000FF',
                '#808080', '#008080', '#800080', '#FF0010', '#0FFFFF',
                '#08FF67', '00FF34', '#264642', '#364523', '#863142',
                '#CD5C5C', '#F08080', '#FA8072','#E9577A', '#FFA07A');

function displayQuote(){
    let index=Math.floor(Math.random()*quotes.length);
    let div=document.querySelector('#quote');
    
    let quote=`<div class="card">
        <p>"${quotes[index]}"</p>
   </div>
   `;

    document.body.style.background=bg[index]

    div.innerHTML=quote;
}