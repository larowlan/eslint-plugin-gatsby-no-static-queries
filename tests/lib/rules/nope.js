/**
 * @fileoverview Say no to static queries™
 * @author Lee Rowlands
 */
"use strict";

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

const rule = require("../../../lib/rules/nope"),

    RuleTester = require("eslint").RuleTester;


//------------------------------------------------------------------------------
// Tests
//------------------------------------------------------------------------------
const parserOptions = {
    ecmaVersion: 2018,
    sourceType: 'module',
    ecmaFeatures: {
        jsx: true
    }
}
const ruleTester = new RuleTester({ parserOptions});
ruleTester.run("nope", rule, {

    valid: [

        // give me some code that won't trigger a warning
    ],

    invalid: [
        {
            code: `
            data = gatsby.useStaticQuery();
            `,
            errors: [{
                message: "Don't use useStaticQuery, instead move your query into the page level query.",
                type: "MemberExpression"
            }]
        },
        {
            code: `
            data = useStaticQuery();
            `,
            errors: [{
                message: "Don't use useStaticQuery, instead move your query into the page level query.",
                type: "CallExpression"
            }]
        }
    ]
});
