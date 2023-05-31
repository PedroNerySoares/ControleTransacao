import { useEffect, useState } from "react";
import { Button } from 'react-bootstrap';
import Table from "react-bootstrap/esm/Table";
import { IUsuarios } from '../../Interfaces/IUsuarios';
import ModalCadastrar from '../../components/ModalCadastrar';
import ModalEditar from '../../components/ModalEditar';
import ModalExcluir from '../../components/ModalExlcuir';
import Http from '../../http';



function Usuario() {
    const [modalEditarAberta, setModalEditarAberta] = useState(false)
    const [modalExcluirAberta, setModalExcluirAberta] = useState(false)
    const [modalCadastrarAberta, setModalCadastrarAberta] = useState(false)
    const [usuario, setUsuario] = useState<IUsuarios>()
    const [usuarios, setUsuarios] = useState<IUsuarios[]>([])

    useEffect(() => {
        Http.get<IUsuarios[]>('usuario')
            .then(resposta => setUsuarios(resposta.data))
            .catch(error => console.log(error))
    }, [])

    const handleExluirshow = (usuario: IUsuarios) => {

        setUsuario(usuario)
        setModalExcluirAberta(true)

    }
    const handleEditarshow = (usuario: IUsuarios) => {

        setUsuario(usuario)
        setModalEditarAberta(true)

    }
    return (

        <>
            <h2>Usuários Cadastrados</h2>
            <Button variant="primary" onClick={() => { setModalCadastrarAberta(true) }}>Cadastrar</Button>
            <Table striped bordered hover size="sm" >
                <thead>
                    <tr id='0'>
                        <th>#</th>
                        <th>Nome do Usuário</th>
                        <th>Email</th>
                        <th>Opções</th>
                    </tr>
                </thead>
                <tbody >
                    {
                        usuarios.map((usuario, index) => (
                            <tr key={index}>
                                <th>{index + 1}</th>
                                <th>{usuario.usuario}</th>
                                <th>{usuario.email}</th>
                                <th><Button variant="danger"

                                    onClick={() => { handleExluirshow(usuario) }}
                                    value={usuario.id}
                                > Excluir</Button>
                                    <Button variant="primary"
                                        onClick={() => { handleEditarshow(usuario) }}
                                        value={usuario.id}
                                    > Editar</Button>
                                </th>
                            </tr>
                        ))
                    }
                </tbody>

            </Table>
            <ModalCadastrar
                aberta={modalCadastrarAberta}
                aoFechar={() => (setModalCadastrarAberta(false))}

            />
            <ModalEditar
                aberta={modalEditarAberta}
                aoFechar={() => setModalEditarAberta(false)}
                user={usuario}

            />
            <ModalExcluir
                aberta={modalExcluirAberta}
                aoFechar={() => setModalExcluirAberta(false)}
                user={usuario}
            />

        </>
    )
}
export default Usuario