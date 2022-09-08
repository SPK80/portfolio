import React, {ButtonHTMLAttributes, DetailedHTMLProps} from 'react'

type DefaultButtonPropsType = DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>

export const Button: React.FC<DefaultButtonPropsType> = ({className, ...restProps}) =>
    <button
        className={className}
        {...restProps}
    />