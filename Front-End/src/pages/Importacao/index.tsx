import { useEffect, useState } from 'react';
import { useNavigate } from "react-router-dom";

import { Button } from 'react-bootstrap';
import Table from "react-bootstrap/esm/Table";
import Form from 'react-bootstrap/Form';

import { IArquivos } from '../../Interfaces/IArquivos';

import Papa from 'papaparse';
import xml2js from 'xml2js';
import  parse from 'fast-xml-parser';

import Http from '../../http';
import { ToastContainer, toast } from 'react-toastify';
import { XMLParser } from 'fast-xml-parser';


function Importacao() {


    const fileReader = new FileReader();
    const navigate = useNavigate();
    const [arquivos, setArquivos] = useState<IArquivos[]>([])
    const [file, setFile] = useState("");
    const [importado, setImportado] = useState(false);
    const [nameFile, setNameFile] = useState();
    const [typeFile, setTypeFile] = useState();

    const onChangeArquivo = (e: any) => {
        setFile(e.target.files[0]);
        setNameFile(e.target.files[0].name)
        setTypeFile(e.target.files[0].type)

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
        console.log(typeFile)
        if (typeFile == "text/csv") {
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
                        console.log(error)
                        console.log(error.response.data.message)

                    }
                    )



                }


            }
            )
        } else {

            const options = {
                ignoreAttributes: false,
                attributeNamePrefix : "@_"
            };

            const xml=`<?xml version="1.0" encoding="UTF-8"?> <transacoes>   <transacao>     <origem>       <banco>BANCO DO BRASIL</banco>       <agencia>0001</agencia>       <conta>00001-1</conta>     </origem>     <destino>       <banco>BANCO BRADESCO</banco>       <agencia>0001</agencia>       <conta>00001-1</conta>     </destino>     <valor>8000</valor>     <data>2022-01-02T07:30:00</data>   </transacao>   <transacao>     <origem>       <banco>BANCO SANTANDER</banco>       <agencia>0001</agencia>       <conta>00001-1</conta>     </origem>     <destino>       <banco>BANCO BRADESCO</banco>       <agencia>0001</agencia>       <conta>00001-1</conta>     </destino>     <valor>210</valor>     <data>2022-01-02T08:12:00</data>   </transacao>   <transacao>     <origem>       <banco>BANCO SANTANDER</banco>       <agencia>0001</agencia>       <conta>00002-1</conta>     </origem>     <destino>       <banco>BANCO BRADESCO</banco>       <agencia>0001</agencia>       <conta>00001-1</conta>     </destino>     <valor>79800.22</valor>     <data>2022-01-02T08:44:00</data>   </transacao>   <transacao>     <origem>       <banco>BANCO BRADESCO</banco>       <agencia>0001</agencia>       <conta>00001-1</conta>     </origem>     <destino>       <banco>BANCO SANTANDER</banco>       <agencia>0001</agencia>       <conta>00002-1</conta>     </destino>     <valor>11.50</valor>     <data>2022-01-02T12:32:00</data>   </transacao>   <transacao>     <origem>       <banco>BANCO BANRISUL</banco>       <agencia>0001</agencia>       <conta>00001-1</conta>     </origem>     <destino>       <banco>BANCO BRADESCO</banco>       <agencia>0001</agencia>       <conta>00001-1</conta>     </destino>     <valor>100</valor>     <data>2022-01-02T16:30:00</data>   </transacao>   <transacao>     <origem>       <banco>BANCO ITAU</banco>       <agencia>0001</agencia>       <conta>00001-1</conta>     </origem>     <destino>       <banco>BANCO BRADESCO</banco>       <agencia>0001</agencia>       <conta>00001-1</conta>     </destino>     <valor>19000.50</valor>     <data>2022-01-02T16:55:00</data>   </transacao>   <transacao>     <origem>       <banco>BANCO ITAU</banco>       <agencia>0001</agencia>       <conta>00002-1</conta>     </origem>     <destino>       <banco>BANCO BRADESCO</banco>       <agencia>0001</agencia>       <conta>00001-1</conta>     </destino>     <valor>1000</valor>     <data>2022-01-02T19:30:00</data>   </transacao>   <transacao>     <origem>       <banco>NUBANK</banco>       <agencia>0001</agencia>       <conta>00001-1</conta>     </origem>     <destino>       <banco>BANCO BRADESCO</banco>       <agencia>0001</agencia>       <conta>00001-1</conta>     </destino>     <valor>2000</valor>     <data>2022-01-02T19:34:00</data>   </transacao>   <transacao>     <origem>       <banco>BANCO INTER</banco>       <agencia>0001</agencia>       <conta>00001-1</conta>     </origem>     <destino>       <banco>BANCO BRADESCO</banco>       <agencia>0001</agencia>       <conta>00001-1</conta>     </destino>     <valor>300</valor>     <data>2022-01-02T20:30:00</data>   </transacao>   <transacao>     <origem>       <banco>CAIXA ECONOMICA FEDERAL</banco>       <agencia>0001</agencia>       <conta>00001-1</conta>     </origem>     <destino>       <banco>BANCO BRADESCO</banco>       <agencia>0001</agencia>       <conta>00001-1</conta>     </destino>     <valor>900</valor>     <data>2022-01-02T22:30:00</data>   </transacao> </transacoes>`
            const parser = new XMLParser(options);
            const output = parser.parse(xml);

            console.log(file)
            console.log(output)







        }

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