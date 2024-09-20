export const MoviePrincipalData =({text, icon}:{text:string, icon:string}) =>{
    return(
      <span className="movieBasicInfo"> <i className={icon}></i> {text}</span>
    )
  }