const ValidatorRules = {
    empty: (val) =>
    val.trim().length === 0
    &&
    { empty: "can't be empty" },

    lengthRange: (val, options) =>
    ((val.length < options.from || val.length > options.to) && val)
    &&
    { lengthRange: `characters minimum of ${ options.from } maximum to ${ options.to }` },

    valueRange: (val, options) => (val < options.from || val > options.to)
    &&
    { valueRange: `value ranges from  ${ options.from } to ${ options.to }` },

    maxLength: (val, options) => (val.length > options.len)
    &&
    { maxLength: `maximum of ${ options.len } characters` },

    minLength: (val, options) => (!val && val.length < options.len)
    &&
    { minLength: `minimum of ${ options.len } characters` },

    lessThan: (val, options) => (val > options.val)
    &&
    { lessThan: `should be less than ${ options.val }` },

    moreThan: (val, options) => (val <= options.val)
    &&
    { moreThan: `should be more than ${ options.val }` },

    equals: (val, options) => ((options.to && val) && (val !== options.to))
    &&
    { equals: `should be equal to ${ options.toAlias || options.to }` },

    isEmail: val => !/.+?@.+?\..+/g.test(val)
    &&
    { isEmail: 'should be an email' },

    isPassword: val => !/[a-z]+[A-Z]+/g.test(val)
    &&
    { isPassword: 'should contain at least one uppercase and one lowercase character' }
};

export default ValidatorRules;
