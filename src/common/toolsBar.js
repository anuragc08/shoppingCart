import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";
import FormHelperText from "@material-ui/core/FormHelperText";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import NativeSelect from "@material-ui/core/NativeSelect";

const useStyles = makeStyles((theme) => ({
    formControl: {
      margin: theme.spacing(1),
      minWidth: 120,
    },
    selectEmpty: {
      marginTop: theme.spacing(2),
    },
  }));

export const CustomSelect =({label, value, options,handleChange })=> {
  const classes = useStyles();
//   const [state, setState] = React.useState({});

//   const handleChange = (event) => {
//     const name = event.target.name;
//     setState({
//       ...state,
//       [name]: event.target.value,
//     });
//   };
  const custmizedOption = (item) => {
    return item.map((data, index) => {
      return <option value={data.value}>{data.label}</option>;
    });
  };

  return (
    <div>
      <FormControl className={classes.formControl}>
        <InputLabel htmlFor="age-native-simple">{label}</InputLabel>
        <Select native  value={value} onChange={handleChange}>
          {custmizedOption(options)}
        </Select>
      </FormControl>
    </div>
  );
}
