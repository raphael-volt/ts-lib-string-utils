import * as chai from 'chai';
import * as sinon from 'sinon';
import * as mocha from 'mocha';

import { TsLibStringUtils } from "../src/ts-lib-string-utils";

const expect = chai.expect

const expectToBe = (value: any) => {
    return expect(value).to.be
}

const expectNotToBe = (value: any) => {
    return expect(value).not.to.be
}

const tslu = TsLibStringUtils

describe('TsLibStringUtils', () => {

    describe('Basic', () => {
        it("should return an empty string", () => {

            expect(tslu.latinize(undefined)).equals("")
            expect(tslu.latinize("")).equals("")

            expect(tslu.pascal(undefined)).equals("")
            expect(tslu.pascal("")).equals("")

            expect(tslu.kebab(undefined)).equals("")
            expect(tslu.kebab("")).equals("")

            expect(tslu.camel(undefined)).equals("")
            expect(tslu.camel("")).equals("")

            expect(tslu.camel("-")).equals("")
            expect(tslu.camel("- -")).equals("")
            expect(tslu.camel("_")).equals("")
            expect(tslu.camel("_ _")).equals("")
            expect(tslu.camel("!")).equals("")
            expect(tslu.camel("¶")).equals("")
            expect(tslu.camel("@")).equals("")
        })
    })

    describe('camelCase', () => {

        it('should transform', () => {

            expectToBe(tslu.camel("camel case"))
                .equals("camelCase")

            expectToBe(tslu.camel("çãmel casé"))
                .equals("camelCase")

            expectToBe(tslu.camel("camel-case"))
                .equals("camelCase")

            expectToBe(tslu.camel("çãmel_casé"))
                .equals("camelCase")

            expectToBe(tslu.camel("ts2-lib-string-utils"))
                .equals("ts2LibStringUtils")

            expectToBe(tslu.camel("ts-2-lib-string-utils"))
                .equals("ts2LibStringUtils")
        })

        it('should transform from PascalCase', () => {
            expectToBe(tslu.camel("TsLibStringUtils"))
                .equals("tsLibStringUtils")
            // should be tsLibUtils ?
            expectToBe(tslu.camel("TSLibStringUtils"))
                .equals("tSLibStringUtils")
        })

        it('should transform from kebab-case', () => {
            expectToBe(tslu.camel("ts-lib-string-utils"))
                .equals("tsLibStringUtils")
        })

        it('should transform from camelCase', () => {
            expectToBe(tslu.camel("tsLibStringUtils"))
                .equals("tsLibStringUtils")
        })

    })

    describe('kebab-case', () => {
        it('should transform', () => {
            expectToBe(tslu.kebab("ts lib string utils"))
                .equals("ts-lib-string-utils")
        })

        it('should transform from PascalCase', () => {
            expectToBe(tslu.kebab("TsLibStringUtils"))
                .equals("ts-lib-string-utils")
        })

        it('should transform from kebab-case', () => {
            expectToBe(tslu.kebab("ts-lib-string-utils"))
                .equals("ts-lib-string-utils")
        })

        it('should transform from camelCase', () => {
            expectToBe(tslu.kebab("tsLibStringUtils"))
                .equals("ts-lib-string-utils")
        })
    })

    describe('PascalCase', () => {

        it('should transform', () => {
            expectToBe(tslu.pascal("ts lib string utils"))
                .equals("TsLibStringUtils")
        })

        it('should transform from PascalCase', () => {
            expectToBe(tslu.pascal("TsLibStringUtils"))
                .equals("TsLibStringUtils")
        })

        it('should transform from kebab-case', () => {
            expectToBe(tslu.pascal("ts-lib-string-utils"))
                .equals("TsLibStringUtils")
        })

        it('should transform from camelCase', () => {
            expectToBe(tslu.pascal("tsLibStringUtils"))
                .equals("TsLibStringUtils")
        })
    })
})