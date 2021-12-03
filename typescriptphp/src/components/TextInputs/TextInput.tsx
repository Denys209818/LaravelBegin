import { useField } from "formik";
import classNames from "classnames";

const TextInput = ({...props}:any) => 
{
    const [field, meta] = useField(props);
    var label: string = props.label;
    return (<div className="form-group">
        <label htmlFor={props.id || props.name}>{label}</label>
        <input type={props.type} className={classNames("form-control", {"is-valid" : !meta.error && meta.touched},
        {"is-invalid": meta.error && meta.touched})} {...field} {...props} />
        {meta.error && 
        <div className="invalid-feedback">
            {meta.error}
        </div>}
    </div>);
}

export default TextInput;