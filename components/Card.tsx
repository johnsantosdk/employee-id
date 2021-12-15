import React from 'react'
import styles from '../styles/Card.module.css'
import Image from './Image'
import Footer from './Footer'
import Content from './Content'
import ID from './ID'

const Card = (): JSX.Element => {
	return (
		<div>
			<div className={styles.card}>
				<Image />
				<Content />
				<Footer />
				<ID />
			</div>
		</div>
	)
}

export default Card
