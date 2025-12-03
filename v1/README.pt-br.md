# Voxel Fortnite

Um jogo battle royale em estilo voxel inspirado em Fortnite, construído com Three.js. Sobreviva contra inimigos controlados por IA em uma zona de tempestade que encolhe enquanto gerencia seus recursos e explora o mundo gerado proceduralmente. Inclui modos Arena (skirmish rápido), Matrix (sandbox sem inimigos) e Studio (construção).

![Menu Principal](docs/main-screen.jpg)

## 🎮 Visão Geral do Jogo

Voxel Fortnite é um jogo de sobrevivência 3D baseado em navegador onde você deve eliminar todos os inimigos antes que a tempestade se feche. O jogo apresenta gráficos em estilo voxel que lembram Minecraft, combinados com mecânicas de battle royale similares ao Fortnite.

![Gameplay](docs/game-demo-1.jpg)

## 🎯 Objetivo

**Objetivo Principal:** Elimine todos os inimigos no mapa para alcançar a vitória (Survival/Arena). Matrix é um modo tranquilo sem inimigos; Studio permite construir livremente.

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
- **V** - Alternar modo de câmera (Primeira Pessoa / Terceira Pessoa)

### Combate
- **Clique Esquerdo** - Atirar / Socar (se sem munição/arma)
- **Clique Direito** - Mirar (zoom da sniper)
- **R** - Recarregar arma
- **1/2/3/4** - Trocar armas (hotbar)

