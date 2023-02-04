import { Grid } from "@mui/material";
import React from "react";
import cls from "./saleSixteen.module.scss"

const SaleSixteen = () => {
    return (
        <div className={cls.banner}>
            <h2 className="m-b-1">
                New Season Sale</h2>
            <h3 className="mb-1">40%
                OFF</h3>
            <hr className="divider-short-thick" />
            <a href="demo11-shop.html" className="btn btn-light">Shop Now <i
                className="fas fa-long-arrow-alt-right ml-2 pl-1"></i></a>
        </div>
    )
}
export default SaleSixteen; 