"use strict";
exports.id = 7735;
exports.ids = [7735,6270];
exports.modules = {

/***/ 67735:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ sparql)
/* harmony export */ });
/* harmony import */ var _turtle_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(76270);


const lang = Object.freeze({ "name": "sparql", "scopeName": "source.sparql", "fileTypes": ["rq", "sparql", "sq"], "patterns": [{ "include": "source.turtle" }, { "include": "#query-keyword-operators" }, { "include": "#functions" }, { "include": "#variables" }, { "include": "#expression-operators" }], "repository": { "query-keyword-operators": { "name": "keyword.control.sparql", "match": "\\b(?i:define|select|distinct|reduced|from|named|construct|ask|describe|where|graph|having|bind|as|filter|optional|union|order|by|group|limit|offset|values|insert data|delete data|with|delete|insert|clear|silent|default|all|create|drop|copy|move|add|to|using|service|not exists|exists|not in|in|minus|load)\\b" }, "functions": { "name": "support.function.sparql", "match": "\\b(?i:concat|regex|asc|desc|bound|isiri|isuri|isblank|isliteral|isnumeric|str|lang|datatype|sameterm|langmatches|avg|count|group_concat|separator|max|min|sample|sum|iri|uri|bnode|strdt|uuid|struuid|strlang|strlen|substr|ucase|lcase|strstarts|strends|contains|strbefore|strafter|encode_for_uri|replace|abs|round|ceil|floor|rand|now|year|month|day|hours|minutes|seconds|timezone|tz|md5|sha1|sha256|sha384|sha512|coalesce|if)\\b" }, "variables": { "name": "constant.variable.sparql.turtle", "match": "(?<!\\w)[?$]\\w+" }, "expression-operators": { "name": "support.class.sparql", "match": "(?:\\|\\||&&|=|!=|<|>|<=|>=|\\*|/|\\+|-|\\||\\^|\\?|\\!)" } }, "displayName": "SPARQL", "embeddedLangs": ["turtle"] });
var sparql = [
  ..._turtle_mjs__WEBPACK_IMPORTED_MODULE_0__["default"],
  lang
];




/***/ }),

/***/ 76270:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ turtle)
/* harmony export */ });
const lang = Object.freeze({ "name": "turtle", "scopeName": "source.turtle", "fileTypes": ["turtle", "ttl", "acl"], "patterns": [{ "include": "#rule-constraint" }, { "include": "#iriref" }, { "include": "#prefix" }, { "include": "#prefixed-name" }, { "include": "#comment" }, { "include": "#special-predicate" }, { "include": "#literals" }, { "include": "#language-tag" }], "uuid": "230498230498sdfkj8909-34df-23dfs", "repository": { "prefix": { "name": "keyword.operator.turtle", "match": "(?i:@?base|@?prefix)\\s" }, "iriref": { "name": "entity.name.type.iriref.turtle", "match": '<[^\\x20-\\x20<>"{}|^`\\\\]*>' }, "prefixed-name": { "name": "constant.complex.turtle", "match": "(\\w*:)(\\w*)", "captures": { "1": { "name": "storage.type.PNAME_NS.turtle" }, "2": { "name": "support.variable.PN_LOCAL.turtle" } } }, "comment": { "name": "comment.line.number-sign.turtle", "match": "#.*$" }, "special-predicate": { "name": "meta.specialPredicate.turtle", "match": "\\s(a)\\s", "captures": { "1": { "name": "keyword.control.turtle" } } }, "literals": { "patterns": [{ "include": "#string" }, { "include": "#numeric" }, { "include": "#boolean" }] }, "string": { "patterns": [{ "include": "#triple-squote-string-literal" }, { "include": "#triple-dquote-string-literal" }, { "include": "#single-squote-string-literal" }, { "include": "#single-dquote-string-literal" }, { "include": "#triple-tick-string-literal" }] }, "single-squote-string-literal": { "name": "string.quoted.single.turtle", "begin": "'", "beginCaptures": { "0": { "name": "punctuation.definition.string.begin.turtle" } }, "end": "'", "endCaptures": { "1": { "name": "punctuation.definition.string.end.turtle" }, "2": { "name": "invalid.illegal.newline.turtle" } }, "patterns": [{ "include": "#string-character-escape" }] }, "single-dquote-string-literal": { "name": "string.quoted.double.turtle", "begin": '"', "beginCaptures": { "0": { "name": "punctuation.definition.string.begin.turtle" } }, "end": '"', "endCaptures": { "0": { "name": "punctuation.definition.string.end.turtle" } }, "patterns": [{ "include": "#string-character-escape" }] }, "triple-squote-string-literal": { "name": "string.quoted.triple.turtle", "begin": "'''", "end": "'''", "beginCaptures": { "0": { "name": "punctuation.definition.string.begin.turtle" } }, "endCaptures": { "0": { "name": "punctuation.definition.string.end.turtle" } }, "patterns": [{ "include": "#string-character-escape" }] }, "triple-dquote-string-literal": { "name": "string.quoted.triple.turtle", "begin": '"""', "end": '"""', "beginCaptures": { "0": { "name": "punctuation.definition.string.begin.turtle" } }, "endCaptures": { "0": { "name": "punctuation.definition.string.end.turtle" } }, "patterns": [{ "include": "#string-character-escape" }] }, "triple-tick-string-literal": { "name": "string.quoted.triple.turtle", "begin": "```", "end": "```", "beginCaptures": { "0": { "name": "punctuation.definition.string.begin.turtle" } }, "endCaptures": { "0": { "name": "punctuation.definition.string.end.turtle" } }, "patterns": [{ "include": "#string-character-escape" }] }, "string-character-escape": { "name": "constant.character.escape.turtle", "match": "\\\\(x\\h{2}|[0-2][0-7]{0,2}|3[0-6][0-7]?|37[0-7]?|[4-7][0-7]?|.|$)" }, "numeric": { "patterns": [{ "include": "#integer" }] }, "integer": { "name": "constant.numeric.turtle", "match": "[+-]?(?:\\d+|[0-9]+\\.[0-9]*|\\.[0-9]+(?:[eE][+-]?\\d+)?)" }, "boolean": { "name": "constant.language.sparql", "match": "\\b(?i:true|false)\\b" }, "language-tag": { "name": "meta.string-literal-language-tag.turtle", "match": "@(\\w+)", "captures": { "1": { "name": "entity.name.class.turtle" } } }, "rule-constraint": { "name": "meta.rule-constraint.turtle", "begin": '(rule:content) (""")', "beginCaptures": { "1": { "patterns": [{ "include": "#prefixed-name" }] }, "2": { "name": "string.quoted.triple.turtle" } }, "end": '"""', "endCaptures": { "0": { "name": "string.quoted.triple.turtle" } }, "patterns": [{ "include": "source.srs" }] } }, "displayName": "Turtle" });
var turtle = [
  lang
];




/***/ })

};
;