import clsx from 'clsx';
import { ImgBg } from '../interfaces/img_bg.interface';

export function ImageBg({ imageUrl, side }: ImgBg) {
    const floatSide = side === 'left' ? 'float-left' : 'float-right';
    const imageClass = clsx('w-[50wh] h-[100vh]', floatSide);

    return (
        <div className={imageClass}>
            <img src={imageUrl} alt="Imagem" className="w-full h-full" />
        </div>
    );
};
