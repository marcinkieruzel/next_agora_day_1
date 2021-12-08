# Mikrowarsztat – theme switcher

1. Twoim celem jest stworzenie aplikacji prezentującej standardowy tekst "Lorem ipsum". Treści dla twojej aplikacji zostały umieszczone w pliku `data.json`
2. Stwórz aplikację prezentując artykuł z podziałem na sekcje – zgodnie ze strukturą plików w katalogu `src`.
3. Dodatkowo twoim celem jest stworzenie łatwego sposobu zmiany motywu strony (wersji kolorystycznej, wielkości tekstu oraz rodzaju fonta). W tym celu najłatwiej posłużyć się zmiennymi css.
4. Stwórz kontekst dla aplikacji w pliku `app.js`. Powinien on przetrzymywać informacje o aktualnej wersji kolorystycznej, o foncie i wielkości tekstu. Do przetrzymania tej informacji użyj hooka useReducer w komponencie `App.js`.
5. Również w komponencie `App.js` umieść tag `style` z odpowiednimi stylami reagującymi na zmiany w kontekście. Aby wstrzyknąć style do sekcji `head` strony użyj biblioteki `react-helmet`.
6. W pliku `src/header.js` stwórz przełącznik do zmiany wersji kolorystycznej strony, wielkości tekstu oraz rodzaju fonta (wybierz kilka swoich ulubionych fontów).