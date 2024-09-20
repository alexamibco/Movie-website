export const WatchButton = ({text, icon, className}:{text:string, icon: string, className:string}) => {
  return (
    <button className= {className}>
        {text} <i className={icon}></i>
    </button>
  )
}
