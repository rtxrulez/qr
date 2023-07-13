import s from './Base.module.scss'

export interface IBaseTemplate {}

const BaseTemplate: React.FC<IBaseTemplate> = () => {
  return <div className={s.container}>Hello world!</div>
}

export default BaseTemplate
