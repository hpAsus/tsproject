export const ProfileRu: IApp.ILanguage = {
    PROFILE: {
        TITLE: 'Профиль пользователя',
        VIEWTAB: 'Ваш профиль',
        EDITTAB: 'Редактировать',
        LABELS: {
            LOGIN_LABEL: 'Логин (E-mail)',
            NAME_LABEL: 'Имя на сайте',
            BIRTHDATE_LABEL: 'Дата рождения',
            AGE_LABEL: 'Возраст на сайте',
            BIO_LABEL: 'Биография'
        },
        EDIT: {
            SAVE_PROFILE_BUTTON: 'Сохранить профиль'
        },
        ERRORS: {
            NAME_REQUIRED: 'Имя обязательное поле.',
            NAME_VALIDATOR: 'Можно использовать только буквы. Имя должно начинаться с заглавной буквы',
            NAME_WORDS_VALIDATOR: 'В имени может быть не больше {{maxWords}} слов.',
            MIN_LENGTH_VALIDATOR: 'Слишком короткое имя.',
            DATE_REQUIRED: 'Дата обязательна',
            DATE_VALIDATOR: 'Проверьте дату, формат {{dateformat}}',
            AGE_REQUIRED: 'Возраст обязателен',
            AGE_VALIDATOR: 'Возраст должен быть в диапазоне {{min}}...{{max}} лет',
            AGE_INT_VALIDATOR: 'Возраст должен быть числом',
            BIO_REQUIRED: 'Биография обязательна',
            BIO_VALIDATOR: 'Слишком короткая биография.'
        }
    }
};
