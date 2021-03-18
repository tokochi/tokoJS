import React, { useState} from 'react';
   import {makeStyles,createMuiTheme,ThemeProvider,List,ListSubheader,ListItem,Divider,Collapse,ListItemIcon,ListItemText,RootRef,} from '@material-ui/core';
   import { AiFillFolder,AiFillFolderOpen, AiOutlinePlusSquare, AiOutlineMinusSquare } from "react-icons/ai";
   import npmLogo from"../assets/Npm.png"
   import cssLogo from"../assets/css3.png"
   import htmlLogo from"../assets/HTML5.png"
   import jsLogo from"../assets/JavaScript.png"
   import mgLogo from"../assets/mongodb3.png"
   import nodeLogo from"../assets/node.png"
   import nodejsLogo from"../assets/nodejs.png"
   import share from"../assets/share.png"
   import reactLogo from"../assets/react.png"

const myTheme = createMuiTheme({
  layout: {
  scrollbarStyles: {
      overflowY: "scroll",
      "&::-webkit-scrollbar": {
        width: 8
      },
      "&::-webkit-scrollbar-track": {
        boxShadow: "inset 0 0 6px rgba(0,0,0,0.00)",
        webkitBoxShadow: "inset 0 0 6px rgba(0,0,0,0.00)"
      },
      "&::-webkit-scrollbar-thumb": {
        backgroundColor: "rgba(0,0,0,.2)",
        outline: "1px solid slategrey",
        borderRadius: 7
      }
    }
  }});
const useStyles = makeStyles((theme) =>({
	
	root: {
        width: '100%',
        maxWidth: '270px',
        paddingTop:0,
        // backgroundColor: '#212121', 
      },
      nested: {
        padding:0, 
        marginLeft:5,
      },
      sideBar: {
		color: 'white',
		position: 'fixed',
		left: '0px',
		top: '0px',
		width: '270px',
    maxHeight:'100%',
    overflow:'auto',
    overflowX: 'hidden',
		backgroundColor: '#212121',
    "&::-webkit-scrollbar": {
      width: 8
    },
    "&::-webkit-scrollbar-track": {
      boxShadow: "inset 0 0 6px rgba(0,0,0,0.00)",
      webkitBoxShadow: "inset 0 0 6px rgba(0,0,0,0.00)"
    },
    "&::-webkit-scrollbar-thumb": {
      backgroundColor: "rgba(0,0,0,.2)",
      outline: "1px solid slategrey",
      borderRadius: 7
    }
	}}));

