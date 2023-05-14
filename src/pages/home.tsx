import { ImageBg } from '../components/img_bg';
import { Logo } from '../components/logo';

export function Home() {
    return (
        <div className='w-full h-full flex flex-row'>
            <div className='flex flex-grow items-start justify-start'>
                <Logo />
            </div>
            <ImageBg imageUrl='./astronaut.svg' side='right' />
        </div>

    )
}