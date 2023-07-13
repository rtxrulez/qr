import s from './Home.module.scss'

export interface IHome {}

const Home: React.FC<IHome> = () => {
  return <div className={s.container}>Hello world!</div>
}

export default Home