### Interação
- **E** - Interagir com baús e objetos
- **ESC** - Menu de pausa
- **`** (Crase) - Alternar Console de Debug

### Controles Mobile
- **Joystick Esquerdo** - Mover
- **Área Direita da Tela** - Olhar/Mirar
- **Botões** - Atirar, Pular, Correr

## 🎲 Recursos do Jogo

### Modos de Jogo
- **Survival:** Novo modo hardcore sem tempestade, sem veículos, tamanho mínimo de mapa de 100m. Apresenta variantes especiais de zumbis e recompensas de loot do céu.
- **Arcade:** Loop clássico com tempestade, loot, inimigos e todos os recursos habilitados.
- **Arena:** Mapa menor com cobertura densa para partidas rápidas.
- **Matrix:** Sandbox sem inimigos para explorar e testar.
- **Studio:** Modo criativo com construção de blocos, redimensionar, mover/remover e flutuação opcional. Inclui todos os prefabs: Casas, Mansões, Cabanas, Prédios Pequenos, Planaltos, Rochas, Árvores (Carvalho/Pinheiro), Veículos (Carro/Caminhão/Ônibus/Motocicleta), Caixotes e spawn de NPCs.

### Sistema de Combate
- **6 Tipos de Armas:**
  - **Pistol (Pistola):** 20 de dano, 12/60 munição, 0.5s de cooldown
  - **Rifle:** 25 de dano, 30/120 munição, 0.15s de cooldown
  - **Sniper:** 100 de dano, 5/20 munição, 2.0s de cooldown com zoom
  - **SMG:** 15 de dano, 40/200 munição, 0.08s de cooldown
  - **Shotgun:** 60 de dano, 6/24 munição, 1.0s de cooldown
  - **DMR:** 45 de dano, 12/48 munição, 0.35s de cooldown com zoom médio
  - **Soco:** Sempre disponível como fallback

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

#### Tipos de Zumbi
- **Zumbi Normal (Roxo):**
  - Inimigo padrão com stats base
  - Aparece em todos os modos de combate
  - Possui olhos vermelhos brilhantes e boca dentada
  
- **Zumbi Gordo (Verde):**
  - 50% mais vida que zumbis normais
  - 50% mais lento
  - Aparência visivelmente maior e mais robusta com características faciais proporcionalmente escaladas
  - Barriga proeminente e membros mais grossos
  - Spawna na proporção 1:1 com zumbis normais nos modos Arcade e Survival
  
- **Zumbi Grande (Roxo, 2x tamanho):**
  - **Exclusivo do Modo Survival**
  - 5x a vida de zumbis normais
  - 2x o dano
  - 25% mais lento
  - Alcance de ataque maior (3.5m vs 2m)
  - Spawna na proporção de 1 a cada 5 inimigos totais (ex: 20 inimigos = 4 Zumbis Grandes)

- **Slenderman (Terno preto, sem rosto):**
  - **Demônio da Velocidade / Canhão de Vidro**
  - 20% MENOS vida que zumbis normais (frágil)
  - 50% MAIS RÁPIDO
  - 50% MAIS DANO
  - Alcance de ataque estendido (3.0m)
  - Aparência distinta: alto, magro, terno preto com gravata vermelha, completamente sem rosto
  - Braços longos tipo tentáculos
  - Spawna na proporção de 1 a cada 10 inimigos totais nos modos Arcade e Survival
  - Inimigo de alto risco e alta recompensa

#### Comportamento Inteligente:
- Zumbis detectam e perseguem jogadores dentro de 25 metros
- Verificação de linha de visão (não perseguem através de paredes)
- Detecção de colisão com objetos do ambiente
- Movimento lateral para evitar serem alvos fáceis
- Ataques corpo a corpo quando próximos
- Recebem dano da tempestade quando fora da zona segura (modo Arcade)
- Sons de gemidos baseados em proximidade
  
#### Níveis de Dificuldade:
- **Fácil:** 50 HP, 2 de dano, movimento lento
- **Médio:** 100 HP, 5 de dano, velocidade moderada
- **Difícil:** 150 HP, 10 de dano, rápido e agressivo

*Nota: Os stats do Zumbi Grande, Zumbi Gordo e Slenderman são multiplicados sobre os stats base da dificuldade*

### Mecânicas da Tempestade
- **Zona que Encolhe:** A zona segura diminui gradualmente com o tempo
- **Dano da Tempestade:** 1 HP por segundo quando fora da zona segura
- **Afeta Todos:** Tanto jogadores quanto inimigos recebem dano da tempestade
- **Timer Configurável:** Ajuste a duração da tempestade nas configurações (padrão: 180 segundos)

### Sistema de Loot
- **Baús:** Espalhados pelo mapa, especialmente dentro de casas
- **Armas:** Encontre armas melhores para aumentar seu poder de fogo (incluindo SMG/Shotgun/DMR)
- **Munição:** Colete munição para suas armas de fogo
- **Garrafas de Stamina:** Recuperam stamina
- **MedKits (Maletas de Primeiros Socorros):** Maleta branca com cruz vermelha, recupera 25% da vida máxima (25 HP)
- **Mochilas:** Colecionáveis cosméticos
- **Interativo:** Pressione **E** para abrir baús e coletar itens

#### Sistema de Loot do Céu (Arcade & Survival)
Um sistema especial de recompensas que ativa quando você prova suas habilidades de combate:

**Requisitos de Ativação:**
- Todo o loot do chão foi coletado/aberto
- Jogador eliminou pelo menos 30% dos zumbis totais

**Recompensas:**
- 2-3 itens aleatórios caem do céu perto do jogador
- Drops ocorrem a cada 45 segundos uma vez ativado
- Ajuda a sustentar longas corridas de sobrevivência
- Mensagem no console confirma quando o sistema é ativado

### Geração de Mundo
- **Ambiente Voxel:** Estética blocada estilo Minecraft
- **Elementos Procedurais:**
  - Casas grandes/pequenas rotuladas como Casa/Mansão/Cabana mais planaltos, bunkers, rampas
  - Árvores (Carvalho, Pinheiro), rochas, arbustos, tufos de grama
  - **Veículos:** Carros, Caminhões, Ônibus, Motocicletas
  - Planaltos, prédios pequenos
  - Layouts de arena com caixotes e rampas
- **Geração Específica por Modo:**
  - **Survival:** Ambiente natural limpo com apenas chão, árvores, rochas e arbustos (sem construções ou veículos)
  - **Arcade:** Ambiente completo com todas as estruturas e veículos
  - **Arena:** Layout compacto focado em combate
  - **Studio:** Modo criativo com ferramentas de construção e todos os prefabs disponíveis

### Visualizador de Objetos
- **Modo de Inspeção:** Pressione **F** para inspecionar o objeto sob a mira
- **Informações Detalhadas:** Exibe nome, ID, tipo e outras propriedades do objeto
- **Útil para Debug:** Ajuda a entender a estrutura do mundo e identificar elementos

### HUD & Dashboard

**Barras de Status (Inferior Esquerdo):**
- Barra de escudo (azul)
- Barra de vida (verde)
- Barra de stamina (dourada)

**Timers (Centro Superior):**
- **Timer da Tempestade:** Mostra tempo até a tempestade fechar completamente (apenas modo Arcade)
- **Timer de Sobrevivência:** Rastreia seu tempo de sobrevivência no formato MM:SS (modos Arcade & Survival)

**Dashboard (Superior Esquerdo):**
- **FPS:** Contador de quadros por segundo
- **Enemies:** Número de inimigos vivos
- **Killed:** Inimigos eliminados
- **Distance:** Quilômetros percorridos
- **Memory:** Uso de RAM em MB
- **Target Inspect:** Mostra nome/ID/tipo do objeto sob a mira

**Informações da Arma (Inferior Direito):**
- Nome da arma atual
- Contagem de munição (pente atual / munição total)

**Modo Debug (Opcional):**
- Ative nas configurações ou com **`** para ver IDs e nomes de objetos
- Rótulos por objeto e informações avançadas de alvo

