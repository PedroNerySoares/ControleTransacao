import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Http from '../../http';
import { IUsuarios } from '../../Interfaces/IUsuarios';
import { toast } from 'react-toastify';

interface PropsModalExcluir {
    aberta: boolean
    aoFechar: () => void
    onClick?: () => void
    user?: IUsuarios

}
const ModalExcluir = ({ aberta, aoFechar, user }: PropsModalExcluir) => {



    const Deletar = () => {
        Http.delete(`usuario/${user?.id}`)
            .then((resposta) => {
                alert("Excluido com Sucesso!")
                toast.success("Exluido com sucesso")

            })
            .catch((error) => {
                console.log(error)
            }).finally(
                aoFechar
            )
    }

    return (
        <>

            <Modal show={aberta} onHide={aoFechar}>
                <Modal.Header closeButton>
                    <Modal.Title>{`Tem Certeza que deseja excluir ${user?.usuario}`} </Modal.Title>
                </Modal.Header>
                <Modal.Body>Operação não poderá ser desfeita!</Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={aoFechar}>
                        Fechar
                    </Button>
                    <Button variant="danger" onClick={() => { Deletar() }}>
                        Excluir
                    </Button>
                </Modal.Footer>
            </Modal>
        </>

    );
}

export default ModalExcluir;