import { useLoader } from '@react-three/fiber'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'

export default function Icon(){
    const gltf = useLoader(GLTFLoader, '/personal_computer/scene.gltf')
    return (
        <primitive object={gltf.scene} />
    )

}