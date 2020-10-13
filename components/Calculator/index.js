import React, { useState } from 'react';
import { Container, Grid, Typography, TextField, Button } from '@material-ui/core';
import styles from './Calculator.module.css'

export default function () {
    const [altura, setAltura] = useState(0)
    const [peso, setPeso] = useState(0)
    const [imc, setImc] = useState()

    function calculateIMC() {
        const alturam = altura / 100
        setImc((peso / (alturam * alturam)).toFixed(2))
    }
    function verifyIMC() {
        if (imc < 18.5) return 'Abaixo do peso'
        if (imc < 24.9) return 'Peso Normal'
        if (imc < 29.9) return 'Sobre-peso'
        if (imc < 34.9) return 'Obesidade Grau 1'
        if (imc < 39.9) return 'Obesidade Grau 2'
        return "Obesidade Grau 3"

    }

    return (
        <div className={styles.calculator} >
            <Container maxWidth="xs" >
                <Typography variant="h4" >
                    Calculadora
         </Typography>
                <Grid container direction="column" spacing={2} >
                    <Grid item>
                        <TextField label="Altura em cm" variant="filled" fullWidth type="number" value={altura} onChange={(e) => setAltura(e.target.value)} />
                    </Grid>
                    <Grid item>
                        <TextField label="Peso em kg" variant="filled" fullWidth type="number" value={peso} onChange={(e) => setPeso(e.target.value)} />
                    </Grid>
                    <Grid item>
                        <Button variant="contained" color="primary" fullWidth
                            onClick={() => calculateIMC()} >
                            Calcular
                 </Button>
                    </Grid>

                    {imc &&
                        <Grid item>
                            <Typography>
                                O seu IMC é {imc} kg/m2 - {verifyIMC()}
                            </Typography>
                        </Grid>
                    }



                </Grid>
            </Container>
        </div>
    )
}