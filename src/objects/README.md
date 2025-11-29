# Enemy/NPC Object Elements

This directory contains modular mesh creation functions for all enemy types in the game. Each file exports a function that creates and returns a complete enemy mesh with animation pivot points.

## Files

### `normalZombieElement.js`
Creates a standard purple zombie with red glowing eyes and teeth.

**Export:** `createNormalZombie(scene, x, y, z)`

**Returns:**
```javascript
{
    mesh: THREE.Group,
    leftArmPivot: THREE.Group,
    rightArmPivot: THREE.Group,
    leftLegPivot: THREE.Group,
    rightLegPivot: THREE.Group
}
```

**Characteristics:**
- Purple skin
- Red glowing eyes
- Standard proportions
- Base stats for all difficulty levels

---

### `fatZombieElement.js`
Creates a green fat zombie with bulkier proportions and prominent belly.

**Export:** `createFatZombie(scene, x, y, z)`

**Returns:** Same structure as normalZombieElement

**Characteristics:**
- Green skin
- 30% larger head
- 60% wider body
- 40% deeper body
- Prominent belly sphere
- Thicker arms and legs
- Scaled facial features

---

### `bigZombieElement.js`
Creates a large purple zombie (2x scale of normal zombie).

**Export:** `createBigZombie(scene, x, y, z)`

**Returns:** Same structure as normalZombieElement

**Characteristics:**
- Purple skin (same as normal)
- 2x scale applied to entire mesh
- Survival mode exclusive
- Same proportions as normal zombie

---

### `slendermanElement.js`
Creates the Slenderman enemy - tall, thin, faceless figure in black suit.

**Export:** `createSlenderman(scene, x, y, z)`

**Returns:** Same structure as normalZombieElement

**Characteristics:**
- Pale beige faceless head
- Black suit
- Red tie
- Tall thin body (1.4m height)
- Long tentacle-like arms (1.2m)
- No facial features
- Taller overall structure

---

## Usage Example

```javascript
import { createNormalZombie } from './src/objects/normalZombieElement.js';
import { createFatZombie } from './src/objects/fatZombieElement.js';
import { createBigZombie } from './src/objects/bigZombieElement.js';
import { createSlenderman } from './src/objects/slendermanElement.js';

// Create a normal zombie at position (0, 0, 0)
const normalZombie = createNormalZombie(scene, 0, 0, 0);

// Animate the zombie
normalZombie.leftArmPivot.rotation.x = Math.PI / 4;
normalZombie.rightArmPivot.rotation.x = -Math.PI / 4;

// Remove from scene
scene.remove(normalZombie.mesh);
```

## Animation Pivot Points

All enemy meshes include pivot points for limb animation:

- **leftArmPivot** - Rotates left arm (shoulder joint)
- **rightArmPivot** - Rotates right arm (shoulder joint)
- **leftLegPivot** - Rotates left leg (hip joint)
- **rightLegPivot** - Rotates right leg (hip joint)

Rotate these pivot points on the X-axis to create walking, attacking, or idle animations.

## Current Usage

These modules are currently used in:
- `enemy-viewer.html` - Standalone animation viewer/tester

**Future Integration:**
- `src/enemies.js` - Main game enemy system (planned)
- `src/world.js` - World generation (planned)

## Benefits of Modular Approach

1. **No Code Duplication** - Single source of truth for each enemy type
2. **Easy Maintenance** - Update mesh in one place
3. **Reusability** - Use anywhere: game, viewer, tests
4. **Consistency** - Ensures all instances look identical
5. **Performance** - Shared geometry possible with instancing
