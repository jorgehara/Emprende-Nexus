import Container from './container'
import cn from 'classnames'
import { EXAMPLE_PATH } from '../lib/constants'

type Props = {
  preview?: boolean
}

const Alert = ({ preview }: Props) => {
  return (
    <div
      className={cn('border-b', {
        'bg-neutral-800 border-neutral-800 text-black': preview,
        'bg-black-50 border-black-200': !preview,
      })}
    >
      <Container>
        <div className="py-2 text-center text-sm ">
          {preview ? (
            <>
              This page is a preview.{' '}
              <a
                href="/api/exit-preview"
                className="underline hover:text-teal-300 duration-200 transition-colors"
              >
                Click here
              </a>{' '}
              to exit preview mode.
            </>
          ) : (
            <>
            <h5 className='text-bold'>

            Alcanza tu Éxito Digital
            </h5>
            </>
          )}
        </div>
      </Container>
    </div>
  )
}

export default Alert
