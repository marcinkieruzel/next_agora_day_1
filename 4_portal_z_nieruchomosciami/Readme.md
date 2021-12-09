# Portal z nieruchomościami 


1. Przygotowujesz portal z nieruchomościami
2. Twoim celem jest stworzenie filtra kategori (property_type) na stronie
3. Wczytaj wszystkie kategorie (property_type) do listy ( dane znajdziesz je w pliku `./categories.json`). Znajduje się ona w tagu o klasie `nav` w `/src/index.js`. Pozwól użytkownikowi aplikacji wybrać kategorię z listy.
4. Po wybraniu kategorii z listy od razu wyślij zapytanie do api – przykład zapytania ponżej. Wczytaj odpowiednie dane. Myśl Reactem ;) Każda zmiana musi miec odzwierciedlenie w state aplikacji.
```http://centralvietnamrealty.noinputsignal.com/wp-json/cvr/v2/properties?page=1&limit=10&property_type=houses-villas```
5. Zauważasz jakieś problemy z wydajnością – jak można zoptymalizować takie zapytanie? Spróbj zajrzeć do biblioteki https://swr.vercel.app/ i zastanów się czy jest w stanie pomóc Ci w zoptymalizowaniu zapytań.