import classNames from "classnames";
import { twMerge } from 'tailwind-merge';

function Button({ 
    children,
    primary,
    secondary,
    success,
    warning,
    danger,
    rounded,
    outline,
    ...rest
 }) {
    let finalClassNames = classNames(rest.className, 'flex items-center border px-3 py-1.5', {
        'bg-blue-500 border-blue-500 text-white': primary,
        'bg-gray-900 border-gray-900 text-white': secondary,
        'bg-green-500 border-green-500 text-white': success,
        'bg-yellow-500 border-yellow-500 text-white': warning,
        'bg-red-500 border-red-500 text-white': danger,
        'rounded': rounded,
        'bg-white': outline,
        'text-blue-500': outline && primary,
        'text-gray-900': outline && secondary,
        'text-green-500': outline && success,
        'text-yellow-500': outline && warning,
        'text-red-500': outline && danger,
    });

    finalClassNames = twMerge(finalClassNames);

    return(
        <button {...rest} className={finalClassNames}>{children}</button>
    );
}

Button.propTypes = {
    checkVariationValue: ({ primary, secondary, success, warning, danger }) => {
        const count = Number(!!primary) +
            Number(!!secondary) +
            Number(!!success) +
            Number(!!warning) +
            Number(!!danger) 

        if (count > 1) {
            return new Error('Only one of primary, secondary, success, warning, danger can be true.');
        }
    }
};

export default Button;