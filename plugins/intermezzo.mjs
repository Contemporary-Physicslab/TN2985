/* Custom intermezzo admonition, based on documentation (see https://next.jupyterbook.org/plugins/directives-and-roles#create-a-custom-admonition). 
*   css file (custom.css) included in style folder. 
*/

const intermezzo = {
  name: "intermezzo",
  doc: "A custom admonition that uses a specific color.",
  arg: { type: String, doc: "The title of the admonition." },
  options: {
    collapsed: { type: Boolean, doc: "Whether to collapse the admonition." },
  },
  body: { type: String, doc: "The body of the directive." },
  run(data, vfile, ctx) {
    
    let title = data.arg.trim();
    let body = data.body.trim();

    // console.log("[intermezzo plugin] ", data.arg, data.body);
    // console.log("[intermezzo plugin] ", ctx.parseMyst(body));
    // console.log("[intermezzo plugin] ", ctx.parseMyst(body)["children"]);
    // console.log("[intermezzo plugin] ", ctx.parseMyst(body)["children"][0]);



    const admonition = {
        "type": "admonition",
        "kind": "",
        "class": "admonition-intermezzo",  //Add class (custom.css)
        "icon": false,
        "children": [
          
          {
            "type": "admonitionTitle",
            "class": "admonition-title-intermezzo", // This does not work! note to self: not all dirs take their classes to the output. 
            // The first ["children"][0] removes the MyST "tree" top-level node.
            // The second ["children"] removes an unnecessary top-level paragraph node.
            "children": ctx.parseMyst(`${title}`)["children"][0]["children"]
            
          },
          
          {
            "type": "paragraph",
            "children": ctx.parseMyst(body)["children"] 
          }
        ]
    }
    return [admonition];
  }
};



const plugin = {
  name: "intermezzo",
  directives: [intermezzo],
};



export default plugin;

