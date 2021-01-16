import React, {Component } from "react";
import { AppBar, Toolbar, Typography } from '@material-ui/core';
import { withStyles } from "@material-ui/styles";


const useStyles = (theme) => ({
    title: {
      flexGrow: 1,
      color: "white",
      fontSize: "1.35em",
      paddingRight: "20em"
    },
    pageContainer: {
      position: "relative",
      minHeight: "100vh",
      backgroundColor: "#eeeeee",
      paddingBottom: "10vh",
      overflow: "hidden",
    },
    contentWrap: {
      width: "100%",
    },
  });


class PageWrapper extends Component {
    render() {
        const {classes} = this.props;
        return (
            <div className = {classes.pageContainer}> 
                <AppBar position="static" color="primary">
                    <Toolbar>
                        <Typography variant="h6" className={classes.title}>
                            RaceTyper
                        </Typography>
                        <Typography variant="h6">
                            Sign In
                        </Typography>
                    </Toolbar>
                </AppBar>
                {this.props.children}
            </div>
        );
    }
}

export default withStyles(useStyles)(PageWrapper); 