<template>
  <main class="container pt-3">
    <div class="pt-8 pb-2 text-right">
      <nuxt-link
        class="p-2 inline-block text-black border-2 border-black no-underline rounded font-semibold hover:bg-white"
        to="/"
      >Zpět</nuxt-link>
    </div>

    <article class="font-mono tracking-wide leading-normal sm:text-justify max-w-md py-4 mb-16">
      <h1 class="text-3xl mb-8">Jak přidat, upravit či vymazat zápis.</h1>

      <p class="text-lg mb-4">
        Všechny současné zápisky naleznete na <a href="https://github.com/natocTo/mestsky-zapisnik/tree/master/faqs/svitavy" rel="nofollower noopener" target="_blank">Githubu</a>.
        Zde začíná naše pouť jak za přidáním nového zápisu, tak i za úpravu nebo smázaní jichž existujícího.
      </p>

      <p class="text-lg mb-4">
        Github je domov pro miliony zdrojových kódů všemožných projektů. Pohybují se zde primárně programátoři.
        Nyní se mezi ně můžete připojit, nezní to lákavě? Stačí se bezplatně registrovat a již můžete ovlivňovat
        tento projekt. Stanete se takzvanými přispěvovateli (contributory). Nezapomeňte si to hodit do životopisu,
        bude to vypadat cool. :)
      </p>

      <h2 class="text-2xl mt-8 mb-4"># Registrace na Github</h2>

      <p class="text-lg mb-4">
        Nejdříve je potřeba si na Githubu udělat účet. Pokud účet již máte stačí se jen příhlásit (Sign in).
        Pokud se chystáte na svojí první úpravu či přidání nového zápisu, zajímá vás tlačítko registrace (Sign up).
        Obé tlačítka naleznete v pravém horním roku stránky. Celá registrace je samozřejmně zdarma.
      </p>

      <img src="/step_1.jpg" alt="Registrace a přihlášení na Github" class="block mb-8" />

      <p class="text-lg mb-4">
        Na stránce registrace vyplníte přezdívku (username), emailouvou adresu (email address) a heslo (password). Klikneme na tlačíko
        vytvořit účet (Create an account).
        Na další stránce necháme vše jak je. Plán necháme ten zadarmo. A nebude vyžadovat žádné upozornění na novinky Githubu a podobně.
        Klikneme tak rovnou na pokračovat (Continue).
        V posledním kroku se nás Github ptá na další nedůležité věci. Můžeme to rovnou přeskočit (skip this step).
        Nyní je registrace téměr hotová. Poslední krok je potvrdit registraci na Vaší emailové adrese. Github si tak ověří, že
        jste zadali Vaši emailovou adresu.
      </p>

      <h2 class="text-2xl mt-8 mb-4"># Přidání zápisu</h2>

      <p class="text-lg mb-4">
        Registraci máme za sebou a jsme přihlášený. Můžeme se teda vrhnout na vytvoření zápisu.
      </p>

      <p class="text-lg mb-4">
        Přejdeme teda na <a href="https://github.com/natocTo/mestsky-zapisnik/tree/master/faqs/svitavy" rel="nofollower noopener" target="_blank">výpis všech zápisů</a>.
        Klikneme na tlačítko <a href="https://github.com/natocTo/mestsky-zapisnik/new/master/faqs/svitavy" rel="nofollower noopener" target="_blank">vytvořit nový soubor</a> (Create new file).
        Na další stránce nám skočí kurzor na první povinnou položku a to je název souboru (Name your file).
        Napíšeme tam název souboru korespondující s tématem našeho zápisu (např: chceme psát o Svitavském bazénu, tak napíšeme SvitavyBazen.md).
        Koncovka (.md) je povinná a musí tak končit každý nový zápis.
      </p>

      <p class="text-lg mb-4">
        Nyní můžem začít sepisovat náš nový zápis. Hned do editoru pod políčkem na nastavení názvu souboru (Edit new file).
      </p>

      <p class="text-lg mb-4">
        Držme se příkladu ze svitavského bézénu. Začneme nejdříve nadpisem a to tak že uděláme dvě mřížky (tak se dělá nadpis).
        Za tyto mřížky již napíšeme náš nadpis. Pod to sepíšeme text našeho zápisku. Celé to může vypadat třeba takto:
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
        Nyní máte (máme) skoro výhráno. Poslední krok je odeslat tento nový zápis ke kontrole.
        To provedete na spodní straně stránky kliknutím na tlačítko odeslat (Propose new file).
        Před odesláním ještě můžete doplnit informace pro toho, kdo bude Vás nový záznam kontrolovat.
        Můžete doplnit třeba zdroje Vašich informací a podobně. Není to ale povinné.
      </p>

      <img src="/step_2.jpg" alt="Přidání nového zápisu" class="block mb-8" />

      <h2 class="text-2xl mt-8 mb-4"># Úprava zápisu</h2>

      <p class="text-lg mb-4">
        Ne všechny informace musí být stoprocentě vždy přesné.
        Pokud naleznete chybu na webu, můžete rovnou samy navrhnout opravu.
      </p>

      <p class="text-lg mb-4">
        Při prohlížení zápisů na tomto webu se vždy v pravé části zápisu zobrazí dvě malé ikonky.
        Jedna z nich je pero. Kliknutím na toto tlačítko se dostane přímo na stránku, kde
        můžete navrhnout opravu tohoto textu.
      </p>

      <p class="text-lg mb-4">
        Po kliku Vám naskočí detail záznamu a můžeme upravit vše co je nutné. Poté je nutné tyto změny odeslat ke kontrole.
        To provedete dole na stránce kliknutím na tlačítko změny (Propose file change). Bude super pokud mi do pole nad tím napíšete
        proč se Vám daná informace zdá nepřesná nebo proč danou změnu provádíte. Ulehčí a zrychlí to tak schovalovací cyklus.
        Popis ale není nutný.
      </p>

      <h2 class="text-2xl mt-8 mb-4"># Vymazání zápisu</h2>

      <p class="text-lg mb-4">
        Může se stát že nějaký zápis už není možné upravit, aby odpovídal realitě.
        Nejlepší je takový zápis vymazat.
      </p>

      <p class="text-lg mb-4">
        Vymazání je stejně snadné jako úprava. Po najetí na libovolný zápis na tomto webu
        se v pravé části zobrazí dvě ikonky. První je pero, tu jsme si už popsali výše, druhá
        je koš. Kliknutím na toto tlačítko se dostane přímo na stránku, kde můžete navrhnout smazání záznamu.
      </p>

      <p class="text-lg mb-4">
        Smazání by mělo být vždy nějak odůvodněno (Add an optional extended description).
        Urychlí se tak jeho zpracování. Poté klikneme na provést úkon (Propose file change).
      </p>
    </article>
  </main>
</template>