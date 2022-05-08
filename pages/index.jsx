import Head from 'next/head'
import Image from 'next/image'
import { Canvas } from "@react-three/fiber";
import SocialMediaIcons from '../components/SocialMediaIcons/SocialMediaIcons'
import Icon from '../components/3dIcon/Icon';

export default function Home() {
  return (
    <>
    <div className='flex flex-wrap flex-col items-center justify-center'>
    <div className='w-3/6 h-3/6'>
    <Canvas shadows={true} camera={{position:[-6,7,7]}} className='bg-white'>
    <ambientLight color='white' intensity={0.3}/>
    <Icon/>
    </Canvas>
    </div>
    <SocialMediaIcons/>
    </div>
    </>
 )
}
