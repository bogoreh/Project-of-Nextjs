(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/data/countries.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "countries",
    ()=>countries
]);
const countries = [
    {
        id: 1,
        name: 'United States',
        rank: 1,
        population: 331,
        continent: 'North America',
        gdp: 25462
    },
    {
        id: 2,
        name: 'China',
        rank: 2,
        population: 1441,
        continent: 'Asia',
        gdp: 17963
    },
    {
        id: 3,
        name: 'Japan',
        rank: 3,
        population: 126,
        continent: 'Asia',
        gdp: 4250
    },
    {
        id: 4,
        name: 'Germany',
        rank: 4,
        population: 83,
        continent: 'Europe',
        gdp: 4082
    },
    {
        id: 5,
        name: 'India',
        rank: 5,
        population: 1380,
        continent: 'Asia',
        gdp: 3390
    },
    {
        id: 6,
        name: 'United Kingdom',
        rank: 6,
        population: 67,
        continent: 'Europe',
        gdp: 3187
    },
    {
        id: 7,
        name: 'France',
        rank: 7,
        population: 65,
        continent: 'Europe',
        gdp: 2937
    },
    {
        id: 8,
        name: 'Brazil',
        rank: 8,
        population: 213,
        continent: 'South America',
        gdp: 1839
    },
    {
        id: 9,
        name: 'Italy',
        rank: 9,
        population: 60,
        continent: 'Europe',
        gdp: 2058
    },
    {
        id: 10,
        name: 'Canada',
        rank: 10,
        population: 38,
        continent: 'North America',
        gdp: 2041
    }
];
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/CountryTable.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>CountryTable
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
'use client';
;
;
function CountryTable(t0) {
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(43);
    if ($[0] !== "ad21be47026f94ff3e40bd7e9c11c3c29cae1dc9c106b45e53e11b288ccf4fd8") {
        for(let $i = 0; $i < 43; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "ad21be47026f94ff3e40bd7e9c11c3c29cae1dc9c106b45e53e11b288ccf4fd8";
    }
    const { countries, sortField, sortDirection, onSort } = t0;
    let t1;
    if ($[1] !== sortDirection || $[2] !== sortField) {
        t1 = ({
            "CountryTable[getSortIcon]": (field)=>{
                if (sortField !== field) {
                    return "\u2195\uFE0F";
                }
                return sortDirection === "asc" ? "\u2191" : "\u2193";
            }
        })["CountryTable[getSortIcon]"];
        $[1] = sortDirection;
        $[2] = sortField;
        $[3] = t1;
    } else {
        t1 = $[3];
    }
    const getSortIcon = t1;
    const formatNumber = _CountryTableFormatNumber;
    let t2;
    if ($[4] !== onSort) {
        t2 = ({
            "CountryTable[<th>.onClick]": ()=>onSort("rank")
        })["CountryTable[<th>.onClick]"];
        $[4] = onSort;
        $[5] = t2;
    } else {
        t2 = $[5];
    }
    const t3 = getSortIcon("rank");
    let t4;
    if ($[6] !== t2 || $[7] !== t3) {
        t4 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
            className: "px-6 py-3 border-b border-gray-200 text-left text-xs font-medium text-gray-500 uppercase tracking-wider cursor-pointer hover:bg-gray-100",
            onClick: t2,
            children: [
                "Rank ",
                t3
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/CountryTable.tsx",
            lineNumber: 56,
            columnNumber: 10
        }, this);
        $[6] = t2;
        $[7] = t3;
        $[8] = t4;
    } else {
        t4 = $[8];
    }
    let t5;
    if ($[9] !== onSort) {
        t5 = ({
            "CountryTable[<th>.onClick]": ()=>onSort("name")
        })["CountryTable[<th>.onClick]"];
        $[9] = onSort;
        $[10] = t5;
    } else {
        t5 = $[10];
    }
    const t6 = getSortIcon("name");
    let t7;
    if ($[11] !== t5 || $[12] !== t6) {
        t7 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
            className: "px-6 py-3 border-b border-gray-200 text-left text-xs font-medium text-gray-500 uppercase tracking-wider cursor-pointer hover:bg-gray-100",
            onClick: t5,
            children: [
                "Country ",
                t6
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/CountryTable.tsx",
            lineNumber: 76,
            columnNumber: 10
        }, this);
        $[11] = t5;
        $[12] = t6;
        $[13] = t7;
    } else {
        t7 = $[13];
    }
    let t8;
    if ($[14] !== onSort) {
        t8 = ({
            "CountryTable[<th>.onClick]": ()=>onSort("continent")
        })["CountryTable[<th>.onClick]"];
        $[14] = onSort;
        $[15] = t8;
    } else {
        t8 = $[15];
    }
    const t9 = getSortIcon("continent");
    let t10;
    if ($[16] !== t8 || $[17] !== t9) {
        t10 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
            className: "px-6 py-3 border-b border-gray-200 text-left text-xs font-medium text-gray-500 uppercase tracking-wider cursor-pointer hover:bg-gray-100",
            onClick: t8,
            children: [
                "Continent ",
                t9
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/CountryTable.tsx",
            lineNumber: 96,
            columnNumber: 11
        }, this);
        $[16] = t8;
        $[17] = t9;
        $[18] = t10;
    } else {
        t10 = $[18];
    }
    let t11;
    if ($[19] !== onSort) {
        t11 = ({
            "CountryTable[<th>.onClick]": ()=>onSort("population")
        })["CountryTable[<th>.onClick]"];
        $[19] = onSort;
        $[20] = t11;
    } else {
        t11 = $[20];
    }
    const t12 = getSortIcon("population");
    let t13;
    if ($[21] !== t11 || $[22] !== t12) {
        t13 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
            className: "px-6 py-3 border-b border-gray-200 text-left text-xs font-medium text-gray-500 uppercase tracking-wider cursor-pointer hover:bg-gray-100",
            onClick: t11,
            children: [
                "Population (millions) ",
                t12
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/CountryTable.tsx",
            lineNumber: 116,
            columnNumber: 11
        }, this);
        $[21] = t11;
        $[22] = t12;
        $[23] = t13;
    } else {
        t13 = $[23];
    }
    let t14;
    if ($[24] !== onSort) {
        t14 = ({
            "CountryTable[<th>.onClick]": ()=>onSort("gdp")
        })["CountryTable[<th>.onClick]"];
        $[24] = onSort;
        $[25] = t14;
    } else {
        t14 = $[25];
    }
    const t15 = getSortIcon("gdp");
    let t16;
    if ($[26] !== t14 || $[27] !== t15) {
        t16 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
            className: "px-6 py-3 border-b border-gray-200 text-left text-xs font-medium text-gray-500 uppercase tracking-wider cursor-pointer hover:bg-gray-100",
            onClick: t14,
            children: [
                "GDP (Billions USD) ",
                t15
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/CountryTable.tsx",
            lineNumber: 136,
            columnNumber: 11
        }, this);
        $[26] = t14;
        $[27] = t15;
        $[28] = t16;
    } else {
        t16 = $[28];
    }
    let t17;
    if ($[29] !== t10 || $[30] !== t13 || $[31] !== t16 || $[32] !== t4 || $[33] !== t7) {
        t17 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("thead", {
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                className: "bg-gray-50",
                children: [
                    t4,
                    t7,
                    t10,
                    t13,
                    t16
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/CountryTable.tsx",
                lineNumber: 145,
                columnNumber: 18
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/components/CountryTable.tsx",
            lineNumber: 145,
            columnNumber: 11
        }, this);
        $[29] = t10;
        $[30] = t13;
        $[31] = t16;
        $[32] = t4;
        $[33] = t7;
        $[34] = t17;
    } else {
        t17 = $[34];
    }
    let t18;
    if ($[35] !== countries) {
        let t19;
        if ($[37] === Symbol.for("react.memo_cache_sentinel")) {
            t19 = ({
                "CountryTable[countries.map()]": (country)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                        className: "hover:bg-gray-50",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                className: "px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900",
                                children: country.rank
                            }, void 0, false, {
                                fileName: "[project]/src/components/CountryTable.tsx",
                                lineNumber: 160,
                                columnNumber: 103
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                className: "px-6 py-4 whitespace-nowrap text-sm text-gray-900",
                                children: country.name
                            }, void 0, false, {
                                fileName: "[project]/src/components/CountryTable.tsx",
                                lineNumber: 160,
                                columnNumber: 200
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                className: "px-6 py-4 whitespace-nowrap text-sm text-gray-900",
                                children: country.continent
                            }, void 0, false, {
                                fileName: "[project]/src/components/CountryTable.tsx",
                                lineNumber: 160,
                                columnNumber: 285
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                className: "px-6 py-4 whitespace-nowrap text-sm text-gray-900",
                                children: formatNumber(country.population)
                            }, void 0, false, {
                                fileName: "[project]/src/components/CountryTable.tsx",
                                lineNumber: 160,
                                columnNumber: 375
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                className: "px-6 py-4 whitespace-nowrap text-sm text-gray-900",
                                children: [
                                    "$",
                                    formatNumber(country.gdp)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/CountryTable.tsx",
                                lineNumber: 160,
                                columnNumber: 480
                            }, this)
                        ]
                    }, country.id, true, {
                        fileName: "[project]/src/components/CountryTable.tsx",
                        lineNumber: 160,
                        columnNumber: 53
                    }, this)
            })["CountryTable[countries.map()]"];
            $[37] = t19;
        } else {
            t19 = $[37];
        }
        t18 = countries.map(t19);
        $[35] = countries;
        $[36] = t18;
    } else {
        t18 = $[36];
    }
    let t19;
    if ($[38] !== t18) {
        t19 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tbody", {
            className: "divide-y divide-gray-200",
            children: t18
        }, void 0, false, {
            fileName: "[project]/src/components/CountryTable.tsx",
            lineNumber: 174,
            columnNumber: 11
        }, this);
        $[38] = t18;
        $[39] = t19;
    } else {
        t19 = $[39];
    }
    let t20;
    if ($[40] !== t17 || $[41] !== t19) {
        t20 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "overflow-x-auto",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("table", {
                className: "min-w-full bg-white border border-gray-200",
                children: [
                    t17,
                    t19
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/CountryTable.tsx",
                lineNumber: 182,
                columnNumber: 44
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/components/CountryTable.tsx",
            lineNumber: 182,
            columnNumber: 11
        }, this);
        $[40] = t17;
        $[41] = t19;
        $[42] = t20;
    } else {
        t20 = $[42];
    }
    return t20;
}
_c = CountryTable;
function _CountryTableFormatNumber(num) {
    return num.toLocaleString();
}
var _c;
__turbopack_context__.k.register(_c, "CountryTable");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/SearchBar.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>SearchBar
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
'use client';
;
;
function SearchBar(t0) {
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(6);
    if ($[0] !== "566445d05de63db1a1a9d728cf50fb30c2c3e799020cf5621a881e6fa940e9f0") {
        for(let $i = 0; $i < 6; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "566445d05de63db1a1a9d728cf50fb30c2c3e799020cf5621a881e6fa940e9f0";
    }
    const { searchTerm, onSearchChange } = t0;
    let t1;
    if ($[1] !== onSearchChange) {
        t1 = ({
            "SearchBar[<input>.onChange]": (e)=>onSearchChange(e.target.value)
        })["SearchBar[<input>.onChange]"];
        $[1] = onSearchChange;
        $[2] = t1;
    } else {
        t1 = $[2];
    }
    let t2;
    if ($[3] !== searchTerm || $[4] !== t1) {
        t2 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "mb-4",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                type: "text",
                placeholder: "Search countries...",
                value: searchTerm,
                onChange: t1,
                className: "w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            }, void 0, false, {
                fileName: "[project]/src/components/SearchBar.tsx",
                lineNumber: 32,
                columnNumber: 32
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/components/SearchBar.tsx",
            lineNumber: 32,
            columnNumber: 10
        }, this);
        $[3] = searchTerm;
        $[4] = t1;
        $[5] = t2;
    } else {
        t2 = $[5];
    }
    return t2;
}
_c = SearchBar;
var _c;
__turbopack_context__.k.register(_c, "SearchBar");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/app/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Home
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$countries$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/data/countries.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$CountryTable$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/CountryTable.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$SearchBar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/SearchBar.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
;
function Home() {
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(27);
    if ($[0] !== "21cead12a5f8fcbf5250af61c771f9a465acd65c1536f9a88ebcef24d5baa388") {
        for(let $i = 0; $i < 27; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "21cead12a5f8fcbf5250af61c771f9a465acd65c1536f9a88ebcef24d5baa388";
    }
    const [searchTerm, setSearchTerm] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [sortField, setSortField] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("rank");
    const [sortDirection, setSortDirection] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("asc");
    let filtered;
    if ($[1] !== searchTerm || $[2] !== sortDirection || $[3] !== sortField) {
        let t0;
        if ($[5] !== searchTerm) {
            t0 = ({
                "Home[countries.filter()]": (country)=>country.name.toLowerCase().includes(searchTerm.toLowerCase()) || country.continent.toLowerCase().includes(searchTerm.toLowerCase())
            })["Home[countries.filter()]"];
            $[5] = searchTerm;
            $[6] = t0;
        } else {
            t0 = $[6];
        }
        filtered = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$countries$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["countries"].filter(t0);
        let t1;
        if ($[7] !== sortDirection || $[8] !== sortField) {
            t1 = ({
                "Home[filtered.sort()]": (a, b)=>{
                    let aValue = a[sortField];
                    let bValue = b[sortField];
                    if (typeof aValue === "string") {
                        aValue = aValue.toLowerCase();
                        bValue = bValue.toLowerCase();
                    }
                    if (aValue < bValue) {
                        return sortDirection === "asc" ? -1 : 1;
                    }
                    if (aValue > bValue) {
                        return sortDirection === "asc" ? 1 : -1;
                    }
                    return 0;
                }
            })["Home[filtered.sort()]"];
            $[7] = sortDirection;
            $[8] = sortField;
            $[9] = t1;
        } else {
            t1 = $[9];
        }
        filtered.sort(t1);
        $[1] = searchTerm;
        $[2] = sortDirection;
        $[3] = sortField;
        $[4] = filtered;
    } else {
        filtered = $[4];
    }
    const filteredAndSortedCountries = filtered;
    let t0;
    if ($[10] !== sortDirection || $[11] !== sortField) {
        t0 = ({
            "Home[handleSort]": (field)=>{
                if (sortField === field) {
                    setSortDirection(sortDirection === "asc" ? "desc" : "asc");
                } else {
                    setSortField(field);
                    setSortDirection("asc");
                }
            }
        })["Home[handleSort]"];
        $[10] = sortDirection;
        $[11] = sortField;
        $[12] = t0;
    } else {
        t0 = $[12];
    }
    const handleSort = t0;
    let t1;
    if ($[13] === Symbol.for("react.memo_cache_sentinel")) {
        t1 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "text-center mb-8",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                    className: "text-3xl font-bold text-gray-900 mb-2",
                    children: "Country Rankings"
                }, void 0, false, {
                    fileName: "[project]/src/app/page.tsx",
                    lineNumber: 88,
                    columnNumber: 44
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-gray-600",
                    children: "Sort and search through country data by various metrics"
                }, void 0, false, {
                    fileName: "[project]/src/app/page.tsx",
                    lineNumber: 88,
                    columnNumber: 119
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/page.tsx",
            lineNumber: 88,
            columnNumber: 10
        }, this);
        $[13] = t1;
    } else {
        t1 = $[13];
    }
    let t2;
    if ($[14] !== searchTerm) {
        t2 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$SearchBar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
            searchTerm: searchTerm,
            onSearchChange: setSearchTerm
        }, void 0, false, {
            fileName: "[project]/src/app/page.tsx",
            lineNumber: 95,
            columnNumber: 10
        }, this);
        $[14] = searchTerm;
        $[15] = t2;
    } else {
        t2 = $[15];
    }
    let t3;
    if ($[16] !== filteredAndSortedCountries || $[17] !== handleSort || $[18] !== sortDirection || $[19] !== sortField) {
        t3 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$CountryTable$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
            countries: filteredAndSortedCountries,
            sortField: sortField,
            sortDirection: sortDirection,
            onSort: handleSort
        }, void 0, false, {
            fileName: "[project]/src/app/page.tsx",
            lineNumber: 103,
            columnNumber: 10
        }, this);
        $[16] = filteredAndSortedCountries;
        $[17] = handleSort;
        $[18] = sortDirection;
        $[19] = sortField;
        $[20] = t3;
    } else {
        t3 = $[20];
    }
    let t4;
    if ($[21] !== filteredAndSortedCountries.length) {
        t4 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "mt-4 text-sm text-gray-500",
            children: [
                "Showing ",
                filteredAndSortedCountries.length,
                " of ",
                __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$countries$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["countries"].length,
                " countries"
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/page.tsx",
            lineNumber: 114,
            columnNumber: 10
        }, this);
        $[21] = filteredAndSortedCountries.length;
        $[22] = t4;
    } else {
        t4 = $[22];
    }
    let t5;
    if ($[23] !== t2 || $[24] !== t3 || $[25] !== t4) {
        t5 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "min-h-screen bg-gray-50 py-8",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",
                children: [
                    t1,
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "bg-white rounded-lg shadow p-6",
                        children: [
                            t2,
                            t3,
                            t4
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/page.tsx",
                        lineNumber: 122,
                        columnNumber: 116
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/page.tsx",
                lineNumber: 122,
                columnNumber: 56
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/app/page.tsx",
            lineNumber: 122,
            columnNumber: 10
        }, this);
        $[23] = t2;
        $[24] = t3;
        $[25] = t4;
        $[26] = t5;
    } else {
        t5 = $[26];
    }
    return t5;
}
_s(Home, "TtM38Aj4KUSaPSaAL/FIvEk2jZc=");
_c = Home;
var _c;
__turbopack_context__.k.register(_c, "Home");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/node_modules/next/dist/compiled/react/cjs/react-jsx-dev-runtime.development.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

