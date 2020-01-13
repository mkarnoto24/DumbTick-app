// import React, { useState, useEffect } from 'react';
// import { fade, makeStyles } from '@material-ui/core/styles';
// import AppBar from '@material-ui/core/AppBar';
// import Toolbar from '@material-ui/core/Toolbar';
// //import Link from '@material-ui/core/Link';
// import IconButton from '@material-ui/core/IconButton';
// import Typography from '@material-ui/core/Typography';
// import Badge from '@material-ui/core/Badge';
// import MenuItem from '@material-ui/core/MenuItem';
// import Menu from '@material-ui/core/Menu';
// import AccountCircle from '@material-ui/icons/AccountCircle';
// import MailIcon from '@material-ui/icons/Mail';
// import NotificationsIcon from '@material-ui/icons/Notifications';
// import MoreIcon from '@material-ui/icons/MoreVert';
// import VpnKeyRoundedIcon from '@material-ui/icons/VpnKeyRounded';
// import PersonAddOutlinedIcon from '@material-ui/icons/PersonAddOutlined';
// import '../../App.css';
// import { Button } from '@material-ui/core';
// import Modal from "react-responsive-modal";
// import TextField from '@material-ui/core/TextField';



// const useStyles = makeStyles(theme => ({
//     grow: {
//         flexGrow: 1,
//     },
//     menuButton: {
//         marginRight: theme.spacing(2),
//     },
//     title: {
//         display: 'none',
//         [theme.breakpoints.up('sm')]: {
//             display: 'block',
//         },
//     },
//     search: {
//         position: 'relative',
//         borderRadius: theme.shape.borderRadius,
//         backgroundColor: fade(theme.palette.common.white, 0.15),
//         '&:hover': {
//             backgroundColor: fade(theme.palette.common.white, 0.25),
//         },
//         marginRight: theme.spacing(2),
//         marginLeft: 0,
//         width: '100%',
//         [theme.breakpoints.up('sm')]: {
//             marginLeft: theme.spacing(3),
//             width: 'auto',
//         },
//     },
//     inputRoot: {
//         color: 'inherit',
//     },
//     inputInput: {
//         padding: theme.spacing(1, 1, 1, 7),
//         transition: theme.transitions.create('width'),
//         width: '100%',
//         [theme.breakpoints.up('md')]: {
//             width: 200,
//         },
//     },
//     sectionDesktop: {
//         display: 'none',
//         [theme.breakpoints.up('md')]: {
//             display: 'flex',
//         },
//     },
//     sectionMobile: {
//         display: 'flex',
//         [theme.breakpoints.up('md')]: {
//             display: 'none',
//         },
//     },
//     paper: {
//         position: 'absolute',
//         width: 400,
//         backgroundColor: theme.palette.background.paper,
//         border: '2px solid #000',
//         boxShadow: theme.shadows[5],
//         padding: theme.spacing(2, 4, 3),
//     },
// }));

// export default function PrimarySearchAppBar() {

//     const classes = useStyles();
//     const [anchorEl, setAnchorEl] = React.useState(null);
//     const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

//     const isMenuOpen = Boolean(anchorEl);
//     const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

//     //===== START MODAL LOGIN =====//

//     const [open, setOpen] = React.useState(false);
//     const [username, setUsername] = useState('');
//     const handleOpen = () => {
//         setOpen(true);
//     };
//     const handleLogin = (e) => {
//         setUsername(e.target.value)
//         alert(e.target.value)
//     }

//     const onChangeUsername = e => {
//         setUsername(e.target.value)
//         alert(e.target.value)
//     }
//     const handleClose = () => {
//         setOpen(false);
//     };
//     //===== END MODAL LOGIN =====//

//     const handleProfileMenuOpen = event => {
//         setAnchorEl(event.currentTarget);
//     };

//     const handleMobileMenuClose = () => {
//         setMobileMoreAnchorEl(null);
//     };

//     const handleMenuClose = () => {
//         setAnchorEl(null);
//         handleMobileMenuClose();
//     };

//     const handleMobileMenuOpen = event => {
//         setMobileMoreAnchorEl(event.currentTarget);
//     };


