export default () => {
  return new Promise(function(resolve) {
    resolve({
      common: {
        '404': 'Deze pagina is niet gevonden',
        title: 'A simple example',
        subtitle: "It's a blank-page. Start to build your'e page from here.",
        error_with_status: 'Er is iets fout gegaan',
        '404_subtitle': 'Je kan hier blijven of terug gaan naar de homepagina.',
        back: 'Terug naar home',
        error_without_status: 'An error occurred on the server',
        cookies_accept: 'Accepteren',
        cookies:
          'Wij maken gebruik van cookies om uw ervaring te optimaliseren. Lees',
        cookies2: 'hier',
        cookies3: 'meer.',
        en: 'Engels',
        nl: 'Nederlands',
        created_by: 'Gemaakt door'
      },
      blaes: {
        banner_title: 'Geniet van Blaes Bier',
        banner_subtitle:
          'Een mix van Zaanse gezelligheid en Duits kwaliteitsbier',
        'header_beers-and-more': 'Bier en meer',
        header_about: 'Over ons',
        header_home: 'Home',
        header_events: 'Events',
        header_media: 'Media',
        header_contact: 'Contact',
        promo_btn: 'Bestellen',
        new_desc: 'Onze bieren',
        about_title: 'Een mix van Zaanse gezelligheid en Duits kwaliteitsbier',
        about_left_title: 'Er waren eens...',
        about_left_text:
          'De overgrootmoeder van de gebroeders Blaes vestigde zich in Zaandam in 1920 als economisch vluchteling vanuit Düsseldorf. Duitsland lag volledig in puin na de 1e WO en de Zaanstreek bood perspectief. Vanaf 1955 stond de familie beter bekend als “de Blaesen van de Stationsstraat” met grootvader Egon Blaes aan het roer die een grote bijdrage leverde aan de confectie industrie, uniek in de Zaanstreek. Enkele generaties later combineerden de gebroeders Blaes hun voorliefde voor bier en hun Duitse roots met Blaes Bier.',
        about_btn: 'Meer info over blaesbeer',
        about_brewer_title: 'Elian Blaes',
        about_brewer_subtitle: 'De brouwer',
        about_brewer_text:
          'In januari 2019 kocht Elian Blaes uit Zaandam een kleine brouwketel om bieren te brouwen in zijn keuken. Als voormalig chef-kok was hij altijd op zoek naar smaken en uitdagingen. Zo gaf hij onder andere kookworkshops; Koken met bier. Naast de interesse voor het brouwproces was ook het gemis van Duitse klassieke bieren in de Nederlandse schappen een motivatie. Hij wilde bieren brouwen die hij en zijn broer Ralph zélf wilden drinken.',
        beer_title: 'Bier en Meer',
        beer_subtitle: 'Verfijnde Complexiteit',
        beer_text:
          'Bier hoeft niet altijd maar “speciaal” te zijn. Het mag naar de smaak van de gebroeders Blaes zelfs behoorlijk toegankelijk zijn, waarbij de doordrinkbaarheid een belangrijke factor is. Toegankelijk, maar zonder enige concessie op kwalitatief hoogwaardige en pure ingrediënten. Degelijkheid zonder fratsen.',
        beer_story_title: 'Bier met een verhaal',
        beer_story_text:
          'Achter alle bieren van Blaes zit een persoonlijk verhaal geïnspireerd door familie, het heden, het verleden en door de (Zaan)streek. De bieren zijn direct verbonden aan onze persoonlijkheid en daarom zullen we geen bieren brouwen uit commercieel oogpunt als we het niet zélf zouden drinken.',
        featured: 'Producten',
        about2_title: 'Verfijnde complexiteit',
        about2_text:
          'Bier hoeft niet altijd maar “speciaal” te zijn. Het mag naar de smaak van de gebroeders Blaes zelfs behoorlijk toegankelijk zijn, waarbij de doordrinkbaarheid een belangrijke factor is. Toegankelijk, maar zonder enige concessie op kwalitatief hoogwaardige en pure ingrediënten. Degelijkheid zonder fratsen.',
        about2_btn: 'Ontdek onze bieren',
        product_btn: 'Toevoegen aan winkelmand',
        product_out_of_stock: 'Binnenkort verkrijgbaar!',
        view_product: 'Bekijken',
        age_question:
          'Om onze website te bezoeken moet je 18 jaar of ouder zijn',
        age_question2:
          'Vul je geboortedatum in om toegang te krijgen tot de website',
        header_basket: 'Winkelmandje',
        header_basket_checkout: 'Bestellen',
        header_basket_empty: 'Uw winkelmandje is leeg.',
        checkout: 'Bestellen',
        checkout_step1: 'Bestelling',
        checkout_step2: 'Uw gegevens',
        checkout_step3: 'Betalen',
        checkout_product: 'Product',
        checkout_price: 'Prijs',
        checkout_quantity: 'Hoeveelheid',
        checkout_shipping: 'Verzendkosten',
        checkout_free_shipping:
          'Gratis verzendkosten bij een bestelling van € 75,- ',
        checkout_total: 'Totaal',
        checkout_order: 'Volgende',
        checkout_no_data: 'U heeft geen producten in uw winkelmand.',
        checkout_no_data_btn: 'Verder met winkelen',
        checkout_firstName: 'Voornaam',
        checkout_lastName: 'Achternaam',
        checkout_email: 'Email',
        billingAddress: 'Factuuradres',
        sameAsBilling: 'Verzendingsadres is hetzelfde als het factuuradres',
        shippingAddress: 'Verzendingsadres',
        checkout_streetAndNumber: 'Adres',
        checkout_postalcode: 'Postcode',
        checkout_city: 'Plaats',
        checkout_country: 'Land',
        checkout_region: 'Provincie',
        checkout_pay: 'Betalen',
        checkout_pay_title: 'U wordt doorverwezen',
        checkout_redirect: 'Even geduld...',
        checkout_redirect_url: 'Klik op de onderstaande link om te betalen:',
        checkout_error: 'Oops er ging iets mis, probeer opnieuw',
        checkout_netherlands: 'Nederland',
        checkout_germany: 'Duitsland',
        checkout_terms: 'Ik ga akkoord met de algemene ',
        checkout_terms2: 'voorwaarden',
        de_shipping_cost:
          'Voor Duitsland rekenen wij een extra € 4,75 verzendkosten per product',
        required: 'Dit veld is vereist!',
        email_invalid: 'Verkeerd email adres!',
        checkout_url: 'Betaallink',
        success: 'Bedankt voor uw bestelling!',
        success_paid:
          'U heeft betaald, er is een bevestigingsmail gestuurd naar',
        success_status: 'De status van uw bestelling is',
        success_checkout: 'Betaling hervatten',
        back_home: 'Terug naar de homepagina',
        contact: 'Contact',
        contact_text:
          'Heeft u een vraag of wilt u meer informatie over een van onze producten? Gebruik onderstaand contactformulier en wij nemen zo spoedig mogelijk contact met u op.',
        contact_name: 'Naam',
        contact_email: 'Email',
        contact_message: 'Bericht',
        contact_phone: 'Telefoon',
        contact_company: 'Bedrijfsnaam',
        contact_business: 'Zakelijk',
        contact_submit: 'Versturen',
        contact_success:
          'Bericht verstuurd! Wij zullen zo spoedig mogelijk reageren.',
        contact_error: 'Er is iets fout gegaan, probeer het later opnieuw.',
        footer_link: 'Links',
        footer_address: 'Adres',
        footer_street: 'Oud Heinstraat 73',
        footer_postalcode: '1544XB Zaandijk',
        footer_region: 'Noord-Holland',
        footer_country: 'Nederland',
        more: 'Meer',
        header_shops: 'Verkooppunten',
        read_more: 'Meer Lezen',
        blog_title: 'Blog',
        'header_#blog': 'Blog',
        beer_specials_title: 'Specials',
        beer_specials_text:
          'Achter alle bieren van Blaes zit een persoonlijk verhaal geïnspireerd door familie, het heden, het verleden en door de (Zaan)streek. De bieren zijn direct verbonden aan onze persoonlijkheid en daarom zullen we geen bieren brouwen uit commercieel oogpunt als we het niet zélf zouden drinken.',
        beer_molenklap_title: 'Blaes molenklap kruidenbitter',
        beer_molenklap_text:
          'Een Zaanse kruidenbitter van graanalcohol uit eigen stokerij. Een samenwerking van Zaanshine Distileerderij en Blaes Bier. Het perfecte kruidenbittertje om je glas Blaes Gold mee te vergezellen.',
        beer_geitenkaas_title: 'Geitenbierkaas',
        beer_geitenkaas_text:
          'Zaanse geiten, Zaanse melk, Zaanse boeren, Zaanse kaasmakerij, Zaanse bierbrouwer, Zaans bier, veel geduld en vooral veel passie voor eerlijke producten. Biologisch, rauwmelks, ambachtelijk, lokaal en vooral heel erg lekker! Overheerlijk geitenkaasje, gerijpt in een badje van Blaes Tripel 777.',
        beers: {
          Gold_title: 'Een ‘Zaanse Helles’ volgens het Duitse Reinheitsgebot',
          Gold_text: `… opdat bier alleen mout, hop, water en gist bevat.

          Strogeel van kleur, moutig, licht zoetig, verfrissend, doordrinkbaar en vol van smaak.
          Bevat Duitse mouten, hopsoorten en gist. Gemaakt met water uit de karakteristieke
          Oer-Hollandse duinen.
          Een recept vol toewijding, volharding en nieuwsgierigheid.`,
          Gold_description1: 'Cat.1 Bier | stamwortgehalte 11,5°P',
          Gold_description2: 'Alc.4,8% vol. | 4°C',
          '777_title': 'Een Tripel van Zaanse bodem',
          '777_text': `… speciaal bier van hoge gisting, koud gelagerd met hergisting op de fles en fust.

          Amber van kleur, moutig, fruitig, soepel, licht bitter, volle body, verfijnd complex, toegankelijk en vol van smaak.
          Met subtiele tonen van karamel en donker fruit.
          Een combinatie van Belgische abdijgist, Duitse mouten, Sloveense hopsoorten, ruwe rietsuiker en water uit de karakteristieke oer-Hollandse duinen.`,
          '777_description1': 'Cat.s Bier | stamwortgehalte 15,8°P',
          '777_description2': 'Alc.7,77% vol. | 7.77°C',
          Tsar_title: 'Een zachte en heldere Brown Porter',
          Tsar_text: `Het standbeeld van ‘Tsaar Peter de Grote’ prijkt ﬁer op het midden van de Dam in Zaandam.
          De man verantwoordelijk voor de modernisering en hervorming van Rusland.
          Het symbool van nieuwsgierigheid, leergierigheid, toewijding en volharding.
          
          Zo kwam Peter I Aleksejevitsj Romanov in 1697 terecht in Zaandam om het vak te leren van botenbouwer.
          Een jaar later, in Engeland, werd hij verliefd op hun donkere bieren; Porters en Stouts.
          Zowaar de oorsprong van de ‘Russian Imperial Stout’!`,
          Tsar_description1: 'Cat.1 Bier | stamwortgehalte 14,4°P',
          Tsar_description2: 'Alc.6,5% vol. | 7°C',
          Weizen_title: 'Een zomers Zaanse klassieker',
          Weizen_text: `…gebrouwen volgens het Duitse Reinheitsgebot.

          Een klassiek Beiers tarwebier.
          Ongefilterd, van hoge gisting met hergisting op fles.
          Vol maar zacht, toegankelijk, moutig, licht bitter, verfrissend en zeer doordrinkbaar.
          
          Uitermate geschikt voor foodpairing. Gebrouwen met ingrediënten van de hoogste kwaliteit.`,
          Weizen_description1: 'Cat.1 Bier | stamwortgehalte 12,3°P',
          Weizen_description2: 'Alc.5,1% vol. | 5°C',
          IPA_title: 'Maritiem erfgoed in een fles',
          IPA_text: `…waar de reis ook heenging, bier hield ons altijd en overal gezelschap.

          Een zeer doordrinkbare kruising tussen een Britse Pale Ale en een Amerikaanse IPA met een subtiele combinatie van selectief gekweekte inheems Amerikaanse hopsoorten en
          Europese aroma- en bitterhop.
          
          Een relatief moderne bierstijl met erfgoed uit de Nieuwe Wereld, en Oost-Indië tonen het belang van bier door de geschiedenis heen.`,
          IPA_description1: 'Cat.1 Bier | stamwortgehalte 11,2°P',
          IPA_description2: 'Alc.4,8% vol. | 6°C'
        },
        specials_title: 'bierproeverij / tap show / bier & spijs',
        specials_text: `Wil je de Blaes Bier ervaring zo optimaal mogelijk beleven?
        Dan is het binnenkort mogelijk om de brouwer -Elian Blaes- van Blaes Bier te boeken voor een aantal events.
        Neem contact op voor de mogelijkheden.`,
        workshop_title: 'Bierproeverij',
        workshop_text:
          'Een gezellige bierproeverij op locatie in een ongedwongen sfeer. Brouwer Elian Blaes vertelt over de bieren van Blaes en geeft toelichting over de smaken, de stijlen en de verhalen achter de bieren.',
        tapshow_title: 'Tap show',
        tapshow_text:
          'Geef je (bedrijfs)feestje, bruiloft of evenement een extra dimensie met de luxe tapkast van Blaes. Heerlijk vers bier van de tap mét barmedewerker!',
        bbq_title: 'Bier & spijs',
        bbq_text:
          'In samenwerking met diverse horecagelegenheden organiseert Blaes smakelijke BIER & SPIJS avonden, waarbij het eten en de bieren naadloos aansluiten en zorgen voor een geweldige smaakbeleving.',
        specials_contact_title: 'Meer informatie',
        specials_contact_btn: 'Contact opnemen',
        media_title: 'Media Gallerij',
        impressions_title: 'Media Impressies',
        articles_title: 'Media Artikelen',
        videos_title: "Video's",
        family: 'Zaanse Families',
        history: 'Zaanse Geschiedenis',
        culture: 'Zaans Erfgoed'
      }
    })
  })
}
