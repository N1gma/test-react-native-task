import commonRules from './validatorRules/commonRules';

const importRules = {
    ...commonRules
};


class Validator {
    constructor(rules = {}) {
        this.rules = {
            ...importRules,
            rules
        };
    }

    validate(value = '', options) {
        this.errorObject = {
            results: {},
            valid: true
        };
        for (let i = 0; i < options.length; i += 1) {
            const option = options[i];
            const error = option.name
                ? this.rules[option.name](value, option)
                : this.rules[option](value);
            if (error) {
                this.buildResults(error);
            }
        }
        return this.errorObject;
    }


    validateGroup(data) {
        const errorObjects = data.reduce((result, validationProps) => ({
            ...result,
            [validationProps.field || validationProps.data || 'no_value_provided']: this.validate(validationProps.data || '', validationProps.rules)
        }), {});

        const valid = Object.values(errorObjects).every((checkResult) => checkResult.valid);

        return { valid, errorObjects };
    }


    addRegExpRule(name, rules, errorMsg) {
        this.rules[name] = val => {
            if (Array.isArray(rules)) {
                rules.forEach((rule) => {
                    if (!rule.test(val)) {
                        this.buildResults({ [name]: errorMsg });
                    }
                });
            } else if (!rules.test(val)) {
                this.buildResults({ [name]: errorMsg });
            }
        };
    }

    addRule(name, rule, errorMsg) {
        this.rules[name] = (val, options) => {
            const rulecheck = !rule(val, options);
            return rulecheck && { [name]: errorMsg instanceof Function ? errorMsg(val, options) : errorMsg };
        };
        return this;
    }

    buildResults(error) {
        this.errorObject.results = {
            ...this.errorObject.results,
            ...error
        };
        this.errorObject.valid = false;
    }
}

export default Validator;
