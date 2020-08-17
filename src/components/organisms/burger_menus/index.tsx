import { Theme, createStyles, makeStyles } from "@material-ui/core/styles"

import AppBar from "@material-ui/core/AppBar"
import Button from "@material-ui/core/Button"
import IconButton from "@material-ui/core/IconButton"
import MenuIcon from "@material-ui/icons/Menu"
import React from "react"
import Toolbar from "@material-ui/core/Toolbar"
import Typography from "@material-ui/core/Typography"

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    menuButton: {
      marginRight: theme.spacing(2),
    },
    root: {
      flexGrow: 1,
    },
    title: {
      flexGrow: 1,
    },
  })
)

export const ButtonAppBar: React.FC = () => {
  const classes = useStyles()

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            aria-label="menu"
            className={classes.menuButton}
            color="inherit"
            edge="start"
          >
            <MenuIcon />
          </IconButton>
          <Typography className={classes.title} variant="h6">
            News
          </Typography>
          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>
    </div>
  )
}
