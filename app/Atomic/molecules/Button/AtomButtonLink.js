import withStyles from "@material-ui/core/styles/withStyles";
import AtomButton from "../../atoms/Button";

/* nút chữ thường dạng như đường link */
const AtomButtonLink = withStyles(
  {
    root: {
      textTransform: "none",
      boxShadow: "none",
      padding: 0,
      minWidth: 0,
      "&:hover": {
        background: "none",
        textDecoration: "underline",
      },
    },
  },
  { name: "AtomButtonLink" }
)(AtomButton);
export default AtomButtonLink;
