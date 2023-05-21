import { Grid } from "@mui/material";
import { Container } from "@mui/system";

import cls from "./featuresFifteen.module.scss"

const FeaturesFifteen = () => {
    return (
        <div className={cls.featureBoxesContainer}>
            <Container maxWidth="xl">
                <Grid container spacing={2}>
                    <Grid item xs={12} sm={6} lg={3}>
                        <div className={cls.featureBox}>
                            <span>1.</span>
                            <div className={cls.featureBoxContent}>
                                <h3 className="mb-0 pb-1">Customer Support</h3>
                                <h5 className="mb-1 pb-1">You Wont Be Alone</h5>
                            </div>
                        </div>
                    </Grid>
                    <Grid item xs={12} sm={6} lg={3}>
                        <div className={cls.featureBox}>
                            <span>2.</span>
                            <div className={cls.featureBoxContent}>
                                <h3 className="mb-0 pb-1">Fully Customizable</h3>
                                <h5 className="mb-1 pb-1">Tons Of Options</h5>
                            </div>
                        </div>
                    </Grid>
                    <Grid item xs={12} sm={6} lg={3}>
                        <div className={cls.featureBox}>
                            <span>3.</span>
                            <div className={cls.featureBoxContent}>
                                <h3 className="mb-0 pb-1">Powerful Admin</h3>
                                <h5 className="mb-1 pb-1">Made To Help You</h5>
                            </div>
                        </div>
                    </Grid>
                    <Grid item xs={12} sm={6} lg={3}>
                        <div className={cls.featureBox}>
                            <span>4.</span>
                            <div className={cls.featureBoxContent}>
                                <h3 className="mb-0 pb-1">Powerful Admin</h3>
                                <h5 className="mb-1 pb-1">Made To Help You</h5>
                            </div>
                        </div>
                    </Grid>
                </Grid>
            </Container>
        </div>
    )
}

export default FeaturesFifteen;