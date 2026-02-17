# To-Do App – Programowanie Funkcyjne

## Opis projektu

Projekt przedstawia prostą aplikację typu To-Do, stworzoną w bibliotece React z wykorzystaniem podejścia charakterystycznego dla programowania funkcyjnego. Aplikacja umożliwia dodawanie zadań, oznaczanie ich jako wykonane oraz usuwanie ich z listy.

Celem projektu było:
- zastosowanie funkcyjnych komponentów React,
- oddzielenie logiki aplikacji od warstwy prezentacji,
- wykorzystanie niemutowalnych struktur danych,
- uruchomienie aplikacji w środowisku kontenerowym Docker.

Projekt został zrealizowany w sposób umożliwiający łatwą analizę kodu oraz prostą obronę ustną.

---

## Zastosowane technologie

- JavaScript (ES6+)
- React (funkcyjne komponenty)
- Vite
- HTML / CSS
- Docker
- nginx

---

## Programowanie funkcyjne w projekcie

W projekcie zastosowano podstawowe założenia programowania funkcyjnego:

- **Czyste funkcje**  
  Logika aplikacji (dodawanie, usuwanie i zmiana statusu zadań) została zaimplementowana jako funkcje, które:
  - przyjmują dane wejściowe,
  - nie modyfikują ich bezpośrednio,
  - zwracają nowe dane jako wynik.

- **Niemutowalność danych**  
  Stan aplikacji nie jest modyfikowany bezpośrednio. Do pracy na danych użyto metod takich jak:
  - `map`
  - `filter`
  - operator rozproszenia (`...`)

- **Separacja logiki i widoku**  
Logika aplikacji (dodawanie, usuwanie i zmiana statusu zadań) została zaimplementowana z wykorzystaniem czystej funkcji typu reducer, która na podstawie aktualnego stanu i akcji oblicza nowy stan aplikacji. Reducer został użyty w custom hooku, co pozwala na pełną separację logiki od warstwy widoku.


---

## Funkcjonalności aplikacji

- dodawanie nowych zadań do listy,
- oznaczanie zadań jako wykonane lub niewykonane,
- usuwanie zadań,
- dynamiczne renderowanie listy zadań,
- czytelny, estetyczny interfejs użytkownika.

---

## Wygląd aplikacji

<img width="1435" height="556" alt="image" src="https://github.com/user-attachments/assets/6cd60f6b-e612-40e6-8630-0d3a1a722b7a" />




---

## Uruchomienie projektu lokalnie (Docker)

### Wymagania
- zainstalowany Docker Desktop

### Kroki uruchomienia

1. Sklonuj repozytorium:
```bash
   git clone https://github.com/AleksandraRokita/ToDoList.git
```

2. Przejdź do katalogu projektu:
```bash
   cd ToDoList
```

3. Zbuduj obraz Dockera:
```bash
   docker build -t todo-react-app .
```

4. Uruchom kontener:
```bash
   docker run -p 8080:80 todo-react-app
```

5. Otwórz w przeglądarce:
```bash
   http://localhost:8080
```
