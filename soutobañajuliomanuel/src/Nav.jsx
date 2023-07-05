import { signOut } from "firebase/auth"
import { Link } from "react-router-dom"
import { auth } from "./firebase/firebase"
import { Box, IconButton, List, ListItem, ListItemButton, SwipeableDrawer } from "@mui/material"
import MenuIcon from '@mui/icons-material/Menu'
import { useState } from "react"

// eslint-disable-next-line react/prop-types
function Nav({loggeado}) {
  const [state, setState] = useState({
    top: false,
    right: false,
  });
  const [toggleNav, setToggleNav] = useState(true)

  const toggleDrawer = (anchor, open) => () => {
    setState({ ...state, [anchor]: open });
  };

  const handleLogin = () => {
    signOut(auth)
      .then(() => {
        // localStorage.removeItem('user')
      })
      .catch((error) => {
        console.log(error.message)
      })
  }
  const list = (anchor) => (
    <Box
      sx={{ width: "100%", backgroundColor: "#242424", height: "100vh"}}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List sx={{ marginTop: "1em", display: "flex", flexDirection: "column", gap: "1em" }}>
        <ListItem key={"Inicio"} disablePadding>
          <ListItemButton sx={{padding: 0}}>
            <Link className="w-full px-5 py-2" to='/'>Inicio</Link>
          </ListItemButton>
        </ListItem>
        <ListItem key={"Perfil"} disablePadding>
          <ListItemButton sx={{padding: 0}}>
            <Link className="w-full px-5 py-2" to='Perfil'>Perfil</Link>
          </ListItemButton>
        </ListItem>
        <ListItem key={"Proyectos"} disablePadding>
          <ListItemButton sx={{padding: 0}}>
            <Link className="w-full px-5 py-2" to='Proyectos'>Proyectos</Link>
          </ListItemButton>
        </ListItem>
        <ListItem key={"Modificar Experiencias"} disablePadding>
          <ListItemButton sx={{padding: 0}}>
            <Link className="w-full px-5 py-2" to='AddReadForm'>Modificar Experiencias</Link>
          </ListItemButton>
        </ListItem>
        <ListItem key={"Registrate"} disablePadding>
          <ListItemButton sx={{padding: 0}}>
            <Link className="w-full px-5 py-2" to='RegisterForm'>Regístrate</Link>
          </ListItemButton>
        </ListItem>
        <ListItem key={"Inicia Sesion"} disablePadding>
          <ListItemButton>
            <button className='text-white' onClick={handleLogin}>{!loggeado ? <Link to='LoginForm'>Inicia Sesion</Link> : "Cerrar Sesion"}</button>
          </ListItemButton>
        </ListItem>
      </List>
    </Box>
  );
  const changeNav = (e) => {
    if(toggleNav){
      e.target.innerHTML = '<'
      setToggleNav(false)
    }
    else{
      e.target.innerHTML = '>'
      setToggleNav(true)
    }
  }
  return (
    <>
      <div className="flex items-center justify-between p-4 bg-slate-800">
        <Link to='/'><h2 className="text-2xl font-bold text-white">Portfolio</h2></Link>
        
        <div className="space-x-3 nav">
          <button className="p-2 py-1 rounded-full" onClick={changeNav}>{'>'}</button>
          {toggleNav ? 
            <div className="flex items-center space-x-3">
              <Link to='/'>Inicio</Link>
              <div className="separator"></div>
              <Link to='Perfil'>Perfil</Link>
              <div className="separator"></div>
              <Link to='Proyectos'>Proyectos</Link>
              <div className="separator"></div>
              {!loggeado ? <Link to='Restricted'>Modificar Experiencias</Link> : <Link to='AddReadForm'>Modificar Experiencias</Link>}
              <div className="separator"></div>
              <Link to='RegisterForm'>Regístrate</Link>
              <button className='text-white' onClick={handleLogin}>{!loggeado ? <Link to='LoginForm'>Inicia Sesion</Link> : "Cerrar Sesion"}</button>
            </div>
          : <div>
            <IconButton
                sx={{padding: 0, outline: "none !important" }}
                color="inherit"
                aria-label="open drawer"
                edge="start"
                onClick={toggleDrawer('top', true)}
              >
                <MenuIcon sx={{width: "32px", height: "32px"}}/>
              </IconButton>
              <SwipeableDrawer
                PaperProps={{sx: {width:"100%", height:"41%"}}}
                anchor={'top'}
                open={state['top']}
                onClose={toggleDrawer('top', false)}
                onOpen={toggleDrawer('top', true)}
              >
                {list('top')}
              </SwipeableDrawer>
          </div>}
        </div>
        
      
        <IconButton
          id="outer-container"
          sx={{padding: 0, outline: "none !important" }}
          color="inherit"
          aria-label="open drawer"
          edge="start"
          onClick={toggleDrawer('right', true)}
        >
          <MenuIcon sx={{width: "32px", height: "32px"}}/>
        </IconButton>
        <SwipeableDrawer
          PaperProps={{sx: {width:"40%"}}}
          anchor={'right'}
          open={state['right']}
          onClose={toggleDrawer('right', false)}
          onOpen={toggleDrawer('right', true)}
        >
          {list('right')}
        </SwipeableDrawer>
        
      </div>
    </>
  )
}

export default Nav