**Ajudas de Exploração:**
- Minimap com marcador do jogador (ativável/desativável)
- Indicador de tempo da tempestade
- Controles touch para mobile (auto ou via configurações)

## 🎨 Visualizador de Objetos

Um inspetor 3D standalone para visualizar e customizar todos os objetos do jogo:

**Acesso:** Abra `object-viewer.html` no seu navegador

**Recursos:**
- **Visualização 3D Interativa:** Rotacione, dê zoom e inspecione todos os objetos do jogo
- **Categorias:**
  - **Personagens:** Modelos de jogador Masculino e Feminino com customização
  - **Inimigos:** Todos os tipos de zumbis e aranha com animações
  - **Veículos:** Carro, Caminhão, Ônibus, Motocicleta com opções de cor
  - **Construções:** Casas, Mansões, Cabanas, Prédios Pequenos, Planaltos
  - **Natureza:** Árvores de Carvalho, Árvores de Pinheiro, Arbustos (escaláveis)
  - **Rochas:** Várias formações rochosas

**Customização de Personagens:**
- **Jogador Masculino:** Cor da camisa, estilo de boca, chapéu, óculos, armas
- **Jogadora Feminina:** Cor da camisa, cor do cabelo, 4 estilos de cabelo (Longo, Rabo de Cavalo, Coque, Curto), brincos, óculos, armas

**Animações:** Todos os personagens e inimigos suportam animações Idle, Walk, Attack e Jump

**Controles:**
- Arrastar mouse para rotacionar
- Scroll para zoom
- Slider de zoom para controle preciso
- Controle de velocidade de animação
- Painéis de customização específicos por objeto

## ⚙️ Configurações & Personalização

Acesse o menu de configurações no menu principal ou tela de pausa:

### Configurações do Jogo
- **Dificuldade:** Fácil / Médio / Difícil
  - Afeta vida, dano e velocidade dos inimigos
  
- **Contagem de Inimigos:** 5-500 inimigos
  - Ajuste o número de zumbis no mapa
  
- **Tempo da Tempestade:** 60-1800 segundos
  - Configure quanto tempo até a tempestade fechar completamente
  
- **Modo de Câmera:** Primeira Pessoa / Terceira Pessoa
  - Escolha sua perspectiva de câmera preferida
  - Pode ser alternado no jogo com a tecla V
  
