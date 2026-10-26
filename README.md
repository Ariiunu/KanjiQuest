# Kanji no Tankyuu · 漢字の探求

App web para estudiar japonés en tres niveles, cada uno con su propio progreso: **かな** (los 224 hiragana y katakana, con tenten, combinados y extendidos), **JLPT N5** (79 kanjis) y **JLPT N4** (170 kanjis). No necesita instalación ni compilación: se abre directo en el navegador.

## Qué incluye
- **Niveles como camino:** Nivel 0 かな (empieza aquí), Nivel 1 N5 y Nivel 2 N4.
- **Estudiar hoy:** un botón en el inicio arma la sesión sola: primero los repasos pendientes (repaso espaciado con todos los ejercicios) y después algo nuevo (una lección de kana o 5 kanjis nuevos).
- **Lecciones de kana:** 40 lecciones de unos 5 kana cada una (trazo, sonido y mini quiz con solo lo que ya conoces), con las reglas como pasos propios del camino (tenten, maru, combinados, っ pequeña, vocales largas, katakana, extendido).
- **Audio:** voz japonesa del dispositivo (por ejemplo Kyoko en iPhone y Mac) en fichas, palabras y el ejercicio «Escucha y elige»; un sonido al acertar y otro al fallar.
- **Fichas que se arrastran:** con el mouse o el dedo, en panorama, lecciones y flashcards.
- **Panorama:** recorrido de todo el nivel agrupado por concepto, con orden de trazos y radicales (método del organizador previo).
- **Aprender:** en kanji, grupos por concepto o 4 mundos por cantidad de trazos; en かな, lecciones y reglas.
- **Juegos:** Lluvia (responde antes de que el kana o kanji toque el suelo; vidas, combos y niveles), Memoria (parejas), Contrarreloj, Empareja, Atrapa (toca solo el que te piden cuando asoma), しりとり (encadena palabras por su último kana) y ¿Cuál no va? (encuentra el intruso: fila, vocal o silabario en kana; grupo de significado en kanji), con récords. Usan lo que ya viste en el nivel.
- **Repaso:** dificultad fácil / normal / difícil; repaso mixto, escucha y elige, flashcards, escribir la lectura, completar la palabra, arma el kanji (radicales), construye la palabra, dibujar de memoria y quiz estilo JLPT. Las rondas priorizan lo que fallaste y lo que llevas más tiempo sin ver. En かな se practica todo lo visto o las lecciones que elijas.
- **Práctica estilo JLPT (N5 y N4):** los kanjis dentro de frases como en el examen (lectura, escritura y la palabra que falta), ordenar los cuatro pedazos de una frase (文の組み立て), textos cortos y avisos de la vida real, escucha de frases y conversaciones, y un **simulacro** cronometrado con el resultado de cada sección. Cada ficha de kanji muestra además una frase de ejemplo con audio y su lectura. Todo el contenido es original.
- **Demuestra lo que sabes:** para marcar como aprendido algo que todavía no te toca (un kanji, una fila o una lección de kana), primero hay un test corto; una lección solo cuenta como completada con el 80 % de aciertos.
- **Recordatorio diario:** quien instaló la app en el celular puede activarlo en Ajustes y elegir la hora; solo llega los días que aún no ha estudiado (ver «Recordatorios» abajo).
- **Biblioteca:** filtros por grupo, trazos y estado (no visto / visto / aprendido), con selección múltiple. En かな muestra las tablas de hiragana y katakana.
- **Inicio:** árbol de sakura que florece con cada kanji aprendido y kanji (o kana) del día.
- **Logros:** calendario de racha con los días estudiados y 15 sellos estilo hanko.
- **Ajustes** (botón de engranaje en el inicio): modo claro u oscuro, sonidos, recordatorio diario y cambio de nivel.
- **Modo claro y oscuro:** se cambia con el botón de luna o sol del inicio (en PC, en la barra lateral) o desde Ajustes. Empieza en claro.
- **Diseño:** versión para PC (barra lateral) y para celular (barra inferior).

El progreso se guarda en el navegador (`localStorage`), por separado para cada nivel. Desde Ajustes → «Guardar copia» se descarga un archivo con el progreso de todos los niveles y la racha; con «Recuperar copia» se carga en otro celular o navegador (muestra qué trae la copia antes de reemplazar nada).

