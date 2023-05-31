
import dayjs, { Dayjs } from 'dayjs';
import { now } from "moment";
import { useEffect, useState } from 'react';
import { Button, Table } from "react-bootstrap";
import GridAgencia from "../../components/GridAgencia";
import GridContaAgencia from "../../components/GridConta";
import GridTransacao from "../../components/GridTransacao";
import Http from "../../http";
import { IAgenciaSuspeitas } from "../../Interfaces/IAgenciasSuspeitas";
import { IContasSuspeitas } from "../../Interfaces/IContasSuspeita";
import { ITransacao } from "../../Interfaces/ITransacao";



export default function Suspeita() {
    const [value, setValue] = useState<Dayjs | null>(dayjs('2022-01-01'));
    const [transacao, setTransacao] = useState<ITransacao[]>([]);
    const [contasSuspeita, setContasSuspeita] = useState<IContasSuspeitas[]>([]);
    const [agenciasSuspeita, setAgenciaSuspeita] = useState<IAgenciaSuspeitas[]>([]);
    const [mesAno,setMesAno] =useState<String>("");

   
    useEffect((()=>{
        Http.get("arquivo/recuperaAnoMes")
        .then((response)=>(setMesAno(response.data)))
        .catch(error=>console.log(error))
    }),[])
    const multiple = () => {
   
        Promise.all([
            Http.get<ITransacao[]>(`transacao/suspeita/${value?.format("YYYYMM")}`),
            Http.get<IContasSuspeitas[]>(`transacao/suspeita/conta/${value?.format("YYYYMM")}`),
            Http.get<IAgenciaSuspeitas[]>(`transacao/suspeita/agencia/${value?.format("YYYYMM")}`)

        ]).then((response) => {
            setTransacao(response[0].data);
            setContasSuspeita(response[1].data)
            setAgenciaSuspeita(response[2].data)
        })
    }
    console.log(mesAno.slice(11,22))
    return (
        <>
            {/* <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DatePicker
                    
                    views={['year', 'month']}
                    label="Ano e Mês"
                    minDate={dayjs(mesAno.slice(0,10))}
                    maxDate={dayjs(mesAno.slice(11,22))}
                    value={value}
                    onChange={(newValue) => {
                        setValue(newValue);
                        console.log(value)
                    }}
                    renderInput={(params) => <TextField {...params} helperText={null} />}
                />
            </LocalizationProvider> */}

            <Button variant="primary" onClick={() => { multiple() }}>Realizar análise</Button>

            <h1>Análise de transações suspeitas</h1>

            <hr />
            <h1>Tansações Suspeitas</h1>
            <GridTransacao data={transacao} />

            <hr />

            <h1>Contas Suspeitas</h1>
            <GridContaAgencia data={contasSuspeita} />
            
            <hr />
            <h1>Agência Suspeitas</h1>
            <GridAgencia data={agenciasSuspeita}/>



        </>
    )

}