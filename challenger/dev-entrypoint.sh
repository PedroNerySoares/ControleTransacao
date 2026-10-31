#!/bin/bash
set -e

echo "Compilando o projeto Java..."
mvn -DskipTests compile

echo "Iniciando monitoramento dos fontes Java..."

(
  while inotifywait -r -q \
    -e close_write,create,delete,move \
    src/main/java src/main/resources 2>/dev/null
  do
    echo "Alteração detectada. Recompilando..."
    mvn -q -DskipTests compile || echo "Falha na compilação; aguardando nova alteração."
  done
) &

exec mvn spring-boot:run