## Archivos
- `index.html`: la página.
- `styles.css`: estilos, incluido el modo oscuro.
- `app.js`: la lógica de la app.
- `data.js`: kanjis N4 y N5, kana, vocabulario y radicales. Formato de cada kanji: `kanji|trazos|on|kun|significado|inglés|palabra lectura significado;...|mnemotecnia`.
- `strokes.js`: orden de trazos de KanjiVG.
- `jlpt.js`: frases de ejemplo (una por kanji, con lectura y traducción), textos, avisos y conversaciones para la práctica estilo JLPT. Formato de cada frase: `kanji|frase con / entre los cuatro pedazos|lectura en hiragana|traducción`.
- `api/`: funciones del servidor para los recordatorios (solo se usan publicada en Vercel), con `package.json` y `vercel.json`.
- `.github/workflows/recordatorio.yml`: llama a los recordatorios cada hora.
- `sw.js`: service worker para usarla sin conexión.
- `tests/run.html`: pruebas automáticas (ver abajo).

## Cómo usarla
Ábrela desde un servidor (por ejemplo `npx http-server`) o publicada en internet (Vercel o GitHub Pages). Publicada también se puede instalar como app (PWA) y funciona sin conexión: en Android o Chrome con el botón «Instalar app», en iPhone con Compartir → Agregar a inicio. Los cambios en los archivos llegan solos la próxima vez que se abre con internet; si agregas o quitas archivos de la lista de `sw.js`, sube su `VERSION`. Para publicarla gratis, activa GitHub Pages en el repositorio (Settings → Pages → rama `main`, carpeta `/root`).

## Recordatorios (Vercel)
La app funciona igual sin esto; solo hace falta para los avisos diarios en el celular.

1. Crea una cuenta en [vercel.com](https://vercel.com) con tu GitHub e importa este repositorio (Add New → Project). No hay que configurar nada para compilar.
2. En el proyecto de Vercel: Storage → Marketplace → **Upstash for Redis** (plan gratis) y conéctalo al proyecto. Eso agrega solas las variables de la base de datos.
3. Genera las claves de los avisos en la terminal con `npx web-push generate-vapid-keys` y agrégalas en Settings → Environment Variables: `VAPID_PUBLIC_KEY`, `VAPID_PRIVATE_KEY` y `CRON_SECRET` (una contraseña larga inventada). La clave privada y `CRON_SECRET` nunca van en el repositorio.
4. Vuelve a publicar (Deployments → Redeploy) para que tome las variables.
5. Para que cada uno reciba el aviso a la hora que eligió: en GitHub, Settings → Secrets and variables → Actions, agrega el secreto `CRON_SECRET` (el mismo valor) y la variable `APP_URL` con la dirección de la app en Vercel (por ejemplo `https://kanji-quest.vercel.app`). Sin este paso, Vercel igual manda un aviso al día a las 23:00 UTC (19:00 o 20:00 en Chile) a quienes no hayan estudiado.

En iPhone los avisos necesitan iOS 16.4 o más y la app agregada al inicio; en Android funcionan desde Chrome. GitHub pausa las tareas programadas si el repositorio pasa 60 días sin cambios; se reactivan desde la pestaña Actions.

## Pruebas
Abre `tests/run.html` desde el mismo servidor. Abre la app en cada nivel, completa las lecciones y «Estudiar hoy», y juega todos los modos de repaso en las tres dificultades, la práctica estilo JLPT y los juegos. Muestra ✓ o ✗ por nivel y respalda y restaura tu progreso, así que se puede correr sin perder nada.

## Datos y créditos
- Lista de kanjis N4 basada en kanjikana.com (por trazos); N5 según la lista de Tanos. Lecturas, significados en español, vocabulario y radicales escritos a mano y revisados; el número de trazos se comprobó contra KanjiVG.
- Orden de trazos: [KanjiVG](https://kanjivg.tagaini.net) © Ulrich Apel, licencia CC BY-SA 3.0.
- Tipografías: Zen Maru Gothic y Shippori Mincho (Google Fonts).
