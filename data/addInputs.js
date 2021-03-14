setTimeout(() =>
{
    rows = document.querySelectorAll(".player");
    for (let i = 0; i < rows.length; i++)
    {
        const element = rows[i];
        console.log(element);
        let input = document.createElement("input");
        element.appendChild(input);
    }

    style = document.createElement("style");
    style.innerText = `
    input {
        border: none;
        width: 100%;
        height: 100%;
        margin: 0;
        padding: 0;
        text-align: center;
        background: transparent;
        grid-area: 1 / 1;
        font-size: 1.5em;
        font-family: sans-serif;
        color: #6d549e;
        background-color: transparent !important;
        border: 0px;
        outline: none;
        -webkit-box-shadow: none;
        -moz-box-shadow: none;
        box-shadow: none;
    }
    
    .player span {
        grid-area: 1 / 1;
    }
    
    .player {
        display: inline-grid !important;
        /* grid-template-columns: 1; */
        /* grid-template-rows: 1; */
        justify-items: center;
        align-items: center;
    }
    `
    document.querySelector("head").appendChild(style);

}, 1000);