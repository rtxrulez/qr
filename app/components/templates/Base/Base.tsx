import s from './Base.module.scss'

export interface IBase {}

const Base: React.FC<IBase> = () => {
  return <div className={s.container}>Hello world!</div>
}

export default Base
