const mobileRegex = /^[6-9]\d{9}$/;

const isValidMobileNumber = (mobileNumber) => mobileRegex.test(mobileNumber);


export {
    isValidMobileNumber
}