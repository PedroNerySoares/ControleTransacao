import { useEffect, useState } from "react";
import { Button } from 'react-bootstrap';
import Table from "react-bootstrap/esm/Table";
import ReactLoading from "react-loading";
import { IUsuarios } from '../../Interfaces/IUsuarios';
import Http from '../../http';


function Usuario() {
    const [modalEditarAberta, setModalEditarAberta] = useState(false)
    const [modalExcluirAberta, setModalExcluirAberta] = useState(false)
    const [modalCadastrarAberta, setModalCadastrarAberta] = useState(false)
    const [usuario, setUsuario] = useState<IUsuarios>()
    const [usuarios, setUsuarios] = useState<IUsuarios[]>([])
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        Http.get<IUsuarios[]>('usuario')
            .then(resposta => setUsuarios(resposta.data))
            .catch(error => console.log(error))
            .finally(() => setIsLoading(false))
    }, [modalExcluirAberta])

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
            {isLoading ? (
                    <ReactLoading type="spin" color="black" />
               
            )
                :
                (
                    <>
                        <h2>Usuários Cadastrados</h2>
                        <Button variant="primary" onClick={() => { setModalCadastrarAberta(true) }}>Cadastrar</Button>
                        <Table striped bordered hover size="sm" >
                            <thead>
                                <tr id='0'>
                                    <th>#</th>
                                    <th>Nome do Usuário</th>
                                    <th >Email</th>
                                    <th className="col-sm-2">Opções</th>
                                </tr>
                            </thead>
                            <tbody >
                                {

                                    usuarios.filter(objeto => objeto.usuario.toUpperCase() != 'Admin'.toUpperCase())
                                        .map((usuario, index) => (
                                            <tr key={index}>
                                                <th>{index + 1}</th>
                                                <th>{usuario.usuario}</th>
                                                <th>{usuario.email}</th>
                                                <th ><Button variant="danger"

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
                    </>)}

        </>

    )
}
export default Usuario