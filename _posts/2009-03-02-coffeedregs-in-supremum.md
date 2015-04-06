---
layout: post
title: "CoffeeDregs in Supremum"
date: 2009-03-02 23:52:56 +0100
---
![](http://www.gewis.nl/~supremum/archief/kaft/sup40.3.jpg) De
redactie van de [Supremum](http://www.gewis.nl/supremum/), het periodiek van
de studievereniging GEWIS, vroeg of ik een stukje wilde schrijven over m'n
afstuderen voor het derde nummer van het jaar. Nou, dat wilde ik wel.  De
deadline kwam en de deadline ging en ik was een paar dagen te laat, maar...
Het stukje kwam er wel!

> Ik weet zeker dat een paar van jullie na het lezen van dit stukje hadden
> gewild dat ik een paar jaar eerder was begonnen met afstuderen. Het onderwerp
> van mijn afstuderen is namelijk het uitbreiden en verbeteren van CoffeeDregs,
> een tool die het begrijpen van object-georiënteerd programmeren in Java voor
> beginnende programmeurs moet vereenvoudigen.  Kort gezegd biedt CoffeeDregs
> je een (beperkt en daardoor aangenaam) kijkje in de virtuele machine van
> Java.
> 
> Laat ik mijzelf eerst even voorstellen. Mijn naam is Christian Luijten en
> loop alweer een paar jaartjes teveel rond op onze universiteit. Vorig jaar
> augustus ben ik begonnen met afstuderen bij [dr. Kees
> Huizing](http://www.win.tue.nl/~keesh/) en [dr. Ruurd
> Kuiper](http://www.win.tue.nl/~wsinruur/) die een deel van het
> programmeeronderwijs aan de TU/e en op een aantal VWO-scholen in Eindhoven
> verzorgen. Ze hebben hiervoor hun eigen lesmateriaal ontwikkeld, waarin ze
> een visueel model voor de uitvoering van (Java)programma's gebruiken. De
> oorsprong van dit model ligt al in de jaren zeventig, toen een soortgelijke
> methode werd voorsteld voor processen die een blokstructuur vertonen
> (verreweg de meeste moderne "general purpose" programmeertalen voldoen
> hieraan). In het model wordt uitgegaan van een set distincte objectruimten in
> de tijd en de overgangen hiertussen. Je zou het dus als een soort
> transititesysteem kunnen zien.
> 
> ![Een screenshot van CoffeeDregs geïntegreerd in
> NetBeans](https://www.dropbox.com/s/cya9qowjrwumspb/coffeedregs-netbeans-integrated-small.png?dl=1)
> Als je een Javaprogramma start, zal Java als eerste op zoek gaan naar de
> ``static main`` methode in de klasse die je hebt opgegeven. Van hieruit kan
> je als programmeur zorgen dat de rest van het programma wordt geladen. Wat we
> in CoffeeDregs doen is alles wat vanuit deze eerste klasse ontspruit in beeld
> brengen, in de meeste gevallen zijn dat instantiaties van klassen. Zowel
> klassen als instantiaties worden weergegeven als een doosje met een titel en
> een inhoud. Die inhoud zijn bijvoorbeeld de klasse- of instantiatievariabelen
> en de actieve methoden die zelf ook weer als doosjes worden weergegeven.
> Wordt een methode meerdere malen aangeroepen, dan zul je deze ook meerdere
> keren terugvinden.
> 
> Wanneer een variabele een referentie bevat naar een instantiatie, wordt een
> pijl getekend van die variabele naar instantiatie. Zodoende bouw je een graaf
> van object-referenties op. Naarmate de kennis en oefening van de programmeur
> vordert, worden zijn/haar programma's groter en complexer. Als er veel
> objecten in het spel komen, heeft de visualizatie dan ook de neiging om nogal
> onoverzichtelijk te worden. Het is daarom belangrijk te filteren welke
> objecten wel en welke niet van belang zijn voor de programmeur. 
> 
> Objecten waarin geen functionaliteit zit, maar alleen data, blijven
> bijvoorbeeld standaard als dichtgeklapt klein doosje zichtbaar op het scherm.
> Referenties van buitenaf zijn zichtbaar, maar waar de referenties van het
> dataobject heen gaan wordt verborgen, net als alles wat er verder nog achter
> hangt. Denk hierbij aan de structuur van een linked list, of een of andere
> geavanceerde boomstructuur. Het blijft wél altijd mogelijk de doosjes open te
> klappen en te volgen waar de referenties heen lopen.  Als in een object een
> methode wordt aangeroepen, wordt het bijbehorende doosje opengeklapt om de
> effecten goed te kunnen bestuderen. De uitgaande referenties worden dan
> getoond en de "buurobjecten" worden zichtbaar gemaakt.
> 
> Op een gegeven moment in de executie van het programma zullen er meerdere
> methoden actief zijn; het is immers vrij normaal dat de ene methode een
> andere aanroept, die weer een andere aanroept enzovoort. Zonder visuele hulp
> is het dan lastig de vraag te beantwoorden welke methode welke andere methode
> heeft aangeroepen en waar de huidige plek van executie is (waar komen we
> vandaan? waar gaan we naartoe? het kan er filosofisch aan toe gaan!). De
> methoden worden in CoffeeDregs verbonden met een pijl die letterlijk als een
> rode draad door het programma gaat. Heeft je programma meerdere threads, dan
> krijg je ook meerdere losse draden te zien.
> 
> Het ontwerp- en implementatiedeel van mijn afstuderen is nu grotendeels
> afgerond en ik ga me nu richten op een kleinschalig onderzoek naar de
> inzetbaarheid van de huidige staat van CoffeeDregs in het
> programmeeronderwijs van volgend jaar. Hiervoor heb ik een aantal
> experimenten voorbereid om op verse studenten los te laten. Je kan hierbij
> denken aan het gedrag van een programma te laten verklaren terwijl het
> uitgevoerd wordt of een kleine aanpassing maken zodat het programma doet wat
> je wil dat het doet. Dat alles uiteraard met hulp van CoffeeDregs.
> 
> Wil je je eigen Java-programma's eens aan de visuele test onderwerpen? Op
> <https://svn.win.tue.nl/trac/CoffeeDregs/> vind je de website van het project
> en een link naar de source code. Er is ook een plugin voor NetBeans
> beschikbaar. Over niet al te lange tijd zullen ook binaire versies van
> CoffeeDregs op de site komen te staan.