- **Modo Debug:** Ligado / Desligado
  - Alterna sobreposição de informações de debug
- **Mostrar IDs Renderizados:** Ligado / Desligado
- **Mostrar Minimap:** Ligado / Desligado
- **Controles Touch:** Ligado / Desligado (overlay mobile)
- **Música de Fundo:** Ligado / Desligado e controle de volume
- **Modo de Jogo:** Survival/Arena/Matrix/Studio

### Persistência de Configurações
Todas as configurações são salvas no localStorage do navegador e persistem entre sessões.

## 🎨 Recursos Visuais

- **Estilo de Arte Voxel:** Gráficos blocados inspirados em Minecraft
- **Iluminação Dinâmica:** Sombras em tempo real e iluminação ambiente
- **Modos de Câmera:**
  - **Terceira Pessoa (TPS):** Perspectiva por cima do ombro com visibilidade completa do personagem
  - **Primeira Pessoa (FPS):** Visão imersiva na altura dos olhos (alterne com a tecla V)
- **Crosshair Profissional:** Mira em cruz estilizada com sombra para visibilidade
- **Traçadores de Balas:** Feedback visual mostrando a trajetória dos tiros
  - Traçadores amarelos para tiros normais
  - Traçadores vermelhos ao acertar inimigos
  - Animação de fade-out para efeito visual suave
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

![Tela de Vitória](docs/victory-royale.jpg)

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

2. **Observe a Tempestade:** Fique de olho no timer da tempestade e permaneça dentro da zona segura (modo Arcade).

3. **Explore Casas:** Colete loot de baús dentro de prédios para melhores armas e munição.

4. **Use Cobertura:** Esconda-se atrás de árvores e rochas para evitar ataques inimigos.

5. **Zoom da Sniper:** Clique com o botão direito com o rifle sniper para dar zoom para tiros precisos.

6. **Recarregue Frequentemente:** Não seja pego com um pente vazio durante uma luta.

7. **Acompanhe a Distância:** Monitore sua distância percorrida para gerenciar o desgaste de stamina.

8. **Perspectiva da Câmera:** Use V para alternar entre primeira e terceira pessoa conforme sua preferência.

9. **Observe Seus Traçadores:** Rastros de bala amarelos ajudam você a ver onde está atirando e ajustar sua mira.

10. **Dificuldade Importa:** Comece no Fácil para aprender as mecânicas, depois aumente a dificuldade.

11. **Estratégia do Modo Survival:**
    - Sem tempestade significa que você pode explorar com calma
    - Foque em eliminar 30% dos zumbis para desbloquear loot do céu
    - Colete todo o loot do chão antes do limite de 30% para máximo benefício
    - Zumbis Grandes são difíceis - guarde suas melhores armas para eles
    
12. **Táticas para Variantes de Zumbi:**
    - **Zumbis Gordos (Verde):** Mais lentos mas mais resistentes - fuja deles e use fogo sustentado
    - **Zumbis Grandes (Roxo, Grande):** Extremamente perigosos - mantenha distância, use sniper/rifle
    - **Slenderman (Terno Preto, Sem Rosto):** Rápido e mortal mas frágil - priorize eliminação, evite lutas prolongadas, continue se movendo
    - **Zumbis Normais (Roxo):** Ameaça padrão - qualquer arma funciona efetivamente
    
13. **Sistema de Loot do Céu:** Uma vez ativado, sobreviva por intervalos de 45 segundos para receber drops de suprimentos perto da sua posição.

## 📝 Licença

Este projeto é open source e disponível para fins educacionais.

## 🙏 Agradecimentos

- Inspirado em Fortnite (Epic Games)
- Estética voxel inspirada em Minecraft (Mojang)
- Construído com a biblioteca Three.js

---

**Aproveite o jogo e boa sorte sobrevivendo!** 🎮🏆

## Novidades (Nov 2025)