export default function SideBar() {
	const classes = useStyles();
    const [open, setOpen] = React.useState(false);
    const [open1, setOpen1] = React.useState(false);
    const [open2, setOpen2] = React.useState(false);
    const [open3, setOpen3] = React.useState(false);
    const [open4, setOpen4] = React.useState(false);
    const [open5, setOpen5] = React.useState(false);
    const [open6, setOpen6] = React.useState(false);
    const [open7, setOpen7] = React.useState(false);
    const [open8, setOpen8] = React.useState(false);
    const handleClick = () => {setOpen(!open);};
    const handleClick1 = () => {setOpen1(!open1);};
    const handleClick2 = () => {setOpen2(!open2);};
    const handleClick3 = () => {setOpen3(!open3);};
    const handleClick4 = () => {setOpen4(!open4);};
    const handleClick5 = () => {setOpen5(!open5);};
    const handleClick6 = () => {setOpen6(!open6);};
    const handleClick7 = () => {setOpen7(!open7);};
    const handleClick8 = () => {setOpen8(!open8);};

    const [conditional, setConditional] = React.useState(false);
    const [Loops, setLoops] = React.useState(false);
    const [Functions, setFunctions] = React.useState(false);
    const [Message, setMessage] = React.useState(false);
    const [Texts, setTexts] = React.useState(false);
    const [Dates, setDates] = React.useState(false);
    const [Numbers, setNumbers] = React.useState(false);
    const [Arrays, setArrays] = React.useState(false);
    const [Objects, setObjects] = React.useState(false);
    const [Asynchronous, setAsynchronous] = React.useState(false);
    const [DOM, setDOM] = React.useState(false);
    const [API, setAPI] = React.useState(false);

    const [Axios, setAxios] = React.useState(false);
    const [Express, setExpress] = React.useState(false);
    
    const [HTTP, setHTTP] = React.useState(false);
    const [HTTPS, setHTTPS] = React.useState(false);
    const [FS, setFS] = React.useState(false);
    const [PATH, setPATH] = React.useState(false);
    const [OS, setOS] = React.useState(false);
    
    


    const impoort = [{logo:nodejsLogo,copy:"text",title:"title"}]
    const npm = [{logo:npmLogo,copy:"npm install axios",title:"axios"},]
    const ReactJS = [{logo:reactLogo,copy:"text",title:"title"}]
    const NodeJS = [{logo:nodeLogo,copy:"text",title:"title"},{logo:nodeLogo,copy:"text",title:"title",folder:"test"},{logo:nodeLogo,copy:"text",title:"title",folder:"test"}]
    const CSS = [{logo:cssLogo,copy:"text",title:"title"}]
    const MongoDB = [{logo:mgLogo,copy:"text",title:"title"}]
    const HTML = [{logo:htmlLogo,copy:"text",title:"title"}]
    
    
   

	return (
<div className={classes.sideBar}><List  component="nav" aria-labelledby="nested-list-subheader"  className={classes.root}>
   {/* // ----> JavaScript */}
   <div id="JavaScript"><ListItem button onClick={handleClick}  style={{padding:0, marginLeft:5}}>{open ? <AiOutlineMinusSquare style={{color: '#C09553', fontSize:'15', marginRight:'5',padding:0}}/> : <AiOutlinePlusSquare style={{color: '#C09553', fontSize:'15', marginRight:'5',padding:0}}/>}{open ? <AiFillFolderOpen style={{color: '#C09553', fontSize:'25', marginRight:'5',padding:0}}/> : <AiFillFolder style={{color: '#C09553', fontSize:'25', marginRight:'5',padding:0}}/>}JavaScript</ListItem >
     <div id="Message Box">
            <Collapse in={open} timeout="auto" unmountOnExit>
               <List component="div" disablePadding>
                    <ListItem button onClick={() => {setMessage(!Message)}}  style={{padding:0, marginLeft:5}}>
                         {Message ? <AiOutlineMinusSquare style={{color: '#C09553', fontSize:'15', margin:'0 0 0 15',padding:0}}/> : <AiOutlinePlusSquare style={{color: '#C09553', fontSize:'15', margin:'0 0 0 15',padding:0}}/>}
                         {Message ? <AiFillFolderOpen style={{color: '#C09553', fontSize:'25', marginRight:'5',padding:0}}/> : <AiFillFolder style={{color: '#C09553', fontSize:'25', marginRight:'5',padding:0}}/>}
                         Message Box
                     </ListItem >
                     <div id="item">
                        <Collapse in={Message} timeout="auto" unmountOnExit>
                         <List component="div" disablePadding>
                            <ListItem button onClick={() => {navigator.clipboard.writeText('console.log(" "); ')}}className={classes.nested} style={{paddingLeft: 40}}>
                            <img src={jsLogo} alt="Logo" height='12px'  style={{padding:0, marginRight:5}} /> {'console.log'}
                            <ListItemText primary="" />
                            </ListItem>
                         </List>
                        </Collapse>
                    </div>
                     <div id="item">
                        <Collapse in={Message} timeout="auto" unmountOnExit>
                         <List component="div" disablePadding>
                            <ListItem button onClick={() => {navigator.clipboard.writeText('console.error(" ");')}}className={classes.nested} style={{paddingLeft: 40}}>
                            <img src={jsLogo} alt="Logo" height='12px'  style={{padding:0, marginRight:5}} /> {'console.error'}
                            <ListItemText primary="" />
                            </ListItem>
                         </List>
                        </Collapse>
                    </div>
                    <div id="item">
                        <Collapse in={Message} timeout="auto" unmountOnExit>
                         <List component="div" disablePadding>
                            <ListItem button onClick={() => {navigator.clipboard.writeText('console.info(" ");')}}className={classes.nested} style={{paddingLeft: 40}}>
                            <img src={jsLogo} alt="Logo" height='12px'  style={{padding:0, marginRight:5}} /> {'console.info'}
                            <ListItemText primary="" />
                            </ListItem>
                         </List>
                        </Collapse>
                    </div>
                    <div id="item">
                        <Collapse in={Message} timeout="auto" unmountOnExit>
                         <List component="div" disablePadding>
                            <ListItem button onClick={() => {navigator.clipboard.writeText('alert(" ");')}}className={classes.nested} style={{paddingLeft: 40}}>
                            <img src={jsLogo} alt="Logo" height='12px'  style={{padding:0, marginRight:5}} /> {'window alert'}
                            <ListItemText primary="" />
                            </ListItem>
                         </List>
                        </Collapse>
                    </div>
                    <div id="item">
                        <Collapse in={Message} timeout="auto" unmountOnExit>
                         <List component="div" disablePadding>
                            <ListItem button onClick={() => {navigator.clipboard.writeText('confirm("Press a button!");// returns a boolean ok=true')}}className={classes.nested} style={{paddingLeft: 40}}>
                            <img src={jsLogo} alt="Logo" height='12px'  style={{padding:0, marginRight:5}} /> {'confirm box'}
                            <ListItemText primary="" />
                            </ListItem>
                         </List>
                        </Collapse>
                    </div>
                    <div id="item">
                        <Collapse in={Message} timeout="auto" unmountOnExit>
                         <List component="div" disablePadding>
                            <ListItem button onClick={() => {navigator.clipboard.writeText('prompt(label text, input defaultText)')}}className={classes.nested} style={{paddingLeft: 40}}>
                            <img src={jsLogo} alt="Logo" height='12px'  style={{padding:0, marginRight:5}} /> {'prompt box'}
                            <ListItemText primary="" />
                            </ListItem>
                         </List>
                        </Collapse>
                    </div>
                 </List>
             </Collapse> </div>

     <div id="Control flow">
            <Collapse in={open} timeout="auto" unmountOnExit>
               <List component="div" disablePadding>
                    <ListItem button onClick={() => {setConditional(!conditional)}}  style={{padding:0, marginLeft:5}}>
                         {conditional ? <AiOutlineMinusSquare style={{color: '#C09553', fontSize:'15', margin:'0 0 0 15',padding:0}}/> : <AiOutlinePlusSquare style={{color: '#C09553', fontSize:'15', margin:'0 0 0 15',padding:0}}/>}
                         {conditional ? <AiFillFolderOpen style={{color: '#C09553', fontSize:'25', marginRight:'5',padding:0}}/> : <AiFillFolder style={{color: '#C09553', fontSize:'25', marginRight:'5',padding:0}}/>}
                         Control flow
                     </ListItem >
                    <div id="item">
                        <Collapse in={conditional} timeout="auto" unmountOnExit>
                         <List component="div" disablePadding>
                            <ListItem button onClick={() => {navigator.clipboard.writeText("if (condition) {statement_1;} \n else {statement_2;}")}}className={classes.nested} style={{paddingLeft: 40}}>
                            <img src={jsLogo} alt="Logo" height='12px'  style={{padding:0, marginRight:5}} /> {'if...else'}
                            <ListItemText primary="" />
                            </ListItem>
                         </List>
                        </Collapse>
                    </div>
                    <div id="item">
                        <Collapse in={conditional} timeout="auto" unmountOnExit>
                         <List component="div" disablePadding>
                            <ListItem button onClick={() => {navigator.clipboard.writeText("if (condition_1) {statement_1;} \n else if (condition_2) {statement_2;}\n else if (condition_n) {statement_n;} \n else {statement_last;}")}}className={classes.nested} style={{paddingLeft: 40}}>
                            <img src={jsLogo} alt="Logo" height='12px'  style={{padding:0, marginRight:5}} /> {'if...else if'}
                            <ListItemText primary="" />
                            </ListItem>
                         </List>
                        </Collapse>
                    </div>
                    <div id="item">
                        <Collapse in={conditional} timeout="auto" unmountOnExit>
                         <List component="div" disablePadding>
                            <ListItem button onClick={() => {navigator.clipboard.writeText("switch (fruits) {	\n case 'Banana': statements_1 // check if fruits = Banana	\n break;	\n case 'Orange': statements_2 //check if fruits = Orange 	\n break;	\n default: // optional	\n statements_default	\n break;}")}}className={classes.nested} style={{paddingLeft: 40}}>
                            <img src={jsLogo} alt="Logo" height='12px'  style={{padding:0, marginRight:5}} /> {'switch'}
                            <ListItemText primary="" />
                            </ListItem>
                         </List>
                        </Collapse>
                    </div>
                    <div id="item">
                        <Collapse in={conditional} timeout="auto" unmountOnExit>
                         <List component="div" disablePadding>
                            <ListItem button onClick={() => {navigator.clipboard.writeText("try {tryCode}\n catch(err) // it may be a throw statement custom error message or just a default error object\n {Block of code to handle errors}\n finally {Block of code to be executed regardless of the try..catch result}")}}className={classes.nested} style={{paddingLeft: 40}}>
                            <img src={jsLogo} alt="Logo" height='12px'  style={{padding:0, marginRight:5}} /> {'try...catch'}
                            <ListItemText primary="" />
                            </ListItem>
                         </List>
                        </Collapse>
                    </div>
                 </List>
             </Collapse></div></div>
     <div id="Loops">
            <Collapse in={open} timeout="auto" unmountOnExit>
               <List component="div" disablePadding>
                    <ListItem button onClick={() => {setLoops(!Loops)}}  style={{padding:0, marginLeft:5}}>
                         {Loops ? <AiOutlineMinusSquare style={{color: '#C09553', fontSize:'15', margin:'0 0 0 15',padding:0}}/> : <AiOutlinePlusSquare style={{color: '#C09553', fontSize:'15', margin:'0 0 0 15',padding:0}}/>}
                         {Loops ? <AiFillFolderOpen style={{color: '#C09553', fontSize:'25', marginRight:'5',padding:0}}/> : <AiFillFolder style={{color: '#C09553', fontSize:'25', marginRight:'5',padding:0}}/>}
                         Loops
                     </ListItem >
                    <div id="item">
                        <Collapse in={Loops} timeout="auto" unmountOnExit>
                         <List component="div" disablePadding>
                            <ListItem button onClick={() => {navigator.clipboard.writeText("for (let i=0; i<5 ; i++){ //(initial; condition; increment)\n statement}")}}className={classes.nested} style={{paddingLeft: 40}}>
                            <img src={jsLogo} alt="Logo" height='12px'  style={{padding:0, marginRight:5}} /> {'for'}
                            <ListItemText primary="" />
                            </ListItem>
                         </List>
                        </Collapse>
                    </div>
                    <div id="item">
                        <Collapse in={Loops} timeout="auto" unmountOnExit>
                         <List component="div" disablePadding>
                            <ListItem button onClick={() => {navigator.clipboard.writeText("while (condition) {statement}")}}className={classes.nested} style={{paddingLeft: 40}}>
                            <img src={jsLogo} alt="Logo" height='12px'  style={{padding:0, marginRight:5}} /> {'while'}
                            <ListItemText primary="" />
                            </ListItem>
                         </List>
                        </Collapse>
                    </div>
                    <div id="item">
                        <Collapse in={Loops} timeout="auto" unmountOnExit>
                         <List component="div" disablePadding>
                            <ListItem button onClick={() => {navigator.clipboard.writeText("for (const key in object) // loop through Keys object \n {statement}")}}className={classes.nested} style={{paddingLeft: 40}}>
                            <img src={jsLogo} alt="Logo" height='12px'  style={{padding:0, marginRight:5}} /> {'for...in (Objects)'}
                            <ListItemText primary="" />
                            </ListItem>
                         </List>
                        </Collapse>
                    </div>
                    <div id="item">
                        <Collapse in={Loops} timeout="auto" unmountOnExit>
                         <List component="div" disablePadding>
                            <ListItem button onClick={() => {navigator.clipboard.writeText("for (const key of array) // loop through value\n {statement}")}}className={classes.nested} style={{paddingLeft: 40}}>
                            <img src={jsLogo} alt="Logo" height='12px'  style={{padding:0, marginRight:5}} /> {'for...of (Arrays)'}
                            <ListItemText primary="" />
                            </ListItem>
                         </List>
                        </Collapse>
                    </div>
                 </List>
             </Collapse> </div> 
     <div id="Functions">
            <Collapse in={open} timeout="auto" unmountOnExit>
               <List component="div" disablePadding>
                    <ListItem button onClick={() => {setFunctions(!Functions)}}  style={{padding:0, marginLeft:5}}>
                         {Functions ? <AiOutlineMinusSquare style={{color: '#C09553', fontSize:'15', margin:'0 0 0 15',padding:0}}/> : <AiOutlinePlusSquare style={{color: '#C09553', fontSize:'15', margin:'0 0 0 15',padding:0}}/>}
                         {Functions ? <AiFillFolderOpen style={{color: '#C09553', fontSize:'25', marginRight:'5',padding:0}}/> : <AiFillFolder style={{color: '#C09553', fontSize:'25', marginRight:'5',padding:0}}/>}
                         Functions
                     </ListItem >
                    <div id="item">
                        <Collapse in={Functions} timeout="auto" unmountOnExit>
                         <List component="div" disablePadding>
                            <ListItem button onClick={() => {navigator.clipboard.writeText('let boundFunc = func.bind(this, arg1, arg2)')}}className={classes.nested} style={{paddingLeft: 40}}>
                            <img src={jsLogo} alt="Logo" height='12px'  style={{padding:0, marginRight:5}} /> {'bind()'}
                            <ListItemText primary="" />
                            </ListItem>
                         </List>
                        </Collapse>
                    </div>
                    <div id="item">
                        <Collapse in={Functions} timeout="auto" unmountOnExit>
                         <List component="div" disablePadding>
                            <ListItem button onClick={() => {navigator.clipboard.writeText('func.call(this, arg1, arg2)')}}className={classes.nested} style={{paddingLeft: 40}}>
                            <img src={jsLogo} alt="Logo" height='12px'  style={{padding:0, marginRight:5}} /> {'call()'}
                            <ListItemText primary="" />
                            </ListItem>
                         </List>
                        </Collapse>
                    </div>
                    <div id="item">
                        <Collapse in={Functions} timeout="auto" unmountOnExit>
                         <List component="div" disablePadding>
                            <ListItem button onClick={() => {navigator.clipboard.writeText('func.apply(this, [arg1, arg2])')}}className={classes.nested} style={{paddingLeft: 40}}>
                            <img src={jsLogo} alt="Logo" height='12px'  style={{padding:0, marginRight:5}} /> {'apply()'}
                            <ListItemText primary="" />
                            </ListItem>
                         </List>
                        </Collapse>
                    </div>
                 </List>
             </Collapse> </div>
     <div id="Texts">
            <Collapse in={open} timeout="auto" unmountOnExit>
               <List component="div" disablePadding>
                    <ListItem button onClick={() => {setTexts(!Texts)}}  style={{padding:0, marginLeft:5}}>
                         {Texts ? <AiOutlineMinusSquare style={{color: '#C09553', fontSize:'15', margin:'0 0 0 15',padding:0}}/> : <AiOutlinePlusSquare style={{color: '#C09553', fontSize:'15', margin:'0 0 0 15',padding:0}}/>}
                         {Texts ? <AiFillFolderOpen style={{color: '#C09553', fontSize:'25', marginRight:'5',padding:0}}/> : <AiFillFolder style={{color: '#C09553', fontSize:'25', marginRight:'5',padding:0}}/>}
                         Texts
                     </ListItem >
                     <div id="item">
                        <Collapse in={Texts} timeout="auto" unmountOnExit>
                         <List component="div" disablePadding>
                            <ListItem button onClick={() => {navigator.clipboard.writeText('number.toString() //returns new String')}}className={classes.nested} style={{paddingLeft: 40}}>
                            <img src={jsLogo} alt="Logo" height='12px'  style={{padding:0, marginRight:5}} /> {'convert to string'}
                            <ListItemText primary="" />
                            </ListItem>
                         </List>
                        </Collapse>
                    </div>
                    <div id="item">
                        <Collapse in={Texts} timeout="auto" unmountOnExit>
                         <List component="div" disablePadding>
                            <ListItem button onClick={() => {navigator.clipboard.writeText('str1.concat(str2,str3)')}}className={classes.nested} style={{paddingLeft: 40}}>
                            <img src={jsLogo} alt="Logo" height='12px'  style={{padding:0, marginRight:5}} /> {'Joins strings'}
                            <ListItemText primary="" />
                            </ListItem>
                         </List>
                        </Collapse>
                    </div>
                    <div id="item">
                        <Collapse in={Texts} timeout="auto" unmountOnExit>
                         <List component="div" disablePadding>
                            <ListItem button onClick={() => {navigator.clipboard.writeText('str.includes("world", start index)//returns boolean')}}className={classes.nested} style={{paddingLeft: 40}}>
                            <img src={jsLogo} alt="Logo" height='12px'  style={{padding:0, marginRight:5}} /> {'contains string'}
                            <ListItemText primary="" />
                            </ListItem>
                         </List>
                        </Collapse>
                    </div>
                    <div id="item">
                        <Collapse in={Texts} timeout="auto" unmountOnExit>
                         <List component="div" disablePadding>
                            <ListItem button onClick={() => {navigator.clipboard.writeText('str.indexOf("welcome", start index)//returns index')}}className={classes.nested} style={{paddingLeft: 40}}>
                            <img src={jsLogo} alt="Logo" height='12px'  style={{padding:0, marginRight:5}} /> {'position of string'}
                            <ListItemText primary="" />
                            </ListItem>
                         </List>
                        </Collapse>
                    </div>
                    <div id="item">
                        <Collapse in={Texts} timeout="auto" unmountOnExit>
                         <List component="div" disablePadding>
                            <ListItem button onClick={() => {navigator.clipboard.writeText('str.startsWith("Hello", start index)//returns boolean')}}className={classes.nested} style={{paddingLeft: 40}}>
                            <img src={jsLogo} alt="Logo" height='12px'  style={{padding:0, marginRight:5}} /> {'starts with'}
                            <ListItemText primary="" />
                            </ListItem>
                         </List>
                        </Collapse>
                    </div>
                    <div id="item">
                        <Collapse in={Texts} timeout="auto" unmountOnExit>
                         <List component="div" disablePadding>
                            <ListItem button onClick={() => {navigator.clipboard.writeText('str.endsWith("Hello", start index)//returns boolean')}}className={classes.nested} style={{paddingLeft: 40}}>
                            <img src={jsLogo} alt="Logo" height='12px'  style={{padding:0, marginRight:5}} /> {'ends with'}
                            <ListItemText primary="" />
                            </ListItem>
                         </List>
                        </Collapse>
                    </div>
                    <div id="item">
                        <Collapse in={Texts} timeout="auto" unmountOnExit>
                         <List component="div" disablePadding>
                            <ListItem button onClick={() => {navigator.clipboard.writeText('string.replace(searchvalue, newvalue) //returns new String')}}className={classes.nested} style={{paddingLeft: 40}}>
                            <img src={jsLogo} alt="Logo" height='12px'  style={{padding:0, marginRight:5}} /> {'replace'}
                            <ListItemText primary="" />
                            </ListItem>
                         </List>
                        </Collapse>
                    </div>
                    <div id="item">
                        <Collapse in={Texts} timeout="auto" unmountOnExit>
                         <List component="div" disablePadding>
                            <ListItem button onClick={() => {navigator.clipboard.writeText('str.repeat(4) //returns new String')}}className={classes.nested} style={{paddingLeft: 40}}>
                            <img src={jsLogo} alt="Logo" height='12px'  style={{padding:0, marginRight:5}} /> {'repeat'}
                            <ListItemText primary="" />
                            </ListItem>
                         </List>
                        </Collapse>
                    </div>
                    <div id="item">
                        <Collapse in={Texts} timeout="auto" unmountOnExit>
                         <List component="div" disablePadding>
                            <ListItem button onClick={() => {navigator.clipboard.writeText('string.split(separator, limit) //returns new Array of Strings')}}className={classes.nested} style={{paddingLeft: 40}}>
                            <img src={jsLogo} alt="Logo" height='12px'  style={{padding:0, marginRight:5}} /> {'split'}
                            <ListItemText primary="" />
                            </ListItem>
                         </List>
                        </Collapse>
                    </div>
                    <div id="item">
                        <Collapse in={Texts} timeout="auto" unmountOnExit>
                         <List component="div" disablePadding>
                            <ListItem button onClick={() => {navigator.clipboard.writeText('array.join(separator, limit) //returns the array as a string')}}className={classes.nested} style={{paddingLeft: 40}}>
                            <img src={jsLogo} alt="Logo" height='12px'  style={{padding:0, marginRight:5}} /> {'array to string'}
                            <ListItemText primary="" />
                            </ListItem>
                         </List>
                        </Collapse>
                    </div>
                    <div id="item">
                        <Collapse in={Texts} timeout="auto" unmountOnExit>
                         <List component="div" disablePadding>
                            <ListItem button onClick={() => {navigator.clipboard.writeText('string.slice(start index, end index) //returns new String')}}className={classes.nested} style={{paddingLeft: 40}}>
                            <img src={jsLogo} alt="Logo" height='12px'  style={{padding:0, marginRight:5}} /> {'slice extracts'}
                            <ListItemText primary="" />
                            </ListItem>
                         </List>
                        </Collapse>
                    </div>
                    
                    <div id="item">
                        <Collapse in={Texts} timeout="auto" unmountOnExit>
                         <List component="div" disablePadding>
                            <ListItem button onClick={() => {navigator.clipboard.writeText('string.toUpperCase() //returns new String')}}className={classes.nested} style={{paddingLeft: 40}}>
                            <img src={jsLogo} alt="Logo" height='12px'  style={{padding:0, marginRight:5}} /> {'Upper Case'}
                            <ListItemText primary="" />
                            </ListItem>
                         </List>
                        </Collapse>
                    </div>
                    <div id="item">
                        <Collapse in={Texts} timeout="auto" unmountOnExit>
                         <List component="div" disablePadding>
                            <ListItem button onClick={() => {navigator.clipboard.writeText('str.toLowerCase() //returns new String')}}className={classes.nested} style={{paddingLeft: 40}}>
                            <img src={jsLogo} alt="Logo" height='12px'  style={{padding:0, marginRight:5}} /> {'Lower Case'}
                            <ListItemText primary="" />
                            </ListItem>
                         </List>
                        </Collapse>
                    </div>
                    <div id="item">
                        <Collapse in={Texts} timeout="auto" unmountOnExit>
                         <List component="div" disablePadding>
                            <ListItem button onClick={() => {navigator.clipboard.writeText('string.trim() //returns new String')}}className={classes.nested} style={{paddingLeft: 40}}>
                            <img src={jsLogo} alt="Logo" height='12px'  style={{padding:0, marginRight:5}} /> {'trim'}
                            <ListItemText primary="" />
                            </ListItem>
                         </List>
                        </Collapse>
                    </div>
                 </List>
             </Collapse> </div>
     <div id="Dates">
            <Collapse in={open} timeout="auto" unmountOnExit>
               <List component="div" disablePadding>
                    <ListItem button onClick={() => {setDates(!Dates)}}  style={{padding:0, marginLeft:5}}>
                         {Dates ? <AiOutlineMinusSquare style={{color: '#C09553', fontSize:'15', margin:'0 0 0 15',padding:0}}/> : <AiOutlinePlusSquare style={{color: '#C09553', fontSize:'15', margin:'0 0 0 15',padding:0}}/>}
                         {Dates ? <AiFillFolderOpen style={{color: '#C09553', fontSize:'25', marginRight:'5',padding:0}}/> : <AiFillFolder style={{color: '#C09553', fontSize:'25', marginRight:'5',padding:0}}/>}
                         Dates
                     </ListItem >
                     <div id="item">
                        <Collapse in={Dates} timeout="auto" unmountOnExit>
                         <List component="div" disablePadding>
                            <ListItem button onClick={() => {navigator.clipboard.writeText('var date = new Date() // returns date object Wed Mar 25 2015 01:00:00 GMT+0100')}}className={classes.nested} style={{paddingLeft: 40}}>
                            <img src={jsLogo} alt="Logo" height='12px'  style={{padding:0, marginRight:5}} /> {'date & time'}
                            <ListItemText primary="" />
                            </ListItem>
                         </List>
                        </Collapse>
                    </div>
                     <div id="item">
                        <Collapse in={Dates} timeout="auto" unmountOnExit>
                         <List component="div" disablePadding>
                            <ListItem button onClick={() => {navigator.clipboard.writeText('Date.toDateString() // returns date string  Sat Mar 13 2021 ')}}className={classes.nested} style={{paddingLeft: 40}}>
                            <img src={jsLogo} alt="Logo" height='12px'  style={{padding:0, marginRight:5}} /> {'date only'}
                            <ListItemText primary="" />
                            </ListItem>
                         </List>
                        </Collapse>
                    </div>
                    <div id="item">
                        <Collapse in={Dates} timeout="auto" unmountOnExit>
                         <List component="div" disablePadding>
                            <ListItem button onClick={() => {navigator.clipboard.writeText('Date.toTimeString() // returns  Time String 15:10:09 GMT+0100')}}className={classes.nested} style={{paddingLeft: 40}}>
                            <img src={jsLogo} alt="Logo" height='12px'  style={{padding:0, marginRight:5}} /> {'Time only'}
                            <ListItemText primary="" />
                            </ListItem>
                         </List>
                        </Collapse>
                    </div>
                    <div id="item">
                        <Collapse in={Dates} timeout="auto" unmountOnExit>
                         <List component="div" disablePadding>
                            <ListItem button onClick={() => {navigator.clipboard.writeText('Date.getDate() // returns  Number from 1 to 31')}}className={classes.nested} style={{paddingLeft: 40}}>
                            <img src={jsLogo} alt="Logo" height='12px'  style={{padding:0, marginRight:5}} /> {'day of month'}
                            <ListItemText primary="" />
                            </ListItem>
                         </List>
                        </Collapse>
                    </div>
                    <div id="item">
                        <Collapse in={Dates} timeout="auto" unmountOnExit>
                         <List component="div" disablePadding>
                            <ListItem button onClick={() => {navigator.clipboard.writeText('Date.getDay() // returns  Number from 0 to 6')}}className={classes.nested} style={{paddingLeft: 40}}>
                            <img src={jsLogo} alt="Logo" height='12px'  style={{padding:0, marginRight:5}} /> {'day of week'}
                            <ListItemText primary="" />
                            </ListItem>
                         </List>
                        </Collapse>
                    </div>
                    <div id="item">
                        <Collapse in={Dates} timeout="auto" unmountOnExit>
                         <List component="div" disablePadding>
                            <ListItem button onClick={() => {navigator.clipboard.writeText('Date.getMonth() // returns  Number from 0 to 11')}}className={classes.nested} style={{paddingLeft: 40}}>
                            <img src={jsLogo} alt="Logo" height='12px'  style={{padding:0, marginRight:5}} /> {'Month'}
                            <ListItemText primary="" />
                            </ListItem>
                         </List>
                        </Collapse>
                    </div>
                    <div id="item">
                        <Collapse in={Dates} timeout="auto" unmountOnExit>
                         <List component="div" disablePadding>
                            <ListItem button onClick={() => {navigator.clipboard.writeText('Date.getFullYear() // returns  Number')}}className={classes.nested} style={{paddingLeft: 40}}>
                            <img src={jsLogo} alt="Logo" height='12px'  style={{padding:0, marginRight:5}} /> {'year'}
                            <ListItemText primary="" />
                            </ListItem>
                         </List>
                        </Collapse>
                    </div>
                    <div id="item">
                        <Collapse in={Dates} timeout="auto" unmountOnExit>
                         <List component="div" disablePadding>
                            <ListItem button onClick={() => {navigator.clipboard.writeText('Date.getHours() // returns  Number from 0 to 23')}}className={classes.nested} style={{paddingLeft: 40}}>
                            <img src={jsLogo} alt="Logo" height='12px'  style={{padding:0, marginRight:5}} /> {'Hours'}
                            <ListItemText primary="" />
                            </ListItem>
                         </List>
                        </Collapse>
                    </div>
                    <div id="item">
                        <Collapse in={Dates} timeout="auto" unmountOnExit>
                         <List component="div" disablePadding>
                            <ListItem button onClick={() => {navigator.clipboard.writeText('Date.getMinutes() // returns  Number from 0 to 59')}}className={classes.nested} style={{paddingLeft: 40}}>
                            <img src={jsLogo} alt="Logo" height='12px'  style={{padding:0, marginRight:5}} /> {'Minutes'}
                            <ListItemText primary="" />
                            </ListItem>
                         </List>
                        </Collapse>
                    </div>
                    <div id="item">
                        <Collapse in={Dates} timeout="auto" unmountOnExit>
                         <List component="div" disablePadding>
                            <ListItem button onClick={() => {navigator.clipboard.writeText('Date.getSeconds() // returns  Number from 0 to 59')}}className={classes.nested} style={{paddingLeft: 40}}>
                            <img src={jsLogo} alt="Logo" height='12px'  style={{padding:0, marginRight:5}} /> {'Seconds'}
                            <ListItemText primary="" />
                            </ListItem>
                         </List>
                        </Collapse>
                    </div>
                   
                    <div id="item">
                        <Collapse in={Dates} timeout="auto" unmountOnExit>
                         <List component="div" disablePadding>
                            <ListItem button onClick={() => {navigator.clipboard.writeText('Date.now() // returns  Number of milliseconds since 1970/01/01')}}className={classes.nested} style={{paddingLeft: 40}}>
                            <img src={jsLogo} alt="Logo" height='12px'  style={{padding:0, marginRight:5}} /> {'milliseconds since 1970'}
                            <ListItemText primary="" />
                            </ListItem>
                         </List>
                        </Collapse>
                    </div>
                    <div id="item">
                        <Collapse in={Dates} timeout="auto" unmountOnExit>
                         <List component="div" disablePadding>
                            <ListItem button onClick={() => {navigator.clipboard.writeText('Date.toJSON() // returns a JSON date YYYY-MM-DDTHH:mm:ss.sssZ')}}className={classes.nested} style={{paddingLeft: 40}}>
                            <img src={jsLogo} alt="Logo" height='12px'  style={{padding:0, marginRight:5}} /> {'JSON date'}
                            <ListItemText primary="" />
                            </ListItem>
                         </List>
                        </Collapse>
                    </div>
                    <div id="item">
                        <Collapse in={Dates} timeout="auto" unmountOnExit>
                         <List component="div" disablePadding>
                            <ListItem button onClick={() => {navigator.clipboard.writeText("const getAge = (birthDate = (YYYY-MM-DD)) => Math.floor((new Date() - new Date(birthDate).getTime()) / 3.15576e10);")}}className={classes.nested} style={{paddingLeft: 40}}>
                            <img src={jsLogo} alt="Logo" height='12px'  style={{padding:0, marginRight:5}} /> {'Get Age from date'}
                            <ListItemText primary="" />
                            </ListItem>
                         </List>
                        </Collapse>
                    </div>
                 </List>
             </Collapse> </div>
     <div id="Numbers">
            <Collapse in={open} timeout="auto" unmountOnExit>
               <List component="div" disablePadding>
                    <ListItem button onClick={() => {setNumbers(!Numbers)}}  style={{padding:0, marginLeft:5}}>
                         {Numbers ? <AiOutlineMinusSquare style={{color: '#C09553', fontSize:'15', margin:'0 0 0 15',padding:0}}/> : <AiOutlinePlusSquare style={{color: '#C09553', fontSize:'15', margin:'0 0 0 15',padding:0}}/>}
                         {Numbers ? <AiFillFolderOpen style={{color: '#C09553', fontSize:'25', marginRight:'5',padding:0}}/> : <AiFillFolder style={{color: '#C09553', fontSize:'25', marginRight:'5',padding:0}}/>}
                         Numbers
                     </ListItem >
                    <div id="item">
                        <Collapse in={Numbers} timeout="auto" unmountOnExit>
                         <List component="div" disablePadding>
                            <ListItem button onClick={() => {navigator.clipboard.writeText('Number("10.33"); // returns 10.33')}}className={classes.nested} style={{paddingLeft: 40}}>
                            <img src={jsLogo} alt="Logo" height='12px'  style={{padding:0, marginRight:5}} /> {'to number (decimal)'}
                            <ListItemText primary="" />
                            </ListItem>
                         </List>
                        </Collapse>
                    </div>
                    <div id="item">
                        <Collapse in={Numbers} timeout="auto" unmountOnExit>
                         <List component="div" disablePadding>
                            <ListItem button onClick={() => {navigator.clipboard.writeText('parseInt("10.33"); // returns 10')}}className={classes.nested} style={{paddingLeft: 40}}>
                            <img src={jsLogo} alt="Logo" height='12px'  style={{padding:0, marginRight:5}} /> {'to integer (no decimal)'}
                            <ListItemText primary="" />
                            </ListItem>
                         </List>
                        </Collapse>
                    </div>
                    <div id="item">
                        <Collapse in={Numbers} timeout="auto" unmountOnExit>
                         <List component="div" disablePadding>
                            <ListItem button onClick={() => {navigator.clipboard.writeText('Math.abs(-4.7); // returns 4.7')}}className={classes.nested} style={{paddingLeft: 40}}>
                            <img src={jsLogo} alt="Logo" height='12px'  style={{padding:0, marginRight:5}} /> {'to positive (decimal)'}
                            <ListItemText primary="" />
                            </ListItem>
                         </List>
                        </Collapse>
                    </div>
                    <div id="item">
                        <Collapse in={Numbers} timeout="auto" unmountOnExit>
                         <List component="div" disablePadding>
                            <ListItem button onClick={() => {navigator.clipboard.writeText('number.toFixed(number of decimals); // returns A String rounding the number')}}className={classes.nested} style={{paddingLeft: 40}}>
                            <img src={jsLogo} alt="Logo" height='12px'  style={{padding:0, marginRight:5}} /> {'to Fixed length rounding'}
                            <ListItemText primary="" />
                            </ListItem>
                         </List>
                        </Collapse>
                    </div>
                    <div id="item">
                        <Collapse in={Numbers} timeout="auto" unmountOnExit>
                         <List component="div" disablePadding>
                            <ListItem button onClick={() => {navigator.clipboard.writeText('Math.ceil(4.2); // returns 5')}}className={classes.nested} style={{paddingLeft: 40}}>
                            <img src={jsLogo} alt="Logo" height='12px'  style={{padding:0, marginRight:5}} /> {'rounded up'}
                            <ListItemText primary="" />
                            </ListItem>
                         </List>
                        </Collapse>
                    </div>
                    <div id="item">
                        <Collapse in={Numbers} timeout="auto" unmountOnExit>
                         <List component="div" disablePadding>
                            <ListItem button onClick={() => {navigator.clipboard.writeText('Math.floor(4.7); // returns 4')}}className={classes.nested} style={{paddingLeft: 40}}>
                            <img src={jsLogo} alt="Logo" height='12px'  style={{padding:0, marginRight:5}} /> {'rounded down'}
                            <ListItemText primary="" />
                            </ListItem>
                         </List>
                        </Collapse>
                    </div>
                    <div id="item">
                        <Collapse in={Numbers} timeout="auto" unmountOnExit>
                         <List component="div" disablePadding>
                            <ListItem button onClick={() => {navigator.clipboard.writeText('Number.isInteger(); // returns boolean')}}className={classes.nested} style={{paddingLeft: 40}}>
                            <img src={jsLogo} alt="Logo" height='12px'  style={{padding:0, marginRight:5}} /> {'is number'}
                            <ListItemText primary="" />
                            </ListItem>
                         </List>
                        </Collapse>
                    </div>
                    <div id="item">
                        <Collapse in={Numbers} timeout="auto" unmountOnExit>
                         <List component="div" disablePadding>
                            <ListItem button onClick={() => {navigator.clipboard.writeText('number.toString(base); // returns string number')}}className={classes.nested} style={{paddingLeft: 40}}>
                            <img src={jsLogo} alt="Logo" height='12px'  style={{padding:0, marginRight:5}} /> {'to base'}
                            <ListItemText primary="" />
                            </ListItem>
                         </List>
                        </Collapse>
                    </div>
                    <div id="item">
                        <Collapse in={Numbers} timeout="auto" unmountOnExit>
                         <List component="div" disablePadding>
                            <ListItem button onClick={() => {navigator.clipboard.writeText('function getRandomNum(min, max){ // returns a random number \n return Math.random() * (max - min) + min;}')}}className={classes.nested} style={{paddingLeft: 40}}>
                            <img src={jsLogo} alt="Logo" height='12px'  style={{padding:0, marginRight:5}} /> {'random number'}
                            <ListItemText primary="" />
                            </ListItem>
                         </List>
                        </Collapse>
                    </div>
                    <div id="item">
                        <Collapse in={Numbers} timeout="auto" unmountOnExit>
                         <List component="div" disablePadding>
                            <ListItem button onClick={() => {navigator.clipboard.writeText('function getRandomInt(min, max){ //returns a random integer \n min = Math.ceil(min);\n max = Math.floor(max); \n return Math.floor(Math.random() * (max - min + 1) + min); }')}}className={classes.nested} style={{paddingLeft: 40}}>
                            <img src={jsLogo} alt="Logo" height='12px'  style={{padding:0, marginRight:5}} /> {'random integer'}
                            <ListItemText primary="" />
                            </ListItem>
                         </List>
                        </Collapse>
                    </div>
                 </List>
             </Collapse> </div>
     <div id="Arrays">
            <Collapse in={open} timeout="auto" unmountOnExit>
               <List component="div" disablePadding>
                    <ListItem button onClick={() => {setArrays(!Arrays)}}  style={{padding:0, marginLeft:5}}>
                         {Arrays ? <AiOutlineMinusSquare style={{color: '#C09553', fontSize:'15', margin:'0 0 0 15',padding:0}}/> : <AiOutlinePlusSquare style={{color: '#C09553', fontSize:'15', margin:'0 0 0 15',padding:0}}/>}
                         {Arrays ? <AiFillFolderOpen style={{color: '#C09553', fontSize:'25', marginRight:'5',padding:0}}/> : <AiFillFolder style={{color: '#C09553', fontSize:'25', marginRight:'5',padding:0}}/>}
                         Arrays
                     </ListItem >
                      <div id="item">
                        <Collapse in={Arrays} timeout="auto" unmountOnExit>
                         <List component="div" disablePadding>
                            <ListItem button onClick={() => {navigator.clipboard.writeText('Array.from(object) // returns new array')}}className={classes.nested} style={{paddingLeft: 40}}>
                            <img src={jsLogo} alt="Logo" height='12px'  style={{padding:0, marginRight:5}} /> {'convert to array'}
                            <ListItemText primary="" />
                            </ListItem>
                         </List>
                        </Collapse>
                    </div>
                    <div id="item">
                        <Collapse in={Arrays} timeout="auto" unmountOnExit>
                         <List component="div" disablePadding>
                            <ListItem button onClick={() => {navigator.clipboard.writeText('array1 = [...array2] // returns new array')}}className={classes.nested} style={{paddingLeft: 40}}>
                            <img src={jsLogo} alt="Logo" height='12px'  style={{padding:0, marginRight:5}} /> {'copy array'}
                            <ListItemText primary="" />
                            </ListItem>
                         </List>
                        </Collapse>
                    </div>
                    <div id="item">
                        <Collapse in={Arrays} timeout="auto" unmountOnExit>
                         <List component="div" disablePadding>
                            <ListItem button onClick={() => {navigator.clipboard.writeText('array.slice(start index, end index) // returns new full array or part')}}className={classes.nested} style={{paddingLeft: 40}}>
                            <img src={jsLogo} alt="Logo" height='12px'  style={{padding:0, marginRight:5}} /> {'copy part of array'}
                            <ListItemText primary="" />
                            </ListItem>
                         </List>
                        </Collapse>
                    </div>
                    <div id="item">
                        <Collapse in={Arrays} timeout="auto" unmountOnExit>
                         <List component="div" disablePadding>
                            <ListItem button onClick={() => {navigator.clipboard.writeText('array1.concat(array2, array3,)// returns new array')}}className={classes.nested} style={{paddingLeft: 40}}>
                            <img src={jsLogo} alt="Logo" height='12px'  style={{padding:0, marginRight:5}} /> {'join arrays'}
                            <ListItemText primary="" />
                            </ListItem>
                         </List>
                        </Collapse>
                    </div>
                    <div id="item">
                        <Collapse in={Arrays} timeout="auto" unmountOnExit>
                         <List component="div" disablePadding>
                            <ListItem button onClick={() => {navigator.clipboard.writeText('let merged = []; \n for(let i=0; i<arr1.length; i++) {\n merged.push({...arr1[i],...arr2[i]}); \n}')}}className={classes.nested} style={{paddingLeft: 40}}>
                            <img src={jsLogo} alt="Logo" height='12px'  style={{padding:0, marginRight:5}} /> {'merge arrays of objects'}
                            <ListItemText primary="" />
                            </ListItem>
                         </List>
                        </Collapse>
                    </div>
                    <div id="item">
                        <Collapse in={Arrays} timeout="auto" unmountOnExit>
                         <List component="div" disablePadding>
                            <ListItem button onClick={() => {navigator.clipboard.writeText('array.push(item1, item2,) // returns new length of the array')}}className={classes.nested} style={{paddingLeft: 40}}>
                            <img src={jsLogo} alt="Logo" height='12px'  style={{padding:0, marginRight:5}} /> {' add items'}
                            <ListItemText primary="" />
                            </ListItem>
                         </List>
                        </Collapse>
                    </div>
                    <div id="item">
                        <Collapse in={Arrays} timeout="auto" unmountOnExit>
                         <List component="div" disablePadding>
                            <ListItem button onClick={() => {navigator.clipboard.writeText('array.pop() // returns removed item')}}className={classes.nested} style={{paddingLeft: 40}}>
                            <img src={jsLogo} alt="Logo" height='12px'  style={{padding:0, marginRight:5}} /> {'remove item'}
                            <ListItemText primary="" />
                            </ListItem>
                         </List>
                        </Collapse>
                    </div>
                    <div id="item">
                        <Collapse in={Arrays} timeout="auto" unmountOnExit>
                         <List component="div" disablePadding>
                            <ListItem button onClick={() => {navigator.clipboard.writeText('array.splice(index, howmany) // returns removed items')}}className={classes.nested} style={{paddingLeft: 40}}>
                            <img src={jsLogo} alt="Logo" height='12px'  style={{padding:0, marginRight:5}} /> {'remove items'}
                            <ListItemText primary="" />
                            </ListItem>
                         </List>
                        </Collapse>
                    </div>
                    
                    <div id="item">
                        <Collapse in={Arrays} timeout="auto" unmountOnExit>
                         <List component="div" disablePadding>
                            <ListItem button onClick={() => {navigator.clipboard.writeText('array.find((currentValue, index) => {return currentValue === elem to find;}) // if true Returns element value')}}className={classes.nested} style={{paddingLeft: 40}}>
                            <img src={jsLogo} alt="Logo" height='12px'  style={{padding:0, marginRight:5}} /> {'find item'}
                            <ListItemText primary="" />
                            </ListItem>
                         </List>
                        </Collapse>
                    </div>
                    <div id="item">
                        <Collapse in={Arrays} timeout="auto" unmountOnExit>
                         <List component="div" disablePadding>
                            <ListItem button onClick={() => {navigator.clipboard.writeText('array.findIndex((currentValue, index) => {return currentValue === elem to find;}) // if true Returns index element')}}className={classes.nested} style={{paddingLeft: 40}}>
                            <img src={jsLogo} alt="Logo" height='12px'  style={{padding:0, marginRight:5}} /> {'find index item'}
                            <ListItemText primary="" />
                            </ListItem>
                         </List>
                        </Collapse>
                    </div>
                    <div id="item">
                        <Collapse in={Arrays} timeout="auto" unmountOnExit>
                         <List component="div" disablePadding>
                            <ListItem button onClick={() => {navigator.clipboard.writeText('array.includes(element, start) // returns A Boolean')}}className={classes.nested} style={{paddingLeft: 40}}>
                            <img src={jsLogo} alt="Logo" height='12px'  style={{padding:0, marginRight:5}} /> {'has item'}
                            <ListItemText primary="" />
                            </ListItem>
                         </List>
                        </Collapse>
                    </div>
                    <div id="item">
                        <Collapse in={Arrays} timeout="auto" unmountOnExit>
                         <List component="div" disablePadding>
                            <ListItem button onClick={() => {navigator.clipboard.writeText('array.sort((a, b) => {\nif (a > b) {\nreturn 1;\n} else if (a === b) {\nreturn 0;\n} else {\nreturn -1;\n} \n});')}}className={classes.nested} style={{paddingLeft: 40}}>
                            <img src={jsLogo} alt="Logo" height='12px'  style={{padding:0, marginRight:5}} /> {'sort items'}
                            <ListItemText primary="" />
                            </ListItem>
                         </List>
                        </Collapse>
                    </div>
                    <div id="item">
                        <Collapse in={Arrays} timeout="auto" unmountOnExit>
                         <List component="div" disablePadding>
                            <ListItem button onClick={() => {navigator.clipboard.writeText('array.map((currentValue, index) => {do somthing with each value})')}}className={classes.nested} style={{paddingLeft: 40}}>
                            <img src={jsLogo} alt="Logo" height='12px'  style={{padding:0, marginRight:5}} /> {'map items'}
                            <ListItemText primary="" />
                            </ListItem>
                         </List>
                        </Collapse>
                    </div>
                    <div id="item">
                        <Collapse in={Arrays} timeout="auto" unmountOnExit>
                         <List component="div" disablePadding>
                            <ListItem button onClick={() => {navigator.clipboard.writeText('array.filter((currentValue, index) => {return }) //if true Returns element value in a new array')}}className={classes.nested} style={{paddingLeft: 40}}>
                            <img src={jsLogo} alt="Logo" height='12px'  style={{padding:0, marginRight:5}} /> {'filter items'}
                            <ListItemText primary="" />
                            </ListItem>
                         </List>
                        </Collapse>
                    </div>
                    <div id="item">
                        <Collapse in={Arrays} timeout="auto" unmountOnExit>
                         <List component="div" disablePadding>
                            <ListItem button onClick={() => {navigator.clipboard.writeText('array.reduce((prevValue, currValue) => {return }, start value) //Reduces the array to a single value')}}className={classes.nested} style={{paddingLeft: 40}}>
                            <img src={jsLogo} alt="Logo" height='12px'  style={{padding:0, marginRight:5}} /> {'reduce items'}
                            <ListItemText primary="" />
                            </ListItem>
                         </List>
                        </Collapse>
                    </div>
                 </List>
             </Collapse> </div>
     <div id="Objects">
            <Collapse in={open} timeout="auto" unmountOnExit>
               <List component="div" disablePadding>
                    <ListItem button onClick={() => {setObjects(!Objects)}}  style={{padding:0, marginLeft:5}}>
                         {Objects ? <AiOutlineMinusSquare style={{color: '#C09553', fontSize:'15', margin:'0 0 0 15',padding:0}}/> : <AiOutlinePlusSquare style={{color: '#C09553', fontSize:'15', margin:'0 0 0 15',padding:0}}/>}
                         {Objects ? <AiFillFolderOpen style={{color: '#C09553', fontSize:'25', marginRight:'5',padding:0}}/> : <AiFillFolder style={{color: '#C09553', fontSize:'25', marginRight:'5',padding:0}}/>}
                         Objects
                     </ListItem >
                     <div id="item">
                        <Collapse in={Objects} timeout="auto" unmountOnExit>
                         <List component="div" disablePadding>
                            <ListItem button onClick={() => {navigator.clipboard.writeText('let obj = {...obj1}; // clone object')}}className={classes.nested} style={{paddingLeft: 40}}>
                            <img src={jsLogo} alt="Logo" height='12px'  style={{padding:0, marginRight:5}} /> {'clone Object'}
                            <ListItemText primary="" />
                            </ListItem>
                         </List>
                        </Collapse>
                    </div>
                    <div id="item">
                        <Collapse in={Objects} timeout="auto" unmountOnExit>
                         <List component="div" disablePadding>
                            <ListItem button onClick={() => {navigator.clipboard.writeText('let merged = {...obj1, ...obj2};')}}className={classes.nested} style={{paddingLeft: 40}}>
                            <img src={jsLogo} alt="Logo" height='12px'  style={{padding:0, marginRight:5}} /> {'join objects'}
                            <ListItemText primary="" />
                            </ListItem>
                         </List>
                        </Collapse>
                    </div>
                     <div id="item">
                        <Collapse in={Objects} timeout="auto" unmountOnExit>
                         <List component="div" disablePadding>
                            <ListItem button onClick={() => {navigator.clipboard.writeText('delete person.age // remove age proprity from person object')}}className={classes.nested} style={{paddingLeft: 40}}>
                            <img src={jsLogo} alt="Logo" height='12px'  style={{padding:0, marginRight:5}} /> {'delete proprity'}
                            <ListItemText primary="" />
                            </ListItem>
                         </List>
                        </Collapse>
                    </div>
                    <div id="item">
                        <Collapse in={Objects} timeout="auto" unmountOnExit>
                         <List component="div" disablePadding>
                            <ListItem button onClick={() => {navigator.clipboard.writeText('if ( "age" in person) // check if age proprity from person object exist')}}className={classes.nested} style={{paddingLeft: 40}}>
                            <img src={jsLogo} alt="Logo" height='12px'  style={{padding:0, marginRight:5}} /> {'has proprity'}
                            <ListItemText primary="" />
                            </ListItem>
                         </List>
                        </Collapse>
                    </div>
                    <div id="item">
                        <Collapse in={Objects} timeout="auto" unmountOnExit>
                         <List component="div" disablePadding>
                            <ListItem button onClick={() => {navigator.clipboard.writeText('JSON.parse({JSON string}) // returns object')}}className={classes.nested} style={{paddingLeft: 40}}>
                            <img src={jsLogo} alt="Logo" height='12px'  style={{padding:0, marginRight:5}} /> {'JSON to object'}
                            <ListItemText primary="" />
                            </ListItem>
                         </List>
                        </Collapse>
                    </div>
                    <div id="item">
                        <Collapse in={Objects} timeout="auto" unmountOnExit>
                         <List component="div" disablePadding>
                            <ListItem button onClick={() => {navigator.clipboard.writeText('JSON.stringify({JSON string}) // returns object')}}className={classes.nested} style={{paddingLeft: 40}}>
                            <img src={jsLogo} alt="Logo" height='12px'  style={{padding:0, marginRight:5}} /> {'object to JSON'}
                            <ListItemText primary="" />
                            </ListItem>
                         </List>
                        </Collapse>
                    </div>
                    
                 </List>
             </Collapse> </div>
     <div id="Asynchronous">
            <Collapse in={open} timeout="auto" unmountOnExit>
               <List component="div" disablePadding>
                    <ListItem button onClick={() => {setAsynchronous(! Asynchronous)}}  style={{padding:0, marginLeft:5}}>
                         {Asynchronous ? <AiOutlineMinusSquare style={{color: '#C09553', fontSize:'15', margin:'0 0 0 15',padding:0}}/> : <AiOutlinePlusSquare style={{color: '#C09553', fontSize:'15', margin:'0 0 0 15',padding:0}}/>}
                         { Asynchronous ? <AiFillFolderOpen style={{color: '#C09553', fontSize:'25', marginRight:'5',padding:0}}/> : <AiFillFolder style={{color: '#C09553', fontSize:'25', marginRight:'5',padding:0}}/>}
                         Asynchronous
                     </ListItem >
                    <div id="item">
                        <Collapse in={ Asynchronous} timeout="auto" unmountOnExit>
                         <List component="div" disablePadding>
                            <ListItem button onClick={() => {navigator.clipboard.writeText("const myPromise = new Promise((resolve) => {\n    setTimeout(() => {resolve('foo');}, 300);});    \n  myPromise // call Promise\n     .then(handleResolvedA)\n     .catch(handleReject);")}}className={classes.nested} style={{paddingLeft: 40}}>
                            <img src={jsLogo} alt="Logo" height='12px'  style={{padding:0, marginRight:5}} /> {'promise'}
                            <ListItemText primary="" />
                            </ListItem>
                         </List>
                        </Collapse>
                    </div>
                 </List>
             </Collapse> </div>
     <div id="DOM">
            <Collapse in={open} timeout="auto" unmountOnExit>
               <List component="div" disablePadding>
                    <ListItem button onClick={() => {setDOM(!DOM)}}  style={{padding:0, marginLeft:5}}>
                         {DOM ? <AiOutlineMinusSquare style={{color: '#C09553', fontSize:'15', margin:'0 0 0 15',padding:0}}/> : <AiOutlinePlusSquare style={{color: '#C09553', fontSize:'15', margin:'0 0 0 15',padding:0}}/>}
                         {DOM ? <AiFillFolderOpen style={{color: '#C09553', fontSize:'25', marginRight:'5',padding:0}}/> : <AiFillFolder style={{color: '#C09553', fontSize:'25', marginRight:'5',padding:0}}/>}
                         DOM
                     </ListItem >
                    <div id="item">
                        <Collapse in={DOM} timeout="auto" unmountOnExit>
                         <List component="div" disablePadding>
                            <ListItem button onClick={() => {navigator.clipboard.writeText('document.querySelector("#ID") // returns Element object')}}className={classes.nested} style={{paddingLeft: 40}}>
                            <img src={jsLogo} alt="Logo" height='12px'  style={{padding:0, marginRight:5}} /> {'select Element By Id'}
                            <ListItemText primary="" />
                            </ListItem>
                         </List>
                        </Collapse>
                    </div>
                    <div id="item">
                        <Collapse in={DOM} timeout="auto" unmountOnExit>
                         <List component="div" disablePadding>
                            <ListItem button onClick={() => {navigator.clipboard.writeText('document.querySelectorAll(".classname" ) // returns node list, you can loop or add [index]')}}className={classes.nested} style={{paddingLeft: 40}}>
                            <img src={jsLogo} alt="Logo" height='12px'  style={{padding:0, marginRight:5}} /> {'select elements by class'}
                            <ListItemText primary="" />
                            </ListItem>
                         </List>
                        </Collapse>
                    </div>
                    <div id="item">
                        <Collapse in={DOM} timeout="auto" unmountOnExit>
                         <List component="div" disablePadding>
                            <ListItem button onClick={() => {navigator.clipboard.writeText('document.querySelectorAll("Tag" ) // returns node list, you can loop or add [index]')}}className={classes.nested} style={{paddingLeft: 40}}>
                            <img src={jsLogo} alt="Logo" height='12px'  style={{padding:0, marginRight:5}} /> {'select elements by tag'}
                            <ListItemText primary="" />
                            </ListItem>
                         </List>
                        </Collapse>
                    </div>
                    <div id="item">
                        <Collapse in={DOM} timeout="auto" unmountOnExit>
                         <List component="div" disablePadding>
                            <ListItem button onClick={() => {navigator.clipboard.writeText('document.createElement("tagname") // returns element')}}className={classes.nested} style={{paddingLeft: 40}}>
                            <img src={jsLogo} alt="Logo" height='12px'  style={{padding:0, marginRight:5}} /> {'create element'}
                            <ListItemText primary="" />
                            </ListItem>
                         </List>
                        </Collapse>
                    </div>
                    <div id="item">
                        <Collapse in={DOM} timeout="auto" unmountOnExit>
                         <List component="div" disablePadding>
                            <ListItem button onClick={() => {navigator.clipboard.writeText('element.append(element) // returns element')}}className={classes.nested} style={{paddingLeft: 40}}>
                            <img src={jsLogo} alt="Logo" height='12px'  style={{padding:0, marginRight:5}} /> {'append element'}
                            <ListItemText primary="" />
                            </ListItem>
                         </List>
                        </Collapse>
                    </div>
                    <div id="item">
                        <Collapse in={DOM} timeout="auto" unmountOnExit>
                         <List component="div" disablePadding>
                            <ListItem button onClick={() => {navigator.clipboard.writeText('element.textContent = "hello"')}}className={classes.nested} style={{paddingLeft: 40}}>
                            <img src={jsLogo} alt="Logo" height='12px'  style={{padding:0, marginRight:5}} /> {'add text to element'}
                            <ListItemText primary="" />
                            </ListItem>
                         </List>
                        </Collapse>
                    </div>
                    <div id="item">
                        <Collapse in={DOM} timeout="auto" unmountOnExit>
                         <List component="div" disablePadding>
                            <ListItem button onClick={() => {navigator.clipboard.writeText('element.cloneNode(true) // returns element')}}className={classes.nested} style={{paddingLeft: 40}}>
                            <img src={jsLogo} alt="Logo" height='12px'  style={{padding:0, marginRight:5}} /> {'copy element'}
                            <ListItemText primary="" />
                            </ListItem>
                         </List>
                        </Collapse>
                    </div>
                    <div id="item">
                        <Collapse in={DOM} timeout="auto" unmountOnExit>
                         <List component="div" disablePadding>
                            <ListItem button onClick={() => {navigator.clipboard.writeText('element.replaceWith(element) // returns element')}}className={classes.nested} style={{paddingLeft: 40}}>
                            <img src={jsLogo} alt="Logo" height='12px'  style={{padding:0, marginRight:5}} /> {'replace element'}
                            <ListItemText primary="" />
                            </ListItem>
                         </List>
                        </Collapse>
                    </div>
                    <div id="item">
                        <Collapse in={DOM} timeout="auto" unmountOnExit>
                         <List component="div" disablePadding>
                            <ListItem button onClick={() => {navigator.clipboard.writeText('element.remove() // remove element')}}className={classes.nested} style={{paddingLeft: 40}}>
                            <img src={jsLogo} alt="Logo" height='12px'  style={{padding:0, marginRight:5}} /> {'remove element'}
                            <ListItemText primary="" />
                            </ListItem>
                         </List>
                        </Collapse>
                    </div>
                    <div id="item">
                        <Collapse in={DOM} timeout="auto" unmountOnExit>
                         <List component="div" disablePadding>
                            <ListItem button onClick={() => {navigator.clipboard.writeText('element.addEventListener(event, (event object) => {}) // returns event object')}}className={classes.nested} style={{paddingLeft: 40}}>
                            <img src={jsLogo} alt="Logo" height='12px'  style={{padding:0, marginRight:5}} /> {'add eventListner'}
                            <ListItemText primary="" />
                            </ListItem>
                         </List>
                        </Collapse>
                    </div>
                    <div id="item">
                        <Collapse in={DOM} timeout="auto" unmountOnExit>
                         <List component="div" disablePadding>
                            <ListItem button onClick={() => {navigator.clipboard.writeText('element.removeEventListener(event)')}}className={classes.nested} style={{paddingLeft: 40}}>
                            <img src={jsLogo} alt="Logo" height='12px'  style={{padding:0, marginRight:5}} /> {'remove eventListner'}
                            <ListItemText primary="" />
                            </ListItem>
                         </List>
                        </Collapse>
                    </div>
                    <div id="item">
                        <Collapse in={DOM} timeout="auto" unmountOnExit>
                         <List component="div" disablePadding>
                            <ListItem button onClick={() => {navigator.clipboard.writeText('element.classList.add("class1", "class2")')}}className={classes.nested} style={{paddingLeft: 40}}>
                            <img src={jsLogo} alt="Logo" height='12px'  style={{padding:0, marginRight:5}} /> {'add class'}
                            <ListItemText primary="" />
                            </ListItem>
                         </List>
                        </Collapse>
                    </div>
                    <div id="item">
                        <Collapse in={DOM} timeout="auto" unmountOnExit>
                         <List component="div" disablePadding>
                            <ListItem button onClick={() => {navigator.clipboard.writeText('element.className = "class1 class2" // returns className')}}className={classes.nested} style={{paddingLeft: 40}}>
                            <img src={jsLogo} alt="Logo" height='12px'  style={{padding:0, marginRight:5}} /> {'set, replace, get class'}
                            <ListItemText primary="" />
                            </ListItem>
                         </List>
                        </Collapse>
                    </div>
                    <div id="item">
                        <Collapse in={DOM} timeout="auto" unmountOnExit>
                         <List component="div" disablePadding>
                            <ListItem button onClick={() => {navigator.clipboard.writeText('element.classList.toggle("class name") // returns boolean')}}className={classes.nested} style={{paddingLeft: 40}}>
                            <img src={jsLogo} alt="Logo" height='12px'  style={{padding:0, marginRight:5}} /> {'toggle class'}
                            <ListItemText primary="" />
                            </ListItem>
                         </List>
                        </Collapse>
                    </div>
                    
                    <div id="item">
                        <Collapse in={DOM} timeout="auto" unmountOnExit>
                         <List component="div" disablePadding>
                            <ListItem button onClick={() => {navigator.clipboard.writeText('element.classList.remove("class1", "class2",)')}}className={classes.nested} style={{paddingLeft: 40}}>
                            <img src={jsLogo} alt="Logo" height='12px'  style={{padding:0, marginRight:5}} /> {'remove class'}
                            <ListItemText primary="" />
                            </ListItem>
                         </List>
                        </Collapse>
                    </div>
                    <div id="item">
                        <Collapse in={DOM} timeout="auto" unmountOnExit>
                         <List component="div" disablePadding>
                            <ListItem button onClick={() => {navigator.clipboard.writeText('element.classList.contains("class") // Returns a Boolean')}}className={classes.nested} style={{paddingLeft: 40}}>
                            <img src={jsLogo} alt="Logo" height='12px'  style={{padding:0, marginRight:5}} /> {'has class'}
                            <ListItemText primary="" />
                            </ListItem>
                         </List>
                        </Collapse>
                    </div>
                    <div id="item">
                        <Collapse in={DOM} timeout="auto" unmountOnExit>
                         <List component="div" disablePadding>
                            <ListItem button onClick={() => {navigator.clipboard.writeText('element.setAttribute(attributename, attributevalue)')}}className={classes.nested} style={{paddingLeft: 40}}>
                            <img src={jsLogo} alt="Logo" height='12px'  style={{padding:0, marginRight:5}} /> {'set add attribute'}
                            <ListItemText primary="" />
                            </ListItem>
                         </List>
                        </Collapse>
                    </div>
                    <div id="item">
                        <Collapse in={DOM} timeout="auto" unmountOnExit>
                         <List component="div" disablePadding>
                            <ListItem button onClick={() => {navigator.clipboard.writeText('element.getAttribute(attributename)// return A String attribute value.')}}className={classes.nested} style={{paddingLeft: 40}}>
                            <img src={jsLogo} alt="Logo" height='12px'  style={{padding:0, marginRight:5}} /> {'get attribute'}
                            <ListItemText primary="" />
                            </ListItem>
                         </List>
                        </Collapse>
                    </div>
                    <div id="item">
                        <Collapse in={DOM} timeout="auto" unmountOnExit>
                         <List component="div" disablePadding>
                            <ListItem button onClick={() => {navigator.clipboard.writeText('element.hasAttribute(attributename)// return A boolean.')}}className={classes.nested} style={{paddingLeft: 40}}>
                            <img src={jsLogo} alt="Logo" height='12px'  style={{padding:0, marginRight:5}} /> {'has attribute'}
                            <ListItemText primary="" />
                            </ListItem>
                         </List>
                        </Collapse>
                    </div>
                    <div id="item">
                        <Collapse in={DOM} timeout="auto" unmountOnExit>
                         <List component="div" disablePadding>
                            <ListItem button onClick={() => {navigator.clipboard.writeText('element.removeAttribute(attributename)')}}className={classes.nested} style={{paddingLeft: 40}}>
                            <img src={jsLogo} alt="Logo" height='12px'  style={{padding:0, marginRight:5}} /> {'remove attribute'}
                            <ListItemText primary="" />
                            </ListItem>
                         </List>
                        </Collapse>
                    </div>
                    
                 </List>
             </Collapse> </div>
     <div id="Web API">
            <Collapse in={open} timeout="auto" unmountOnExit>
               <List component="div" disablePadding>
                    <ListItem button onClick={() => {setAPI(!API)}}  style={{padding:0, marginLeft:5}}>
                         {API ? <AiOutlineMinusSquare style={{color: '#C09553', fontSize:'15', margin:'0 0 0 15',padding:0}}/> : <AiOutlinePlusSquare style={{color: '#C09553', fontSize:'15', margin:'0 0 0 15',padding:0}}/>}
                         {API ? <AiFillFolderOpen style={{color: '#C09553', fontSize:'25', marginRight:'5',padding:0}}/> : <AiFillFolder style={{color: '#C09553', fontSize:'25', marginRight:'5',padding:0}}/>}
                         Web API
                     </ListItem >
                    <div id="item">
                        <Collapse in={API} timeout="auto" unmountOnExit>
                         <List component="div" disablePadding>
                            <ListItem button onClick={() => {navigator.clipboard.writeText('window.location.href')}}className={classes.nested} style={{paddingLeft: 40}}>
                            <img src={jsLogo} alt="Logo" height='12px'  style={{padding:0, marginRight:5}} /> {'get full URL'}
                            <ListItemText primary="" />
                            </ListItem>
                         </List>
                        </Collapse>
                    </div>
                    <div id="item">
                        <Collapse in={API} timeout="auto" unmountOnExit>
                         <List component="div" disablePadding>
                            <ListItem button onClick={() => {navigator.clipboard.writeText('window.location.hostname')}}className={classes.nested} style={{paddingLeft: 40}}>
                            <img src={jsLogo} alt="Logo" height='12px'  style={{padding:0, marginRight:5}} /> {'get domain URL'}
                            <ListItemText primary="" />
                            </ListItem>
                         </List>
                        </Collapse>
                    </div>
                    <div id="item">
                        <Collapse in={API} timeout="auto" unmountOnExit>
                         <List component="div" disablePadding>
                            <ListItem button onClick={() => {navigator.clipboard.writeText('window.location.pathname')}}className={classes.nested} style={{paddingLeft: 40}}>
                            <img src={jsLogo} alt="Logo" height='12px'  style={{padding:0, marginRight:5}} /> {'get pathname URL'}
                            <ListItemText primary="" />
                            </ListItem>
                         </List>
                        </Collapse>
                    </div>
                    <div id="item">
                        <Collapse in={API} timeout="auto" unmountOnExit>
                         <List component="div" disablePadding>
                            <ListItem button onClick={() => {navigator.clipboard.writeText('window.location.search')}}className={classes.nested} style={{paddingLeft: 40}}>
                            <img src={jsLogo} alt="Logo" height='12px'  style={{padding:0, marginRight:5}} /> {'get search query'}
                            <ListItemText primary="" />
                            </ListItem>
                         </List>
                        </Collapse>
                    </div>
                    <div id="item">
                        <Collapse in={API} timeout="auto" unmountOnExit>
                         <List component="div" disablePadding>
                            <ListItem button onClick={() => {navigator.clipboard.writeText('window.location.hash')}}className={classes.nested} style={{paddingLeft: 40}}>
                            <img src={jsLogo} alt="Logo" height='12px'  style={{padding:0, marginRight:5}} /> {'get hash query'}
                            <ListItemText primary="" />
                            </ListItem>
                         </List>
                        </Collapse>
                    </div>
                    <div id="item">
                        <Collapse in={API} timeout="auto" unmountOnExit>
                         <List component="div" disablePadding>
                            <ListItem button onClick={() => {navigator.clipboard.writeText('let myVar = setInterval(() => {}, 1000);')}}className={classes.nested} style={{paddingLeft: 40}}>
                            <img src={jsLogo} alt="Logo" height='12px'  style={{padding:0, marginRight:5}} /> {'set Interval'}
                            <ListItemText primary="" />
                            </ListItem>
                         </List>
                        </Collapse>
                    </div>
                    <div id="item">
                        <Collapse in={API} timeout="auto" unmountOnExit>
                         <List component="div" disablePadding>
                            <ListItem button onClick={() => {navigator.clipboard.writeText('clearInterval(myVar);')}}className={classes.nested} style={{paddingLeft: 40}}>
                            <img src={jsLogo} alt="Logo" height='12px'  style={{padding:0, marginRight:5}} /> {'clear Interval'}
                            <ListItemText primary="" />
                            </ListItem>
                         </List>
                        </Collapse>
                    </div>
                    <div id="item">
                        <Collapse in={API} timeout="auto" unmountOnExit>
                         <List component="div" disablePadding>
                            <ListItem button onClick={() => {navigator.clipboard.writeText('let myVar = setTimeout(() => {}, 1000);')}}className={classes.nested} style={{paddingLeft: 40}}>
                            <img src={jsLogo} alt="Logo" height='12px'  style={{padding:0, marginRight:5}} /> {'set Timeout'}
                            <ListItemText primary="" />
                            </ListItem>
                         </List>
                        </Collapse>
                    </div>
                    <div id="item">
                        <Collapse in={API} timeout="auto" unmountOnExit>
                         <List component="div" disablePadding>
                            <ListItem button onClick={() => {navigator.clipboard.writeText('clearTimeout(myVar);')}}className={classes.nested} style={{paddingLeft: 40}}>
                            <img src={jsLogo} alt="Logo" height='12px'  style={{padding:0, marginRight:5}} /> {'clear Timeout'}
                            <ListItemText primary="" />
                            </ListItem>
                         </List>
                        </Collapse>
                    </div>


                    <div id="item">
                        <Collapse in={API} timeout="auto" unmountOnExit>
                         <List component="div" disablePadding>
                            <ListItem button onClick={() => {navigator.clipboard.writeText('localStorage.setItem("key", "value");')}}className={classes.nested} style={{paddingLeft: 40}}>
                            <img src={jsLogo} alt="Logo" height='12px'  style={{padding:0, marginRight:5}} /> {'set localStorage'}
                            <ListItemText primary="" />
                            </ListItem>
                         </List>
                        </Collapse>
                    </div>
                    <div id="item">
                        <Collapse in={API} timeout="auto" unmountOnExit>
                         <List component="div" disablePadding>
                            <ListItem button onClick={() => {navigator.clipboard.writeText('var lastname = localStorage.getItem("key");')}}className={classes.nested} style={{paddingLeft: 40}}>
                            <img src={jsLogo} alt="Logo" height='12px'  style={{padding:0, marginRight:5}} /> {'get localStorage'}
                            <ListItemText primary="" />
                            </ListItem>
                         </List>
                        </Collapse>
                    </div>
                    <div id="item">
                        <Collapse in={API} timeout="auto" unmountOnExit>
                         <List component="div" disablePadding>
                            <ListItem button onClick={() => {navigator.clipboard.writeText('localStorage.removeItem("key");')}}className={classes.nested} style={{paddingLeft: 40}}>
                            <img src={jsLogo} alt="Logo" height='12px'  style={{padding:0, marginRight:5}} /> {'remove localStorage'}
                            <ListItemText primary="" />
                            </ListItem>
                         </List>
                        </Collapse>
                    </div>
                    <div id="item">
                        <Collapse in={API} timeout="auto" unmountOnExit>
                         <List component="div" disablePadding>
                            <ListItem button onClick={() => {navigator.clipboard.writeText('window.history.go(url);//loads a specific URL, (-1) back, (1) forward ')}}className={classes.nested} style={{paddingLeft: 40}}>
                            <img src={jsLogo} alt="Logo" height='12px'  style={{padding:0, marginRight:5}} /> {'history back forward'}
                            <ListItemText primary="" />
                            </ListItem>
                         </List>
                        </Collapse>
                    </div>
                 </List>
             </Collapse> </div>




   {/* // ----> Import     */}
   <div id="Import">
     <ListItem button onClick={handleClick7}  style={{padding:0, marginLeft:5}}>{open7 ? <AiOutlineMinusSquare style={{color: '#C09553', fontSize:'15', marginRight:'5',padding:0}}/> : <AiOutlinePlusSquare style={{color: '#C09553', fontSize:'15', marginRight:'5',padding:0}}/>}{open7 ? <AiFillFolderOpen style={{color: '#C09553', fontSize:'25', marginRight:'5',padding:0}}/> : <AiFillFolder style={{color: '#C09553', fontSize:'25', marginRight:'5',padding:0}}/>}
      Import
         </ListItem >
           <Collapse in={open7} timeout="auto" unmountOnExit>
               <List component="div" disablePadding>
                  <div id="item">
                        <Collapse in={open7} timeout="auto" unmountOnExit>
                         <List component="div" disablePadding>
                            <ListItem button onClick={() => {navigator.clipboard.writeText("import React, {useState, useEffect} from 'react'")}}className={classes.nested} style={{paddingLeft: 40}}>
                            <img src={share} alt="Logo" height='12px'  style={{padding:0, marginRight:5}} /> {'React'}
                            <ListItemText primary="" />
                            </ListItem>
                         </List>
                        </Collapse>
                  </div>
                  <div id="item">
                        <Collapse in={open7} timeout="auto" unmountOnExit>
                         <List component="div" disablePadding>
                            <ListItem button onClick={() => {navigator.clipboard.writeText("import { Route } from 'react-router-dom'")}}className={classes.nested} style={{paddingLeft: 40}}>
                            <img src={share} alt="Logo" height='12px'  style={{padding:0, marginRight:5}} /> {'React Route'}
                            <ListItemText primary="" />
                            </ListItem>
                         </List>
                        </Collapse>
                  </div>
                  <div id="item">
                        <Collapse in={open7} timeout="auto" unmountOnExit>
                         <List component="div" disablePadding>
                            <ListItem button onClick={() => {navigator.clipboard.writeText("import express from 'express' \n const app = express()")}}className={classes.nested} style={{paddingLeft: 40}}>
                            <img src={share} alt="Logo" height='12px'  style={{padding:0, marginRight:5}} /> {'Express'}
                            <ListItemText primary="" />
                            </ListItem>
                         </List>
                        </Collapse>
                  </div>
                  <div id="item">
                        <Collapse in={open7} timeout="auto" unmountOnExit>
                         <List component="div" disablePadding>
                            <ListItem button onClick={() => {navigator.clipboard.writeText("const router = express.Router();")}}className={classes.nested} style={{paddingLeft: 40}}>
                            <img src={share} alt="Logo" height='12px'  style={{padding:0, marginRight:5}} /> {'Express router'}
                            <ListItemText primary="" />
                            </ListItem>
                         </List>
                        </Collapse>
                  </div>
                  <div id="item">
                        <Collapse in={open7} timeout="auto" unmountOnExit>
                         <List component="div" disablePadding>
                            <ListItem button onClick={() => {navigator.clipboard.writeText("import mongoose from 'mongoose' \n \n \n mongoose.connect('mongodb://localhost/mernStackDB', {useNewUrlParser:true, useUnifiedTopology:true, useFindAndModify: false, useCreateIndex: true })\n .then(() => console.log('Connected to MongoDB...') )\n .catch(err => console.error('Could not connect to MongoDB : '+ JSON.stringify(err, undefined,2)));")}}className={classes.nested} style={{paddingLeft: 40}}>
                            <img src={share} alt="Logo" height='12px'  style={{padding:0, marginRight:5}} /> {'Mongoose'}
                            <ListItemText primary="" />
                            </ListItem>
                         </List>
                        </Collapse>
                  </div>
                  <div id="item">
                        <Collapse in={open7} timeout="auto" unmountOnExit>
                         <List component="div" disablePadding>
                            <ListItem button onClick={() => {navigator.clipboard.writeText("import axios from 'axios' \n const app = express()")}}className={classes.nested} style={{paddingLeft: 40}}>
                            <img src={share} alt="Logo" height='12px'  style={{padding:0, marginRight:5}} /> {'Axios'}
                            <ListItemText primary="" />
                            </ListItem>
                         </List>
                        </Collapse>
                  </div>
                  <div id="item">
                        <Collapse in={open7} timeout="auto" unmountOnExit>
                         <List component="div" disablePadding>
                            <ListItem button onClick={() => {navigator.clipboard.writeText("import jwt from 'jsonwebtoken' \n const app = express()")}}className={classes.nested} style={{paddingLeft: 40}}>
                            <img src={share} alt="Logo" height='12px'  style={{padding:0, marginRight:5}} /> {'JWT'}
                            <ListItemText primary="" />
                            </ListItem>
                         </List>
                        </Collapse>
                  </div>
                  <div id="item">
                        <Collapse in={open7} timeout="auto" unmountOnExit>
                         <List component="div" disablePadding>
                            <ListItem button onClick={() => {navigator.clipboard.writeText("import bcrypt from 'bcrypt' \n const app = express()")}}className={classes.nested} style={{paddingLeft: 40}}>
                            <img src={share} alt="Logo" height='12px'  style={{padding:0, marginRight:5}} /> {'Bcrypt'}
                            <ListItemText primary="" />
                            </ListItem>
                         </List>
                        </Collapse>
                  </div>
                  <div id="item">
                        <Collapse in={open7} timeout="auto" unmountOnExit>
                         <List component="div" disablePadding>
                            <ListItem button onClick={() => {navigator.clipboard.writeText("import config from 'config' \n const app = express()")}}className={classes.nested} style={{paddingLeft: 40}}>
                            <img src={share} alt="Logo" height='12px'  style={{padding:0, marginRight:5}} /> {'Config'}
                            <ListItemText primary="" />
                            </ListItem>
                         </List>
                        </Collapse>
                  </div>
                  <div id="item">
                        <Collapse in={open7} timeout="auto" unmountOnExit>
                         <List component="div" disablePadding>
                            <ListItem button onClick={() => {navigator.clipboard.writeText("import cors from 'cors' \n const app = express()")}}className={classes.nested} style={{paddingLeft: 40}}>
                            <img src={share} alt="Logo" height='12px'  style={{padding:0, marginRight:5}} /> {'Cors '}
                            <ListItemText primary="" />
                            </ListItem>
                         </List>
                        </Collapse>
                  </div>
                  <div id="item">
                        <Collapse in={open7} timeout="auto" unmountOnExit>
                         <List component="div" disablePadding>
                            <ListItem button onClick={() => {navigator.clipboard.writeText("import {makeStyles} from '@material-ui/core';")}}className={classes.nested} style={{paddingLeft: 40}}>
                            <img src={share} alt="Logo" height='12px'  style={{padding:0, marginRight:5}} /> {'MakeStyles'}
                            <ListItemText primary="" />
                            </ListItem>
                         </List>
                        </Collapse>
                  </div>
               </List>
         </Collapse></div>

  {/* // ----> Git     */}
  <div id="Import">
     <ListItem button onClick={handleClick8}  style={{padding:0, marginLeft:5}}>{open8 ? <AiOutlineMinusSquare style={{color: '#C09553', fontSize:'15', marginRight:'5',padding:0}}/> : <AiOutlinePlusSquare style={{color: '#C09553', fontSize:'15', marginRight:'5',padding:0}}/>}{open7 ? <AiFillFolderOpen style={{color: '#C09553', fontSize:'25', marginRight:'5',padding:0}}/> : <AiFillFolder style={{color: '#C09553', fontSize:'25', marginRight:'5',padding:0}}/>}
      Git
         </ListItem >
           <Collapse in={open8} timeout="auto" unmountOnExit>
               <List component="div" disablePadding>
                  <div id="item">
                        <Collapse in={open8} timeout="auto" unmountOnExit>
                         <List component="div" disablePadding>
                            <ListItem button onClick={() => {navigator.clipboard.writeText("git init")}}className={classes.nested} style={{paddingLeft: 40}}>
                            <img src={share} alt="Logo" height='12px'  style={{padding:0, marginRight:5}} /> {'Init repository'}
                            <ListItemText primary="" />
                            </ListItem>
                         </List>
                        </Collapse>
                  </div>
                  <div id="item">
                        <Collapse in={open8} timeout="auto" unmountOnExit>
                         <List component="div" disablePadding>
                            <ListItem button onClick={() => {navigator.clipboard.writeText("git status -s")}}className={classes.nested} style={{paddingLeft: 40}}>
                            <img src={share} alt="Logo" height='12px'  style={{padding:0, marginRight:5}} /> {'Status'}
                            <ListItemText primary="" />
                            </ListItem>
                         </List>
                        </Collapse>
                  </div>
                  <div id="item">
                        <Collapse in={open8} timeout="auto" unmountOnExit>
                         <List component="div" disablePadding>
                            <ListItem button onClick={() => {navigator.clipboard.writeText("git add .")}}className={classes.nested} style={{paddingLeft: 40}}>
                            <img src={share} alt="Logo" height='12px'  style={{padding:0, marginRight:5}} /> {'Add to Stage'}
                            <ListItemText primary="" />
                            </ListItem>
                         </List>
                        </Collapse>
                  </div>
                  <div id="item">
                        <Collapse in={open8} timeout="auto" unmountOnExit>
                         <List component="div" disablePadding>
                            <ListItem button onClick={() => {navigator.clipboard.writeText("git commit -m 'initial commit'")}}className={classes.nested} style={{paddingLeft: 40}}>
                            <img src={share} alt="Logo" height='12px'  style={{padding:0, marginRight:5}} /> {'Add commit'}
                            <ListItemText primary="" />
                            </ListItem>
                         </List>
                        </Collapse>
                  </div>
                  <div id="item">
                        <Collapse in={open8} timeout="auto" unmountOnExit>
                         <List component="div" disablePadding>
                            <ListItem button onClick={() => {navigator.clipboard.writeText("git rm file1.js")}}className={classes.nested} style={{paddingLeft: 40}}>
                            <img src={share} alt="Logo" height='12px'  style={{padding:0, marginRight:5}} /> {'Delete files'}
                            <ListItemText primary="" />
                            </ListItem>
                         </List>
                        </Collapse>
                  </div>
                  <div id="item">
                        <Collapse in={open8} timeout="auto" unmountOnExit>
                         <List component="div" disablePadding>
                            <ListItem button onClick={() => {navigator.clipboard.writeText("git rm --cached file1.js")}}className={classes.nested} style={{paddingLeft: 40}}>
                            <img src={share} alt="Logo" height='12px'  style={{padding:0, marginRight:5}} /> {'Delete from stage'}
                            <ListItemText primary="" />
                            </ListItem>
                         </List>
                        </Collapse>
                  </div>
                  <div id="item">
                        <Collapse in={open8} timeout="auto" unmountOnExit>
                         <List component="div" disablePadding>
                            <ListItem button onClick={() => {navigator.clipboard.writeText("git mv file1.js")}}className={classes.nested} style={{paddingLeft: 40}}>
                            <img src={share} alt="Logo" height='12px'  style={{padding:0, marginRight:5}} /> {'Rename files'}
                            <ListItemText primary="" />
                            </ListItem>
                         </List>
                        </Collapse>
                  </div>
            </List>
         </Collapse></div>


   {/* // ----> NPM        */}
   <div id="NPM"><ListItem button onClick={handleClick1}  style={{padding:0, marginLeft:5}}>{open1 ? <AiOutlineMinusSquare style={{color: '#C09553', fontSize:'15', marginRight:'5',padding:0}}/> : <AiOutlinePlusSquare style={{color: '#C09553', fontSize:'15', marginRight:'5',padding:0}}/>}{open1 ? <AiFillFolderOpen style={{color: '#C09553', fontSize:'25', marginRight:'5',padding:0}}/> : <AiFillFolder style={{color: '#C09553', fontSize:'25', marginRight:'5',padding:0}}/>}NPM</ListItem >
      <div id="Axios">
            <Collapse in={open1} timeout="auto" unmountOnExit>
               <List component="div" disablePadding>
                    <ListItem button onClick={(e) => {e.stopPropagation();setAxios(!Axios)}}  style={{padding:0, marginLeft:5}}>
                         {Axios ? <AiOutlineMinusSquare style={{color: '#C09553', fontSize:'15', margin:'0 0 0 15',padding:0}}/> : <AiOutlinePlusSquare style={{color: '#C09553', fontSize:'15', margin:'0 0 0 15',padding:0}}/>}
                         {Axios ? <AiFillFolderOpen style={{color: '#C09553', fontSize:'25', marginRight:'5',padding:0}}/> : <AiFillFolder style={{color: '#C09553', fontSize:'25', marginRight:'5',padding:0}}/>}
                         Axios
                     </ListItem >
                     <div id="item">
                        <Collapse in={Axios} timeout="auto" unmountOnExit>
                         <List component="div" disablePadding>
                            <ListItem button onClick={() => {navigator.clipboard.writeText('npm install axios')}}className={classes.nested} style={{paddingLeft: 40}}>
                            <img src={npmLogo} alt="Logo" height='12px'  style={{padding:0, marginRight:5}} /> {'install'}
                            <ListItemText primary="" />
                            </ListItem>
                         </List>
                        </Collapse></div>
                    <div id="item">
                        <Collapse in={Axios} timeout="auto" unmountOnExit>
                         <List component="div" disablePadding>
                            <ListItem button onClick={() => {navigator.clipboard.writeText("axios.get('/user?ID=12345')\n     .then( response => response);\n     .catch( error => error );")}}className={classes.nested} style={{paddingLeft: 40}}>
                            <img src={npmLogo} alt="Logo" height='12px'  style={{padding:0, marginRight:5}} /> {'Get request'}
                            <ListItemText primary="" />
                            </ListItem>
                         </List>
                        </Collapse>
                    </div>
                    <div id="item">
                        <Collapse in={Axios} timeout="auto" unmountOnExit>
                         <List component="div" disablePadding>
                            <ListItem button onClick={() => {navigator.clipboard.writeText("axios.post('URL', {data to send})\n     .then( response => response);\n     .catch( error => error );")}}className={classes.nested} style={{paddingLeft: 40}}>
                            <img src={npmLogo} alt="Logo" height='12px'  style={{padding:0, marginRight:5}} /> {'Post request'}
                            <ListItemText primary="" />
                            </ListItem>
                         </List>
                        </Collapse>
                    </div>
                    <div id="item">
                        <Collapse in={Axios} timeout="auto" unmountOnExit>
                         <List component="div" disablePadding>
                            <ListItem button onClick={() => {navigator.clipboard.writeText("axios.put('URL/id', {data to send})\n     .then( response => response);\n     .catch( error => error );")}}className={classes.nested} style={{paddingLeft: 40}}>
                            <img src={npmLogo} alt="Logo" height='12px'  style={{padding:0, marginRight:5}} /> {'Put request'}
                            <ListItemText primary="" />
                            </ListItem>
                         </List>
                        </Collapse>
                    </div>
                    <div id="item">
                        <Collapse in={Axios} timeout="auto" unmountOnExit>
                         <List component="div" disablePadding>
                            <ListItem button onClick={() => {navigator.clipboard.writeText("axios.delete('URL/id')\n     .then( response => response);\n     .catch( error => error );")}}className={classes.nested} style={{paddingLeft: 40}}>
                            <img src={npmLogo} alt="Logo" height='12px'  style={{padding:0, marginRight:5}} /> {'Delete request'}
                            <ListItemText primary="" />
                            </ListItem>
                         </List>
                        </Collapse>
                    </div>
                    <div id="item">
                        <Collapse in={Axios} timeout="auto" unmountOnExit>
                         <List component="div" disablePadding>
                            <ListItem button onClick={() => {navigator.clipboard.writeText("axios.interceptors.response.use(null, (error) =>{\n const expectedError = error.response && error.response.status >= 400 && error.response.status < 500;\n if (!expectedError) {\n console.log('Logging the error', error);\n // alert('An unexpected error occurred')\n }\n return Promise.reject(error);\n });")}}className={classes.nested} style={{paddingLeft: 40}}>
                            <img src={npmLogo} alt="Logo" height='12px'  style={{padding:0, marginRight:5}} /> {'interceptors'}
                            <ListItemText primary="" />
                            </ListItem>
                         </List>
                        </Collapse>
                    </div>
                 </List>
             </Collapse> </div>

      <div id="Express">
            <Collapse in={open1} timeout="auto" unmountOnExit>
               <List component="div" disablePadding>
                    <ListItem button onClick={(e) => {e.stopPropagation();setExpress(!Express)}}  style={{padding:0, marginLeft:5}}>
                         {Express ? <AiOutlineMinusSquare style={{color: '#C09553', fontSize:'15', margin:'0 0 0 15',padding:0}}/> : <AiOutlinePlusSquare style={{color: '#C09553', fontSize:'15', margin:'0 0 0 15',padding:0}}/>}
                         {Express ? <AiFillFolderOpen style={{color: '#C09553', fontSize:'25', marginRight:'5',padding:0}}/> : <AiFillFolder style={{color: '#C09553', fontSize:'25', marginRight:'5',padding:0}}/>}
                         Express
                     </ListItem >
                     <div id="install">
                        <Collapse in={Express} timeout="auto" unmountOnExit>
                         <List component="div" disablePadding>
                            <ListItem button onClick={() => {navigator.clipboard.writeText('npm install express')}}className={classes.nested} style={{paddingLeft: 40}}>
                            <img src={npmLogo} alt="Logo" height='12px'  style={{padding:0, marginRight:5}} /> {'install'}
                            <ListItemText primary="" />
                            </ListItem>
                         </List>
                        </Collapse>
                    </div>
                    <div id="Get request">
                        <Collapse in={Express} timeout="auto" unmountOnExit>
                         <List component="div" disablePadding>
                            <ListItem button onClick={() => {navigator.clipboard.writeText("router.get('/', (req, res) => {\n user \n 	   .find() // get usersList from user object \n 	   .select('-password') //frontend dont need password \n 	   .then((usersList) => res.send(usersList)) // send users list \n 	   .catch((err) => console.error('Error while retrieving Users List : ' + JSON.stringify(err, undefined, 2))); \n });")}}className={classes.nested} style={{paddingLeft: 40}}>
                            <img src={npmLogo} alt="Logo" height='12px'  style={{padding:0, marginRight:5}} /> {'Get request (handle Route) '}
                            <ListItemText primary="" />
                            </ListItem>
                         </List>
                        </Collapse>
                    </div>
                    <div id="Post request">
                        <Collapse in={Express} timeout="auto" unmountOnExit>
                         <List component="div" disablePadding>
                            <ListItem button onClick={() => {navigator.clipboard.writeText("app.post('/', function (req, res) {\n  res.send('Got a POST request')\n  })")}}className={classes.nested} style={{paddingLeft: 40}}>
                            <img src={npmLogo} alt="Logo" height='12px'  style={{padding:0, marginRight:5}} /> {'Post request (handle Route) '}
                            <ListItemText primary="" />
                            </ListItem>
                         </List>
                        </Collapse>
                    </div>
                    <div id="Put request">
                        <Collapse in={Express} timeout="auto" unmountOnExit>
                         <List component="div" disablePadding>
                            <ListItem button onClick={() => {navigator.clipboard.writeText("app.put('/user', function (req, res) {\n  res.send('Got a put request')\n  })")}}className={classes.nested} style={{paddingLeft: 40}}>
                            <img src={npmLogo} alt="Logo" height='12px'  style={{padding:0, marginRight:5}} /> {'Put request (handle Route) '}
                            <ListItemText primary="" />
                            </ListItem>
                         </List>
                        </Collapse>
                    </div>
                    <div id="delete request">
                        <Collapse in={Express} timeout="auto" unmountOnExit>
                         <List component="div" disablePadding>
                            <ListItem button onClick={() => {navigator.clipboard.writeText("app.delete('/user', function (req, res) {\n  res.send('Got a delete request')\n  })")}}className={classes.nested} style={{paddingLeft: 40}}>
                            <img src={npmLogo} alt="Logo" height='12px'  style={{padding:0, marginRight:5}} /> {'Delete req (handle Route)'}
                            <ListItemText primary="" />
                            </ListItem>
                         </List>
                        </Collapse>
                    </div>
                 </List>
             </Collapse> 
          </div></div>
          


   {/* // ----> NodeJS     */}
   <div id="NodeJS"><ListItem button onClick={handleClick3}  style={{padding:0, marginLeft:5}}>{open3 ? <AiOutlineMinusSquare style={{color: '#C09553', fontSize:'15', marginRight:'5',padding:0}}/> : <AiOutlinePlusSquare style={{color: '#C09553', fontSize:'15', marginRight:'5',padding:0}}/>}{open3 ? <AiFillFolderOpen style={{color: '#C09553', fontSize:'25', marginRight:'5',padding:0}}/> : <AiFillFolder style={{color: '#C09553', fontSize:'25', marginRight:'5',padding:0}}/>}NodeJS</ListItem >
         <div id="HTTP">
            <Collapse in={open3} timeout="auto" unmountOnExit>
               <List component="div" disablePadding>
                    <ListItem button onClick={(e) => {e.stopPropagation();setHTTP(!HTTP)}}  style={{padding:0, marginLeft:5}}>
                         {HTTP ? <AiOutlineMinusSquare style={{color: '#C09553', fontSize:'15', margin:'0 0 0 15',padding:0}}/> : <AiOutlinePlusSquare style={{color: '#C09553', fontSize:'15', margin:'0 0 0 15',padding:0}}/>}
                         {HTTP ? <AiFillFolderOpen style={{color: '#C09553', fontSize:'25', marginRight:'5',padding:0}}/> : <AiFillFolder style={{color: '#C09553', fontSize:'25', marginRight:'5',padding:0}}/>}
                         HTTP
                     </ListItem >
                     <div id="item">
                        <Collapse in={HTTP} timeout="auto" unmountOnExit>
                         <List component="div" disablePadding>
                            <ListItem button onClick={() => {navigator.clipboard.writeText("import http from 'http'")}}className={classes.nested} style={{paddingLeft: 40}}>
                            <img src={nodejsLogo} alt="Logo" height='12px'  style={{padding:0, marginRight:5}} /> {'Import http'}
                            <ListItemText primary="" />
                            </ListItem>
                         </List>
                        </Collapse>
                    </div>
                    <div id="item">
                        <Collapse in={HTTP} timeout="auto" unmountOnExit>
                         <List component="div" disablePadding>
                            <ListItem button onClick={() => {navigator.clipboard.writeText("http.createServer((req, res) => {}).listen(4000, ()=> console.log('listening on port 4000'));")}}className={classes.nested} style={{paddingLeft: 40}}>
                            <img src={nodejsLogo} alt="Logo" height='12px'  style={{padding:0, marginRight:5}} /> {'Create server'}
                            <ListItemText primary="" />
                            </ListItem>
                         </List>
                        </Collapse>
                    </div>
                 </List>
             </Collapse> 
          </div>
         <div id="HTTPS">  
            <Collapse in={open3} timeout="auto" unmountOnExit>
               <List component="div" disablePadding>
                    <ListItem button onClick={(e) => {e.stopPropagation();setHTTPS(!HTTPS)}}  style={{padding:0, marginLeft:5}}>
                         {HTTPS ? <AiOutlineMinusSquare style={{color: '#C09553', fontSize:'15', margin:'0 0 0 15',padding:0}}/> : <AiOutlinePlusSquare style={{color: '#C09553', fontSize:'15', margin:'0 0 0 15',padding:0}}/>}
                         {HTTPS ? <AiFillFolderOpen style={{color: '#C09553', fontSize:'25', marginRight:'5',padding:0}}/> : <AiFillFolder style={{color: '#C09553', fontSize:'25', marginRight:'5',padding:0}}/>}
                         HTTPS
                     </ListItem >
                     <div id="item">
                        <Collapse in={HTTPS} timeout="auto" unmountOnExit>
                         <List component="div" disablePadding>
                            <ListItem button onClick={() => {navigator.clipboard.writeText('console.log(" "); ')}}className={classes.nested} style={{paddingLeft: 40}}>
                            <img src={nodejsLogo} alt="Logo" height='12px'  style={{padding:0, marginRight:5}} /> {'console.log'}
                            <ListItemText primary="" />
                            </ListItem>
                         </List>
                        </Collapse>
                    </div>
                 </List>
             </Collapse> </div>
         <div id="FS">
            <Collapse in={open3} timeout="auto" unmountOnExit>
               <List component="div" disablePadding>
                    <ListItem button onClick={(e) => {e.stopPropagation();setFS(!FS)}}  style={{padding:0, marginLeft:5}}>
                         {FS ? <AiOutlineMinusSquare style={{color: '#C09553', fontSize:'15', margin:'0 0 0 15',padding:0}}/> : <AiOutlinePlusSquare style={{color: '#C09553', fontSize:'15', margin:'0 0 0 15',padding:0}}/>}
                         {FS ? <AiFillFolderOpen style={{color: '#C09553', fontSize:'25', marginRight:'5',padding:0}}/> : <AiFillFolder style={{color: '#C09553', fontSize:'25', marginRight:'5',padding:0}}/>}
                         FS
                     </ListItem >
                     <div id="item">
                        <Collapse in={FS} timeout="auto" unmountOnExit>
                         <List component="div" disablePadding>
                            <ListItem button onClick={() => {navigator.clipboard.writeText('console.log(" "); ')}}className={classes.nested} style={{paddingLeft: 40}}>
                            <img src={nodejsLogo} alt="Logo" height='12px'  style={{padding:0, marginRight:5}} /> {'console.log'}
                            <ListItemText primary="" />
                            </ListItem>
                         </List>
                        </Collapse>
                    </div>
                 </List>
             </Collapse> </div>
         <div id="PATH">
            <Collapse in={open3} timeout="auto" unmountOnExit>
               <List component="div" disablePadding>
                    <ListItem button onClick={(e) => {e.stopPropagation();setPATH(!PATH)}}  style={{padding:0, marginLeft:5}}>
                         {PATH ? <AiOutlineMinusSquare style={{color: '#C09553', fontSize:'15', margin:'0 0 0 15',padding:0}}/> : <AiOutlinePlusSquare style={{color: '#C09553', fontSize:'15', margin:'0 0 0 15',padding:0}}/>}
                         {PATH ? <AiFillFolderOpen style={{color: '#C09553', fontSize:'25', marginRight:'5',padding:0}}/> : <AiFillFolder style={{color: '#C09553', fontSize:'25', marginRight:'5',padding:0}}/>}
                         PATH
                     </ListItem >
                     <div id="item">
                        <Collapse in={PATH} timeout="auto" unmountOnExit>
                         <List component="div" disablePadding>
                            <ListItem button onClick={() => {navigator.clipboard.writeText('console.log(" "); ')}}className={classes.nested} style={{paddingLeft: 40}}>
                            <img src={nodejsLogo} alt="Logo" height='12px'  style={{padding:0, marginRight:5}} /> {'console.log'}
                            <ListItemText primary="" />
                            </ListItem>
                         </List>
                        </Collapse>
                    </div>
                 </List>
             </Collapse></div>
         <div id="OS">
            <Collapse in={open3} timeout="auto" unmountOnExit>
               <List component="div" disablePadding>
                    <ListItem button onClick={(e) => {e.stopPropagation();setOS(!OS)}}  style={{padding:0, marginLeft:5}}>
                         {OS ? <AiOutlineMinusSquare style={{color: '#C09553', fontSize:'15', margin:'0 0 0 15',padding:0}}/> : <AiOutlinePlusSquare style={{color: '#C09553', fontSize:'15', margin:'0 0 0 15',padding:0}}/>}
                         {OS ? <AiFillFolderOpen style={{color: '#C09553', fontSize:'25', marginRight:'5',padding:0}}/> : <AiFillFolder style={{color: '#C09553', fontSize:'25', marginRight:'5',padding:0}}/>}
                         OS
                     </ListItem >
                     <div id="item">
                        <Collapse in={OS} timeout="auto" unmountOnExit>
                         <List component="div" disablePadding>
                            <ListItem button onClick={() => {navigator.clipboard.writeText('console.log(" "); ')}}className={classes.nested} style={{paddingLeft: 40}}>
                            <img src={nodejsLogo} alt="Logo" height='12px'  style={{padding:0, marginRight:5}} /> {'console.log'}
                            <ListItemText primary="" />
                            </ListItem>
                         </List>
                        </Collapse>
                    </div>
                 </List>
             </Collapse> 
          </div></div>
          
   {/* // ----> ReactJS    */}

      <ListItem button onClick={handleClick2}  style={{padding:0, marginLeft:5}}>{open2 ? <AiOutlineMinusSquare style={{color: '#C09553', fontSize:'15', marginRight:'5',padding:0}}/> : <AiOutlinePlusSquare style={{color: '#C09553', fontSize:'15', marginRight:'5',padding:0}}/>}{open2 ? <AiFillFolderOpen style={{color: '#C09553', fontSize:'25', marginRight:'5',padding:0}}/> : <AiFillFolder style={{color: '#C09553', fontSize:'25', marginRight:'5',padding:0}}/>}
      ReactJS
         </ListItem >
           <Collapse in={open2} timeout="auto" unmountOnExit>
               <List component="div" disablePadding>
        {ReactJS.map((element, index) =>  
             <ListItem key={index} button onClick={() => {navigator.clipboard.writeText(element.copy)}}className={classes.nested} style={{paddingLeft: 40}}>
           <img src={element.logo} alt="Logo" height='12px' style={{padding:0, marginRight:5}} /> {element.title}
            <ListItemText primary="" />
          </ListItem>)}
        </List>
      </Collapse>
	
    
     
   {/* // ----> CSS        */}    
      <ListItem button onClick={handleClick4}  style={{padding:0, marginLeft:5}}>{open4 ? <AiOutlineMinusSquare style={{color: '#C09553', fontSize:'15', marginRight:'5',padding:0}}/> : <AiOutlinePlusSquare style={{color: '#C09553', fontSize:'15', marginRight:'5',padding:0}}/>}{open4 ? <AiFillFolderOpen style={{color: '#C09553', fontSize:'25', marginRight:'5',padding:0}}/> : <AiFillFolder style={{color: '#C09553', fontSize:'25', marginRight:'5',padding:0}}/>}
      CSS
         </ListItem >
           <Collapse in={open4} timeout="auto" unmountOnExit>
               <List component="div" disablePadding>
        {CSS.map((element, index) =>  
             <ListItem key={index} button onClick={() => {navigator.clipboard.writeText(element.copy)}}className={classes.nested} style={{paddingLeft: 40}}>
           <img src={element.logo} alt="Logo" height='15px' style={{padding:0, marginRight:5}} /> {element.title}
            <ListItemText primary="" />
          </ListItem>)}
        </List>
      </Collapse>
	
   {/* // ----> MongoDB    */}      
      <ListItem button onClick={handleClick5}  style={{padding:0, marginLeft:5}}>{open5 ? <AiOutlineMinusSquare style={{color: '#C09553', fontSize:'15', marginRight:'5',padding:0}}/> : <AiOutlinePlusSquare style={{color: '#C09553', fontSize:'15', marginRight:'5',padding:0}}/>}{open5 ? <AiFillFolderOpen style={{color: '#C09553', fontSize:'25', marginRight:'5',padding:0}}/> : <AiFillFolder style={{color: '#C09553', fontSize:'25', marginRight:'5',padding:0}}/>}
      MongoDB
         </ListItem >
           <Collapse in={open5} timeout="auto" unmountOnExit>
               <List component="div" disablePadding>
        {MongoDB.map((element, index) =>  
             <ListItem key={index} button onClick={() => {navigator.clipboard.writeText(element.copy)}}className={classes.nested} style={{paddingLeft: 40}}>
           <img src={element.logo} alt="Logo" height='12px' style={{padding:0, marginRight:5}} /> {element.title}
            <ListItemText primary="" />
          </ListItem>)}
        </List>
      </Collapse>
	
   {/* // ----> HTML       */}     
      <ListItem button onClick={handleClick6}  style={{padding:0, marginLeft:5}}>{open6 ? <AiOutlineMinusSquare style={{color: '#C09553', fontSize:'15', marginRight:'5',padding:0}}/> : <AiOutlinePlusSquare style={{color: '#C09553', fontSize:'15', marginRight:'5',padding:0}}/>}{open6 ? <AiFillFolderOpen style={{color: '#C09553', fontSize:'25', marginRight:'5',padding:0}}/> : <AiFillFolder style={{color: '#C09553', fontSize:'25', marginRight:'5',padding:0}}/>}
      HTML
         </ListItem >
           <Collapse in={open6} timeout="auto" unmountOnExit>
               <List component="div" disablePadding>
        {HTML.map((element, index) =>  
             <ListItem key={index} button onClick={() => {navigator.clipboard.writeText(element.copy)}}className={classes.nested} style={{paddingLeft: 40}}>
           <img src={element.logo} alt="Logo" height='12px' style={{padding:0, marginRight:5}} /> {element.title}
            <ListItemText primary="" />
          </ListItem>)}
        </List>
      </Collapse>
    </List>
</div>
	);
}
