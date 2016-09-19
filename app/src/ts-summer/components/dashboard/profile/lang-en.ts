export const ProfileEn: IApp.ILanguage = {
    PROFILE: {
        TITLE: 'Profile page',
        VIEWTAB: 'Your profile',
        EDITTAB: 'Edit profile',
        LABELS: {
            LOGIN_LABEL: 'Login (E-mail)',
            NAME_LABEL: 'Display Name',
            BIRTHDATE_LABEL: 'Birth Date',
            AGE_LABEL: 'Display age',
            BIO_LABEL: 'Biography'
        },
        EDIT: {
            SAVE_PROFILE_BUTTON: 'Save profile'
        },
        ERRORS: {
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
    }
};
