import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
  navbar: {
    backgroundColor: "#203040",
    "& a": {
      color: "#FFFFFF",
      marginLeft: 10,
    },
  },
  main: {
    minHeight: "80vh",
  },
  footer: {
    textAlign: "center",
    marginTop: 10,
  },
  section: {
    marginTop: 10,
    marginBottom: 10,
  },
  form: {
    maxWidth: 800,
    margin: "0 auto",
  },
  brand: {
    fontWeight: "bold",
    fontSize: "1.5rem",
  },
  grow: {
    flexGrow: 1,
  },

  navbarButton: {
    color: "#ffffff",
    textTransform: "initial",
  },

  transparentBackgroud: {
    backgroundColor: "transparent",
  },

  error: {
    color: "#f04040",
  },
});

export default useStyles;
