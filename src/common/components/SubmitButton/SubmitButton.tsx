import React, {CSSProperties, PropsWithChildren} from 'react'
import s from "./submitButton.module.scss"

type PropsType = PropsWithChildren & {
  style?: CSSProperties | undefined
}

export const SubmitButton: React.FC<PropsType> =
  ({style, children}) =>
    (
      <button type={"submit"} className={s.submitButton} style={style}>
        {children}
      </button>
    )