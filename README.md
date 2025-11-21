# Voxel Fortnite

A voxel-style battle royale game inspired by Fortnite, built with Three.js. Survive against AI enemies in a shrinking storm zone while managing your resources and exploring the procedurally generated world.

![Main Menu](docs/main-screen.jpg)

## 🎮 Game Overview

Voxel Fortnite is a browser-based 3D survival game where you must eliminate all enemies before the storm closes in. The game features voxel-style graphics reminiscent of Minecraft, combined with battle royale mechanics similar to Fortnite.

![Gameplay](docs/game-demo-1.jpg)

## 🎯 Objective

**Primary Goal:** Eliminate all enemies on the map to achieve victory.

**Secondary Goals:**
- Survive the shrinking storm zone
- Manage your stamina while exploring
- Collect weapons and resources from loot chests
- Maintain your health and shield

## 🕹️ Controls

### Movement
- **W/A/S/D** - Move forward/left/backward/right
- **Space** - Jump
- **Mouse** - Look around (camera control)
- **Click** - Lock pointer / Start game
- **V** - Toggle camera mode (First Person / Third Person)

### Combat
- **Left Click** - Shoot / Punch
- **Right Click** - Aim (Sniper zoom)
- **R** - Reload weapon
- **1/2/3/4** - Switch weapons (hotbar)

### Interaction
- **E** - Interact with chests and objects
- **ESC** - Pause menu

## 🎲 Game Features

### Combat System
- **4 Weapon Types:**
  - **Fist (Soco):** Melee weapon, 10 damage, 0.2s cooldown
  - **Pistol (Pistola):** 20 damage, 12/60 ammo, 0.5s cooldown
  - **Rifle:** 25 damage, 30/120 ammo, 0.15s cooldown
  - **Sniper:** 100 damage, 5/20 ammo, 2.0s cooldown with zoom

### Stamina System
- **Stamina Bar:** Depletes when punching rapidly or walking long distances
- **Fatigue Mechanic:** After 20 consecutive punches, you become tired for 3 seconds
- **Walking Drain:** Lose 0.5 stamina per 10 meters traveled
- **Recovery:** Stamina regenerates automatically over time

### Player Stats
- **Health (HP):** 100 points - your life force
- **Shield:** 100 points - absorbs damage before health
- **Stamina:** 100 points - used for punching and walking

### Enemy AI
- **Intelligent Behavior:**
  - Zombies detect and chase players within 25 meters
  - Strafe movement to avoid being easy targets
  - Melee attacks when in range (2 meters)
  - Take storm damage when outside safe zone
  
- **Difficulty Levels:**
  - **Easy:** 50 HP, 2 damage, slower movement
  - **Medium:** 100 HP, 5 damage, moderate speed
  - **Hard:** 150 HP, 10 damage, fast and aggressive

### Storm Mechanics
- **Shrinking Zone:** The safe zone gradually shrinks over time
- **Storm Damage:** 1 HP per second when outside the safe zone
- **Affects Everyone:** Both players and enemies take storm damage
- **Configurable Timer:** Adjust storm duration in settings (default: 180 seconds)

### Loot System
- **Chests:** Scattered throughout the map, especially inside houses
- **Weapons:** Find better weapons to increase your firepower
- **Ammo:** Collect ammunition for your firearms
- **Interactive:** Press **E** to open chests and collect items

### World Generation
- **Voxel Environment:** Minecraft-style blocky aesthetics
- **Procedural Elements:**
  - 50+ trees (Oak and Pine varieties)
  - 30+ rocks and natural obstacles
  - 8 houses with accessible interiors
  - Color-varied grass terrain
  
### HUD & Dashboard

**Status Bars (Bottom Left):**
- Shield bar (blue)
- Health bar (green)
- Stamina bar (gold)

**Dashboard (Top Left):**
- **FPS:** Frames per second counter
- **Enemies:** Number of enemies alive
- **Killed:** Enemies eliminated
- **Distance:** Kilometers traveled
- **Memory:** RAM usage in MB

**Weapon Info (Bottom Right):**
- Current weapon name
- Ammo count (current magazine / total ammo)

**Debug Mode (Optional):**
- Enable in settings to see object IDs and names
- Displays target information when aiming at objects

