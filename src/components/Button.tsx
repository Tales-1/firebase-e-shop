type ButtonProps = { 
    children:string,
    styles:string,
    func?:() => void
}


const Button:React.FC<ButtonProps> = ({children,styles,func}) => { 

    return(
        <button className={styles} onClick={func}>{children}</button>
    )
}

export default Button