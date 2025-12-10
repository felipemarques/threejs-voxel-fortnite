import { BaseAnimation, AnimationType, AnimationWrapper } from './BaseAnimation'

export class HumanoidAnimation extends BaseAnimation {
  animate(playerData: any, anim: AnimationType, time: number, wrapper: AnimationWrapper) {
    const t = time

    // Always reset body rotation (unless dying)
    if (anim !== 'die' && playerData.mesh) {
      playerData.mesh.rotation.x = 0
    } 

    if (anim === 'idle') {
      this.resetPivots(playerData)
      
      if (playerData.leftArmPivot) playerData.leftArmPivot.rotation.x = Math.sin(t) * 0.1
      if (playerData.rightArmPivot) playerData.rightArmPivot.rotation.x = -Math.sin(t) * 0.1
      if (playerData.leftLegPivot) playerData.leftLegPivot.rotation.x = 0
      if (playerData.rightLegPivot) playerData.rightLegPivot.rotation.x = 0
      if (playerData.mesh) playerData.mesh.position.y = wrapper.baseY + Math.sin(t * 2) * 0.02
    } 
    else if (anim === 'walk') {
      this.resetPivots(playerData)
      
      const angle = Math.sin(t) * 0.5
      if (playerData.leftLegPivot) playerData.leftLegPivot.rotation.x = angle
      if (playerData.rightLegPivot) playerData.rightLegPivot.rotation.x = -angle
      if (playerData.leftArmPivot) playerData.leftArmPivot.rotation.x = -angle * 0.8
      if (playerData.rightArmPivot) playerData.rightArmPivot.rotation.x = angle * 0.8
      if (playerData.mesh) playerData.mesh.position.y = wrapper.baseY + Math.abs(Math.sin(t)) * 0.05
    }
    else if (anim === 'attack') {
      this.resetPivots(playerData)
      // Reset main X rotations for punch
      if (playerData.leftArmPivot) playerData.leftArmPivot.rotation.x = 0
      if (playerData.rightArmPivot) playerData.rightArmPivot.rotation.x = 0
      if (playerData.leftLegPivot) playerData.leftLegPivot.rotation.x = 0
      if (playerData.rightLegPivot) playerData.rightLegPivot.rotation.x = 0
      
      // Cycle: Right Punch -> Left Punch -> Kick
      const cycleTime = 1.2
      const phase = Math.floor((t % (cycleTime * 3)) / cycleTime) // 0, 1, 2
      const subT = (t % cycleTime) / cycleTime // 0..1
      
      const punchAngle = -Math.PI / 2 * Math.sin(subT * Math.PI)
      
      if (phase === 0) {
        // Right Punch
        if (playerData.rightArmPivot) playerData.rightArmPivot.rotation.x = punchAngle
      } else if (phase === 1) {
        // Left Punch
        if (playerData.leftArmPivot) playerData.leftArmPivot.rotation.x = punchAngle
      } else {
        // Kick
        const kickAngle = -Math.PI / 2 * Math.sin(subT * Math.PI)
        if (playerData.rightLegPivot) playerData.rightLegPivot.rotation.x = kickAngle
        
        // Counter balance
        if (playerData.leftArmPivot) playerData.leftArmPivot.rotation.x = -kickAngle * 0.5
        if (playerData.rightArmPivot) playerData.rightArmPivot.rotation.x = -kickAngle * 0.5
      }
    }
    else if (anim === 'jump') {
      this.resetPivots(playerData)
      // Static pose
      const poseAngle = 0.6
      if (playerData.leftLegPivot) playerData.leftLegPivot.rotation.x = poseAngle
      if (playerData.rightLegPivot) playerData.rightLegPivot.rotation.x = -poseAngle
      if (playerData.leftArmPivot) playerData.leftArmPivot.rotation.x = -poseAngle
      if (playerData.rightArmPivot) playerData.rightArmPivot.rotation.x = poseAngle
      
      // Simple jump logic matching Viewer
      const jumpArg = t * 0.8
      const jumpCycle = Math.abs(Math.sin(jumpArg))
      const height = Math.pow(jumpCycle, 0.5) * 1.0
      if (playerData.mesh) playerData.mesh.position.y = wrapper.baseY + height
    }
    else if (anim === 'run') {
       this.resetPivots(playerData)
       const angle = Math.sin(t * 1.5) * 0.8
       if (playerData.leftLegPivot) playerData.leftLegPivot.rotation.x = angle
       if (playerData.rightLegPivot) playerData.rightLegPivot.rotation.x = -angle
       if (playerData.leftArmPivot) playerData.leftArmPivot.rotation.x = -angle * 1.2
       if (playerData.rightArmPivot) playerData.rightArmPivot.rotation.x = angle * 1.2
       if (playerData.mesh) playerData.mesh.position.y = wrapper.baseY + Math.abs(Math.sin(t * 1.5)) * 0.1
    }
    else if (anim === 'dance') {
       const speed = 1.0
       const sway = Math.sin(t * speed) * 0.2
       if (playerData.leftArmPivot) playerData.leftArmPivot.rotation.z = Math.PI - 0.5 + sway
       if (playerData.rightArmPivot) playerData.rightArmPivot.rotation.z = -(Math.PI - 0.5 + sway)
       if (playerData.leftArmPivot) playerData.leftArmPivot.rotation.x = Math.sin(t * speed * 2) * 0.5
       if (playerData.rightArmPivot) playerData.rightArmPivot.rotation.x = Math.sin(t * speed * 2) * 0.5
       if (playerData.mesh) playerData.mesh.position.y = wrapper.baseY + Math.abs(Math.sin(t * speed * 2)) * 0.1
    }
    else if (anim === 'die') {
       if (playerData.mesh) {
         playerData.mesh.rotation.x = -Math.PI / 2
         playerData.mesh.position.y = wrapper.baseY + 0.15
       }
       if (playerData.leftArmPivot) playerData.leftArmPivot.rotation.z = 0.5
       if (playerData.rightArmPivot) playerData.rightArmPivot.rotation.z = -0.5
       if (playerData.leftLegPivot) playerData.leftLegPivot.rotation.z = 0.2
       if (playerData.rightLegPivot) playerData.rightLegPivot.rotation.z = -0.2
    }
  }
}
