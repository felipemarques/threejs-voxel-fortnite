# Voxel Firecraft

## Contexto do projeto
Voxel Firecraft é um mundo voxel 3D baseado em Three.js onde construção criativa encontra interação em tempo real. A demonstração combina ambientes com iluminação procedural, partículas animadas e uma paleta de voxels que remete a uma estética fantasiosa em blocos. O repositório abriga duas versões principais: a iteração original `v1`, que provou o conceito em um protótipo de cena única, e a reconstrução em andamento `v2`, que busca escalar a experiência para navegadores modernos.

## Motivação para o refactor do v2
O refactor para o v2 repensa a estrutura do app para liberar melhorias consistentes em toda a pilha:
- **Performance**: orquestração modular de cenas, carregamento preguiçoso de recursos e ciclos de renderização mais enxutos reduzem quedas de quadros e mantêm a experiência responsiva em hardware diverso.
- **Reaproveitamento de código**: utilitários compartilhados, sistemas componíveis e ciclos de vida mais nítidos diminuem a duplicação entre telas e facilitam a adição de futuras funcionalidades.
- **Testes automatizados**: suítes amigáveis a CI cobrindo build, sanidade de renderização e fluxos de interação garantem que regressões sejam capturadas antes de chegarem aos usuários.
- **Layout moderno e CSS**: novas bibliotecas de layout e estilos utilitários entregam uma base responsiva, pronta para temas, sem depender de estilos customizados pesados.

O README mantém ambas as versões visíveis para que colaboradores possam comparar o protótipo (`v1`) com a reconstrução estruturada e sustentável presente em `v2`.
