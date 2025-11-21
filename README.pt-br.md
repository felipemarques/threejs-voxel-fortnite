# Voxel Fortnite

Um jogo battle royale em estilo voxel inspirado em Fortnite, construído com Three.js. Sobreviva contra inimigos controlados por IA em uma zona de tempestade que encolhe enquanto gerencia seus recursos e explora o mundo gerado proceduralmente.

![Menu Principal](docs/main-screen.jpg)

## 🎮 Visão Geral do Jogo

Voxel Fortnite é um jogo de sobrevivência 3D baseado em navegador onde você deve eliminar todos os inimigos antes que a tempestade se feche. O jogo apresenta gráficos em estilo voxel que lembram Minecraft, combinados com mecânicas de battle royale similares ao Fortnite.

![Gameplay](docs/game-demo-1.jpg)

## 🎯 Objetivo

**Objetivo Principal:** Elimine todos os inimigos no mapa para alcançar a vitória.

**Objetivos Secundários:**
- Sobreviva à zona de tempestade que encolhe
- Gerencie sua stamina enquanto explora
- Colete armas e recursos de baús de loot
- Mantenha sua vida e escudo

## 🕹️ Controles

### Movimentação
- **W/A/S/D** - Mover para frente/esquerda/trás/direita
- **Espaço** - Pular
- **Mouse** - Olhar ao redor (controle de câmera)
- **Clique** - Travar ponteiro / Iniciar jogo

### Combate
- **Clique Esquerdo** - Atirar / Socar
- **Clique Direito** - Mirar (zoom da sniper)
- **R** - Recarregar arma
- **1/2/3/4** - Trocar armas (hotbar)

### Interação
- **E** - Interagir com baús e objetos
- **ESC** - Menu de pausa

## 🎲 Recursos do Jogo

### Sistema de Combate
- **4 Tipos de Armas:**
  - **Soco:** Arma corpo a corpo, 10 de dano, 0.2s de cooldown
  - **Pistola:** 20 de dano, 12/60 munição, 0.5s de cooldown
  - **Rifle:** 25 de dano, 30/120 munição, 0.15s de cooldown
  - **Sniper:** 100 de dano, 5/20 munição, 2.0s de cooldown com zoom

### Sistema de Stamina
- **Barra de Stamina:** Diminui ao socar rapidamente ou caminhar longas distâncias
- **Mecânica de Fadiga:** Após 20 socos consecutivos, você fica cansado por 3 segundos
- **Desgaste ao Caminhar:** Perde 0.5 de stamina a cada 10 metros percorridos
- **Recuperação:** Stamina regenera automaticamente com o tempo

### Estatísticas do Jogador
- **Vida (HP):** 100 pontos - sua força vital
- **Escudo:** 100 pontos - absorve dano antes da vida
- **Stamina:** 100 pontos - usada para socar e caminhar

### IA dos Inimigos
- **Comportamento Inteligente:**
  - Zumbis detectam e perseguem jogadores dentro de 25 metros
  - Movimento lateral para evitar serem alvos fáceis
  - Ataques corpo a corpo quando próximos (2 metros)
  - Recebem dano da tempestade quando fora da zona segura
  
- **Níveis de Dificuldade:**
  - **Fácil:** 50 HP, 2 de dano, movimento lento
  - **Médio:** 100 HP, 5 de dano, velocidade moderada
  - **Difícil:** 150 HP, 10 de dano, rápido e agressivo

### Mecânicas da Tempestade
- **Zona que Encolhe:** A zona segura diminui gradualmente com o tempo
- **Dano da Tempestade:** 1 HP por segundo quando fora da zona segura
- **Afeta Todos:** Tanto jogadores quanto inimigos recebem dano da tempestade
- **Timer Configurável:** Ajuste a duração da tempestade nas configurações (padrão: 180 segundos)

### Sistema de Loot
- **Baús:** Espalhados pelo mapa, especialmente dentro de casas
- **Armas:** Encontre armas melhores para aumentar seu poder de fogo
- **Munição:** Colete munição para suas armas de fogo
- **Interativo:** Pressione **E** para abrir baús e coletar itens

### Geração de Mundo
- **Ambiente Voxel:** Estética blocada estilo Minecraft
- **Elementos Procedurais:**
  - 50+ árvores (variedades de Carvalho e Pinheiro)
  - 30+ rochas e obstáculos naturais
  - 8 casas com interiores acessíveis
  - Terreno de grama com variação de cores
  
### HUD & Dashboard

**Barras de Status (Inferior Esquerdo):**
- Barra de escudo (azul)
- Barra de vida (verde)
- Barra de stamina (dourada)

**Dashboard (Superior Esquerdo):**
- **FPS:** Contador de quadros por segundo
- **Enemies:** Número de inimigos vivos
- **Killed:** Inimigos eliminados
- **Distance:** Quilômetros percorridos
- **Memory:** Uso de RAM em MB

