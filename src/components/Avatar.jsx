import { DropdownArrow } from '@/icons'
import defaultImg from '@/assets/default-avatar.png'

function Avatar(props) {
    const { imgSrc, menu, bottom, right, ...restProps } = props
    return (
        <div className="avatar items-center cursor-pointer">
            <div {...restProps}>
                <img src={imgSrc ? imgSrc : defaultImg} alt="avatar" />
            </div>
            {menu &&
                <DropdownArrow className='absolute -bottom-1 -right-2 w-5'
                    style={{ right: right, bottom: bottom }} />
            }
        </div>
    )
}

export default Avatar