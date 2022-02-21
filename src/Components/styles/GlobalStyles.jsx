import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`

// Sidebar Styles
    .bottom{
        background: ${({ theme }) => theme.bottom};
        transition: all 1s ease-in
    }
    #logo{
        color: ${({ theme }) => theme.logocolor};
        transition: all 1s ease-in
    }
    #sidebarcontainer{
        background: ${({ theme }) => theme.sidebarcontainer};
        color: ${({ theme }) => theme.sidebarcolor};
        transition: all 1s ease-in
    }
    #sidebaricon{
        color: ${({ theme }) => theme.sidebaricon};
    }
    #sidebaricon2{
        color: ${({ theme }) => theme.sidebaricon2};
    }
    #sidebarbtn div{
        color: ${({ theme }) => theme.sidebarbtn};
        transition: all 1s ease-in
    }


    // Vehicle & Home Styles
    #vehhomemain{
        background: ${({ theme }) => theme.vehmain};
        transition: all 1s ease-in
    }
    #vehhomebell{
        background-color: ${({ theme }) => theme.belldiv};
        color: ${({ theme }) => theme.bellcolor};
        transition: all 1s ease-in
    }
    #midwords{
        color: ${({ theme }) => theme.midwordsh1};
        transition: all 1s ease-in
    }
    #midwords p{
        color: ${({ theme }) => theme.midwordsp};
        transition: all 1s ease-in
    }
    #vehbottom{
        background-color: ${({ theme }) => theme.vehbottomback};
        transition: all 1s ease-in
    }
    #vehbottomtop{
        border-bottom: ${({ theme }) => theme.vehbottomline};
        transition: all 1s ease-in
    }
    #days{
        background-color: ${({ theme }) => theme.daysback};
        transition: all 1s ease-in
    }
    #days button{
        color: ${({ theme }) => theme.dayscolor};
        transition: color 1s ease-in
    }


    // Vehcomp styles
    #vehcompmain{
        background-color: ${({ theme }) => theme.vehcompback};
        transition: all 1s ease-in
    }
    #vehcompmain h1{
        color: ${({ theme }) => theme.vehcomph1};
        transition: all 1s ease-in
    }
    #vehcompactivebtn{
        color: ${({ theme }) => theme.vehcompbtn};
        border-bottom: ${({ theme }) => theme.vehcompbtnbottom};
        transition: all 1s ease-in
    }
    #truck{
        color: ${({ theme }) => theme.truckcolor};
        transition: all 1s ease-in
    }


    // Midmodal Style
    #midmodcon{
        background-color: ${({ theme }) => theme.midmodalback};
        color: ${({ theme }) => theme.midmodcolor};
        transition: background-color 1s ease-in;
    }
    #midmodcon:hover{
        background-color: ${({ theme }) => theme.midmodalhover};
        color: ${({ theme }) => theme.midmodalhoverfont};
    }
    #midmodcon2{
        background-color: ${({ theme }) => theme.midmodalback};
        color: ${({ theme }) => theme.midmodcolor};
        transition: all 1s ease-in
    }


    // Chart Styles
    #charts{
        background-color: ${({ theme }) => theme.chartsback};
        transition: all 1s ease-in
    }

    // TrackModal & MapModal container
    #trackcont{
        background-color: ${({ theme }) => theme.trackback};
        transition: background-color 1s ease-in
    }
    #clsbtn button{
        border: ${({ theme }) => theme.clsbtnborder};
        color: ${({ theme }) => theme.clsbtncolor};
    }


    // NavBar Styles
    #navbarmain{
        background-color: ${({ theme }) => theme.navbarcontback};
        transition: background-color 1s ease-in
    }
    .navbar{
        background-color: ${({ theme }) => theme.navbarcont};
        transition: background-color 1s ease-in
    }
    .menu-bars{
        color: ${({ theme }) => theme.navbarbtncolor};
        transition: color 1s ease-in
    }
    .nav-menu{
        background-color: ${({ theme }) => theme.navbarcont};
        transition: background-color 1s ease-in
    }
    .nav-text a, .nav-text2 a{
        color: ${({ theme }) => theme.navtextcolor};
        transition: color 1s ease-in
    }
`;

export const lightTheme = {
  body: "#fff",
  vehmain: "#F0F3F5",
  bottom: "#F6F8FB",
  sidebarcontainer: "white",
  sidebarcolor: "#011B57BF",
  sidebaricon: "#011B57BF",
  sidebarhover: "white",
  logocolor: "black",
  sidebarbtn: "#011B57BF",
  //   Vehicle component styles
  belldiv: "#1C16160B",
  bellcolor: "black",
  midwordsh1: "black",
  midwordsp: "#01133C93",
  vehbottomback: "#F6F8FB",
  vehbottomline: "1px solid rgb(230, 230, 230)",
  daysback: "white",
  //   Vehcomp styles
  vehcompback: "white",
  vehcomph1: "black",
  vehcompbtn: "#3C3D41",
  vehcompbtnbottom: "1px solid #3C3D41",
  truckcolor: "black",
  //   Midmodal Style
  midmodalback: "white",
  midmodalhover: "#386CE2",
  midmodalhoverfont: "white",
  midmodcolor: "black",
  //   CHarts style
  chartsback: "white",
  //   TrackModal Styles
  trackback: "white",
  clsbtnborder: "1px solid black;",
  clsbtncolor: "black",
  //   NavBar styles
  navbarcontback: "#F0F3F",
  navbarcont: "#F0F3F5",
  navbarbtncolor: "#011B57BF",
  navtextcolor: "#011B57BF",
};

export const darkTheme = {
  body: "#010A1D",
  vehmain: "#010A1D",
  bottom: "#010A1D",
  sidebarcontainer: "#04122E",
  sidebarcolor: "#D4DFF7BF",
  sidebaricon: "#D4DFF7BF",
  sidebaricon2: "#D4DFF7BF",
  logocolor: "white",
  sidebarbtn: "#D4DFF7BF",
  //   Vehicle component styles
  belldiv: "#10182a",
  bellcolor: "white",
  midwordsh1: "white",
  midwordsp: "#FAFAFA93",
  vehbottomback: "#060D1C",
  vehbottomline: "1px solid rgba(250, 250, 250, 0.58)",
  daysback: "#031333",
  dayscolor: "#FFFFFF88",
  //   Vehcomp styles
  vehcompback: "#081124",
  vehcomph1: "white",
  vehcompbtn: "#93B4FF",
  vehcompbtnbottom: "1px solid #93B4FF",
  truckcolor: "#FFFFFFDB",
  //   Midmodal Style
  midmodalback: "#04122E",
  midmodalhover: "#386CE2",
  midmodcolor: "white",
  //   CHarts style
  chartsback: "#04122E",
  //   TrackModal Styles
  trackback: "#020A1A",
  clsbtnborder: "1px solid white",
  clsbtncolor: "white",
  //   NavBar styles
  navbarcontback: "#010A1D",
  navbarcont: "#010A1D",
  navbarbtncolor: "white",
  navtextcolor: "#D4DFF7BF",
};
