import React from 'react'
import styles from '../styles/Form.module.css'
import  Form  from 'react-bootstrap/Form'


const ContentForm = ():JSX.Element => {
	return (
		<div className={styles.form}>
			<Form>
				<Form.Group className="mb-3" controlId="idVisitante">
					<Form.Label>Visitante:</Form.Label>
					<Form.Control type="text" placeholder="Digite o nome do Visitante" />
				</Form.Group>

				<Form.Group className="mb-3" controlId="idPosto">
					<Form.Label>Posto:</Form.Label>
					<Form.Control type="text" placeholder="Digite o nome do Posto" />
				</Form.Group>

				<Form.Group className="mb-3" controlId="idLeito">
					<Form.Label>Leito:</Form.Label>
					<Form.Control type="text" placeholder="Digite o nome/número do Leito" />
				</Form.Group>

				<Form.Group className="mb-3" controlId="idLeito">
					<Form.Label>ID:</Form.Label>
					<Form.Control type="number" placeholder="Digite número de itendificação do crachá" min="1"/>
				</Form.Group>
			</Form>
		</div>
	)
}

export default ContentForm