### Últimas Atualizações
- **Modo Survival:** Novo modo hardcore sem tempestade, sem veículos, ambiente natural limpo (apenas árvores, rochas e arbustos), e tamanho mínimo de mapa de 100m.
- **Variantes de Zumbi:**
  - **Zumbi Gordo (Verde):** 50% mais vida, 50% mais lento, aparência mais robusta com barriga proeminente e características faciais escaladas. Spawna 1:1 com zumbis normais em Arcade/Survival.
  - **Zumbi Grande (Roxo, 2x tamanho):** Inimigo chefe exclusivo do Survival com 5x vida, 2x dano, 25% mais lento, alcance de ataque maior. Spawna 1 a cada 5 inimigos.
  - **Slenderman (Terno Preto, Sem Rosto):** Demônio da velocidade tipo canhão de vidro com corpo alto e magro, terno preto, gravata vermelha, sem rosto. 20% menos vida, 50% mais rápido, 50% mais dano, alcance de ataque de 3m. Spawna 1 a cada 10 inimigos em Arcade/Survival.
- **Item MedKit:** Maleta de primeiros socorros com caixa branca e cruz vermelha. Cura 25% da vida máxima. Encontrado em baús, loot do chão e drops do céu.
- **Timer de Sobrevivência:** Rastreamento de sobrevivência em tempo real exibido no formato MM:SS para modos Arcade e Survival.
- **Sistema de Loot do Céu:** Recompensa jogadores que eliminam 30%+ dos zumbis e coletam todo o loot do chão com airdrops periódicos (2-3 itens a cada 45s).
- **IA de NPC Aprimorada:** Verificação de linha de visão, detecção de colisão com ambiente, pathfinding melhorado.
- Música de fundo com play/pause e ajuste de volume persistente no menu.
- PointerLock agora é ativado ao clicar no canvas para evitar travamentos acidentais a partir de elementos UI.
- IA de wander para NPCs, chase com strafing e animações de ataque mais suaves.
- Ranges por arma aplicados (pistola/rifle/sniper) e feedback visual na mira (vermelho dentro do alcance, amarelo fora).
- Sprint e sistema de stamina com item restaurador (`JuiceBottle`).
- Detecção de hover melhorada: raycast testando meshes-filho dos inimigos e fallback por centro da tela.
- Outline de hover implementado via grupo overlay não destrutivo para evitar alterações nas materiais originais.
- SFX de tiro em pool para reprodução mais rápida.
- **Suporte Mobile:** Controles de toque na tela (joystick + botões) para dispositivos móveis. Pode ser forçado nas configurações.
- **Debug Aprimorado:** Novo console de debug arrastável e rolável na tela (alterne com a tecla ` crase ou botão DBG).
- **Novas Configurações:** Controle de volume da música, alternância de controles de toque e opções de debug detalhadas.

## Executando & Depuração

Recomendado: use o servidor de desenvolvimento Vite para facilitar testes iterativos (carregamento de módulos e source maps).

1. Instale dependências e rode o servidor de desenvolvimento:

```bash
npm install
npm run dev
```

2. Abra a URL mostrada pelo Vite (normalmente `http://localhost:5173`).

3. Se ocorrer um erro de renderer no console do navegador como "Cannot read properties of undefined (reading 'value')", o código já inclui diagnósticos que imprimem um bloco `Render diagnostics:` no console. Copie esse bloco e compartilhe com o mantenedor — ele contém um snapshot de meshes e materiais que ajuda a localizar materiais problemáticos.

4. Verificações rápidas ao depurar:
- Garanta que o jogo foi iniciado pelo botão Play (o áudio costuma exigir um gesto do usuário).
- Clique no canvas para travar o ponteiro (evite o lock em documento inteiro).
- Verifique o console por `Render diagnostics:` e por `Unhandled error in Game.animate:` para obter contexto.

Se preferir, abra uma issue com a saída dos diagnósticos e os passos para reproduzir o problema.
