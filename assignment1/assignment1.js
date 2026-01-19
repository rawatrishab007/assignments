let searchQuery = " Learn JavaScript Functions Arrow IIFE ";

let cleanedQuery = searchQuery.trim();
console.log("Original Query Length:", searchQuery.length);
console.log("Cleaned Query:", cleanedQuery);
console.log("Cleaned Query Length:", cleanedQuery.length);

let lowerCaseQuery = cleanedQuery.toLowerCase();
let upperCaseQuery = cleanedQuery.toUpperCase();
console.log("Lowercase:", lowerCaseQuery);
console.log("Uppercase:", upperCaseQuery);

let jsStart = cleanedQuery.indexOf("JavaScript"); 
let jsEnd = jsStart + "JavaScript".length;

let jsSubstring = cleanedQuery.substring(jsStart, jsEnd);
let jsSlice = cleanedQuery.slice(jsStart, jsEnd);

console.log(" substring():", jsSubstring);
console.log("slice():", jsSlice);

console.log(" 'functions':", lowerCaseQuery.includes("functions"));
console.log(" 'arrow':", lowerCaseQuery.includes("arrow"));
console.log(" 'iife':", lowerCaseQuery.includes("iife"));

console.log("Character at index 6:", cleanedQuery.charAt(6));
console.log("ASCII value of first character:", cleanedQuery.charCodeAt(0));

let hasJavascript = lowerCaseQuery.includes("javascript");
console.log("Includes 'javascript' (case-insensitive):", hasJavascript);
