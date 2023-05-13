import Alert from './alert'
import AutoDiagnostico from './auto-diagnostico'
import Footer from './footer'
import Meta from './meta'
import Questions from './questions'
import SubmitButton from './submitbutton'


type Props = {
  preview?: boolean
  children: React.ReactNode
}

const Layout = ({ preview, children }: Props) => {
  return (
    <>
      <Meta />
      <div className="min-h-screen">
        <Alert preview={preview} />
        <main>{children}</main>
        <AutoDiagnostico/>
        <SubmitButton />
        <Questions/>
      </div>
      <Footer />
    </>
  )
}

export default Layout
