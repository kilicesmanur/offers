import { Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import ButtonBase from '@material-ui/core/ButtonBase';
import React, {useContext} from 'react'
import OfflerListContext from '../context/offer.list.context'

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        paddingTop: '6px',
        paddingBottom: '6px'
    },
    paper: {
        padding: theme.spacing(2),
        margin: 'auto',
        maxWidth: 900,
        border: '1px solid gray'
    },
    image: {
        width: 128,
        height: 100,
    },
    img: {
        margin: 'auto',
        display: 'block',
        maxWidth: '100%',
        maxHeight: '100%',
    },
    title: {
        fontSize: '0.75rem !important',
        position: 'relative',
        top: '15%',
    },
    sale: {
        position: 'relative',
        top: '15%',
        textAlign: 'right'

    },
    boldfont: {
        fontWeight: 'bold'
    }
}));


function OfferList() {
    const classes = useStyles();
    const { setOfferList,offerList } = useContext(OfflerListContext);

    return (
        <>
            {offerList ? offerList.map((offer, key) => {
                return (
                    <div className={classes.root} key={key}>
                        <Paper className={classes.paper}>
                            <Grid container spacing={2}>
                                <Grid item>
                                    <ButtonBase className={classes.image}>
                                        <img className={classes.img} alt="complex" src={offer.ImagePath} />
                                    </ButtonBase>
                                </Grid>
                                <Grid item xs={12} sm container>
                                    <Grid item xs container direction="column" spacing={2}>
                                        <Grid item xs className={classes.title}>

                                            <Typography gutterBottom variant="subtitle1" className={classes.boldfont}>
                                                {offer.ProductDesc}
                                            </Typography>
                                            <Typography variant="body2" gutterBottom>
                                                {offer.FirmName}
                                            </Typography>

                                        </Grid>
                                    </Grid>
                                    <Grid item className={classes.sale}>
                                        <Typography variant="subtitle1" className={classes.boldfont}>
                                        {offer.QuotaInfo.PremiumWithDiscount.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,').replaceAll(",", "!").replaceAll(".", ",").replaceAll("!", ".") }
                                         TL</Typography>
                                        {offer.SaleClosed ? (<Button variant="outlined" color="primary" >
                                            Telefonda Satın Al
                                        </Button>) : (<Button variant="contained" color="primary">
                                            SATIN AL
                                        </Button>)}
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Paper>
                    </div>
                )
            }) : null}
        </>



    );
}

export default OfferList;
