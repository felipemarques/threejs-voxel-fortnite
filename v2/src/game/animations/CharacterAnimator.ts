import * as THREE from 'three'
import { BaseAnimation, AnimationType, AnimationWrapper } from './BaseAnimation'
import { HumanoidAnimation } from './HumanoidAnimation'
import { SpiderAnimation } from './SpiderAnimation'
import { JellyAnimation } from './JellyAnimation'

export type { AnimationType, AnimationWrapper } from './BaseAnimation'

export class CharacterAnimator {
  
  private static humanoidAnim = new HumanoidAnimation()
  private static spiderAnim = new SpiderAnimation()
  private static jellyAnim = new JellyAnimation()
  
  static animate(playerData: any, anim: AnimationType, time: number, wrapper: AnimationWrapper) {
    if (playerData.isJelly) {
      this.jellyAnim.animate(playerData, anim, time, wrapper)
    } 
    else if (playerData.legs && Array.isArray(playerData.legs)) {
      this.spiderAnim.animate(playerData, anim, time, wrapper)
    } 
    else {
      // Default to Humanoid for players, zombies, etc.
      this.humanoidAnim.animate(playerData, anim, time, wrapper)
    }
  }

  // Keeping this for backward compatibility if needed, though BaseAnimation has a protected helper
  static resetPivots(playerData: any) {
    if (playerData.leftArmPivot) playerData.leftArmPivot.rotation.z = 0
    if (playerData.rightArmPivot) playerData.rightArmPivot.rotation.z = 0
    if (playerData.leftLegPivot) playerData.leftLegPivot.rotation.z = 0
    if (playerData.rightLegPivot) playerData.rightLegPivot.rotation.z = 0
  }
}
