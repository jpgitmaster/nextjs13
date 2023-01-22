let result: any = {}
const Validate = (validations: any, values: any) => {
    result.validation_has_error = false
    result.validation_message = 'The given data was invalid.'
    result.validation_errors = {}
    let aKeys = Object.keys(validations).sort()
    let bKeys = Object.keys(values).sort()
    aKeys = aKeys.filter(value => -1 !== bKeys.indexOf(value))
    bKeys = bKeys.filter(value => -1 !== aKeys.indexOf(value))
    let total = bKeys.length ? bKeys.length : 0
    let i
    // console.log(validations)
    // console.log(aKeys)
    // console.log(aKeys.filter(value => -1 !== bKeys.indexOf(value)))

    for (i = 0; i < total; i++) {
        // console.log(validations[aKeys[i]])
        // console.log(values[bKeys[i]].trim().length)
        if (aKeys[i] == bKeys[i]) {
            // if (typeof values[bKeys[i]]['size'] !== 'undefined') {
                // REQUIRED
                if (validations[aKeys[i]].required) {
                    if (!values[bKeys[i]].trim().length) {
                        result.validation_has_error = true
                        result.validation_errors[bKeys[i]] = (validations[aKeys[i]].usename ? validations[aKeys[i]].usename : bKeys[i]) + ' is required'
                    }
                }

                // MIN LENGTH
                if (values[bKeys[i]].trim().length && validations[aKeys[i]].minLength) {
                    if (values[bKeys[i]].trim().length < validations[aKeys[i]].minLength) {
                        result.validation_has_error = true
                        result.validation_errors[bKeys[i]] = (validations[aKeys[i]].usename ? validations[aKeys[i]].usename : bKeys[i]) + ' is too short at least more than or equal to ' + validations[aKeys[i]].minLength + ' characters'
                    }
                }

                // MAX LENGTH
                if (values[bKeys[i]].trim().length && validations[aKeys[i]].maxLength) {
                    if (values[bKeys[i]].trim().length > validations[aKeys[i]].maxLength) {
                        result.validation_has_error = true
                        result.validation_errors[bKeys[i]] = (validations[aKeys[i]].usename ? validations[aKeys[i]].usename : bKeys[i]) + ' is too long at least less than or equal to ' + validations[aKeys[i]].maxLength + ' characters'
                    }
                }

                // EMAIL
                if (values[bKeys[i]].trim().length && validations[aKeys[i]].email) {
                    const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
                    if (!re.test(values[bKeys[i]])) {
                        result.validation_has_error = true
                        result.validation_errors[bKeys[i]] = (validations[aKeys[i]].usename ? validations[aKeys[i]].usename : bKeys[i]) + ' is not a valid email'
                    }
                }

                // NUMERIC
                if (values[bKeys[i]].trim().length && validations[aKeys[i]].numeric) {
                    const re = /^\d+$/;
                    if (!re.test(values[bKeys[i]])) {
                        result.validation_has_error = true
                        result.validation_errors[bKeys[i]] = (validations[aKeys[i]].usename ? validations[aKeys[i]].usename : bKeys[i]) + ' accepts numeric only'
                    }
                }

                // CONFIRM PASSWORD
                if(validations[aKeys[i]].confirm && validations[aKeys[i]].confirm !== values[bKeys[i]]){
                    result.validation_has_error = true
                    result.validation_errors[bKeys[i]] = (validations[aKeys[i]].usename ? validations[aKeys[i]].usename : bKeys[i]) + ' not match!'
                }

                // REGEX
                if(validations[aKeys[i]].regex){
                    if (!validations[aKeys[i]].regex.pattern.test(values[bKeys[i]])) {
                        result.validation_has_error = true
                        result.validation_errors[bKeys[i]] = validations[aKeys[i]].regex.message
                    }
                }

                // SIZE
                if(validations[aKeys[i]].file && validations[aKeys[i]].file.size){
                    if (validations[aKeys[i]].file.size <= (Math.round(validations[aKeys[i]].file.field / 1000))) {
                        result.validation_has_error = true
                        result.validation_errors[bKeys[i]] = (validations[aKeys[i]].usename ? validations[aKeys[i]].usename : bKeys[i]) + ' is greater than ' + (validations[aKeys[i]].file.size / 1000) + 'MB'
                    }
                }
            // }
        }
    }
    // console.log(result);
    return result;
}
export default Validate;