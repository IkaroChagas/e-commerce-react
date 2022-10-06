import { Popover, PopoverTrigger, PopoverContent } from './styles';
import { useState } from 'react'

export const Modal = () => {
    const [cartVisible, setCartVisible] = useState<boolean>(false)


    return (
        <Popover>
            <PopoverTrigger>
                <button onClick={() => setCartVisible(true)} ></button>

            </PopoverTrigger>
            <PopoverContent>...</PopoverContent>
        </Popover>
    );
}