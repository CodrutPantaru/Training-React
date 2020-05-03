import React from 'react';
import DialogTitle from '@material-ui/core/DialogTitle';
import Dialog from '@material-ui/core/Dialog';
import Button from '@material-ui/core/Button';
import { TextField, Select } from 'formik-material-ui';
import { Formik, Field, Form } from 'formik';
import './AddCocktailDialog.scss';
import { InputLabel } from '@material-ui/core';

function AddCocktailDialog(props) {

    const { onClose, open } = props;

    const handleClose = (formValues) =>{
        onClose(formValues)
    }

    return <Dialog open={open}>

        <DialogTitle>Add Cocktail</DialogTitle>
        <Formik
            initialValues={{ category: "Alcoholic", strDrink: "", strDrinkThumb: "" }}
            validate={
                values => {
                    const errors = {};
                    if (!values.strDrink) {
                        errors.strDrink = 'Required';
                    } else {
                        if (values.strDrink.length < 5) {
                            errors.strDrink = 'Too short!';
                        }
                    }
                    if (!values.strDrinkThumb) {
                        errors.strDrinkThumb = 'Required'
                    } else {
                        if (['.jpg', '.png'].indexOf(values.strDrinkThumb.substr(values.strDrinkThumb.length - 4)) === -1) {
                            errors.strDrinkThumb = 'Format not supported';
                        }
                    }
                    return errors;
                }
            }
            onSubmit={(values, { setSubmitting }) => {
                values.strDrinkThumb = `./assets/${values.strDrinkThumb}`
                    setSubmitting(false);
                    handleClose(values);

            }}
        >
            {props =>
                (<Form>
                    <div className="cell">
                        <InputLabel>Category</InputLabel>
                        <Field
                            component={Select}
                            autoWidth={true}
                            native={true}
                            name="category"

                        >
                            <option value={'Alcoholic'}>Alcoholic</option>
                            <option value={'Non-Alcoholic'}>Non-Alcoholic</option>
                            <option value={'Ordinary'}>Ordinary</option>
                            <option value={'Cocktail Glass'}>Cocktail Glass</option>
                            <option value={'Champagne flute'}>Champagne flute</option>
                        </Field>
                    </div>
                    <div className="cell">
                        <InputLabel>Name</InputLabel>
                        <Field component={TextField} type="text" name="strDrink"></Field>
                    </div>
                    <div className="cell">
                        <InputLabel>Image name</InputLabel>
                        <Field component={TextField} type="text" name="strDrinkThumb"></Field>
                    </div>
                    <Button  color="secondary" onClick={ () => handleClose(null) }>
                        Cancel
                    </Button>
                    <Button type="submit" variant="contained" color="primary" disabled={props.isSubmitting || !props.dirty || !props.isValid}>
                        Save
                    </Button>
                   
                </Form>
                )}
        </Formik>
    </Dialog>
}

export default AddCocktailDialog;