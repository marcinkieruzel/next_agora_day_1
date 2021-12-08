# Mikrowarsztat – sklep internetowy

1. Twoim zadaniem jest stworzenie sklepu internetowego – oczywiście jego uproszczonej wersji
2. Stwórz stronę główną projektu – wczytaj na niej listę wszystkich produktów
3. Utwórz też podstrony dla każdego pojedynczego produktu
4. Stwórz koszyk w headerze strony – powinien on przetrzymywać stan koszyka i obliczać łączna kwotę zakupów. Stwórz też osobną stronę dla koszyka z podsumowanem (listą) wszystkich produktów znajdujących się w nim.
5. Feed produktowy znajduje się w pliku `products.json` – stwórz z niego endpoint przy pomocy narzędzia `json-server` 

– aby stworzyć routing użyj biblioteki `react-router-dom`
– stan koszyka powinien być przetrzymywany w kontekście strony `context api`
– użyj hooka `useReducer` do maniplulacji stanem koszyka
– jeśli wystarczy Ci czasu spróbuj przerobić aplikację na wersję typescript
– do stylowania możesz użyć biblioteki bootstrap – w projekcie są też zainstalowane css-modules