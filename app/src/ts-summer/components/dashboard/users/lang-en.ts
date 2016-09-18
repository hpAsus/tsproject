export const UsersEn: IApp.ILanguage = {
    USERS: {
        MANAGE_TITLE: 'Manage users',
        LIST: {
            NEW_USER: 'New user',
            EDIT: 'Edit',
            DELETE: 'Delete',
            ADMIN_BADGE: 'Admin'
        },
        NEW: {
            TITLE: 'New user',
            LABEL_EMAIL: 'E-mail',
            LABEL_PASSWORD: 'Password',
            BUTTON_CREATE: 'Create User',
            BUTTON_CANCEL: 'Cancel',
            BUTTON_CLOSE_TITLE: 'Close dialog',
            ERRORS: {
                EMAIL_REQUIRED: 'Email as login is required',
                EMAIL_INVALID: 'Not valid E-mail address',
                PASS_REQUIRED: 'Password is required'
            }
        },
        EDIT: {
            TITLE: 'Edit user',
            LABEL_LOGIN: 'Login (E-mail)',
            LABEL_NAME: 'Display name',
            LABEL_BIRTHDATE: 'Birth Date',
            LABEL_AGE: 'Display Age',
            LABEL_BIO: 'Biography',
            BUTTON_UPDATE: 'Update user',
            BUTTON_CANCEL: 'Cancel',
            BUTTON_CLOSE_TITLE: 'Close dialog',
            ERRORS: {
                EMAIL_REQUIRED: 'Email as login is required',
                EMAIL_INVALID: 'Not valid E-mail address',
                NAME_REQUIRED: 'Name is required.',
                NAME_VALIDATOR: 'Name should contain only letters and start with capital letter.',
                NAME_WORDS_VALIDATOR: 'Your name should consists of {{maxWords}} words maximum.',
                MIN_LENGTH_VALIDATOR: 'Your name is too short.',
                DATE_REQUIRED: 'Date is required.',
                DATE_VALIDATOR: 'Check you date, please. Date format is {{dateformat}}',
                AGE_REQUIRED: 'Age is required.',
                AGE_VALIDATOR: 'Age should be in {{min}}...{{max}} range',
                AGE_INT_VALIDATOR: 'Age should be a number',
                BIO_REQUIRED: 'Biography is required.',
                BIO_VALIDATOR: 'Your bio is too short.'
            }
        },
        DELETE: {
            TITLE: 'User Delete Confirm',
            MESSAGE: 'Are you really want to remove this user from database?',
            BUTTON_OK: 'Please do it!',
            BUTTON_CANCEL: 'No, I changed my mind'
        }
    }
};
