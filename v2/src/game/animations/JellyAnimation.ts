import { BaseAnimation, AnimationType, AnimationWrapper } from './BaseAnimation'

export class JellyAnimation extends BaseAnimation {
  animate(playerData: any, anim: AnimationType, time: number, wrapper: AnimationWrapper) {
      const t = time
      const { mesh, body, core } = playerData
      if (!mesh) return

      // Defaults
      if (body) body.scale.set(1, 1, 1)
      mesh.position.y = wrapper.baseY + 0.4
      mesh.position.z = 0
      
      if (anim === 'idle') {
          // Breath
          const breath = Math.sin(t * 1.5) * 0.05
          if (body) body.scale.set(1 + breath, 1 - breath, 1 + breath)
          // Hover
          mesh.position.y = wrapper.baseY + 0.4 + Math.sin(t * 0.8) * 0.05
      } 
      else if (anim === 'jump') {
          // Jump Upwards Only - Slower
          // Using sin^2 for a bouncy hop effect, but slowed down
          const speed = 1.0 // Was 2.0
          const jumpHeight = Math.abs(Math.sin(t * speed)) * 1.5
          mesh.position.y = wrapper.baseY + 0.4 + jumpHeight
          // Squat visual
          const squat = Math.cos(t * speed) * 0.2
          if (body) body.scale.set(1 - squat, 1 + squat, 1 - squat)
      }
      else if (anim === 'attack') {
          // Lunging attack
          const cycle = (t * 0.8) % 2 // Slower cycle
          if (cycle < 1.0) {
            // Lunge forward
            const progress = cycle
            // Ease out cubic
            const zMove = 2 * (1 - Math.pow(1 - progress, 3)) 
             mesh.position.z = zMove
             mesh.position.y = wrapper.baseY + 0.4 + Math.sin(progress * Math.PI) * 0.5
          } else {
             // Return quickly
             const returnProgress = (cycle - 1.0)
             mesh.position.z = 2 * (1 - returnProgress)
             mesh.position.y = wrapper.baseY + 0.4
          }
      }
      else if (anim === 'dance') {
          // Gelatinous Sway
          // Combine slow wobbles on multiple axes
          const swayX = Math.sin(t * 1.0) * 0.3
          const swayZ = Math.cos(t * 0.8) * 0.3
          const pulse = Math.sin(t * 2.0) * 0.1
          
          if (body) {
              body.rotation.z = swayX
              body.rotation.x = swayZ
              body.scale.set(1 + pulse, 1 - pulse, 1 + pulse)
          }
          mesh.position.y = wrapper.baseY + 0.4 + Math.abs(Math.sin(t * 1.5)) * 0.2
      }
      else if (anim === 'die') {
          // Melt/Flatten
          if (body) body.scale.set(2, 0.1, 2)
          mesh.position.y = wrapper.baseY + 0.1
      }
      else if (anim === 'walk' || anim === 'run') {
          // Slide/Hop
          const hop = Math.abs(Math.sin(t * 3)) * 0.2
          mesh.position.y = wrapper.baseY + 0.4 + hop
      }
  }
}
