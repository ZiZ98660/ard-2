export const TitleLogo = ({ title, caption, className }) => {
  return (
    <h1 className={`${className}  title-logo`}>
      <span>{caption}</span>
      
      {title}
    </h1>
  )
}

export const TitleSm = ({ title, className }) => {
  return <h2 className={` ${className}  titleSm `}>{title}</h2>
}
export const Title = ({ title, className }) => {
  return <h1 className={` ${className}  title `}>{title}</h1>
}
