# FOLIO

Lector de libros EPUB instalable (PWA), pensado para celular. Los libros se guardan solo en el dispositivo.

## Subir a GitHub (desde la página web)
1. Abre tu repositorio → **Add file → Upload files**.
2. Arrastra TODO lo que hay dentro de esta carpeta (archivos + carpetas `lib` y `fonts`).
3. Toca **Commit changes**. Los archivos con el mismo nombre se reemplazan.
4. Solo la primera vez: **Add file → Create new file**, nombre `.nojekyll`, vacío → **Commit changes**.
5. Solo la primera vez: **Settings → Pages →** Branch `main`, carpeta `/ (root)` → **Save**.

## Publicar una versión nueva
Antes de subir, abre `sw.js` y cambia `folio-v3` por el siguiente número (`folio-v4`...).
Los celulares mostrarán **NUEVA VERSIÓN · TOCA PARA ACTUALIZAR**. Los libros y minutos no se borran.

## Respaldo
Botón **RESPALDO** en la biblioteca: compartir libros, copia completa o copia de minutos.
Para restaurar: **AÑADIR LIBROS** y elegir el archivo.
