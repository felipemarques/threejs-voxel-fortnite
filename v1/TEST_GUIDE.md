# Guia de Testes Rápido - Servidor Autoritativo

## 🔧 Correções Aplicadas

1. **Bug Crítico Corrigido**: Tiros agora são enviados ao servidor sempre em modo multiplayer (não apenas quando há outros jogadores visíveis)
2. **Lag Compensation Simplificado**: Agora é opcional via flag `LAG_COMPENSATION_ENABLED = false` no servidor
3. **Teste Anti-Cheat Corrigido**: Comando de teste atualizado

---

## 🧪 Como Testar

### Pré-requisitos
- Servidor rodando: `npm run server`
- 2 abas/janelas do navegador abertas

### Test 1: Hit Detection Básico ✅

**Tab 1 & Tab 2**:
1. Ambos: Conectar ao mesmo room (ex: "ABC")
2. Ambos: Clicar "Start Match"
3. Tab 1: Mirar no jogador Tab 2 e atirar

**Console do Servidor** deve mostrar:
```
[HIT] <id1> -> <id2> (Pistol: 25 dmg)
```

**Console do Browser (ambas as tabs)** deve mostrar:
```
[HIT CONFIRMED] <id1> -> <id2> [25 dmg, Pistol]
```

**Tab 2**: Saúde deve diminuir

---

### Test 2: Anti-Cheat (ROF) 🛡️

**Tab 1 - Console do Browser**:
```javascript
// Acessar a instância do jogo (varia conforme implementação)
// Opção 1: Se 'game' está no window
if (window.game && window.game.player) {
  for (let i = 0; i < 100; i++) {
    window.game.player.shoot();
  }
}

// Opção 2: Buscar no debugger
// No DevTools > Sources > Inspect 'this' dentro de qualquer método
// Ou adicione temporariamente: window.testPlayer = this.player no código
```

**Console do Servidor** deve mostrar múltiplas linhas:
```
[ANTI-CHEAT] <id> ROF/ammo violation for Pistol
[ANTI-CHEAT] <id> ROF/ammo violation for Pistol
...
```

**Tab 2**: Deve receber apenas ~5 hits (taxa válida 0.2s cooldown = 5/sec)

---

### Test 3: Múltiplos Tiros

**Tab 1**: Atirar 10 vezes manualmente (clique normal)

**Verificar**:
- Servidor loga todos os 10 hits
- Tab 2 perde 250 HP (10 × 25 dmg)
- Ambos veem hit markers vermelhos

---

## 🐛 Se o Hit Detection Ainda Não Funcionar

### Debug Checklist:

1. **Verificar que o match iniciou**:
   - Console do servidor deve ter: `[match-start]`
   - Sem isso, `room.matchActive = false` e hits são ignorados

2. **Console do Browser** (Tab que atirou):
   ```javascript
   // No console, verificar se multiplayerClient existe
   window.game?.multiplayer?.socket?.readyState
   // Deve retornar 1 (OPEN)
   ```

3. **Adicionar log temporário** em `player.js` linha ~1050:
   ```javascript
   if (this.multiplayerClient && typeof this.multiplayerClient.sendShoot === 'function') {
       const direction = raycaster.ray.direction.clone();
       console.log('SENDING SHOOT:', direction, weapon.name); // <-- ADD THIS
       this.multiplayerClient.sendShoot(direction, weapon.name);
   }
   ```

4. **Console do Servidor** - adicionar log em `server.js` linha ~290:
   ```javascript
   else if (data.type === 'shoot' && data.direction) {
     console.log('[DEBUG] Received shoot from', id); // <-- ADD THIS
     processShoot(id, entry.room, data);
   }
   ```

---

## 📋 Sobre Lag Compensation

### O que é?
Compensa a latência de rede "rebobinando" as posições dos jogadores para onde estavam quando o atirador clicou.

### Exemplo:
- **Sem lag comp**: Você atira onde vê o inimigo (atrasado 100ms) → Miss ❌
- **Com lag comp**: Servidor rebobina 100ms → Hit onde você mirou ✅

### Quando usar?
- **Desligado (`false`)**: Teste local, debug, casual
- **Ligado (`true`)**: Jogo competitivo, servidores reais

### Como ativar?
Em `server.js` linha ~102:
```javascript
const LAG_COMPENSATION_ENABLED = true; // Mude para true
```

---

## ✅ Comandos Úteis

**Restart servidor**:
```bash
pkill -f "node server.js"
npm run server
```

**Ver logs do servidor em tempo real**:
```bash
# Servidor já mostra logs no console
# Procure por: [HIT], [ANTI-CHEAT], [ERROR]
```

**Refresh cliente** (Ctrl+Shift+R ou Cmd+Shift+R)

---

## 🎯 Resultado Esperado

Se tudo estiver OK:
- ✅ Servidor valida todos os tiros
- ✅ Impossível trapacear (ROF, ammo, hits falsos)
- ✅ Hit markers aparecem para todos
- ✅ Dano aplicado corretamente
