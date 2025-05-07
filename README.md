# 🥪ANDRIS BÜFÉ WEBOLDAL🥪
Ez a projekt a PG büfének készült weblap.
## Főbb funkciók, oldalak
Az alábbiakban részletezzük mindenkinek a munkáját.
## Főoldal (Dávid)
- A főoldalon láthatunk egy rövidebb marketing szöveget, egy úgynevezett *carousel* elemet, saját reklámokkal. 
- Dobozokban különböző ajánlatokat tüntettem fel. 
- A footer részben az előző projekthez hasonlóan felhasználtam a JS Névnap scriptet.

### 👨‍💻 Codesnippet
*a weboldal lábléce:*
```html
<footer>
    <div class="footer-content">
        <p>&copy; 2025 Andris Büfé. Minden jog fenntartva.</p>
        <ul class="footer-links">
            <li><a href="index.html">Főoldal</a></li>
            <li><a href="etlap.html">Étlap</a></li>
            <li><a href="rendeles.html">Rendelés</a></li>
            <li><a href="kapcsolat.html">Kapcsolat</a></li>
            </ul>
            <p>Ma <span style="font-weight: bold;" id="nevnapcontainer"></span> ünnepli névnapját.</p>
        </div>
    </footer>
```

## Rendelés (Attila)
## Étlap (Tomi)
- Az étlapon tudod megtekinteni a rendelni kívánt termékeket és azok árait.
- A termékek három fő csoportra vannak osztva.
```html
<h1>Étlap</h1>
    <table style="font-family: 'Bebas Neue', display;">
        <thead style="font-size: 30px;">
            <td style="padding-right: 30px;">Szendvicsek🍔</td>
            <td style="padding-right: 30px;"></td>
        </thead>
        <tr>
            <td>Nagy szendvicsek</td>
            <td>950 Ft</td>
        </tr>
        <tr>
            <td>Közepes szendvicsek</td>
            <td>850 Ft</td>
        </tr>
        <tr>
            <td>Kis szendvicsek</td>
            <td>650 Ft</td>
        </tr>
        <tr>
            <td>Ketchup/mustár/majonéz</td>
            <td>+50 Ft</td>
        </tr>
```


