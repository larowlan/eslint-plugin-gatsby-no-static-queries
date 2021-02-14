/**
 * @fileoverview Say no to static queries™
 * @author Lee Rowlands
 */
"use strict";

//------------------------------------------------------------------------------
// Rule Definition
//------------------------------------------------------------------------------

module.exports = {
    meta: {
        type: "problem",
        docs: {
            description: "Avoid using static queries",
            category: "Gatsby",
            recommended: true
        },
        fixable: null,
        schema: [
            // fill in your schema
        ]
    },

    create: function(context) {
        return {
            MemberExpression: (node) => {
                if (node.object.name === "gatsby" && node.property.name === 'useStaticQuery') {
                    context.report(node, "Don't use useStaticQuery, instead move your query into the page level query.");
                }
            },
            CallExpression: (node) => {
                if (node.callee.name === 'useStaticQuery') {
                    context.report(node, "Don't use useStaticQuery, instead move your query into the page level query.");
                }
            },
        };
    }
};
