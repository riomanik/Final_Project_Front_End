// import React from 'react';
// import PropTypes from 'prop-types';
// import { makeStyles } from '@material-ui/core/styles';
// import AppBar from '@material-ui/core/AppBar';
// import Tabs from '@material-ui/core/Tabs';
// import Tab from '@material-ui/core/Tab';
// import Typography from '@material-ui/core/Typography';
// import Box from '@material-ui/core/Box';
// import MainNavbarTrainer from '../Navbars/MainNavbarTrainer';
// function TabPanel(props) {
//     const { children, value, index, ...other } = props;

//     return (
//         <Typography
//             component="div"
//             role="tabpanel"
//             hidden={value !== index}
//             id={`scrollable-auto-tabpanel-${index}`}
//             aria-labelledby={`scrollable-auto-tab-${index}`}
//             {...other}
//         >
//             {value === index && <Box p={3}>{children}</Box>}
//         </Typography>
//     );
// }

// TabPanel.propTypes = {
//     children: PropTypes.node,
//     index: PropTypes.any.isRequired,
//     value: PropTypes.any.isRequired,
// };

// function a11yProps(index) {
//     return {
//         id: `scrollable-auto-tab-${index}`,
//         'aria-controls': `scrollable-auto-tabpanel-${index}`,
//     };
// }

// const useStyles = makeStyles(theme => ({
//     root: {
//         position: "fixed",
//         marginTop: "90px",

//         marginLeft: "220px",
//         flexGrow: 1,
//         width: '70%',
//         height: "100%",
//         backgroundColor: theme.palette.background.paper,
//     }
// }));

// export default function ScrollableTabsButtonAuto() {
//     const classes = useStyles();
//     const [value, setValue] = React.useState(0);
//     const handleChange = (event, newValue) => {
//         setValue(newValue);
//     };

//     return (
//         <div>
//             <div className={classes.root}>
//                 <h2> CREATE CLASS</h2>
//                 <MainNavbarTrainer />
//                 <AppBar position="static" color="default">
//                     <Tabs
//                         value={value}
//                         onChange={handleChange}
//                         indicatorColor="primary"
//                         textColor="primary"
//                         variant="scrollable"
//                         scrollButtons="auto"
//                         centered
//                         aria-label="scrollable auto tabs example" >
//                         <Tab label="Step One" {...a11yProps(0)} />
//                         <Tab label="Step Two" {...a11yProps(1)} />
//                         <Tab label="Step Three" {...a11yProps(2)} />
//                         <Tab label="Step Four" {...a11yProps(3)} />
//                         <Tab label="Step Five" {...a11yProps(4)} />
//                         <Tab label="Step Six" {...a11yProps(5)} />
//                     </Tabs>
//                 </AppBar>
//                 <TabPanel value={value} index={0}>
//                     &raquo; Klik tombol "BUAT KELAS".
//                     <p></p>
//                     <div><img class="card-img-top" src={require("assets/img/step/create-class-1.png")} alt="" style={{ height: "470px", width: "1000px" }} /> </div>
//                 </TabPanel>
//                 <TabPanel value={value} index={1}>
//                     &raquo; Isikan form -form yang telah tersedia.
//                <div>&raquo; Klik tombol "Next" , jika semua form telah diisi.</div>
//                     <img class="card-img-top" src={require("assets/img/step/create-class-2.png")} alt="" style={{ height: "470px", width: "1000px" }} />
//                 </TabPanel>
//                 <TabPanel value={value} index={2}>
//                     &raquo;  Klik tombol "Upload", untuk mengunggah berkas yang akan anda bagikan.
//             <div>&raquo; Klik tombol "Next" , jika sudah selesai mengunggah berkas.</div>
//                     <img class="card-img-top" src={require("assets/img/step/create-class-3.png")} alt="" style={{ height: "470px", width: "1000px" }} />
//                 </TabPanel>
//                 <TabPanel value={value} index={3}>
//                     &raquo; Tinjau kembali, penjelasan dan berkas mengenai kelas yang telah anda buat dan unggah.
//                 <div>&raquo; Klok tombol "Create class" , untuk membuat kelas. </div>
//                     <img class="card-img-top" src={require("assets/img/step/create-class-4.png")} alt="" style={{ height: "470px", width: "1000px" }} />
//                 </TabPanel>
//                 <TabPanel value={value} index={4}>
//                     &raquo;  Selamat Kelas anda telah Dibuat
//                     <img class="card-img-top" src={require("assets/img/step/create-class-5.png")} alt="" style={{ height: "470px", width: "1000px" }} />
//                 </TabPanel>
//                 <TabPanel value={value} index={5}>
//                     &raquo;   additional
//       </TabPanel>
//             </div>

//         </div >
//     );
// }