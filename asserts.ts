class assert {
    notNull<T>(value: T | unknown):asserts value is T {
        if (value === null || value === undefined) {
            throw new Error("Value cannot be null or undefined");
        }
    }
    isString(value: string | unknown): asserts value is string {
        if (typeof value !== "string") {
            throw new Error("Value must be of type string!");
        }
    }
    isNumber(value: number | unknown): asserts value is number {
        if (typeof value !== "number") {
            throw new Error("Value must be of type number!");
        }
    }
    isBool(value: boolean | unknown): asserts value is boolean {
        if (typeof value !== "boolean") {
            throw new Error("Value must be of type boolean!");
        }
    }
    isEqual<T>(value1: T, value2: T): asserts value1 is T {
        if (value1 !== value2) {
            throw new Error("Values must be equal");
        }
    }
    Length<T>(value: T[] | string, target: number): asserts value is T[] {
        if (value.length >  target) {
            throw new Error("Value is too long");
        } else if (value.length < target) {
            throw new Error("Value is too short");
        }
    }
    isTrue(value: unknown): asserts value is boolean {
        if (value !== true) {
            throw new Error("Value is false");
        }
    }
    isNull(value: unknown): asserts value is null {
        if (typeof value !== null) {
            throw new Error("Value must be null");
        }
    }
    isUndefined(value: unknown): asserts value is undefined {
        if (typeof value !== "undefined") {
            throw new Error("Value must be undefined");
        }
    }
}
