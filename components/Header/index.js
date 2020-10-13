import { Container, Grid, Typography} from '@material-ui/core';
import styles from'./Header.module.css';

 export default function Header (){
    return (

        <div className={styles.header} >
            <Container fixed >
               <Grid container justify="center" alignItems="center" space={6} >
                   <Grid item xs={12} sm={6} >
                    <Typography variant="h3" className={styles.header_title} >
                        Calcule o seu IMC
                    </Typography >
                       O IMC é o Indice de Massa Corporal e é utilizado para saber se o peso esta de acordo com a altura
                    <Typography>

                    </Typography>
                   </Grid>
                   <Grid item xs={12} sm={6} >
                       <img className={styles.img} src="/medic.png" alt="médico e paciente" />

                   </Grid>

               </Grid>
            </Container>
        </div>
    )
}