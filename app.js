window.onload = () => 
{
    const BtnClick1 = document.getElementById("ButtonClick1");
    const PClick1 = document.getElementById("idPP");


    BtnClick1.addEventListener("click", function ()
    {
        this.innerHTML =
        (this.innerHTML === 'Люблю Сашу') ? this.innerHTML = 'Саша самая лучшая' : this.innerHTML = 'Люблю Сашу';

    });
}

function ButtonClick1()
{
    alert('Я тебя люблю');
}