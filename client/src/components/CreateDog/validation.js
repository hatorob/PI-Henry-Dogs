
export const validation = (data) => {
    const nameRegex = new RegExp(/^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/);
    const imageRegex = new RegExp(/^(ftp|http|https):\/\/[^ "]+$/);
    //!Validar de 15 a 110 cm como estatura minima y máxima
    const numberValidationHeight = new RegExp(/^(?:1[5-9]|[2-9]\d|\d{3,})(?:\.\d+)?$/);

    //const numberValidation = new RegExp(/^\d+(\.\d+)?$/);
    //! la siguiente valida un máximo de 1 a 110 kg
    const numberValidationWeight = new RegExp(/^(?:[1-9][0-9]{0,1}|1[01][0-9]|110)(?:\.\d+)?$/);

    //! la siguiente valida hasta un maximo de 20 años
    const numberValidationLife = new RegExp(/^(?:0|(?:[1-9]|1\d|20))$/);

    /* minimumHeight
    maximumHeight
    minimumWeight
    maximumWeight
    yearsLife */
    let errors = {};
    //! pasamos el string de minimo y maximo tanto de height como weight, ya que esperamos que sea un número así venga como string

    if(!nameRegex.test(data.name)) errors.name = "Is not a name validation";
    if(!imageRegex.test(data.imagen)) errors.imagen = "Is not a url image";
    //! validamos a minimo height  y maximo
    if(Number(data.minimumHeight) < 15) {
        errors.height = "The minimum must be equal to or greater than 15cm";
    } else if(Number(data.maximumHeight) > 110) {
        errors.height = "The maximun must be equal to or less than 110cm";
    } else if(Number(data.minimumHeight) >= 15 && Number(data.maximumHeight) <= 110 && Number(data.minimumHeight) <= Number(data.maximumHeight)) {
        if(!numberValidationHeight.test(Number(data.minimumHeight)) || !numberValidationHeight.test(Number(data.maximumHeight)) ) errors.height = "Is not validate, the range is between 1(min)-110(max)";
    } else {
        errors.height = "The minimum cannot be higher than the maximum";
    }
    //! validamos a minimo height  y maximo
    if(Number(data.minimumWeight) < 1) {
        errors.weight = "The minimum must be equal to or greater than 1kg";
    } else if(Number(data.maximumWeight) > 110) {
        errors.weight = "The maximun must be equal to or less than 110kg";
    } else if(Number(data.minimumWeight) >= 1 && Number(data.maximumWeight) <= 110 && Number(data.minimumWeight) <= Number(data.maximumWeight)) {
        if(!numberValidationWeight.test(Number(data.minimumWeight)) || !numberValidationWeight.test(Number(data.maximumWeight)) ) errors.weight = "Is not validate, the range is between 1(min)-110(max)";
    } else {
        errors.weight = "The minimum cannot be higher than the maximum";
    }
    //numberValidationLife
    if(!numberValidationLife.test(data.yearsLife) || data.yearsLife <= 0 || data.yearsLife > 20) errors.yearslife = "cannot be a floating number, and year cannot be higher than 20 and less 1"

    return errors;
}