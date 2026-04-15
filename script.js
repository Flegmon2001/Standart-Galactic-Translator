const map = {
    a: "ᔑ", b: "ʖ", c: "ᓵ", d: "↸", e: "ᒷ",
    f: "⎓", g: "⊣", h: "⍑", i: "╎", j: "⋮",
    k: "ꖌ", l: "ꖎ", m: "ᒲ", n: "リ", o: "𝙹",
    p: "!¡", q: "ᑑ", r: "∷", s: "ᓭ", t: "ℸ",
    u: "⚍", v: "⍊", w: "∴", x: "̇/", y: "||", z: "⨅"
};

function translate() {
    let text = document.getElementById("input").value.toLowerCase();
    let result = "";

    for (let char of text) {
        result += map[char] || char;
    }

    document.getElementById("output").innerText = result;
}
