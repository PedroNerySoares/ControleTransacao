import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import Http from '../../http';
import { IUsuarios } from '../../Interfaces/IUsuarios';
import { toast } from 'react-toastify';
interface PropsModalEditar {
    aberta: boolean
    aoFechar: () => void
    onClick?: () => void
    user?: IUsuarios

}

export default function ModalEditar({ aberta, aoFechar, onClick, user }: PropsModalEditar) {



    const [senhaAtual, setSenhaAtual] = useState('')
    const [senhaNova, setSenhaNova] = useState('')
    
    function handleOnSubmit() {
        Http.put(`usuario/${user?.id}`, {
            "email": user?.email,
            "antigaSenha": senhaAtual,
            "novaSenha": senhaNova
        }).then((resposta) => {
            alert("Senha Alterada com sucesso")
        })
        .catch((error) => console.log(error))
    
    }







    return (
        <>
            <Modal show={aberta} onHide={aoFechar} >
                <Modal.Header closeButton>
                    <Modal.Title>{`Editar ${user?.usuario} `}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form >
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>Email</Form.Label>
                            <Form.Control
                                type="email"
                                placeholder={user?.email}
                                disabled
                                tabIndex={5}
                            />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Senha atual</Form.Label>
                            <Form.Control type="password" placeholder="Password" onChange={(evento) => { setSenhaAtual(evento.target.value) }} required/>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Senha nova </Form.Label>
                            <Form.Control type="password" placeholder="Password" onChange={(evento) => { setSenhaNova(evento.target.value) }} required />
                        </Form.Group>
                        </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={aoFechar}>
                        Fechar
                    </Button>
                    <Button variant="primary"  onClick={handleOnSubmit}>
                        Salvar
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

