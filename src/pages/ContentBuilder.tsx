import React from "react";

class CBProps {

}

class CBState {
  name: string = "";
}

class ContentBuilder extends React.Component<CBProps, CBState> {
  constructor(props: {} | Readonly<{}>) {
    super(props);
    this.state = { name: "Hello World" };
  }

  nameChange(e: React.ChangeEvent<HTMLInputElement>) {
    this.setState({ name: e.target.value });
  }

  render() {
    let result = `[
    {
        "title": "${this.state.name}",
        "icon": "transform",
        "category": "Operators",
      }
    ]`;

    return (
      <div className="App">
        <header className="App-header">
          <p>Content Builder.</p>

          <fieldset>
            <legend>Name</legend>
            <input
              type="text"
              value={this.state.name}
              onChange={(e) => this.nameChange(e)}
            ></input>
          </fieldset>

          <fieldset>
            <legend>Show content</legend>
            <textarea>asd</textarea>
          </fieldset>

          <fieldset>
            <legend>Result</legend>
            <code>{result}</code>
          </fieldset>
        </header>
      </div>
    );
  }
}

export default ContentBuilder;
