import type { NextPage } from 'next'
import Card from '../components/Card'
import ContentForm from '../components/Form'
import styles from '../styles/Home.module.css'

import 'bootstrap/dist/css/bootstrap.min.css'


const Home: NextPage = (): JSX.Element => {
  return (
		<div className={styles.container}>
			<ContentForm />
			<Card />
		</div>
  )
}

export default Home
