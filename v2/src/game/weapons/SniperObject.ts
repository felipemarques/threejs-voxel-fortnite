import * as THREE from 'three'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js'

export const loadSniperModel = (isHandView = false): Promise<any> => {
  return new Promise((resolve, reject) => {
    const loader = new GLTFLoader()
    loader.load(
      '/assets/models/sniper.glb',
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
          // Hand View settings (Starting estimate based on Pistol)
          model.scale.set(1, 1, 1) 
          model.position.set(0, -0.950, 0.20)
          // Rotate to align with hand (Standard forward alignment relative to arm twist)
          model.rotation.set(1.5, 0, 0)
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
        console.error('An error happened loading sniper:', error)
        reject(error)
      }
    )
  })
}
