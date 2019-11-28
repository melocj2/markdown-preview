import React from 'react';
import './App.css';
import marked from 'marked';


marked.setOptions({
  breaks: true,
});


function Preview(props) {
  return (
      <div id="preview" dangerouslySetInnerHTML={{__html: marked(props.trans, { sanitize: true })}} >
    </div>
  );
}

function Editor(props) {
  return (
    <div>
      <textarea id="editor" value={props.input} onChange={props.change}/>
    </div>
  );
}

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: "",
      trans: ""
    }
  this.handleChange = this.handleChange.bind(this)
  }

  helper = `# This is my markdown preview!

  ## For what it's worth, I admit to mostly copying the format of the example, however, if you look at my code, it is COMPLETELY different...
  ### I did very much enjoy my first project invovling parsing data in one form or another :) ! 
    
  Check it out, code: \`<div></div>\`
  
  \`\`\`
  // more code:
  
  function everybodyDanceNow() {
    
      console.log("everybody dance");
    }
  }
  \`\`\`
    
  **bold**
  _italic_
  **_both!_**
  ~~crossing stuff out~~.
  
  [links](https://www.freecodecamp.com)
  > Block Quotes
  
  tables:
  
  Header1 | Header2 | Header3
  ------- | ------- | ------ 
  content | conten  | content
  
  - lists.
    - bulleted.
       - With different indentation levels.
          - wowsers.
  
  
  1. numbererd lists too.
  1. heeeey
  1. I don't like writing my own filler text...
  - does this mean I'm lazy?
  * well, here's an image:
  
  ![React Logo w/ Text](https://goo.gl/Umyytc)
  `


  componentWillMount() {
    this.setState({
      input: this.helper,
      trans: this.helper
    })
  }
  handleChange(event) {
    this.setState({
      input: event.target.value,
      trans: event.target.value
    })
  }

  render () {
  return (
    <div className="App">
        <Editor input={this.state.input} change={this.handleChange}/>
        <Preview trans={this.state.trans}/>
    </div>
  );
}
}

export default App;
