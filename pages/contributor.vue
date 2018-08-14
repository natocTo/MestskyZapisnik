<template>
  <main class="container pt-3">
    <div class="pt-8 pb-2 text-right">
      <nuxt-link
        class="p-2 inline-block text-black border-2 border-black no-underline rounded font-semibold hover:bg-white"
        to="/"
      >Zpět</nuxt-link>
    </div>

    <article class="font-mono tracking-wide leading-normal sm:text-justify max-w-md py-4 mb-16">
      <h1 class="text-3xl mb-8">
        Jak přidat, upravit či vymazat zápis.
      </h1>

      <p class="text-lg mb-4">
        Všechny současné zápisky naleznete na <a href="https://github.com/natocTo/mestsky-zapisnik/tree/master/faqs/svitavy" class="no-underline text-blue" rel="nofollower noopener" target="_blank">Githubu</a>.
        To je domov pro miliony zdrojových kódů všemožných projektů. Pohybují se zde primárně programátoři.
        Nyní se mezi ně můžete připojit. Stačí se bezplatně registrovat a již můžete ovlivňovat tento projekt.
        Stanete se takzvanými přispěvateli.
      </p>

      <h2 class="text-2xl mt-8 mb-4"># Registrace na Github</h2>

      <p class="text-lg mb-4">
        Nejdříve je potřeba si na Githubu udělat účet. Pokud účet již máte, stačí se jen přihlásit (Sign in).
        Pokud se chystáte na svojí první úpravu či přidání nového zápisu, zajímá vás tlačítko registrace (Sign up).
        Tlačítka naleznete v pravém horním rohu stránky. Celá registrace je samozřejmě zdarma.
      </p>

      <img src="~/assets/step_1.jpg" alt="Registrace a přihlášení na Github" class="block mb-8" />

      <p class="text-lg mb-4">
        Na stránce registrace vyplníte přezdívku (Username), emailovou adresu (Email address) a heslo (Password).
        Kliknete na tlačítko vytvořit účet (Create an account).
        Na další stránce necháte vše jak je. Kliknete tak rovnou na pokračovat (Continue).
        Následující krok můžete také rovnou přeskočit (Skip this step).
        Nyní je registrace téměř hotová. Posledním krokem je potvrzení registrace na Vaší emailové adrese.
      </p>

      <h2 class="text-2xl mt-8 mb-4">
        # Přidání zápisu
      </h2>

      <p class="text-lg mb-4">
        Registraci máme za sebou a jsme přihlášení. Můžeme se vrhnout na vytvoření zápisu.
      </p>

      <p class="text-lg mb-4">
        Přejdeme na <a href="https://github.com/natocTo/mestsky-zapisnik/tree/master/faqs/svitavy" class="no-underline text-blue" rel="nofollow noopener" target="_blank">výpis všech zápisů</a>.
        Pokud chceme přidat novou akci, tak ještě před dalším krokem přejdeme do složky akce.
        Klikneme na tlačítko vytvořit nový soubor (Create new file).
        Na další stránce nám skočí kurzor na první povinnou položku, a to je název souboru (Name your file).
        Napíšeme tam název korespondující s tématem našeho zápisu (např: chceme psát o bazénu, tak napíšeme Bazen.md).
        Pokud přidáváme novou akci, vložíme před název ještě časové razítko události.
        To si můžeme vygenerovat například <a href="https://www.epochconverter.com/" class="no-underline text-blue" rel="nofollow noopener" target="_blank">na této stránce</a> (výsledek tak bude třeba 1534198840-Ohnostroj.md).
        Koncovka (.md) je povinná a musí tak končit každý nový zápis.
      </p>

      <p class="text-lg mb-4">
        Nyní můžeme začít sepisovat nový zápis - hned do editoru pod políčkem na nastavení názvu souboru (Edit new file).
      </p>

      <p class="text-lg mb-4">
        Držme se příkladu s bazénem. Začneme nejdříve nadpisem, a to tak, že uděláme dvě mřížky (tak se dělá nadpis).
        Za tyto mřížky již napíšeme nadpis. Pod něj sepíšeme text našeho zápisku.
      </p>

      <p class="text-lg mb-4">
        Máme skoro vyhráno. Poslední krok je odeslat nový zápis ke kontrole.
        Na spodní straně stránky klikneme na tlačítko odeslat (Propose new file).
        Před odesláním ještě můžeme doplnit informace pro toho, kdo bude náš záznam kontrolovat (Add an optional extended description..).
      </p>

      <img src="~/assets/step_2.jpg" alt="Přidání nového zápisu" class="block mb-8" />

      <h2 class="text-2xl mt-8 mb-4">
        # Úprava zápisu
      </h2>

      <p class="text-lg mb-4">
        Při prohlížení zápisů na tomto webu se vždy v pravé části zápisu zobrazí dvě malé ikonky.
        Kliknutím na pero se dostanete přímo na stránku, kde můžete navrhnout opravu.
      </p>

      <p class="text-lg mb-4">
        Po úpravě je nutné tyto změny odeslat ke kontrole.
        To provedete dole na stránce kliknutím na tlačítko odeslat (Propose file change).
        Přidáním popisu úpravy (Add ad optional extended description..) nic nezkazíte, ale není povinné.
      </p>

      <h2 class="text-2xl mt-8 mb-4">
        # Vymazání zápisu
      </h2>

      <p class="text-lg mb-4">
        Po najetí na libovolný zápis na tomto webu se v pravé části zobrazí dvě ikonky.
        Kliknutím na ikonku koše se dostanete přímo na stránku, kde můžete navrhnout smazání záznamu.
      </p>

      <p class="text-lg mb-4">
        Smazání by mělo být vždy nějak odůvodněno (Add an optional extended description).
        Urychlí se tak jeho zpracování. Poté kliknete na odeslat (Propose file change).
      </p>
    </article>
  </main>
</template>

<script>
export default {
  head() {
    return {
      title: 'Zapojte se - Městský zápisník'
    }
  }
}
</script>