## ⚙️ Settings & Customization

Access the settings menu from the main menu or pause screen:

### Game Settings
- **Difficulty:** Easy / Medium / Hard
  - Affects enemy health, damage, and speed
  
- **Enemy Count:** 5-30 enemies
  - Adjust the number of zombies on the map
  
- **Storm Time:** 60-300 seconds
  - Configure how long before the storm fully closes
  
- **Camera Mode:** First Person / Third Person
  - Choose your preferred camera perspective
  - Can be toggled in-game with V key
  
- **Debug Mode:** On / Off
  - Toggle debug information overlay

### Settings Persistence
All settings are saved to browser localStorage and persist between sessions.

## 🎨 Visual Features

- **Voxel Art Style:** Blocky, Minecraft-inspired graphics
- **Dynamic Lighting:** Real-time shadows and ambient lighting
- **Camera Modes:**
  - **Third-Person (TPS):** Over-the-shoulder perspective with full character visibility
  - **First-Person (FPS):** Immersive eye-level view (toggle with V key)
- **Professional Crosshair:** Cross-style aiming reticle with shadow for visibility
- **Bullet Tracers:** Visual feedback showing shot trajectory
  - Yellow tracers for regular shots
  - Red tracers when hitting enemies
  - Fade-out animation for smooth visual effect
- **Character Animations:**
  - Walking/running animations
  - Punch animations (alternating arms)
  - Enemy movement and attack animations
  
- **Health Bars:** Floating health indicators above enemies
- **Damage Feedback:** Red flash effect when taking damage
- **Smooth Camera:** Follow player with smooth transitions

## 🏆 Victory & Defeat

### Victory Condition
Eliminate all enemies on the map to win the game. A victory screen will appear showing your achievement.

![Victory Screen](docs/victory-royale.jpg)

### Defeat Conditions
- **Health reaches 0:** You die and the game ends
- **Storm damage:** Staying outside the safe zone too long

### Game Over Screen
- Displays final statistics
- Option to restart the game
- Return to main menu

## 🛠️ Technical Details

### Built With
- **Three.js:** 3D graphics rendering
- **JavaScript (ES6+):** Game logic and mechanics
- **HTML5/CSS3:** UI and HUD elements
- **Vite:** Development server and build tool

### Performance
- **Target:** 60 FPS on modern browsers
- **Memory Optimized:** Efficient object pooling and cleanup
- **Browser Support:** Chrome, Firefox, Edge, Safari (latest versions)

### Debug Features
When debug mode is enabled:
- Object IDs and names displayed on screen
- Raycasting target information
- Enhanced dashboard statistics

## 🚀 Getting Started

### Prerequisites
- Modern web browser (Chrome, Firefox, Edge, Safari)
- Node.js and npm (for development)

### Installation

1. Clone the repository:
```bash
git clone https://github.com/felipemarques/threejs-voxel-fortnite.git
cd voxel-fortnite
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:5173`

### Building for Production

```bash
npm run build
```

The built files will be in the `dist/` directory.

## 🎮 Gameplay Tips

1. **Manage Your Stamina:** Don't spam punches - you'll get tired! Use firearms when possible.

2. **Watch the Storm:** Keep an eye on the storm timer and stay within the safe zone.

3. **Explore Houses:** Loot chests inside buildings for better weapons and ammo.

4. **Use Cover:** Hide behind trees and rocks to avoid enemy attacks.

5. **Sniper Zoom:** Right-click with the sniper rifle to zoom in for precise shots.

6. **Reload Often:** Don't get caught with an empty magazine during a fight.

7. **Track Distance:** Monitor your distance traveled to manage stamina drain.

8. **Camera Perspective:** Use V to toggle between first and third person based on your preference.

9. **Watch Your Tracers:** Yellow bullet trails help you see where you're shooting and adjust your aim.

10. **Difficulty Matters:** Start on Easy to learn the mechanics, then increase difficulty.

## 📝 License

This project is open source and available for educational purposes.

## 🙏 Acknowledgments

- Inspired by Fortnite (Epic Games)
- Voxel aesthetics inspired by Minecraft (Mojang)
- Built with Three.js library

---

**Enjoy the game and good luck surviving!** 🎮🏆