//     const menuId = 'primary-search-account-menu';
//     const renderMenu = (
//         <Menu
//             anchorEl={anchorEl}
//             anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
//             id={menuId}
//             keepMounted
//             transformOrigin={{ vertical: 'top', horizontal: 'right' }}
//             open={isMenuOpen}
//             onClose={handleMenuClose}
//         >
//             <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
//             <MenuItem onClick={handleMenuClose}>My account</MenuItem>
//         </Menu>
//     );

//     const mobileMenuId = 'primary-search-account-menu-mobile';
//     const renderMobileMenu = (
//         <Menu
//             anchorEl={mobileMoreAnchorEl}
//             anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
//             id={mobileMenuId}
//             keepMounted
//             transformOrigin={{ vertical: 'top', horizontal: 'right' }}
//             open={isMobileMenuOpen}
//             onClose={handleMobileMenuClose}
//         >
//             <MenuItem>
//                 <IconButton aria-label="show 4 new mails" color="inherit">
//                     <Badge badgeContent={4} color="secondary">
//                         <MailIcon />
//                     </Badge>
//                 </IconButton>
//                 <p>Messages</p>
//             </MenuItem>
//             <MenuItem>
//                 <IconButton aria-label="show 11 new notifications" color="inherit">
//                     <Badge badgeContent={11} color="secondary">
//                         <NotificationsIcon />
//                     </Badge>
//                 </IconButton>
//                 <p>Notifications</p>
//             </MenuItem>
//             <MenuItem onClick={handleProfileMenuOpen}>
//                 <IconButton
//                     aria-label="account of current user"
//                     aria-controls="primary-search-account-menu"
//                     aria-haspopup="true"
//                     color="inherit"
//                 >
//                     <AccountCircle />
//                 </IconButton>
//                 <p>Profile</p>
//             </MenuItem>
//         </Menu>
//     );

//     return (
//         <div className={classes.grow}>
//             <AppBar position="static" style={{ background: '#eb4d55' }} className="AppbarHeader">
//                 <Toolbar className="ToolBarHeader">
//                     <Typography className={classes.title}>
//                         <span className="dumbtick-title">Dumb-Tick</span>
//                     </Typography>

//                     <div className={classes.grow} />
//                     <div className={classes.sectionDesktop}>
//                         <Button color="inherit" size="small">
//                             <PersonAddOutlinedIcon />
//                             <p className="text-register">Register</p>
//                         </Button>
//                         <Button color="inherit" size="small" onClick={handleOpen}>
//                             <VpnKeyRoundedIcon />
//                             <p className="text-register">Login</p>
//                         </Button>
//                         <IconButton
//                             edge="end"
//                             aria-label="account of current user"
//                             aria-controls={menuId}
//                             aria-haspopup="true"
//                             onClick={handleProfileMenuOpen}
//                             color="inherit"
//                         >
//                             <AccountCircle />
//                         </IconButton>
//                     </div>
//                     <div className={classes.sectionMobile}>
//                         <IconButton
//                             aria-label="show more"
//                             aria-controls={mobileMenuId}
//                             aria-haspopup="true"
//                             onClick={handleMobileMenuOpen}
//                             color="inherit"
//                         >
//                             <MoreIcon />
//                         </IconButton>
//                     </div>
//                 </Toolbar>
//             </AppBar>
//             <Modal open={open} effect="fadeInUp"
//                 onClose={handleClose} center={true}
//                 className="modal-login"
//             >
//                 <div className="modal-login">
//                     <h2>LOGIN</h2>
//                     <form>
//                         <div className="form-input">
//                             <TextField label="Username"
//                                 value={username}
//                                 onChange={e => onChangeUsername(e)}
//                             />
//                         </div>
//                         <div className="form-input">

//                             <TextField
//                                 id="filled-password-input"
//                                 label="Password"
//                                 type="password"
//                                 autoComplete="current-password"
//                             />
//                         </div>
//                         <div className="button-login">
//                             <Button variant="contained"
//                                 onClick={handleLogin} color="secondary">
//                                 Login
//                             </Button>
//                         </div>

//                     </form>
//                 </div>

//             </Modal>
//             {renderMobileMenu}
//             {renderMenu}
//         </div>
//     );
// }
