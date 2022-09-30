
function cardfuature ({background,icono,texto}){
return(
    <article className={background} >
        <i className={icono}></i>
        <h3>{texto}</h3>
    </article>
)
}
export default cardfuature;