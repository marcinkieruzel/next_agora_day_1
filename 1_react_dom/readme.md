# SSR » wstęp

1. Celem zadania jest przetestowanie działania Server Side Renderingu. W naszym wypadku zrobimy jego prostą wersję bez pełnej automatyzacji. 
2. W pliku `component.js` stwórz komponent Reactowy zawierający button. Po kliknięciu w button wyślij zapytanie do endpointa `https://api.whatdoestrumpthink.com/api/v1/quotes/random` – to zabawne api wygeneruje randomowy cytat z Donalda Trumpa. Wczytaj go do komponentu. Uwaga w naszym wypadku musisz napisać kod bez użycia jsx. Skorzystaj z narzędzia https://babeljs.io/repl/ aby wygenerować komponent bez jsx.
3. Wygeneruj plik `index.html`. Musisz do tego użyć noda. Treści jest już wstępnie przygotowana w pliku `index.js`. Przyjrzyj się treści pliku i spróbuj wyjaśnić co się w nim dzieje.
4. Uruchom plik `index.js` przy pomocy noda. Sprawdź wygenerowany HTML. Użyj do tego pliku `webpack.server.config.js`.
5. Napisz kod React w pliku `src/index.js` który uruchomi komponent. Zastanów się jakiej metody z obiektu `ReactDOM` użyć aby serwer side rendering zadziałał. Użyj do tego pliku `webpack.server.config.js`.