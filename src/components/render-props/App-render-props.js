import React from 'react';
import Input from './Input';

const AppRenderProps = ()=>{
    return(
        <div>
            <Input
                renderTextBelow={
                    (value) => <> The value is {value} </>
                }
            />
            <Input
                renderTextBelow={
                    (value) => <> Multiplied value is {value * 10} </>
                }
            />
        </div>
    )
};

export default AppRenderProps;

/**
 * Here the first Input component will just display the text
 * and the second Input component will multiply the value by 10
 * 
 * Now in future if a requirement comes to chnage the text to bold then we do not have to make changes in the Input component.
 * The Input component will hold the main logic and we dont need to change it to accomodate any future requirements.
 * You just pass the Input component a JSX we want so no bugs and no major changes needed.
 */