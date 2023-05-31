import { useEffect, useState } from "react";
import { Form, Table } from "react-bootstrap";
import { useParams } from "react-router-dom";
import GridTransacao from "../../components/GridTransacao";
import Http from "../../http";
import { ITransacaoDetalhe } from "../../Interfaces/ITransacaoDetalhe";



export default function DetalheImportacao() {
    const { id } = useParams()
    const [transacaoDetalhe, setTransacaoDetalhe] = useState<ITransacaoDetalhe>();
    useEffect(() => {
        Http.get<ITransacaoDetalhe>(`arquivo/${id}`)
            .then((response) => (setTransacaoDetalhe(response.data)))
            .catch((error) => (console.log(error)))
    }, [])

    return (
        <>

            <h2>Detalhes da Importação</h2>
            <hr />

            <Form.Label >Importdado em:</Form.Label>
            <Form.Control type="Text" aria-describedby="passwordHelpBlock" value={transacaoDetalhe?.dataImportacao.toString()} disabled />

            <Form.Label >Importdado por:</Form.Label>
            <Form.Control type="Text" aria-describedby="passwordHelpBlock" value={transacaoDetalhe?.usuario} disabled />

            <Form.Label >Data da transação:</Form.Label>
            <Form.Control type="Text" aria-describedby="passwordHelpBlock" value={transacaoDetalhe?.dataTransacao.toString()} disabled />

            <h2>Transações importadas</h2>
            <GridTransacao data={transacaoDetalhe?.transacao} />


        </>
    )
}
