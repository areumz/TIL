// 배포용 testManager 파일

class TextManager {
    constructor() {
        this.value = {data: 'hello Mark!'};
    }

    getValue() {
        return this.value.data;
    }

    setValue(newValue) {
        this.value = newValue
    }
}
