import React from 'react'
import logo from '../public/airtonsantos.jpg'
import styles from '../styles/Image.module.css'

console.log(logo)

const Image = ():JSX.Element => {
	return (
		<div className={styles.divImg}>
			<img className={styles.img} src="/img/logo-cmm-with-out-background.png" />
		</div>
	)
}

export default Image
