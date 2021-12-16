import React from 'react'
import styles from '../styles/Footer.module.css'

const Footer = ():JSX.Element => {
	return (
		<div className={styles.divFooter}>
			<p className={styles.pFooter}>
				É permitida visita de pessoas com idade igual ou maior a 18 anos.
			</p>
			<p className={styles.pFooter}>
				A visita de outro familiar será condicionada à devolução deste.
			</p>
			<p className={styles.pFooter}>
				Horário de visita está sujeito a alterações conforme a rotina.
			</p>
		</div>
	)
}

export default Footer