/**
 * @license React
 * react-jsx-dev-runtime.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
"use strict";
"production" !== ("TURBOPACK compile-time value", "development") && function() {
    function getComponentNameFromType(type) {
        if (null == type) return null;
        if ("function" === typeof type) return type.$$typeof === REACT_CLIENT_REFERENCE ? null : type.displayName || type.name || null;
        if ("string" === typeof type) return type;
        switch(type){
            case REACT_FRAGMENT_TYPE:
                return "Fragment";
            case REACT_PROFILER_TYPE:
                return "Profiler";
            case REACT_STRICT_MODE_TYPE:
                return "StrictMode";
            case REACT_SUSPENSE_TYPE:
                return "Suspense";
            case REACT_SUSPENSE_LIST_TYPE:
                return "SuspenseList";
            case REACT_ACTIVITY_TYPE:
                return "Activity";
            case REACT_VIEW_TRANSITION_TYPE:
                return "ViewTransition";
        }
        if ("object" === typeof type) switch("number" === typeof type.tag && console.error("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), type.$$typeof){
            case REACT_PORTAL_TYPE:
                return "Portal";
            case REACT_CONTEXT_TYPE:
                return type.displayName || "Context";
            case REACT_CONSUMER_TYPE:
                return (type._context.displayName || "Context") + ".Consumer";
            case REACT_FORWARD_REF_TYPE:
                var innerType = type.render;
                type = type.displayName;
                type || (type = innerType.displayName || innerType.name || "", type = "" !== type ? "ForwardRef(" + type + ")" : "ForwardRef");
                return type;
            case REACT_MEMO_TYPE:
                return innerType = type.displayName || null, null !== innerType ? innerType : getComponentNameFromType(type.type) || "Memo";
            case REACT_LAZY_TYPE:
                innerType = type._payload;
                type = type._init;
                try {
                    return getComponentNameFromType(type(innerType));
                } catch (x) {}
        }
        return null;
    }
    function testStringCoercion(value) {
        return "" + value;
    }
    function checkKeyStringCoercion(value) {
        try {
            testStringCoercion(value);
            var JSCompiler_inline_result = !1;
        } catch (e) {
            JSCompiler_inline_result = !0;
        }
        if (JSCompiler_inline_result) {
            JSCompiler_inline_result = console;
            var JSCompiler_temp_const = JSCompiler_inline_result.error;
            var JSCompiler_inline_result$jscomp$0 = "function" === typeof Symbol && Symbol.toStringTag && value[Symbol.toStringTag] || value.constructor.name || "Object";
            JSCompiler_temp_const.call(JSCompiler_inline_result, "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.", JSCompiler_inline_result$jscomp$0);
            return testStringCoercion(value);
        }
    }
    function getTaskName(type) {
        if (type === REACT_FRAGMENT_TYPE) return "<>";
        if ("object" === typeof type && null !== type && type.$$typeof === REACT_LAZY_TYPE) return "<...>";
        try {
            var name = getComponentNameFromType(type);
            return name ? "<" + name + ">" : "<...>";
        } catch (x) {
            return "<...>";
        }
    }
    function getOwner() {
        var dispatcher = ReactSharedInternals.A;
        return null === dispatcher ? null : dispatcher.getOwner();
    }
    function UnknownOwner() {
        return Error("react-stack-top-frame");
    }
    function hasValidKey(config) {
        if (hasOwnProperty.call(config, "key")) {
            var getter = Object.getOwnPropertyDescriptor(config, "key").get;
            if (getter && getter.isReactWarning) return !1;
        }
        return void 0 !== config.key;
    }
    function defineKeyPropWarningGetter(props, displayName) {
        function warnAboutAccessingKey() {
            specialPropKeyWarningShown || (specialPropKeyWarningShown = !0, console.error("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)", displayName));
        }
        warnAboutAccessingKey.isReactWarning = !0;
        Object.defineProperty(props, "key", {
            get: warnAboutAccessingKey,
            configurable: !0
        });
    }
    function elementRefGetterWithDeprecationWarning() {
        var componentName = getComponentNameFromType(this.type);
        didWarnAboutElementRef[componentName] || (didWarnAboutElementRef[componentName] = !0, console.error("Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."));
        componentName = this.props.ref;
        return void 0 !== componentName ? componentName : null;
    }
    function ReactElement(type, key, props, owner, debugStack, debugTask) {
        var refProp = props.ref;
        type = {
            $$typeof: REACT_ELEMENT_TYPE,
            type: type,
            key: key,
            props: props,
            _owner: owner
        };
        null !== (void 0 !== refProp ? refProp : null) ? Object.defineProperty(type, "ref", {
            enumerable: !1,
            get: elementRefGetterWithDeprecationWarning
        }) : Object.defineProperty(type, "ref", {
            enumerable: !1,
            value: null
        });
        type._store = {};
        Object.defineProperty(type._store, "validated", {
            configurable: !1,
            enumerable: !1,
            writable: !0,
            value: 0
        });
        Object.defineProperty(type, "_debugInfo", {
            configurable: !1,
            enumerable: !1,
            writable: !0,
            value: null
        });
        Object.defineProperty(type, "_debugStack", {
            configurable: !1,
            enumerable: !1,
            writable: !0,
            value: debugStack
        });
        Object.defineProperty(type, "_debugTask", {
            configurable: !1,
            enumerable: !1,
            writable: !0,
            value: debugTask
        });
        Object.freeze && (Object.freeze(type.props), Object.freeze(type));
        return type;
    }
    function jsxDEVImpl(type, config, maybeKey, isStaticChildren, debugStack, debugTask) {
        var children = config.children;
        if (void 0 !== children) if (isStaticChildren) if (isArrayImpl(children)) {
            for(isStaticChildren = 0; isStaticChildren < children.length; isStaticChildren++)validateChildKeys(children[isStaticChildren]);
            Object.freeze && Object.freeze(children);
        } else console.error("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
        else validateChildKeys(children);
        if (hasOwnProperty.call(config, "key")) {
            children = getComponentNameFromType(type);
            var keys = Object.keys(config).filter(function(k) {
                return "key" !== k;
            });
            isStaticChildren = 0 < keys.length ? "{key: someKey, " + keys.join(": ..., ") + ": ...}" : "{key: someKey}";
            didWarnAboutKeySpread[children + isStaticChildren] || (keys = 0 < keys.length ? "{" + keys.join(": ..., ") + ": ...}" : "{}", console.error('A props object containing a "key" prop is being spread into JSX:\n  let props = %s;\n  <%s {...props} />\nReact keys must be passed directly to JSX without using spread:\n  let props = %s;\n  <%s key={someKey} {...props} />', isStaticChildren, children, keys, children), didWarnAboutKeySpread[children + isStaticChildren] = !0);
        }
        children = null;
        void 0 !== maybeKey && (checkKeyStringCoercion(maybeKey), children = "" + maybeKey);
        hasValidKey(config) && (checkKeyStringCoercion(config.key), children = "" + config.key);
        if ("key" in config) {
            maybeKey = {};
            for(var propName in config)"key" !== propName && (maybeKey[propName] = config[propName]);
        } else maybeKey = config;
        children && defineKeyPropWarningGetter(maybeKey, "function" === typeof type ? type.displayName || type.name || "Unknown" : type);
        return ReactElement(type, children, maybeKey, getOwner(), debugStack, debugTask);
    }
    function validateChildKeys(node) {
        isValidElement(node) ? node._store && (node._store.validated = 1) : "object" === typeof node && null !== node && node.$$typeof === REACT_LAZY_TYPE && ("fulfilled" === node._payload.status ? isValidElement(node._payload.value) && node._payload.value._store && (node._payload.value._store.validated = 1) : node._store && (node._store.validated = 1));
    }
    function isValidElement(object) {
        return "object" === typeof object && null !== object && object.$$typeof === REACT_ELEMENT_TYPE;
    }
    var React = __turbopack_context__.r("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)"), REACT_ELEMENT_TYPE = Symbol.for("react.transitional.element"), REACT_PORTAL_TYPE = Symbol.for("react.portal"), REACT_FRAGMENT_TYPE = Symbol.for("react.fragment"), REACT_STRICT_MODE_TYPE = Symbol.for("react.strict_mode"), REACT_PROFILER_TYPE = Symbol.for("react.profiler"), REACT_CONSUMER_TYPE = Symbol.for("react.consumer"), REACT_CONTEXT_TYPE = Symbol.for("react.context"), REACT_FORWARD_REF_TYPE = Symbol.for("react.forward_ref"), REACT_SUSPENSE_TYPE = Symbol.for("react.suspense"), REACT_SUSPENSE_LIST_TYPE = Symbol.for("react.suspense_list"), REACT_MEMO_TYPE = Symbol.for("react.memo"), REACT_LAZY_TYPE = Symbol.for("react.lazy"), REACT_ACTIVITY_TYPE = Symbol.for("react.activity"), REACT_VIEW_TRANSITION_TYPE = Symbol.for("react.view_transition"), REACT_CLIENT_REFERENCE = Symbol.for("react.client.reference"), ReactSharedInternals = React.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, hasOwnProperty = Object.prototype.hasOwnProperty, isArrayImpl = Array.isArray, createTask = console.createTask ? console.createTask : function() {
        return null;
    };
    React = {
        react_stack_bottom_frame: function(callStackForError) {
            return callStackForError();
        }
    };
    var specialPropKeyWarningShown;
    var didWarnAboutElementRef = {};
    var unknownOwnerDebugStack = React.react_stack_bottom_frame.bind(React, UnknownOwner)();
    var unknownOwnerDebugTask = createTask(getTaskName(UnknownOwner));
    var didWarnAboutKeySpread = {};
    exports.Fragment = REACT_FRAGMENT_TYPE;
    exports.jsxDEV = function(type, config, maybeKey, isStaticChildren) {
        var trackActualOwner = 1e4 > ReactSharedInternals.recentlyCreatedOwnerStacks++;
        if (trackActualOwner) {
            var previousStackTraceLimit = Error.stackTraceLimit;
            Error.stackTraceLimit = 10;
            var debugStackDEV = Error("react-stack-top-frame");
            Error.stackTraceLimit = previousStackTraceLimit;
        } else debugStackDEV = unknownOwnerDebugStack;
        return jsxDEVImpl(type, config, maybeKey, isStaticChildren, debugStackDEV, trackActualOwner ? createTask(getTaskName(type)) : unknownOwnerDebugTask);
    };
}();
}),
"[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
'use strict';
if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
;
else {
    module.exports = __turbopack_context__.r("[project]/node_modules/next/dist/compiled/react/cjs/react-jsx-dev-runtime.development.js [app-client] (ecmascript)");
}
}),
"[project]/node_modules/next/dist/compiled/react/cjs/react-compiler-runtime.development.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

/**
 * @license React
 * react-compiler-runtime.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
"use strict";
"production" !== ("TURBOPACK compile-time value", "development") && function() {
    var ReactSharedInternals = __turbopack_context__.r("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)").__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
    exports.c = function(size) {
        var dispatcher = ReactSharedInternals.H;
        null === dispatcher && console.error("Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:\n1. You might have mismatching versions of React and the renderer (such as React DOM)\n2. You might be breaking the Rules of Hooks\n3. You might have more than one copy of React in the same app\nSee https://react.dev/link/invalid-hook-call for tips about how to debug and fix this problem.");
        return dispatcher.useMemoCache(size);
    };
}();
}),
"[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

/**
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
'use strict';
if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
;
else {
    module.exports = __turbopack_context__.r("[project]/node_modules/next/dist/compiled/react/cjs/react-compiler-runtime.development.js [app-client] (ecmascript)");
}
}),
]);

//# sourceMappingURL=_cd84019a._.js.map