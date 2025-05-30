#!/bin/bash

echo "🎯 Gerando snapshot com DELETE mode..."

# Gera o snapshot
./pocketbase migrate collections

# Encontra o arquivo de snapshot mais recente
LATEST_SNAPSHOT=$(ls -t pb_migrations/*_collections_snapshot.js | head -n1)

if [ -n "$LATEST_SNAPSHOT" ]; then
    echo "📝 Editando snapshot: $LATEST_SNAPSHOT"
    
    # Muda false para true na última linha
    sed -i '' 's/app\.importCollections(snapshot, false)/app.importCollections(snapshot, true)/g' "$LATEST_SNAPSHOT"
    
    echo "🗑️ Removendo migrations antigas..."
    
    # Remove todas as outras migrations, mantendo só o snapshot mais recente
    find pb_migrations/ -name "*.js" ! -name "$(basename "$LATEST_SNAPSHOT")" -delete
    
    echo "✅ Snapshot gerado com DELETE mode ativado!"
    echo "🧹 Migrations antigas removidas!"
    echo "📁 Arquivo final: $LATEST_SNAPSHOT"
    
    # Mostra o que sobrou
    echo "📋 Migrations restantes:"
    ls -la pb_migrations/
else
    echo "❌ Erro: Snapshot não encontrado"
fi 