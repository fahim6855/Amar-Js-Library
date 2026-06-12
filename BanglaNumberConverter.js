function convertToBanglaNumerals(input) {
  // Map of English digits to Bangla digits (Index 0 = ০, Index 1 = ১, etc.)
  const banglaDigits = ['০', '১', '২', '৩', '৪', '৫', '৬', '৭', '৮', '৯'];
  
  // Convert input to string, split into characters, map them, and join back
  return String(input).replace(/[0-9]/g, (digit) => banglaDigits[digit]);
}

// --- Examples of usage ---
console.log(convertToBanglaNumerals(1234));       // Output: "১২৩৪"
console.log(convertToBanglaNumerals("1 2 3 4"));   // Output: "১ ২ ৩ ৪" (handles spaces/strings too)
console.log(convertToBanglaNumerals("Year 2026")); // Output: "Year ২০২৬"
