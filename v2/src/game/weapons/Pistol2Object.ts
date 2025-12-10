import * as THREE from 'three'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js'

export const loadPistol2Model = (isHandView = false): Promise<any> => {
  return new Promise((resolve, reject) => {
    const loader = new GLTFLoader()
    loader.load(
      '/assets/models/pistol03.glb',
      (gltf) => {
        const model = gltf.scene.clone()
        
        // Setup shadows
        model.traverse((child) => {
          if (child instanceof THREE.Mesh) {
            child.castShadow = true
            child.receiveShadow = true
          }
        })

        if (isHandView) {
          // Hand View settings
          model.scale.set(0.4, 0.4, 0.4)
          model.position.set(0, -0.90, 0.20) // Adjusted position
          // Rotate to align with hand (Arm is rotated -90deg X, so we align relative to that)
          model.rotation.set(1.5, 4.75, 0)

        } else {
          // Floor/Object View settings
          model.scale.set(3, 3, 3)
          model.position.y = 3
        }
        
        resolve({
          mesh: model
        })
      },
      undefined,
      (error) => {
        console.error('An error happened loading pistol2:', error)
        reject(error)
      }
    )
  })
}
