import { BaseAnimation, AnimationType, AnimationWrapper } from './BaseAnimation'

export class SpiderAnimation extends BaseAnimation {
  animate(playerData: any, anim: AnimationType, time: number, wrapper: AnimationWrapper) {
    const t = time
    // Always reset body rotation/position if not dying
    if (anim !== 'die' && playerData.mesh) {
      playerData.mesh.rotation.z = 0
      playerData.mesh.position.y = wrapper.baseY // Reset base height (offset added in specific anims)
    }

    if (anim === 'idle') {
        playerData.legs.forEach((leg: any) => {
          if (leg.index === 0) {
            const speed = leg.side === 0 ? 1.0 : 0.8
            const offset = leg.side === 0 ? 0 : 1
            const wave = Math.sin(t * speed + offset) * 0.2
            leg.upper.rotation.x = -Math.PI / 4 + wave
            leg.lower.rotation.x = Math.PI / 1.2 - wave * 0.5
          } else {
            const wave = Math.sin(t * 0.5 + leg.index) * 0.05
            leg.upper.rotation.x = -Math.PI / 4 + wave
            leg.lower.rotation.x = Math.PI / 1.2
          }
        })
        if (playerData.mesh) playerData.mesh.position.y = wrapper.baseY + Math.sin(t * 0.8) * 0.02
    } else if (anim === 'walk' || anim === 'run') {
         const speedMult = anim === 'run' ? 2.5 : 1.5 
         playerData.legs.forEach((leg: any) => {
          const offset = (leg.side + leg.index) % 2 === 0 ? 0 : Math.PI
          const wave = Math.sin(t * speedMult + offset)
          leg.upper.rotation.x = -Math.PI / 4 + wave * 0.15
          leg.lower.rotation.x = Math.PI / 1.2 + wave * 0.1
          if (leg.upper.parent) {
            leg.upper.parent.rotation.z = wave * 0.2
          }
        })
    } else if (anim === 'jump') {
         // Jump: Crouch then Leap
         const jumpInterp = Math.sin(t * 2)
         if (jumpInterp > 0) {
            if (playerData.mesh) playerData.mesh.position.y = wrapper.baseY + jumpInterp * 1.5
         }
    } else if (anim === 'attack') {
         // Attack: Rear up and strike with front legs
         // Rear up body
         if (playerData.mesh) {
            const rearUp = Math.abs(Math.sin(t * 3)) * 0.5
            playerData.mesh.rotation.x = -rearUp // Tilt back
            playerData.mesh.position.y = wrapper.baseY + rearUp * 0.5
         }
         
         // Front legs flail
         playerData.legs.forEach((leg: any) => {
             if (leg.index === 3) { // Front legs (index 3 usually in this setup?) -> check creation loop
                 // Creation loop: 0 is back? Let's assume index 3 is front based on standard ordering or vice versa.
                 // Actually index 0 to 3. usually 0 is front or back. 
                 // In SpiderObject code: zOffset = 0.7 - legIndex * 0.5. 
                 // Index 0: z=0.7 (Front). Index 3: z=-0.8 (Back).
                 // So Index 0 is FRONT.
             }
             
             if (leg.index === 0) { // Front legs
                 const attackSpeed = 6
                 const strike = Math.sin(t * attackSpeed)
                 leg.upper.rotation.x = -Math.PI / 4 - 0.5 + strike * 0.5
                 leg.lower.rotation.x = 0.5 + strike * 0.5
             } else {
                 // Other legs stabilize
                 leg.upper.rotation.x = -Math.PI / 4
                 leg.lower.rotation.x = Math.PI / 1.2
             }
         })

    } else if (anim === 'dance') {
         // Alternating legs wave
         const speed = 3
         const interval = Math.floor(t * speed) % 8 // 8 legs
         
         playerData.legs.forEach((leg: any) => {
             // Create a wave effect across legs
             const legId = leg.side * 4 + leg.index // 0..7
             
             if (legId === interval) {
                 leg.upper.rotation.x = -Math.PI / 2 // Raise high
                 leg.lower.rotation.x = 0 // Straight
             } else {
                 leg.upper.rotation.x = -Math.PI / 4
                 leg.lower.rotation.x = Math.PI / 1.2
             }
         })
         if (playerData.mesh) playerData.mesh.position.y = wrapper.baseY
         
    } else if (anim === 'die') {
         // Die: Flip over
         if (playerData.mesh) {
             playerData.mesh.rotation.z = Math.PI
             playerData.mesh.position.y = wrapper.baseY + 0.6 // Adjusted higher to avoid clipping
         }
         // Curl legs
         playerData.legs.forEach((leg: any) => {
             leg.upper.rotation.x = Math.PI / 2
             leg.lower.rotation.x = Math.PI / 1.5
         })
    }
  }
}
