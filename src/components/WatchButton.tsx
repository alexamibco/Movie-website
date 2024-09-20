export const WatchButton = ({text, icon, className}) => {
  return (
    <button className= {className}>
        {text} <i className={icon}></i>
    </button>
  )
}
