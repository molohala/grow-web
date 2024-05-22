class PatternCheck {
    public idCheck = (item: string) =>  /^[a-z]+[a-z0-9]{4,20}$/.test(item);
    public pwCheck = (value: string) => /^[a-zA-Z0-9!@#$%^*+=-]{7,20}$/.test(value);
}

export default new PatternCheck();