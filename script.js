var csv = `Układ,Układ, Pkt, 🖐
Para, (■■),              , 98%
Dwie Pary, (■■) (■■),         , 59%
Trzy Pary, (■■) (■■) (■■),       +6, 4.8%
Trójka, (■■■),            , 37%
Dwie Trójki, (■■■) (■■■),    +12, 0.7%
Mały Strit, ⚀⚁⚂⚃⚄,     =20, 5.4%
Duży Strit, ⚁⚂⚃⚄⚅,     =30, 5.4%
Wielki Strit, ⚀⚁⚂⚃⚄⚅  ,   =40, 1.5%
Full,(■■■) (■■),              , 17%
Wielki Full,(■■■■) (■■),    +15, 1%
Kareta,(■■■■),         +10, 5%
Poker,(■■■■■),          +30, 0.4%
Duży Poker,(■■■■■■),     +60, .01%
Parzyste, 2v4v6,          , 1.6%
Nieparzyste,1v3v5,       , 1.6%
Duże, ≥ 4,              , 1.6%
Małe, ≤ 3,              , 1.6%
Oczko👁, suma kości równa 21,          =21, 9.3%
Punkty, suma,            , 
Przerzut,dodatkowy,    ,x 
Wynik końcowy,,              , `
    .toString()
    .split('\n');

console.log(csv);

var counter = 0;

var doubleBorders = [0, 3, 5, 8, 10, 13, 15, 17, 19, 20, 21];
var blue = [6, 7, 8];
var yellow = [11, 12, 13];

csv.forEach(row => {
    var [układ, układ2, bonus, szansa] = row.split(',');
    var b = ['⚀', '⚁', '⚂', '⚃', '⚄', '⚅'].includes(układ2.trim()[0]);
    var rowTemplate = `<div class="row">
    <div class="bonus">${bonus.trim()}</div>
    <div class="uklad">${układ.trim()}</div>
    <div class="uklad2 ${b ? 'bigger' : ''}">${układ2.trim()}</div>
    <div class="szansa">${szansa.trim()}</div>
    <div class="player"></div>
    <div class="player"></div>
    <div class="player"></div>
    <div class="player"></div>
    <div class="player"></div>
    <div class="player"></div>
    <div class="player"></div>
    <div class="player"></div>
    <div class="player"></div>
    </div>`;
    var element = document.createElement('template');
    element.innerHTML = rowTemplate;
    element = element.content.firstChild;
    if (counter == 0) element.classList.add('header-row');
    if (doubleBorders.includes(counter)) element.classList.add('double-border');
    if (blue.includes(counter)) element.classList.add('blue');
    if (yellow.includes(counter)) element.classList.add('yellow');
    if ([20].includes(counter)) element.classList.add('small-height');
    content.appendChild(element);
    counter++;
});
