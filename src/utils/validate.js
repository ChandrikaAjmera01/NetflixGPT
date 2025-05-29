export const checkValidaData = (email, password, username, isSignInForm) => {
    const isEmailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    const isPasswordValid = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^\w\s]).{8,}$/.test(password);
    if(!isEmailValid) {
        return "Email is not valid";
    }
    if(!isPasswordValid) {
        return "Password must be at least 8 characters long, contain at least one uppercase letter, one lowercase letter, one number, and one special character.";
    }
    if(!isSignInForm && !username) {
        return "Username is required for sign up";
    }
    return null;
}