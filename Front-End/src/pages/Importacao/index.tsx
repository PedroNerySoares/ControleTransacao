import { useEffect, useState } from 'react';
import { useNavigate } from "react-router-dom";

import { Button } from 'react-bootstrap';
import Table from "react-bootstrap/esm/Table";
import Form from 'react-bootstrap/Form';

import { IArquivos } from '../../Interfaces/IArquivos';

import Papa from 'papaparse';
import Http from '../../http';
import { ToastContainer, toast } from 'react-toastify';


function Importacao() {


    const fileReader = new FileReader();
    const navigate = useNavigate();
    const [arquivos, setArquivos] = useState<IArquivos[]>([])
    const [file, setFile] = useState("");
    const [importado, setImportado] = useState(false);

    const onChangeArquivo = (e: any) => {
        setFile(e.target.files[0]);

    }
    const notifySuccess = () => (

        toast.success("Arquivo importado com sucesso!"),
        setImportado(true)


    );
    const notifyFail = () => (

        toast.error("Ocorreu um erro inesperado, Arquivo não importado!"),
        setImportado(true)


    );
    const parserCSV = (e: any) => {

        Papa.parse(file, {
            header: true,
            delimiter: ",",
            skipEmptyLines: true,
            complete: function (results) {

                const jsonData = results.data; // Obtém os dados do CSV como um array
                const jsonString = JSON.stringify(jsonData); // Converte o array para uma string JSON
                console.log(jsonString)

                Http.post("arquivo", jsonString, {
                    headers: {
                        'Content-Type': 'application/json',
                        'Accept': 'application/json'
                    }
                }
                ).then(function (response) {
                    toast.success("Arquivo importado com sucesso!")
                    setImportado(true)
                }).catch(function (error) {
                    toast.error("Ocorreu um erro inesperado, Arquivo não importado!")
                    setImportado(true)
                    console.log(error )
                    console.log(error.response.data.message)

                }
                )



            }


        }
        )

    }

    useEffect(() => {
        Http.get<IArquivos[]>('arquivo')
            .then(resposta => setArquivos(resposta.data))
            .catch(error => console.log(error))
    }, [importado])

    return (
        <>


            <ToastContainer position="top-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss={false}
                draggable
                pauseOnHover
                theme="dark"
            />
            <h2>Importar Transações</h2>
            <Form.Group controlId="formFile" className="mb-3">
                <Form.Control type="file" accept='.csv' onChange={onChangeArquivo} />

            </Form.Group>
            <Button variant="primary" onClick={parserCSV}>Importar</Button>

            <hr />
            <h2>Importações Realizadas</h2>
            <Table striped>
                <thead>
                    <tr>

                        <th>Data de Transação</th>
                        <th>Data da Importação</th>

                    </tr>
                </thead>
                <tbody>
                    {
                        arquivos.map((arquivo, index) => (

                            < tr key={index}>

                                <td>{arquivo.dataTransacao.toString()}</td>
                                <td>{arquivo.dataImportacao.toString()}</td>
                                <td><Button onClick={() => { navigate(`/DetalheImportacao/${arquivo.id}`) }}> Detalhar</Button> </td>

                            </tr>
                        ))
                    }
                </tbody>
            </Table>

        </>
    )
}
export default Importacao;