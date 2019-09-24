let glossary = new Map();
glossary.set('the'," <span class='tooltip'>the<span class='tooltipcontent'>This is a test to check if this extension works and shows this content as a  tooltip.</span></span> ");
glossary.set('un', " <span class='tooltip'>him<span class='tooltipcontent'>This is a test to check if this extension works and shows this content as a tooltip.</span></span> ");
glossary.set('vous', "<span class='tooltip'>she<span class='tooltipcontent'>This is a test to check if this extension works and shows this content as a tooltip.</span></span> ");
glossary.set('it', " <span class='tooltip'>it<span class='tooltipcontent'>This is a test to check if this extension works and shows this content as a tooltip.</span></span> ");
glossary.set('le', " <span class='tooltip'>le<span class='tooltipcontent'>This is a test to check if this extension works and shows this content as a tooltip.</span></span> ");
glossary.set('la', " <span class='tooltip'>la<span class='tooltipcontent'>This is a test to check if this extension works and shows this content as a tooltip.</span></span> ");
glossary.set('un', " <span class='tooltip'>not<span class='tooltipcontent'>This is a test to check if this extension works and shows this content as a tooltip.</span></span> ");
glossary.set('it', " <span class='tooltip'>le<span class='tooltipcontent'>This is a test to check if this extension works and shows this content as a tooltip.</span></span> ");
glossary.set('a', " <span class='tooltip'>la<span class='tooltipcontent'>This is a test to check if this extension works and shows this content as a tooltip.</span></span> ");
glossary.set('to', " <span class='tooltip'>not<span class='tooltipcontent'>This is a test to check if this extension works and shows this content as a tooltip.</span></span> ");



let rgx = new Map();
for(let word of glossary.keys()){
  let r = "\\W+("+word+")\\W+";
  rgx.set(word, new RegExp(r, 'gi'));
}
console.log(rgx);
