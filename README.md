# Kanji no Tankyuu · 漢字の探求

App web para estudiar japonés en tres niveles, cada uno con su propio progreso: **かな** (los 213 hiragana y katakana, con tenten, combinados y extendidos), **JLPT N5** (79 kanjis) y **JLPT N4** (170 kanjis). No necesita instalación ni compilación: se abre directo en el navegador.

## Qué incluye
- **Niveles como camino:** Nivel 0 かな (empieza aquí), Nivel 1 N5 y Nivel 2 N4.
- **Estudiar hoy:** un botón en el inicio arma la sesión sola: primero los repasos pendientes (repaso espaciado con todos los ejercicios) y después algo nuevo (una lección de kana o 5 kanjis nuevos).
- **Lecciones de kana:** 40 lecciones de unos 5 kana cada una (trazo, sonido y mini quiz con solo lo que ya conoces), con las reglas como pasos propios del camino (tenten, maru, combinados, っ pequeña, vocales largas, katakana, extendido).
- **Audio:** voz japonesa del dispositivo (por ejemplo Kyoko en iPhone y Mac) en fichas, palabras y el ejercicio «Escucha y elige»; un sonido al acertar y otro al fallar.
- **Fichas que se arrastran:** con el mouse o el dedo, en panorama, lecciones y flashcards.
- **Panorama:** recorrido de todo el nivel agrupado por concepto, con orden de trazos y radicales (método del organizador previo).
- **Aprender:** en kanji, grupos por concepto o 4 mundos por cantidad de trazos; en かな, lecciones y reglas.
- **Juegos:** Lluvia (responde antes de que el kana o kanji toque el suelo; vidas, combos y niveles), Memoria (parejas), Contrarreloj y Empareja, con récords. Usan lo que ya viste en el nivel.
- **Repaso:** dificultad fácil / normal / difícil; repaso mixto, escucha y elige, flashcards, escribir la lectura, completar la palabra, arma el kanji (radicales), construye la palabra, dibujar de memoria y quiz estilo JLPT. Las rondas priorizan lo que fallaste y lo que llevas más tiempo sin ver. En かな se practica todo lo visto o las lecciones que elijas.
- **Biblioteca:** filtros por grupo, trazos y estado (no visto / visto / aprendido), con selección múltiple. En かな muestra las tablas de hiragana y katakana.
- **Inicio:** árbol de sakura que florece con cada kanji aprendido y kanji (o kana) del día.
- **Logros:** calendario de racha con los días estudiados, 15 sellos estilo hanko y ajustes (apariencia y sonidos).
- **Modo oscuro:** automático según el sistema, o fijo en claro u oscuro desde Logros → Ajustes.
- **Diseño:** versión para PC (barra lateral) y para celular (barra inferior).

El progreso se guarda en el navegador (`localStorage`), por separado para cada nivel.

## Archivos
- `index.html`: la página.
- `styles.css`: estilos, incluido el modo oscuro.
- `app.js`: la lógica de la app.
- `data.js`: kanjis N4 y N5, kana, vocabulario y radicales. Formato de cada kanji: `kanji|trazos|on|kun|significado|inglés|palabra lectura significado;...|mnemotecnia`.
- `strokes.js`: orden de trazos de KanjiVG.
- `sw.js`: service worker para usarla sin conexión.
- `tests/run.html`: pruebas automáticas (ver abajo).

## Cómo usarla
Ábrela desde un servidor (por ejemplo `npx http-server`) o publicada en internet (Vercel o GitHub Pages). Publicada también se puede instalar como app (PWA) y funciona sin conexión: en Android o Chrome con el botón «Instalar app», en iPhone con Compartir → Agregar a inicio. Los cambios en los archivos llegan solos la próxima vez que se abre con internet; si agregas o quitas archivos de la lista de `sw.js`, sube su `VERSION`. Para publicarla gratis, activa GitHub Pages en el repositorio (Settings → Pages → rama `main`, carpeta `/root`).

## Pruebas
Abre `tests/run.html` desde el mismo servidor. Abre la app en cada nivel, completa las lecciones y «Estudiar hoy», y juega todos los modos de repaso en las tres dificultades. Muestra ✓ o ✗ por nivel y respalda y restaura tu progreso, así que se puede correr sin perder nada.

## Datos y créditos
- Lista de kanjis N4 basada en kanjikana.com (por trazos); N5 según la lista de Tanos. Lecturas, significados en español, vocabulario y radicales escritos a mano y revisados; el número de trazos se comprobó contra KanjiVG.
- Orden de trazos: [KanjiVG](https://kanjivg.tagaini.net) © Ulrich Apel, licencia CC BY-SA 3.0.
- Tipografías: Zen Maru Gothic y Shippori Mincho (Google Fonts).
