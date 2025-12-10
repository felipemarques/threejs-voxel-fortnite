import * as THREE from 'three'

export type AnimationType = 'idle' | 'walk' | 'run' | 'jump' | 'attack' | 'dance' | 'die'

export interface AnimationWrapper {
  baseY: number
  animTime: number // Accumulated time (0..Infinity)
}

export abstract class BaseAnimation {
  /**
   * Main animation method to be implemented by subclasses
   */
  abstract animate(playerData: any, anim: AnimationType, time: number, wrapper: AnimationWrapper): void

  /**
   * Helper to reset rotations for standard pivots
   */
  protected resetPivots(playerData: any) {
    if (playerData.leftArmPivot) playerData.leftArmPivot.rotation.z = 0
    if (playerData.rightArmPivot) playerData.rightArmPivot.rotation.z = 0
    if (playerData.leftLegPivot) playerData.leftLegPivot.rotation.z = 0
    if (playerData.rightLegPivot) playerData.rightLegPivot.rotation.z = 0
  }
}
