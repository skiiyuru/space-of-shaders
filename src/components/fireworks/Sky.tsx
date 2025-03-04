import { Sky as DreiSky } from '@react-three/drei'
import * as THREE from 'three'

const phi = THREE.MathUtils.degToRad(92.2)
const theta = THREE.MathUtils.degToRad(180)
const sunPosition = new THREE.Vector3().setFromSphericalCoords(1, phi, theta)

const Sky = () => {
  return (
    <DreiSky
      turbidity={10}
      rayleigh={3}
      mieCoefficient={0.005}
      mieDirectionalG={0.95}
      azimuth={180}
      sunPosition={sunPosition}
      // distance={}
      // inclination={}
    />
  )
}

export default Sky
