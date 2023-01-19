var path = 'data/uklady.csv';
var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        var csv = this.responseText;
        csv = csv.toString().split('\n');
        makeTemplate(csv);
    }
};
xhttp.open('GET', path, true);
xhttp.send();

function makeTemplate(csv) {
    var counter = 0;
    var doubleBorders = [0, 3, 6, 8, 10, 13, 15, 16, 18, 20, 21, 22];

    csv.forEach(row => {
        var [układ, układ2, bonus, szansa, klasyCSS] = row.split(',');
        var b = ['⚀', '⚁', '⚂', '⚃', '⚄', '⚅'].includes(układ2.trim()[0]);
        var addPercent = szansa.trim().length > 0;
        var rowTemplate = `<div class="row">
            <div class="bonus">${bonus.trim()}</div>
            <div class="układ">${układ.trim()}</div>
            <div class="układ2 ${b ? 'bigger' : ''}">${układ2.trim()}</div>
            <div class="szansa ${addPercent ? 'percent' : ''}">${szansa.trim()}</div>
            <div class="player first"><span></span></div>
            <div class="player"><span></span></div>
            <div class="player"><span></span></div>
            <div class="player"><span></span></div>
            <div class="player"><span></span></div>
            <div class="player"><span></span></div>
            <div class="player"><span></span></div>
            <div class="player"><span></span></div>
            <div class="player"><span></span></div>
            <div class="player"><span></span></div>
        </div>`;
        rowTemplate = rowTemplate.split('⚀').join('<img src="data/dice/1.png", alt="⚀">');
        rowTemplate = rowTemplate.split('⚁').join('<img src="data/dice/2.png", alt="⚁">');
        rowTemplate = rowTemplate.split('⚂').join('<img src="data/dice/3.png", alt="⚂">');
        rowTemplate = rowTemplate.split('⚃').join('<img src="data/dice/4.png", alt="⚃">');
        rowTemplate = rowTemplate.split('⚄').join('<img src="data/dice/5.png", alt="⚄">');
        rowTemplate = rowTemplate.split('⚅').join('<img src="data/dice/6.png", alt="⚅">');
        // rowTemplate = rowTemplate.split('■').join('<img src="data/dice/0.png", alt="■">');
        rowTemplate = rowTemplate.split('_').join('<img src="data/dice/empty.png", alt="■">');

        var element = document.createElement('template');
        element.innerHTML = rowTemplate;
        element = element.content.firstChild;
        if (doubleBorders.includes(counter)) element.classList.add('double-border');
        klasyCSS.split(' ').forEach(cssClass => {
            if (cssClass.trim().length == 0) return;
            cssClass = cssClass.toLowerCase().trim();
            element.classList.add(cssClass);
        });
        content = document.querySelector('#content');
        content.appendChild(element);

        counter++;
    });
}
