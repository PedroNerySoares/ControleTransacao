import { useState } from 'react';
import { Form } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Http from '../../http';
interface PropsModalCadastrar {
    aberta: boolean
    aoFechar?: () => void
    onClick?: () => void
}
interface User {

    nome: string;
    email: string;
}



export default function ModalCadastrar({ aberta, aoFechar, onClick }: PropsModalCadastrar) {
    const [usuario, setUsuario] = useState('')
    const [email, setEmail] = useState('')
    const [user, setUser] = useState<User>()

    const handleOnSubmit = (evento: Event) => {
        
        Http.post('usuario', {
            usuario,
            email
        })
            .then( (response)=>{

                alert("Criado com suceeso!")

            }) 
            .catch ((error) => { console.log(error) })


}

return (
    <Modal
        show={aberta}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
    >
        <Modal.Header closeButton>
            <Modal.Title id="contained-modal-title-vcenter">
                Cadastrar novo usuário
            </Modal.Title>
        </Modal.Header>
        <Form onSubmit={(e) => { handleOnSubmit(e.nativeEvent) }}>
            <Modal.Body>

                <Form.Group className="mb-3" controlId="formBasicName">
                    <Form.Label>Nome </Form.Label>
                    <Form.Control type="text" placeholder="Digite seu usuário" onChange={(e) => { setUsuario(e.target.value) }} required />

                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email </Form.Label>
                    <Form.Control type="email" placeholder="Digite seu email" onChange={(e) => { setEmail(e.target.value) }} required />
                    <Form.Text className="text-muted">
                        A senha será enviado para o email cadastrado.
                    </Form.Text>
                </Form.Group>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="primary" type="submit">
                    Cadastrar
                </Button>
                <Button onClick={aoFechar} >Close</Button>

            </Modal.Footer>
        </Form>
    </Modal>
);
}

