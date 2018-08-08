<template>
  <main class="container">
    <div class="pt-12 pb-2 text-right">
      <nuxt-link
        class="p-2 inline-block text-black border-2 border-black no-underline rounded font-semibold hover:bg-white"
        to="/"
      >Zpět</nuxt-link>
    </div>

    <article class="font-mono tracking-wide leading-normal sm:text-justify max-w-md py-4 mb-16">
      <h1 class="text-4xl mb-4">Jak přidat nový zápis.</h1>

      <p class="text-lg mb-4">
        Všechny současné zápisky naleznete na této adrese (<a href="https://github.com/natocTo/mestsky-zapisnik/tree/master/faqs/svitavy" rel="nofollower noopener" target="_blank">https://github.com</a>).
        Zde začíná naše pouť ať už za úpravou stavajícího záznamu či přidání úplně nového.
      </p>

      <h2 class="text-2xl mt-8 mb-4"># Registrace</h2>

      <p class="text-lg mb-4">
        Nejdříve je potřeba si na Githubu udělat účet. Pokud účet již máte stačí se jen příhlásit (Sign in).
        Pokud se chystáte na svojí první úpravu či přidání nového zápisu, zajímá vás tlačítko registrace (Sign up).
        Obé tlačítka naleznete v pravém horním roku stránky. Celá registrace je samozřejmně zdarma.
      </p>

      <p class="text-lg mb-4">
        Na stránce registrace vyplníte přezdívku (username), emailouvou adresu (email address) a heslo (password). Klikneme na tlačíko
        vytvořit účet (Create an account).
        Na další stránce necháme vše jak je. Plán necháme ten zadarmo. A nebude vyžadovat žádné upozornění na novinky Githubu a podobně.
        Klikneme tak rovnou na pokračovat (Continue).
        V posledním kroku se nás Github ptá na další nedůležité věci. Můžeme to rovnou přeskočit (skip this step).
        Nyní je registrace téměr hotová. Ještě je potřeba na Vaší emailové adrese potvrdit tuto registraci.
        Gratuluji, Vaše registrace je hotová, již Vám nic nebrání zapojit se do tvorby zápisků pro obyvatele Svitav.
      </p>

      <h2 class="text-2xl mt-8 mb-4"># Přidání zápisu</h2>

      <p class="text-lg mb-4">
        Registrace máme za sebou a jsme přihlášený. Můžeme se teda vrhnout na vytvoření zápisu.
      </p>

      <p class="text-lg mb-4">
        Přejdeme teda na <a href="https://github.com/natocTo/mestsky-zapisnik/tree/master/faqs/svitavy" rel="nofollower noopener" target="_blank">výpis všech zápisů</a>.
        Klikneme na tlačítko vytvořit nový soubor (Create new file). Hned na další stránce nám skočí kurzor na první povinno položku a to je název souboru (Name your file).
        Napíšeme tam název souboru korespondující s tématem našeho zápisu (např: chceme psát o Svitavském bazénu, tak napíšeme SvitavyBazen.md).
        Koncovka (.md) je povinná a musí tak končit každý nový zápis.
      </p>

      <p class="text-lg mb-4">
        Nyní můžem začít sepisovat náš nový zápis. Hned do editoru pod políčkem na nastavení názvu souboru (Edit new file).
      </p>

      <p class="text-lg mb-4">
        Držme se příkladu ze svitavského bézénu. Začneme nejdříve nadpisem a to tak že uděláme dvě mřížky (tak se dělá nadpis).
        Za tyto mřížky již napíšeme náš nadpis. Pod to dát sepíšeme již text našeho zápisku. Celé to může vypadat třeba takto:
      </p>

      <pre>
        <code>
          ## Svitavký bazén (koupaliště)

          Svitavský bazén je otevřený od 1.7.2018.
          Otevírací doba je 9-20h a to po celý týden.
          Telefoní kontakt: 736 440 519
        </code>
      </pre>

      <p class="text-lg mb-4">
        Nyní máte (máme) skoro výhráno. Poslední krok je odeslat tento nový zápis na kontrolu.
        To provedete na spodní straně stránky (Propose new file). Kliknutím odešlete Vás nový záznam ke kontrole.
        Ještě zde můžete doplnit informace pro toho, kdo bude Vás nový záznam kontrolovat. Můžete doplnit třeba zdroje
        Vašich informací a podobně. Není to ale povinné.
      </p>

      <h2 class="text-2xl mt-8 mb-4"># Úprava zápisu</h2>

      <p class="text-lg mb-4">
        Ne všechny informace musí být stoprocentě vždy přesné.
        Pokud naleznete chybu na webu můžete ji rovnou samy opravit.
      </p>

      <p class="text-lg mb-4">
        Otevřeme si tak znovu <a href="https://github.com/natocTo/mestsky-zapisnik/tree/master/faqs/svitavy" rel="nofollower noopener" target="_blank">výpis všech zápisů</a>.
        Najdeme ten, který se nám nezdá (klikneme na název souboru, například: SvitavyBazen.md).
        Otevře se nám zápis, který můžeme ještě jednou zkontrolovat. Pokud tam chyba vážne je klikneme na malou ikonku tužky na pravé straně stránky (edit the file).
      </p>

      <p class="text-lg mb-4">
        Nyní máme před sebou daný záznam a můžeme upravit vše co je nutné. Poté je nutné tyto změny odeslat ke kontrole.
        To provedete dole na stránce kliknutím na tlačítko změny (Propose file change). Bude super pokud mi do pole nad tím napíšete
        proč se Vám daná informace zdá nepřesná nebo proč danou změnu provádíte. Ulehčí a zrychlí to tak schovalovací cyklus.
        Popis ale není nutný.
      </p>

      <h2 class="text-2xl mt-8 mb-4"># Vymazání zápisu</h2>

      <p class="text-lg mb-4">
        Může se stát že nějaký zápis už není možné upravit, aby odpovídal realitě.
        Nejlepší je takový zápis vymazat. Daný záznam opět nejdříve opět dohledáme v
       <a href="https://github.com/natocTo/mestsky-zapisnik/tree/master/faqs/svitavy" rel="nofollower noopener" target="_blank">seznamu zápisů</a>.
      </p>

      <p class="text-lg mb-4">
        Daný záznam si otevřeme tak že klikneme na jeho jméno (například: SvitavyBazen.md).
        Na pravé straně stránky nalezneme ikonku koše (Delete the file).
        Po kliknutí na ikonku se dostame na stránku kde požádáme o smazání zápisu. Smazání by mělo být vždy nějak odůvodněno (Add an optional extended description).
        Urychlí se tak jeho zpracování. Poté klikneme na provést úkon (Propose file change).
      </p>
    </article>
  </main>
</template>