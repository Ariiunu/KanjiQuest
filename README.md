# Kanji no Tankyuu · 漢字の探求

App web para estudiar japonés en tres niveles, cada uno con su propio progreso: **かな** (los 213 hiragana y katakana, con tenten, combinados y extendidos), **JLPT N5** (79 kanjis) y **JLPT N4** (170 kanjis). Es un solo archivo (`index.html`), sin instalación ni dependencias de compilación: se abre directo en el navegador.

## Qué incluye
- **Panorama:** recorrido de todo el nivel agrupado por concepto, con orden de trazos y radicales (método del organizador previo).
- **Aprender:** grupos por concepto o 4 mundos por cantidad de trazos (en かな: hiragana, hiragana +, katakana, katakana +).
- **Repaso:** dificultad fácil / normal / difícil; repaso mixto, flashcards con repaso espaciado, escribir la lectura, completar la palabra, arma el kanji (radicales), construye la palabra, emparejar, contrarreloj, dibujar de memoria y quiz estilo JLPT. Las rondas priorizan lo que fallaste y lo que llevas más tiempo sin ver, y hay un modo para repasar los fallos.
- **Biblioteca:** filtros por grupo, trazos y estado (no visto / visto / aprendido), con selección múltiple. En かな muestra las tablas de hiragana y katakana (básico, tenten, combinados y extendido).
- **Inicio:** árbol de sakura que florece con cada kanji aprendido y kanji del día con orden de trazos animado.
- **Diseño:** versión para PC (barra lateral) y para celular (barra inferior), con iconos propios en vez de emojis.
- **Logros:** 15 sellos estilo hanko.

El progreso se guarda en el navegador (`localStorage`).

## Cómo usarla
Abre `index.html` en el navegador. Publicada en internet (Vercel o GitHub Pages) también se puede instalar como app (PWA) y funciona sin conexión: en Android o Chrome con el botón «Instalar app», en iPhone con Compartir → Agregar a inicio. Los cambios de `index.html` llegan solos la próxima vez que se abra con internet; si cambias los iconos, sube `VERSION` en `sw.js`. Para publicarla gratis, activa GitHub Pages en el repositorio (Settings → Pages → rama `main`, carpeta `/root`).

## Datos y créditos
- Lista de kanjis N4 basada en kanjikana.com (por trazos); N5 según la lista de Tanos. Lecturas, significados en español, vocabulario y radicales escritos a mano: conviene revisarlos con un diccionario.
- Orden de trazos: [KanjiVG](https://kanjivg.tagaini.net) © Ulrich Apel, licencia CC BY-SA 3.0.
- Tipografías: Zen Maru Gothic y Shippori Mincho (Google Fonts).