**Informações da Arma (Inferior Direito):**
- Nome da arma atual
- Contagem de munição (pente atual / munição total)

**Modo Debug (Opcional):**
- Ative nas configurações para ver IDs e nomes de objetos
- Exibe informações do alvo ao mirar em objetos

## ⚙️ Configurações & Personalização

Acesse o menu de configurações no menu principal ou tela de pausa:

### Configurações do Jogo
- **Dificuldade:** Fácil / Médio / Difícil
  - Afeta vida, dano e velocidade dos inimigos
  
- **Contagem de Inimigos:** 5-30 inimigos
  - Ajuste o número de zumbis no mapa
  
- **Tempo da Tempestade:** 60-300 segundos
  - Configure quanto tempo até a tempestade fechar completamente
  
- **Modo Debug:** Ligado / Desligado
  - Alterna sobreposição de informações de debug

### Persistência de Configurações
Todas as configurações são salvas no localStorage do navegador e persistem entre sessões.

## 🎨 Recursos Visuais

- **Estilo de Arte Voxel:** Gráficos blocados inspirados em Minecraft
- **Iluminação Dinâmica:** Sombras em tempo real e iluminação ambiente
- **Câmera em Terceira Pessoa:** Perspectiva por cima do ombro
- **Animações de Personagem:**
  - Animações de caminhada/corrida
  - Animações de soco (braços alternados)
  - Animações de movimento e ataque de inimigos
  
- **Barras de Vida:** Indicadores de vida flutuantes acima dos inimigos
- **Feedback de Dano:** Efeito de flash vermelho ao receber dano
- **Câmera Suave:** Segue o jogador com transições suaves

## 🏆 Vitória & Derrota

### Condição de Vitória
Elimine todos os inimigos no mapa para vencer o jogo. Uma tela de vitória aparecerá mostrando sua conquista.

### Condições de Derrota
- **Vida chega a 0:** Você morre e o jogo termina
- **Dano da tempestade:** Ficar fora da zona segura por muito tempo

### Tela de Game Over
- Exibe estatísticas finais
- Opção de reiniciar o jogo
- Retornar ao menu principal

## 🛠️ Detalhes Técnicos

### Construído Com
- **Three.js:** Renderização de gráficos 3D
- **JavaScript (ES6+):** Lógica e mecânicas do jogo
- **HTML5/CSS3:** Elementos de UI e HUD
- **Vite:** Servidor de desenvolvimento e ferramenta de build

### Performance
- **Alvo:** 60 FPS em navegadores modernos
- **Otimizado para Memória:** Pooling eficiente de objetos e limpeza
- **Suporte a Navegadores:** Chrome, Firefox, Edge, Safari (versões mais recentes)

### Recursos de Debug
Quando o modo debug está ativado:
- IDs e nomes de objetos exibidos na tela
- Informações de alvo do raycasting
- Estatísticas aprimoradas no dashboard

## 🚀 Começando

### Pré-requisitos
- Navegador web moderno (Chrome, Firefox, Edge, Safari)
- Node.js e npm (para desenvolvimento)

### Instalação

1. Clone o repositório:
```bash
git clone https://github.com/felipemarques/threejs-voxel-fortnite.git
cd voxel-fortnite
```

2. Instale as dependências:
```bash
npm install
```

3. Inicie o servidor de desenvolvimento:
```bash
npm run dev
```

4. Abra seu navegador e navegue para `http://localhost:5173`

### Build para Produção

```bash
npm run build
```

Os arquivos compilados estarão no diretório `dist/`.

## 🎮 Dicas de Gameplay

1. **Gerencie Sua Stamina:** Não fique spamando socos - você vai ficar cansado! Use armas de fogo quando possível.

2. **Observe a Tempestade:** Fique de olho no timer da tempestade e permaneça dentro da zona segura.

3. **Explore Casas:** Colete loot de baús dentro de prédios para melhores armas e munição.

4. **Use Cobertura:** Esconda-se atrás de árvores e rochas para evitar ataques inimigos.

5. **Zoom da Sniper:** Clique com o botão direito com o rifle sniper para dar zoom para tiros precisos.

6. **Recarregue Frequentemente:** Não seja pego com um pente vazio durante uma luta.

7. **Acompanhe a Distância:** Monitore sua distância percorrida para gerenciar o desgaste de stamina.

8. **Dificuldade Importa:** Comece no Fácil para aprender as mecânicas, depois aumente a dificuldade.

## 📝 Licença

Este projeto é open source e disponível para fins educacionais.

## 🙏 Agradecimentos

- Inspirado em Fortnite (Epic Games)
- Estética voxel inspirada em Minecraft (Mojang)
- Construído com a biblioteca Three.js

---

**Aproveite o jogo e boa sorte sobrevivendo!** 🎮🏆
