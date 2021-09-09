const questions = document.getElementsByClassName('question');
const arrows_icons = document.getElementsByClassName('arrow')
const answers = document.getElementsByClassName('answer')

for (let i in questions)
{
    answers[i].style.display = 'none';

    questions[i].addEventListener("click", function()
    {
        if (answers[i].style.display == 'none')
        {
            answers[i].style.display = 'block';
            arrows_icons[i].style.transform = "rotate(180deg)";
            questions[i].children[0].style.fontWeight = "bold";

            hide_answers_execpt_index(i);
        }
        else
        {
            answers[i].style.display = 'none';
            arrows_icons[i].style.transform  = "rotate(0deg)";
            questions[i].children[0].style.fontWeight = "normal";
        }
    });
}

function hide_answers_execpt_index (_index)
{
    for (let i in answers)
    {
       if( i != _index)
       {
        answers[i].style.display = 'none';
        arrows_icons[i].style.transform  = "rotate(0deg)";
        questions[i].children[0].style.fontWeight = "normal";
       } 
    }
}