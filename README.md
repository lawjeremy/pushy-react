# Pushy React

A React friendly version of the fabulous pushy library by Christopher Yee

## Usage

```
import {
  Pushy,
  SubMenu,
  PushyMenuButton,
  MenuItem,
  PushyMenuProvider
} from "pushy-react";

function App() {
  return (
    <PushyMenuProvider>
      <div className="App">
        <header className="App-header">
          <PushyMenuButton />
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
          </p>
        </header>
        <Pushy>
          <div>
            <h1>Title</h1>
          </div>
          <MenuItem>
            <a href="http://google.com">Google</a>
          </MenuItem>
          <SubMenu title="Progressive" open={false}>
            <MenuItem>
              <a href="#">Tool</a>
            </MenuItem>
            <MenuItem>
              <a href="#">Rush</a>
            </MenuItem>
            <MenuItem>
              <a href="#">Yes</a>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
            </MenuItem>
          </SubMenu>

          <SubMenu title="Metal">
            <MenuItem>
              <a href="#">Black Sabbath</a>
            </MenuItem>
            <MenuItem>
              <a href="#">Metallica</a>
            </MenuItem>
            <SubMenu title="Thrash">
              <MenuItem>
                <a href="#">Anthrax</a>
              </MenuItem>
              <MenuItem>
                <a href="#">Slayer</a>
              </MenuItem>
            </SubMenu>
          </SubMenu>

          <MenuItem>
            <a href="#">Hello World</a>
          </MenuItem>
        </Pushy>
      </div>
    </PushyMenuProvider>
  );
}

export default App;
```

## Theming

Pushy and PushyMenuButton both take a theme prop which is an object of style overrides.

```
const theme = {
  pushy: {
    background: "purple",
    a: {
      color: "chucknorris",
      hover: {
        color: "#987898"
      }
    },
    menuButton: {
      color: "blue",
      background: "green"
    }
  }
};

<PushyMenuButton theme={theme}/>
<Pushy theme={theme}>
```
