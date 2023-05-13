type Props = {
  children?: React.ReactNode
}

const Container = ({ children }: Props) => {
  return <div className="container mx-auto px-5 mt-0">{children}</div>
}

export default Container
